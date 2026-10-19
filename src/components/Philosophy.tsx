import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { PHILOSOPHY, WHAT_I_BRING } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';

export function Philosophy() {
  return (
    <section id="about" className="relative py-6 md:py-8">
      <div className="container-main">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          {/* ─── LEFT — Philosophy ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel label={PHILOSOPHY.label} className="mb-8" />
            <h2 className="mb-8 text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.05] tracking-[-0.025em]">
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
                <p
                  key={i}
                  className="text-base leading-[1.75] text-text-secondary md:text-[17px]"
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-10 border-t border-border pt-6">
              <p className="font-[cursive] text-2xl text-silver-mid italic md:text-3xl">
                {PHILOSOPHY.signature}
              </p>
            </div>
          </motion.div>

          {/* ─── RIGHT — What I Bring ─── */}
          <div>
            <SectionLabel label={WHAT_I_BRING.label} className="mb-8" />
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_I_BRING.cards.map((card, i) => {
                const Icon = (Icons[card.icon as keyof typeof Icons] as React.ComponentType<{ className?: string; strokeWidth?: number }>) ?? Icons.Circle;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative flex flex-col bg-bg p-6 transition-colors duration-500 hover:bg-surface"
                  >
                    {/* Icon + Title on the same line */}
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border-strong bg-bg text-silver transition-all duration-500 group-hover:border-silver/50 group-hover:bg-silver/10">
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-base font-medium tracking-tight text-white">
                        {card.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[13px] leading-[1.65] text-text-secondary">
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}