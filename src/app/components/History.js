export default function History() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">
            Quattro generazioni, <br />
            <span className="text-yellow-400">una sola passione.</span>
          </h2>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              La nostra storia inizia nel <strong>1908</strong>, quando il Nonno <strong>Ernesto Simari</strong> aprì le porte della nostra attività a Mileto. 
            </p>
            <p>
              Da allora, il testimone è passato di generazione in generazione, prima ad <strong>Adriano Simari</strong> che ha servito per anni con grande dedizione tutto il comune di <strong>Mileto e dintorni</strong>  tra risate e professionalità arrivando fino ad oggi, dove al comando dell'attività troviamo <strong>Massimiliano Simari</strong>. 
            </p>
          </div>
        </div>
        
        {/* FOTO STORICA REALE */}
        <div className="md:w-1/2 relative">
           <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img 
                src="/foto-storica.jpg" 
                alt="Sede storica Ferramenta Simari" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
           </div>
           {/* Badge */}
           <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-black font-black p-6 rounded-lg -rotate-2 shadow-xl z-10">
              DAL 1908 A MILETO
           </div>
        </div>
      </div>
    </section>
  );
}