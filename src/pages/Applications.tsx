import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Applications = () => {
  const industries = [
    {
      name: "Ceramic Industry",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Marine Feed Industry", 
      image: "/api/placeholder/300/200"
    },
    {
      name: "Oil & Gas Industry",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Paper Industry",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Starch Manufacturing Plants",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Paint, Varnish & Ink Industry",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Breweries Industry",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Man Made Fibers Industry",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Chemical Industry",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Fertilizers Industry",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Food Processing Industry",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Pharmaceutical Industry",
      image: "/api/placeholder/300/200"
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
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
              <span className="font-bold text-lg">2 YEARS WARRANTY FOR ALL APPLICATIONS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Shape Your Future with <span className="text-orange-500">SMIE Industries!</span>
            </h1>
            <h2 className="text-2xl font-bold text-foreground mb-4">INDUSTRIES</h2>
            <h3 className="text-3xl font-bold text-orange-500 mb-6">We Serve All Industries</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We stay on top of our Industry by being experts in yours with 9+ years experience and 2-year warranty on all solutions.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 bg-gradient-to-br from-orange-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <h3 className="relative z-10 text-white font-bold text-center px-4 text-lg">
                      {industry.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm">
                      Specialized pump solutions with 2-year warranty designed for {industry.name.toLowerCase()} applications with optimal performance and reliability.
                    </p>
                    <div className="mt-4 flex items-center text-orange-500 text-sm font-medium group-hover:text-orange-600 transition-colors">
                      Learn More →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Applications */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Key <span className="text-orange-500">Application Areas</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-orange-500 mb-4">Fluid Transfer</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Chemical processing</li>
                  <li>• Oil and gas transfer</li>
                  <li>• Water treatment</li>
                  <li>• Food and beverage processing</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-orange-500 mb-4">Industrial Processing</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Manufacturing processes</li>
                  <li>• Cooling systems</li>
                  <li>• Cleaning applications</li>
                  <li>• Material handling</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-orange-500 mb-4">Specialized Applications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High temperature fluids</li>
                  <li>• Corrosive chemicals</li>
                  <li>• Viscous materials</li>
                  <li>• Abrasive slurries</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-orange-500 mb-4">Water Management</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Municipal water supply</li>
                  <li>• Wastewater treatment</li>
                  <li>• Irrigation systems</li>
                  <li>• Drainage solutions</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-orange-500 mb-4">Marine Applications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ship ballasting</li>
                  <li>• Marine feed systems</li>
                  <li>• Offshore operations</li>
                  <li>• Port facilities</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-orange-500 mb-4">Emergency Services</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Flood control</li>
                  <li>• Fire fighting systems</li>
                  <li>• Emergency dewatering</li>
                  <li>• Disaster response</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-2">🛡️ 2 YEARS COMPREHENSIVE WARRANTY</h3>
              <p className="text-orange-100">All custom solutions come with full 2-year warranty coverage including parts, labor, and performance guarantee.</p>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Need a Custom Solution for Your Industry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of experts with 9+ years experience can design and manufacture pumps specifically tailored to your industry requirements and operational needs, all backed by our 2-year warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Request Consultation
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Applications;