import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, CheckCircle, Home, Building, Key, Sofa, Sparkles, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "From regular maintenance to deep cleans, we'll make your home in Bunbury shine. Kitchens, bathrooms, bedrooms - we cover it all."
    },
    {
      icon: Building,
      title: "Commercial Cleaning", 
      description: "Create a clean and healthy environment for your employees and customers. We offer tailored cleaning solutions for offices and retail spaces."
    },
    {
      icon: Key,
      title: "End of Lease Cleaning",
      description: "Moving out? Our comprehensive end of lease cleaning will help you get your bond back. We follow a detailed checklist to ensure satisfaction."
    },
    {
      icon: Sofa,
      title: "Upholstery & Carpet",
      description: "Revitalize your carpets and furniture. We use professional techniques to remove stains and odours, leaving them fresh and clean."
    },
    {
      icon: Sparkles,
      title: "Window Cleaning",
      description: "Enjoy crystal clear views with our streak-free window cleaning service for both interior and exterior windows."
    },
    {
      icon: Star,
      title: "Custom Cleaning Jobs",
      description: "Have a specific cleaning need? We can create a custom cleaning plan just for you. Get in touch to discuss your requirements."
    }
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "We use only the highest quality, eco-friendly cleaning products and equipment."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "We work around your schedule with morning, afternoon, and weekend availability."
    },
    {
      icon: CheckCircle,
      title: "100% Satisfaction",
      description: "We stand by our work. If you're not completely satisfied, we'll make it right."
    }
  ];

  return (
    <section id="services" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of services to meet your needs. We are flexible, reliable, and pay attention to every detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-smooth">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-hero-gradient rounded-xl flex items-center justify-center mx-auto">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;