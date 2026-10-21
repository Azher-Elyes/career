import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ArrowDown } from 'lucide-react';
import { HERO } from '@/data/content';
import { scrollTo } from '@/hooks/useSmoothScroll';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-16"
    >
      {/* ═══ BACKGROUND IMAGE ═══ */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}hero-bg.jpg`}
          alt="Engineering environment"
          className="h-full w-full object-cover object-center grayscale opacity-100"
          loading="eager"
        />
        
        {/* Subtle grid on top of image */}
        <div className="absolute inset-0 grid-engineering opacity-100 mix-blend-overlay" />
      </div>

      {/* ═══ CONTENT ═══ */}
      <motion.div
        style={{ y, opacity }}
        className="container-main relative z-10 w-full"
      >
        <div className="max-w-4xl">
          
          {/* Headline — Large, cinematic */}
            <h1 className="mb-10 font-light leading-[1.04] tracking-[-0.035em]">
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
                className="block text-[clamp(1.5rem,3.75vw,3.25rem)] text-silver-gradient"
              >
                Engineering as Leverage.
              </motion.span>
            </h1>

          {/* Description — Clean, larger text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mb-3 max-w-2xl text-base leading-[1.7] text-text-secondary md:text-lg"
          >
            I bring together operational coordination, industrial quality and
            international supplier representation with a strong foundation in
            electrical & electronic engineering and software engineering, enabling
            me to align stakeholders, navigate complex challenges and turn technical
            understanding into effective action.
          </motion.p>

          {/* Current Role Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="mb-12 inline-flex flex-col border-l-2 border-silver pl-5"
          >
            <p className="text-base font-medium tracking-tight text-white md:text-lg">
              Resident Engineer
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] tracking-[0.2em] uppercase">
              <a
                href="https://www.tianma.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1 text-silver transition-colors duration-300 hover:text-white"
              >
                Tianma Microelectronics
                <ArrowUpRight className="h-3 w-3 text-silver-mid transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-white" />
              </a>
            </div>
            <p className="mt-2 font-mono text-[10px] tracking-[0.2em] text-text-muted uppercase">
              Automotive Display Technology
            </p>
          </motion.div>

          {/* ═══ BUTTONS ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex w-full flex-row items-center gap-2 sm:w-auto sm:gap-4"
          >
            {/* Primary Button */}
            <button
              onClick={() => scrollTo('#journey')}
              className="group relative inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-silver px-3 py-3 text-xs font-medium tracking-tight text-bg transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] focus:outline-none focus:ring-2 focus:ring-silver focus:ring-offset-2 focus:ring-offset-bg sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-sm"
            >
              <span className="whitespace-nowrap">Explore My Experience</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </button>

            {/* Secondary Button */}
            <a
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              className="group relative inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-silver/30 bg-bg/50 px-3 py-3 text-xs font-medium tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:border-silver hover:bg-silver/10 focus:outline-none focus:ring-2 focus:ring-silver focus:ring-offset-2 focus:ring-offset-bg sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-sm"
            >
              <span className="whitespace-nowrap">Download CV</span>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-silver-mid transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white sm:h-4 sm:w-4" />
            </a>
          </motion.div>
        </div>
      </motion.div>

{/* ═══ SCROLL INDICATOR ═══ */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 2 }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2"
>
  <button
    onClick={() => scrollTo('#about')}
    className="group flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-text-muted uppercase transition-colors hover:text-white"
    aria-label="Scroll to next section"
  >
    <motion.div
      animate={{ y: [0, 4, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Mouse outline */}
      <div className="relative h-5 w-3 rounded-full border border-current">
        {/* Animated scroll wheel dot */}
        <motion.div
          animate={{ y: [2, 6, 2], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-0 h-1 w-0.5 -translate-x-1/2 rounded-full bg-current"
        />
      </div>
    </motion.div>
  </button>
</motion.div>
    </section>
  );
}