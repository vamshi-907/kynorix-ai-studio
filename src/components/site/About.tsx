import { motion } from "motion/react";
import { Eyebrow, Reveal, Section } from "./primitives";

const timeline = [
  { title: "Innovation", copy: "Ideas engineered into intelligent systems." },
  { title: "Research", copy: "Applied AI research grounded in real industry problems." },
  { title: "Artificial Intelligence", copy: "Models, vision and reasoning built for production." },
  { title: "Products", copy: "Platforms that ship, scale and compound value." },
  { title: "Global Expansion", copy: "Made in India, engineered for the world." },
];

export function About() {
  return (
    <Section id="about" className="overflow-hidden">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <Eyebrow>About Kynorix</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] text-navy-deep">
              We build intelligent AI platforms that{" "}
              <span className="text-gradient">redefine industries.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Kynorix designs AI infrastructure, computer vision and decision intelligence for
              enterprises that intend to lead the next decade — not follow it.
            </p>
          </Reveal>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-[7px] top-2 h-full w-px bg-border" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[7px] top-2 h-full w-px origin-top"
            style={{ background: "var(--gradient-electric)" }}
          />
          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.12}>
                <div className="group relative">
                  <span className="absolute -left-8 top-2 size-3.5 rounded-full border-2 border-accent bg-background transition-all duration-300 group-hover:shadow-[0_0_0_6px_color-mix(in_oklab,var(--electric)_18%,transparent)]" />
                  <h3 className="text-xl font-semibold text-navy-deep md:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
