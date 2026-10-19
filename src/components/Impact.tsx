import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { IMPACT } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';

export function Impact() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden py-24 md:py-8 lg:py-10"
    >
      <div className="container-main relative">
        <CinematicIntro />
        <ImpactCards />
        <Approach />
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────── */
/*  PART A — CINEMATIC INTRO                                 */
/* ───────────────────────────────────────────────────────── */
function CinematicIntro() {
  return (
    <div className="relative">
      {/* Full-bleed hero image — spans right half, bleeds into black left */}
      <div className="absolute -right-6 top-0 hidden h-[520px] w-[65%] lg:block xl:-right-10">
        {/* Image */}
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}impact/hero.jpg`}
            alt="Industrial precision environment"
            className="h-full w-full object-cover object-center grayscale"
            loading="eager"
          />
          {/* Left fade to black */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent" />
          {/* Bottom fade */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
          {/* Subtle grid overlay */}
          <div className="pointer-events-none absolute inset-0 grid-engineering opacity-20 mix-blend-overlay" />
        </div>

        {/* Tagline — top-right */}
        <div className="absolute right-6 top-6 text-right">
          {IMPACT.tagline.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.4 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-mono text-[10px] tracking-[0.3em] text-silver uppercase"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Content — left side */}
      <div className="relative z-10 pt-8 lg:pt-12">
        {/* Masthead */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-silver">
            04
          </span>
          <span className="h-px w-6 bg-border" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-text-muted uppercase">
            {IMPACT.label}
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="mt-10 max-w-3xl text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.05] font-light tracking-[-0.03em] lg:max-w-2xl">
          <span className="block overflow-hidden text-white">
            <motion.span
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Leading Projects
            </motion.span>
          </span>
          <span className="block overflow-hidden italic">
            <motion.span
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-silver-gradient"
            >
              Solving Challenges.
            </motion.span>
          </span>
        </h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 max-w-md border-t border-border pt-6 text-sm leading-relaxed text-text-secondary md:text-base"
        >
          {IMPACT.intro}
        </motion.p>

        {/* Mobile tagline */}
        <div className="mt-10 flex flex-col gap-1 lg:hidden">
          {IMPACT.tagline.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              className="font-mono text-[10px] tracking-[0.3em] text-silver uppercase"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────── */
/*  PART B — IMPACT CARDS (4-column grid)                    */
/* ───────────────────────────────────────────────────────── */

function ImpactCards() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const children = Array.from(scrollRef.current.children);
    let nearestIdx = 0;
    let minDistance = Infinity;

    children.forEach((child, i) => {
      const htmlChild = child as HTMLElement;
      const distance = Math.abs(htmlChild.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        nearestIdx = i;
      }
    });
    setActiveIdx(nearestIdx);
  };

  const scrollToCard = (idx: number) => {
    if (!scrollRef.current) return;
    const children = Array.from(scrollRef.current.children);
    const clampedIdx = Math.max(0, Math.min(idx, IMPACT.cards.length - 1));
    const target = children[clampedIdx] as HTMLElement;
    
    if (target) {
      scrollRef.current.scrollTo({
        left: target.offsetLeft,
        behavior: 'smooth'
      });
      setActiveIdx(clampedIdx);
    }
  };

  return (
    <div className="mt-8 md:mt-10">
      {/* Section subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="mb-12 flex items-end justify-between gap-6 md:mb-16"
      >
      </motion.div>
      {/* ═══ CAROUSEL WRAPPER ═══ */}
      <div className="relative group/carousel w-full">
        
        {/* ═══ DOT INDICATORS (Now above the cards) ═══ */}
        <div className="mb-6 flex items-center justify-center gap-3">
          {IMPACT.cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to project ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIdx === idx
                  ? 'w-8 bg-silver'
                  : 'w-1.5 bg-border hover:bg-silver-dark'
              }`}
            />
          ))}
        </div>    
        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex w-full gap-4 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
        >
          {IMPACT.cards.map((card, i) => (
            <div 
              key={card.title} 
              className="w-[85vw] sm:w-[45vw] md:w-[31.5vw] lg:w-[31.5%] shrink-0 snap-start"
            >
              <ProjectCard card={card} index={i} />
            </div>
          ))}
        </div>

        {/* ═══ LEFT ARROW (Absolute Positioned) ═══ */}
        <button
          onClick={() => scrollToCard(activeIdx - 1)}
          disabled={activeIdx === 0}
          className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-silver-dark bg-bg/90 text-silver shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-silver hover:text-white disabled:cursor-not-allowed disabled:opacity-0 z-10"
          aria-label="Previous project"
        >
          <Icons.ArrowLeft className="h-5 w-5" />
        </button>

        {/* ═══ RIGHT ARROW (Absolute Positioned) ═══ */}
        <button
          onClick={() => scrollToCard(activeIdx + 1)}
          disabled={activeIdx === IMPACT.cards.length - 1}
          className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-silver-dark bg-bg/90 text-silver shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-silver hover:text-white disabled:cursor-not-allowed disabled:opacity-0 z-10"
          aria-label="Next project"
        >
          <Icons.ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
