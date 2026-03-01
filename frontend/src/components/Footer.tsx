import { BookOpen, Phone, MapPin, MessageCircle, Heart } from "lucide-react";

interface FooterProps {
  onNavigateHome: () => void;
}

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Downloads", href: "#downloads" },
  { label: "Contact", href: "#contact" },
];

const programs = [
  "After School Tuitions",
  "Phonics Program",
  "Maths Coaching",
  "Special Subject Mentoring",
  "Scholarship & Exam Prep",
];

const whatsappUrl = `https://wa.me/917718823635?text=${encodeURIComponent("Hello! I'm interested in Akshar Learning Hub's programs.")}`;

export default function Footer({ onNavigateHome }: FooterProps) {
  const scrollTo = (href: string) => {
    if (window.location.hash === "#payment") {
      onNavigateHome();
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="text-white pt-16 pb-8"
      style={{
        background: "linear-gradient(135deg, oklch(0.1 0.03 260) 0%, oklch(0.13 0.04 290) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={onNavigateHome} className="flex items-center gap-2 mb-4 group">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))" }}
              >
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-poppins font-800 text-base text-white leading-none">Akshar</div>
                <div className="font-poppins text-xs font-600 leading-none" style={{ color: "var(--neon-cyan)" }}>
                  Learning Hub
                </div>
              </div>
            </button>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Excellence in Education for Grades 1–8. Building academic success, discipline, and confidence in every child.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{ background: "#25D366" }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-poppins font-700 text-sm mb-4 uppercase tracking-wider"
              style={{ color: "var(--neon-cyan)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/60 hover:text-white text-sm transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4
              className="font-poppins font-700 text-sm mb-4 uppercase tracking-wider"
              style={{ color: "var(--neon-pink)" }}
            >
              Our Programs
            </h4>
            <ul className="space-y-2">
              {programs.map((p) => (
                <li key={p} className="text-white/60 text-sm">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-poppins font-700 text-sm mb-4 uppercase tracking-wider"
              style={{ color: "var(--neon-orange)" }}
            >
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+917718823635"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors group"
              >
                <Phone className="w-4 h-4 shrink-0" style={{ color: "var(--neon-cyan)" }} />
                +91 77188 23635
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" style={{ color: "var(--neon-green)" }} />
                WhatsApp Chat
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--neon-orange)" }} />
                <span>
                  Opposite Pratibha College,<br />
                  Chinchwad, Pune 411019
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Akshar Learning Hub. All rights reserved.
            </p>
            <p className="text-white/40 text-xs flex items-center gap-1">
              Built with{" "}
              <Heart className="w-3 h-3 fill-current" style={{ color: "var(--neon-pink)" }} />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || "akshar-learning-hub")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
