import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function ProdottiPage() {
  const categorie = [
    {
      id: 1,
      titolo: "Colorificio Professionale",
      descrizione: "Sistema tintometrico computerizzato per smalti e pitture personalizzate.",
      immagine: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
      tag: "Tintometro",
      link: "/colorificio" // Punta alla mazzetta 3D
    },
    {
      id: 2,
      titolo: "Elettroutensili",
      descrizione: "Il meglio di Bosch e Makita per professionisti e hobbisti esigenti.",
      immagine: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2000&auto=format&fit=crop",
      tag: "Qualità",
      link: "/contatti"
    },
    {
      id: 3,
      titolo: "Sicurezza e Chiavi",
      descrizione: "Duplicazione chiavi immediata e serrature ad alta sicurezza.",
      immagine: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2000&auto=format&fit=crop",
      tag: "Servizio",
      link: "/contatti"
    },
    {
      id: 4,
      titolo: "Idraulica ed Edilizia",
      descrizione: "Soluzioni complete per la manutenzione e la costruzione.",
      immagine: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2000&auto=format&fit=crop",
      tag: "Forniture",
      link: "/prodotti/idraulica-edilizia" // Punta al nuovo marketplace
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* HEADER PAGINA */}
      <section className="pt-32 pb-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            I Nostri <span className="text-yellow-400">Reparti</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-3xl border-l-4 border-yellow-400 pl-6">
            Dal 1908 selezioniamo solo i migliori marchi sul mercato. 
            Scopri la nostra gamma di prodotti per ogni tua esigenza professionale.
          </p>
        </div>
      </section>

      {/* GRIGLIA PRODOTTI */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {categorie.map((cat) => (
            <div key={cat.id} className="group relative h-[400px] rounded-3xl overflow-hidden border border-zinc-800">
              <img 
                src={cat.immagine} 
                alt={cat.titolo} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 p-10 w-full">
                <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full mb-4">
                  {cat.tag}
                </span>
                <h2 className="text-3xl font-black text-white mb-3">{cat.titolo}</h2>
                <p className="text-zinc-300 mb-6 max-w-sm">{cat.descrizione}</p>
                
                {/* MODIFICATO: href ora usa cat.link invece di "/contatti" fisso */}
                <Link 
                  href={cat.link} 
                  className="inline-flex items-center text-yellow-400 font-bold hover:gap-3 transition-all"
                >
                  {cat.id === 4 ? "Esplora Catalogo" : "Scopri di più"} <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEZIONE MARCHI */}
      <section className="py-20 bg-zinc-950 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4 italic">Collaboriamo con i leader del settore</h2>
          <div className="flex justify-center gap-8 opacity-30 grayscale italic text-white font-black text-xl flex-wrap">
             BOSCH • MAKITA • SARATOGA • FISCHER
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}