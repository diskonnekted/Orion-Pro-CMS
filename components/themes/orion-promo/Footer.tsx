import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-6 md:mb-0 text-left">
                    <img src="/assets/img/orion-light.png" alt="Orion CMS" className="h-16 mb-4 block" />
                    <h3 className="text-2xl font-bold text-white mb-2">Orion CMS</h3>
                    <p className="text-slate-400 max-w-xs">Platform manajemen konten modern yang dirancang super ringan dan difokuskan pada kecepatan.</p>
                </div>
                <div className="flex space-x-6">
                    <Link href="/?page=documentation" className="hover:text-brand-400 transition">Dokumentasi</Link>
                    <a href="https://github.com/diskonnekted/Orion-CMS" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition">GitHub</a>
                </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
                &copy; {new Date().getFullYear()} Orion CMS. All rights reserved. ❤️ From <a href="https://www.clasnet.co.id" className="text-brand-400 hover:text-brand-300 transition" target="_blank" rel="noopener noreferrer">Clasnet</a> to You.
            </div>
        </div>
    </footer>
  );
}
