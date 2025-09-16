import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Briefcase, Clock, Users, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Mechanical Engineer",
      department: "Engineering",
      location: "Chennai",
      type: "Full-time",
      experience: "2-5 years",
      description: "Design and develop pump systems for industrial applications."
    },
    {
      title: "Sales Executive",
      department: "Sales",
      location: "Kerala",
      type: "Full-time", 
      experience: "1-3 years",
      description: "Drive sales growth and build client relationships in the pump industry."
    },
    {
      title: "Quality Control Inspector",
      department: "Quality Assurance",
      location: "Chennai",
      type: "Full-time",
      experience: "3-6 years",
      description: "Ensure product quality and compliance with industry standards."
    },
    {
      title: "Service Technician",
      department: "Service",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "2-4 years",
      description: "Provide on-site maintenance and repair services for pump systems."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-orange-500/10 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <Briefcase className="w-6 h-6" />
              <span className="font-bold text-lg">JOIN OUR TEAM</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Build Your Career with <span className="text-orange-500">FloQ Pumps</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our dynamic team and be part of a company that's shaping the future of pumping solutions with 9+ years of industry expertise.
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Why Choose <span className="text-orange-500">FloQ Pumps?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-card rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Great Team</h3>
                <p className="text-muted-foreground">Work with experienced professionals in a collaborative environment.</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg shadow-lg">
                <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground">Advance your career with continuous learning and development programs.</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg shadow-lg">
                <Briefcase className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Competitive Benefits</h3>
                <p className="text-muted-foreground">Enjoy competitive salary packages and comprehensive benefits.</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg shadow-lg">
                <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Work-Life Balance</h3>
                <p className="text-muted-foreground">Maintain a healthy balance between professional and personal life.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Current <span className="text-orange-500">Job Openings</span>
            </h2>
            
            <div className="grid gap-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                      <p className="text-muted-foreground mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4 text-orange-500" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-orange-500" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-orange-500" />
                          {job.type}
                        </span>
                        <span className="text-muted-foreground">Experience: {job.experience}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white animate-pulse"
                        onClick={() => window.location.href = 'tel:+917358755442'}
                      >
                        <Phone className="w-4 h-4 mr-2 animate-bounce" />
                        Call Now
                      </Button>
                      <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact for Careers */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <span className="text-lg font-medium">+91-7358755442</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg font-medium">hr@floqpump.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;