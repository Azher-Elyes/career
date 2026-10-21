import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion';
import * as TablerIcons from '@tabler/icons-react';
import { JOURNEY } from '@/data/content';

export function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 70%', 'end 50%'],
  });

  // Smoothed progress for the spine draw
  const smoothedProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const lineScale = useTransform(smoothedProgress, [0, 1], [0, 1]);

  // Raw progress used for node activation
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setProgress(v));

  const total = JOURNEY.milestones.length;

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative overflow-hidden py-4 md:py-16 "
    >
      <div className="pointer-events-none absolute inset-0 grid-engineering opacity-15" />
      <div className="pointer-events-none absolute -left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-silver/[0.015] blur-[160px]" />

      <div className="container-main relative">
        {/* ══════════════════════════════════════════════════════ */}
        {/*  HEADER                                                */}
        {/* ══════════════════════════════════════════════════════ */}
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono text-[10px] tracking-[0.4em] text-silver uppercase md:text-[11px]">
                {JOURNEY.label}
              </span>
            </motion.div>
            <h2 className="mt-8 text-[1.35rem] leading-[1.05] font-extralight tracking-[-0.02em] uppercase sm:text-[clamp(2rem,5.5vw,2.5rem)] sm:leading-[0.98] sm:tracking-[-0.04em]">
              {JOURNEY.headline.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '100%' }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{
                      duration: 1,
                      delay: i * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block text-white"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-6 max-w-2xl text-sm leading-[1.75] text-text-secondary sm:mt-10 md:text-[17px] md:leading-[1.85]"
            >
              {JOURNEY.intro}
            </motion.p>
          </div>

          {/* RIGHT — Pillars */}
          <div className="flex flex-col gap-10 lg:pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="grid grid-cols-3 divide-x divide-border border-t border-border"
            >
              {JOURNEY.pillars.map((pillar, i) => {
                const Icon =
                  (TablerIcons[
                    pillar.icon as keyof typeof TablerIcons
                  ] as React.ComponentType<{
                    className?: string;
                    strokeWidth?: number;
                  }>) ?? TablerIcons.IconCircle;

                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{
                      duration: 0.7,
                      delay: 0.6 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex flex-col items-center px-2 py-6 text-center sm:px-6 sm:py-8 md:py-10"
                  >
                    <Icon
                      className="h-6 w-6 text-silver transition-colors duration-500 group-hover:text-white sm:h-7 sm:w-7"
                      strokeWidth={1.5}
                    />

                    <p className="mt-4 font-mono text-[9px] tracking-[0.15em] text-white uppercase sm:mt-5 sm:text-[11px] sm:tracking-[0.28em]">
                      {pillar.title}
                    </p>

                    <p className="mt-2 text-[11px] leading-snug text-text-muted sm:text-[13px]">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════ */}
        {/*  TIMELINE                                              */}
        {/* ══════════════════════════════════════════════════════ */}
        <div ref={timelineRef} className="relative mt-14 md:mt-16">
          {/* SPINE — desktop */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-border/60 md:block" />
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: 'top' }}
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-silver to-silver md:block"
          />

          {/* MOBILE SPINE — centered on dot (dot w-9 = 36px → center = 18px → 2px spine at left-[17px]) */}
          <div className="pointer-events-none absolute left-[17px] top-0 h-full w-[2px] bg-border/60 md:hidden" />
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: 'top' }}
            className="pointer-events-none absolute left-[17px] top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-silver to-silver md:hidden"
          />

          <div className="space-y-3 md:space-y-3">
            {JOURNEY.milestones.map((milestone, i) => (
              <TimelineRow
                key={milestone.id}
                milestone={milestone}
                index={i}
                progress={progress}
                total={total}
              />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════ */}
        {/*  CLOSING                                               */}
        {/* ══════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mt-4 overflow-hidden py-3 text-center md:mt-5"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[200px] w-[700px] rounded-full bg-silver/[0.03] blur-[100px]" />
          </div>

          <div className="relative">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'center' }}
              className="mx-auto mb-0.25 h-px w-100 bg-gradient-to-r from-transparent via-silver to-transparent"
            />
            <h3 className="mx-auto mt-8 max-w-4xl text-[clamp(1.2rem,4vw,2rem)] font-extralight uppercase leading-[1.05] tracking-[-0.03em] text-white">
              {JOURNEY.closing.headline}
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────── */
/*  TIMELINE ROW                                            */
/* ───────────────────────────────────────────────────────── */
function TimelineRow({
  milestone,
  index,
  progress,
  total,
}: {
  milestone: (typeof JOURNEY.milestones)[number];
  index: number;
  progress: number;
  total: number;
}) {
  const activationThreshold = index / total + 0.02;
  const isActive = progress >= activationThreshold;

  const isLeft = milestone.side === 'left';
  const isCurrent = milestone.current;

  const Icon =
    (TablerIcons[milestone.icon as keyof typeof TablerIcons] as React.ComponentType<{
      className?: string;
      strokeWidth?: number;
    }>) ?? TablerIcons.IconCircle;

  return (
    <div className="relative">
      {/* ═══ DESKTOP ═══ */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] items-center">
          {isLeft ? (
            <>
              <MilestoneCard milestone={milestone} align="right" isActive={isActive} />
              <div />
              <DateLabel
                date={milestone.date}
                isCurrent={isCurrent}
                align="left"
                isActive={isActive}
              />
            </>
          ) : (
            <>
              <DateLabel
                date={milestone.date}
                isCurrent={isCurrent}
                align="right"
                isActive={isActive}
              />
              <div />
              <MilestoneCard milestone={milestone} align="left" isActive={isActive} />
            </>
          )}
        </div>

        {/* NODE — desktop */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-bg transition-all duration-500 ${
            isActive
              ? 'border-white shadow-[0_0_60px_-2px_rgba(255,255,255,0.6),0_0_25px_0px_rgba(255,255,255,0.35),inset_0_0_20px_-5px_rgba(255,255,255,0.15)]'
              : 'border-silver/30'
          }`}
        >
          {isActive && (
            <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.08] blur-lg" />
          )}

          <Icon
            className={`h-7 w-7 transition-colors duration-500 ${
              isActive ? 'text-white' : 'text-silver-mid'
            }`}
          />
        </motion.div>
      </div>

      {/* ═══ MOBILE ═══ */}
      <div className="flex gap-2.5 md:hidden">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`relative z-10 mt-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-bg transition-all duration-500 ${
            isActive
              ? 'border-white shadow-[0_0_30px_0px_rgba(255,255,255,0.45)]'
              : 'border-silver/30'
          }`}
        >
          {isActive && (
            <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.08] blur-md" />
          )}

          <Icon
            className={`h-4 w-4 transition-colors duration-500 ${
              isActive ? 'text-white' : 'text-silver-mid'
            }`}
          />
        </motion.div>

        <div className="min-w-0 flex-1">
          <MilestoneCard milestone={milestone} align="left" isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────── */
/*  DATE LABEL                                              */
/* ───────────────────────────────────────────────────────── */
function DateLabel({
  date,
  isCurrent,
  align,
  isActive,
}: {
  date: string;
  isCurrent?: boolean;
  align: 'left' | 'right';
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'right' ? -12 : 12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`font-mono text-[11px] tracking-[0.3em] uppercase transition-colors duration-700 ${
        isActive || isCurrent ? 'text-white' : 'text-text-muted'
      } ${align === 'right' ? 'text-right pr-12' : 'text-left pl-12'}`}
    >
      {date}
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────────── */
/*  MILESTONE CARD                                          */
/* ───────────────────────────────────────────────────────── */
function MilestoneCard({
  milestone,
  align,
  isActive,
}: {
  milestone: (typeof JOURNEY.milestones)[number];
  align: 'left' | 'right';
  isActive: boolean;
}) {
  const isCurrent = milestone.current;
  const isRight = align === 'right';
  const isImageLeft = isRight;
  const cardRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative ${isRight ? 'md:mr-8' : 'md:ml-8'}`}
    >
      <div
        className={`relative overflow-hidden border bg-surface/10 transition-all duration-700 ${
          isActive
            ? 'border-silver/50 bg-surface/25 shadow-[0_0_50px_-15px_rgba(199,201,204,0.18)]'
            : 'border-border'
        } group-hover:border-silver-dark/60 group-hover:bg-surface/25`}
      >
        <div
          className={`grid grid-cols-1 ${
            isImageLeft
              ? 'md:grid-cols-[140px_minmax(0,1fr)]'
              : 'md:grid-cols-[minmax(0,1fr)_140px]'
          }`}
        >
          {/* Image — hidden on mobile */}
          <div
            className={`relative hidden h-44 overflow-hidden bg-bg md:block md:h-auto ${
              isImageLeft ? 'md:order-1' : 'md:order-2'
            }`}
          >
            <motion.img
              style={{ y: imageY }}
              src={`${import.meta.env.BASE_URL}journey/${milestone.image}`}
              alt={milestone.title}
              className="h-[115%] w-full object-cover object-center grayscale contrast-[1.05] brightness-[0.95] transition-all duration-[1.4s] group-hover:scale-[1.04] group-hover:grayscale-[0.6]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-bg/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-silver/[0.03] mix-blend-overlay" />
          </div>

          {/* Content — compact on mobile */}
          <div
            className={`min-w-0 p-3.5 md:p-7 ${
              isImageLeft ? 'md:order-2' : 'md:order-1'
            }`}
          >
            <p className="font-mono text-[9px] tracking-[0.28em] uppercase text-silver-mid md:text-[10px] md:tracking-[0.32em]">
              {milestone.typeLabel}
            </p>

            {/* ─── Subtitle: multi-link, single-link, or plain text ─── */}
            {(() => {
              const links = (milestone as { subtitleLinks?: { label: string; url: string }[] }).subtitleLinks;
              const url = (milestone as { subtitleUrl?: string }).subtitleUrl;

              // Case 1: multiple links
              if (Array.isArray(links) && links.length > 0) {
                return (
                  <h3 className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[14px] font-medium leading-[1.25] tracking-tight text-white md:mt-3 md:gap-x-2 md:text-xl md:leading-[1.2]">
                    {links.map((link, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 md:gap-2">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1 transition-colors duration-300 hover:text-silver-bright md:gap-1.5"
                        >
                          {link.label}
                          <svg
                            className="h-3 w-3 shrink-0 text-silver-mid transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-silver-bright md:h-3.5 md:w-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                          </svg>
                        </a>
                        {idx < links.length - 1 && (
                          <span className="text-silver-mid">&amp;</span>
                        )}
                      </span>
                    ))}
                  </h3>
                );
              }

              // Case 2: single link
              if (url) {
                return (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-1.5 inline-flex items-center gap-1 text-[14px] font-medium leading-[1.25] tracking-tight text-white transition-colors duration-300 hover:text-silver-bright md:mt-3 md:gap-1.5 md:text-xl md:leading-[1.2]"
                  >
                    {milestone.subtitle || milestone.title}
                    <svg
                      className="h-3 w-3 shrink-0 text-silver-mid transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-silver-bright md:h-3.5 md:w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                );
              }

              // Case 3: plain text
              return (
                <h3 className="mt-1.5 text-[14px] font-medium leading-[1.25] tracking-tight text-white md:mt-3 md:text-xl md:leading-[1.2]">
                  {milestone.subtitle || milestone.title}
                </h3>
              );
            })()}

            {milestone.detail && (
              <p className="mt-1 text-[11.5px] leading-snug text-text-secondary md:mt-1.5 md:text-[13px]">
                {milestone.detail}
              </p>
            )}

            <p
              className={`mt-2 font-mono text-[9px] tracking-[0.24em] uppercase md:hidden ${
                isCurrent ? 'text-silver' : 'text-text-muted'
              }`}
            >
              {milestone.date}
            </p>

            {milestone.description && (
              <>
                <p
                  className={`mt-2 text-[11.5px] leading-[1.55] text-text-muted md:mt-5 md:text-[13px] md:leading-relaxed ${
                    expanded ? '' : 'line-clamp-4 md:line-clamp-none'
                  }`}
                >
                  {milestone.description}
                </p>

                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="mt-1.5 inline-flex items-center gap-1 font-mono text-[9px] tracking-[0.2em] text-silver uppercase transition-colors hover:text-white md:hidden"
                  aria-expanded={expanded}
                >
                  {expanded ? 'Read Less' : 'Read More'}
                  <span className="text-[11px] leading-none">
                    {expanded ? '−' : '+'}
                  </span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Current role — animated vertical bar */}
        {isCurrent && (
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
            className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-white/60 via-white to-white/60"
          />
        )}
      </div>

      {/* Current marker */}
      {isCurrent && (
        <motion.div
          initial={{ opacity: 0, x: isRight ? 8 : -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`absolute top-4 flex items-center gap-2 right-4 md:${
            isRight ? 'right-4' : 'left-4'
          }`}
        >
          <span className="h-3 w-px bg-white" />
          <span className="font-mono text-[9px] tracking-[0.28em] text-white uppercase">
            Current
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}