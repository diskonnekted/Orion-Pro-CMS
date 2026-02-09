export default function Stats() {
  return (
    <section className="py-10 bg-slate-900 text-white border-y border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
          <div>
            <div className="text-4xl font-bold text-brand-400 mb-1">10k+</div>
            <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Downloads</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-400 mb-1">50+</div>
            <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Themes</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-400 mb-1">100+</div>
            <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Plugins</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-400 mb-1">99%</div>
            <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
