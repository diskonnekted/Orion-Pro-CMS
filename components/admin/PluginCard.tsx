'use client';

import { Plugin, togglePluginStatus } from '@/lib/plugins/manager';
import Link from 'next/link';
import { useState, useTransition } from 'react';

interface PluginCardProps {
  plugin: Plugin;
}

export default function PluginCard({ plugin }: PluginCardProps) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState(plugin.status);

  const handleToggle = async () => {
    startTransition(async () => {
      try {
        const result = await togglePluginStatus(plugin.slug, status);
        if (result.success) {
          setStatus(result.status as 'active' | 'inactive');
        }
      } catch (error) {
        console.error('Failed to toggle plugin status:', error);
      }
    });
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border p-6 flex flex-col h-full transition-colors ${
      status === 'active' ? 'border-slate-200' : 'border-slate-100 bg-slate-50'
    }`}>
      <div className="flex items-start justify-between mb-4">
        {plugin.icon.startsWith('/') || plugin.icon.includes('.') ? (
          <div className={`w-16 h-16 rounded-lg overflow-hidden border ${status === 'active' ? 'border-slate-100' : 'border-slate-200 grayscale opacity-75'}`}>
            <img 
              src={plugin.icon} 
              alt={`${plugin.name} icon`}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className={`p-3 rounded-lg text-2xl ${
            status === 'active' ? 'bg-blue-50' : 'bg-slate-200 grayscale'
          }`}>
            {plugin.icon}
          </div>
        )}
        <div className="flex items-center gap-2">
           <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            status === 'active' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-slate-200 text-slate-600 border border-slate-300'
          }`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>
      
      <h3 className={`text-lg font-bold mb-2 ${status === 'active' ? 'text-slate-800' : 'text-slate-500'}`}>
        {plugin.name}
      </h3>
      <p className="text-slate-500 text-sm mb-4 flex-1">{plugin.description}</p>
      
      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
        <div className="text-xs text-slate-400">
          v{plugin.version} • by {plugin.author}
        </div>
        
        <div className="flex items-center gap-2">
           {status === 'active' && plugin.link && (
            <Link 
              href={plugin.link}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
            >
              Open &rarr;
            </Link>
          )}
          
          <button
            onClick={handleToggle}
            disabled={isPending}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition border ${
              status === 'active'
                ? 'bg-white text-red-600 border-red-200 hover:bg-red-50'
                : 'bg-blue-600 text-white border-transparent hover:bg-blue-700'
            }`}
          >
            {isPending ? 'Processing...' : (status === 'active' ? 'Deactivate' : 'Activate')}
          </button>
        </div>
      </div>
    </div>
  );
}
