export default function Features() {
  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-purple-100 rounded-full filter blur-3xl opacity-50 transform -translate-x-10"></div>
            <img src="/assets/img/magazine.png" alt="Theme Showcase" className="relative rounded-2xl shadow-2xl border border-slate-100 transform hover:scale-105 transition duration-500" />
          </div>
          <div className="md:w-1/2">
            <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Desain Memukau, Tanpa Ribet</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Pilih dari puluhan tema profesional yang siap pakai. Kustomisasi tampilan website Anda dengan mudah tanpa harus menyentuh kode sedikitpun. Responsif di semua perangkat.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Drag & Drop Layout Builder
              </li>
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Mobile Friendly & SEO Optimized
              </li>
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Unlimited Color Customization
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-green-100 rounded-full filter blur-3xl opacity-50 transform translate-x-10"></div>
            <img src="/assets/img/smartvillage.png" alt="Plugin System" className="relative rounded-2xl shadow-2xl border border-slate-100 transform hover:scale-105 transition duration-500" />
          </div>
          <div className="md:w-1/2">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ekosistem Plugin yang Kuat</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Perluas fungsionalitas website Anda dengan ribuan plugin yang tersedia. Dari toko online, forum diskusi, hingga sistem booking, semuanya ada.
            </p>
            <div className="flex gap-4">
              <div className="p-4 bg-slate-50 rounded-lg text-center w-32 border border-slate-100">
                <div className="text-2xl font-bold text-brand-600 mb-1">500+</div>
                <div className="text-xs text-slate-500 font-medium">Free Plugins</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg text-center w-32 border border-slate-100">
                <div className="text-2xl font-bold text-purple-600 mb-1">200+</div>
                <div className="text-xs text-slate-500 font-medium">Premium Addons</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
