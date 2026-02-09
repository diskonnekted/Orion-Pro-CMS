import Link from 'next/link';
import { 
  Waves, 
  Truck, 
  Home, 
  Car, 
  CloudRain, 
  Video, 
  Factory, 
  Activity,
  Printer,
  LucideIcon 
} from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

function SolutionCard({ title, description, icon: Icon, color, bgColor }: SolutionCardProps) {
  return (
    <div className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer h-80 bg-white border border-slate-100 transition-all duration-300`}>
      {/* Background Icon - Large & Faded */}
      <div className={`absolute -right-8 -bottom-8 opacity-5 transform -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition duration-700`}>
        <Icon className="w-48 h-48 text-slate-900" strokeWidth={1} />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
        <div className={`w-20 h-20 rounded-2xl ${bgColor} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition duration-300`}>
             <Icon className={`w-10 h-10 ${color}`} />
        </div>
        <h3 className="text-slate-900 font-bold text-xl mb-3">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/10 rounded-xl transition duration-300 pointer-events-none"></div>
    </div>
  );
}

export default function ThemeShowcase() {
  const solutions = [
    {
      title: "Orion EWS Pro",
      description: "Flood, Landslide, Quake & Tsunami Detection",
      icon: Waves,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Orion Load Scanner",
      description: "Mining Material Volume Calculation",
      icon: Truck,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "Orion Smarthome",
      description: "Integrated Home Automation",
      icon: Home,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      title: "Orion Smartpark",
      description: "Intelligent Parking System",
      icon: Car,
      color: "text-slate-600",
      bgColor: "bg-slate-50"
    },
    {
      title: "Weather Station",
      description: "Real-time Environmental Monitoring",
      icon: CloudRain,
      color: "text-sky-600",
      bgColor: "bg-sky-50"
    },
    {
      title: "Orion Livecam",
      description: "Live CCTV Streaming Integration",
      icon: Video,
      color: "text-rose-600",
      bgColor: "bg-rose-50"
    },
    {
      title: "Industrial Automation",
      description: "Process Control & Efficiency",
      icon: Factory,
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      title: "Machine Monitor",
      description: "Industrial Equipment Health Check",
      icon: Activity,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      title: "Belajar Menyablon",
      description: "How to Screenprinting",
      icon: Printer,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Solusi Industri & Aplikasi</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Jelajahi berbagai implementasi Orion Pro di berbagai sektor industri.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
        </div>
        
        <div className="text-center mt-12">
            <Link href="/themes" className="inline-flex items-center font-bold text-indigo-600 hover:text-indigo-700 text-lg">
                Lihat Semua Solusi
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
        </div>
      </div>
    </section>
  );
}
