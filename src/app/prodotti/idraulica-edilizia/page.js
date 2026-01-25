"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Inizializzazione collegamento
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function CatalogoIdraulica() {
  const [prodotti, setProdotti] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProdotti() {
      // Chiediamo a Supabase i prodotti della categoria idraulica
      const { data, error } = await supabase
        .from('prodotti')
        .select('*')
        .eq('categoria', 'idraulica');

      if (!error) setProdotti(data);
      setLoading(false);
    }
    fetchProdotti();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <h1 className="text-3xl font-black mb-8 border-l-8 border-yellow-400 pl-4 text-black uppercase">
          Idraulica ed Edilizia
        </h1>

        {loading ? (
          <div className="text-center py-20 text-zinc-500 font-bold animate-pulse">Caricamento catalogo reale...</div>
        ) : prodotti.length === 0 ? (
          <div className="text-center py-20 bg-zinc-50 rounded-3xl border-2 border-dashed border-zinc-200">
            <p className="text-zinc-400">Nessun prodotto presente. Accedi al pannello admin per aggiungerli.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {prodotti.map((p) => (
              <Link href={`/prodotti/idraulica-edilizia/${p.id}`} key={p.id} className="group">
                <div className="border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white">
                  <div className="aspect-square bg-zinc-100 overflow-hidden">
                    <img src={p.immagine_url} alt={p.nome} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-zinc-900 mb-1 text-lg">{p.nome}</h3>
                    <div className="flex justify-between items-end mt-4">
                      <span className="text-2xl font-black text-black">€ {p.prezzo.toFixed(2)}</span>
                      <span className="text-[10px] bg-zinc-100 px-2 py-1 rounded font-bold text-zinc-500 uppercase">Disp: {p.quantita}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}