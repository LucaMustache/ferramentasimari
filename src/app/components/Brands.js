export default function Brands() {
  const brands = [
    { name: "Bosch", src: "/logo-bosch.png" },
    { name: "Makita", src: "/logo-makita.png" },
    { name: "Saratoga", src: "/logo-saratoga.png" },
    { name: "Colorificio Sammarinese", src: "/logo-sammarinese.png" },
  ];

  return (
    <section className="py-16 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-12">
          I nostri partner di fiducia
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={brand.src} 
                alt={brand.name} 
                className="h-8 md:h-12 w-auto object-contain 
                           grayscale opacity-40 
                           hover:grayscale-0 hover:opacity-100 
                           hover:scale-110
                           transition-all duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}