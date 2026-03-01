import { MessageCircle } from "lucide-react";

const whatsappUrl = `https://wa.me/917718823635?text=${encodeURIComponent("Hello! I'm interested in Akshar Learning Hub's tutoring programs. Could you please share more details?")}`;

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full text-white transition-all duration-300 hover:scale-110 pulse-ring"
      style={{
        background: "linear-gradient(135deg, #25D366, #128C7E)",
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.5)",
      }}
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
