import { BookOpen, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'programs', label: 'Programs' },
  { id: 'activities', label: 'Activities' },
  { id: 'strategies', label: 'Learning Tips' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined'
    ? encodeURIComponent(window.location.hostname)
    : 'akshar-learning-hub';

  return (
    <footer
      className="border-t border-border"
      style={{ background: 'linear-gradient(180deg, oklch(0.16 0.04 230) 0%, oklch(0.12 0.03 220) 100%)' }}
    >
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl gradient-blue-green shadow-glow">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-display">Akshar Learning Hub</div>
                <div className="text-xs text-white/50">Phonics-Based Learning</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-5">
              Empowering young readers through phonics. Our structured 8-month program helps children aged 3–10 build strong reading and writing foundations.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <SiFacebook className="h-4 w-4" />, href: '#', label: 'Facebook' },
                { icon: <SiInstagram className="h-4 w-4" />, href: '#', label: 'Instagram' },
                { icon: <SiYoutube className="h-4 w-4" />, href: '#', label: 'YouTube' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 font-display">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 font-display">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <div className="font-medium text-white/80 mb-0.5">Address</div>
                42, Shanti Nagar, Bandra West,<br />Mumbai – 400050
              </li>
              <li>
                <div className="font-medium text-white/80 mb-0.5">Phone</div>
                +91 98765 43210
              </li>
              <li>
                <div className="font-medium text-white/80 mb-0.5">Email</div>
                hello@aksharlearninghub.in
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {currentYear} Akshar Learning Hub. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-secondary fill-secondary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/70 hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
