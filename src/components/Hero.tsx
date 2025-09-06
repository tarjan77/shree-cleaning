import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Star } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
    <section className="relative bg-hero-gradient text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Professional Cleaning Services in{" "}
              <span className="text-secondary">Bunbury</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Transform your space with Shree Cleaning's premium residential and commercial cleaning services. 
              Trusted by families and businesses across Western Australia.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-secondary" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-secondary" />
              <span>Eco-Friendly Products</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-secondary" />
              <span>100% Satisfaction Guaranteed</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="text-white/90">Rated 5/5 by local customers</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="gap-2 text-lg px-8">
              <Phone size={20} />
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              View Services
            </Button>
          </div>
        </div>

        <div className="relative">
          <img 
            src={heroImage} 
            alt="Professional cleaning team in action" 
            className="rounded-2xl shadow-glow w-full h-[500px] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-xl shadow-card">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;