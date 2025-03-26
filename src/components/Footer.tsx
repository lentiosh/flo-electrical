
import { Zap, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-electric-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-electric-400" />
              <span className="text-xl font-bold">Flo Electrical</span>
            </div>
            <p className="text-electric-200 max-w-xs">
              Professional, reliable electrical services with over 10 years of experience serving London and Surrey.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 rounded-full hover:bg-electric-800 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-electric-800 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-electric-800 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-electric-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-electric-400 transition-colors">Domestic Electrical</a></li>
              <li><a href="#services" className="hover:text-electric-400 transition-colors">LED Lighting</a></li>
              <li><a href="#services" className="hover:text-electric-400 transition-colors">Fuse Boards</a></li>
              <li><a href="#services" className="hover:text-electric-400 transition-colors">Electrical Testing</a></li>
              <li><a href="#services" className="hover:text-electric-400 transition-colors">Rewiring</a></li>
              <li><a href="#services" className="hover:text-electric-400 transition-colors">Garden Electrics</a></li>
              <li><a href="#services" className="hover:text-electric-400 transition-colors">Entertainment Systems</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-electric-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-electric-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-electric-400 transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-electric-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-electric-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-electric-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-electric-400" />
                <a href="tel:01483732423" className="hover:text-electric-400 transition-colors">01483 732423</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-electric-400" />
                <a href="mailto:info@floelectrical.co.uk" className="hover:text-electric-400 transition-colors">info@floelectrical.co.uk</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-electric-800 mt-12 pt-8 text-center text-electric-300">
          <p>&copy; {new Date().getFullYear()} Flo Electrical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
