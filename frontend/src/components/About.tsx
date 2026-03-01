import { Shield, Eye, Heart, Smile } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Student Discipline & Focus",
    description:
      "We instill strong study habits and discipline that help students stay consistent, organized, and focused on their goals.",
    color: "var(--neon-cyan)",
    bg: "oklch(0.78 0.2 195 / 0.08)",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description:
      "We train students to spot and avoid silly mistakes — the small errors that can cost big marks in exams.",
    color: "var(--neon-orange)",
    bg: "oklch(0.75 0.22 45 / 0.08)",
  },
  {
    icon: Heart,
    title: "Life Skills & Social Growth",
    description:
      "Beyond academics, we nurture communication, teamwork, and social confidence that serve students for life.",
    color: "var(--neon-pink)",
    bg: "oklch(0.68 0.28 350 / 0.08)",
  },
  {
    icon: Smile,
    title: "Building Confidence",
    description:
      "Our positive, encouraging environment helps every child believe in themselves and approach challenges with confidence.",
    color: "var(--neon-green)",
    bg: "oklch(0.82 0.22 145 / 0.08)",
  },
];

const testimonialQuotes = [
  {
    quote: "My daughter has become so much more confident and disciplined since joining Akshar. Her grades have improved tremendously!",
    name: "Priya Sharma",
    role: "Parent of Grade 5 Student",
  },
  {
    quote: "The teachers here really care. My son no longer makes silly mistakes in maths — he double-checks everything now!",
    name: "Rajesh Patil",
    role: "Parent of Grade 7 Student",
  },
  {
    quote: "I used to be shy, but now I participate in class and even made new friends. Akshar changed my life!",
    name: "Ananya",
    role: "Grade 6 Student",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 border-2"
            style={{
              borderColor: "var(--neon-cyan)",
              color: "var(--neon-cyan)",
              background: "oklch(0.78 0.2 195 / 0.08)",
            }}
          >
            About Us
          </div>
          <h2 className="font-poppins font-800 text-3xl sm:text-4xl text-foreground mb-4">
            More Than Just Tutoring
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
            At Akshar Learning Hub, we believe education is about shaping the whole child — academically, socially, and personally. Our positive environment creates lasting change.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/assets/generated/akshar-about.dim_900x700.png"
              alt="Students learning at Akshar Learning Hub"
              className="w-full h-auto rounded-3xl shadow-card-hover object-cover"
              style={{ maxHeight: "420px" }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-5 border-2 transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1"
                style={{
                  borderColor: item.color,
                  background: item.bg,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: item.color }}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-poppins font-700 text-base text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial quotes */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonialQuotes.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-card border border-border relative"
            >
              <div
                className="text-4xl font-poppins font-900 leading-none mb-3"
                style={{ color: "var(--neon-cyan)" }}
              >
                "
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-poppins font-700 text-sm"
                  style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-poppins font-700 text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-foreground/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
