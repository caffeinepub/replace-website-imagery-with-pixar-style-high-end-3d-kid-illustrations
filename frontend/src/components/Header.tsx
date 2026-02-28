import { useState, useEffect } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'programs', label: 'Programs' },
  { id: 'activities', label: 'Activities' },
  { id: 'strategies', label: 'Learning Tips' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export function Header({ onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-glow border-b border-border'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container flex h-18 items-center justify-between py-3">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 transition-transform hover:scale-105"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl gradient-blue-green shadow-glow">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div className="text-left">
            <span className="block text-lg font-bold tracking-tight font-display gradient-text leading-tight">
              Akshar Learning Hub
            </span>
            <span className="block text-xs text-muted-foreground font-medium">
              Phonics-Based Learning
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/8 transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            onClick={() => handleNav('contact')}
            className="hidden sm:flex gradient-blue-green text-white border-0 rounded-xl font-semibold shadow-glow hover:opacity-90 transition-opacity"
            size="sm"
          >
            Enroll Now
          </Button>
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white/98 backdrop-blur-md">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/8 transition-all"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNav('contact')}
              className="mt-2 gradient-blue-green text-white border-0 rounded-xl font-semibold"
            >
              Enroll Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
