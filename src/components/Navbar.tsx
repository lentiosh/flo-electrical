
import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-electric-600" />
            <span className="text-xl font-bold tracking-tight">FRANSSON ELECTRICS</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-foreground hover:text-electric-600 transition-colors">
              Home
            </a>
            <a href="#services" className="text-sm font-medium text-foreground hover:text-electric-600 transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-sm font-medium text-foreground hover:text-electric-600 transition-colors">
              Why Choose Us
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-electric-600 transition-colors">
              Contact
            </a>
            <a 
              href="tel:01483732423" 
              className="inline-flex items-center justify-center rounded-md bg-electric-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-electric-700 transition-colors"
            >
              01483 732423
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#why-us" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="tel:01483732423" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-electric-600 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              01483 732423
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
