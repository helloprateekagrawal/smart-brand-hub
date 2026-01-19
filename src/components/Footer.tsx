
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-white font-bold text-xl">silversuits.ai</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              AI Coworkers for BFSI - Building contextual intelligence that scales. 
              Transforming financial services through intelligent agent swarms.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/silver-suits-ai/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <a 
                  href="https://mailchi.mp/22352757146f/general-newsletter" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>prateek@silversuits.ai</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+91 738 173 2333</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Mumbai | Bangalore | SF</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 silversuits.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
