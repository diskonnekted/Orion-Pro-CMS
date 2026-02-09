import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 bg-brand-900 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img src="/assets/img/promo.png" alt="Background" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-900/80 via-brand-800/70 to-purple-900/80"></div>
        </div>

        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500 opacity-20 rounded-full blur-3xl z-0"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Mulai Website Impian Anda</h2>
            <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Download Orion CMS sekarang dan rasakan kemudahan membangun website profesional dalam hitungan menit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/?page=download" className="px-10 py-5 bg-white text-brand-600 rounded-full font-bold text-xl hover:bg-brand-50 transition shadow-2xl shadow-black/20 transform hover:-translate-y-1">
                    Download Gratis
                </Link>
                <Link href="#" className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-xl hover:bg-white/10 transition">
                    Dokumentasi
                </Link>
            </div>
            <p className="mt-8 text-sm text-brand-200 opacity-80">
                Versi 1.0.0 • Berlisensi MIT • Didukung Komunitas
            </p>
        </div>
    </section>
  );
}
