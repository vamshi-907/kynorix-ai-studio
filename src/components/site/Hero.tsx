import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import { EcosystemScene } from "./EcosystemScene";
import { LightBeams, NeuralField, Particles } from "./Atmosphere";
import { DepthField } from "./DepthField";
import { easeOutExpo } from "./primitives";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <div className="mesh-bg absolute inset-0" aria-hidden="true" />
      <div className="grid-fade absolute inset-0" aria-hidden="true" />
      <LightBeams />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.55]">
        <NeuralField />
      </div>
      <DepthField className="opacity-60" />
      <Particles />

      <motion.div
        style={{ y, opacity: fade }}
        className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 pb-24 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-8"
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground backdrop-blur-md"
          >
            <span className="size-1.5 rounded-full bg-accent animate-pulse-soft" />
            AI-First Technology Company
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.1, ease: easeOutExpo }}
            className="mt-7 text-[clamp(3rem,9vw,7rem)] font-semibold leading-[0.92] text-navy-deep"
          >
            Kynorix
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: easeOutExpo }}
            className="mt-4 text-gradient text-[clamp(1.35rem,3vw,2.4rem)] font-semibold leading-tight"
          >
            Engineering the Intelligent Future
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.38, ease: easeOutExpo }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Building AI-powered technologies that transform industries and create intelligent
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: easeOutExpo }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#product"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--gradient-ink)", boxShadow: "var(--shadow-lift)" }}
            >
              Explore Products
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass-panel group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5"
            >
              <CalendarDays className="size-4 text-accent" />
              Book a Demo
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: easeOutExpo }}
        >
          <EcosystemScene />
        </motion.div>
      </motion.div>
    </section>
  );
}
