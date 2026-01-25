"use client";
import { useState, useEffect, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";

// Client inizializzato esternamente
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function AdminPage() {
  const [isLogged, setIsLogged] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [prodotti, setProdotti] = useState([]);
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({
    nome: "", descrizione: "", prezzo: "", quantita: "", categoria: "idraulica"
  });

  // Funzione per caricare i prodotti ordinati per il nuovo ID
  const fetchProdotti = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('prodotti')
        .select('*')
        .order('id', { ascending: false }); // Adesso l'ordinamento funziona!
      
      if (error) throw error;
      setProdotti(data || []);
    } catch (err) {
      console.error("Errore caricamento prodotti:", err.message);
    }
  }, []);

  useEffect(() => {
    if (isLogged) {
      fetchProdotti();
    }
  }, [isLogged, fetchProdotti]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "Simari2024") setIsLogged(true); 
    else alert("Password errata");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Seleziona un'immagine");
    setLoading(true);
    
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const { error: storageError } = await supabase.storage.from('foto-prodotti').upload(fileName, file);
      if (storageError) throw storageError;

      const { data: urlData } = supabase.storage.from('foto-prodotti').getPublicUrl(fileName);

      const { error: dbError } = await supabase.from('prodotti').insert([{
        ...form,
        immagine_url: urlData.publicUrl,
        prezzo: parseFloat(form.prezzo),
        quantita: parseInt(form.quantita)
      }]);

      if (dbError) throw dbError;
      alert("Prodotto caricato con successo!");
      
      setForm({ nome: "", descrizione: "", prezzo: "", quantita: "", categoria: "idraulica" });
      setFile(null);
      fetchProdotti(); 
    } catch (error) {
      alert("Errore: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Funzione eliminazione aggiornata per usare l'ID
  const deleteProdotto = async (id, nome) => {
    if (!confirm(`Sei sicuro di voler eliminare "${nome}"?`)) return;

    try {
      const { error } = await supabase
        .from('prodotti')
        .delete()
        .eq('id', id); // Usiamo l'ID univoco
      
      if (error) throw error;
      
      alert("Prodotto eliminato correttamente");
      fetchProdotti();
    } catch (error) {
      alert("Errore eliminazione: " + error.message);
    }
  };

  if (!isLogged) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 w-full max-w-md text-center">
          <h1 className="text-white text-2xl font-black mb-6 uppercase tracking-tighter">Accesso Pannello Simari</h1>
          <input type="password" placeholder="Password" className="w-full p-4 bg-black border border-zinc-800 rounded-xl text-white mb-4" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="w-full bg-yellow-400 text-black font-black py-4 rounded-xl hover:bg-yellow-500 transition-colors">ENTRA</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100 p-4 md:p-12 text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* FORM DI CARICAMENTO */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200 h-fit">
          <h1 className="text-2xl font-black mb-8 border-l-8 border-yellow-400 pl-4 uppercase">Aggiungi Prodotto</h1>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-zinc-500 ml-1">Immagine Prodotto</label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} required className="w-full p-4 border-2 border-dashed border-zinc-200 rounded-2xl bg-zinc-50" />
            </div>
            <input type="text" placeholder="Nome prodotto" required className="w-full p-4 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none" onChange={(e) => setForm({...form, nome: e.target.value})} value={form.nome} />
            <select className="w-full p-4 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none" onChange={(e) => setForm({...form, categoria: e.target.value})} value={form.categoria}>
                <option value="idraulica">Idraulica ed Edilizia</option>
                <option value="colorificio">Colorificio</option>
                <option value="ferramenta">Ferramenta</option>
            </select>
            <textarea placeholder="Descrizione dettagliata" required className="w-full p-4 border border-zinc-200 rounded-xl h-24 focus:ring-2 focus:ring-yellow-400 outline-none" onChange={(e) => setForm({...form, descrizione: e.target.value})} value={form.descrizione} />
            <div className="grid grid-cols-2 gap-4">
              <input type="number" step="0.01" placeholder="Prezzo (€)" required className="p-4 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none" onChange={(e) => setForm({...form, prezzo: e.target.value})} value={form.prezzo} />
              <input type="number" placeholder="Quantità" required className="p-4 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none" onChange={(e) => setForm({...form, quantita: e.target.value})} value={form.quantita} />
            </div>
            <button disabled={loading} className="w-full bg-black text-white py-5 rounded-2xl font-black text-xl hover:bg-yellow-400 hover:text-black transition-all shadow-lg disabled:opacity-50">
              {loading ? "CARICAMENTO IN CORSO..." : "PUBBLICA PRODOTTO"}
            </button>
          </form>
        </div>

        {/* LISTA PRODOTTI (Visualizza l'ID per sicurezza) */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200 h-[800px] flex flex-col">
          <div className="flex justify-between items-center mb-8 border-l-8 border-zinc-400 pl-4">
            <h2 className="text-2xl font-black uppercase">Prodotti Online</h2>
            <span className="bg-zinc-100 px-4 py-1 rounded-full font-bold text-zinc-600">{prodotti.length}</span>
          </div>
          
          <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            {prodotti.length === 0 && (
              <div className="text-center py-20">
                <p className="text-zinc-400 font-medium">Nessun prodotto nel database.</p>
              </div>
            )}
            {prodotti.map((p) => (
              <div key={p.id} className="flex items-center gap-4 p-3 border border-zinc-100 rounded-2xl hover:bg-zinc-50 transition-all group">
                <img src={p.immagine_url} alt="" className="w-16 h-16 object-cover rounded-lg bg-zinc-100 shadow-sm" />
                <div className="flex-1">
                  <h3 className="font-bold text-sm leading-tight group-hover:text-yellow-600 transition-colors">{p.nome}</h3>
                  <p className="text-[10px] text-zinc-400 font-mono mb-1 leading-none">ID: #{p.id}</p>
                  <p className="text-xs text-zinc-500 uppercase font-bold">{p.categoria} — €{p.prezzo}</p>
                </div>
                <button 
                  onClick={() => deleteProdotto(p.id, p.nome)}
                  className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                  title="Elimina prodotto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}