import { Phone, Mail, MapPin, Facebook, Instagram, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo-red.png" alt="Shree Cleaning Logo" className="w-10 h-10 rounded-lg" />
              <h3 className="text-2xl font-bold">Shree Cleaning</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Your trusted local cleaning service in Bunbury, Western Australia. 
              Professional, reliable, and eco-friendly cleaning solutions.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-white/80 text-sm">5.0 Average Rating</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#services" className="hover:text-secondary transition-colors">Residential Cleaning</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Commercial Cleaning</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Pressure Cleaning</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Vacate Cleaning</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Post-Construction</a></li>
            </ul>
          </div>

          {/* Areas Served */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Areas We Serve</h4>
            <ul className="space-y-2 text-white/80">
              <li>Bunbury Central</li>
              <li>South Bunbury</li>
              <li>East Bunbury</li>
              <li>Withers</li>
              <li>Usher</li>
              <li>& Surrounding Areas</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-secondary" />
                <a href="tel:+61452135542" className="text-white/80 hover:text-secondary transition-colors">
                  +61 4 5213 5542
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-secondary" />
                <a href="mailto:info@shreecleaning.com" className="text-white/80 hover:text-secondary transition-colors">
                  info@shreecleaning.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-0.5" />
                <span className="text-white/80">Bunbury, Western Australia<br />6230</span>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Shree Cleaning. All Rights Reserved.</p>
          <p>Serving Bunbury, Western Australia with pride.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;