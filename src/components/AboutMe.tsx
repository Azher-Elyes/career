import { motion } from 'framer-motion';
import { ABOUT_ME } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';

export function AboutMe() {
  return (
        <section id="about" className="relative pt-12 pb-8 md:pt-8 md:pb-0">
        <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-3xl md:mb-16"
        >
          <SectionLabel label={ABOUT_ME.label} className="mb-0" />
        </motion.div>

        {/* Split: Intro + Portrait */}
        <div className="grid items-start gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          {/* Left — headline + intro paragraphs */}
          <div>
            {/* Headline — matches Philosophy headline style */}
            <h2 className="mb-4 text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.05] tracking-[-0.025em]">
              <span className="block text-white">{ABOUT_ME.headline}</span>
              <span className="block text-silver-gradient">
                {ABOUT_ME.subheadline}
              </span>
            </h2>

            {ABOUT_ME.intro.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-6 max-w-2xl text-base leading-[1.8] text-text-secondary md:text-[17px] md:leading-[1.85]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Right — portrait */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="group relative mx-auto max-w-[400px]">
              {/* Ambient glow */}
              <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-silver/[0.05] blur-[80px]" />

              {/* Portrait frame */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border">
                <img
                  src={`${import.meta.env.BASE_URL}portrait.jpg`}
                  alt="Mohamed Elyes Azher — Resident Engineer"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}