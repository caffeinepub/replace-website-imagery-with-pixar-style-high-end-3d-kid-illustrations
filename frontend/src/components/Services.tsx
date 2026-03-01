import { GraduationCap, Volume2, Calculator, Users, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: GraduationCap,
    title: "After School Education Support",
    subtitle: "Tuitions",
    description:
      "Comprehensive after-school tutoring covering all core subjects. We ensure students understand concepts deeply, complete homework effectively, and stay ahead in their curriculum.",
    grades: "Grades 1–8",
    color: "var(--neon-cyan)",
    bg: "oklch(0.78 0.2 195 / 0.06)",
    borderColor: "oklch(0.78 0.2 195 / 0.3)",
  },
  {
    icon: Volume2,
    title: "Phonics Program",
    subtitle: "Early Literacy",
    description:
      "Our structured phonics program builds strong reading and writing foundations. Children learn letter sounds, blending, and decoding skills through fun, multi-sensory activities.",
    grades: "Early Learners (Grades 1–3)",
    color: "var(--neon-pink)",
    bg: "oklch(0.68 0.28 350 / 0.06)",
    borderColor: "oklch(0.68 0.28 350 / 0.3)",
  },
  {
    icon: Calculator,
    title: "Maths Coaching",
    subtitle: "Conceptual Clarity",
    description:
      "From basic arithmetic to advanced algebra, our maths coaching builds conceptual clarity and problem-solving skills. We focus on eliminating silly mistakes and building exam confidence.",
    grades: "Grades 1–10",
    color: "var(--neon-orange)",
    bg: "oklch(0.75 0.22 45 / 0.06)",
    borderColor: "oklch(0.75 0.22 45 / 0.3)",
  },
  {
    icon: Users,
    title: "Special Subject Mentoring",
    subtitle: "Personalized Support",
    description:
      "One-on-one or small group mentoring for specific subjects where students need extra attention. Tailored to each student's learning style and pace for maximum progress.",
    grades: "All Grades",
    color: "var(--neon-purple)",
    bg: "oklch(0.65 0.25 290 / 0.06)",
    borderColor: "oklch(0.65 0.25 290 / 0.3)",
  },
  {
    icon: Trophy,
    title: "Scholarship & Exam Preparation",
    subtitle: "Competitive Excellence",
    description:
      "Specialized coaching for scholarship exams and board exam preparation. We cover past papers, exam strategies, time management, and intensive practice to maximize scores.",
    grades: "Grades 5–10",
    color: "var(--neon-yellow)",
    bg: "oklch(0.88 0.22 100 / 0.06)",
    borderColor: "oklch(0.88 0.22 100 / 0.3)",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20" style={{ background: "oklch(0.97 0.01 240)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 border-2"
            style={{
              borderColor: "var(--neon-orange)",
              color: "var(--neon-orange)",
              background: "oklch(0.75 0.22 45 / 0.08)",
            }}
          >
            Our Programs
          </div>
          <h2 className="font-poppins font-800 text-3xl sm:text-4xl text-foreground mb-4">
            Programs Designed for Every Learner
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
            From phonics for early readers to scholarship prep for senior students — we have a program tailored for every child's needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-6 border-2 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 group"
              style={{
                borderColor: service.borderColor,
                background: service.bg,
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: service.color }}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="mb-3">
                <Badge
                  variant="outline"
                  className="text-xs font-semibold mb-2 border"
                  style={{ borderColor: service.color, color: service.color }}
                >
                  {service.subtitle}
                </Badge>
              </div>
              <h3 className="font-poppins font-700 text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Grade badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-700 font-poppins"
                style={{
                  background: service.color,
                  color: "white",
                }}
              >
                🎓 {service.grades}
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div
            className="rounded-3xl p-6 flex flex-col items-center justify-center text-center border-2 border-dashed"
            style={{ borderColor: "var(--neon-cyan)" }}
          >
            <div className="text-4xl mb-3">✨</div>
            <h3 className="font-poppins font-700 text-lg text-foreground mb-2">
              Not Sure Which Program?
            </h3>
            <p className="text-sm text-foreground/60 mb-4">
              Book a free demo session and we'll guide you to the perfect program for your child.
            </p>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-2.5 rounded-xl text-sm font-poppins font-700 text-white transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))",
                boxShadow: "0 4px 15px var(--neon-cyan-glow)",
              }}
            >
              Book Free Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
