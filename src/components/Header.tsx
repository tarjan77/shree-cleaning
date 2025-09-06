import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <h1 className="text-2xl font-bold text-primary">Shree Cleaning</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
            Services
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
            Contact
          </a>
        </nav>

        <Button variant="default" className="gap-2">
          <Phone size={18} />
          <span className="hidden sm:inline">Call Now</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;