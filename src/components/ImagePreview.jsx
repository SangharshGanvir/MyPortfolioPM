import { useState } from 'react';
import { Eye } from 'lucide-react';
import ImageGallery from './ImageGallery';

const ImagePreview = ({ images, title }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const previewImages = images.slice(0, 3);
  const remainingCount = images.length - 3;

  const openGallery = () => {
    setIsGalleryOpen(true);
  };

  return (
    <>
      {/* Preview Grid - 3 images + View More tile */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {previewImages.map((image, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden border border-dark-border bg-dark-bg cursor-pointer"
            onClick={openGallery}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                Click to View
              </span>
            </div>
            {image.label && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white text-xs font-medium">{image.label}</p>
              </div>
            )}
          </div>
        ))}

        {/* View More Tile */}
        <button
          onClick={openGallery}
          className="relative group rounded-lg overflow-hidden border-2 border-dashed border-primary/50 hover:border-primary bg-dark-bg hover:bg-primary/5 transition-all duration-300 cursor-pointer"
        >
          <div className="aspect-[4/3] flex flex-col items-center justify-center gap-3 p-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Eye className="text-primary" size={32} />
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-lg mb-1">View More</p>
              <p className="text-gray-400 text-sm">
                +{remainingCount} {remainingCount === 1 ? 'image' : 'images'}
              </p>
            </div>
          </div>
        </button>
      </div>

      {/* Full Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50">
          <ImageGallery 
            images={images} 
            title={title}
            onClose={() => setIsGalleryOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default ImagePreview;
