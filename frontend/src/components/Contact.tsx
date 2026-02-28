import { forwardRef, useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  name: string;
  email: string;
  phone: string;
  childAge: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  childAge?: string;
  message?: string;
}

export const Contact = forwardRef<HTMLElement>((_, ref) => {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', childAge: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.childAge.trim()) newErrors.childAge = "Child's age is required";
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const contactInfo = [
    { icon: <MapPin className="h-5 w-5" />, label: 'Address', value: '42, Shanti Nagar, Bandra West, Mumbai – 400050, Maharashtra' },
    { icon: <Phone className="h-5 w-5" />, label: 'Phone', value: '+91 98765 43210' },
    { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'hello@aksharlearninghub.in' },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(160deg, oklch(0.94 0.04 230) 0%, oklch(0.96 0.03 185) 50%, oklch(0.94 0.04 155) 100%)' }}
    >
      <div ref={sectionRef} className="container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-4"
            style={{ background: 'oklch(0.96 0.04 230)', color: 'oklch(0.42 0.18 240)' }}>
            <MessageSquare className="h-4 w-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Start Your Child's{' '}
            <span className="gradient-text">Reading Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our program? Ready to enroll? We'd love to hear from you! Fill out the form and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <div
            className={`bg-white rounded-3xl shadow-glow p-6 md:p-8 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-display mb-2">Message Sent! 🎉</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you, <strong>{form.name}</strong>! We'll reach out to you at <strong>{form.email}</strong> within 24 hours.
                </p>
                <Button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', childAge: '', message: '' }); }}
                  className="rounded-xl gradient-blue-green text-white border-0"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold font-display mb-2">Enquiry Form</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      placeholder="e.g. Priya Sharma"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`rounded-xl ${errors.name ? 'border-destructive' : ''}`}
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="priya@example.com"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`rounded-xl ${errors.email ? 'border-destructive' : ''}`}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`rounded-xl ${errors.phone ? 'border-destructive' : ''}`}
                    />
                    {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="childAge">Child's Age *</Label>
                    <Input
                      id="childAge"
                      type="number"
                      min="2"
                      max="14"
                      placeholder="e.g. 5"
                      value={form.childAge}
                      onChange={(e) => handleChange('childAge', e.target.value)}
                      className={`rounded-xl ${errors.childAge ? 'border-destructive' : ''}`}
                    />
                    {errors.childAge && <p className="text-xs text-destructive">{errors.childAge}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your child and what you're looking for..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`rounded-xl resize-none ${errors.message ? 'border-destructive' : ''}`}
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl gradient-blue-green text-white border-0 shadow-glow font-bold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Enquiry
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="bg-white rounded-3xl shadow-glow p-6 md:p-8 space-y-5">
              <h3 className="text-xl font-bold font-display">Contact Information</h3>
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl gradient-blue-green text-white">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">{info.label}</div>
                    <div className="text-sm font-medium text-foreground">{info.value}</div>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="pt-4 border-t border-border">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Follow Us</div>
                <div className="flex gap-3">
                  {[
                    { icon: <SiFacebook className="h-5 w-5" />, label: 'Facebook', href: '#' },
                    { icon: <SiInstagram className="h-5 w-5" />, label: 'Instagram', href: '#' },
                    { icon: <SiYoutube className="h-5 w-5" />, label: 'YouTube', href: '#' },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-border hover:border-primary/50 hover:text-primary transition-all hover:shadow-soft"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-3xl shadow-glow p-6 md:p-8">
              <h3 className="text-lg font-bold font-display mb-4">Class Timings</h3>
              <div className="space-y-3 text-sm">
                {[
                  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
                  { day: 'Saturday', time: '9:00 AM – 2:00 PM' },
                  { day: 'Sunday', time: 'Closed' },
                ].map((slot, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="font-medium text-foreground/80">{slot.day}</span>
                    <span className={`font-semibold ${slot.time === 'Closed' ? 'text-muted-foreground' : 'text-secondary'}`}>
                      {slot.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="rounded-3xl p-6 text-center"
              style={{ background: 'linear-gradient(135deg, oklch(0.52 0.18 240), oklch(0.58 0.16 175))' }}>
              <div className="text-3xl mb-2">🎓</div>
              <h4 className="text-lg font-bold text-white font-display mb-1">Free Demo Class!</h4>
              <p className="text-white/85 text-sm">
                Book a free 30-minute demo class for your child. No commitment required!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
