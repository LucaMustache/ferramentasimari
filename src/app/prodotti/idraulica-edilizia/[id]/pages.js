"use client";
import { useState, use } from "react";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Link from "next/link";

export default function SchedaProdotto({ params }) {
  // Scompattiamo l'id dall'URL (es: se l'url è /1, id sarà 1)
  const { id } = use(params);
  const [quantita, setQuantita] = useState(1);

  // Per ora simuliamo i dati di un prodotto basandoci sull'ID
  // Quando avremo Supabase, questi dati arriveranno dal Database
  const prodotto = {
    id: id,
    nome: `Articolo Idraulico Professionale #${id}`,
    prezzo: "24.90",
    descrizione: "Prodotto di alta qualità selezionato dalla Ferramenta Simari. Ideale per installazioni professionali e fai-da-te avanzato. Resistente alla corrosione e conforme alle normative UE.",
    disponibilita: 15,
    immagine: "https://via.placeholder.com/600x600?text=Prodotto+" + id
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <div className="max-w-7xl mx-auto px-4 pt-40 pb-20">
        {/* Breadcrumb per tornare indietro */}
        <nav className="mb-8 text-sm text-zinc-500">
          <Link href="/" className="hover:text-yellow-400">Home</Link> / 
          <Link href="/prodotti/idraulica-edilizia" className="hover:text-yellow-400"> Idraulica ed Edilizia</Link> / 
          <span className="text-black font-bold"> Prodotto {id}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* LATO SINISTRO: IMMAGINE */}
          <div className="bg-zinc-100 rounded-3xl overflow-hidden aspect-square border border-zinc-200 shadow-inner">
            <img 
              src={prodotto.immagine} 
              alt={prodotto.nome} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* LATO DESTRO: DETTAGLI E ACQUISTO */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-black mb-4 uppercase tracking-tighter leading-none">
              {prodotto.nome}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-black text-black">€ {prodotto.prezzo}</span>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                DISPONIBILE ({prodotto.disponibilita} pezzi)
              </span>
            </div>

            <p className="text-zinc-600 leading-relaxed mb-8 pb-8 border-b border-zinc-100 text-lg">
              {prodotto.descrizione}
            </p>

            {/* SELETTORE QUANTITÀ */}
            <div className="flex flex-col gap-4 mb-8">
              <label className="font-bold text-sm uppercase tracking-widest text-zinc-400">Seleziona Quantità</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-zinc-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setQuantita(Math.max(1, quantita - 1))}
                    className="px-4 py-2 hover:bg-zinc-100 font-bold transition-colors"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={quantita} 
                    readOnly
                    className="w-12 text-center font-black bg-transparent outline-none"
                  />
                  <button 
                    onClick={() => setQuantita(quantita + 1)}
                    className="px-4 py-2 hover:bg-zinc-100 font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* AZIONI */}
            <div className="flex flex-col gap-3">
              <button className="w-full bg-black text-white py-5 rounded-2xl font-black text-lg hover:bg-yellow-400 hover:text-black transition-all shadow-xl active:scale-95">
                AGGIUNGI AL CARRELLO
              </button>
              <button className="w-full bg-zinc-100 text-zinc-600 py-4 rounded-2xl font-bold hover:bg-zinc-200 transition-all">
                RICHIEDI PREVENTIVO PERSONALIZZATO
              </button>
            </div>

            {/* INFO AGGIUNTIVE */}
            <div className="mt-10 grid grid-cols-2 gap-4">
               <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase">Spedizione</p>
                  <p className="text-sm font-bold">Ritiro in sede o Corriere</p>
               </div>
               <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase">Pagamento</p>
                  <p className="text-sm font-bold">Sicuro al 100%</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}