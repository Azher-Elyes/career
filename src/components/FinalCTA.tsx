import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedText } from './ui/AnimatedText';
import { MagneticButton } from './ui/MagneticButton';
import { ContactModal } from './ui/ContactModal';
import { scrollTo } from '@/hooks/useSmoothScroll';

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden py-16 md:py-24"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 grid-engineering opacity-40" />
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-silver/10 blur-[140px]" />
      </motion.div>

      {/* Floating particles */}
      <Particles />

      {/* Content */}
      <div className="container-main relative z-10 text-center">
        
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 font-mono text-[10px] tracking-[0.3em] text-silver uppercase md:text-xs"
        >
          Open to Opportunities
        </motion.p>

        {/* Headline */}
        <h2 className="mb-8 text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[0.95] tracking-[-0.04em]">
          <AnimatedText text="Let's connect." as="span" className="block text-white" />
        </h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-10 max-w-lg text-base leading-[1.7] text-text-secondary md:text-lg"
        >
          Open to management opportunities, professional collaborations, and meaningful conversations with industry leaders.
        </motion.p>

        {/* CTA & Footer tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-5"
        >
          <MagneticButton
            onClick={() => setIsContactOpen(true)}
            variant="primary"
            className="group !px-8 !py-3.5 !text-sm"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>
          
          <p className="font-mono text-[9px] tracking-[0.3em] text-text-muted uppercase md:text-[10px]">
            Management · Quality · Operations · Engineering
          </p>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </section>
  );
}

/* Particles component */
function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-silver/40"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}