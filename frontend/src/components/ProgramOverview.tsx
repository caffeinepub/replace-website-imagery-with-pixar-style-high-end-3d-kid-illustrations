import { forwardRef, useEffect, useRef, useState } from 'react';
import { CheckCircle, BookOpen, Star, Zap, Package } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { generatedImages } from '@/assets/generatedImages';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Beginner',
    months: 'Months 1–3',
    emoji: '🌱',
    color: 'from-primary/15 to-primary/5',
    borderColor: 'border-primary/30',
    badgeColor: 'bg-primary/10 text-primary',
    skills: [
      'Learning all 26 letter sounds (phonics-based)',
      'Short vowel sounds: a, e, i, o, u',
      'Simple CVC words (cat, dog, sun)',
      'Basic blending: c-a-t → cat',
      'Letter recognition and formation',
      'Oral phonemic awareness exercises',
    ],
    materials: ['Alphabet flashcards', 'Letter tracing workbook', 'Phonics sound chart', 'CVC word cards'],
  },
  {
    phase: 'Phase 2',
    title: 'Intermediate',
    months: 'Months 4–6',
    emoji: '🌿',
    color: 'from-secondary/15 to-secondary/5',
    borderColor: 'border-secondary/30',
    badgeColor: 'bg-secondary/10 text-secondary-foreground',
    skills: [
      'Consonant digraphs: sh, ch, th, wh',
      'Consonant blends: bl, cr, st, tr',
      'Long vowel patterns (silent e)',
      'Sight word recognition (100 words)',
      'Reading simple sentences',
      'Phonics-based spelling practice',
    ],
    materials: ['Digraph activity cards', 'Sight word reader books', 'Blend practice sheets', 'Sentence building kit'],
  },
  {
    phase: 'Phase 3',
    title: 'Advanced',
    months: 'Months 7–8',
    emoji: '🌳',
    color: 'from-accent/20 to-accent/5',
    borderColor: 'border-accent/30',
    badgeColor: 'bg-accent/20 text-accent-foreground',
    skills: [
      'Complex vowel patterns (oo, ou, ow, oi)',
      'Multi-syllable word decoding',
      'Reading fluency and expression',
      'Reading comprehension strategies',
      'Independent story reading',
      'Creative writing with phonics rules',
    ],
    materials: ['Fluency reader books', 'Comprehension activity cards', 'Writing journal', 'Advanced word family kit'],
  },
];

export const ProgramOverview = forwardRef<HTMLElement>((_, ref) => {
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

  return (
    <section
      ref={ref}
      id="programs"
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, oklch(0.96 0.02 210) 0%, oklch(0.97 0.02 185) 100%)' }}
    >
      <div ref={sectionRef} className="container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-4"
            style={{ background: 'oklch(0.94 0.04 185)', color: 'oklch(0.38 0.16 175)' }}>
            <BookOpen className="h-4 w-4" />
            Our Program
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            8-Month <span className="gradient-text">Phonics Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A carefully structured program that takes your child from recognizing letters to reading full stories — with all materials provided by Akshar Learning Hub.
          </p>
        </div>

        {/* Journey Image */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <img
            src={generatedImages.programJourney}
            alt="Akshar Learning Hub 8-month phonics program journey"
            className="w-full max-w-3xl mx-auto rounded-3xl shadow-glow h-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).src = generatedImages.kidsAlphabetBlocks;
            }}
          />
        </div>

        {/* Phase Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {phases.map((phase, i) => (
            <div
              key={i}
              className={`rounded-3xl border-2 ${phase.borderColor} bg-gradient-to-b ${phase.color} p-6 transition-all duration-700 hover:shadow-glow hover:-translate-y-1`}
              style={{ transitionDelay: `${300 + i * 150}ms`, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
            >
              {/* Phase Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${phase.badgeColor} mb-2`}>
                    {phase.phase}
                  </span>
                  <h3 className="text-2xl font-bold font-display">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{phase.months}</p>
                </div>
                <div className="text-5xl">{phase.emoji}</div>
              </div>

              {/* Skills */}
              <div className="mb-5">
                <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3 flex items-center gap-1">
                  <Star className="h-3.5 w-3.5" /> Skills Covered
                </h4>
                <ul className="space-y-2">
                  {phase.skills.map((skill, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3 flex items-center gap-1">
                  <Package className="h-3.5 w-3.5" /> Materials Provided
                </h4>
                <div className="flex flex-wrap gap-2">
                  {phase.materials.map((mat, j) => (
                    <Badge key={j} variant="secondary" className="text-xs rounded-full">
                      {mat}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Materials Banner */}
        <div className={`rounded-3xl p-6 md:p-8 text-center transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'linear-gradient(135deg, oklch(0.52 0.18 240), oklch(0.58 0.16 175))' }}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <Zap className="h-6 w-6 text-white" />
            <h3 className="text-xl font-bold text-white font-display">All Materials Included!</h3>
          </div>
          <p className="text-white/90 max-w-xl mx-auto text-sm">
            Every workbook, flashcard, reader, and activity kit is provided by Akshar Learning Hub. Parents don't need to buy anything extra — just bring your child's enthusiasm!
          </p>
        </div>
      </div>
    </section>
  );
});

ProgramOverview.displayName = 'ProgramOverview';
