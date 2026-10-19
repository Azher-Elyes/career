import { motion } from 'framer-motion';
import {
  Users,
  Cog,
  ShieldCheck,
  Zap,
  CircuitBoard,
  Cpu,
  Code2,
  Briefcase,
} from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/* ─────────────────────────────────────────────────────
   Node positions (% of container)
   ───────────────────────────────────────────────────── */
const NODES = [
  // TOP LAYER — Management
  {
    id: 'management',
    label: 'MANAGEMENT',
    icon: Users,
    x: 50,
    y: 22,
    size: 'lg',
  },

  // MID LAYER — Quality + Operations
  {
    id: 'quality',
    label: 'QUALITY',
    icon: ShieldCheck,
    x: 15,
    y: 42,
    size: 'md',
  },
  {
    id: 'operations',
    label: 'OPERATIONS',
    icon: Cog,
    x: 85,
    y: 42,
    size: 'md',
  },

  // ENGINEERING CORE
  {
    id: 'engineering',
    label: 'ENGINEERING',
    icon: Briefcase,
    x: 50,
    y: 62,
    size: 'lg',
  },

  // BOTTOM LAYER — 4 Disciplines
  {
    id: 'electrical',
    label: 'ELECTRICAL',
    icon: Zap,
    x: 12,
    y: 88,
    size: 'md',
  },
  {
    id: 'electronics',
    label: 'ELECTRONICS',
    icon: CircuitBoard,
    x: 37,
    y: 88,
    size: 'md',
  },
  {
    id: 'embedded',
    label: 'EMBEDDED',
    icon: Cpu,
    x: 63,
    y: 88,
    size: 'md',
  },
  {
    id: 'software',
    label: 'SOFTWARE',
    icon: Code2,
    x: 88,
    y: 88,
    size: 'md',
  },
];

/* ─────────────────────────────────────────────────────
   Connection lines
   ───────────────────────────────────────────────────── */
const CONNECTIONS: Array<[string, string]> = [
  ['management', 'quality'],
  ['management', 'operations'],
  ['management', 'engineering'],
  ['engineering', 'electrical'],
  ['engineering', 'electronics'],
  ['engineering', 'embedded'],
  ['engineering', 'software'],
];

export function HeroSystem() {
  const reduced = useReducedMotion();

  const findNode = (id: string) => NODES.find((n) => n.id === id)!;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[640px]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-silver/[0.04] blur-[100px]" />

      {/* ═══ Connection lines ═══ */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="conn-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(199,201,204,0.15)" />
            <stop offset="50%" stopColor="rgba(225,227,230,0.55)" />
            <stop offset="100%" stopColor="rgba(199,201,204,0.15)" />
          </linearGradient>
        </defs>

        {CONNECTIONS.map(([fromId, toId], i) => {
          const from = findNode(fromId);
          const to = findNode(toId);
          return (
            <motion.line
              key={`${fromId}-${toId}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#conn-gradient)"
              strokeWidth="0.15"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.8 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          );
        })}

        {/* Traveling data pulses */}
        {!reduced &&
          CONNECTIONS.slice(0, 5).map(([fromId, toId], i) => {
            const from = findNode(fromId);
            const to = findNode(toId);
            return (
              <motion.circle
                key={`pulse-${i}`}
                r="0.4"
                fill="#F5F5F5"
                initial={{ cx: from.x, cy: from.y, opacity: 0 }}
                animate={{
                  cx: [from.x, to.x],
                  cy: [from.y, to.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatDelay: 1.5 + i * 0.4,
                  delay: 3 + i * 0.6,
                  ease: 'easeInOut',
                }}
              />
            );
          })}
      </svg>

      {/* ═══ Icon nodes ═══ */}
      {NODES.map((node, i) => (
        <IconNode key={node.id} node={node} index={i} reduced={reduced} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Icon Node — bare icon + label, floating
   ───────────────────────────────────────────────────── */
function IconNode({
  node,
  index,
  reduced,
}: {
  node: (typeof NODES)[number];
  index: number;
  reduced: boolean;
}) {
  const Icon = node.icon;

  // Bigger, bolder icons
  const iconSize =
    node.size === 'lg'
      ? 'h-12 w-12 md:h-16 md:w-16'
      : 'h-9 w-9 md:h-11 md:w-11';

  const labelSize =
    node.size === 'lg'
      ? 'text-[11px] md:text-xs'
      : 'text-[9px] md:text-[10px]';

  const floatOffset = reduced ? 0 : 8 + (index % 3) * 3;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.9,
        delay: 0.4 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
    >
      <motion.div
        animate={
          reduced
            ? undefined
            : {
                y: [-floatOffset / 2, floatOffset / 2, -floatOffset / 2],
              }
        }
        transition={{
          duration: 4 + (index % 3),
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="group flex flex-col items-center"
      >
        {/* ─── Just the icon — no frame, no ring, no container ─── */}
        <div className="relative flex items-center justify-center">
          {/* Soft glow behind */}
          <span className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-silver/[0.08] blur-2xl" />

          {/* The icon */}
          <Icon
            className={`relative text-silver transition-colors duration-500 group-hover:text-white ${iconSize}`}
            strokeWidth={1.25}
          />
        </div>

        {/* ─── Label ─── */}
        <span
          className={`mt-3 font-mono tracking-[0.25em] text-silver-mid uppercase transition-colors duration-500 group-hover:text-white ${labelSize}`}
        >
          {node.label}
        </span>
      </motion.div>
    </motion.div>
  );
}