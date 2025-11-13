
export default function Packages() {
  const packages = [
    {
      name: 'Start',
      price: '299',
      description: 'Perfect pentru startup-uri și mici afaceri',
      features: [
        'Sesiune foto de 1 oră',
        '10 imagini editate profesional',
        'Rezoluție înaltă pentru web',
        'Livrare în 3 zile lucrătoare'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '599',
      description: 'Ideal pentru branduri în creștere',
      features: [
        'Sesiune foto de 2 ore',
        '25 imagini editate profesional',
        'Rezoluție înaltă pentru print și web',
        'Concept creativ personalizat'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'La cerere',
      description: 'Soluții complete pentru proiecte complexe',
      features: [
        'Sesiuni foto nelimitate',
        'Număr nelimitat de imagini',
        'Post-producție avansată',
        'Suport dedicat și consultanță'
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#0B0B0D] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7DF9FF]/5 via-transparent to-[#7DF9FF]/5 animate-gradient-x"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pachete & Prețuri
          </h2>
          <p className="text-xl text-[#C4C4C4] max-w-2xl mx-auto">
            Alege pachetul care se potrivește cel mai bine nevoilor tale de business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-[#1A1A1D] rounded-2xl p-8 border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                pkg.popular
                  ? 'border-[#7DF9FF] shadow-lg shadow-[#7DF9FF]/20 transform scale-105'
                  : 'border-[#C4C4C4]/20 hover:border-[#7DF9FF]/50 hover:shadow-[#7DF9FF]/10'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#7DF9FF] to-[#00CED1] text-[#0B0B0D] px-4 py-2 rounded-full text-sm font-bold">
                    Cel mai popular
                  </span>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-[#C4C4C4] mb-4">{pkg.description}</p>
                <div className="text-4xl font-bold text-[#7DF9FF] mb-2">
                  {pkg.price === 'La cerere' ? pkg.price : `${pkg.price}€`}
                </div>
                {pkg.price !== 'La cerere' && (
                  <p className="text-[#C4C4C4] text-sm">per proiect</p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <i className="ri-check-line text-[#7DF9FF] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                    <span className="text-[#C4C4C4]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-[#7DF9FF] to-[#00CED1] text-[#0B0B0D] hover:shadow-lg hover:shadow-[#7DF9FF]/30 hover:scale-105'
                    : 'bg-transparent border-2 border-[#7DF9FF] text-[#7DF9FF] hover:bg-[#7DF9FF] hover:text-[#0B0B0D]'
                }`}
              >
                Cere ofertă
              </button>

              {/* Glow Effect */}
              {pkg.popular && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#7DF9FF]/10 to-[#00CED1]/10 rounded-2xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-[#C4C4C4] mb-4">
            Toate pachetele includ consultanță gratuită și suport tehnic complet.
          </p>
          <p className="text-sm text-[#C4C4C4]">
            Prețurile nu includ TVA. Condiții speciale pentru proiecte pe termen lung.
          </p>
        </div>
      </div>
    </section>
  );
}
