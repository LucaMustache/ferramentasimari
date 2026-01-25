"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Creiamo una funzione per ottenere il client Supabase in modo sicuro
const getSupabase = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder"
  );
};

export default function AdminPage() {
  const [isLogged, setIsLogged] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({
    nome: "", descrizione: "", prezzo: "", quantita: "", categoria: "idraulica"
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "Simari2024") setIsLogged(true); 
    else alert("Password errata");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Seleziona un'immagine");
    setLoading(true);
    
    const supabase = getSupabase();

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      
      const { data: storageData, error: storageError } = await supabase.storage
        .from('foto-prodotti')
        .upload(fileName, file);

      if (storageError) throw storageError;

      const { data: urlData } = supabase.storage
        .from('foto-prodotti')
        .getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from('prodotti')
        .insert([{
          ...form,
          immagine_url: urlData.publicUrl,
          prezzo: parseFloat(form.prezzo),
          quantita: parseInt(form.quantita)
        }]);

      if (dbError) throw dbError;

      alert("Prodotto caricato con successo!");
      setForm({ nome: "", descrizione: "", prezzo: "", quantita: "", categoria: "idraulica" });
      setFile(null);
    } catch (error) {
      alert("Errore: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isLogged) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 w-full max-w-md text-center">
          <h1 className="text-white text-2xl font-black mb-6 uppercase">Accesso Admin</h1>
          <input 
            type="password" 
            placeholder="Inserisci Password" 
            className="w-full p-4 bg-black border border-zinc-800 rounded-xl text-white mb-4 outline-none focus:border-yellow-400"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full bg-yellow-400 text-black font-black py-4 rounded-xl hover:bg-white transition-all">
            ACCEDI
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 p-4 md:p-12 text-black">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-zinc-200">
        <h1 className="text-3xl font-black mb-8 border-l-8 border-yellow-400 pl-4">NUOVO PRODOTTO</h1>
        <form onSubmit={handleUpload} className="space-y-6">
          <div>
            <label className="block text-xs font-black text-zinc-400 uppercase mb-2">Immagine Prodotto</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} required className="w-full p-4 border-2 border-dashed border-zinc-200 rounded-2xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Nome Prodotto" required className="p-4 border border-zinc-200 rounded-xl"
                   onChange={(e) => setForm({...form, nome: e.target.value})} value={form.nome} />
            <input type="text" placeholder="Categoria" required className="p-4 border border-zinc-200 rounded-xl"
                   onChange={(e) => setForm({...form, categoria: e.target.value})} value={form.categoria} />
          </div>
          <textarea placeholder="Descrizione" required className="w-full p-4 border border-zinc-200 rounded-xl h-32"
                    onChange={(e) => setForm({...form, descrizione: e.target.value})} value={form.descrizione} />
          <div className="grid grid-cols-2 gap-6">
            <input type="number" step="0.01" placeholder="Prezzo (€)" required className="p-4 border border-zinc-200 rounded-xl"
                   onChange={(e) => setForm({...form, prezzo: e.target.value})} value={form.prezzo} />
            <input type="number" placeholder="Quantità" required className="p-4 border border-zinc-200 rounded-xl"
                   onChange={(e) => setForm({...form, quantita: e.target.value})} value={form.quantita} />
          </div>
          <button disabled={loading} className="w-full bg-black text-white py-5 rounded-2xl font-black text-xl hover:bg-yellow-400 hover:text-black transition-all disabled:bg-zinc-300">
            {loading ? "CARICAMENTO..." : "PUBBLICA PRODOTTO"}
          </button>
        </form>
      </div>
    </div>
  );
}