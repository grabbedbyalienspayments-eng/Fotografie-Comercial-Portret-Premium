
export default function About() {
  const clients = [
    'ZARA', 'H&M', 'NIKE', 'ADIDAS', 'SAMSUNG', 'APPLE', 'BMW', 'MERCEDES',
    'COCA-COLA', 'PEPSI', 'MICROSOFT', 'GOOGLE', 'AMAZON', 'NETFLIX'
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-[#0B0B0D] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20photographer%20in%20modern%20studio%20with%20camera%20equipment%2C%20creative%20team%20working%20in%20photography%20studio%2C%20professional%20photography%20workspace%2C%20photographer%20with%20professional%20lighting%20setup%2C%20modern%20photography%20studio%20environment&width=600&height=700&seq=about1&orientation=portrait"
                alt="Echipa FrameCraft Studio"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/30 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#7DF9FF]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#7DF9FF]/10 rounded-full blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Despre <span className="text-[#7DF9FF]">FrameCraft Studio</span>
              </h2>
              
              <p className="text-xl text-[#C4C4C4] leading-relaxed mb-6">
                Suntem o echipă de creativi care capturează esența brandurilor prin imagine. 
                Fiecare cadru spune o poveste.
              </p>
              
              <p className="text-lg text-[#C4C4C4] leading-relaxed mb-8">
                Lucrăm cu branduri locale și internaționale, oferind servicii complete de fotografie 
                comercială, de la conceptualizare până la livrarea finală.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#7DF9FF] mb-2">500+</div>
                <div className="text-[#C4C4C4]">Proiecte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#7DF9FF] mb-2">150+</div>
                <div className="text-[#C4C4C4]">Clienți</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#7DF9FF] mb-2">8+</div>
                <div className="text-[#C4C4C4]">Ani Experiență</div>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-[#7DF9FF] to-[#00CED1] text-[#0B0B0D] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-[#7DF9FF]/30 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Hai să colaborăm
            </button>
          </div>
        </div>

        {/* Clients Marquee */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Clienții noștri de încredere
          </h3>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-16 whitespace-nowrap">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="text-[#C4C4C4] text-xl font-semibold hover:text-[#7DF9FF] transition-colors duration-300 flex-shrink-0"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
