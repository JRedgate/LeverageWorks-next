import React from 'react';
import { BookCallButton } from '@/components/BookCallButton';
import { TestLink } from '@/components/Sections';
import { FAQS } from './faqs';

export default function FaqPage() {
  return (
    <>
      <header className="relative pt-24 sm:pt-32 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <span className="text-brand-gold-text font-bold tracking-widest text-[11px] uppercase mb-6 block">Questions</span>
            <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
              The questions owners<br />
              <span className="text-brand-slate italic">actually ask.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl">
              Answered plainly, including the ones where the honest answer is no.
            </p>
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-10">
              {FAQS.map((f) => (
                <div key={f.q} className="border-b border-gray-100 pb-10">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4 leading-snug">{f.q}</h3>
                  {f.a.map((p, i) => (
                    <p key={i} className={`text-brand-slate leading-relaxed ${i === 0 ? 'text-lg' : ''} ${i < f.a.length - 1 ? 'mb-4' : ''}`}>{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 leading-tight">Still have a question we did not answer?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            Ask it on a 30-minute call. You leave with a short written note and a straight answer on whether a diagnostic is worth doing. No obligation.
          </p>
          <BookCallButton variant="gold" />
          <div className="mt-10">
            <TestLink tone="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
