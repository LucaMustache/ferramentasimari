// File: src/app/components/Hero.js
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-zinc-900 h-[600px] flex items-center overflow-hidden">
      
      {/* SFONDO CON L'IMMAGINE SCELTA DA TE */}
      <div className="absolute inset-0 z-0">
  <img 
    src="https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?q=80&w=2000&auto=format&fit=crop" 
    alt="Utensili di precisione" 
    className="w-full h-full object-cover opacity-60" 
  />
  {/* Overlay più leggero: da black/90 a black/70 e da black/60 a black/20 */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
</div>

      {/* CONTENUTO */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm font-bold tracking-wide mb-6">
            DAL 1908 A MILETO (VV)
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Costruiamo insieme <br />
            il tuo <span className="text-yellow-400">Futuro.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed">
            Ferramenta, vernici, idraulica e tutto il necessario per il professionista e il fai-da-te. 
            La qualità che cerchi, con la consulenza di chi se ne intende.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/prodotti" 
              className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-lg text-black bg-yellow-400 hover:bg-yellow-500 transition-all shadow-lg shadow-yellow-400/20"
            >
              Esplora Prodotti
            </Link>
            <Link 
              href="/contatti" 
              className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-lg text-white border-2 border-zinc-700 hover:bg-zinc-800 transition-all"
            >
              Dove Siamo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}