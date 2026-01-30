import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink, Zap, Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-primary' : 'text-gray-300 hover:text-white';
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-md border-b border-dark-border">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity" onClick={closeMobileMenu}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center">
              <Zap size={20} className="md:w-6 md:h-6 text-white" fill="white" />
            </div>
            <span className="text-base md:text-xl font-bold">Sangharsh G Ganvir</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link to="/work" className={`${isActive('/work')} transition-colors font-medium`}>
              Work
            </Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors font-medium`}>
              About
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors font-medium`}>
              Contact
            </Link>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium"
            >
              Resume
              <ExternalLink size={16} />
            </a>
            <Link 
              to="/lets-talk" 
              className="btn-primary"
            >
              Let's Talk
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
                to="/work" 
                className={`${isActive('/work')} transition-colors font-medium py-2`}
                onClick={closeMobileMenu}
              >
                Work
              </Link>
              <Link 
                to="/about" 
                className={`${isActive('/about')} transition-colors font-medium py-2`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`${isActive('/contact')} transition-colors font-medium py-2`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium py-2"
                onClick={closeMobileMenu}
              >
                Resume
                <ExternalLink size={16} />
              </a>
              <Link 
                to="/lets-talk" 
                className="btn-primary text-center mt-2"
                onClick={closeMobileMenu}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
