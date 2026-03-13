import { useEffect, useState } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center transition-opacity duration-500"
         style={{ opacity: isLoading ? 1 : 0 }}>
      <div className="flex flex-col items-center">
        {/* Animated Logo/Icon */}
        <div className="relative w-20 h-20 mb-6">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          
          {/* Inner pulsing circle */}
          <div className="absolute inset-3 bg-primary/10 rounded-full animate-pulse"></div>
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Loading text with animated dots */}
        <div className="text-center">
          <p className="text-gray-400 text-sm font-medium tracking-wider">
            Loading
            <span className="inline-flex ml-1">
              <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
            </span>
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-6 w-48 h-1 bg-dark-card rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-blue-400 animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
