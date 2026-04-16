'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';
import { LwSymbol } from './Logo';
import { useBriefing } from './BriefingProvider';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const { openBriefing } = useBriefing();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-brand-navy flex flex-col items-center justify-center p-6">
        <LwSymbol color="#FFFFFF" className="w-16 h-16 mb-8 animate-pulse" />
        <h2 className="text-white text-[11px] font-medium tracking-[0.5em] uppercase mb-12 opacity-90 text-center">
          Architecting Intelligence
        </h2>
        <div className="w-40 h-[1px] bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-gold animate-progress h-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-surface flex flex-col font-sans">
      <Navbar onContactClick={() => openBriefing()} />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
