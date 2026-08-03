import { useEffect } from "react";
import { useQuality } from "@/hooks/use-quality";

export function SmoothScroll() {
  const { allowSmoothScroll, tier } = useQuality();

  useEffect(() => {
    if (!allowSmoothScroll) return;
    let raf = 0;
    let instance: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({
        duration: tier === "high" ? 1.15 : 0.85,
        smoothWheel: true,
        lerp: tier === "high" ? 0.09 : 0.14,
      });
      instance = lenis as unknown as { raf: (t: number) => void; destroy: () => void };
      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      instance?.destroy();
    };
  }, [allowSmoothScroll, tier]);

  return null;
}
