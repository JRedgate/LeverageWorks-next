'use client';

import React from 'react';
import { LwSymbol } from '@/components/Logo';
import { SixtyDayTest, SIXTY_DAY_ITEMS as ITEMS, SIXTY_DAY_BANDS as BANDS } from '@/components/SixtyDayTest';

// Copy, scoring and the GA4 completion event live in components/SixtyDayTest,
// shared with the homepage test band.

export default function SixtyDayTestPage() {
  return (
    <>
      {/* Print: one page, no navigation or footer. */}
      <style>{`
        @media print {
          @page { margin: 14mm; }
          nav, footer { display: none !important; }
          body { background: #fff !important; }
        }
      `}</style>

      <div className="print:hidden">
        <header className="relative pt-24 sm:pt-40 pb-16 md:pt-52 md:pb-20 overflow-hidden bg-brand-surface">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="container mx-auto px-6 md:px-16 relative z-10">
            <div className="max-w-6xl mx-auto">
              <span className="text-brand-gold-text font-bold tracking-widest text-[11px] uppercase mb-6 block">The 60-Day Test</span>
              <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
                Could your business run for 60 days without you?
              </h1>
              <p className="text-brand-navy text-xl leading-relaxed max-w-3xl">
                Picture 60 days away. No calls and no texts. For each of the five below, who would do it?
              </p>
            </div>
          </div>
        </header>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
              <SixtyDayTest variant="page" />
            </div>
          </div>
        </section>
      </div>

      {/* Print sheet: blank boxes, the three bands, lockup and contact. */}
      <div className="hidden print:block text-brand-navy bg-white">
        <div className="flex items-center gap-3 mb-6">
          <LwSymbol className="w-10 h-10" />
          <span className="font-display font-bold text-xl tracking-tight">LVRGWRKS</span>
        </div>
        <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold-text mb-2">The 60-Day Test</p>
        <h1 className="font-display font-bold text-2xl mb-2">Could your business run for 60 days without you?</h1>
        <p className="text-sm mb-5">Picture 60 days away. No calls and no texts. For each of the five below, who would do it?</p>
        <table className="w-full text-sm border-collapse mb-5">
          <thead>
            <tr>
              <th className="text-left py-2 border-b border-gray-300"></th>
              <th className="py-2 px-3 border-b border-gray-300 w-20">Me</th>
              <th className="py-2 px-3 border-b border-gray-300 w-28">Someone else</th>
            </tr>
          </thead>
          <tbody>
            {ITEMS.map((item, i) => (
              <tr key={item}>
                <td className="py-2.5 border-b border-gray-200">{i + 1}. {item}</td>
                <td className="py-2.5 border-b border-gray-200 text-center"><span className="inline-block w-4 h-4 border border-gray-500"></span></td>
                <td className="py-2.5 border-b border-gray-200 text-center"><span className="inline-block w-4 h-4 border border-gray-500"></span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm font-bold mb-2">Count your &ldquo;Me&rdquo; answers.</p>
        <div className="space-y-2 mb-5 text-sm">
          {BANDS.map((b) => (
            <p key={b.range}><strong>{b.range}: {b.heading}.</strong> {b.line}</p>
          ))}
        </div>
        <p className="text-xs mb-4">A rule of thumb, not a study. It tells you where to look, not what it costs.</p>
        <p className="text-sm"><strong>Bring your count to a 30-minute call.</strong> lvrgwrks.com · jredgate@lvrgwrks.com</p>
      </div>
    </>
  );
}
