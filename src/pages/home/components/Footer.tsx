
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0B0D] border-t border-[#C4C4C4]/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-[#7DF9FF] mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              FrameCraft Studio
            </div>
            <p className="text-[#C4C4C4] mb-4 max-w-md">
              Specializați în fotografie comercială, portret și editorial. 
              Capturăm esența brandurilor prin imagini de impact.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/framecraftstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1A1A1D] rounded-lg flex items-center justify-center text-[#C4C4C4] hover:text-[#7DF9FF] hover:bg-[#7DF9FF]/10 transition-all duration-300"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a
                href="https://behance.net/framecraftstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1A1A1D] rounded-lg flex items-center justify-center text-[#C4C4C4] hover:text-[#7DF9FF] hover:bg-[#7DF9FF]/10 transition-all duration-300"
              >
                <i className="ri-behance-line text-lg"></i>
              </a>
              <a
                href="https://wa.me/40123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1A1A1D] rounded-lg flex items-center justify-center text-[#C4C4C4] hover:text-[#7DF9FF] hover:bg-[#7DF9FF]/10 transition-all duration-300"
              >
                <i className="ri-whatsapp-line text-lg"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-[#C4C4C4] hover:text-[#7DF9FF] transition-colors duration-300">
                  Portret Executive
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#C4C4C4] hover:text-[#7DF9FF] transition-colors duration-300">
                  Fotografie Produs
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#C4C4C4] hover:text-[#7DF9FF] transition-colors duration-300">
                  Editorial Creative
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#C4C4C4] hover:text-[#7DF9FF] transition-colors duration-300">
                  E-commerce Photography
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-[#C4C4C4]">
                <i className="ri-phone-line mr-2"></i>
                +40 123 456 789
              </li>
              <li className="text-[#C4C4C4]">
                <i className="ri-mail-line mr-2"></i>
                hello@framecraft.ro
              </li>
              <li className="text-[#C4C4C4]">
                <i className="ri-map-pin-line mr-2"></i>
                București, România
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C4C4C4]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#C4C4C4] text-sm">
              © {currentYear} FrameCraft Studio — Fotografie comercială & portret.
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="/politici"
                className="text-[#C4C4C4] hover:text-[#7DF9FF] transition-colors duration-300 text-sm"
              >
                Politici
              </a>
              <a
                href="/gdpr"
                className="text-[#C4C4C4] hover:text-[#7DF9FF] transition-colors duration-300 text-sm"
              >
                GDPR
              </a>
              <a
                href="https://websiteon.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C4C4C4] hover:text-[#7DF9FF] transition-colors duration-300 text-sm"
              >
                Made by WebsiteOn.ro
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
