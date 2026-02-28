import { forwardRef, useEffect, useRef, useState } from 'react';
import { Ear, Layers, Eye, BookMarked, Mic, Gamepad2, RefreshCw, BookOpen } from 'lucide-react';

const strategies = [
  {
    icon: <Ear className="h-6 w-6" />,
    title: 'Phonemic Awareness',
    desc: 'Children learn to hear, identify, and manipulate individual sounds (phonemes) in spoken words before connecting them to letters.',
    tag: 'Foundation Skill',
    color: 'from-primary/15 to-primary/5',
    iconColor: 'gradient-blue-green',
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'Multi-Sensory Learning',
    desc: 'We engage all senses — seeing letters, hearing sounds, tracing shapes, and saying words aloud — to create stronger memory connections.',
    tag: 'Core Method',
    color: 'from-secondary/15 to-secondary/5',
    iconColor: 'bg-secondary',
  },
  {
    icon: <BookMarked className="h-6 w-6" />,
    title: 'Blending & Segmenting',
    desc: 'Children practice breaking words into sounds (seg-ment-ing) and pushing sounds together (blending) to decode and spell new words.',
    tag: 'Key Skill',
    color: 'from-accent/20 to-accent/5',
    iconColor: 'bg-accent',
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: 'Sight Word Recognition',
    desc: 'High-frequency words that don\'t follow phonics rules (like "the", "was", "said") are learned through visual memory and repetition.',
    tag: 'Reading Fluency',
    color: 'from-primary/15 to-primary/5',
    iconColor: 'gradient-blue-green',
  },
  {
    icon: <Mic className="h-6 w-6" />,
    title: 'Reading Aloud Practice',
    desc: 'Regular read-aloud sessions build fluency, expression, and comprehension while boosting children\'s confidence and love for books.',
    tag: 'Fluency Builder',
    color: 'from-secondary/15 to-secondary/5',
    iconColor: 'bg-secondary',
  },
];

const methods = [
  {
    icon: <Gamepad2 className="h-7 w-7" />,
    title: 'Gamification',
    desc: 'Learning through games, points, and rewards keeps children motivated and makes phonics practice feel like play, not work.',
    emoji: '🎮',
  },
  {
    icon: <RefreshCw className="h-7 w-7" />,
    title: 'Spaced Repetition',
    desc: 'We revisit previously learned sounds and words at strategic intervals to move knowledge from short-term to long-term memory.',
    emoji: '🔄',
  },
  {
    icon: <BookOpen className="h-7 w-7" />,
    title: 'Interactive Storytelling',
    desc: 'Children decode and read stories that use the phonics patterns they\'ve learned, making reading feel purposeful and exciting.',
    emoji: '📖',
  },
];

export const LearningStrategies = forwardRef<HTMLElement>((_, ref) => {
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
      id="strategies"
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, oklch(0.96 0.02 210) 0%, oklch(0.97 0.02 185) 100%)' }}
    >
      <div ref={sectionRef} className="container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-4"
            style={{ background: 'oklch(0.94 0.04 185)', color: 'oklch(0.38 0.16 175)' }}>
            <Layers className="h-4 w-4" />
            Our Approach
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Learning Strategies &{' '}
            <span className="gradient-text">Modern Methods</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine time-tested phonics principles with modern, research-backed teaching methods to create the most effective learning experience for your child.
          </p>
        </div>

        {/* Strategies Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold font-display text-center mb-8">
            🎯 5 Core Learning Strategies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {strategies.map((strategy, i) => (
              <div
                key={i}
                className={`rounded-2xl border border-border/60 bg-gradient-to-br ${strategy.color} p-5 transition-all duration-700 hover:shadow-glow hover:-translate-y-1`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${strategy.iconColor} text-white`}>
                    {strategy.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-base">{strategy.title}</h4>
                    </div>
                    <span className="inline-block text-xs px-2 py-0.5 rounded-full font-medium mb-2"
                      style={{ background: 'oklch(0.62 0.18 240 / 0.12)', color: 'oklch(0.42 0.18 240)' }}>
                      {strategy.tag}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{strategy.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Methods */}
        <div>
          <h3 className="text-xl font-bold font-display text-center mb-8">
            🚀 3 Modern Teaching Methods
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {methods.map((method, i) => (
              <div
                key={i}
                className="rounded-3xl border-2 border-border bg-white p-6 text-center transition-all duration-700 hover:shadow-glow hover:-translate-y-1"
                style={{
                  transitionDelay: `${500 + i * 150}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                <div className="text-5xl mb-4">{method.emoji}</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-blue-green text-white mx-auto mb-4">
                  {method.icon}
                </div>
                <h4 className="text-lg font-bold font-display mb-2">{method.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

LearningStrategies.displayName = 'LearningStrategies';
