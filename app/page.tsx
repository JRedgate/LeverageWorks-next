import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { BookCallButton } from '@/components/BookCallButton';

const stakes = [
  { title: 'The quote that waits for you.', body: 'It is priced and ready. It goes out when you get to it.' },
  { title: 'The customer who only calls you.', body: 'Your biggest account has one number, and it is yours.' },
  { title: 'The purchase nobody else can approve.', body: 'The work stops until you say yes.' },
  { title: 'The job that goes sideways.', body: 'The phone rings, and it is your phone.' },
];

const authority = [
  'Nine years owning an industrial contracting business',
  'Crews of up to 125',
  '$100M+ capital portfolio',
  '40+ operator conversations',
];

const steps = [
  { n: '1', title: 'Book a 30-minute call.', body: 'Tell us what keeps coming back to you. You get a short written note of what we heard and whether a diagnostic is worth doing.' },
  { n: '2', title: 'Run the diagnostic.', body: 'A fixed-scope look at where decisions and handoffs stall and what that costs your business. The findings are yours whether or not you continue.' },
  { n: '3', title: 'Move it into the business.', body: 'A monthly operating partnership that works the agreed priorities with your team and reports what changed each month.' },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Authority strip */}
      <section className="bg-white border-y border-gray-100 py-6" aria-label="Background">
        <div className="container mx-auto px-6 md:px-16">
          <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-y-2 gap-x-0 text-sm md:text-base font-semibold text-brand-navy text-center">
            {authority.map((item, i) => (
              <li key={item} className="md:flex md:items-center">
                {i > 0 && <span className="hidden md:inline text-brand-gold mx-4" aria-hidden="true">·</span>}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stakes */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-8 leading-tight">
              You added the revenue.<br />
              <span className="text-gray-400">The margin did not follow.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              As a business grows, more decisions, approvals and problems find their way back to the top. Each one that waits on you or a senior leader slows the work, and the cost shows up in margin. We call it the coordination tax. It rarely appears on a report, and it tends to grow with the business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stakes.map((s) => (
                <div key={s.title} className="bg-white/5 border border-white/10 p-8 rounded-xl">
                  <h3 className="text-brand-gold font-display font-bold text-xl md:text-2xl mb-3">{s.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 60-Day Test band */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-xl p-8 md:p-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy mb-4 leading-tight">Could your business run for 60 days without you?</h2>
            <p className="text-brand-slate text-lg leading-relaxed mb-8">
              Five questions, about two minutes, no email needed. Count how many still come back to you.
            </p>
            <Link href="/60-day-test" className="inline-flex items-center gap-2 text-brand-navy font-bold text-sm uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all">
              Take the 60-Day Test
            </Link>
          </div>
        </div>
      </section>

      {/* Guide */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-8 leading-tight">
              You know your business. We help you get it off your desk.
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed mb-6">
              Improving a business while you run it is hard. Your team may already see what needs to change and not have the time or the authority to change it. LVRGWRKS brings an outside operator&apos;s view and works alongside your people until the change holds.
            </p>
            <p className="text-brand-slate text-lg leading-relaxed mb-6">
              Operations first, tools second. We don&apos;t sell software and we don&apos;t start with AI. We fix how work and decisions move, and bring in technology only where it earns its place.
            </p>
            <p className="text-brand-navy text-lg leading-relaxed mb-10">
              <strong>Run operations for an owner?</strong> You see where the work stalls. We help you fix it, with the backing to make it stick.
            </p>
            <div className="border-l-4 border-brand-gold pl-6">
              <p className="text-brand-slate leading-relaxed mb-3">
                Led by Jeremy Redgate, who owned and ran an industrial contracting business for nine years and has led a $100M+ capital portfolio. Executive MBA in finance, Haskayne.
              </p>
              <Link href="/firm" className="text-brand-navy font-semibold underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold transition-colors">
                Meet Jeremy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plan */}
      <section id="how-we-work" className="py-20 md:py-32 bg-brand-surface scroll-mt-24">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-12 leading-tight">Three steps to get it off your desk.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {steps.map((s) => (
                <div key={s.n} className="bg-white p-8 md:p-10 rounded-xl border border-gray-100">
                  <div className="text-brand-gold font-display font-bold text-5xl mb-4">{s.n}</div>
                  <h3 className="font-display font-bold text-xl text-brand-navy mb-4">{s.title}</h3>
                  <p className="text-brand-slate leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <BookCallButton variant="navy" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta-section" className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-8 tracking-tight leading-tight">
            What keeps landing on your desk that shouldn&apos;t?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Thirty minutes. You leave with a short written note and a straight answer on whether a diagnostic is worth doing. No obligation.
          </p>
          <BookCallButton variant="gold" />
        </div>
      </section>
    </>
  );
}
