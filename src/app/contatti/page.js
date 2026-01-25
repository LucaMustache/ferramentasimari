import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* TITOLO PAGINA */}
      <section className="pt-32 pb-16 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Contat<span className="text-yellow-400">taci</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
            Hai bisogno di un preventivo o di verificare la disponibilità di un prodotto? 
            Siamo a tua completa disposizione.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* COLONNA SINISTRA: INFO E ORARI */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Informazioni di contatto</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-white font-bold text-lg">Indirizzo</p>
                    <p className="text-zinc-400 font-medium italic">Corso Umberto I, 164 - 89852 Mileto (VV)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-white font-bold text-lg">Telefono</p>
                    <a href="tel:0963338006" className="text-yellow-400 font-bold hover:underline text-xl">
                      0963 338006
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-white font-bold text-lg">Email</p>
                    <p className="text-zinc-400 font-medium">info@ferramentasimari.it</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-6 italic">Orari del Negozio</h3>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex justify-between border-b border-zinc-800 pb-2 italic text-sm">
                  <span>Lunedì - Venerdì</span>
                  <span className="text-white">07:30 – 19:00</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800 pb-2 italic text-sm">
                  <span>Sabato</span>
                  <span className="text-white">07:30 – 12:30</span>
                </li>
                <li className="flex justify-between pb-2 italic text-sm">
                  <span>Domenica</span>
                  <span className="text-red-500 font-bold">Chiuso</span>
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
                  <label className="block text-zinc-500 text-sm font-bold mb-2 uppercase italic tracking-tighter">Nome e Cognome</label>
                  <input type="text" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors" placeholder="Mario Rossi" />
                </div>
                <div>
                  <label className="block text-zinc-500 text-sm font-bold mb-2 uppercase italic tracking-tighter">Telefono</label>
                  <input type="text" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors" placeholder="333 1234567" />
                </div>
              </div>
              <div>
                <label className="block text-zinc-500 text-sm font-bold mb-2 uppercase italic tracking-tighter">Messaggio</label>
                <textarea rows="5" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors" placeholder="Come possiamo aiutarti?"></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-4 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-yellow-400/20">
                Invia Richiesta
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* MAPPA FULL WIDTH */}
      <section className="h-[450px] w-full bg-zinc-900 border-t border-zinc-800">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.118949826372!2d16.06170237648356!3d38.60761657178761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ff99a9494e6c3%3A0x48816d0abc941904!2sFerramenta%20e%20colori%20SIMARI!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit" 
    className="w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
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