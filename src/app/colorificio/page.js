"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Dati estratti dal tuo file CSV ral_classic.csv
const ralData = {
  Gialli: [
    { ral: "RAL 1000", hex: "#CDBA88", ita: "Beige verdastro" },
    { ral: "RAL 1003", hex: "#F9A900", ita: "Giallo segnale" },
    { ral: "RAL 1012", hex: "#DDAF28", ita: "Giallo limone" },
    { ral: "RAL 1018", hex: "#FACA31", ita: "Giallo zinco" },
    { ral: "RAL 1021", hex: "#F6B600", ita: "Giallo navone" },
    { ral: "RAL 1023", hex: "#F7B500", ita: "Giallo traffico" },
  ],
  Aranci: [
    { ral: "RAL 2000", hex: "#DA6E00", ita: "Arancio giallastro" },
    { ral: "RAL 2004", hex: "#E25304", ita: "Arancio puro" },
    { ral: "RAL 2009", hex: "#DE5308", ita: "Arancio traffico" },
    { ral: "RAL 2011", hex: "#E26E0F", ita: "Arancio profondo" },
  ],
  Rossi: [
    { ral: "RAL 3000", hex: "#A72920", ita: "Rosso fuoco" },
    { ral: "RAL 3003", hex: "#861A22", ita: "Rosso rubino" },
    { ral: "RAL 3020", hex: "#BB1F11", ita: "Rosso traffico" },
    { ral: "RAL 3031", hex: "#A63437", ita: "Rosso oriente" },
  ],
  Blu: [
    { ral: "RAL 5002", hex: "#00387A", ita: "Blu oltremare" },
    { ral: "RAL 5010", hex: "#004F7C", ita: "Blu genziana" },
    { ral: "RAL 5015", hex: "#007CAF", ita: "Blu cielo" },
    { ral: "RAL 5017", hex: "#005B8C", ita: "Blu traffico" },
  ],
  Verdi: [
    { ral: "RAL 6001", hex: "#366735", ita: "Verde smeraldo" },
    { ral: "RAL 6005", hex: "#114232", ita: "Verde muschio" },
    { ral: "RAL 6018", hex: "#60993B", ita: "Verde giallastro" },
    { ral: "RAL 6024", hex: "#008351", ita: "Verde traffico" },
  ],
  Grigi: [
    { ral: "RAL 7016", hex: "#383E42", ita: "Grigio antracite" },
    { ral: "RAL 7035", hex: "#D7D7D7", ita: "Grigio luce" },
    { ral: "RAL 7040", hex: "#919191", ita: "Grigio finestra" },
  ]
};

export default function ColorificioPage() {
  const [selectedFamily, setSelectedFamily] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [activeColor, setActiveColor] = useState(null);

  // Aggiorna il colore attivo in base alla rotazione della ruota
  useEffect(() => {
    if (selectedFamily) {
      const colors = ralData[selectedFamily];
      const normalizedRotation = ((rotation % 360) + 360) % 360;
      const index = Math.floor((normalizedRotation / 360) * colors.length);
      setActiveColor(colors[index] || colors[0]);
    }
  }, [rotation, selectedFamily]);

  const handleInteraction = (e) => {
    // Gestione trascinamento mouse e touch mobile
    const movement = e.movementX || (e.touches ? e.touches[0].clientX - (window.lastX || e.touches[0].clientX) : 0);
    if (e.buttons === 1 || e.touches) {
      setRotation(prev => prev + movement * 0.6);
    }
    if (e.touches) window.lastX = e.touches[0].clientX;
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <section className="pt-32 pb-20 px-4 flex flex-col items-center">
        {!selectedFamily ? (
          /* LIVELLO 1: SELEZIONE CATEGORIA */
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter">
              MAZZETTA <span className="text-yellow-400">COLORI</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
              {Object.keys(ralData).map((f) => (
                <button 
                  key={f}
                  onClick={() => setSelectedFamily(f)}
                  className="group relative w-36 h-52 md:w-44 md:h-64 rounded-2xl overflow-hidden border border-zinc-800 transition-transform hover:-translate-y-2"
                >
                  <div className="absolute inset-0 opacity-90" style={{ backgroundColor: ralData[f][0].hex }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <span className="absolute bottom-6 left-0 right-0 font-bold uppercase tracking-widest text-sm">{f}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* LIVELLO 2: RUOTA E LENTE DI FOCUS */
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* RUOTA INTERATTIVA */}
            <div className="flex flex-col items-center">
              <button 
                onClick={() => setSelectedFamily(null)} 
                className="mb-10 text-zinc-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
              >
                ← Torna alle categorie
              </button>
              
              <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] touch-none">
                {/* Indicatore Fisso (Mirino) */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                  <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-yellow-400"></div>
                </div>

                <div 
                  className="w-full h-full rounded-full relative shadow-[0_0_80px_rgba(0,0,0,0.8)] border-8 border-zinc-900 cursor-grab active:cursor-grabbing transition-transform duration-100 ease-out"
                  style={{ 
                    transform: `rotate(${-rotation}deg)`,
                    background: `conic-gradient(${ralData[selectedFamily].map((c, i) => `${c.hex} ${(i/ralData[selectedFamily].length)*100}%`).join(', ')})`
                  }}
                  onMouseMove={handleInteraction}
                  onTouchMove={handleInteraction}
                >
                  <div className="absolute inset-[35%] bg-black rounded-full border-4 border-zinc-800 flex items-center justify-center z-20">
                    <p className="text-[10px] text-zinc-500 font-bold text-center leading-tight">GIRA LA<br/>RUOTA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LENTE DI FOCUS */}
            <div className="flex justify-center">
              <div 
                className="w-72 h-72 md:w-96 md:h-96 rounded-full border-[15px] border-zinc-900 shadow-2xl flex flex-col items-center justify-center text-center p-10 transition-colors duration-300 relative overflow-hidden"
                style={{ backgroundColor: activeColor?.hex }}
              >
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="relative z-10 mix-blend-difference text-white">
                  <p className="text-xs font-black opacity-70 mb-2 uppercase tracking-widest">Codice Originale</p>
                  <h2 className="text-5xl md:text-6xl font-black mb-3">{activeColor?.ral}</h2>
                  <div className="h-1 w-16 bg-white mx-auto mb-6"></div>
                  <p className="text-xl md:text-2xl font-medium italic">{activeColor?.ita}</p>
                </div>
                
                <div className="absolute bottom-10 left-0 right-0 text-[10px] font-bold opacity-40 mix-blend-difference">
                  SIMARI TINTOMETRO SYSTEM
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}