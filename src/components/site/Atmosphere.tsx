import { useMemo } from "react";

type Node = { x: number; y: number; r: number };

function seeded(n: number) {
  const s = Math.sin(n) * 10000;
  return s - Math.floor(s);
}

export function NeuralField({ count = 26 }: { count?: number }) {
  const { nodes, links } = useMemo(() => {
    const nodes: Node[] = Array.from({ length: count }, (_, i) => ({
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
  }, [count]);

  return (
    <svg
      viewBox="0 0 800 800"
      className="size-full animate-spin-slow"
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
            className="animate-pulse-soft"
            style={{ animationDelay: `${(i % 7) * 0.4}s` }}
          />
        ))}
      </g>
    </svg>
  );
}

export function Particles({ count = 22 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(seeded(i * 2.3) * 100).toFixed(2)}%`,
        top: `${(seeded(i * 5.9) * 100).toFixed(2)}%`,
        size: `${(3 + seeded(i * 9.1) * 6).toFixed(2)}px`,
        delay: `${(seeded(i * 4.4) * 8).toFixed(2)}s`,
        duration: `${(8 + seeded(i * 6.6) * 10).toFixed(2)}s`,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-float"
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
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -left-1/4 top-[-30%] h-[160%] w-[45%] rotate-12 animate-drift"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--electric-soft) 22%, transparent), transparent)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute right-[-10%] top-[-20%] h-[150%] w-[35%] -rotate-6 animate-drift"
        style={{
          animationDelay: "-8s",
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--electric) 14%, transparent), transparent)",
          filter: "blur(70px)",
        }}
      />
    </div>
  );
}
