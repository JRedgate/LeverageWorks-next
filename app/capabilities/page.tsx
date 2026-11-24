import React from 'react';
import Link from 'next/link';
import { RelatedReading } from '@/components/RelatedReading';
import { BookCallButton } from '@/components/BookCallButton';
import { Eyebrow, GoldBarGrid, SectionHeading, SuccessBand, TestLink } from '@/components/Sections';
import { SHARED_WORK_CLOSE, sharedWork } from '@/content/industries';

// Copy: addendum 2 Section 4 as amended by STEP-REVIEW-5 (headline, step
// names, standard CTA). This is the plan's page: the client's problem, the
// shared block, the four steps, what changes, then the call to action.
// Step 03 "Move" is a recommendation awaiting Jeremy's confirmation.

const moves = [
  {
    name: 'Diagnose',
    body: 'The diagnostic is a fixed-scope, fixed-fee look at where decisions and handoffs stall and what that costs your business. You get written findings, a baseline to measure against, and the priorities we would start with. They are yours whether or not you continue.',
  },
  {
    name: 'Agree',
    body: 'We agree with you and your managers which decisions move, who takes them and how the handoffs will run. You see the plan before anything changes.',
  },
  {
    name: 'Move',
    body: 'We move the agreed decisions and handoffs to your people, one priority at a time. Where a tool helps, we add it, and it belongs to you.',
  },
  {
    name: 'Stay',
    body: 'This is not a project with an end date. We stay alongside your team as the business grows, and each month we report what changed against the baseline agreed up front.',
  },
];

const industries = [
  { label: 'Manufacturing', href: '/industries/manufacturing' },
  { label: 'Construction', href: '/industries/construction' },
  { label: 'Energy Services', href: '/industries/energy-services' },
  { label: 'Distribution', href: '/industries/distribution' },
];

export default function CapabilitiesPage() {
  return (
    <>
      {/* Hero: `main` layout */}
      <header className="relative pt-40 pb-24 md:pt-56 md:pb-36 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">How We Work</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
              How the decisions get<br />
              <span className="text-brand-slate italic">off your desk.</span>
            </h1>
            <p className="text-brand-navy text-xl font-semibold leading-relaxed mb-6 max-w-2xl">
              This is how we move them, with your people.
            </p>
            <p className="text-brand-navy text-xl leading-relaxed mb-6 max-w-2xl">
              Left alone, the list on your desk grows with the business.
            </p>
            <p className="text-brand-navy text-xl leading-relaxed mb-10 max-w-2xl">
              LVRGWRKS is an operating partner for industrial businesses. We find which decisions and handoffs still run through the top of the business, agree with you which ones move, work the change with your people, and report what changed each month.
            </p>
            <BookCallButton variant="navy" />
          </div>
        </div>
      </header>

      {/* Shared block: gold-bar grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>The Work</Eyebrow>
            <SectionHeading line1="What we work on with your team" className="mb-12" />
            <GoldBarGrid items={sharedWork()} />
            <p className="text-brand-navy text-lg leading-relaxed max-w-3xl mt-12 font-semibold">{SHARED_WORK_CLOSE}</p>
          </div>
        </div>
      </section>

      {/* The four moves: dark band, numbered step cards (as on `main`) */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <Eyebrow tone="dark">How It Works</Eyebrow>
            <SectionHeading tone="dark" line1="What happens after the call." className="mb-12" />
            <div className="space-y-6">
              {moves.map((m, i) => (
                <div
                  key={m.name}
                  className={`${i === moves.length - 1 ? 'bg-brand-gold/10 border-brand-gold/30' : 'bg-white/5 border-white/10'} border p-8 md:p-12 rounded-xl`}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/4">
                      <div className="w-16 h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-brand-gold font-display font-bold text-2xl">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-white">{m.name}</h3>
                    </div>
                    <div className="md:w-3/4">
                      <p className="text-gray-300 leading-relaxed text-lg">{m.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What changes (STEP-REVIEW-4 Section 4.1) */}
      <SuccessBand />

      {/* Industries */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 md:gap-8">
            <p className="text-xs font-semibold text-brand-slate uppercase tracking-widest">Industries:</p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              {industries.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm font-bold text-brand-slate hover:text-brand-navy transition-colors">
                  {item.label.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related reading sits above the final CTA so the page ends on it (STEP-REVIEW-6, 3.7). */}
      <RelatedReading
        items={[
          { href: '/operations-process-improvement-alberta', title: 'Process improvement and change', blurb: "How to improve how the work runs when it lives in people's heads, without losing the people." },
        ]}
      />

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-8 tracking-tight leading-tight">
            Get the decisions off your desk.
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Thirty minutes. You leave with a short written note and a straight answer on whether a diagnostic is worth doing. No obligation.
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
