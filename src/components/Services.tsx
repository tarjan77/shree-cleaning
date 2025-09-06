import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Car, Sparkles, Clock, Shield } from "lucide-react";
import residentialImage from "@/assets/residential-cleaning.jpg";
import commercialImage from "@/assets/commercial-cleaning.jpg";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Complete home cleaning services including kitchens, bathrooms, living areas, and bedrooms.",
      image: residentialImage,
      features: ["Weekly/Monthly Plans", "Deep Cleaning", "Move-in/Move-out", "Post-Construction"]
    },
    {
      icon: Building2,
      title: "Commercial Cleaning", 
      description: "Professional office and commercial space cleaning to maintain a productive work environment.",
      image: commercialImage,
      features: ["Office Buildings", "Retail Spaces", "Medical Facilities", "Schools & Universities"]
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
      icon: Shield,
      title: "Fully Insured",
      description: "Complete insurance coverage gives you peace of mind with every cleaning service."
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
            From residential homes to commercial spaces, we provide comprehensive cleaning solutions 
            tailored to your specific needs in Bunbury and surrounding areas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
                <div className="absolute top-4 left-4 p-3 bg-white/90 rounded-xl">
                  <service.icon size={24} className="text-primary" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">What's Included:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full mt-4" variant="outline">
                  Learn More
                </Button>
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