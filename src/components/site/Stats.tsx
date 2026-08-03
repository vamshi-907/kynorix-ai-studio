import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Section, Reveal, Eyebrow } from "./primitives";

const pillars = [
  { label: "AI First", detail: "Artificial Intelligence" },
  { label: "Enterprise Ready", detail: "Enterprise Solutions" },
  { label: "Cloud Native", detail: "Scalable Infrastructure" },
  { label: "Future Ready", detail: "Global Vision" },
];

function Meter({ delay }: { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const start = performance.now() + delay * 1000;
    const tick = (t: number) => {
      const p = Math.min(1, Math.max(0, (t - start) / 1400));
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, delay]);

  return (
    <div ref={ref} className="mt-8">
      <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full"
          style={{ width: `${value}%`, background: "var(--gradient-electric)" }}
        />
      </div>
      <span className="mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
        <span className="size-1.5 rounded-full bg-accent animate-pulse-soft" />
        Active
      </span>
    </div>
  );
}


export function Stats() {
  return (
    <Section className="relative">
      <Reveal>
        <Eyebrow>What Defines Us</Eyebrow>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-3xl p-8"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {p.detail}
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-navy-deep">{p.label}</h3>
            <Meter delay={i * 0.12} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
