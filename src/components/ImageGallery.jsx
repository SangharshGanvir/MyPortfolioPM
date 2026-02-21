import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ImageGallery = ({ images, title, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose?.();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose?.();
        }}
        className="absolute top-4 right-4 z-50 w-12 h-12 bg-dark-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-dark-card transition-colors"
        aria-label="Close gallery"
      >
        <X className="text-white" size={24} />
      </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 z-50 w-12 h-12 bg-dark-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-dark-card transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 z-50 w-12 h-12 bg-dark-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-dark-card transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          {/* Main Image */}
          <div
            className="max-w-7xl max-h-[90vh] mx-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {images[selectedIndex].label && (
              <div className="mt-4 text-center">
                <p className="text-white text-lg font-medium">{images[selectedIndex].label}</p>
              </div>
            )}
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-0 right-0 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(index);
                    }}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === selectedIndex
                        ? 'border-primary scale-110'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

      {/* Image Counter */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-dark-card/80 backdrop-blur-sm px-4 py-2 rounded-full">
        <p className="text-white text-sm font-medium">
          {selectedIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

export default ImageGallery;
