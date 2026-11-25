import React from 'react';
import Link from 'next/link';
import { BookCallButton } from '@/components/BookCallButton';

// Layout is the `main` hero (addendum 3, Section 3.1): one column, eyebrow
// pill, two-tone headline, paragraph, two buttons, "Serving:" strip.

const serving: { label: string; href?: string }[] = [
  { label: 'Manufacturing', href: '/industries/manufacturing' },
  { label: 'Construction', href: '/industries/construction' },
  { label: 'Energy Services', href: '/industries/energy-services' },
  { label: 'Distribution', href: '/industries/distribution' },
];

export const Hero: React.FC = () => (
  <header className="relative pt-24 sm:pt-40 pb-32 md:pt-56 md:pb-48 overflow-hidden bg-brand-surface">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>
    <div className="container mx-auto px-6 md:px-16 relative z-10">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
          <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Operating Partner for Industrial Businesses</span>
        </div>
        <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-7xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
          Too many decisions<br />
          <span className="text-brand-slate italic">still land on your desk.</span>
        </h1>
        <p className="text-brand-navy text-xl leading-relaxed mb-10 max-w-2xl">
          We work with owners and leadership teams in industrial businesses to move decisions off the top desk and into the business. You keep more margin, get time back to lead, and build a company that doesn&apos;t stall when you step away.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <BookCallButton variant="navy" />
          <Link href="/60-day-test" className="inline-flex items-center justify-center bg-transparent border-[1.5px] border-brand-navy text-brand-navy px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all text-center">
            Take the 60-Day Test
          </Link>
        </div>
        <div className="mt-16 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <p className="text-xs font-semibold text-brand-slate uppercase tracking-widest">Serving:</p>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-bold text-brand-slate uppercase">
            {serving.map((s, i) => (
              <li key={s.label} className="inline-flex items-center gap-3">
                {i > 0 && <span className="text-brand-gold" aria-hidden="true">·</span>}
                {s.href ? (
                  <Link href={s.href} className="hover:text-brand-navy transition-colors">{s.label}</Link>
                ) : (
                  s.label
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </header>
);
