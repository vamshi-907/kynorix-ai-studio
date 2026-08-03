import { motion } from "motion/react";
import {
  ShoppingBag,
  HeartPulse,
  Factory,
  GraduationCap,
  Landmark,
  Truck,
  Building2,
} from "lucide-react";
import { Eyebrow, Reveal, Section } from "./primitives";

const industries = [
  { name: "Retail", icon: ShoppingBag, copy: "Vision-driven stores and intelligent merchandising." },
  { name: "Healthcare", icon: HeartPulse, copy: "Clinical intelligence and diagnostic assistance." },
  { name: "Manufacturing", icon: Factory, copy: "Predictive quality and autonomous inspection." },
  { name: "Education", icon: GraduationCap, copy: "Adaptive learning powered by generative AI." },
  { name: "Finance", icon: Landmark, copy: "Risk, fraud and decisioning in real time." },
  { name: "Logistics", icon: Truck, copy: "Route, demand and fleet optimisation." },
  { name: "Smart Cities", icon: Building2, copy: "Urban sensing and civic intelligence at scale." },
];

export function Industries() {
  return (
    <Section id="industries" className="relative">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-70"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, color-mix(in oklab, var(--electric-soft) 22%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative">
        <Reveal>
          <Eyebrow>Industries</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-navy-deep">
            Intelligence engineered for every sector.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.name} delay={(i % 3) * 0.08}>
                <motion.article
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="glass-panel group relative h-full overflow-hidden rounded-3xl p-8"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(90% 80% at 50% 0%, color-mix(in oklab, var(--electric) 16%, transparent), transparent 70%)",
                    }}
                  />
                  <div className="relative">
                    <div
                      className="flex size-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-[18deg]"
                      style={{
                        background: "var(--gradient-electric)",
                        boxShadow: "var(--shadow-glow)",
                      }}
                    >
                      <Icon className="size-6 text-primary-foreground" strokeWidth={1.6} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-navy-deep">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
