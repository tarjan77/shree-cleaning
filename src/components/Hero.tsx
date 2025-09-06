import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Star } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] text-white py-20 overflow-hidden">
      {/* Background image - visible on larger screens */}
      <div 
        className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      ></div>
      {/* Gradient background for mobile */}
      <div className="lg:hidden absolute inset-0 bg-hero-gradient"></div>
      {/* Gradient overlay for larger screens */}
      <div className="hidden lg:block absolute inset-0 bg-hero-gradient opacity-90"></div>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center min-h-[500px] lg:min-h-[600px]">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Cleaning Services in{" "}
              <span className="text-secondary">Bunbury</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Transform your space with Shree Cleaning's premium residential and commercial cleaning services. 
              Trusted by families and businesses across Western Australia.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-secondary" />
              <span>100% Satisfaction</span>
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

        {/* Hero image for larger screens */}
        <div className="hidden lg:block relative">
          <img 
            src={heroImage} 
            alt="Professional cleaning team in action" 
            className="rounded-2xl shadow-glow w-full h-[500px] object-cover"
          />
          {/* Stats card */}
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