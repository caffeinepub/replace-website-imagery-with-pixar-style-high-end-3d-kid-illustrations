import { forwardRef, useEffect, useRef, useState } from 'react';
import { Target, Eye, Heart, Users, Award, Lightbulb } from 'lucide-react';
import { generatedImages } from '@/assets/generatedImages';

export const About = forwardRef<HTMLElement>((_, ref) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Structured Curriculum',
      desc: 'Our 8-month program is carefully designed to take children from zero to confident readers, step by step.',
      color: 'from-primary/20 to-primary/5',
      iconBg: 'gradient-blue-green',
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Multi-Sensory Learning',
      desc: 'We engage sight, sound, and touch to make phonics stick — because every child learns differently.',
      color: 'from-secondary/20 to-secondary/5',
      iconBg: 'bg-secondary',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Parent Partnership',
      desc: 'We keep parents involved at every step with progress updates, home activities, and open communication.',
      color: 'from-accent/30 to-accent/5',
      iconBg: 'bg-accent',
    },
  ];

  return (
    <section ref={ref} id="about" className="py-20 md:py-28 bg-white">
      <div ref={sectionRef} className="container">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-4"
            style={{ background: 'oklch(0.94 0.04 230)', color: 'oklch(0.42 0.18 240)' }}>
            <Heart className="h-4 w-4" />
            About Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            About <span className="gradient-text">Akshar Learning Hub</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe every child has the potential to become a confident reader and writer. Our mission is to unlock that potential through the power of phonics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="absolute -inset-4 rounded-4xl blur-2xl opacity-20"
              style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 240), oklch(0.58 0.16 175))' }} />
            <img
              src={generatedImages.aboutTeacherKids}
              alt="Akshar Learning Hub teacher with happy students"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = generatedImages.kidsLearningCircle;
              }}
            />
            {/* Floating stat */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-glow px-5 py-3 border border-border">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm font-bold">Est. 2018</div>
                  <div className="text-xs text-muted-foreground">Trusted by families</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-8 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-blue-green text-white">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold font-display">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-13">
                To empower every child with the gift of literacy through structured, joyful, and effective phonics-based education — making reading and writing a lifelong superpower.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold font-display">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-13">
                A world where no child struggles with reading. We envision classrooms and homes where children confidently pick up books, write their thoughts, and express themselves freely.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r ${item.color} border border-border/50 transition-all duration-500`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconBg} text-white`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';
