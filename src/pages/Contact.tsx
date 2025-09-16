import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    subject: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    queries: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.queries) {
      toast({
        title: "Please fill required fields",
        description: "First name, email, and queries are required.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      organization: '',
      subject: '',
      email: '',
      phone: '',
      city: '',
      country: '',
      queries: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-orange-500/10 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
              <span className="font-bold text-lg">2 YEARS WARRANTY ON ALL PRODUCTS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Turn Your Vision into <span className="text-orange-500">Reality!</span>
            </h1>
            <h2 className="text-2xl font-bold text-foreground mb-6">Connect with us!</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us to get to know you better by filling the details below and you will hear from us soon! All our solutions come with comprehensive 2-year warranty.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Organization *
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Queries *
                    </label>
                    <textarea
                      name="queries"
                      value={formData.queries}
                      onChange={handleChange}
                      rows={6}
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
                      placeholder="Please describe your requirements, project details, or any questions you have..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                {/* Registered Office */}
                <div className="bg-orange-500 text-white p-8 rounded-lg mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="bg-white text-orange-500 p-2 rounded-lg mb-4 inline-block">
                      <span className="font-bold text-sm">🛡️ 2 YEARS WARRANTY</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <MapPin className="w-6 h-6 mr-2" />
                      REGISTERED OFFICE
                    </h3>
                    <div className="space-y-2 text-orange-50">
                      <p>Building No 7/287, Saud building,</p>
                      <p>Kozhikode- Palakkad National Highway,</p>
                      <p>Nearby Hyundai car showroom,</p>
                      <p>Kumaramputhur, Palakkad,</p>
                      <p>Kerala, 678583</p>
                    </div>
                  </div>
                </div>

                {/* Branch Office */}
                <div className="bg-card p-6 rounded-lg shadow-lg mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-orange-500" />
                    BRANCH OFFICE
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Office: No.519/2, Srinivasapillai Nagar,</p>
                    <p>Ayanambakkam, Chennai-600095</p>
                    <p className="font-medium text-foreground mt-3">GST IN: 33ABNCS6715M1ZT</p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="bg-card p-6 rounded-lg shadow-lg mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">GET IN TOUCH WITH US</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-orange-500" />
                      <div>
                        <p className="font-medium text-foreground">7358755442 | 8072372485</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-orange-500" />
                      <p className="text-muted-foreground">export@floqpump.com</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-orange-500" />
                      <p className="text-muted-foreground">24/7 Customer Support</p>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">SMIE INDUSTRIES PRIVATE LIMITED</h3>
                  <p className="text-blue-100 text-sm mb-2">(An ISO 9001 Certified & CE Certified Company)</p>
                  <p className="font-medium mb-1">9+ YEARS EXPERIENCE</p>
                  <p className="font-medium">NOW EXPORTING WORLDWIDE</p>
                  <p className="text-blue-100 text-sm mt-2">RELIABLE. ACCESSIBLE. WHEREVER YOU ARE. 2-YEAR WARRANTY.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow">
                <h3 className="font-bold text-foreground mb-2">How can we help with your business?</h3>
                <p className="text-muted-foreground">We provide comprehensive pumping solutions tailored to your specific industry needs, from consultation to installation and after-sales support.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow">
                <h3 className="font-bold text-foreground mb-2">What are the advantages of working with FloQ?</h3>
                <p className="text-muted-foreground">Our advantages include 9+ years of experience, ISO 9001 certification, worldwide export capabilities, 24/7 support, and custom-engineered solutions.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow">
                <h3 className="font-bold text-foreground mb-2">How does the working process work?</h3>
                <p className="text-muted-foreground">Our process includes initial consultation, application analysis, custom design if needed, manufacturing, quality testing, installation support, and ongoing maintenance services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Details Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our <span className="text-orange-500">Locations</span>
            </h2>
            
            {/* Chennai Location */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Chennai Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Address:</p>
                      <p className="text-muted-foreground">Office: No.519/2, Srinivasapillai Nagar,</p>
                      <p className="text-muted-foreground">Ayanambakkam, Chennai-600095</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <p className="text-muted-foreground">8072372485</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <p className="text-muted-foreground">export@floqpump.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-lg">
                <div className="w-full h-64 bg-blue-200 rounded-lg flex items-center justify-center">
                  <p className="text-blue-600 font-medium">Chennai Office Image</p>
                </div>
              </div>
            </div>

            {/* Kerala Location */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-lg order-2 lg:order-1">
                <div className="w-full h-64 bg-orange-200 rounded-lg flex items-center justify-center">
                  <p className="text-orange-600 font-medium">Kerala Office Image</p>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-foreground">Kerala Office (Registered)</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Address:</p>
                      <p className="text-muted-foreground">Building No 7/287, Saud building,</p>
                      <p className="text-muted-foreground">Kozhikode- Palakkad National Highway,</p>
                      <p className="text-muted-foreground">Nearby Hyundai car showroom,</p>
                      <p className="text-muted-foreground">Kumaramputhur, Palakkad, Kerala, 678583</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <p className="text-muted-foreground">7358755442</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <p className="text-muted-foreground">export@floqpump.com</p>
                  </div>
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

export default Contact;