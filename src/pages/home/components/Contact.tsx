import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d4atqfcrg8gnguu955h0', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `;
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0B0B0D] to-[#1A1A1D] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#7DF9FF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7DF9FF]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Să discutăm despre proiectul tău
          </h2>
          <p className="text-xl text-[#C4C4C4] max-w-2xl mx-auto">
            Suntem aici să transformăm viziunea ta în realitate. Contactează-ne pentru o consultanță gratuită.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#1A1A1D] rounded-2xl p-8 border border-[#C4C4C4]/10">
            <h3 className="text-2xl font-bold text-white mb-6">Trimite-ne un mesaj</h3>
            
            <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#C4C4C4] mb-2 font-medium">
                  Nume complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#0B0B0D] border border-[#C4C4C4]/20 rounded-lg px-4 py-3 text-white text-sm focus:border-[#7DF9FF] focus:outline-none transition-colors duration-300"
                  placeholder="Introdu numele tău"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#C4C4C4] mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#0B0B0D] border border-[#C4C4C4]/20 rounded-lg px-4 py-3 text-white text-sm focus:border-[#7DF9FF] focus:outline-none transition-colors duration-300"
                  placeholder="email@exemplu.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#C4C4C4] mb-2 font-medium">
                  Mesaj *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full bg-[#0B0B0D] border border-[#C4C4C4]/20 rounded-lg px-4 py-3 text-white text-sm focus:border-[#7DF9FF] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Descrie-ne proiectul tău..."
                />
                <div className="text-right text-xs text-[#C4C4C4] mt-1">
                  {formData.message.length}/500 caractere
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onClick={createRipple}
                className="relative w-full bg-gradient-to-r from-[#7DF9FF] to-[#00CED1] text-[#0B0B0D] py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#7DF9FF]/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Se trimite...
                  </span>
                ) : (
                  'Trimite mesajul'
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-[#7DF9FF] text-center font-medium">
                  <i className="ri-check-line mr-2"></i>
                  Mesajul a fost trimis cu succes!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-400 text-center font-medium">
                  <i className="ri-error-warning-line mr-2"></i>
                  A apărut o eroare. Te rugăm să încerci din nou.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informații de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#7DF9FF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-[#7DF9FF] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Telefon</h4>
                    <p className="text-[#C4C4C4]">+40 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#7DF9FF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-[#7DF9FF] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-[#C4C4C4]">hello@framecraft.ro</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#7DF9FF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-[#7DF9FF] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Adresă</h4>
                    <p className="text-[#C4C4C4]">Strada Creativității 123<br />București, România</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-[#1A1A1D] rounded-2xl p-6 border border-[#C4C4C4]/10">
              <h4 className="text-xl font-bold text-white mb-4">Contact rapid</h4>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/40123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-[#C4C4C4] hover:text-[#7DF9FF] transition-colors duration-300"
                >
                  <i className="ri-whatsapp-line text-2xl"></i>
                  <span>WhatsApp</span>
                </a>
                
                <a
                  href="https://instagram.com/framecraftstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-[#C4C4C4] hover:text-[#7DF9FF] transition-colors duration-300"
                >
                  <i className="ri-instagram-line text-2xl"></i>
                  <span>Instagram</span>
                </a>
                
                <a
                  href="https://behance.net/framecraftstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-[#C4C4C4] hover:text-[#7DF9FF] transition-colors duration-300"
                >
                  <i className="ri-behance-line text-2xl"></i>
                  <span>Behance</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for ripple animation */}
      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
