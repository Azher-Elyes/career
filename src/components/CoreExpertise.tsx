import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { CORE_EXPERTISE } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { MagneticButton } from './ui/MagneticButton';
import { scrollTo } from '@/hooks/useSmoothScroll';

const CAPABILITY_ICONS = {
  Users: Icons.Users,
  Cog: Icons.Cog,
  ShieldCheck: Icons.ShieldCheck,
  Target: Icons.Target,
  Handshake: Icons.Handshake,
  Network: Icons.Network,
  Lightbulb: Icons.Lightbulb,
  TrendingUp: Icons.TrendingUp,
  UserCog: Icons.UserCog,
  Globe: Icons.Globe,
  Monitor: Icons.Monitor,
} as const;

const TOOL_ICONS = {
  Code: Icons.Code2,
  Braces: Icons.Braces,
  Binary: Icons.Binary,
  Coffee: Icons.Coffee,
  FileCode: Icons.FileCode,
  Atom: Icons.Atom,
  Hexagon: Icons.Hexagon,
  Box: Icons.Box,
  GitBranch: Icons.GitBranch,
  Terminal: Icons.Terminal,
  Database: Icons.Database,
  Cloud: Icons.Cloud,
  Flame: Icons.Flame,
  Network: Icons.Network,
  Table: Icons.Table,
  Calculator: Icons.Calculator,
  Eye: Icons.Eye,
  Link: Icons.Link,
  Notebook: Icons.Notebook,
  Cpu: Icons.Cpu,
  Wifi: Icons.Wifi,
  Cable: Icons.Cable,
  Activity: Icons.Activity,
  Bus: Icons.Bus,
  Radio: Icons.Radio,
  Layout: Icons.Layout,
  Route: Icons.Route,
  Zap: Icons.Zap,
  BarChart: Icons.BarChart3,
  Monitor: Icons.Monitor,
  Radar: Icons.Radar,
  Settings: Icons.Settings,
  Ruler: Icons.Ruler,
  Layers: Icons.Layers,
  Server: Icons.Server,
  Shield: Icons.Shield,
} as const;

