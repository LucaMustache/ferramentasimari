"use client"; // Necessario per gestire l'apertura del menu
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-black tracking-tighter text-white">
              Ferramenta <span className="text-yellow-400">E colori SIMARI</span>
            </Link>
          </div>

          {/* MENU DESKTOP (Sopra i 768px) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-zinc-400 hover:text-yellow-400 transition-colors text-sm font-bold uppercase tracking-widest">Home</Link>
            <Link href="/prodotti" className="text-zinc-400 hover:text-yellow-400 transition-colors text-sm font-bold uppercase tracking-widest">Prodotti</Link>
            <Link href="/contatti" className="text-zinc-400 hover:text-yellow-400 transition-colors text-sm font-bold uppercase tracking-widest">Contatti</Link>
            <Link href="/contatti" className="bg-yellow-400 text-black px-6 py-2 rounded-full font-black text-sm hover:bg-white transition-all">
              RICHIEDI PREVENTIVO
            </Link>
          </div>

          {/* BOTTONE HAMBURGER (Solo Mobile) */}
          <div className="md:hidden flex items-center">
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

      {/* MENU MOBILE (Appare solo quando isOpen è true) */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-zinc-900 border-b border-zinc-800`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-white font-bold border-b border-zinc-800">HOME</Link>
          <Link href="/prodotti" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-white font-bold border-b border-zinc-800">PRODOTTI</Link>
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