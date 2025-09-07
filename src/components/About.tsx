import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Award, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Customers" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: MapPin, number: "50+", label: "Areas Served" },
    { icon: Heart, number: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                About Shree Cleaning
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Based in the heart of Bunbury, Western Australia, Shree Cleaning is your trusted local 
                partner for all cleaning needs. We're a family-owned business committed to delivering 
                exceptional cleaning services that exceed expectations.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide Bunbury residents and businesses with reliable, professional cleaning services 
                that save time and create healthier, more comfortable environments. We believe every space 
                deserves to sparkle, and we're here to make that happen.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Why Choose Local?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Deep understanding of Bunbury's unique cleaning challenges and requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Fast response times and flexible scheduling to fit your lifestyle</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Personal service from a team that cares about our local community</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Supporting local business and contributing to Bunbury's economy</span>
                </li>
              </ul>
            </div>

            <Button size="lg" className="gap-2">
              <MapPin size={20} />
              Serving Bunbury & Surrounds
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center mx-auto">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;