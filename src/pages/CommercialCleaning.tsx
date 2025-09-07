import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Building, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import commercialImage from "@/assets/commercial-cleaning.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CommercialCleaning = () => {
  const services = [
    "Office Buildings",
    "Hotels & Restaurants",
    "Retail Spaces",
    "Schools & Universities"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" asChild className="gap-2">
              <Link to="/">
                <ArrowLeft size={16} />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                  Commercial Cleaning
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional office and commercial space cleaning to maintain a productive work environment.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What's Included:</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-primary" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Button size="lg" className="gap-2" asChild>
                <Link to="/#contact">
                  Get Free Quote
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img 
                src={commercialImage} 
                alt="Commercial cleaning service" 
                className="rounded-2xl shadow-glow w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommercialCleaning;