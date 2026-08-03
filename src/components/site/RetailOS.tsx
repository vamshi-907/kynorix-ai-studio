import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Camera, Sparkles, BarChart3, Boxes, Cloud, ScanFace } from "lucide-react";
import { Eyebrow, Reveal, Section } from "./primitives";

const modules = [
  {
    key: "mirror",
    name: "Retail Mirror",
    icon: ScanFace,
    headline: "A mirror that understands the shopper.",
    copy: "Immersive in-store try-on and guided styling driven by real-time perception.",
  },
  {
    key: "vision",
    name: "Computer Vision",
    icon: Camera,
    headline: "Every aisle, continuously understood.",
    copy: "Shelf, footfall and behaviour analytics from ordinary store cameras.",
  },
  {
    key: "reco",
    name: "Recommendation AI",
    icon: Sparkles,
    headline: "Relevance, computed per second.",
    copy: "Context-aware recommendation engines tuned to margin, stock and intent.",
  },
  {
    key: "analytics",
    name: "Analytics",
    icon: BarChart3,
    headline: "Decisions before the day ends.",
    copy: "Live operational dashboards across stores, regions and categories.",
  },
  {
    key: "inventory",
    name: "Inventory Intelligence",
    icon: Boxes,
    headline: "Stock that predicts itself.",
    copy: "Forecasting and replenishment that removes guesswork from the floor.",
  },
  {
    key: "cloud",
    name: "Cloud",
    icon: Cloud,
    headline: "Elastic by architecture.",
    copy: "Secure, multi-region deployment engineered for enterprise scale.",
  },
];

export function RetailOS() {
  const [active, setActive] = useState(modules[0]!);
  const ActiveIcon = active.icon;

  return (
    <Section id="product" className="relative overflow-hidden">
      <Reveal>
        <Eyebrow>Flagship Product</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-8 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] text-navy-deep">
          Kynorix <span className="text-gradient">RetailOS</span>
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          A holographic operating layer for modern retail — modules that compose into one
          intelligent system.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="grid gap-3 sm:grid-cols-2">
          {modules.map((m, i) => {
            const Icon = m.icon;
            const isActive = m.key === active.key;
            return (
              <Reveal key={m.key} delay={(i % 2) * 0.06}>
                <button
                  onClick={() => setActive(m)}
                  className={`glass-panel group flex w-full items-center gap-3 rounded-2xl px-5 py-4 text-left transition-all duration-400 hover:-translate-y-1 ${
                    isActive ? "ring-2 ring-accent/40" : ""
                  }`}
                  style={isActive ? { boxShadow: "var(--shadow-glow)" } : undefined}
                >
                  <span
                    className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
                      isActive ? "" : "bg-secondary"
                    }`}
                    style={isActive ? { background: "var(--gradient-electric)" } : undefined}
                  >
                    <Icon
                      className={`size-4 ${isActive ? "text-primary-foreground" : "text-accent"}`}
                      strokeWidth={1.8}
                    />
                  </span>
                  <span className="text-sm font-semibold text-navy-deep">{m.name}</span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="relative aspect-square w-full">
            <div
              className="absolute inset-6 rounded-full animate-pulse-soft"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--electric) 22%, transparent), transparent 68%)",
                filter: "blur(30px)",
              }}
            />
            <div className="absolute inset-4 rounded-[3rem] border border-accent/15 animate-spin-slow" />
            <div className="absolute inset-16 rounded-full border border-accent/20" />

            <div className="absolute inset-0 flex items-center justify-center p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.key}
                  initial={{ opacity: 0, y: 24, filter: "blur(12px)", scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, y: -18, filter: "blur(12px)", scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel w-full max-w-sm rounded-[2rem] p-8 text-center"
                >
                  <div
                    className="mx-auto flex size-16 items-center justify-center rounded-2xl"
                    style={{ background: "var(--gradient-electric)", boxShadow: "var(--shadow-glow)" }}
                  >
                    <ActiveIcon className="size-7 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-snug text-navy-deep">
                    {active.headline}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.copy}</p>
                  <span className="mt-6 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {active.name}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
