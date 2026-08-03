import { motion } from "motion/react";
import { Brain, Eye, Cpu, Layers, Cloud, Activity, Wand2 } from "lucide-react";
import { Eyebrow, Reveal, Section } from "./primitives";

const nodes = [
  { label: "Artificial Intelligence", icon: Brain },
  { label: "Computer Vision", icon: Eye },
  { label: "Machine Learning", icon: Cpu },
  { label: "Deep Learning", icon: Layers },
  { label: "Cloud Computing", icon: Cloud },
  { label: "Real-Time Analytics", icon: Activity },
  { label: "Generative AI", icon: Wand2 },
];

export function AITechnology() {
  return (
    <Section id="technology" className="relative overflow-hidden">
      <div className="text-center">
        <Reveal>
          <Eyebrow>AI Technology</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-8 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-navy-deep">
            One AI core. Every capability, connected.
          </h2>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-20 aspect-square w-full max-w-[720px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
          <circle cx="50" cy="50" r="38" fill="none" stroke="var(--electric)" strokeOpacity="0.14" />
          {nodes.map((_, i) => {
            const rad = ((i / nodes.length) * 360 - 90) * (Math.PI / 180);
            return (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={50 + Math.cos(rad) * 38}
                y2={50 + Math.sin(rad) * 38}
                stroke="var(--electric)"
                strokeOpacity="0.45"
                strokeWidth="0.4"
                className="animate-dash"
                style={{ animationDelay: `${i * -1.5}s` }}
              />
            );
          })}
        </svg>

        {nodes.map((n, i) => {
          const rad = ((i / nodes.length) * 360 - 90) * (Math.PI / 180);
          const Icon = n.icon;
          return (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.09, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.06 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${50 + Math.cos(rad) * 38}%`, top: `${50 + Math.sin(rad) * 38}%` }}
            >
              <div
                className="glass-panel animate-float flex items-center gap-2 rounded-2xl px-3.5 py-2.5"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <Icon className="size-4 text-accent" strokeWidth={1.7} />
                <span className="whitespace-nowrap text-[11px] font-semibold text-navy-deep sm:text-xs">
                  {n.label}
                </span>
              </div>
            </motion.div>
          );
        })}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="absolute -inset-20 rounded-full animate-pulse-soft"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--electric) 28%, transparent), transparent 70%)",
              filter: "blur(28px)",
            }}
          />
          <div
            className="relative flex size-32 flex-col items-center justify-center rounded-full text-center sm:size-40"
            style={{ background: "var(--gradient-ink)", boxShadow: "var(--shadow-lift)" }}
          >
            <Brain className="size-8 text-primary-foreground" strokeWidth={1.4} />
            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground">
              AI Core
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