/* ───────────────────────────────────────────────────────── */
/*  PROJECT CARD                                             */
/* ───────────────────────────────────────────────────────── */
function ProjectCard({
  card,
  index,
}: {
  card: (typeof IMPACT.cards)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface/20 transition-all duration-500 hover:border-silver-dark/60 hover:bg-surface/40"
    >
      {/* HEADER */}
      <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
        <div>
          <h3 className="text-base font-medium leading-tight tracking-tight text-white md:text-lg">
            {card.title}
          </h3>
          <p className="mt-1.5 font-mono text-[9px] tracking-[0.2em] text-silver-mid uppercase">
            {card.context}
          </p>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-bg">
        <img
          src={`${import.meta.env.BASE_URL}impact/${card.image}`}
          alt={card.title}
          className="h-full w-full object-cover object-center grayscale transition-all duration-[1.4s] group-hover:scale-105 group-hover:grayscale-[0.5]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col gap-4 px-5 py-5">
        <div className="flex-1">
          <p className="mb-2 font-mono text-[9px] tracking-[0.3em] text-silver-dark uppercase">
            The Challenge
          </p>
          <p className="text-[13px] leading-relaxed text-text-secondary">
            {card.challenge}
          </p>
        </div>

        <div className="mt-auto border-t border-silver-dark/40 pt-3">
          <p className="mb-1.5 font-mono text-[9px] tracking-[0.3em] text-silver-mid uppercase">
            Leadership Value
          </p>
          <p className="text-[13px] italic leading-relaxed text-text-secondary">
            {card.leadership}
          </p>
        </div>
      </div>

      {/* Underline */}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-silver via-silver to-transparent transition-all duration-700 group-hover:w-full" />
    </motion.article>
  );
}

/* ───────────────────────────────────────────────────────── */
/*  PART C — APPROACH (From Analysis to Action)              */
/* ───────────────────────────────────────────────────────── */
function Approach() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 40%'],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-20 overflow-hidden rounded-2xl border border-border bg-surface/20 md:mt-24"
    >
      {/* Cinematic streak background — right side */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="absolute -right-20 -top-20 h-[600px] w-[900px] opacity-[0.15]"
          viewBox="0 0 900 600"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="streak" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="40%" stopColor="#9A9DA2" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#C7C9CC" stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 200 550 Q 450 400 550 300 T 850 50"
            stroke="url(#streak)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.path
            d="M 250 600 Q 500 450 600 350 T 900 100"
            stroke="url(#streak)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-3 p-2 md:p-2 lg:p-3">         
        {/* CENTER — 4 stages with arrows */}
<div className="relative flex w-full items-center justify-center">
          {/* Desktop horizontal */}
          <div className="hidden w-full md:block">
            <div className="relative flex items-center justify-between">
              {IMPACT.approach.stages.map((stage, i) => (
                <div key={stage.number} className="contents">
                  <StageNode stage={stage} index={i} />
                  {i < IMPACT.approach.stages.length - 1 && (
                    <ArrowConnector index={i} scrollProgress={lineScale} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="w-full space-y-8 md:hidden">
            {IMPACT.approach.stages.map((stage, i) => (
              <StageNodeMobile key={stage.number} stage={stage} index={i} />
            ))}
          </div>
        </div>
{/* BOTTOM — Quote */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-60px' }}
  transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
  className="flex flex-col items-center justify-center border-t border-border pt-8 text-center"
>
  <p className="max-w-3xl text-base italic leading-relaxed text-silver-bright md:text-lg">
    "{IMPACT.approach.quote}"
  </p>
</motion.div>
      </div>
    </motion.div>
  );
}

function StageNode({
  stage,
  index,
}: {
  stage: (typeof IMPACT.approach.stages)[number];
  index: number;
}) {
  const Icon = (Icons[stage.icon as keyof typeof Icons] as React.ComponentType<{
    className?: string;
  }>) ?? Icons.Circle;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex flex-col items-center text-center"
    >
      {/* Circle node */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-silver/30 bg-bg transition-all duration-500 group-hover:border-silver/70 group-hover:bg-silver/[0.05]">
        <Icon className="h-5 w-5 text-silver-mid transition-colors duration-500 group-hover:text-silver" />
      </div>

      {/* Title Only */}
      <p className="mt-4 font-mono text-[10px] font-medium tracking-[0.25em] text-white uppercase">
        {stage.title}
      </p>
    </motion.div>
  );
}

function StageNodeMobile({
  stage,
  index,
}: {
  stage: (typeof IMPACT.approach.stages)[number];
  index: number;
}) {
  const Icon = (Icons[stage.icon as keyof typeof Icons] as React.ComponentType<{
    className?: string;
  }>) ?? Icons.Circle;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex items-center gap-4"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-silver/40 bg-bg">
        <Icon className="h-5 w-5 text-silver" />
      </div>
      <div>
        <p className="font-mono text-[10px] font-medium tracking-[0.25em] text-white uppercase">
          {stage.title}
        </p>
      </div>
    </motion.div>
  );
}

function ArrowConnector({
  index,
  scrollProgress,
}: {
  index: number;
  scrollProgress: ReturnType<typeof useTransform<number, number>>;
}) {
  const start = index / 4;
  const end = (index + 1) / 4;

  const opacity = useTransform(scrollProgress, [start, end], [0.2, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="flex flex-1 items-center justify-center"
    >
      <svg
        width="40"
        height="12"
        viewBox="0 0 40 12"
        fill="none"
        className="text-silver"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="6"
          x2="32"
          y2="6"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M 32 2 L 40 6 L 32 10"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}