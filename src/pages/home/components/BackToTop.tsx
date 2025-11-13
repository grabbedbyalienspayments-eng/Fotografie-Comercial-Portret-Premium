
import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);
      setRotation(scrolled * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#7DF9FF] to-[#00CED1] text-[#0B0B0D] rounded-full shadow-lg transition-all duration-300 z-40 hover:scale-110 hover:shadow-xl hover:shadow-[#7DF9FF]/30 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ transform: `translateY(${isVisible ? 0 : 16}px) rotate(${rotation}deg)` }}
    >
      <i className="ri-arrow-up-line text-xl"></i>
    </button>
  );
}
