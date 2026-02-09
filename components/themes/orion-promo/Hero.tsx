import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-brand-50 via-white to-blue-50 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <img src="/assets/img/hero-bg.svg" alt="Pattern" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-600 text-sm font-semibold mb-6 shadow-sm animate-fade-in-up">
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Orion CMS v1.0 Resmi Dirilis
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Bangun Web <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">Tanpa Batas</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Platform manajemen konten modern yang menggabungkan performa tinggi, keamanan tingkat lanjut, dan kemudahan penggunaan untuk developer maupun pemula.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="/?page=download" className="px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg hover:bg-brand-700 transition shadow-xl shadow-brand-500/20 transform hover:-translate-y-1 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download Gratis
              </Link>
              <Link href="#features" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition hover:border-slate-300 flex items-center justify-center">
                Pelajari Fitur
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Open Source
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Tanpa Biaya Bulanan
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:w-1/2 relative perspective-1000">
            <div className="relative rounded-xl bg-white shadow-2xl border border-slate-200 overflow-hidden transform rotate-y-6 rotate-x-6 hover:rotate-0 transition-all duration-700 ease-out p-2">
              <div className="absolute top-0 left-0 w-full h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 flex-1 h-4 bg-white rounded-md border border-slate-200 text-[10px] flex items-center px-2 text-slate-400 font-mono">
                  https://your-orion-site.com/admin
                </div>
              </div>
              <div className="mt-8 rounded-lg overflow-hidden border border-slate-100">
                {/* Fallback visual using available asset */}
                <img src="/assets/img/CMS-ORION-ONE.png" alt="Orion Dashboard" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">System Updated</div>
                  <div className="text-xs text-slate-500">Just now</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -right-5 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-float animation-delay-1000">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">New Plugin Added</div>
                  <div className="text-xs text-slate-500">2 mins ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
