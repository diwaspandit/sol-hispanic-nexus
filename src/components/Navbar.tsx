
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <span className={`font-bold text-xl transition-colors ${
              isScrolled ? 'text-burgundy' : 'text-white'
            }`}>
              Hispanic Business Chatbot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/dashboard" 
              className={`font-medium transition-colors hover:text-golden ${
                isScrolled ? 'text-charcoal' : 'text-white/90'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/tools" 
              className={`font-medium transition-colors hover:text-golden ${
                isScrolled ? 'text-charcoal' : 'text-white/90'
              }`}
            >
              Tools & Guides
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-golden ${
                isScrolled ? 'text-charcoal' : 'text-white/90'
              }`}
            >
              About
            </Link>
            <Button 
              variant="destructive" 
              className="bg-burgundy hover:bg-terracotta"
            >
              Logout
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-charcoal' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-charcoal' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/dashboard"
              className="font-medium text-charcoal p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/tools"
              className="font-medium text-charcoal p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tools & Guides
            </Link>
            <Link 
              to="/about"
              className="font-medium text-charcoal p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button 
              variant="destructive" 
              className="bg-burgundy hover:bg-terracotta w-full"
            >
              Logout
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
