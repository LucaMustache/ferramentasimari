import Header from "./components/Header";
import Hero from "./components/Hero";
import History from "./components/History";
import Features from "./components/Features";
import Brands from "./components/Brands";
import ContactInfo from "./components/ContactInfo"; // Nuovo import
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <History />
      <Features />
      <Brands />
      
      {/* Sezione Servizi Rapidi */}
      <section className="py-20 bg-zinc-900">
        {/* ... (codice dei box tintometro e chiavi che abbiamo già scritto) */}
      </section>

      {/* NUOVA SEZIONE: Contatti e Orari */}
      <ContactInfo />

      {/* CTA Gialla finale */}
      <section className="py-24 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-black text-black mb-6 tracking-tight">
            Cerchi un consiglio professionale?
          </h2>
          <a href="tel:0963338006" className="inline-block bg-black text-white font-bold px-12 py-5 rounded-2xl hover:bg-zinc-800 transition-all shadow-xl">
            Chiamaci Ora
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}