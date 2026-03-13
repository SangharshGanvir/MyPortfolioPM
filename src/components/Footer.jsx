import { Linkedin, Github } from 'lucide-react';

const Footer = ({ isProjectPage = false }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`border-t border-dark-border bg-dark-bg ${isProjectPage ? 'lg:ml-64' : ''}`}>
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gray-400">
              © {currentYear} Sangharsh G Ganvir. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Senior Product Designer & UX Lead
            </p>
            <p className="text-xs text-gray-600 mt-0.5">
              Designing thoughtful digital products for complex domains.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/SangharshGanvir?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
