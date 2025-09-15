import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, Quote, MapPin, User } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Testimonials = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  
  const [reviewForm, setReviewForm] = useState({
    name: "",
    email: "",
    area: "",
    rating: 5,
    comment: ""
  });

  const testimonials = [
    {
      name: "Sarah Thompson",
      area: "Bunbury Central",
      comment: "Bloody brilliant job! Rocked up on time and smashed it. House looks mint — bathrooms are sparkling. Legends.",
      rating: 5
    },
    {
      name: "Michael Chen",
      area: "Australind",
      comment: "Top-notch, no mucking about. Office was spotless and they worked around our crew easy as. Cheers team!",
      rating: 5
    },
    {
      name: "Emma Wilson",
      area: "Eaton",
      comment: "Had a rough couple weeks and these guys just sorted it. Place smells fresh and looks ace. Proper helpful mob.",
      rating: 5
    },
    {
      name: "Dave R.",
      area: "Dalyellup",
      comment: "Pre-move deep clean was spot on. Not a speck left behind. Worth every dollar — saved us heaps of time.",
      rating: 5
    },
    {
      name: "Hannah L.",
      area: "South Bunbury",
      comment: "Friendly as, easy to book, and they really get stuck in. House looks schmick every time.",
      rating: 5
    },
    {
      name: "Jess & Tom",
      area: "Glen Iris",
      comment: "We’ve got two little terrors and a dog — they still got the carpets looking brand new. Absolute lifesavers!",
      rating: 5
    },
    {
      name: "Nikhil Shah",
      area: "Withers",
      comment: "Booked a last‑minute clean before a rental inspection — passed easy. Quick, tidy, no dramas.",
      rating: 5
    },
    {
      name: "Aimee",
      area: "East Bunbury",
      comment: "Mum recommended them and now I see why. Kitchen tiles are shining and the shower screen is crystal. Too good!",
      rating: 5
    }
  ];

  const handleInputChange = (field: string, value: string | number) => {
    setReviewForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-review-email', {
        body: {
          name: reviewForm.name,
          email: reviewForm.email,
          area: reviewForm.area,
          rating: reviewForm.rating,
          comment: reviewForm.comment
        }
      });

      if (error) throw error;

      toast({
        title: "Review Submitted Successfully!",
        description: "Your review has been successfully received. It will be updated once we verify you as our client.",
      });

      setReviewForm({
        name: "",
        email: "",
        area: "",
        rating: 5,
        comment: ""
      });
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error submitting review:', error);
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Don't just take our word for it. Here's what our satisfied customers across Bunbury have to say about our cleaning services.
          </p>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Star size={18} />
                Leave a Review
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Share Your Experience</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={reviewForm.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={reviewForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area">Area/Suburb</Label>
                  <Input
                    id="area"
                    value={reviewForm.area}
                    onChange={(e) => handleInputChange("area", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rating">Rating</Label>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className={`cursor-pointer ${
                          i < reviewForm.rating 
                            ? "fill-yellow-400 text-yellow-400" 
                            : "text-gray-300 hover:text-yellow-400"
                        }`}
                        onClick={() => handleInputChange("rating", i + 1)}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment">Your Review</Label>
                  <Textarea
                    id="comment"
                    value={reviewForm.comment}
                    onChange={(e) => handleInputChange("comment", e.target.value)}
                    placeholder="Tell us about your experience with our cleaning service..."
                    className="min-h-[100px]"
                    required
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="relative overflow-hidden">
          <Carousel className="w-full px-2 sm:px-4" opts={{ align: "start", loop: false }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-[90%] sm:basis-[65%] lg:basis-[40%]">
                  <Card className="relative h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <Quote className="text-primary/20 mb-4" size={32} />
                      <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.comment}"</p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <User className="text-primary" size={18} />
                          </div>
                          <div>
                            <p className="font-semibold text-primary">{testimonial.name}</p>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin size={12} />
                              {testimonial.area}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 border-border shadow" />
            <CarouselNext className="right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 border-border shadow" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;