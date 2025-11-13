
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Maria Popescu',
      position: 'CEO, TechStart Romania',
      content: 'FrameCraft Studio a reușit să captureze perfect esența brandului nostru. Fotografiile sunt de o calitate excepțională și au contribuit semnificativ la creșterea vânzărilor online.',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20business%20woman%20CEO%20portrait%2C%20confident%20female%20executive%20headshot%2C%20modern%20business%20leader%2C%20professional%20corporate%20portrait%2C%20elegant%20businesswoman%20in%20office%20setting&width=100&height=100&seq=test1&orientation=squarish'
    },
    {
      name: 'Alexandru Ionescu',
      position: 'Marketing Director, Fashion Brand',
      content: 'Colaborarea cu echipa FrameCraft a fost extraordinară. Atenția la detalii și creativitatea lor au depășit toate așteptările noastre. Recomand cu încredere!',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20marketing%20director%20portrait%2C%20confident%20businessman%20headshot%2C%20modern%20business%20executive%2C%20professional%20corporate%20portrait%2C%20elegant%20businessman%20in%20office%20setting&width=100&height=100&seq=test2&orientation=squarish'
    },
    {
      name: 'Elena Radu',
      position: 'Fondator, Beauty Boutique',
      content: 'Fotografiile de produs realizate de FrameCraft au transformat complet magazinul nostru online. Calitatea imaginilor și profesionalismul echipei sunt de neegalat.',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20beauty%20entrepreneur%20portrait%2C%20confident%20female%20business%20owner%20headshot%2C%20modern%20beauty%20industry%20leader%2C%20professional%20corporate%20portrait%2C%20elegant%20businesswoman&width=100&height=100&seq=test3&orientation=squarish'
    },
    {
      name: 'Mihai Georgescu',
      position: 'Creative Director, Ad Agency',
      content: 'FrameCraft Studio înțelege perfect viziunea creativă și o transformă în realitate. Sunt partenerii noștri de încredere pentru toate proiectele importante.',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20creative%20director%20portrait%2C%20confident%20male%20creative%20professional%20headshot%2C%20modern%20advertising%20executive%2C%20professional%20corporate%20portrait%2C%20creative%20industry%20leader&width=100&height=100&seq=test4&orientation=squarish'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`ri-star-${index < rating ? 'fill' : 'line'} text-[#7DF9FF] text-lg`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#1A1A1D] to-[#0B0B0D]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ce spun clienții noștri
          </h2>
          <p className="text-xl text-[#C4C4C4] max-w-2xl mx-auto">
            Feedback-ul clienților noștri este cea mai bună dovadă a calității serviciilor noastre.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-[#1A1A1D] rounded-2xl p-8 md:p-12 text-center border border-[#C4C4C4]/10 hover:border-[#7DF9FF]/30 transition-all duration-300">
                    {/* Avatar */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#7DF9FF]">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Content */}
                    <blockquote className="text-lg md:text-xl text-[#C4C4C4] leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{testimonial.name}</h4>
                      <p className="text-[#7DF9FF] font-medium">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-[#7DF9FF] scale-125' 
                    : 'bg-[#C4C4C4]/30 hover:bg-[#C4C4C4]/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 flex items-center justify-center bg-[#1A1A1D] border border-[#C4C4C4]/20 rounded-full text-white hover:border-[#7DF9FF] hover:text-[#7DF9FF] transition-all duration-300"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="w-12 h-12 flex items-center justify-center bg-[#1A1A1D] border border-[#C4C4C4]/20 rounded-full text-white hover:border-[#7DF9FF] hover:text-[#7DF9FF] transition-all duration-300"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
