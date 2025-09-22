import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Quote, User, Building, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Plant Manager",
      company: "ABC Industries",
      location: "Chennai",
      rating: 5,
      text: "FloQ Pumps has been our trusted partner for over 3 years. Their pumps are reliable, efficient, and their service is exceptional. The team is always ready to help with any technical queries.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Priya Sharma",
      position: "Operations Director", 
      company: "Tech Solutions Ltd",
      location: "Bangalore",
      rating: 5,
      text: "We've installed FloQ pumps across multiple facilities and they've consistently delivered outstanding performance. The quality and durability are unmatched in the industry.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Mohammed Ali",
      position: "Project Engineer",
      company: "Coastal Industries",
      location: "Kerala",
      rating: 5,
      text: "The custom-engineered solution provided by FloQ perfectly met our specific requirements. Their technical expertise and professional approach impressed our entire team.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Sunita Patel",
      position: "Maintenance Head",
      company: "Manufacturing Corp",
      location: "Mumbai",
      rating: 5,
      text: "FloQ's after-sales support is remarkable. They provide prompt service and their maintenance team is highly skilled. We've had zero downtime issues since installation.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Arjun Reddy",
      position: "Technical Manager",
      company: "Industrial Solutions",
      location: "Hyderabad",
      rating: 5,
      text: "Outstanding pump performance and excellent customer service. FloQ has exceeded our expectations in every aspect of their service delivery.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Kavitha Nair",
      position: "Production Head",
      company: "Marine Industries",
      location: "Kochi",
      rating: 5,
      text: "The reliability and efficiency of FloQ pumps have significantly improved our operational productivity. Highly recommended for industrial applications.",
      image: "/api/placeholder/80/80"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: User },
    { number: "1000+", label: "Pumps Installed", icon: Building },
    { number: "50+", label: "Cities Served", icon: MapPin },
    { number: "9+", label: "Years Experience", icon: Star }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-orange-500/10 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg animate-pulse">
              <Star className="w-6 h-6" />
              <span className="font-bold text-lg">CLIENT TESTIMONIALS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our <span className="text-orange-500">Clients Say</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover why businesses across India trust FloQ Pumps for their fluid handling solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Client <span className="text-orange-500">Success Stories</span>
            </h2>
            
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-lg">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative group max-w-4xl mx-auto">
                        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                          <Quote className="w-12 h-12 text-orange-500" />
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-center gap-8">
                          <div className="flex-shrink-0">
                            <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                              <User className="w-12 h-12 text-white" />
                            </div>
                          </div>
                          
                          <div className="flex-1 text-center md:text-left">
                            <div className="flex justify-center md:justify-start mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                              ))}
                            </div>
                            
                            <p className="text-muted-foreground leading-relaxed mb-6 italic text-lg">
                              "{testimonial.text}"
                            </p>
                            
                            <div className="space-y-2">
                              <h3 className="font-bold text-foreground text-xl">{testimonial.name}</h3>
                              <p className="text-muted-foreground">{testimonial.position}</p>
                              <p className="text-orange-600 font-medium">{testimonial.company}</p>
                              <div className="flex items-center justify-center md:justify-start text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 mr-1 text-orange-500" />
                                {testimonial.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-orange-500 hover:text-white transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-orange-500 hover:text-white transition-all duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-orange-500 w-8' 
                        : 'bg-gray-300 hover:bg-orange-300'
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play Control */}
              <div className="text-center mt-4">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-sm text-muted-foreground hover:text-orange-500 transition-colors"
                >
                  {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Experience the FloQ difference and see why our clients choose us for their pumping solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Get Your Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-all duration-300">
                Contact Us Today
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;