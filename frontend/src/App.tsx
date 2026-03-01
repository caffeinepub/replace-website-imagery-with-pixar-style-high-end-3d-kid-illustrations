import { Toaster } from "@/components/ui/sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Downloads from "./components/Downloads";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Payment from "./components/Payment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "payment">("home");

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#payment") {
        setCurrentPage("payment");
      } else {
        setCurrentPage("home");
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateToPayment = () => {
    window.location.hash = "#payment";
    setCurrentPage("payment");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateHome = () => {
    window.location.hash = "";
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background font-nunito">
        <Header onNavigateHome={navigateHome} />
        {currentPage === "payment" ? (
          <Payment onBack={navigateHome} />
        ) : (
          <main>
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <Downloads onNavigateToPayment={navigateToPayment} />
            <Contact />
          </main>
        )}
        <Footer onNavigateHome={navigateHome} />
        <WhatsAppButton />
        <Toaster richColors position="top-right" />
      </div>
    </QueryClientProvider>
  );
}

export default App;
