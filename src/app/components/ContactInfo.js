export default function ContactInfo() {
  const hours = [
    { day: "Lunedì - Venerdì", time: "07:30 – 19:00" },
    { day: "Sabato", time: "07:30 – 12:30" },
    { day: "Domenica", time: "Chiuso" },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* MAPPA & INFO */}
          <div>
            <h2 className="text-3xl font-black text-white mb-8">Vieni a trovarci</h2>
            <div className="aspect-video w-full rounded-2xl overflow-hidden grayscale contrast-125 mb-8 border border-zinc-800">
             <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.8058444053153!2d16.063891076595514!3d38.60761666373735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133fe99994a6e6c3%3A0x48815d0ab0e41904!2sFerramenta%20e%20colori%20SIMARI!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit" 
  className="w-full h-full grayscale opacity-70 hover:opacity-100 transition-opacity duration-500"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
            </div>
            <p className="text-zinc-400 text-lg">
              Corso Umberto I, 164 <br />
              89852 Mileto (VV)
            </p>
          </div>

          {/* ORARI */}
          <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800">
            <h3 className="text-2xl font-bold text-white mb-8">Orari di Apertura</h3>
            <div className="space-y-4">
              {hours.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-4 border-b border-zinc-800 last:border-0">
                  <span className="text-zinc-400 font-medium">{item.day}</span>
                  <span className={`font-bold ${item.time === 'Chiuso' ? 'text-red-500' : 'text-yellow-400'}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-yellow-400 rounded-2xl">
              <p className="text-black font-bold text-center">
                Serve aiuto subito? Chiamaci in negozio!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}