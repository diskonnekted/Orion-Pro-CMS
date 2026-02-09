import Link from 'next/link';

export default function ThemeShowcase() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Galeri Tema Pilihan</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Jelajahi berbagai kemungkinan desain yang bisa Anda terapkan.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Theme Card School */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
                <img src="/assets/img/school.png" alt="Orion School" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-1">Orion School</h3>
                        <p className="text-slate-300 text-sm">Academic & Education</p>
                    </div>
                </div>
            </div>
            {/* Theme Card Promo */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
                <img src="/assets/img/promo.png" alt="Orion Promo" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-1">Orion Promo</h3>
                        <p className="text-slate-300 text-sm">Marketing & Landing Page</p>
                    </div>
                </div>
            </div>
            {/* Theme Card 1 */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
                <img src="/assets/img/one.png" alt="Theme One" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-1">Orion One</h3>
                        <p className="text-slate-300 text-sm">Multipurpose Theme</p>
                    </div>
                </div>
            </div>
             {/* Theme Card 2 */}
             <div className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
                <img src="/assets/img/portfolio.png" alt="Theme Portfolio" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-1">Creative Portfolio</h3>
                        <p className="text-slate-300 text-sm">For Designers & Artists</p>
                    </div>
                </div>
            </div>
             {/* Theme Card 3 */}
             <div className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
                <img src="/assets/img/magazine.png" alt="Theme Magazine" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-1">News Magazine</h3>
                        <p className="text-slate-300 text-sm">Content Heavy Sites</p>
                    </div>
                </div>
            </div>
            {/* Theme Card Shop */}
             <div className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
                <img src="/assets/img/shop.png" alt="Orion Shop" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-1">Orion Shop</h3>
                        <p className="text-slate-300 text-sm">E-Commerce Solution</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="text-center mt-12">
            <Link href="/?page=download" className="inline-flex items-center font-bold text-brand-600 hover:text-brand-700 text-lg">
                Lihat Semua Tema
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
        </div>
      </div>
    </section>
  );
}
