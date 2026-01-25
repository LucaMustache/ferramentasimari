import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* COLONNA 1: INFO NEGOZIO */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
              Ferramenta <span className="text-yellow-400">Simari</span>
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Il punto di riferimento a Mileto per la ferramenta, i colori e il fai-da-te. 
              Qualità e professionalità al servizio del cliente dal 1908.
            </p>
          </div>

          {/* COLONNA 2: LINK RAPIDI */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider text-zinc-300">
              Link Rapidi
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-500 hover:text-yellow-400 text-sm transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/prodotti" className="text-zinc-500 hover:text-yellow-400 text-sm transition-colors">Prodotti</Link>
              </li>
              <li>
                <Link href="/contatti" className="text-zinc-500 hover:text-yellow-400 text-sm transition-colors">Contatti</Link>
              </li>
            </ul>
          </div>

          {/* COLONNA 3: CONTATTI */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider text-zinc-300">
              Contattaci
            </h3>
            <p className="text-zinc-500 text-sm mb-2">Corso Umberto I, Mileto (VV)</p>
            <p className="text-zinc-500 text-sm mb-2">Tel: +39 0963 XXXXXX</p>
            <p className="text-zinc-500 text-sm">Email: info@ferramentasimari.it</p>
          </div>

        </div>

        {/* LINEA DI SEPARAZIONE E INFO AZIENDALI */}
        <div className="pt-8 border-t border-zinc-900 text-center">
          {/* Sostituito <p> con <div> per evitare errori di nidificazione */}
          <div className="mb-6">
            <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-wider">
              Ferramenta <span className="text-yellow-400">Simari</span>
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mx-auto">
              Dal 1908, il punto di riferimento a Mileto per la ferramenta, i colori e il fai-da-te. 
              Una tradizione di famiglia che continua con Massimiliano Simari.
            </p>
          </div>
          
          <div className="text-zinc-600 text-[10px] md:text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Ferramenta e Colori SIMARI – P.IVA IT0000000000. Tutti i diritti riservati.
          </div>
        </div>
      </div>
    </footer>
  );
}