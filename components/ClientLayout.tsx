'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll on route change, but never fight a hash target such as
    // /leverage-audit#book, which has to land on the booking embed.
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-brand-surface flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
