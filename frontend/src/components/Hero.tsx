import { useEffect, useState } from "react";
import { ArrowRight, Star, Users, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "200+", label: "Happy Students" },
  { icon: Star, value: "4.9★", label: "Parent Rating" },
  { icon: Award, value: "95%", label: "Exam Success" },
  { icon: BookOpen, value: "6+", label: "Programs" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.97 0.02 260) 0%, oklch(0.99 0.01 200) 40%, oklch(0.97 0.02 320) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "var(--neon-cyan)" }}
      />
      <div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "var(--neon-pink)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--neon-yellow)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 border-2"
              style={{
                borderColor: "var(--neon-cyan)",
                color: "var(--neon-cyan)",
                background: "oklch(0.78 0.2 195 / 0.08)",
              }}
            >
              <Star className="w-4 h-4 fill-current" />
              Trusted by 200+ Families in Pune
            </div>

            <h1 className="font-poppins font-900 text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground mb-4">
              Akshar{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Learning
              </span>{" "}
              Hub
            </h1>

            <p className="font-poppins font-700 text-xl sm:text-2xl text-foreground/70 mb-4">
              Excellence in Education for Grades 1–8
            </p>

            <p className="text-base sm:text-lg text-foreground/60 mb-8 leading-relaxed max-w-lg">
              We nurture young minds with personalized tutoring, phonics, maths coaching, and exam preparation — building not just academic excellence but discipline, confidence, and life skills.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                onClick={() => scrollTo("#contact")}
                size="lg"
                className="font-poppins font-semibold text-base px-7 py-3 rounded-2xl text-white transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))",
                  boxShadow: "0 6px 24px var(--neon-cyan-glow)",
                }}
              >
                Book Free Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollTo("#services")}
                size="lg"
                variant="outline"
                className="font-poppins font-semibold text-base px-7 py-3 rounded-2xl border-2 transition-all duration-200 hover:scale-105"
                style={{
                  borderColor: "var(--neon-pink)",
                  color: "var(--neon-pink)",
                }}
              >
                Explore Programs
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 text-center shadow-card border border-border"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-1" style={{ color: "var(--neon-cyan)" }} />
                  <div className="font-poppins font-800 text-lg text-foreground">{stat.value}</div>
                  <div className="text-xs text-foreground/50 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl float-animation">
              <img
                src="/assets/generated/akshar-hero.dim_1440x900.png"
                alt="Students learning at Akshar Learning Hub"
                className="w-full h-auto object-cover rounded-3xl"
                style={{ maxHeight: "480px", objectFit: "cover" }}
              />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "linear-gradient(to top, oklch(0.15 0.02 260 / 0.3), transparent)",
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-card-hover border-2"
              style={{ borderColor: "var(--neon-green)" }}
            >
              <div className="font-poppins font-800 text-lg" style={{ color: "var(--neon-green)" }}>
                🎓 Grade 1–10
              </div>
              <div className="text-xs text-foreground/60 font-semibold">All Programs Available</div>
            </div>

            <div
              className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-card-hover border-2"
              style={{ borderColor: "var(--neon-pink)" }}
            >
              <div className="font-poppins font-800 text-base" style={{ color: "var(--neon-pink)" }}>
                📍 Chinchwad, Pune
              </div>
              <div className="text-xs text-foreground/60 font-semibold">Opp. Pratibha College</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
