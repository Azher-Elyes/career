import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ArrowDown } from 'lucide-react';
import { HeroSystem } from './HeroSystem';
import { HERO } from '@/data/content';
import { scrollTo } from '@/hooks/useSmoothScroll';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 md:pt-32"
    >
      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  BACKGROUND LAYERS                                          */}
      {/* ═══════════════════════════════════════════════════════════ */}

      {/* 1. Deep black base with subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-[#0a0a0d]" />

      {/* 2. Animated engineering grid */}
      <motion.div
        className="pointer-events-none absolute inset-0 grid-engineering opacity-30"
        animate={
          reduced
            ? undefined
            : {
                backgroundPosition: ['0px 0px', '60px 60px'],
              }
        }
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* 3. Top-left silver radial glow */}
      <motion.div
        animate={
          reduced
            ? undefined
            : {
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full bg-silver/[0.06] blur-[120px]"
      />

      {/* 4. Bottom-right silver radial glow */}
      <motion.div
        animate={
          reduced
            ? undefined
            : {
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="pointer-events-none absolute -right-40 -bottom-40 h-[600px] w-[600px] rounded-full bg-silver/[0.04] blur-[120px]"
      />

      {/* 5. Vertical beam of light behind the system diagram */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 lg:block">
        <motion.div
          animate={
            reduced
              ? undefined
              : {
                  opacity: [0.3, 0.6, 0.3],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-1/4 top-1/4 h-[500px] w-[300px] -translate-y-1/2 rounded-full bg-gradient-to-b from-silver/[0.05] via-silver/[0.02] to-transparent blur-3xl"
        />
      </div>

      {/* 6. Floating particles */}
      {!reduced && <Particles />}

      {/* 7. Subtle noise texture */}
      <div className="pointer-events-none absolute inset-0 noise-overlay opacity-40" />

      {/* 8. Bottom fade to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  CONTENT                                                    */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <motion.div
        style={{ y, opacity }}
        className="container-main relative z-10 w-full"
      >
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* ═══ LEFT COLUMN ═══ */}
          <div className="max-w-2xl">
            {/* Top labels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              {HERO.statusLabel.map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center gap-2"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-silver opacity-50"
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-silver" />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-silver uppercase md:text-[11px]">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Main headline */}
            <h1 className="mb-10 font-light leading-[1.15] tracking-[-0.035em]">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[clamp(2rem,5vw,4.25rem)] text-white"
              >
                Leadership First.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[clamp(1.5rem,3.75vw,3.18rem)] text-silver-gradient"
              >
                Engineering as Leverage.
              </motion.span>
            </h1>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.1 }}
              className="mb-10 max-w-xl text-base leading-[1.75] text-text-secondary md:text-[17px]"
            >
I bring together operational coordination, industrial quality and international supplier representation with a strong foundation in electrical & Electronic engineering and Software engineering enabling me to align stakeholders, navigate complex challenges and turn technical understanding into effective action.
            </motion.p>

            {/* Current role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mb-8 border-l-2 border-silver-dark pl-5"
            >
              <p className="mb-1.5 text-sm font-medium tracking-tight text-white md:text-base">
                Resident Engineer | Supplier Representative
              </p>
              <p className="font-mono text-[10px] tracking-[0.2em] text-text-muted uppercase">
                4-CE · Visteon Tunisia · HannStar & Tianma Microelectronics
              </p>
              <p className="mt-1.5 font-mono text-[10px] tracking-[0.2em] text-text-dim uppercase">
                Automotive Display Technology
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollTo('#journey')}
                className="group inline-flex items-center gap-2 rounded-full bg-silver-bright px-6 py-3.5 text-sm font-medium tracking-tight text-bg transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_-5px_rgba(225,227,230,0.4)] focus:outline-none focus:ring-2 focus:ring-silver-bright focus:ring-offset-2 focus:ring-offset-bg"
              >
                Explore My Experience
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-transparent px-6 py-3.5 text-sm font-medium tracking-tight text-white transition-all duration-300 hover:border-silver hover:bg-white/5 hover:shadow-[0_0_30px_-5px_rgba(225,227,230,0.15)] focus:outline-none focus:ring-2 focus:ring-silver focus:ring-offset-2 focus:ring-offset-bg"
              >
                Download CV
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>           
            </motion.div>
          </div>

          {/* ═══ RIGHT COLUMN ═══ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <HeroSystem />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────── */
/*  PARTICLES — floating dots across the hero               */
/* ───────────────────────────────────────────────────────── */
function Particles() {
  const particles = Array.from({ length: 30 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        // Deterministic pseudo-random positions
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const delay = (i * 0.3) % 5;
        const duration = 8 + (i % 5) * 2;
        const size = i % 3 === 0 ? 1.5 : 1;
        const opacity = 0.15 + (i % 4) * 0.1;

        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-silver"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              opacity,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [opacity * 0.5, opacity, opacity * 0.5],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
          />
        );
      })}
    </div>
  );
}