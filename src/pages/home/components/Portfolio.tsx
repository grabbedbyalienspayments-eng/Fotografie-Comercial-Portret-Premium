
import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Toate');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState('');

  const filters = ['Toate', 'Portret', 'Produs', 'Editorial'];

  const portfolioItems = [
    {
      id: 1,
      category: 'Portret',
      title: 'Portret Executive CEO',
      image: 'https://readdy.ai/api/search-image?query=Professional%20CEO%20portrait%20photography%20in%20modern%20office%2C%20executive%20headshot%20with%20dramatic%20lighting%2C%20corporate%20photography%2C%20business%20portrait%2C%20professional%20businessman%20in%20elegant%20suit%2C%20studio%20quality%20lighting%2C%20black%20background&width=600&height=800&seq=port1&orientation=portrait'
    },
    {
      id: 2,
      category: 'Produs',
      title: 'Fotografie Produs Luxury',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20product%20photography%20with%20premium%20watch%20on%20black%20background%2C%20commercial%20product%20photography%2C%20elegant%20jewelry%20display%2C%20high-end%20retail%20photography%2C%20professional%20studio%20lighting%2C%20minimalist%20composition&width=600&height=600&seq=prod1&orientation=squarish'
    },
    {
      id: 3,
      category: 'Editorial',
      title: 'Editorial Fashion',
      image: 'https://readdy.ai/api/search-image?query=Editorial%20fashion%20photography%20with%20artistic%20lighting%2C%20creative%20commercial%20photography%2C%20magazine%20style%20photoshoot%2C%20dramatic%20black%20background%2C%20professional%20model%20photography%2C%20cinematic%20composition%2C%20high-fashion%20editorial&width=600&height=900&seq=edit1&orientation=portrait'
    },
    {
      id: 4,
      category: 'Portret',
      title: 'Portret Artist',
      image: 'https://readdy.ai/api/search-image?query=Creative%20artist%20portrait%20photography%20with%20dramatic%20lighting%2C%20professional%20headshot%20photography%2C%20artistic%20portrait%20session%2C%20studio%20lighting%20setup%2C%20creative%20professional%20portrait%2C%20black%20background%20photography&width=600&height=800&seq=port2&orientation=portrait'
    },
    {
      id: 5,
      category: 'Produs',
      title: 'E-commerce Photography',
      image: 'https://readdy.ai/api/search-image?query=Professional%20e-commerce%20product%20photography%2C%20luxury%20cosmetics%20on%20black%20background%2C%20commercial%20product%20display%2C%20high-end%20beauty%20products%2C%20professional%20studio%20lighting%2C%20clean%20minimalist%20composition&width=600&height=600&seq=prod2&orientation=squarish'
    },
    {
      id: 6,
      category: 'Editorial',
      title: 'Editorial Corporate',
      image: 'https://readdy.ai/api/search-image?query=Corporate%20editorial%20photography%20with%20business%20team%2C%20professional%20commercial%20photography%2C%20office%20environment%20photoshoot%2C%20corporate%20lifestyle%20photography%2C%20business%20editorial%20style%2C%20professional%20lighting&width=800&height=600&seq=edit2&orientation=landscape'
    },
    {
      id: 7,
      category: 'Portret',
      title: 'Portret Personal Branding',
      image: 'https://readdy.ai/api/search-image?query=Personal%20branding%20portrait%20photography%2C%20professional%20headshot%20for%20entrepreneurs%2C%20modern%20business%20portrait%2C%20creative%20professional%20photography%2C%20studio%20lighting%2C%20confident%20business%20woman%20portrait&width=600&height=800&seq=port3&orientation=portrait'
    },
    {
      id: 8,
      category: 'Produs',
      title: 'Fotografie Culinară',
      image: 'https://readdy.ai/api/search-image?query=Professional%20food%20photography%20with%20gourmet%20dishes%2C%20culinary%20product%20photography%2C%20restaurant%20menu%20photography%2C%20high-end%20food%20styling%2C%20commercial%20food%20photography%2C%20elegant%20food%20presentation&width=600&height=600&seq=prod3&orientation=squarish'
    },
    {
      id: 9,
      category: 'Editorial',
      title: 'Editorial Lifestyle',
      image: 'https://readdy.ai/api/search-image?query=Lifestyle%20editorial%20photography%2C%20modern%20living%20spaces%2C%20interior%20design%20photography%2C%20architectural%20photography%2C%20contemporary%20lifestyle%20editorial%2C%20professional%20interior%20photography&width=800&height=600&seq=edit3&orientation=landscape'
    }
  ];

  const filteredItems = activeFilter === 'Toate' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const openLightbox = (image: string, title: string) => {
    setLightboxImage(image);
    setLightboxTitle(title);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxTitle('');
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="portfolio" className="py-20 bg-[#0B0B0D]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Portofoliul Nostru
          </h2>
          <p className="text-xl text-[#C4C4C4] max-w-2xl mx-auto">
            Descoperă o selecție din cele mai recente proiecte de fotografie comercială, portret și editorial.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-[#7DF9FF] text-[#0B0B0D] shadow-lg shadow-[#7DF9FF]/30'
                  : 'bg-transparent text-white border border-[#C4C4C4]/30 hover:border-[#7DF9FF] hover:text-[#7DF9FF]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                index % 3 === 0 ? 'md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(item.image, item.title)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                    <span className="text-[#7DF9FF] text-sm font-medium">{item.category}</span>
                  </div>
                </div>

                {/* Cyan Border Effect */}
                <div className="absolute inset-0 border-2 border-[#7DF9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl hover:text-[#7DF9FF] transition-colors z-10"
          >
            <i className="ri-close-line"></i>
          </button>
          
          <div className="max-w-4xl max-h-full">
            <img
              src={lightboxImage}
              alt={lightboxTitle}
              className="max-w-full max-h-full object-contain"
            />
            <h3 className="text-white text-2xl font-semibold text-center mt-4">{lightboxTitle}</h3>
          </div>
        </div>
      )}
    </section>
  );
}
