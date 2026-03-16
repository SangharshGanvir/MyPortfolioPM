import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink, Zap, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  const getLinkClasses = (path) => {
    const active = isActive(path);
    return `${
      active 
        ? 'text-primary border-b-2 border-primary' 
        : 'text-gray-300 hover:text-white border-b-2 border-transparent'
    } transition-all font-medium pb-1`;
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[rgba(10,10,10,0.9)] backdrop-blur-[10px] border-b border-[rgba(255,255,255,0.06)]' 
        : 'bg-dark-bg/95 backdrop-blur-md border-b border-dark-border'
    }`}>
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity" onClick={closeMobileMenu}>
            <img 
              src="/favicon.svg" 
              alt="SG Logo" 
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="text-base md:text-xl font-bold">Sangharsh G Ganvir</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link to="/" className={getLinkClasses('/')}>
              Home
            </Link>
            <Link to="/about" className={getLinkClasses('/about')}>
              About
            </Link>
            <Link to="/work" className={getLinkClasses('/work')}>
              Case Studies
            </Link>
            <Link to="/contact" className={getLinkClasses('/contact')}>
              Contact
            </Link>
            <a 
              href="/Sangharsh_Ganvir_Senior_Product_Designer_Resume.pdf" 
              download
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium"
            >
              Resume
              <ExternalLink size={16} />
            </a>
            <ThemeToggle />
            <Link 
              to="/lets-talk" 
              className="btn-primary"
            >
              Start a Conversation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-dark-border">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-primary' : 'text-gray-300'} transition-colors font-medium py-2`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`${isActive('/about') ? 'text-primary' : 'text-gray-300'} transition-colors font-medium py-2`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                to="/work" 
                className={`${isActive('/work') ? 'text-primary' : 'text-gray-300'} transition-colors font-medium py-2`}
                onClick={closeMobileMenu}
              >
                Case Studies
              </Link>
              <Link 
                to="/contact" 
                className={`${isActive('/contact') ? 'text-primary' : 'text-gray-300'} transition-colors font-medium py-2`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <a 
                href="/Sangharsh_Ganvir_Senior_Product_Designer_Resume.pdf" 
                download
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium py-2"
                onClick={closeMobileMenu}
              >
                Resume
                <ExternalLink size={16} />
              </a>
              <div className="py-2">
                <ThemeToggle />
              </div>
              <Link 
                to="/lets-talk" 
                className="btn-primary text-center mt-2"
                onClick={closeMobileMenu}
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
