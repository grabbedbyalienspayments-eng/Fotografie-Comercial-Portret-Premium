
import { useState, useEffect } from 'react';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://readdy.ai/api/search-image?query=Professional%20executive%20portrait%20photography%20in%20modern%20office%20setting%20with%20dramatic%20lighting%2C%20black%20background%2C%20corporate%20headshot%20style%2C%20high-end%20commercial%20photography%2C%20cinematic%20mood%2C%20professional%20businessman%20in%20suit%2C%20studio%20lighting%20setup&width=1920&height=1080&seq=hero1&orientation=landscape',
      title: 'Portret Executive'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Premium%20product%20photography%20with%20luxury%20items%20on%20black%20background%2C%20commercial%20e-commerce%20photography%2C%20professional%20studio%20lighting%2C%20elegant%20product%20display%2C%20high-end%20retail%20photography%2C%20minimalist%20composition%2C%20dramatic%20shadows&width=1920&height=1080&seq=hero2&orientation=landscape',
      title: 'Fotografie Produs'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Editorial%20fashion%20photography%20with%20artistic%20lighting%2C%20creative%20commercial%20photography%2C%20magazine%20style%20photoshoot%2C%20dramatic%20black%20background%2C%20professional%20model%20photography%2C%20cinematic%20composition%2C%20high-fashion%20editorial%20style&width=1920&height=1080&seq=hero3&orientation=landscape',
      title: 'Editorial Creative'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
            }`}
            style={{
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/80 via-[#0B0B0D]/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              <span className="block text-white">Imagini care</span>
              <span className="block text-[#7DF9FF]">vorbesc pentru</span>
              <span className="block text-white">brandul tău.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#C4C4C4] mb-8 animate-fade-in-up animation-delay-300">
              Portret, produs, editorial — fotografie care inspiră.
            </p>
            
            <button
              onClick={scrollToPortfolio}
              className="group relative bg-gradient-to-r from-[#7DF9FF] to-[#00CED1] text-[#0B0B0D] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#7DF9FF]/30 hover:scale-105 animate-fade-in-up animation-delay-600 whitespace-nowrap"
            >
              <span className="relative z-10">Vezi portofoliul</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00CED1] to-[#7DF9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#7DF9FF] scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
