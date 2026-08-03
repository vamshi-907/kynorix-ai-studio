import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    let raf = 0;
    let instance: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({ duration: 1.15, smoothWheel: true, lerp: 0.09 });
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
  }, []);

  return null;
}
