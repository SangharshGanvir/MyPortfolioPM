import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="container-custom py-20 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-400 mb-12">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Go to Homepage
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
