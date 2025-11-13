
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0B0B0D]/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-[#7DF9FF]" style={{ fontFamily: 'Pacifico, serif' }}>
            FrameCraft Studio
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-[#7DF9FF] transition-colors duration-300 whitespace-nowrap"
            >
              Portofoliu
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#7DF9FF] transition-colors duration-300 whitespace-nowrap"
            >
              Servicii
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#7DF9FF] transition-colors duration-300 whitespace-nowrap"
            >
              Despre
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-[#7DF9FF] transition-colors duration-300 whitespace-nowrap"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-[#C4C4C4]/20">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-[#7DF9FF] transition-colors duration-300 text-left whitespace-nowrap"
              >
                Portofoliu
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[#7DF9FF] transition-colors duration-300 text-left whitespace-nowrap"
              >
                Servicii
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#7DF9FF] transition-colors duration-300 text-left whitespace-nowrap"
              >
                Despre
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[#7DF9FF] transition-colors duration-300 text-left whitespace-nowrap"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
