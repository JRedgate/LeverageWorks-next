'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';
import { useBriefing } from './BriefingProvider';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { openBriefing } = useBriefing();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-brand-surface flex flex-col font-sans">
      <Navbar onContactClick={() => openBriefing()} />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
