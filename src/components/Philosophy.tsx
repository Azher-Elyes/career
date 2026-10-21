import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { PHILOSOPHY, WHAT_I_BRING } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { useCarousel } from '@/hooks/useCarousel';

export function Philosophy() {
  const cards = WHAT_I_BRING.cards;
  const { ref: carouselRef, active, goTo } = useCarousel(cards.length);

  return (
    <section id="about" className="relative py-6 md:py-8">
      <div className="container-main">
        <div className="grid gap-5 sm:gap-16 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          {/* ─── LEFT — Philosophy ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="min-w-0"
          >
            {/* ...your Philosophy content unchanged... */}
            <SectionLabel label={PHILOSOPHY.label} className="mb-8" />
            <h2 className="mb-8 text-[1.5rem] font-light leading-[1.05] tracking-[-0.025em] sm:text-[clamp(2rem,3.5vw,2rem)]">
              {PHILOSOPHY.headline.map((line, i) => (
                <span
                  key={i}
                  className={i === 0 ? 'block text-white' : 'block text-silver-gradient'}
                >
                  {line}
                </span>
              ))}
            </h2>
            <div className="space-y-2">
              {PHILOSOPHY.body.map((line, i) => (
                <p key={i} className="text-sm leading-[1.75] text-text-secondary md:text-[17px] md:leading-[1.85]">
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-2 border-t border-border pt-3">
              <p className="font-[cursive] text-2xl text-silver-mid italic md:text-3xl">
                {PHILOSOPHY.signature}
              </p>
            </div>
          </motion.div>

          {/* ─── RIGHT — What I Bring ─── */}
          {/* min-w-0 is THE fix that lets the carousel overflow-scroll inside a grid */}
          <div className="min-w-0">
            <SectionLabel label={WHAT_I_BRING.label} className="mb-8" />

            <div className="relative">
              {/* Carousel — separated cards, mobile only; grid at sm+ */}
              <div
                ref={carouselRef}
                role="region"
                aria-roledescription="carousel"
                aria-label={WHAT_I_BRING.label}
                className="
                  flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth
                  pb-2
                  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                  sm:grid sm:grid-cols-2 sm:gap-3 sm:overflow-visible sm:pb-0
                  lg:grid-cols-3
                "
              >
                {cards.map((card, i) => {
                  const Icon =
                    (Icons[card.icon as keyof typeof Icons] as React.ComponentType<{
                      className?: string;
                      strokeWidth?: number;
                    }>) ?? Icons.Circle;

                  return (
                    <motion.div
                      key={card.title}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${i + 1} of ${cards.length}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      className="
                        group relative flex w-[82vw] max-w-[360px] shrink-0 snap-start flex-col
                        rounded-lg border border-border bg-bg p-6
                        transition-colors duration-500 hover:bg-surface
                        sm:w-auto sm:max-w-none sm:shrink
                      "
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border-strong bg-bg text-silver transition-all duration-500 group-hover:border-silver/50 group-hover:bg-silver/10">
                          <Icon className="h-4 w-4" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-base font-medium tracking-tight text-white">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-[13px] leading-[1.65] text-text-secondary">
                        {card.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Indicators — mobile only */}
              <div
                className="mt-4 flex justify-center gap-2 sm:hidden"
                role="tablist"
                aria-label="Carousel navigation"
              >
                {cards.map((card, i) => (
                  <button
                    key={card.title}
                    role="tab"
                    aria-selected={active === i}
                    aria-label={`Go to slide ${i + 1}: ${card.title}`}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active === i ? 'w-6 bg-silver' : 'w-1.5 bg-silver/25 hover:bg-silver/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}