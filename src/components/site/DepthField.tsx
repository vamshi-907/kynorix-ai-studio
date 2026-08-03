import { motion } from "motion/react";
import { useQuality } from "@/hooks/use-quality";

/**
 * DepthField — a layered, perspective 3D motion backdrop.
 * Pure CSS 3D transforms + Motion, quality aware and deterministic
 * (no Math.random) so SSR and client markup always match.
 */

const RINGS = [
  { size: 460, rotX: 68, dur: 26, dir: 1, opacity: 0.5 },
  { size: 640, rotX: 74, dur: 38, dir: -1, opacity: 0.34 },
  { size: 840, rotX: 80, dur: 52, dir: 1, opacity: 0.2 },
];

const CUBES = [
  { x: 12, y: 22, size: 54, dur: 14, delay: 0 },
  { x: 82, y: 18, size: 38, dur: 18, delay: 1.4 },
  { x: 24, y: 74, size: 44, dur: 20, delay: 0.8 },
  { x: 72, y: 68, size: 62, dur: 16, delay: 2.1 },
  { x: 50, y: 12, size: 30, dur: 22, delay: 1.1 },
  { x: 92, y: 48, size: 34, dur: 24, delay: 0.4 },
];

function Cube({ size, dur, delay }: { size: number; dur: number; delay: number }) {
  const half = size / 2;
  const faces = [
    `rotateY(0deg) translateZ(${half}px)`,
    `rotateY(90deg) translateZ(${half}px)`,
    `rotateY(180deg) translateZ(${half}px)`,
    `rotateY(-90deg) translateZ(${half}px)`,
    `rotateX(90deg) translateZ(${half}px)`,
    `rotateX(-90deg) translateZ(${half}px)`,
  ];
  return (
    <motion.div
      className="relative"
      style={{ width: size, height: size, transformStyle: "preserve-3d" }}
      animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: "linear" }}
    >
      {faces.map((transform, i) => (
        <span
          key={i}
          className="absolute inset-0 rounded-[6px] border border-accent/35"
          style={{
            transform,
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--accent) 12%, transparent), transparent)",
          }}
        />
      ))}
    </motion.div>
  );
}

export function DepthField({ className = "" }: { className?: string }) {
  const { reducedMotion, density, allowHeavyEffects } = useQuality();

  const rings = reducedMotion ? RINGS.slice(0, 1) : RINGS;
  const cubes = reducedMotion
    ? []
    : CUBES.slice(0, Math.max(2, Math.round(CUBES.length * density)));

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ perspective: "1100px" }}
    >
      {/* Orbital rings on a tilted plane */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {rings.map((r) => (
          <motion.div
            key={r.size}
            className="absolute left-1/2 top-1/2 rounded-full border border-accent/25"
            style={{
              width: r.size,
              height: r.size,
              marginLeft: -r.size / 2,
              marginTop: -r.size / 2,
              opacity: r.opacity,
              transformStyle: "preserve-3d",
            }}
            initial={{ rotateX: r.rotX, rotateZ: 0 }}
            animate={reducedMotion ? { rotateZ: 0 } : { rotateZ: 360 * r.dir }}
            transition={{ duration: r.dur, repeat: Infinity, ease: "linear" }}
          >
            <span
              className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-accent"
              style={{ boxShadow: "0 0 18px color-mix(in oklab, var(--accent) 60%, transparent)" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating wireframe cubes */}
      {cubes.map((c) => (
        <motion.div
          key={`${c.x}-${c.y}`}
          className="absolute"
          style={{ left: `${c.x}%`, top: `${c.y}%`, transformStyle: "preserve-3d" }}
          animate={{ y: [0, -22, 0] }}
          transition={{ duration: c.dur / 2, repeat: Infinity, ease: "easeInOut", delay: c.delay }}
        >
          <Cube size={c.size} dur={c.dur} delay={c.delay} />
        </motion.div>
      ))}

      {/* Soft depth haze */}
      {allowHeavyEffects && !reducedMotion && (
        <motion.div
          className="absolute left-1/2 top-1/2 size-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--accent) 18%, transparent), transparent 68%)",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.85, 0.55] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
