import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b-0 border-white/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl leading-none">
              M
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight flex items-center gap-2">
              Mint<span className="text-primary">Cred</span>
              <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wider hidden sm:block">Soon</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("calculator")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Calculator
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Contact
            </button>
            <a href="https://github.com/nithisfox/mintcred/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors" title="View README on GitHub">
              <Github size={20} />
            </a>
            <Button onClick={() => scrollToSection("contact")} className="glow-hover rounded-full px-6 font-semibold shadow-lg shadow-primary/20">
              Get Priority Access
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card absolute top-20 left-0 w-full border-b border-white/40 shadow-xl py-4 px-4 flex flex-col gap-4">
          <button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMobileMenuOpen(false); }} className="text-left py-2 text-foreground font-medium border-b border-white/20">
            Home
          </button>
          <button onClick={() => scrollToSection("calculator")} className="text-left py-2 text-foreground font-medium border-b border-white/20">
            Calculator
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-left py-2 text-foreground font-medium border-b border-white/20">
            Contact
          </button>
          <a href="https://github.com/nithisfox/mintcred/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-2 text-foreground font-medium border-b border-white/20">
            <Github size={18} /> Source Code
          </a>
          <Button onClick={() => scrollToSection("contact")} className="w-full mt-2 rounded-full font-semibold">
            Get Priority Access
          </Button>
        </div>
      )}
    </header>
  );
}
