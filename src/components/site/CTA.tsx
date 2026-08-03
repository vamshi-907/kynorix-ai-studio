import { ArrowUpRight } from "lucide-react";
import { Reveal, Section } from "./primitives";
import { Particles } from "./Atmosphere";

export function CTA() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="relative overflow-hidden rounded-[2.5rem] px-8 py-20 text-center md:px-16 md:py-28">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 120% at 50% 0%, color-mix(in oklab, var(--electric-soft) 34%, white), white 70%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 rounded-[2.5rem] border border-accent/15" aria-hidden="true" />
        <Particles count={12} />

        <div className="relative">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[1.02] text-navy-deep">
              Let&apos;s Build the <span className="text-gradient">Future</span> Together
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Partner with Kynorix to design, deploy and scale AI that moves your industry forward.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <a
              href="mailto:hello@kynorix.com"
              className="group mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-1"
              style={{ background: "var(--gradient-ink)", boxShadow: "var(--shadow-lift)" }}
            >
              Partner with Kynorix
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
