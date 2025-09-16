import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
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
              <span className="font-bold text-lg">2 YEARS WARRANTY INCLUDED</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              FloQ Pumps - <span className="text-orange-500">Strong, Simple, and Reliable</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              FLOQ pumps with 2-year warranty are known for their reliability, high efficiency, and rugged construction, ensuring smooth and dependable operation in the most demanding conditions.
            </p>
          </div>
        </section>

        {/* Product Description */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Built for <span className="text-orange-500">Tough Conditions</span>
                </h2>
                
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg mb-6">
                  <h3 className="text-xl font-bold mb-2">🛡️ 2 YEARS COMPREHENSIVE WARRANTY</h3>
                  <p className="text-orange-100">Every FloQ pump comes with industry-leading 2-year warranty covering all components and performance.</p>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  FloQ Pumps with 2-year warranty are built to work hard in tough conditions. They are easy to move, easy to use, and easy to maintain. Used in construction, utilities, civil engineering, mining, and flood control, FloQ pumps give you steady performance with less downtime.
                </p>
                <p className="text-muted-foreground mb-6">
                  From general dewatering to sludge, trash, and high-head pumping, FloQ has the right pump for your job with complete warranty protection. If you want pumps that are strong, simple, and ready to perform – FloQ is the right choice.
                </p>
                <p className="text-muted-foreground">
                  Whether it's clear water, sludge, chemicals, or high temperature fluids – FLOQ has the right pump for every application with 2-year warranty coverage.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center text-foreground mb-6">
                  FOR 8 INCH MODEL <span className="text-orange-500">FLOQ–DW250</span>
                </h3>
                <p className="text-center text-muted-foreground">
                  FLOQ pumps with 2-year warranty are known for their reliability, high efficiency, and rugged construction
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Technical <span className="text-orange-500">Specifications</span>
            </h2>
            
            {/* Technical Data Table */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden mb-12">
              <div className="bg-orange-500 text-white p-4">
                <h3 className="text-xl font-bold text-center">TECHNICAL DATA</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Specification</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">FDW100-ST</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">FDW150-ST</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">FDW200-ST</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium text-foreground">Delivery Connection</td>
                      <td className="px-4 py-3 text-center">4"</td>
                      <td className="px-4 py-3 text-center">6"</td>
                      <td className="px-4 py-3 text-center">8"</td>
                    </tr>
                    <tr className="border-b bg-muted/20">
                      <td className="px-4 py-3 font-medium text-foreground">Suction Connection</td>
                      <td className="px-4 py-3 text-center">4"</td>
                      <td className="px-4 py-3 text-center">6"</td>
                      <td className="px-4 py-3 text-center">8"</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium text-foreground">Max Capacity</td>
                      <td className="px-4 py-3 text-center">150 m³/hr</td>
                      <td className="px-4 py-3 text-center">340 m³/hr</td>
                      <td className="px-4 py-3 text-center">530 m³/hr</td>
                    </tr>
                    <tr className="border-b bg-muted/20">
                      <td className="px-4 py-3 font-medium text-foreground">Max Head</td>
                      <td className="px-4 py-3 text-center">32 mtr</td>
                      <td className="px-4 py-3 text-center">40 mtr</td>
                      <td className="px-4 py-3 text-center">42 mtr</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium text-foreground">Max Operating Speed</td>
                      <td className="px-4 py-3 text-center">1800-2200 rpm</td>
                      <td className="px-4 py-3 text-center">1800-2200 rpm</td>
                      <td className="px-4 py-3 text-center">1800-2200 rpm</td>
                    </tr>
                    <tr className="border-b bg-muted/20">
                      <td className="px-4 py-3 font-medium text-foreground">Max Operating Temperature</td>
                      <td className="px-4 py-3 text-center">80°C</td>
                      <td className="px-4 py-3 text-center">80°C</td>
                      <td className="px-4 py-3 text-center">80°C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium text-foreground">Max Solids Handling</td>
                      <td className="px-4 py-3 text-center">50mm</td>
                      <td className="px-4 py-3 text-center">70mm</td>
                      <td className="px-4 py-3 text-center">80mm</td>
                    </tr>
                    <tr className="border-b bg-muted/20">
                      <td className="px-4 py-3 font-medium text-foreground">Max Power</td>
                      <td className="px-4 py-3 text-center">23 hp</td>
                      <td className="px-4 py-3 text-center">41 hp</td>
                      <td className="px-4 py-3 text-center">52 hp</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Materials Section */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center bg-orange-500 text-white p-3 rounded">MATERIALS</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Pump Casing:</span>
                    <span className="text-muted-foreground">Cast Iron, SS 304, SS 316</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Pump Shaft:</span>
                    <span className="text-muted-foreground">SS 304, SS 316</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Impeller:</span>
                    <span className="text-muted-foreground">SS 304, SS 316</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Priming Chamber:</span>
                    <span className="text-muted-foreground">Cast Iron, SS 304, SS 316</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center bg-orange-500 text-white p-3 rounded">OPTIONS</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-foreground">Available Mounting:</span>
                    <p className="text-muted-foreground">Drag skid, Silent canopy, Towable Trolley, Electric Motor</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Features:</span>
                    <p className="text-muted-foreground">Indefinite Run-dry capability, Extreme Flow Technology, Environmentally safe priming system</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Emergency <span className="text-orange-500">Applications</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-orange-500 mb-3">Oil & Gas</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ballasting</li>
                  <li>• Pipeline Hydrostatic Test</li>
                  <li>• Drilling</li>
                  <li>• Pipeline Flushing</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-orange-500 mb-3">Mining & Quarry</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Open Pit</li>
                  <li>• Underground Mines</li>
                  <li>• Mine dewatering</li>
                  <li>• Quarry operations</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-orange-500 mb-3">Civil Work</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sump water removal</li>
                  <li>• Dewatering</li>
                  <li>• General construction</li>
                  <li>• Site drainage</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-orange-500 mb-3">Municipalities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sewage Bypass</li>
                  <li>• Dewatering</li>
                  <li>• Emergency Water Treatment</li>
                  <li>• Municipal services</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-orange-500 mb-3">Flood Control</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Emergency Application</li>
                  <li>• Flood controls</li>
                  <li>• Emergency drainage</li>
                  <li>• Water management</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-orange-500 mb-3">Rental Industry</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Effluent Handling</li>
                  <li>• Waste Drainage</li>
                  <li>• Temporary Firefighting</li>
                  <li>• Equipment rental</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Spare Parts Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <div className="bg-orange-500 text-white p-4 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-2">🛡️ 2 YEARS WARRANTY</h3>
                <p className="text-orange-100">All spare parts and services covered under comprehensive warranty</p>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                <span className="text-orange-500">Spare Parts</span> Availability
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                All Kirloskar engine spare parts with 2-year warranty are available in stock at our godown.
              </p>
              <p className="text-lg text-muted-foreground">
                We are ready to supply 24/7 as per your requirement with full warranty support.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;