import Link from 'next/link';
import { pool } from '@/lib/db';

interface Post {
  ID: number;
  post_title: string;
  post_content: string;
  post_date: Date;
  featured_image_url?: string;
}

export default async function News() {
  const [posts] = await pool.query<any[]>(`
    SELECT p.*, pm.meta_value as featured_image_url 
    FROM orion_posts p
    LEFT JOIN orion_postmeta pm ON p.ID = pm.post_id AND pm.meta_key = '_thumbnail_url'
    WHERE p.post_status = 'publish' AND p.post_type = 'post'
    ORDER BY p.post_date DESC 
    LIMIT 3
  `);

  return (
    <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Berita & Artikel</h2>
                    <p className="text-slate-600">Tips, trik, dan update seputar pengembangan web.</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts && posts.length > 0 ? (
                    posts.map((post: Post) => (
                        <article key={post.ID} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 flex flex-col h-full group">
                            {post.featured_image_url ? (
                                <div className="h-56 overflow-hidden relative">
                                    <img src={post.featured_image_url} alt={post.post_title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-600 uppercase tracking-wide">
                                        News
                                    </div>
                                </div>
                            ) : (
                                <div className="h-56 bg-slate-100 flex items-center justify-center text-slate-400 relative">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-600 uppercase tracking-wide">
                                        Article
                                    </div>
                                </div>
                            )}
                            
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="text-sm text-slate-500 mb-3 flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    {new Date(post.post_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-brand-600 transition">
                                    <Link href={`/posts/${post.ID}`}>
                                        {post.post_title}
                                    </Link>
                                </h3>
                                <p className="text-slate-600 mb-4 line-clamp-3 flex-grow leading-relaxed">
                                    {post.post_content.replace(/<[^>]*>?/gm, '').substring(0, 100)}...
                                </p>
                                <Link href={`/posts/${post.ID}`} className="text-brand-600 font-bold hover:text-brand-700 inline-flex items-center mt-auto uppercase text-sm tracking-wide">
                                    Baca Selengkapnya
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </Link>
                            </div>
                        </article>
                    ))
                ) : (
                    <div className="col-span-3 text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                        <p className="text-slate-500 text-lg">Belum ada konten yang tersedia.</p>
                    </div>
                )}
            </div>
        </div>
    </section>
  );
}
