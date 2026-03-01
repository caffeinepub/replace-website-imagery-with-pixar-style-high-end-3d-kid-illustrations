import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of Grade 5 Student",
    quote:
      "Akshar Learning Hub has been a game-changer for my daughter. Her confidence has soared and she now loves going to class. The teachers are incredibly dedicated and patient.",
    stars: 5,
    type: "parent",
  },
  {
    name: "Rohan Mehta",
    role: "Grade 7 Student",
    quote:
      "I used to hate maths but now it's my favourite subject! The way they explain things makes it so easy to understand. I scored 95% in my last exam!",
    stars: 5,
    type: "student",
  },
  {
    name: "Sunita Patil",
    role: "Parent of Grade 3 Student",
    quote:
      "The phonics program is amazing. My son could barely read when he joined, and now he reads full books on his own. The progress in just 3 months is unbelievable!",
    stars: 5,
    type: "parent",
  },
  {
    name: "Ananya Joshi",
    role: "Grade 6 Student",
    quote:
      "I was very shy before joining Akshar. Now I participate in class, make presentations, and even won a school quiz! The teachers here really believe in us.",
    stars: 5,
    type: "student",
  },
  {
    name: "Vikram Desai",
    role: "Parent of Grade 8 Student",
    quote:
      "My son's scholarship exam preparation was excellent. The structured approach, past papers, and time management tips really helped him crack the exam with flying colours.",
    stars: 5,
    type: "parent",
  },
  {
    name: "Kavya Nair",
    role: "Grade 4 Student",
    quote:
      "I love coming to Akshar! We learn so many things and it's fun too. My teacher always checks my work carefully and helps me not make silly mistakes.",
    stars: 5,
    type: "student",
  },
];

const colorMap = [
  "var(--neon-cyan)",
  "var(--neon-pink)",
  "var(--neon-orange)",
  "var(--neon-purple)",
  "var(--neon-green)",
  "var(--neon-yellow)",
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const getVisible = (): number[] => {
    const indices: number[] = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + testimonials.length) % testimonials.length);
    }
    return indices;
  };

  return (
    <section
      id="testimonials"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, oklch(0.12 0.04 260) 0%, oklch(0.15 0.05 290) 100%)",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/assets/generated/akshar-testimonials.dim_1440x600.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-10 right-20 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--neon-cyan)" }}
      />
      <div
        className="absolute bottom-10 left-20 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--neon-pink)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 border-2"
            style={{
              borderColor: "var(--neon-yellow)",
              color: "var(--neon-yellow)",
              background: "oklch(0.88 0.22 100 / 0.1)",
            }}
          >
            ⭐ Success Stories
          </div>
          <h2 className="font-poppins font-800 text-3xl sm:text-4xl text-white mb-4">
            What Our Students & Parents Say
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real stories from real families who've experienced the Akshar difference.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 fill-current"
                    style={{ color: "var(--neon-yellow)" }}
                  />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-poppins font-700"
                  style={{ background: colorMap[i % colorMap.length] }}
                >
                  {t.type === "student" ? (
                    <span className="text-sm">{t.name[0]}</span>
                  ) : (
                    <User className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <div className="font-poppins font-700 text-sm text-white">{t.name}</div>
                  <div className="text-xs text-white/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonials[current].stars }).map((_, si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 fill-current"
                    style={{ color: "var(--neon-yellow)" }}
                  />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-5 italic">
                "{testimonials[current].quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-poppins font-700"
                  style={{ background: colorMap[current % colorMap.length] }}
                >
                  {testimonials[current].name[0]}
                </div>
                <div>
                  <div className="font-poppins font-700 text-sm text-white">
                    {testimonials[current].name}
                  </div>
                  <div className="text-xs text-white/50">{testimonials[current].role}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/20"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="h-2 rounded-full transition-all duration-200"
                    style={{
                      background: i === current ? "var(--neon-cyan)" : "rgba(255,255,255,0.3)",
                      width: i === current ? "20px" : "8px",
                    }}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/20"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
