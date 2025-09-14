import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/src/assets/logo-red.png" alt="Shree Cleaning Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-primary">Shree Cleaning</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
            Services
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
            About
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-smooth">
            Testimonials
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" asChild className="gap-2">
            <a href="#contact">
              Get Free Quote
            </a>
          </Button>
          <Button variant="default" className="gap-2" asChild>
            <a href="tel:+61452135542">
              <Phone size={18} />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;