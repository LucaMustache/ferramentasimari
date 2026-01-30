"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* TITOLO PAGINA */}
      <section className="pt-32 pb-16 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            Contat<span className="text-yellow-400">taci</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto font-medium">
            Hai bisogno di un preventivo o di verificare la disponibilità di un prodotto? 
            Siamo a tua completa disposizione a Mileto.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* COLONNA SINISTRA: INFO E ORARI */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest text-sm text-yellow-400">Informazioni di contatto</h2>
              <div className="space-y-8">
                
                {/* INDIRIZZO (Cliccabile per navigatore) */}
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="text-white font-bold text-lg uppercase tracking-tight">Indirizzo</p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Ferramenta+e+colori+SIMARI+Corso+Umberto+I+164+Mileto" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zinc-400 font-medium italic hover:text-yellow-400 transition-colors"
                    >
                      Corso Umberto I, 164 - 89852 Mileto (VV)
                    </a>
                  </div>
                </div>

                {/* TELEFONO (Cliccabile) */}
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📞</span>
                  <div>
                    <p className="text-white font-bold text-lg uppercase tracking-tight">Telefono</p>
                    <a href="tel:0963338135" className="text-yellow-400 font-black hover:text-white transition-colors text-2xl">
                      0963 338135
                    </a>
                  </div>
                </div>

                {/* EMAIL (Cliccabile) */}
                <div className="flex items-start gap-4">
                  <span className="text-3xl">✉️</span>
                  <div>
                    <p className="text-white font-bold text-lg uppercase tracking-tight">Email</p>
                    <a href="mailto:maxsimari@libero.it" className="text-zinc-400 font-medium hover:text-yellow-400 transition-colors border-b border-zinc-800">
                      maxsimari@libero.it
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* ORARI (Aggiornati dai dati Maps) */}
            <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 italic flex items-center gap-2">
                <span className="text-yellow-400">🕒</span> Orari del Negozio
              </h3>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex justify-between border-b border-zinc-800 pb-2 italic text-sm">
                  <span>Lunedì - Venerdì</span>
                  <span className="text-white font-bold">07:30 – 19:00</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800 pb-2 italic text-sm">
                  <span>Sabato</span>
                  <span className="text-white font-bold">07:30 – 12:30</span>
                </li>
                <li className="flex justify-between pb-2 italic text-sm">
                  <span>Domenica</span>
                  <span className="text-red-500 font-black uppercase">Chiuso</span>
                </li>
              </ul>
            </div>
          </div>

          {/* COLONNA DESTRA: MODULO DI CONTATTO */}
          <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-8 italic">Inviaci un messaggio</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-500 text-xs font-bold mb-2 uppercase tracking-widest">Nome e Cognome</label>
                  <input type="text" required className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-yellow-400 transition-all placeholder:text-zinc-600" placeholder="Esempio: Mario Rossi" />
                </div>
                <div>
                  <label className="block text-zinc-500 text-xs font-bold mb-2 uppercase tracking-widest">Telefono</label>
                  <input type="tel" required className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-yellow-400 transition-all placeholder:text-zinc-600" placeholder="333 1234567" />
                </div>
              </div>
              <div>
                <label className="block text-zinc-500 text-xs font-bold mb-2 uppercase tracking-widest">Messaggio</label>
                <textarea rows="4" required className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-yellow-400 transition-all placeholder:text-zinc-600" placeholder="Scrivi qui la tua richiesta..."></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-400 hover:bg-white text-black font-black py-5 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-yellow-400/10 uppercase tracking-widest text-sm">
                Invia Richiesta
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* MAPPA (Corso Umberto I, 164) */}
      <section className="h-[450px] w-full bg-zinc-900 border-t border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.820251148679!2d16.066456176378414!3d38.6071424641158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ff9999494e6c3%3A0x48815d0aca941904!2sCorso%20Umberto%20I%2C%20164%2C%2089852%20Mileto%20VV!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit" 
          className="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </main>
  );
}