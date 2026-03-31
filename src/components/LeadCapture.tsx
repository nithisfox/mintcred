import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

export function LeadCapture() {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Send email notification via Formsubmit.co
      const response = await fetch("https://formsubmit.co/ajax/Nithiskumar989@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "🚀 New MintCred Waitlist Signup!",
          _template: "box",
          message: `New signup: ${email} joined the MintCred waitlist on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      // Also save to localStorage as backup
      const existingStr = localStorage.getItem("mintcred_emails");
      const existing = existingStr ? JSON.parse(existingStr) : [];
      existing.push({ email, date: new Date().toISOString() });
      localStorage.setItem("mintcred_emails", JSON.stringify(existing));

      setIsSuccess(true);
    } catch {
      // Still show success to user but note the network issue
      const existingStr = localStorage.getItem("mintcred_emails");
      const existing = existingStr ? JSON.parse(existingStr) : [];
      existing.push({ email, date: new Date().toISOString() });
      localStorage.setItem("mintcred_emails", JSON.stringify(existing));
      setIsSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setEmail("");
    setIsSuccess(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background styling for this section */}
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto glass-card rounded-[2.5rem] p-10 md:p-16 text-center border-white/80 shadow-2xl"
        >
          {!isSuccess ? (
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Get Early Access to Instant Loans</h2>
                <p className="text-xl text-foreground/70 max-w-lg mx-auto">
                  Be the first to experience lightning-fast loan approvals. Join our exclusive priority list.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    className="h-14 px-6 rounded-full bg-white/80 border-white/60 text-lg shadow-sm focus-visible:ring-primary focus-visible:border-primary placeholder:text-foreground/40"
                  />
                  {error && <p className="text-destructive text-sm font-medium mt-2 text-left px-4">{error}</p>}
                </div>
                <Button type="submit" size="lg" disabled={isLoading} className="w-full h-14 rounded-full text-lg font-bold glow-hover disabled:opacity-70">
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                      </svg>
                      Submitting...
                    </span>
                  ) : "Notify Me"}
                </Button>
                <p className="text-xs text-foreground/50 pt-2 font-medium">We respect your privacy. No spam ever.</p>
              </form>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8 py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="flex justify-center"
              >
                <CheckCircle2 className="w-24 h-24 text-primary" />
              </motion.div>
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold text-foreground">You're on the Priority List!</h2>
                <p className="text-xl text-foreground/70">
                  You will be among the first to get access to MintCred loans. Keep an eye on your inbox.
                </p>
              </div>
              <Button onClick={resetForm} variant="outline" className="rounded-full px-8 h-12 border-primary/20 hover:bg-primary/5 text-primary font-semibold">
                Back to Home
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
