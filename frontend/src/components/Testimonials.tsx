import { forwardRef, useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generatedImages } from '@/assets/generatedImages';

const testimonials = [
  {
    name: 'Priya Sharma',
    child: 'Mom of Aarav, 5 years old',
    rating: 5,
    text: "Honestly, I was a bit skeptical at first — Aarav used to throw tantrums every time I tried to make him read. But after just 2 months at Akshar, he started picking up his books on his own! The way they teach sounds instead of just letters made such a huge difference. Now he reads his bedtime story to ME! 😄",
    avatar: '👩‍👦',
  },
  {
    name: 'Rajesh & Meena Patel',
    child: 'Parents of Diya, 6 years old',
    rating: 5,
    text: "We tried a few other programs before Akshar and nothing clicked. Here, the teachers are so patient and the activities are genuinely fun — Diya actually looks forward to her classes! In 4 months she went from struggling with the alphabet to reading simple sentences. We're so grateful.",
    avatar: '👨‍👩‍👧',
  },
  {
    name: 'Sunita Krishnan',
    child: 'Mom of Rohan, 7 years old',
    rating: 5,
    text: "Rohan has dyslexia and I was worried no program would work for him. The teachers at Akshar took the time to understand his needs and adapted their approach. The multi-sensory methods they use — touching letters, hearing sounds, seeing pictures — it all came together for him. His confidence has gone through the roof!",
    avatar: '👩‍👦',
  },
  {
    name: 'Anita Desai',
    child: 'Mom of twins Kavya & Kiran, 5 years old',
    rating: 5,
    text: "Managing two kids in the same program was my worry, but Akshar handled it beautifully. Both my twins are at different paces and the teachers work with each of them individually. The materials they provide are top quality — we don't have to buy anything extra. Totally worth every rupee!",
    avatar: '👩‍👧‍👦',
  },
  {
    name: 'Vikram Nair',
    child: 'Dad of Arjun, 8 years old',
    rating: 5,
    text: "Arjun was in Class 2 and still couldn't read properly. His school teacher suggested phonics and we found Akshar. Within 3 months, the improvement was visible to everyone — his class teacher even called us to ask what we were doing differently! The structured program really works.",
    avatar: '👨‍👦',
  },
  {
    name: 'Deepa Menon',
    child: 'Mom of Ishaan, 4 years old',
    rating: 5,
    text: "I started Ishaan early because I wanted to give him a strong foundation. Akshar's beginner program is perfect for little ones — it's all play-based and he doesn't even realize he's learning! He comes home singing phonics songs and showing off the words he can read. Best decision ever!",
    avatar: '👩‍👦',
  },
];

export const Testimonials = forwardRef<HTMLElement>((_, ref) => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  // Show 3 at a time on desktop
  const getVisible = (): number[] => {
    const indices: number[] = [];
    for (let i = 0; i < 3; i++) {
      indices.push((current + i) % testimonials.length);
    }
    return indices;
  };

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-20 md:py-28 bg-white"
    >
      <div ref={sectionRef} className="container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-4"
            style={{ background: 'oklch(0.94 0.04 230)', color: 'oklch(0.42 0.18 240)' }}>
            <Star className="h-4 w-4" />
            Parent Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            What Parents <span className="gradient-text">Are Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real families. These are the moments that make our work meaningful.
          </p>
        </div>

        {/* Supporting Image */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <img
            src={generatedImages.testimonialsParents}
            alt="Happy parents and children at Akshar Learning Hub"
            className="w-full max-w-2xl mx-auto rounded-3xl shadow-glow h-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).src = generatedImages.collaboration;
            }}
          />
        </div>

        {/* Desktop: 3-card carousel */}
        <div className={`hidden md:block transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {getVisible().map((idx) => {
              const t = testimonials[idx];
              return (
                <div
                  key={idx}
                  className="rounded-3xl border-2 border-border p-6 flex flex-col gap-4 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'linear-gradient(160deg, oklch(0.97 0.02 230), oklch(0.98 0.01 185))' }}
                >
                  <Quote className="h-8 w-8 text-primary/30" />
                  <p className="text-sm text-foreground/80 leading-relaxed flex-1 italic">"{t.text}"</p>
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-2 border-t border-border">
                    <div className="text-3xl">{t.avatar}</div>
                    <div>
                      <div className="font-bold text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.child}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full border-2 hover:border-primary/50">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 gradient-blue-green' : 'w-2 bg-muted'}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full border-2 hover:border-primary/50">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden">
          <div
            className="rounded-3xl border-2 border-border p-6 flex flex-col gap-4"
            style={{ background: 'linear-gradient(160deg, oklch(0.97 0.02 230), oklch(0.98 0.01 185))' }}
          >
            <Quote className="h-8 w-8 text-primary/30" />
            <p className="text-sm text-foreground/80 leading-relaxed italic">"{testimonials[current].text}"</p>
            <div className="flex items-center gap-1">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <div className="text-3xl">{testimonials[current].avatar}</div>
              <div>
                <div className="font-bold text-sm">{testimonials[current].name}</div>
                <div className="text-xs text-muted-foreground">{testimonials[current].child}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full border-2">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <span className="text-sm text-muted-foreground">{current + 1} / {testimonials.length}</span>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full border-2">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';
