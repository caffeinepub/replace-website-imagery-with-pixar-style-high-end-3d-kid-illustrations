import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, User, Lock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRegisterUser, useVerifyOTP } from "@/hooks/useQueries";

interface OTPModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  downloadName: string;
}

export default function OTPModal({ open, onClose, onSuccess, downloadName }: OTPModalProps) {
  const [step, setStep] = useState<"form" | "otp" | "success">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const registerMutation = useRegisterUser();
  const verifyMutation = useVerifyOTP();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    try {
      const returnedOtp = await registerMutation.mutateAsync({ name, email, phone });
      setGeneratedOtp(returnedOtp);
      setStep("otp");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Registration failed. Please try again.";
      toast.error(msg);
    }
  };

  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter the 6-digit OTP");
      return;
    }
    try {
      const result = await verifyMutation.mutateAsync({ email, otp });
      if (result) {
        setStep("success");
        setTimeout(() => {
          onSuccess();
          handleClose();
        }, 1500);
      } else {
        toast.error("Incorrect OTP. Please try again.");
      }
    } catch {
      toast.error("Verification failed. Please try again.");
    }
  };

  const handleClose = () => {
    setStep("form");
    setName("");
    setEmail("");
    setPhone("");
    setOtp("");
    setGeneratedOtp("");
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md rounded-3xl border-2" style={{ borderColor: "var(--neon-cyan)" }}>
        <DialogHeader>
          <DialogTitle className="font-poppins font-800 text-xl text-foreground flex items-center gap-2">
            <Lock className="w-5 h-5" style={{ color: "var(--neon-cyan)" }} />
            {step === "success" ? "Access Granted!" : "Unlock Download"}
          </DialogTitle>
          <DialogDescription className="text-foreground/60 text-sm">
            {step === "form" && `Sign up to access "${downloadName}"`}
            {step === "otp" && "Enter the OTP to verify your details"}
            {step === "success" && "Your download is ready!"}
          </DialogDescription>
        </DialogHeader>

        {step === "form" && (
          <div className="space-y-4 mt-2">
            <div>
              <Label className="text-sm font-semibold text-foreground/80 flex items-center gap-1.5 mb-1.5">
                <User className="w-4 h-4" style={{ color: "var(--neon-cyan)" }} />
                Full Name
              </Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="rounded-xl border-2 focus:border-[var(--neon-cyan)]"
              />
              {errors.name && (
                <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.name}
                </p>
              )}
            </div>

            <div>
              <Label className="text-sm font-semibold text-foreground/80 flex items-center gap-1.5 mb-1.5">
                <Mail className="w-4 h-4" style={{ color: "var(--neon-cyan)" }} />
                Email Address
              </Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="rounded-xl border-2 focus:border-[var(--neon-cyan)]"
              />
              {errors.email && (
                <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <Label className="text-sm font-semibold text-foreground/80 flex items-center gap-1.5 mb-1.5">
                <Phone className="w-4 h-4" style={{ color: "var(--neon-cyan)" }} />
                Mobile Number
              </Label>
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                placeholder="10-digit mobile number"
                className="rounded-xl border-2 focus:border-[var(--neon-cyan)]"
              />
              {errors.phone && (
                <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </p>
              )}
            </div>

            <Button
              onClick={handleSubmit}
              disabled={registerMutation.isPending}
              className="w-full rounded-xl font-poppins font-700 text-white py-3"
              style={{
                background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))",
                boxShadow: "0 4px 15px var(--neon-cyan-glow)",
              }}
            >
              {registerMutation.isPending ? (
                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending OTP...</>
              ) : (
                "Get OTP"
              )}
            </Button>
          </div>
        )}

        {step === "otp" && (
          <div className="space-y-4 mt-2">
            {/* Demo OTP display */}
            <div
              className="rounded-2xl p-4 border-2 text-center"
              style={{
                borderColor: "var(--neon-yellow)",
                background: "oklch(0.88 0.22 100 / 0.08)",
              }}
            >
              <p className="text-xs text-foreground/60 mb-1 font-semibold">
                📱 Demo Mode — OTP displayed here (in production, sent via SMS)
              </p>
              <p className="font-poppins font-900 text-3xl tracking-widest" style={{ color: "var(--neon-orange)" }}>
                {generatedOtp}
              </p>
            </div>

            <div>
              <Label className="text-sm font-semibold text-foreground/80 mb-1.5 block">
                Enter 6-digit OTP
              </Label>
              <Input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="Enter OTP"
                className="rounded-xl border-2 text-center text-xl tracking-widest font-poppins font-700"
                style={{ borderColor: "var(--neon-cyan)" }}
                maxLength={6}
              />
            </div>

            <Button
              onClick={handleVerify}
              disabled={verifyMutation.isPending || otp.length !== 6}
              className="w-full rounded-xl font-poppins font-700 text-white py-3"
              style={{
                background: "linear-gradient(135deg, var(--neon-green), var(--neon-cyan))",
                boxShadow: "0 4px 15px var(--neon-green-glow)",
              }}
            >
              {verifyMutation.isPending ? (
                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Verifying...</>
              ) : (
                "Verify & Download"
              )}
            </Button>

            <button
              onClick={() => setStep("form")}
              className="w-full text-sm text-foreground/50 hover:text-foreground transition-colors"
            >
              ← Back to form
            </button>
          </div>
        )}

        {step === "success" && (
          <div className="text-center py-6">
            <CheckCircle
              className="w-16 h-16 mx-auto mb-4"
              style={{ color: "var(--neon-green)" }}
            />
            <h3 className="font-poppins font-800 text-xl text-foreground mb-2">
              Verified Successfully!
            </h3>
            <p className="text-foreground/60 text-sm">
              Your download will start shortly...
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
