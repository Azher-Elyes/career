import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, SITE } from '@/data/content';
import { cn } from '@/lib/utils';
import { scrollTo } from '@/hooks/useSmoothScroll';
import { useActiveSection } from '@/hooks/useActiveSection';
import { MagneticButton } from './ui/MagneticButton';

const SECTION_IDS = ['home', 'about', 'journey', 'expertise', 'impact', 'contact'];
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => scrollTo(href), 100);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
            className={cn(
              'flex w-full max-w-[1400px] items-center justify-between rounded-full border transition-all duration-500',
              scrolled
                ? 'glass border-border-bright/60 px-4 py-1.5 shadow-2xl shadow-black/40'
                : 'border-transparent bg-transparent px-4 py-2.5'
            )}
        >
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="relative z-10 flex items-center gap-2.5 px-2"
            aria-label="Mohamed Elyes Azher — home"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Mohamed Elyes Azher logo"
              className="h-16 w-16 rounded-md object-contain"
              width={64}
              height={64}
            />
            <span className="hidden text-base font-semibold tracking-tight text-text sm:inline">
              Mohamed Elyes Azher
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          </button>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className={cn(
                      'relative rounded-full px-4 py-2 text-sm transition-colors duration-300',
                      isActive ? 'text-text' : 'text-text-muted hover:text-text'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-accent/10 border border-accent/20"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <MagneticButton
              href="#contact"
              onClick={() => handleNav('#contact')}
              variant="primary"
              className="hidden !px-5 !py-2.5 !text-xs sm:inline-flex"
              strength={0.2}
            >
              Discuss an Opportunity
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </MagneticButton>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border-bright text-text lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-bg/95 backdrop-blur-2xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-full flex-col justify-center px-8"
            >
              <ul className="space-y-2">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <button
                      onClick={() => handleNav(item.href)}
                      className="group flex w-full items-center justify-between border-b border-border py-5 text-left"
                    >
                      <span className="text-3xl font-medium tracking-tight text-text-muted transition-colors group-hover:text-text">
                        {item.label}
                      </span>
                      <ArrowRight className="h-5 w-5 -translate-x-2 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </button>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-10"
              >
                <MagneticButton
                  onClick={() => handleNav('#contact')}
                  variant="primary"
                  className="w-full justify-center"
                >
                  Discuss an Opportunity
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}