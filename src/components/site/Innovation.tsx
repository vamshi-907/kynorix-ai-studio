import { motion } from "motion/react";
import { HeartHandshake, ShieldCheck, CloudCog, Gauge, Bot } from "lucide-react";
import { Eyebrow, Reveal, Section } from "./primitives";

const features = [
  {
    title: "Human-Centric AI",
    icon: HeartHandshake,
    copy: "Systems designed around people, transparency and trust.",
  },
  {
    title: "Enterprise Security",
    icon: ShieldCheck,
    copy: "Governance, encryption and compliance built into the core.",
  },
  {
    title: "Scalable Cloud",
    icon: CloudCog,
    copy: "Elastic architecture that grows from pilot to nationwide.",
  },
  {
    title: "Real-Time Intelligence",
    icon: Gauge,
    copy: "Streaming inference that turns signals into decisions instantly.",
  },
  { title: "Automation", icon: Bot, copy: "Agentic workflows that remove operational friction." },
];

export function Innovation() {
  return (
    <Section className="relative">
      <Reveal>
        <Eyebrow>Innovation</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-8 max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-navy-deep">
          Principles that shape everything we ship.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => {
          const Icon = f.icon;
          const wide = i === 0;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ delay: i * 0.08, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className={`glass-panel group relative overflow-hidden rounded-3xl p-8 ${
                wide ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in oklab, var(--electric) 24%, transparent), transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <Icon className="relative size-7 text-accent" strokeWidth={1.6} />
              <h3 className="relative mt-6 text-xl font-semibold text-navy-deep">{f.title}</h3>
              <p className="relative mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {f.copy}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
