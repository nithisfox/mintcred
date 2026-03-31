import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, IndianRupee, BarChart, DollarSign, Wallet, ShieldCheck } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-[#E2F7EA] via-[#F4F9E8] to-[#FFFBEB]">
      {/* Animated Background Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <TrendingUp className="absolute top-[20%] left-[10%] text-primary w-16 h-16 animate-float-slow" />
        <IndianRupee className="absolute top-[15%] right-[15%] text-primary w-20 h-20 animate-float-medium" />
        <BarChart className="absolute bottom-[25%] left-[15%] text-secondary w-24 h-24 animate-float-fast" />
        <DollarSign className="absolute bottom-[20%] right-[10%] text-primary w-12 h-12 animate-float-slow" />
        <Wallet className="absolute top-[40%] right-[25%] text-secondary w-16 h-16 animate-float-medium" />
        <ShieldCheck className="absolute bottom-[40%] left-[5%] text-primary w-14 h-14 animate-float-fast" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/60 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-primary-foreground bg-primary px-2 py-0.5 rounded text-xs mr-1">NEW</span>
            <span className="text-sm font-semibold text-foreground/80">Business Capital in Minutes</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight leading-tight">
            Get Loan Approval in <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              Less Than 10 Minutes
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto font-light">
            Business & Personal Loans tailored for India's self-employed professionals and small business owners.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg px-8 py-6 rounded-full glow-hover shadow-xl shadow-primary/20 w-full sm:w-auto"
            >
              Get Priority Access
            </Button>
            <p className="text-sm text-foreground/50 sm:ml-4 font-medium">No credit score impact</p>
          </div>
        </motion.div>
      </div>

      {/* Fade out to white at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
}
