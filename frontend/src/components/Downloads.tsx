import { useState } from "react";
import { Download, Lock, IndianRupee, FileText, BookOpen, ClipboardList } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import OTPModal from "./OTPModal";
import { toast } from "sonner";

interface DownloadsProps {
  onNavigateToPayment: () => void;
}

const freeDownloads = [
  {
    id: "free-1",
    title: "Phonics Workbook – Level 1",
    description: "Introduction to letter sounds and basic blending for early readers.",
    grade: "Grade 1–2",
    icon: BookOpen,
    color: "var(--neon-cyan)",
    available: true,
  },
  {
    id: "free-2",
    title: "Maths Worksheet – Grade 3",
    description: "Addition, subtraction, and multiplication practice sheets.",
    grade: "Grade 3",
    icon: FileText,
    color: "var(--neon-orange)",
    available: true,
  },
  {
    id: "free-3",
    title: "English Grammar Basics",
    description: "Nouns, verbs, adjectives, and sentence formation exercises.",
    grade: "Grade 2–4",
    icon: ClipboardList,
    color: "var(--neon-green)",
    available: true,
  },
  {
    id: "free-4",
    title: "Number Patterns Worksheet",
    description: "Fun number pattern exercises to build logical thinking.",
    grade: "Grade 4–5",
    icon: FileText,
    color: "var(--neon-purple)",
    available: false,
  },
];

const signupDownloads = [
  {
    id: "signup-1",
    title: "Advanced Phonics Materials",
    description: "Comprehensive phonics workbook covering blends, digraphs, and long vowels.",
    grade: "Grade 2–4",
    icon: BookOpen,
    color: "var(--neon-pink)",
    available: true,
  },
  {
    id: "signup-2",
    title: "Past Exam Papers – Grade 5",
    description: "Collection of previous year exam papers with answer keys.",
    grade: "Grade 5",
    icon: ClipboardList,
    color: "var(--neon-cyan)",
    available: true,
  },
  {
    id: "signup-3",
    title: "Maths Problem Bank – Grade 6",
    description: "500+ practice problems covering all Grade 6 maths topics.",
    grade: "Grade 6",
    icon: FileText,
    color: "var(--neon-orange)",
    available: true,
  },
  {
    id: "signup-4",
    title: "Science Notes – Grade 7",
    description: "Comprehensive chapter-wise notes and diagrams for Grade 7 Science.",
    grade: "Grade 7",
    icon: BookOpen,
    color: "var(--neon-green)",
    available: false,
  },
];

const paidDownloads = [
  {
    id: "paid-1",
    title: "Complete Question Bank",
    description: "1000+ questions across all subjects for Grades 5–8 with detailed solutions.",
    grade: "Grade 5–8",
    icon: ClipboardList,
    color: "var(--neon-yellow)",
    price: "₹199",
    available: true,
  },
  {
    id: "paid-2",
    title: "Scholarship Prep Kit",
    description: "Full preparation kit for scholarship exams including mock tests and strategies.",
    grade: "Grade 5–10",
    icon: BookOpen,
    color: "var(--neon-pink)",
    price: "₹299",
    available: true,
  },
  {
    id: "paid-3",
    title: "Board Exam Master Pack",
    description: "Complete study material, past papers, and revision notes for board exams.",
    grade: "Grade 9–10",
    icon: FileText,
    color: "var(--neon-orange)",
    price: "₹399",
    available: false,
  },
];