export function CoreExpertise() {
  const [activeDomainIdx, setActiveDomainIdx] = useState(0);
  const activeDomain = CORE_EXPERTISE.technical.domains[activeDomainIdx];

  return (
    <section
      id="expertise"
      className="relative overflow-hidden py-6 md:py-8 lg:py-10"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 grid-engineering opacity-10" />

      <div className="container-main relative">
        {/* ══════════════════════════════════════════════════════ */}
        {/*  LAYER 01 — MANAGEMENT HEADER                          */}
        {/* ══════════════════════════════════════════════════════ */}
        <div className="relative">
          {/* Cinematic hero image — top-right */}
          <div className="pointer-events-none absolute -right-6 -top-6 hidden h-[320px] w-[55%] lg:block">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}expertise/${CORE_EXPERTISE.heroImage}`}
                alt=""
                className="h-full w-full object-cover opacity-70 grayscale"
                loading="lazy"
              />
              {/* Blend into background */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-bg/60 to-bg" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <div>
              {/* Masthead */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <SectionLabel label={CORE_EXPERTISE.label} />
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left' }}
                className="mt-6 h-px w-full bg-gradient-to-r from-border via-border to-transparent"
              />

              {/* Headline */}
              <h2 className="mt-12 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] font-light tracking-[-0.03em]">
                <span className="block overflow-hidden text-white">
                  <motion.span
                    initial={{ y: '100%' }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{
                      duration: 1,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block"
                  >
                    Leadership through
                  </motion.span>
                </span>
                <span className="block overflow-hidden italic">
                  <motion.span
                    initial={{ y: '100%' }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{
                      duration: 1,
                      delay: 0.25,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block text-silver-gradient"
                  >
                    structured responsibility.
                  </motion.span>
                </span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="mt-8 max-w-lg text-base leading-[1.7] text-text-secondary"
              >
                {CORE_EXPERTISE.intro}
              </motion.p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════ */}
        {/*  MANAGEMENT GRID — 4 cols × 2 rows                     */}
        {/* ══════════════════════════════════════════════════════ */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {CORE_EXPERTISE.management.capabilities.map((capability, i) => (
            <CapabilityCell
              key={capability.number}
              capability={capability}
              index={i}
            />
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════ */}
        {/*  LAYER 02 — TECHNICAL LEVERAGE                          */}
        {/* ══════════════════════════════════════════════════════ */}
        <div className="mt-8 md:mt-10">

          {/* LAYER 02 HEADER — with hero image on right */}
          <div className="relative mt-16 md:mt-20">
            {/* Isometric stack image */}
            <div className="pointer-events-none absolute -right-6 top-0 hidden h-[320px] w-[50%] lg:block">
              <div className="relative h-full w-full">
                <img
                  src={`${import.meta.env.BASE_URL}expertise/${CORE_EXPERTISE.technical.heroImage}`}
                  alt=""
                  className="h-full w-full object-contain opacity-90 grayscale"
                  loading="lazy"
                />
                {/* Ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-bg/40 to-bg" />
                <div className="absolute inset-0 bg-silver/[0.04] mix-blend-overlay" />
              </div>
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SectionLabel label={CORE_EXPERTISE.technical.label} />
                </motion.div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 1.4,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ transformOrigin: 'left' }}
                  className="mt-6 h-px w-full bg-gradient-to-r from-border via-border to-transparent"
                />

                <h2 className="mt-12 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] font-light tracking-[-0.03em]">
                  <span className="block overflow-hidden text-white">
                    <motion.span
                      initial={{ y: '100%' }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{
                        duration: 1,
                        delay: 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="block"
                    >
                      {CORE_EXPERTISE.technical.headline}
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden italic">
                    <motion.span
                      initial={{ y: '100%' }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{
                        duration: 1,
                        delay: 0.25,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="block text-silver-gradient"
                    >
                      {CORE_EXPERTISE.technical.subheadline}
                    </motion.span>
                  </span>
                </h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.9, delay: 0.5 }}
                  className="mt-8 max-w-lg text-base leading-[1.7] text-text-secondary"
                >
                  {CORE_EXPERTISE.technical.intro}
                </motion.p>
              </div>
            </div>
          </div>

          {/* DOMAIN NAVIGATOR */}
          <div className="mt-16 grid gap-10 md:mt-10 md:grid-cols-[1fr_1.8fr] md:gap-16">
            {/* LEFT — Domain list */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:sticky md:top-24"
            >
              {/* List header */}
              <div className="mb-6 flex items-baseline justify-between border-b border-border pb-4">
                <span className="font-mono text-[10px] tracking-[0.3em] text-silver-mid uppercase">
                  Domains
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-text-dim uppercase">
                  {String(activeDomainIdx + 1).padStart(2, '0')} / {String(CORE_EXPERTISE.technical.domains.length).padStart(2, '0')}
                </span>
              </div>

              <ul className="space-y-0">
                {CORE_EXPERTISE.technical.domains.map((domain, i) => {
                  const isActive = activeDomainIdx === i;
                  return (
                    <li key={domain.id}>
                      <button
                        onClick={() => setActiveDomainIdx(i)}
                        onMouseEnter={() => setActiveDomainIdx(i)}
                        className={`group flex w-full items-center justify-between border-b border-border py-6 text-left transition-all duration-300 ${
                          isActive ? 'text-white' : 'text-text-dim hover:text-text-muted'
                        }`}
                      >
                        <span className="flex items-baseline gap-5">
                          <span
                            className={`font-mono text-[11px] tracking-[0.1em] transition-colors duration-300 ${
                              isActive ? 'text-silver-bright' : 'text-silver-mid'
                            }`}
                          >
                            {domain.number}
                          </span>
                          <span
                            className={`text-lg font-medium tracking-tight transition-all duration-300 md:text-xl ${
                              isActive ? 'translate-x-0' : 'translate-x-0 group-hover:translate-x-0.5'
                            }`}
                          >
                            {domain.title}
                          </span>
                        </span>

                        <motion.span
                          animate={{
                            opacity: isActive ? 1 : 0,
                            x: isActive ? 0 : -8,
                          }}
                          transition={{ duration: 0.3 }}
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-silver-bright"
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* RIGHT — Content panel */}
            <div className="relative md:min-h-[440px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDomain.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-lg border border-border bg-surface/20 p-6 md:p-7"
                >
                  {/* Panel header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.28em] text-silver-mid uppercase">
                        {activeDomain.number} — {activeDomain.title}
                      </span>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">
                        {activeDomain.intro}
                      </p>
                    </div>
                    <span className="hidden shrink-0 font-mono text-[9px] tracking-[0.3em] text-text-dim uppercase md:block">
                      {activeDomain.capabilities.length} capabilities ·{' '}
                      {activeDomain.tools.length} tools
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px w-full bg-gradient-to-r from-silver-mid/30 via-border to-transparent" />

                  <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:gap-10">
                    {/* Capabilities */}
                    <div>
                      <p className="mb-4 font-mono text-[9px] tracking-[0.3em] text-silver-dark uppercase">
                        Key Capabilities
                      </p>

                      <div className="grid grid-cols-1 gap-x-5 gap-y-1.5 sm:grid-cols-2">
                        {activeDomain.capabilities.map((cap, i) => (
                          <motion.div
                            key={cap}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: i * 0.02,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="flex items-center gap-2.5 py-0.5"
                          >
                            <span className="h-1 w-1 shrink-0 rounded-full bg-silver-mid" />
                            <span className="text-[12px] text-text-secondary">
                              {cap}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <p className="mb-4 font-mono text-[9px] tracking-[0.3em] text-silver-dark uppercase">
                        Tools & Technologies
                      </p>

                      <div className="grid grid-cols-2 gap-1.5">
                        {activeDomain.tools.map((tool, i) => {
                          const Icon =
                            (TOOL_ICONS[
                              tool.icon as keyof typeof TOOL_ICONS
                            ] as React.ComponentType<{
                              className?: string;
                              strokeWidth?: number;
                            }>) ?? Icons.Code2;

                          return (
                            <motion.div
                              key={tool.name}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.4,
                                delay: i * 0.02,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                              className="flex items-center gap-2 rounded-sm border border-border bg-bg/50 px-2.5 py-1.5 transition-colors duration-300 hover:border-silver-dark"
                            >
                              <Icon
                                className="h-3.5 w-3.5 shrink-0 text-silver-mid"
                                strokeWidth={1.5}
                              />
                              <span className="truncate font-mono text-[10px] tracking-wide text-text-muted">
                                {tool.name}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* CLOSING MESSAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-4 md:mt-8"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-silver-dark md:w-20" />
            <p className="text-center font-mono text-[10px] tracking-[0.3em] text-silver-mid uppercase md:text-xs">
              {CORE_EXPERTISE.technical.closing}
            </p>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-silver-dark md:w-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────── */
/*  CAPABILITY CELL                                          */
/* ───────────────────────────────────────────────────────── */
function CapabilityCell({
  capability,
  index,
}: {
  capability: (typeof CORE_EXPERTISE.management.capabilities)[number];
  index: number;
}) {
  const Icon =
    (CAPABILITY_ICONS[
      capability.icon as keyof typeof CAPABILITY_ICONS
    ] as React.ComponentType<{
      className?: string;
      strokeWidth?: number;
    }>) ?? Icons.Users;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex min-h-[240px] flex-col overflow-hidden bg-bg p-6 transition-colors duration-500 hover:bg-surface md:p-7"
    >
      {/* Corner brackets */}
      <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-silver/0 transition-all duration-500 group-hover:border-silver/50" />
      <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-silver/0 transition-all duration-500 group-hover:border-silver/50" />

      {/* HEADER */}
      <div className="mb-6 flex items-start justify-between">
        <span className="font-mono text-[10px] tracking-[0.3em] text-silver-dark uppercase">
          {capability.number}
        </span>
        <div className="flex h-9 w-9 items-center justify-center text-silver-mid transition-colors duration-500 group-hover:text-white">
          <Icon className="h-5 w-5" strokeWidth={1.25} />
        </div>
      </div>

      {/* TITLE */}
      <h3 className="mb-3 text-[15px] font-medium leading-tight tracking-tight text-white">
        {capability.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="flex-1 text-[12px] leading-relaxed text-text-muted transition-colors duration-500 group-hover:text-text-secondary">
        {capability.description}
      </p>

      {/* Hover underline */}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-silver via-silver to-transparent transition-all duration-700 group-hover:w-full" />
    </motion.article>
  );
}