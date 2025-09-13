import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    propertyAddress: "",
    serviceType: "Residential",
    frequency: "One-time",
    additionalDetails: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Phone, Email).",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-quote-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Quote Request Sent!",
        description: "Thank you for your interest. We'll get back to you within 24 hours with your free quote."
      });

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        propertyAddress: "",
        serviceType: "Residential",
        frequency: "One-time",
        additionalDetails: ""
      });
    } catch (error) {
      console.error('Error sending quote request:', error);
      toast({
        title: "Error",
        description: "There was an issue sending your quote request. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Full Name *
                        </label>
                        <Input 
                          placeholder="Enter your full name" 
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Phone Number *
                        </label>
                        <Input 
                          placeholder="Enter your phone number" 
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="Enter your email address" 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Property Address
                      </label>
                      <Input 
                        placeholder="Enter your property address" 
                        value={formData.propertyAddress}
                        onChange={(e) => handleInputChange('propertyAddress', e.target.value)}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Service Type
                        </label>
                        <select 
                          className="w-full p-3 border border-input rounded-md bg-background"
                          value={formData.serviceType}
                          onChange={(e) => handleInputChange('serviceType', e.target.value)}
                        >
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
                        <select 
                          className="w-full p-3 border border-input rounded-md bg-background"
                          value={formData.frequency}
                          onChange={(e) => handleInputChange('frequency', e.target.value)}
                        >
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
                        value={formData.additionalDetails}
                        onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Get My Free Quote"}
                    </Button>
                  </div>
                </form>
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