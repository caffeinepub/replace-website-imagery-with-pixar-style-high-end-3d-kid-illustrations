# Specification

## Summary
**Goal:** Build the Akshar Learning Hub tutoring website from scratch with a bright neon-accented design, all key sections, a gated download flow with simulated OTP, and a Motoko backend for user registration.

**Planned changes:**
- Apply a vibrant neon-accented color palette (electric cyan, neon yellow-green, hot pink, vivid orange) on a clean white background using Poppins/Nunito typography and Lucide icons throughout
- Build a fixed responsive navigation header with logo/name, section nav links, "Enroll Now" CTA button, and mobile hamburger menu
- Build a Hero section with the firm name "Akshar Learning Hub", tagline, brief intro, and "Book Free Demo" / "Explore Programs" CTA buttons with animated neon styling
- Build an About section covering discipline, life skills, confidence, and social growth with highlight cards and placeholder student/parent testimonial quotes
- Build five individual service sections/cards: After School Tuitions (Grade 1–8), Phonics, Maths Coaching, Special Subject Mentoring, and Scholarship & Exam Prep (Grade 5–10), each with title, description, grade range, and modern icon
- Build a Testimonials section with 4–6 placeholder cards (name, role, grade, quote) in a carousel or grid layout
- Build a Downloads section with three categories: Free (direct download), Sign-up Required (OTP-gated modal), and Paid (redirects to Payment page); placeholder cards with material labels
- Implement a simulated OTP modal flow: collects name, email (validated), and phone (10-digit Indian), generates and displays a 6-digit OTP on-screen, requires correct OTP entry to unlock download
- Build a Payment page with a placeholder UPI QR code image, placeholder UPI ID, payment instructions, and a WhatsApp link for post-payment confirmation
- Build a Contact section with clickable phone number (7718823635), WhatsApp link (wa.me/917718823635 with pre-filled message), and address (Opposite Pratibha College, Chinchwad, Pune 411019) — no email
- Add a fixed floating WhatsApp button visible on all sections
- Build a site Footer with branding, quick nav links, services list, phone, address, and WhatsApp link — no email
- Implement Motoko backend actor with `registerUser`, `verifyOTP`, and `getUsers` functions; store user data (name, email, phone) in stable storage; OTP is returned from the function for on-screen display

**User-visible outcome:** Visitors can browse the full Akshar Learning Hub website, explore services, read about the program, download free materials directly, access gated materials after completing simulated OTP verification, and be directed to a UPI payment placeholder for paid materials. The site includes prominent WhatsApp and phone contact options throughout.
