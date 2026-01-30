// src/app/prodotti/idraulica-edilizia/page.js
"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function IdraulicaPage() {
  const [prodotti, setProdotti] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProdotti() {
      // Filtriamo per la categoria specifica
      const { data, error } = await supabase
        .from("prodotti")
        .select("*")
        .eq("categoria", "idraulica"); // o il nome esatto della categoria nel DB

      if (!error) setProdotti(data);
      setLoading(false);
    }
    getProdotti();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 pt-40 pb-20">
        <h1 className="text-4xl font-black mb-12 border-l-8 border-yellow-400 pl-6 uppercase">
          Reparto Idraulica ed Edilizia
        </h1>

        {loading ? (
          <div className="py-20 text-center text-zinc-400">Caricamento prodotti...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {prodotti.map((p) => (
              <Link href={`/prodotti/${p.id}`} key={p.id} className="group">
                <div className="bg-white rounded-2xl border border-zinc-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden bg-zinc-50">
                    <img 
                      src={p.immagine_url} 
                      alt={p.nome} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-black uppercase text-sm mb-2 group-hover:text-yellow-500 transition-colors">
                      {p.nome}
                    </h3>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-black">€ {p.prezzo}</span>
                      <span className="text-[10px] font-bold bg-zinc-100 px-2 py-1 rounded">VEDI SCHEDA</span>
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