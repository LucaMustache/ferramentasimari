"use client";
import { useState, useEffect, use } from "react";
import { createClient } from "@supabase/supabase-js";

// IMPORT CORRETTI:
import { useCart } from "../../context/CartContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

// Inizializzazione Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function SchedaProdotto({ params }) {
  // Scompattiamo l'id dall'URL (Next.js 15 style)
  const { id } = use(params);
  
  const [prodotto, setProdotto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantitaSelezionata, setQuantitaSelezionata] = useState(1);
  const { addToCart } = useCart();

  // Caricamento dati dal database
  useEffect(() => {
    async function fetchProdotto() {
      try {
        const { data, error } = await supabase
          .from("prodotti")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        setProdotto(data);
      } catch (err) {
        console.error("Errore nel caricamento del prodotto:", err.message);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchProdotto();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-yellow-400"></div>
      </div>
    );
  }

  if (!prodotto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
        <h1 className="text-2xl font-black mb-4">PRODOTTO NON TROVATO</h1>
        <Link href="/" className="bg-black text-white px-8 py-3 rounded-xl font-bold">TORNA ALLA HOME</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <div className="max-w-7xl mx-auto px-4 pt-40 pb-20">
        {/* Breadcrumb dinamico */}
        <nav className="mb-8 text-sm text-zinc-500">
          <Link href="/" className="hover:text-yellow-400">Home</Link> / 
          <span className="capitalize"> {prodotto.categoria}</span> / 
          <span className="text-black font-bold"> {prodotto.nome}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* LATO SINISTRO: IMMAGINE REALE */}
          <div className="bg-zinc-100 rounded-3xl overflow-hidden aspect-square border border-zinc-200 shadow-inner group">
            <img 
              src={prodotto.immagine_url} 
              alt={prodotto.nome} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* LATO DESTRO: DETTAGLI REALI */}
          <div className="flex flex-col">
            <div className="mb-2">
               <span className="bg-yellow-400 text-black text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">
                {prodotto.categoria}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-none">
              {prodotto.nome}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-black text-black">€ {prodotto.prezzo}</span>
              {prodotto.quantita > 0 ? (
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                  DISPONIBILE ({prodotto.quantita} pezzi)
                </span>
              ) : (
                <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">
                  ESAURITO
                </span>
              )}
            </div>

            <p className="text-zinc-600 leading-relaxed mb-8 pb-8 border-b border-zinc-100 text-lg">
              {prodotto.descrizione}
            </p>

            {/* SELETTORE QUANTITÀ */}
            <div className="flex flex-col gap-4 mb-8">
              <label className="font-bold text-sm uppercase tracking-widest text-zinc-400">Seleziona Quantità</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-zinc-200 rounded-xl overflow-hidden bg-white">
                  <button 
                    onClick={() => setQuantitaSelezionata(Math.max(1, quantitaSelezionata - 1))}
                    className="px-5 py-3 hover:bg-zinc-100 font-bold transition-colors border-r border-zinc-200"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={quantitaSelezionata} 
                    readOnly
                    className="w-14 text-center font-black bg-transparent outline-none text-lg"
                  />
                  <button 
                    onClick={() => setQuantitaSelezionata(Math.min(prodotto.quantita, quantitaSelezionata + 1))}
                    className="px-5 py-3 hover:bg-zinc-100 font-bold transition-colors border-l border-zinc-200"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* AZIONI */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => {
                  addToCart({...prodotto, quantity: quantitaSelezionata});
                  // Opzionale: un feedback più carino dell'alert
                }}
                disabled={prodotto.quantita <= 0}
                className="w-full bg-black text-white py-5 rounded-2xl font-black text-lg hover:bg-yellow-400 hover:text-black transition-all shadow-xl active:scale-95 disabled:opacity-50 disabled:hover:bg-black disabled:hover:text-white"
              >
                {prodotto.quantita > 0 ? "AGGIUNGI AL CARRELLO" : "NON DISPONIBILE"}
              </button>
              
              <Link 
                href={`https://wa.me/39XXXXXXXXXX?text=Buongiorno, vorrei un preventivo per ${prodotto.nome} (ID: ${prodotto.id})`}
                target="_blank"
                className="w-full bg-zinc-100 text-zinc-600 py-4 rounded-2xl font-bold hover:bg-zinc-200 transition-all text-center"
              >
                RICHIEDI PREVENTIVO PERSONALIZZATO
              </Link>
            </div>

            {/* INFO AGGIUNTIVE */}
            <div className="mt-10 grid grid-cols-2 gap-4">
               <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm">🚚</div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase">Spedizione</p>
                    <p className="text-sm font-bold leading-tight">Ritiro in sede o Corriere</p>
                  </div>
               </div>
               <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm">💳</div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase">Pagamento</p>
                    <p className="text-sm font-bold leading-tight">Sicuro al 100%</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}