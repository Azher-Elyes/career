import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  splitBy?: 'word' | 'char';
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  as: Tag = 'h2',
  splitBy = 'word',
}: AnimatedTextProps) {
  const items = splitBy === 'word' ? text.split(' ') : text.split('');

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: splitBy === 'word' ? 0.05 : 0.03,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Tag className={cn('inline-block', className)}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        className="inline-block"
        aria-label={text}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              variants={child}
              className="inline-block will-change-transform"
            >
              {item}
              {splitBy === 'word' && i < items.length - 1 ? '\u00A0' : ''}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}