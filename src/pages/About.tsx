import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-orange-500/10 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                </div>
                <span className="font-bold text-lg">2 YEARS WARRANTY ON ALL PUMPS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                WHO <span className="text-orange-500">WE ARE</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                FLOQ is your trusted destination for complete fluid handling solutions with 9+ years of experience, delivering performance-driven pumps with 2-year warranty for a wide range of industries.
              </p>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Expertise</h2>
                <p className="text-muted-foreground mb-8">
                  FLOQ is your trusted destination for complete fluid handling solutions with 9+ years of combined experience, delivering performance-driven pumps with comprehensive 2-year warranty for a wide range of industries. Backed by SMIE INDUSTRIES PVT LTD, we specialize in the design, manufacturing, and engineering of high-quality industrial and positive displacement pumps.
                </p>
                
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg mb-8">
                  <h3 className="text-xl font-bold mb-2">🛡️ 2 YEARS COMPREHENSIVE WARRANTY</h3>
                  <p className="text-orange-100">All FloQ pumps come with industry-leading 2-year warranty covering parts, labor, and performance guarantee.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                    <p className="text-muted-foreground">Application-based pump selection</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                    <p className="text-muted-foreground">Custom-engineered pumping solutions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                    <p className="text-muted-foreground">R&D and product innovation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                    <p className="text-muted-foreground">Energy-efficient and durable pump systems</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                  <h3 className="font-bold text-foreground mb-2">Industrial</h3>
                  <p className="text-sm text-muted-foreground">Heavy-duty pumps for industrial applications</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                  <h3 className="font-bold text-foreground mb-2">Commercial</h3>
                  <p className="text-sm text-muted-foreground">Reliable pumps for commercial use</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                  <h3 className="font-bold text-foreground mb-2">Agricultural</h3>
                  <p className="text-sm text-muted-foreground">Efficient pumps for farming needs</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                  <h3 className="font-bold text-foreground mb-2">Municipal</h3>
                  <p className="text-sm text-muted-foreground">Municipal water management solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Over <span className="text-orange-500">9 Years</span> of Combined Experience with 2-Year Warranty
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              We are a team of dedicated professionals with over 9 years of combined experience in the pump industry. At FloQ, we strongly believe that the right product, backed by the right technical knowledge and comprehensive 2-year warranty, leads to long-term growth and success – for both us and our customers.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              With SMIE INDUSTRIES PVT LTD's proven legacy and FLOQ's forward-thinking approach, we are confident in supporting your operations with smart, efficient, and reliable pumping solutions backed by our industry-leading 2-year warranty.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We constantly adapt, evolve, and innovate to meet the changing needs of the industry. We don't just deliver products – we help redefine your business with better performance, efficiency, service, and complete peace of mind through our 2-year warranty coverage.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              AT FloQ,
            </h2>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              WE DON'T JUST <span className="text-orange-500">SUPPLY PUMPS</span>
            </h3>
            <h3 className="text-4xl font-bold text-orange-500 mb-16">
              WE BUILD <span className="text-foreground">SOLUTIONS</span>
            </h3>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-foreground mb-3">EXPERT CONSULTATION</h4>
                <p className="text-sm text-muted-foreground">We guide you with the best-fit pump based on real-world applications with 2-year warranty coverage.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-foreground mb-3">END-TO-END SOLUTIONS</h4>
                <p className="text-sm text-muted-foreground">From selection to supply, installation to service with 2-year warranty – we've got it covered.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-foreground mb-3">CUSTOMIZATION</h4>
                <p className="text-sm text-muted-foreground">Special designs to suit your specific operational needs with full warranty protection.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-foreground mb-3">QUALITY COMMITMENT</h4>
                <p className="text-sm text-muted-foreground">Premium-grade pumps engineered for performance and longevity with 2-year warranty.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-foreground mb-3">PRODUCT RANGE</h4>
                <p className="text-sm text-muted-foreground">A complete lineup of centrifugal and PD pumps for all industries with warranty coverage.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-foreground mb-3">24/7 SERVICE SUPPORT</h4>
                <p className="text-sm text-muted-foreground">Round-the-clock support for your pumping needs including warranty service.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-foreground mb-3">AFTER-SALES SUPPORT</h4>
                <p className="text-sm text-muted-foreground">Comprehensive after-sales service and 2-year warranty maintenance support.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;