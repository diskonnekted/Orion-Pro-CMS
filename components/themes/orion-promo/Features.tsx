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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dasbor Khusus IoT & Otomasi</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Monitoring bencana alam dengan real-time alerts, analisis beban dan performa sistem secara akurat, serta otomasi pertanian modern dengan kontrol penuh.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Early Warning System (EWS)
              </li>
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Load Scanner & Industrial Automation
              </li>
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                SmartFarm & Environmental Monitoring
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-green-100 rounded-full filter blur-3xl opacity-50 transform translate-x-10"></div>
            <img src="/assets/img/smartvillage.png" alt="Technology" className="relative rounded-2xl shadow-2xl border border-slate-100 transform hover:scale-105 transition duration-500" />
          </div>
          <div className="md:w-1/2">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">NextJS Technology Benefits</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Performa lightning-fast dengan server-side rendering, SEO optimization untuk visibilitas maksimal, dan scalable architecture untuk pertumbuhan proyek.
            </p>
            <div className="flex gap-4">
              <div className="p-4 bg-slate-50 rounded-lg text-center w-36 border border-slate-100">
                <div className="text-xl font-bold text-brand-600 mb-1">Real-time</div>
                <div className="text-xs text-slate-500 font-medium">WebSocket Integration</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg text-center w-36 border border-slate-100">
                <div className="text-xl font-bold text-purple-600 mb-1">PWA</div>
                <div className="text-xs text-slate-500 font-medium">Ready Capabilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
