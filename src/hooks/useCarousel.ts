// hooks/useCarousel.ts
import { useCallback, useEffect, useRef, useState } from 'react';

export function useCarousel(itemCount: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el || itemCount === 0) return;
    const cardWidth = el.scrollWidth / itemCount;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActive(Math.min(itemCount - 1, Math.max(0, index)));
  }, [itemCount]);

  const goTo = useCallback((index: number) => {
    const el = ref.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / itemCount;
    el.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
  }, [itemCount]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return { ref, active, goTo };
}