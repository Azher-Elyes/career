import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { IntroSequence } from '@/components/IntroSequence';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutMe } from '@/components/AboutMe';
import { Philosophy } from '@/components/Philosophy';
import { Journey } from '@/components/Journey';
import { CoreExpertise } from '@/components/CoreExpertise';
import { Impact } from '@/components/Impact';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
export default function App() {
  useSmoothScroll();

  return (
    <>
      <ScrollProgress />
      <IntroSequence />
      <Navbar />
      <main className="noise-overlay">
        <Hero />
        <AboutMe />
        <Philosophy />
        <Journey />        
        <CoreExpertise />
        <Impact />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
