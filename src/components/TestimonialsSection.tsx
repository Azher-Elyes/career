import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { TESTIMONIALS } from '@/data/content';

export function TestimonialsSection() {
  // Render Empty State if no real testimonials exist
  if (TESTIMONIALS.length === 0) {
    return (
      <section id="testimonials" className="relative py-6 md:py-8 lg:py-10">
        <div className="container-main">
          
          {/* Header */}
          <div className="mb-16 max-w-3xl">
            <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted md:text-xs">
              <span className="h-px w-8 bg-border" />
              <span>Collaboration</span>
            </div>
            <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.03em] text-white">
              What colleagues say.
            </h2>
          </div>

          {/* Empty State Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex min-h-[240px] items-center justify-center rounded-3xl border border-dashed border-border-bright bg-surface/20 p-10"
          >
            <div className="text-center">
              <Icons.Quote className="mx-auto mb-4 h-8 w-8 text-text-dim" />
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-text-dim">
                Feedback coming soon
              </p>
              <p className="max-w-md text-sm text-text-muted">
                Verified feedback from colleagues, managers, and cross-functional teams I've collaborated with will appear here.
              </p>
            </div>
          </motion.div>
          
        </div>
      </section>
    );
  }

  // Render Carousel/Grid if real testimonials exist
  return (
    <section id="testimonials" className="relative py-24 md:py-32 lg:py-40">
      <div className="container-main">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted md:text-xs">
            <span className="h-px w-8 bg-border" />
            <span>Collaboration</span>
          </div>
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.03em] text-white">
            What colleagues say.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface/20 p-8"
            >
              <div>
                <Icons.Quote className="mb-6 h-6 w-6 text-silver" />
                <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                  "{t.quote}"
                </p>
              </div>
              <footer className="border-t border-border pt-5">
                <p className="text-sm font-medium text-white">{t.author}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-text-muted">
                  {t.role}{t.company ? ` · ${t.company}` : ''}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

      </div>
    </section>
  );
}