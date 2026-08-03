import { useMemo } from "react";
import { useQuality } from "@/hooks/use-quality";

type Node = { x: number; y: number; r: number };

function seeded(n: number) {
  const s = Math.sin(n) * 10000;
  return s - Math.floor(s);
}

export function NeuralField({ count = 26 }: { count?: number }) {
  const { density, reducedMotion } = useQuality();
  const resolved = Math.max(6, Math.round(count * density));
  const { nodes, links } = useMemo(() => {
    const nodes: Node[] = Array.from({ length: resolved }, (_, i) => ({
      x: Math.round((60 + seeded(i * 3.1) * 680) * 100) / 100,
      y: Math.round((60 + seeded(i * 7.7) * 680) * 100) / 100,
      r: Math.round((1.6 + seeded(i * 1.3) * 3.4) * 100) / 100,
    }));
    const links: [Node, Node][] = [];
    nodes.forEach((a, i) => {
      nodes.slice(i + 1).forEach((b) => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 190) links.push([a, b]);
      });
    });
    return { nodes, links };
  }, [resolved]);

  return (
    <svg
      viewBox="0 0 800 800"
      className={`size-full ${reducedMotion ? "" : "animate-spin-slow"}`}
      aria-hidden="true"
      style={{ transformOrigin: "50% 50%" }}
    >
      <g stroke="var(--electric)" strokeOpacity="0.22" strokeWidth="0.8">
        {links.map(([a, b], i) => (
          <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
        ))}
      </g>
      <g fill="var(--electric)">
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            className={reducedMotion ? undefined : "animate-pulse-soft"}
            style={{ animationDelay: `${(i % 7) * 0.4}s` }}
          />
        ))}
      </g>
    </svg>
  );
}

export function Particles({ count = 22 }: { count?: number }) {
  const { density, reducedMotion, tier } = useQuality();
  const resolved = tier === "low" ? 0 : Math.max(4, Math.round(count * density));
  const dots = useMemo(
    () =>
      Array.from({ length: resolved }, (_, i) => ({
        left: `${(seeded(i * 2.3) * 100).toFixed(2)}%`,
        top: `${(seeded(i * 5.9) * 100).toFixed(2)}%`,
        size: `${(3 + seeded(i * 9.1) * 6).toFixed(2)}px`,
        delay: `${(seeded(i * 4.4) * 8).toFixed(2)}s`,
        duration: `${(8 + seeded(i * 6.6) * 10).toFixed(2)}s`,
      })),
    [resolved],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className={`absolute rounded-full${reducedMotion ? "" : " animate-float"}`}
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            animationDelay: d.delay,
            animationDuration: d.duration,
            background: "radial-gradient(circle, var(--electric) 0%, transparent 70%)",
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}

export function LightBeams() {
  const { allowHeavyEffects, reducedMotion, tier } = useQuality();
  if (tier === "low") return null;
  const drift = reducedMotion ? "" : " animate-drift";
  const blurA = allowHeavyEffects ? "blur(60px)" : "blur(32px)";
  const blurB = allowHeavyEffects ? "blur(70px)" : "blur(36px)";
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className={`absolute -left-1/4 top-[-30%] h-[160%] w-[45%] rotate-12${drift}`}
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--electric-soft) 22%, transparent), transparent)",
          filter: blurA,
        }}
      />
      <div
        className={`absolute right-[-10%] top-[-20%] h-[150%] w-[35%] -rotate-6${drift}`}
        style={{
          animationDelay: "-8s",
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--electric) 14%, transparent), transparent)",
          filter: blurB,
        }}
      />
    </div>
  );
}
