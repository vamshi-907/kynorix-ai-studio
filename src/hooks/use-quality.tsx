import { useEffect, useState } from "react";

export type QualityTier = "high" | "medium" | "low";

export type QualityProfile = {
  tier: QualityTier;
  reducedMotion: boolean;
  /** Multiplier applied to particle / node counts. */
  density: number;
  /** Heavy blur + cursor glow layers are safe to run. */
  allowHeavyEffects: boolean;
  /** Smooth (inertial) scrolling is safe to run. */
  allowSmoothScroll: boolean;
};

const SSR_PROFILE: QualityProfile = {
  tier: "high",
  reducedMotion: false,
  density: 1,
  allowHeavyEffects: true,
  allowSmoothScroll: true,
};

function detectTier(): QualityTier {
  if (typeof window === "undefined") return "high";
  const nav = navigator as Navigator & { deviceMemory?: number };
  const memory = nav.deviceMemory ?? 8;
  const cores = navigator.hardwareConcurrency ?? 8;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const narrow = window.innerWidth < 768;

  if (memory <= 2 || cores <= 2) return "low";
  if (memory <= 4 || cores <= 4 || (coarse && narrow)) return "medium";
  return "high";
}

/**
 * Adaptive quality: probes the device once on the client, watches
 * prefers-reduced-motion, and downgrades again if the measured frame rate
 * during the first seconds of the session is poor.
 */
export function useQuality(): QualityProfile {
  const [tier, setTier] = useState<QualityTier>("high");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    setTier(detectTier());

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);

    // Frame-rate probe: sample ~2s, downgrade one step if we can't hold 45fps.
    let frames = 0;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      frames += 1;
      if (t - start < 2000) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const fps = (frames / (t - start)) * 1000;
      if (fps < 30) setTier("low");
      else if (fps < 45) setTier((prev) => (prev === "high" ? "medium" : prev));
    };
    raf = requestAnimationFrame(tick);

    return () => {
      mq.removeEventListener("change", sync);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!hydrated) return SSR_PROFILE;

  const effective: QualityTier = reducedMotion ? "low" : tier;

  return {
    tier: effective,
    reducedMotion,
    density: effective === "high" ? 1 : effective === "medium" ? 0.55 : 0.25,
    allowHeavyEffects: effective === "high" && !reducedMotion,
    allowSmoothScroll: effective !== "low" && !reducedMotion,
  };
}
