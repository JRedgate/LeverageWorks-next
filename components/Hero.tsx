import React from 'react';
import Link from 'next/link';
import { BookCallButton } from '@/components/BookCallButton';

export const Hero: React.FC = () => (
  <header className="relative pt-40 pb-32 md:pt-56 md:pb-44 overflow-hidden bg-brand-surface">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>
    <div className="container mx-auto px-6 md:px-16 relative z-10">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
          <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Operating Partner for Industrial Businesses</span>
        </div>
        <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
          Too many decisions still land on your desk.
        </h1>
        <p className="text-brand-slate text-xl leading-relaxed mb-10 max-w-2xl font-light">
          LVRGWRKS works with owners and leadership teams in manufacturing, construction, energy services and distribution to move decisions and handoffs off your desk and into the business. You keep more margin, get time back to lead, and build a company that doesn&apos;t stall when you step away.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <BookCallButton variant="navy" />
          <Link href="/coordination-tax-calculator" className="text-brand-navy font-semibold underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold transition-colors">
            Try the Coordination Tax Calculator
          </Link>
        </div>
        <p className="mt-10 text-sm text-brand-slate">Based in Calgary. Serving industrial businesses across Canada.</p>
      </div>
    </div>
  </header>
);
