import { ArrowLeft, QrCode, Smartphone, CheckCircle, MessageCircle, Copy } from "lucide-react";
import { toast } from "sonner";

interface PaymentProps {
  onBack: () => void;
}

const steps = [
  {
    icon: QrCode,
    title: "Scan QR Code",
    description: "Open any UPI app (GPay, PhonePe, Paytm) and scan the QR code above.",
    color: "var(--neon-cyan)",
  },
  {
    icon: Smartphone,
    title: "Complete Payment",
    description: "Enter the amount and complete the payment via your UPI app.",
    color: "var(--neon-orange)",
  },
  {
    icon: CheckCircle,
    title: "Take Screenshot",
    description: "Take a screenshot of the payment confirmation screen.",
    color: "var(--neon-green)",
  },
  {
    icon: MessageCircle,
    title: "Contact on WhatsApp",
    description: "Send the screenshot to us on WhatsApp and we'll deliver your materials.",
    color: "var(--neon-pink)",
  },
];

const upiId = "aksharlearning@upi";
const whatsappUrl = `https://wa.me/917718823635?text=${encodeURIComponent("Hello! I have completed the payment for study materials at Akshar Learning Hub. Please find my payment screenshot attached. Kindly share the materials. Thank you!")}`;

export default function Payment({ onBack }: PaymentProps) {
  const copyUpi = () => {
    navigator.clipboard.writeText(upiId);
    toast.success("UPI ID copied to clipboard!");
  };

  return (
    <div className="min-h-screen pt-20 pb-16" style={{ background: "oklch(0.97 0.01 240)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-foreground transition-colors mb-8 mt-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 border-2"
            style={{
              borderColor: "var(--neon-orange)",
              color: "var(--neon-orange)",
              background: "oklch(0.75 0.22 45 / 0.08)",
            }}
          >
            💳 Secure Payment
          </div>
          <h1 className="font-poppins font-800 text-3xl sm:text-4xl text-foreground mb-3">
            Complete Your Purchase
          </h1>
          <p className="text-foreground/60 text-base max-w-lg mx-auto">
            Pay via UPI and receive your study materials directly on WhatsApp.
          </p>
        </div>

        {/* Payment Card */}
        <div
          className="bg-white rounded-3xl shadow-card-hover border-2 overflow-hidden mb-8"
          style={{ borderColor: "var(--neon-cyan)" }}
        >
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* QR Code */}
              <div className="shrink-0 text-center">
                <div
                  className="w-52 h-52 rounded-2xl border-4 flex items-center justify-center mx-auto mb-3 overflow-hidden"
                  style={{ borderColor: "var(--neon-cyan)" }}
                >
                  <img
                    src="/assets/generated/payment-qr-placeholder.dim_300x300.png"
                    alt="UPI QR Code"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;gap:8px;padding:16px;">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3z"/><path d="M17 17h3v3h-3z"/><path d="M14 17h3"/><path d="M17 14v3"/></svg>
                            <span style="font-size:11px;color:var(--muted-foreground);font-weight:600;text-align:center;">QR Code Placeholder<br/>Replace with actual QR</span>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <p className="text-xs text-foreground/50 font-semibold">Scan with any UPI app</p>
              </div>

              {/* UPI Details */}
              <div className="flex-1 w-full">
                <h3 className="font-poppins font-700 text-lg text-foreground mb-4">
                  Payment Details
                </h3>

                <div
                  className="rounded-2xl p-4 border-2 mb-4"
                  style={{ borderColor: "var(--neon-orange)", background: "oklch(0.75 0.22 45 / 0.06)" }}
                >
                  <p className="text-xs text-foreground/50 font-semibold mb-1">UPI ID</p>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-poppins font-800 text-lg text-foreground">{upiId}</span>
                    <button
                      onClick={copyUpi}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                      title="Copy UPI ID"
                    >
                      <Copy className="w-4 h-4" style={{ color: "var(--neon-orange)" }} />
                    </button>
                  </div>
                  <p className="text-xs text-foreground/40 mt-1 italic">
                    ⚠️ Replace with your actual UPI ID before going live
                  </p>
                </div>

                <div
                  className="rounded-2xl p-4 border-2"
                  style={{ borderColor: "var(--neon-green)", background: "oklch(0.82 0.22 145 / 0.06)" }}
                >
                  <p className="text-xs text-foreground/50 font-semibold mb-1">Accepted Apps</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {["Google Pay", "PhonePe", "Paytm", "BHIM", "Amazon Pay"].map((app) => (
                      <span
                        key={app}
                        className="px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ background: "var(--neon-green)" }}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-white rounded-2xl p-5 border-2 flex items-start gap-4"
              style={{ borderColor: step.color }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-poppins font-800 text-sm"
                style={{ background: step.color }}
              >
                {i + 1}
              </div>
              <div>
                <h4 className="font-poppins font-700 text-sm text-foreground mb-1">{step.title}</h4>
                <p className="text-xs text-foreground/60 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-poppins font-700 text-base transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              boxShadow: "0 6px 24px rgba(37, 211, 102, 0.35)",
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Send Payment Screenshot on WhatsApp
          </a>
          <p className="text-xs text-foreground/40 mt-3">
            We'll deliver your materials within 24 hours of payment confirmation.
          </p>
        </div>
      </div>
    </div>
  );
}
