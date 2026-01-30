"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext"; // Importiamo il carrello

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart(); // Accediamo ai dati del carrello

  // Calcolo del numero totale di articoli nel carrello
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-black tracking-tighter text-white uppercase">
              Ferramenta <span className="text-yellow-400">E colori SIMARI</span>
            </Link>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-zinc-400 hover:text-yellow-400 transition-colors text-sm font-bold uppercase tracking-widest">Home</Link>
            <Link href="/prodotti" className="text-zinc-400 hover:text-yellow-400 transition-colors text-sm font-bold uppercase tracking-widest">Prodotti</Link>
            <Link href="/contatti" className="text-zinc-400 hover:text-yellow-400 transition-colors text-sm font-bold uppercase tracking-widest">Contatti</Link>
            
            {/* ICONA CARRELLO DESKTOP */}
            <Link href="/carrello" className="relative p-2 text-white hover:text-yellow-400 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-black">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link href="/contatti" className="bg-yellow-400 text-black px-6 py-2 rounded-full font-black text-sm hover:bg-white transition-all">
              RICHIEDI PREVENTIVO
            </Link>
          </div>

          {/* BOTTONI MOBILE (Carrello + Hamburger) */}
          <div className="md:hidden flex items-center gap-4">
            {/* ICONA CARRELLO MOBILE */}
            <Link href="/carrello" className="relative p-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-black">
                  {cartCount}
                </span>
              )}
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE DROP DOWN */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-zinc-900 border-b border-zinc-800`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-white font-bold border-b border-zinc-800">HOME</Link>
          <Link href="/prodotti" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-white font-bold border-b border-zinc-800">PRODOTTI</Link>
          <Link href="/carrello" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-yellow-400 font-bold border-b border-zinc-800">IL TUO CARRELLO ({cartCount})</Link>
          <Link href="/contatti" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-white font-bold border-b border-zinc-800">CONTATTI</Link>
          <div className="pt-4">
            <Link 
              href="/contatti" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-yellow-400 text-black font-black py-4 rounded-xl"
            >
              RICHIEDI PREVENTIVO
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}