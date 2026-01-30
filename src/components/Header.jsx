import { Link, useLocation } from 'react-router-dom';
import { ExternalLink, Zap } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-primary' : 'text-gray-300 hover:text-white';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Zap size={24} className="text-white" fill="white" />
            </div>
            <span className="text-xl font-bold">Sangharsh G Ganvir</span>
          </Link>
          
          <div className="flex items-center gap-8">
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
              to="/contact" 
              className="btn-primary"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
