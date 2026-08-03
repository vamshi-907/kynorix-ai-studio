import { motion } from "motion/react";
import { Eyebrow, Reveal, Section } from "./primitives";

const locations = [
  { name: "India", x: 66, y: 52, primary: true },
  { name: "Dubai", x: 57, y: 49 },
  { name: "Singapore", x: 74, y: 60 },
  { name: "Europe", x: 47, y: 34 },
  { name: "USA", x: 22, y: 40 },
  { name: "Australia", x: 82, y: 76 },
];

const india = locations[0]!;

export function GlobalVision() {
  return (
    <Section id="global" className="relative overflow-hidden">
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <Reveal>
            <Eyebrow>Global Vision</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.03] text-navy-deep">
              Made in India. <br />
              <span className="text-gradient">Built for the World.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2">
              {locations.map((l) => (
                <span
                  key={l.name}
                  className="glass-panel rounded-full px-4 py-2 text-xs font-semibold text-navy-deep"
                >
                  {l.name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, color-mix(in oklab, var(--electric-soft) 40%, white), color-mix(in oklab, var(--electric) 16%, white) 60%, white)",
                boxShadow: "var(--shadow-lift)",
              }}
            />
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "80s" }}>
                <svg viewBox="0 0 100 100" className="size-full" aria-hidden="true">
                  {[18, 30, 42, 50, 58, 70, 82].map((y) => (
                    <ellipse
                      key={y}
                      cx="50"
                      cy="50"
                      rx="48"
                      ry={Math.max(4, 48 * Math.sin((y / 100) * Math.PI) - 6)}
                      fill="none"
                      stroke="var(--navy)"
                      strokeOpacity="0.12"
                      strokeWidth="0.3"
                      transform={`translate(0 ${y - 50})`}
                    />
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <ellipse
                      key={i}
                      cx="50"
                      cy="50"
                      rx={48 * Math.abs(Math.cos((i / 8) * Math.PI))}
                      ry="48"
                      fill="none"
                      stroke="var(--navy)"
                      strokeOpacity="0.1"
                      strokeWidth="0.3"
                    />
                  ))}
                </svg>
              </div>
            </div>

            <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
              {locations.slice(1).map((l, i) => (
                <motion.path
                  key={l.name}
                  d={`M ${india.x} ${india.y} Q ${(india.x + l.x) / 2} ${
                    Math.min(india.y, l.y) - 16
                  } ${l.x} ${l.y}`}
                  fill="none"
                  stroke="var(--electric)"
                  strokeOpacity="0.6"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.25, duration: 1.1, ease: "easeInOut" }}
                />
              ))}
            </svg>

            {locations.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: l.primary ? 0.2 : 0.6 + i * 0.25, duration: 0.6 }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${l.x}%`, top: `${l.y}%` }}
              >
                <span
                  className={`block rounded-full animate-pulse-soft ${
                    l.primary ? "size-3.5" : "size-2.5"
                  }`}
                  style={{
                    background: "var(--electric)",
                    boxShadow: "0 0 0 4px color-mix(in oklab, var(--electric) 18%, transparent)",
                  }}
                />
                <span className="mt-2 block -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold tracking-wide text-navy-deep">
                  {l.name}
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
