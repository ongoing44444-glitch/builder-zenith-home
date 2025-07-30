import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building2, Wrench, Hammer, Settings, Phone, Mail, MapPin, ArrowRight, CheckCircle } from "lucide-react";

export default function Index() {
  const services = [
    {
      icon: Building2,
      title: "Engineering",
      description: "Comprehensive engineering solutions from concept to completion with precision and innovation."
    },
    {
      icon: Settings,
      title: "Architecture",
      description: "Architectural design and planning services that blend functionality with aesthetic excellence."
    },
    {
      icon: Hammer,
      title: "Contractor Services",
      description: "Full-service construction and project management for commercial and industrial projects."
    },
    {
      icon: Wrench,
      title: "Metal Fabrication",
      description: "Custom metal fabrication with advanced techniques and precision craftsmanship."
    }
  ];

  const projects = [
    {
      title: "Industrial Complex Renovation",
      category: "Engineering & Construction",
      description: "Complete renovation of 50,000 sq ft manufacturing facility including structural engineering and metal framework.",
      image: "/placeholder.svg"
    },
    {
      title: "Custom Steel Framework",
      category: "Metal Fabrication",
      description: "Precision-engineered steel framework for commercial high-rise building with complex architectural requirements.",
      image: "/placeholder.svg"
    },
    {
      title: "Architectural Design Project",
      category: "Architecture",
      description: "Modern office complex design featuring sustainable materials and innovative structural solutions.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-red-600">Ferrari Arts</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#portfolio" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Portfolio</a>
                <a href="#about" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <div className="flex items-center">
              <Button className="bg-red-600 hover:bg-red-700">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Excellence in <span className="text-red-500">Engineering</span> & <span className="text-red-500">Fabrication</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Ferrari Arts delivers precision engineering, innovative architecture, and superior metal fabrication services for commercial and industrial projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3">
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions across engineering, architecture, construction, and metal fabrication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-red-100 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing our expertise across diverse industrial and commercial projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-slate-200 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-red-100 text-red-800">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Ferrari Arts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With decades of combined experience in engineering, architecture, and metal fabrication, Ferrari Arts has established itself as a trusted partner for complex commercial and industrial projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Licensed and insured professionals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Project management expertise</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Quality assurance guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">On-time project delivery</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Ferrari Arts?</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Expertise</h4>
                  <p className="text-gray-600">From initial design to final installation, we handle every aspect of your project.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quality Materials</h4>
                  <p className="text-gray-600">We use only the finest materials and proven construction methods.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">B2B Focus</h4>
                  <p className="text-gray-600">Specialized in serving commercial and industrial clients with complex requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Contact us today for a consultation and detailed project quote
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-500 mr-3" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-red-500 mr-3" />
                  <span>info@ferrariarts.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-red-500 mr-3" />
                  <span>123 Industrial Blvd, Manufacturing District</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
                <div className="text-gray-300 space-y-1">
                  <div>Monday - Friday: 7:00 AM - 6:00 PM</div>
                  <div>Saturday: 8:00 AM - 4:00 PM</div>
                  <div>Sunday: Emergency services only</div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle>Request a Quote</CardTitle>
                  <CardDescription>Tell us about your project and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Company Name" />
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" type="tel" />
                  <Textarea 
                    placeholder="Project Description - Please include project type, timeline, and any specific requirements"
                    rows={4}
                  />
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Submit Request
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-red-500 mb-4">Ferrari Arts</h3>
              <p className="text-gray-300 mb-4">
                Excellence in engineering, architecture, contractor services, and metal fabrication for commercial and industrial clients.
              </p>
              <p className="text-sm text-gray-400">
                Licensed • Insured • Trusted
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Engineering</li>
                <li>Architecture</li>
                <li>Contractor Services</li>
                <li>Metal Fabrication</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-red-500 transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-red-500 transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ferrari Arts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
