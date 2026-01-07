import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPolitici, setShowPolitici] = useState(false);
  const [showGDPR, setShowGDPR] = useState(false);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
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
                <button
                  onClick={scrollToPortfolio}
                  className="w-10 h-10 bg-[#1A1A1D] rounded-lg flex items-center justify-center text-[#C4C4C4] hover:text-[#7DF9FF] hover:bg-[#7DF9FF]/10 transition-all duration-300"
                >
                  <i className="ri-instagram-line text-lg"></i>
                </button>
                <button
                  onClick={scrollToServices}
                  className="w-10 h-10 bg-[#1A1A1D] rounded-lg flex items-center justify-center text-[#C4C4C4] hover:text-[#7DF9FF] hover:bg-[#7DF9FF]/10 transition-all duration-300"
                >
                  <i className="ri-behance-line text-lg"></i>
                </button>
                <a
                  href="https://wa.me/40700000000"
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
                  070 000 000
                </li>
                <li className="text-[#C4C4C4]">
                  <i className="ri-mail-line mr-2"></i>
                  hello@helloframecraft.ro
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
                <button
                  onClick={() => setShowPolitici(true)}
                  className="text-[#C4C4C4] hover:text-[#7DF9FF] transition-colors duration-300 text-sm cursor-pointer"
                >
                  Politici
                </button>
                <button
                  onClick={() => setShowGDPR(true)}
                  className="text-[#C4C4C4] hover:text-[#7DF9FF] transition-colors duration-300 text-sm cursor-pointer"
                >
                  GDPR
                </button>
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

      {/* Modal Politici */}
      {showPolitici && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPolitici(false)}
        >
          <div 
            className="bg-[#1A1A1D] rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#1A1A1D] border-b border-[#C4C4C4]/10 px-8 py-6 flex justify-between items-center">
              <h3 className="text-3xl font-bold text-white">Politici și Termeni</h3>
              <button 
                onClick={() => setShowPolitici(false)}
                className="text-[#C4C4C4] hover:text-[#7DF9FF] transition-colors"
              >
                <i className="ri-close-line text-3xl"></i>
              </button>
            </div>
            
            <div className="px-8 py-6 space-y-6 text-[#C4C4C4]">
              <section>
                <h4 className="text-xl font-semibold text-white mb-3">1. Termeni și Condiții</h4>
                <p className="leading-relaxed mb-3">
                  Prin utilizarea serviciilor FrameCraft Studio, acceptați să respectați prezentii termeni și condiții. 
                  Serviciile noastre includ fotografie comercială, portret executive, fotografie de produs și editorial creative.
                </p>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">2. Servicii Oferite</h4>
                <p className="leading-relaxed mb-3">
                  FrameCraft Studio oferă servicii profesionale de fotografie pentru clienți business și individuali. 
                  Fiecare proiect include consultanță inițială gratuită, sesiune foto profesională și post-producție avansată.
                </p>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">3. Programări și Anulări</h4>
                <p className="leading-relaxed mb-3">
                  Programările se fac prin formular online, email sau telefon. Pentru anulări, vă rugăm să ne contactați 
                  cu cel puțin 48 de ore înainte de data programată. Anulările făcute cu mai puțin de 24 de ore înainte 
                  pot fi supuse unei taxe de 30% din valoarea serviciului.
                </p>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">4. Drepturi de Autor și Utilizare</h4>
                <p className="leading-relaxed mb-3">
                  Toate fotografiile realizate de FrameCraft Studio sunt protejate de drepturile de autor. Clientul primește 
                  drepturi de utilizare comercială conform contractului semnat. FrameCraft Studio își rezervă dreptul de a 
                  utiliza fotografiile în portofoliu și materiale promoționale, cu excepția cazurilor în care acest lucru 
                  este specificat altfel în contract.
                </p>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">5. Plăți și Facturare</h4>
                <p className="leading-relaxed mb-3">
                  Prețurile sunt stabilite în funcție de complexitatea proiectului și sunt comunicate în oferta inițială. 
                  Se solicită un avans de 50% la confirmarea programării. Restul sumei se plătește la livrarea finală a 
                  materialelor. Acceptăm plăți prin transfer bancar sau numerar.
                </p>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">6. Livrare și Termen</h4>
                <p className="leading-relaxed mb-3">
                  Materialele finale sunt livrate în format digital de înaltă rezoluție. Termenul standard de livrare 
                  este de 5-7 zile lucrătoare de la sesiunea foto. Pentru proiecte urgente, este disponibilă opțiunea 
                  de livrare rapidă cu cost suplimentar.
                </p>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">7. Confidențialitate</h4>
                <p className="leading-relaxed mb-3">
                  Respectăm confidențialitatea tuturor informațiilor primite de la clienți. Detaliile proiectelor și 
                  datele personale sunt tratate conform GDPR și nu sunt partajate cu terțe părți fără acordul explicit.
                </p>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">8. Modificări ale Politicilor</h4>
                <p className="leading-relaxed mb-3">
                  FrameCraft Studio își rezervă dreptul de a modifica aceste politici în orice moment. Modificările 
                  vor fi comunicate prin site și vor intra în vigoare imediat după publicare.
                </p>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">9. Contact</h4>
                <p className="leading-relaxed">
                  Pentru întrebări sau clarificări privind politicile noastre, ne puteți contacta la:
                </p>
                <ul className="mt-2 space-y-1">
                  <li><strong>Email:</strong> hello@helloframecraft.ro</li>
                  <li><strong>Telefon:</strong> 070 000 000</li>
                </ul>
              </section>
            </div>

            <div className="sticky bottom-0 bg-[#1A1A1D] border-t border-[#C4C4C4]/10 px-8 py-6">
              <button
                onClick={() => setShowPolitici(false)}
                className="w-full bg-gradient-to-r from-[#7DF9FF] to-[#00CED1] text-[#0B0B0D] py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#7DF9FF]/30 transition-all duration-300"
              >
                Închide
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal GDPR */}
      {showGDPR && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowGDPR(false)}
        >
          <div 
            className="bg-[#1A1A1D] rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#1A1A1D] border-b border-[#C4C4C4]/10 px-8 py-6 flex justify-between items-center">
              <h3 className="text-3xl font-bold text-white">Politica GDPR</h3>
              <button 
                onClick={() => setShowGDPR(false)}
                className="text-[#C4C4C4] hover:text-[#7DF9FF] transition-colors"
              >
                <i className="ri-close-line text-3xl"></i>
              </button>
            </div>
            
            <div className="px-8 py-6 space-y-6 text-[#C4C4C4]">
              <section>
                <h4 className="text-xl font-semibold text-white mb-3">1. Introducere</h4>
                <p className="leading-relaxed mb-3">
                  FrameCraft Studio respectă dreptul dumneavoastră la confidențialitate și protecția datelor personale 
                  conform Regulamentului General privind Protecția Datelor (GDPR - Regulamentul UE 2016/679) și 
                  legislației române aplicabile în domeniul protecției datelor cu caracter personal.
                </p>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">2. Date Colectate</h4>
                <p className="leading-relaxed mb-3">
                  Colectăm următoarele categorii de date personale:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Date de identificare: nume, prenume</li>
                  <li>Date de contact: adresă email, număr de telefon</li>
                  <li>Date despre proiect: detalii despre serviciile solicitate, preferințe creative</li>
                  <li>Date de facturare: informații necesare pentru emiterea facturilor</li>
                  <li>Imagini și conținut vizual rezultat din sesiunile foto</li>
                </ul>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">3. Scopul Prelucrării</h4>
                <p className="leading-relaxed mb-3">
                  Prelucrăm datele dumneavoastră în următoarele scopuri:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Prestarea serviciilor de fotografie solicitate</li>
                  <li>Comunicare privind proiectele în desfășurare</li>
                  <li>Facturare și contabilitate</li>
                  <li>Îmbunătățirea serviciilor noastre</li>
                  <li>Marketing (doar cu consimțământul dumneavoastră explicit)</li>
                </ul>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">4. Baza Legală a Prelucrării</h4>
                <p className="leading-relaxed mb-3">
                  Prelucrarea datelor se bazează pe:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Executarea contractului de servicii între dumneavoastră și FrameCraft Studio</li>
                  <li>Consimțământul dumneavoastră explicit pentru anumite activități</li>
                  <li>Obligații legale (ex: păstrare documente contabile)</li>
                  <li>Interesul legitim al FrameCraft Studio (ex: utilizare imagini în portofoliu)</li>
                </ul>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">5. Partajarea Datelor</h4>
                <p className="leading-relaxed mb-3">
                  Datele dumneavoastră pot fi partajate cu:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Furnizori de servicii tehnice (hosting, email)</li>
                  <li>Parteneri de procesare plăți</li>
                  <li>Autorități publice (când este cerut legal)</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  Nu vindem și nu închiriem datele personale către terțe părți pentru scopuri de marketing.
                </p>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">6. Drepturile Dumneavoastră</h4>
                <p className="leading-relaxed mb-3">
                  Conform GDPR, aveți următoarele drepturi:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Dreptul de acces:</strong> puteți solicita o copie a datelor personale pe care le deținem</li>
                  <li><strong>Dreptul la rectificare:</strong> puteți solicita corectarea datelor inexacte</li>
                  <li><strong>Dreptul la ștergere:</strong> puteți solicita ștergerea datelor în anumite condiții</li>
                  <li><strong>Dreptul la restricționarea prelucrării:</strong> puteți solicita limitarea modului în care folosim datele</li>
                  <li><strong>Dreptul la portabilitatea datelor:</strong> puteți primi datele într-un format structurat</li>
                  <li><strong>Dreptul la opoziție:</strong> puteți vă opune prelucrării datelor în anumite situații</li>
                  <li><strong>Dreptul de a depune plângere:</strong> puteți contacta Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</li>
                </ul>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">7. Securitatea Datelor</h4>
                <p className="leading-relaxed mb-3">
                  Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră împotriva 
                  accesului neautorizat, pierderii, distrugerii sau alterării. Acestea includ:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Criptarea datelor sensibile</li>
                  <li>Acces restricționat la date (doar personal autorizat)</li>
                  <li>Backup-uri regulate</li>
                  <li>Sisteme de protecție firewall și antivirus</li>
                </ul>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">8. Perioada de Stocare</h4>
                <p className="leading-relaxed mb-3">
                  Păstrăm datele dumneavoastră personale doar atât timp cât este necesar pentru:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Îndeplinirea scopurilor pentru care au fost colectate</li>
                  <li>Respectarea obligațiilor legale (ex: documente contabile - 10 ani)</li>
                  <li>Rezolvarea eventualelor dispute</li>
                </ul>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">9. Cookie-uri</h4>
                <p className="leading-relaxed mb-3">
                  Website-ul nostru folosește cookie-uri pentru a îmbunătăți experiența utilizatorului. Puteți gestiona 
                  preferințele privind cookie-urile prin setările browser-ului dumneavoastră.
                </p>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">10. Modificări ale Politicii</h4>
                <p className="leading-relaxed mb-3">
                  Ne rezervăm dreptul de a actualiza această politică. Orice modificare va fi publicată pe această 
                  pagină cu data ultimei actualizări.
                </p>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-white mb-3">11. Contact și Exercitarea Drepturilor</h4>
                <p className="leading-relaxed mb-3">
                  Pentru exercitarea drepturilor GDPR sau pentru orice întrebări privind prelucrarea datelor, 
                  ne puteți contacta la:
                </p>
                <ul className="mt-2 space-y-1">
                  <li><strong>Email:</strong> hello@helloframecraft.ro</li>
                  <li><strong>Telefon:</strong> 070 000 000</li>
                  <li><strong>Adresă:</strong> Strada Creativității 123, București, România</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  Vă vom răspunde în termen de 30 de zile de la primirea solicitării.
                </p>
              </section>

              <section>
                <p className="text-sm text-[#C4C4C4] italic">
                  Ultima actualizare: Ianuarie 2026
                </p>
              </section>
            </div>

            <div className="sticky bottom-0 bg-[#1A1A1D] border-t border-[#C4C4C4]/10 px-8 py-6">
              <button
                onClick={() => setShowGDPR(false)}
                className="w-full bg-gradient-to-r from-[#7DF9FF] to-[#00CED1] text-[#0B0B0D] py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#7DF9FF]/30 transition-all duration-300"
              >
                Închide
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
