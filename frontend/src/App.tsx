import { useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProgramOverview } from './components/ProgramOverview';
import { PhonicsActivitiesDemo } from './components/PhonicsActivitiesDemo';
import { LearningStrategies } from './components/LearningStrategies';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const programsRef = useRef<HTMLElement>(null);
  const activitiesRef = useRef<HTMLElement>(null);
  const strategiesRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (section: string) => {
    const refs: Record<string, React.RefObject<HTMLElement | null>> = {
      home: heroRef,
      about: aboutRef,
      programs: programsRef,
      activities: activitiesRef,
      strategies: strategiesRef,
      testimonials: testimonialsRef,
      contact: contactRef,
    };
    const ref = refs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={scrollToSection} />
      <main>
        <Hero ref={heroRef} onStartLearning={() => scrollToSection('activities')} />
        <About ref={aboutRef} />
        <ProgramOverview ref={programsRef} />
        <PhonicsActivitiesDemo ref={activitiesRef} />
        <LearningStrategies ref={strategiesRef} />
        <Testimonials ref={testimonialsRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
