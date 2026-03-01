import { Phone, MapPin, MessageCircle, Clock } from "lucide-react";

const whatsappUrl = `https://wa.me/917718823635?text=${encodeURIComponent("Hello! I'm interested in enrolling my child at Akshar Learning Hub. Could you please share more details about your programs and fees?")}`;

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 border-2"
            style={{
              borderColor: "var(--neon-pink)",
              color: "var(--neon-pink)",
              background: "oklch(0.68 0.28 350 / 0.08)",
            }}
          >
            📞 Get in Touch
          </div>
          <h2 className="font-poppins font-800 text-3xl sm:text-4xl text-foreground mb-4">
            Ready to Start Your Child's Journey?
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Reach out to us directly — we'd love to discuss how we can help your child excel academically and personally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Phone */}
          <div
            className="bg-white rounded-3xl p-6 border-2 text-center transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1"
            style={{ borderColor: "var(--neon-cyan)" }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: "var(--neon-cyan)" }}
            >
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-poppins font-700 text-base text-foreground mb-2">Call Us</h3>
            <a
              href="tel:+917718823635"
              className="font-poppins font-800 text-xl hover:underline transition-colors"
              style={{ color: "var(--neon-cyan)" }}
            >
              +91 77188 23635
            </a>
            <p className="text-xs text-foreground/50 mt-2">Tap to call directly</p>
          </div>

          {/* WhatsApp */}
          <div
            className="bg-white rounded-3xl p-6 border-2 text-center transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1"
            style={{ borderColor: "var(--neon-green)" }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: "var(--neon-green)" }}
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-poppins font-700 text-base text-foreground mb-2">WhatsApp Us</h3>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins font-800 text-xl hover:underline transition-colors"
              style={{ color: "var(--neon-green)" }}
            >
              +91 77188 23635
            </a>
            <p className="text-xs text-foreground/50 mt-2">Chat with us instantly</p>
          </div>

          {/* Address */}
          <div
            className="bg-white rounded-3xl p-6 border-2 text-center transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1 md:col-span-2 lg:col-span-1"
            style={{ borderColor: "var(--neon-orange)" }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: "var(--neon-orange)" }}
            >
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-poppins font-700 text-base text-foreground mb-2">Visit Us</h3>
            <p className="font-semibold text-foreground/80 text-sm leading-relaxed">
              Opposite Pratibha College,<br />
              Chinchwad, Pune 411019
            </p>
            <p className="text-xs text-foreground/50 mt-2">Maharashtra, India</p>
          </div>
        </div>

        {/* Timing + CTA */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Timing */}
          <div
            className="rounded-3xl p-6 border-2"
            style={{ borderColor: "var(--neon-purple)", background: "oklch(0.65 0.25 290 / 0.05)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "var(--neon-purple)" }}
              >
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-poppins font-700 text-base text-foreground">Class Timings</h3>
            </div>
            <div className="space-y-2">
              {[
                { day: "Monday – Friday", time: "4:00 PM – 8:00 PM" },
                { day: "Saturday", time: "9:00 AM – 1:00 PM" },
                { day: "Sunday", time: "By Appointment" },
              ].map((t) => (
                <div key={t.day} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="text-sm font-semibold text-foreground/70">{t.day}</span>
                  <span className="text-sm font-poppins font-700" style={{ color: "var(--neon-purple)" }}>
                    {t.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div
            className="rounded-3xl p-6 border-2 flex flex-col items-center justify-center text-center"
            style={{
              borderColor: "var(--neon-green)",
              background: "linear-gradient(135deg, oklch(0.82 0.22 145 / 0.08), oklch(0.78 0.2 195 / 0.08))",
            }}
          >
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="font-poppins font-800 text-xl text-foreground mb-2">
              Book a Free Demo Class
            </h3>
            <p className="text-sm text-foreground/60 mb-5 max-w-xs">
              Experience our teaching style firsthand. Book a free demo session for your child today!
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-poppins font-700 text-sm transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
