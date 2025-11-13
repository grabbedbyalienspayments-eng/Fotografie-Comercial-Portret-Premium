
import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0B0B0D] text-white overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <main>
        <Hero scrollY={scrollY} />
        <Portfolio />
        <Services />
        <About />
        <Testimonials />
        <Packages />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
