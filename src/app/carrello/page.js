"use client";
import { useCart } from "@/app/context/CartContext";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CarrelloPage() {
  const { cart, addToCart, removeFromCart } = useCart();
  const [totale, setTotale] = useState(0);

  // Calcolo del totale in tempo reale
  useEffect(() => {
    const t = cart.reduce((acc, item) => acc + item.prezzo * item.quantity, 0);
    setTotale(t.toFixed(2));
  }, [cart]);

  // Funzione per generare il messaggio WhatsApp con l'ordine completo
  const generaMessaggioWhatsApp = () => {
    let messaggio = "Buongiorno, vorrei ordinare i seguenti prodotti:%0A%0A";
    cart.forEach((item) => {
      messaggio += `- ${item.nome} (x${item.quantity}): €${item.prezzo * item.quantity}%0A`;
    });
    messaggio += `%0A*TOTALE ESTIMATO: €${totale}*`;
    return `https://wa.me/393461052665?text=${messaggio}`; // Sostituisci col tuo numero
  };

  return (
    <main className="min-h-screen bg-zinc-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 pt-40 pb-20">
        <h1 className="text-4xl font-black mb-8 border-l-8 border-yellow-400 pl-6 uppercase">
          Il tuo Carrello
        </h1>

        {cart.length === 0 ? (
          // STATO CARRELLO VUOTO
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-zinc-100">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Il carrello è vuoto</h2>
            <p className="text-zinc-500 mb-8">Non hai ancora aggiunto prodotti.</p>
            <Link href="/" className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition-all">
              TORNA AL CATALOGO
            </Link>
          </div>
        ) : (
          // STATO CARRELLO PIENO
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LISTA PRODOTTI (Sinistra) */}
            <div className="flex-1 flex flex-col gap-6">
              {cart.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-zinc-100 flex gap-6 items-center">
                  
                  {/* Immagine */}
                  <div className="w-24 h-24 bg-zinc-100 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.immagine_url} alt={item.nome} className="w-full h-full object-cover" />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-bold text-zinc-900 uppercase text-sm mb-1">{item.nome}</h3>
                    <p className="text-zinc-400 text-xs mb-2">Codice: {item.id}</p>
                    <span className="font-black text-lg">€ {item.prezzo}</span>
                  </div>

                  {/* Controlli Quantità */}
                  <div className="flex items-center gap-3 bg-zinc-50 rounded-lg p-2">
                    <button 
                      onClick={() => addToCart({ ...item, quantity: -1 })}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm font-bold hover:bg-zinc-200"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => addToCart({ ...item, quantity: 1 })}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm font-bold hover:bg-zinc-200"
                    >
                      +
                    </button>
                  </div>

                  {/* Tasto Rimuovi */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-zinc-300 hover:text-red-500 transition-colors p-2"
                    title="Rimuovi"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* RIEPILOGO ORDINE (Destra - Sticky) */}
            <div className="lg:w-1/3 h-fit">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-zinc-100 sticky top-32">
                <h3 className="font-bold text-xl mb-6">Riepilogo Ordine</h3>
                
                <div className="flex justify-between mb-4 text-zinc-500">
                  <span>Prodotti ({cart.length})</span>
                  <span>€ {totale}</span>
                </div>
                <div className="flex justify-between mb-8 text-green-600 font-bold text-sm">
                  <span>Spedizione</span>
                  <span>Da concordare</span>
                </div>

                <div className="border-t border-zinc-100 pt-6 mb-8 flex justify-between items-end">
                  <span className="font-bold text-zinc-900">TOTALE ESTIMATO</span>
                  <span className="text-4xl font-black text-black">€ {totale}</span>
                </div>

                <Link 
                  href={generaMessaggioWhatsApp()}
                  target="_blank"
                  className="block w-full bg-green-500 text-white text-center py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-200"
                >
                  INVIA ORDINE SU WHATSAPP 💬
                </Link>
                <p className="text-center text-xs text-zinc-400 mt-4">
                  Cliccando verrai reindirizzato su WhatsApp col riepilogo.
                </p>
              </div>
            </div>

          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}