import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Brain,
  Cloud,
  Eye,
  LineChart,
  ShoppingBag,
  HeartPulse,
  Landmark,
  Workflow,
} from "lucide-react";

const nodes = [
  { label: "AI Brain", icon: Brain, angle: -90, r: 0 },
  { label: "Cloud", icon: Cloud, angle: -90, r: 1 },
  { label: "Computer Vision", icon: Eye, angle: -40, r: 1 },
  { label: "Data Flow", icon: Workflow, angle: 10, r: 1 },
  { label: "Analytics", icon: LineChart, angle: 60, r: 1 },
  { label: "Retail", icon: ShoppingBag, angle: 120, r: 1 },
  { label: "Healthcare", icon: HeartPulse, angle: 175, r: 1 },
  { label: "Finance", icon: Landmark, angle: 225, r: 1 },
];

export function EcosystemScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const counterRotate = useTransform(rotate, (v) => -v);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.94]);


  const orbit = nodes.filter((n) => n.r === 1);

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[560px]">
      <motion.div style={{ rotate, scale }} className="absolute inset-0">
        {/* orbit rings */}
        <div className="absolute inset-[8%] rounded-full border border-accent/15" />
        <div className="absolute inset-[22%] rounded-full border border-accent/20" />
        <div className="absolute inset-[36%] rounded-full border border-accent/10" />

        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
          {orbit.map((n, i) => {
            const rad = (n.angle * Math.PI) / 180;
            return (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={50 + Math.cos(rad) * 40}
                y2={50 + Math.sin(rad) * 40}
                stroke="var(--electric)"
                strokeOpacity="0.35"
                strokeWidth="0.35"
                className="animate-dash"
              />
            );
          })}
        </svg>

        {orbit.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180;
          const left = 50 + Math.cos(rad) * 40;
          const top = 50 + Math.sin(rad) * 40;
          const Icon = n.icon;
          return (
            <motion.div
              key={n.label}
              className="absolute"
              style={{ left: `${left}%`, top: `${top}%`, x: "-50%", y: "-50%", rotate: counterRotate }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="glass-panel animate-float flex items-center gap-2 rounded-2xl px-3 py-2 text-[11px] font-semibold text-navy sm:text-xs"
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                <Icon className="size-3.5 text-accent" strokeWidth={1.8} />
                <span className="whitespace-nowrap">{n.label}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute -inset-16 rounded-full animate-pulse-soft"
          style={{
            background: "radial-gradient(circle, color-mix(in oklab, var(--electric) 30%, transparent), transparent 70%)",
            filter: "blur(24px)",
          }}
        />
        <div className="glass-panel relative flex size-28 flex-col items-center justify-center rounded-[2rem] text-center sm:size-32">
          <Brain className="size-7 text-accent" strokeWidth={1.6} />
          <span className="mt-2 text-[11px] font-semibold tracking-tight text-navy">AI Brain</span>
        </div>
      </div>
    </div>
  );
}