export default function Downloads({ onNavigateToPayment }: DownloadsProps) {
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [selectedDownload, setSelectedDownload] = useState<{ id: string; title: string } | null>(null);

  const handleFreeDownload = (title: string, available: boolean) => {
    if (!available) {
      toast.info("This material will be available soon! Check back later.");
      return;
    }
    toast.success(`Downloading "${title}"... (Demo: actual file will be linked here)`);
  };

  const handleSignupDownload = (id: string, title: string, available: boolean) => {
    if (!available) {
      toast.info("This material will be available soon! Check back later.");
      return;
    }
    setSelectedDownload({ id, title });
    setOtpModalOpen(true);
  };

  const handleOtpSuccess = () => {
    if (selectedDownload) {
      toast.success(`Access granted! Downloading "${selectedDownload.title}"... (Demo mode)`);
    }
  };

  return (
    <section id="downloads" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 border-2"
            style={{
              borderColor: "var(--neon-green)",
              color: "var(--neon-green)",
              background: "oklch(0.82 0.22 145 / 0.08)",
            }}
          >
            📚 Study Materials
          </div>
          <h2 className="font-poppins font-800 text-3xl sm:text-4xl text-foreground mb-4">
            Download Learning Resources
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Access worksheets, workbooks, past exam papers, and more. Some materials are free, others require a quick sign-up or purchase.
          </p>
        </div>

        <Tabs defaultValue="free" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 rounded-2xl p-1 h-auto" style={{ background: "oklch(0.96 0.01 240)" }}>
            <TabsTrigger
              value="free"
              className="rounded-xl py-3 font-poppins font-700 text-sm data-[state=active]:text-white transition-all"
            >
              <Download className="w-4 h-4 mr-1.5" />
              Free Downloads
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="rounded-xl py-3 font-poppins font-700 text-sm data-[state=active]:text-white transition-all"
            >
              <Lock className="w-4 h-4 mr-1.5" />
              Sign-up Required
            </TabsTrigger>
            <TabsTrigger
              value="paid"
              className="rounded-xl py-3 font-poppins font-700 text-sm data-[state=active]:text-white transition-all"
            >
              <IndianRupee className="w-4 h-4 mr-1.5" />
              Paid Materials
            </TabsTrigger>
          </TabsList>

          {/* Free Downloads */}
          <TabsContent value="free">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {freeDownloads.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5 border-2 transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1"
                  style={{ borderColor: item.available ? item.color : "var(--border)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: item.available ? item.color : "var(--muted)" }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs mb-2"
                    style={{ borderColor: item.color, color: item.color }}
                  >
                    {item.grade}
                  </Badge>
                  <h3 className="font-poppins font-700 text-sm text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-xs text-foreground/55 leading-relaxed mb-4">{item.description}</p>
                  <Button
                    onClick={() => handleFreeDownload(item.title, item.available)}
                    size="sm"
                    className="w-full rounded-xl font-poppins font-700 text-xs text-white"
                    style={{
                      background: item.available
                        ? `linear-gradient(135deg, ${item.color}, var(--neon-cyan))`
                        : "var(--muted)",
                      color: item.available ? "white" : "var(--muted-foreground)",
                    }}
                  >
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    {item.available ? "Free Download" : "Coming Soon"}
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Sign-up Required */}
          <TabsContent value="signup">
            <div
              className="mb-4 p-4 rounded-2xl border-2 flex items-start gap-3"
              style={{ borderColor: "var(--neon-cyan)", background: "oklch(0.78 0.2 195 / 0.06)" }}
            >
              <Lock className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--neon-cyan)" }} />
              <p className="text-sm text-foreground/70">
                These materials require a quick sign-up with your email and phone number. We'll send you an OTP to verify your details before unlocking the download.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {signupDownloads.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5 border-2 transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1"
                  style={{ borderColor: item.available ? item.color : "var(--border)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: item.available ? item.color : "var(--muted)" }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs mb-2"
                    style={{ borderColor: item.color, color: item.color }}
                  >
                    {item.grade}
                  </Badge>
                  <h3 className="font-poppins font-700 text-sm text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-xs text-foreground/55 leading-relaxed mb-4">{item.description}</p>
                  <Button
                    onClick={() => handleSignupDownload(item.id, item.title, item.available)}
                    size="sm"
                    className="w-full rounded-xl font-poppins font-700 text-xs text-white"
                    style={{
                      background: item.available
                        ? `linear-gradient(135deg, ${item.color}, var(--neon-purple))`
                        : "var(--muted)",
                      color: item.available ? "white" : "var(--muted-foreground)",
                    }}
                  >
                    <Lock className="w-3.5 h-3.5 mr-1.5" />
                    {item.available ? "Unlock with Sign-up" : "Coming Soon"}
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Paid Downloads */}
          <TabsContent value="paid">
            <div
              className="mb-4 p-4 rounded-2xl border-2 flex items-start gap-3"
              style={{ borderColor: "var(--neon-yellow)", background: "oklch(0.88 0.22 100 / 0.06)" }}
            >
              <IndianRupee className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--neon-orange)" }} />
              <p className="text-sm text-foreground/70">
                These premium materials require a one-time payment via UPI. After payment, contact us on WhatsApp with your payment screenshot to receive your materials.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {paidDownloads.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5 border-2 transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1"
                  style={{ borderColor: item.available ? item.color : "var(--border)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: item.available ? item.color : "var(--muted)" }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    {item.available && (
                      <span
                        className="font-poppins font-900 text-xl"
                        style={{ color: item.color }}
                      >
                        {item.price}
                      </span>
                    )}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs mb-2"
                    style={{ borderColor: item.color, color: item.color }}
                  >
                    {item.grade}
                  </Badge>
                  <h3 className="font-poppins font-700 text-sm text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-xs text-foreground/55 leading-relaxed mb-4">{item.description}</p>
                  <Button
                    onClick={() => item.available && onNavigateToPayment()}
                    size="sm"
                    className="w-full rounded-xl font-poppins font-700 text-xs text-white"
                    style={{
                      background: item.available
                        ? `linear-gradient(135deg, ${item.color}, var(--neon-orange))`
                        : "var(--muted)",
                      color: item.available ? "white" : "var(--muted-foreground)",
                    }}
                  >
                    <IndianRupee className="w-3.5 h-3.5 mr-1.5" />
                    {item.available ? `Purchase – ${item.price}` : "Coming Soon"}
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* OTP Modal */}
      <OTPModal
        open={otpModalOpen}
        onClose={() => setOtpModalOpen(false)}
        onSuccess={handleOtpSuccess}
        downloadName={selectedDownload?.title ?? ""}
      />
    </section>
  );
}
