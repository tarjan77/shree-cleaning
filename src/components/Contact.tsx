import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+61 4 5213 5542",
      subtitle: "Available 7 days a week"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@shreecleaning.com.au",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Bunbury & Surrounding Areas",
      subtitle: "Up to 30km radius"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 8AM-6PM",
      subtitle: "Sat: 9AM-4PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the Shree Cleaning difference? Contact us for a free, 
            no-obligation quote tailored to your specific cleaning needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Request Your Free Quote</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Full Name *
                    </label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Phone Number *
                    </label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Property Address
                  </label>
                  <Input placeholder="Enter your property address" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Service Type
                    </label>
                    <select className="w-full p-3 border border-input rounded-md bg-background">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Pressure</option>
                      <option>Custom Package</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Frequency
                    </label>
                    <select className="w-full p-3 border border-input rounded-md bg-background">
                      <option>One-time</option>
                      <option>Weekly</option>
                      <option>Bi-weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Additional Details
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your cleaning needs, property size, specific requirements, etc."
                    rows={4}
                  />
                </div>
                
                <Button size="lg" className="w-full">
                  Get My Free Quote
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                      {info.title === "Call Us" ? (
                        <a href={`tel:${info.details}`} className="font-medium text-foreground hover:text-primary transition-colors">
                          {info.details}
                        </a>
                      ) : info.title === "Email Us" ? (
                        <a href={`mailto:${info.details}`} className="font-medium text-foreground hover:text-primary transition-colors">
                          {info.details}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{info.details}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-hero-gradient text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Emergency Cleaning?</h3>
                <p className="mb-4 text-white/90">
                  Need urgent cleaning services? We offer same-day emergency cleaning for urgent situations.
                </p>
                <Button variant="secondary" size="sm" className="w-full" asChild>
                  <a href="tel:+61452135542">
                    Call for Emergency Service
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;