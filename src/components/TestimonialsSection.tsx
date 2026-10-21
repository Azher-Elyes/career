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
    <section id="testimonials" className="relative py-8 md:py-32 lg:py-10">
      <div className="container-main">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted md:text-xs">
            <span>Collaboration</span>
          </div>
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.03em] text-white">
            What colleagues say.
          </h2>
        </div>

        {/* ═══ CAROUSEL (Mobile) / GRID (Desktop) ═══ */}
        <div className="flex w-full gap-2 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex w-[85vw] max-w-[340px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-border bg-surface/20 p-6 transition-colors duration-500 hover:border-silver/30 hover:bg-surface/30 md:w-auto md:max-w-none md:shrink md:p-8"
            >
              <div>
                {/* HEADER: Icon + Name + Role */}
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 shrink-0 text-silver-mid/50"
                  >
                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                  </svg>

                  <div>
                    <p className="text-sm font-medium text-white">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 font-mono text-[9px] tracking-wider text-text-muted uppercase">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* QUOTE TEXT */}
                <p className="mt-6 text-[14px] leading-relaxed text-text-secondary md:text-[15px]">
                  "{testimonial.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* ═══ COMPANY LOGO MARQUEE ═══ */}
        <div className="mt-2 overflow-hidden border-y border-border/10 py-2 md:mt-2 md:py-2">
          
{/* ═══ COMPANY LOGO MARQUEE ═══ */}
<div className="mt-2 overflow-hidden border-y border-border/50 py-2 md:mt-2 md:py-2">
  <p className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted md:mb-4">
   Company Collaborated with
  </p>

{/* Marquee Container */}
<div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
  <motion.div
    animate={{ x: ["0%", "-50%"] }}
    transition={{ duration: 100, ease: "linear", repeat: Infinity }}
    className="flex w-max shrink-0 items-center gap-6 pr-2 md:gap-2 md:pr-2"
  >
    {/* Logo Set 1 */}
    {[
      "1.png", "2.png", "3.png", "4.png", "5.png", "6.png",
      "7.png", "8.png", "9.png", "10.png", "11.png",
      "12.png", "13.png", "14.png", "15.png", "16.png",
      "17.png", "18.png", "19.png",
    ].map((file, i) => (
      <div
        key={i}
        className="flex shrink-0 items-center justify-center transition-transform duration-500 hover:scale-105"
      >
        {/* ✅ w-fit makes the box hug the image, overflow-hidden clips the corners cleanly */}
        <div className="w-fit overflow-hidden rounded-md bg-white shadow-sm">
          <img
            src={`${import.meta.env.BASE_URL}logos/${file}`}
            alt={`Partner logo ${i + 1}`}
            className="h-8 w-auto object-contain md:h-10"
            loading="lazy"
          />
        </div>
      </div>
    ))}

    {/* Logo Set 2 — duplicate for seamless loop */}
    {[
      "1.png","2.png", "3.png", "4.png", "5.png", "6.png",
      "7.png", "8.png", "9.png", "10.png", "11.png",
      "12.png", "13.png", "14.png", "15.png", "16.png",
      "17.png", "18.png", "19.png",
    ].map((file, i) => (
      <div
        key={`dup-${i}`}
        className="flex shrink-0 items-center justify-center transition-transform duration-500 hover:scale-105"
      >
        {/* ✅ Same fix for the duplicate set */}
        <div className="w-fit overflow-hidden rounded-md bg-white shadow-sm">
          <img
            src={`${import.meta.env.BASE_URL}logos/${file}`}
            alt=""
            aria-hidden="true"
            className="h-8 w-auto object-contain md:h-10"
            loading="lazy"
          />
        </div>
      </div>
    ))}
  </motion.div>
</div>
</div>
        </div>
      </div>
    </section>
  );
}