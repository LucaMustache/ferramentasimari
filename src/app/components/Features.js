import Link from "next/link"; // Importante: importa Link in alto

export default function Features() {
  const departments = [
    {
      title: "Utensileria",
      desc: "Strumenti professionali per artigiani e amanti del fai-da-te.",
      icon: "🛠️",
      link: "/prodotti", // Rimanda alla pagina prodotti generica
    },
    {
      title: "Colorificio",
      desc: "Sistemi tintometrici avanzati. Clicca per esplorare la mazzetta colori.",
      icon: "🎨",
      link: "/colorificio", // Questo punta alla nuova mazzetta 3D
    },
    {
      title: "Duplicazione Chiavi",
      desc: "Precisione millimetrica per la sicurezza della tua casa.",
      icon: "🔑",
      link: "/prodotti", // O alla sezione contatti per info
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-3">Dal 1908</h2>
          <p className="text-4xl font-black text-white">I Nostri Reparti</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <Link href={dept.link} key={index} className="block group">
              <div className="p-8 h-full bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-yellow-400 transition-all duration-300">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {dept.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {dept.desc}
                </p>
                {/* Piccolo indicatore visivo "Scopri di più" */}
                <div className="mt-6 text-yellow-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  SCOPRI DI PIÙ →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}