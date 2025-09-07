import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, Sparkles, Home, Building } from "lucide-react";
import residentialImage from "@/assets/residential-cleaning.jpg";
import commercialImage from "@/assets/commercial-cleaning.jpg";

const Services = () => {
  const mainServices = [
    {
      title: "Residential Cleaning",
      description: "From residential homes to commercial spaces, we provide comprehensive cleaning solutions tailored to your specific needs in Bunbury and surrounding areas.",
      image: residentialImage,
      link: "/residential-cleaning"
    },
    {
      title: "Commercial Cleaning", 
      description: "Professional office and commercial space cleaning to maintain a productive work environment.",
      image: commercialImage,
      link: "/commercial-cleaning"
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From residential homes to commercial spaces, we provide comprehensive cleaning solutions tailored to your specific needs in Bunbury and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-smooth overflow-hidden relative">
              <div className="absolute top-6 left-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center z-10">
                {service.title === "Residential Cleaning" ? (
                  <Home className="w-6 h-6 text-primary" />
                ) : (
                  <Building className="w-6 h-6 text-primary" />
                )}
              </div>
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">What's Included:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.title === "Residential Cleaning" ? (
                      <>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-primary" />
                          <span className="text-sm">Weekly/Monthly Plans</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-primary" />
                          <span className="text-sm">Deep Cleaning</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-primary" />
                          <span className="text-sm">Move-in/Move-out</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-primary" />
                          <span className="text-sm">Post-Construction</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-primary" />
                          <span className="text-sm">Office Buildings</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-primary" />
                          <span className="text-sm">Retail Spaces</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-primary" />
                          <span className="text-sm">Hotels & Restaurants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-primary" />
                          <span className="text-sm">Schools & Universities</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                <Button asChild variant="outline" className="w-full">
                  <a href="#contact">Get Free Quote</a>
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