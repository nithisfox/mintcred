import { FaTwitter as Twitter, FaLinkedin as Linkedin, FaInstagram as Instagram, FaGithub as Github } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-black/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-2xl font-bold text-foreground tracking-tight flex items-center gap-1">
               <div className="h-6 w-6 rounded flex items-center justify-center bg-primary text-white text-xs font-bold">M</div>
               <span>Mint<span className="text-primary">Ocred</span></span>
            </div>
            <p className="text-sm text-foreground/60 font-medium">© 2024 MintOcred. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:contact@mintocred.com" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              contact@mintocred.com
            </a>
            <div className="w-px h-4 bg-foreground/20"></div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://github.com/nithisfox/mintcred/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors" title="View README on GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
