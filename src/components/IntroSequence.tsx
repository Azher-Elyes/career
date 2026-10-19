import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const STAGES = ['ENGINEERING', 'QUALITY', 'OPERATIONS', 'LEADERSHIP'];

export function IntroSequence() {
  const [show, setShow] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    // Skip if already visited in this session
    const seen = sessionStorage.getItem('intro-seen');
    if (seen || reduced) {
      setShow(false);
      return;
    }
    setShow(true);
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('intro-seen', '1');
      document.body.style.overflow = '';
    }, 2600);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [reduced]);

  const skip = () => {
    setShow(false);
    sessionStorage.setItem('intro-seen', '1');
    document.body.style.overflow = '';
  };

  if (reduced) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
        >
          {/* Skip button */}
          <button
            onClick={skip}
            className="absolute top-6 right-6 font-mono text-[10px] tracking-[0.2em] text-text-muted uppercase transition-colors hover:text-white md:top-8 md:right-8"
          >
            Skip Intro
          </button>

          <div className="flex flex-col items-center gap-8">
            {/* Stage sequence */}
            <div className="flex flex-col items-center gap-3">
              {STAGES.map((stage, i) => (
                <motion.span
                  key={stage}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.35,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-mono text-[10px] tracking-[0.4em] text-silver-mid uppercase md:text-xs"
                >
                  {stage}
                </motion.span>
              ))}
            </div>

            {/* Silver line */}
            <div className="relative h-px w-40 overflow-hidden md:w-64">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  delay: 0.3,
                  duration: 2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full w-full bg-gradient-to-r from-transparent via-silver to-transparent"
              />
            </div>

            {/* System ready */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              className="font-mono text-[10px] tracking-[0.4em] text-white uppercase md:text-xs"
            >
              System Ready
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}