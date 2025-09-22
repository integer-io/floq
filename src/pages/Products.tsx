import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Settings, Zap, Droplets } from "lucide-react";

const Products = () => {
  const applications = [
    {
      title: "Construction",
      image: "https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-162539.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Agriculture", 
      image: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Industrial",
      image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Marine",
      image: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Mining",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Water Treatment",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400"
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

        {/* Product Hero Image */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Auto Priming Dewatering Pump" 
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <img 
                    src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=200" 
                    alt="Pump thumbnail" 
                    className="w-16 h-16 object-cover rounded"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Auto Priming Dewatering Pump</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Auto Priming Dewatering Pumps Suppliers and Manufacturers in India. Our Auto-priming dewatering 
                  pumps offer simple, reliable operation and easy maintenance. Our dewatering systems are fully automatic 
                  priming pumps that can run dry for extended periods. These pumps are suitable for nearly all dewatering 
                  application, especially in well point dewatering, straight dewatering and sewer-by-pass applications.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center">
                    <span className="mr-2">👤</span>
                    ENQUIRE NOW
                  </button>
                  <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                    <span className="mr-2">⬇</span>
                    DOWNLOAD BROCHURE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Range & Design Features */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Operating Range */}
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">OPERATING RANGE</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Delivery Size:</h4>
                    <p className="text-muted-foreground">DN 50 to 300 mm</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Capacity:</h4>
                    <p className="text-muted-foreground">Up to 2600 m³/hr</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Head:</h4>
                    <p className="text-muted-foreground">Up to 70 m</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Temperature:</h4>
                    <p className="text-muted-foreground">Up to 100° C</p>
                  </div>
                </div>
              </div>

              {/* Design Features */}
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">DESIGN FEATURES</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-muted-foreground">Light weight & Durable</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-muted-foreground">Trolley mounted mobile type</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-muted-foreground">Auto-priming design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">APPLICATIONS</h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img 
                      src={app.image} 
                      alt={app.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-bold text-xl">{app.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-muted-foreground">Dewatering in Construction pits</span>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-muted-foreground">Used in water transfer in quarries</span>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-muted-foreground">In Agriculture for Dewatering water</span>
                </div>
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

        {/* Spare Parts Section */}
        <section className="py-16 px-4">
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