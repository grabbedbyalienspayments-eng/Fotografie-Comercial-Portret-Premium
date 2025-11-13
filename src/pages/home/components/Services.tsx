
export default function Services() {
  const services = [
    {
      title: 'Portret Executive',
      description: 'Portrete profesionale pentru lideri de business, CEO-uri și antreprenori. Capturăm esența personalității și profesionalismului într-un cadru perfect.',
      features: ['Sesiune foto în studio', 'Retușare profesională', 'Multiple variante', 'Livrare în 48h'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20executive%20portrait%20photography%20session%20in%20modern%20studio%2C%20CEO%20headshot%20photography%2C%20business%20portrait%20with%20dramatic%20lighting%2C%20corporate%20photography%20setup%2C%20professional%20businessman%20in%20elegant%20suit%2C%20studio%20lighting%20equipment&width=800&height=600&seq=serv1&orientation=landscape'
    },
    {
      title: 'Produs & E-commerce',
      description: 'Fotografie de produs de înaltă calitate pentru magazine online, cataloage și materiale de marketing. Fiecare detaliu contează.',
      features: ['Fundal personalizat', 'Iluminare profesională', 'Multiple unghiuri', 'Optimizare web'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20studio%20setup%20with%20luxury%20items%2C%20e-commerce%20photography%20with%20professional%20lighting%2C%20commercial%20product%20display%20on%20black%20background%2C%20high-end%20retail%20photography%20equipment%2C%20studio%20lighting%20setup&width=800&height=600&seq=serv2&orientation=landscape'
    },
    {
      title: 'Editorial Creative',
      description: 'Concepte creative pentru reviste, campanii publicitare și proiecte artistice. Transformăm ideile în imagini memorabile.',
      features: ['Concept creativ', 'Styling profesional', 'Post-producție avansată', 'Drepturi comerciale'],
      image: 'https://readdy.ai/api/search-image?query=Creative%20editorial%20photography%20session%20with%20artistic%20lighting%2C%20fashion%20editorial%20photoshoot%2C%20magazine%20style%20photography%2C%20creative%20commercial%20photography%20setup%2C%20professional%20model%20photography%20with%20dramatic%20lighting&width=800&height=600&seq=serv3&orientation=landscape'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#0B0B0D] to-[#1A1A1D]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Serviciile Noastre
          </h2>
          <p className="text-xl text-[#C4C4C4] max-w-2xl mx-auto">
            Oferim servicii complete de fotografie comercială, adaptate nevoilor fiecărui client.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-[#1A1A1D] hover:bg-[#2A2A2D] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#7DF9FF]/20"
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-[#0B0B0D]/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#7DF9FF] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-[#C4C4C4] mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white">
                      <i className="ri-check-line text-[#7DF9FF] mr-3 text-lg"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-[#7DF9FF] to-[#00CED1] text-[#0B0B0D] py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#7DF9FF]/30 transition-all duration-300 group-hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  Solicită Ofertă
                </button>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-[#7DF9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
