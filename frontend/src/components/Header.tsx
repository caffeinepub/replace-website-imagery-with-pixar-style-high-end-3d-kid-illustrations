import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onNavigateHome: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Downloads", href: "#downloads" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ onNavigateHome }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-card"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-purple)] shadow-md">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-poppins font-800 text-base text-foreground leading-none">
                Akshar
              </span>
              <span className="font-poppins text-xs font-600 text-[var(--neon-cyan)] leading-none">
                Learning Hub
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-foreground rounded-lg hover:bg-muted transition-all duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[var(--neon-cyan)] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="font-poppins font-semibold text-sm px-5 py-2 rounded-xl text-white"
              style={{
                background: "linear-gradient(135deg, var(--neon-pink), var(--neon-purple))",
                boxShadow: "0 4px 15px var(--neon-pink-glow)",
              }}
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-border shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-sm font-semibold text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("#contact")}
              className="mt-2 font-poppins font-semibold text-sm rounded-xl text-white"
              style={{
                background: "linear-gradient(135deg, var(--neon-pink), var(--neon-purple))",
              }}
            >
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
