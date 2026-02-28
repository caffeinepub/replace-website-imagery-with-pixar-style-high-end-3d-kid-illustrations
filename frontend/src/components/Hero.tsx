import { forwardRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, BookOpen, Star, ArrowRight, GraduationCap } from 'lucide-react';
import { generatedImages } from '@/assets/generatedImages';

interface HeroProps {
  onStartLearning: () => void;
}

export const Hero = forwardRef<HTMLElement, HeroProps>(({ onStartLearning }, ref) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: <GraduationCap className="h-5 w-5" />, value: '500+', label: 'Happy Learners' },
    { icon: <Star className="h-5 w-5" />, value: '8 Months', label: 'Structured Program' },
    { icon: <BookOpen className="h-5 w-5" />, value: '100%', label: 'Materials Provided' },
  ];

  return (
    <section
      ref={ref}
      id="home"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, oklch(0.94 0.04 230) 0%, oklch(0.96 0.03 185) 50%, oklch(0.94 0.04 155) 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'oklch(0.62 0.18 240)' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ background: 'oklch(0.58 0.16 175)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'oklch(0.72 0.14 185)' }} />

      <div className="container relative py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div
            className={`flex flex-col gap-6 text-center lg:text-left transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full px-5 py-2.5 text-sm font-semibold border"
              style={{
                background: 'oklch(0.96 0.04 230 / 0.8)',
                borderColor: 'oklch(0.62 0.18 240 / 0.3)',
                color: 'oklch(0.42 0.18 240)',
              }}
            >
              <Sparkles className="h-4 w-4" />
              India's Premier Phonics Learning Program
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-display leading-tight">
              Where Every Child
              <span className="block gradient-text mt-1">Learns to Read</span>
              <span className="block text-foreground">& Write with Joy!</span>
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              At <strong className="text-foreground">Akshar Learning Hub</strong>, we use proven phonics methods to help children aged 3–10 build strong reading and writing foundations — one sound at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={onStartLearning}
                className="rounded-2xl text-base h-13 px-8 font-bold gradient-blue-green text-white border-0 shadow-glow hover:opacity-90 transition-all hover:scale-105"
              >
                Try Free Activities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl text-base h-13 px-8 font-bold border-2 hover:bg-primary/5"
                style={{ borderColor: 'oklch(0.62 0.18 240 / 0.4)' }}
                onClick={() => {
                  document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Programs
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 justify-center lg:justify-start flex-wrap mt-2">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-blue-green text-white">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute -inset-6 rounded-4xl blur-3xl opacity-30"
              style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 240), oklch(0.58 0.16 175))' }} />
            <img
              src={generatedImages.heroKidsReading}
              alt="Happy children learning phonics at Akshar Learning Hub"
              className="relative rounded-3xl shadow-2xl w-full h-auto animate-float"
              onError={(e) => {
                (e.target as HTMLImageElement).src = generatedImages.kidsReadingBooks;
              }}
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-glow px-4 py-3 flex items-center gap-2 border border-border">
              <div className="flex">
                {['🌟', '📚', '✏️'].map((emoji, i) => (
                  <span key={i} className="text-xl">{emoji}</span>
                ))}
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">Phonics-Based</div>
                <div className="text-xs text-muted-foreground">Proven Method</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
