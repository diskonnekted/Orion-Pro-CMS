import Header from '@/components/themes/smartvillage/Header';
import Footer from '@/components/themes/smartvillage/Footer';
import MonitorDashboard from '@/components/themes/smartvillage/MonitorDashboard';

export default function MonitorPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <Header />
      <main className="pt-6 pb-20">
        <MonitorDashboard />
      </main>
      <Footer />
    </div>
  );
}
