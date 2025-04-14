
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-harmony-dark text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Harmony Motion Studios</h3>
            <p className="mb-4">Bridging Cultures, Crafting Stories</p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-harmony-gold transition-colors">
                <Linkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-harmony-gold transition-colors">
                <Twitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-harmony-gold transition-colors">
                <Facebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-harmony-gold transition-colors">
                <Instagram />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-harmony-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-harmony-gold transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-harmony-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-harmony-gold transition-colors">Services</Link></li>
              <li><Link to="/partner" className="hover:text-harmony-gold transition-colors">Partner With Us</Link></li>
              <li><Link to="/blog" className="hover:text-harmony-gold transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-harmony-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>La Fortuna, Costa Rica</span>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:harmonymotionstudios@gmail.com" className="hover:text-harmony-gold transition-colors">
                  harmonymotionstudios@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p>&copy; {currentYear} Harmony Motion Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
