import React from 'react';
import Link from 'next/link';
import { BookCallButton } from '@/components/BookCallButton';
import { Callout, Eyebrow, NumberedCards, SectionHeading, TestLink } from '@/components/Sections';

// Copy: RELEASE-0-ADDENDUM-4 Section 2 (replaces addendum 2 Section 5).
// Layout: addendum 3. Order is the guide's page: empathy, authority, belief,
// call to action (STEP-REVIEW-4 Section 4.3).

const principles = [
  { title: 'Structure before speed.', body: 'Most improvement work makes the existing way of working faster. We ask a different question first: does the structure still work as the business grows? If it doesn’t, speeding it up gets you to the wall sooner. We fix the structure first.' },
  { title: 'Operations first, tools second.', body: 'We don’t sell software and we don’t start with AI. We fix how work and decisions move, and bring in technology only where it earns its place. Your leadership team stays accountable for the decisions that matter.' },
  { title: 'If it doesn’t move the P&L, we don’t do it.', body: 'We don’t measure success in reports, workshops or pilot programs. We agree a baseline up front and report what changed against it each month.' },
];

const industries = [
  { label: 'Manufacturing', href: '/industries/manufacturing' },
  { label: 'Construction', href: '/industries/construction' },
  { label: 'Energy Services', href: '/industries/energy-services' },
  { label: 'Distribution', href: '/industries/distribution' },
];

export default function FirmPage() {
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
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">The Firm</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
              Built by an operator,<br />
              <span className="text-brand-slate italic">for operators.</span>
            </h1>
            <p className="text-brand-navy text-xl leading-relaxed mb-10 max-w-2xl">
              LVRGWRKS is an operating partner for industrial businesses, founded in Calgary by Jeremy Redgate. He spent more than 20 years inside industrial operations watching good, growing businesses stall on the same problem. Revenue grows, more decisions find their way back to the top, and the margin that growth was supposed to deliver doesn&apos;t arrive. LVRGWRKS exists to fix that.
            </p>
            <BookCallButton variant="navy" />
          </div>
        </div>
      </header>

      {/* Who you work with: photo and founder story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-start">
            <div className="md:col-span-3 md:order-2">
              <Eyebrow>Who You Work With</Eyebrow>
              <SectionHeading size="md" line1="Meet Jeremy Redgate, founder and operating partner" />
              <p className="text-brand-slate text-lg leading-relaxed mb-6">
                Jeremy has spent more than 20 years in industrial operations and capital projects across energy, construction and manufacturing. He started on the tools as a Red Seal journeyman electrician, and has led a project management office responsible for a $100M+ capital portfolio.
              </p>
              <p className="text-brand-slate text-lg leading-relaxed mb-6">
                He has also sat in the owner&apos;s chair. For nine years he owned an electrical contracting business serving Alberta&apos;s oil and gas industry. He carried the payroll, priced the work and ran projects with crews of up to 125.
              </p>
              <p className="text-brand-slate text-lg leading-relaxed mb-6">
                He holds an Executive MBA in finance from the Haskayne School of Business, where he was inducted into Beta Gamma Sigma.
              </p>
              <p className="text-brand-slate text-lg leading-relaxed mb-8">
                What he learned on both sides of the table is the reason LVRGWRKS exists. The answer to a business that has outgrown the desk at the top is rarely more people or more software. It&apos;s a better way to operate, built with the people already there.
              </p>
              <a
                href="https://www.linkedin.com/in/jeremyredgate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-navy text-sm font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all"
              >
                Connect on LinkedIn
              </a>
            </div>
            <div className="md:col-span-2 md:order-1">
              <img
                src="/jeremy-redgate.jpg"
                alt="Jeremy Redgate, founder of LVRGWRKS"
                width={1024}
                height={1004}
                className="w-full max-w-[320px] md:max-w-none h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The origin: two columns, closing line as the boxed callout */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <Eyebrow>The Origin</Eyebrow>
              <SectionHeading size="md" line1="Twenty years inside the operations that run Alberta." className="mb-0" />
            </div>
            <div>
              <p className="text-brand-slate text-lg leading-relaxed mb-6">
                LVRGWRKS was founded on more than 20 years of hands-on experience across energy, construction, manufacturing and capital projects. Real operations, with real margin pressure and real consequences when the numbers stop working.
              </p>
              <p className="text-brand-slate text-lg leading-relaxed mb-8">
                That experience taught us one thing above everything else. A business rarely stalls because its people or its tools are wrong. It stalls because too much still has to pass through a few people at the top. What&apos;s missing is the structure that lets the rest of the business decide and act.
              </p>
              <Callout>Putting that structure in place is what LVRGWRKS does.</Callout>
            </div>
          </div>
        </div>
      </section>

      {/* The finance lens: two columns, the rule as the boxed callout */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <Eyebrow>The Finance Lens</Eyebrow>
              <SectionHeading size="md" line1="Operating experience," line2="with a finance lens." className="mb-0" />
            </div>
            <div>
              <p className="text-brand-slate text-lg leading-relaxed mb-8">
                The operating experience tells us where a business is stuck. The finance training tells us what that is worth. The diagnostic is not a process-improvement exercise. It is a look at where your business is losing margin and time, and what that costs in P&amp;L terms.
              </p>
              <Callout>Every recommendation ties back to one question: does this move the numbers? If it doesn&apos;t, we don&apos;t do it.</Callout>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe: numbered cards */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>What We Believe</Eyebrow>
            <SectionHeading line1="Three principles that shape every engagement." className="mb-6" />
            <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-12">
              These are the rules we follow inside a client&apos;s business when we decide what to change, what to leave alone and what to walk away from.
            </p>
            <NumberedCards items={principles} />
          </div>
        </div>
      </section>

      {/* Why it matters: industries as light cards */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>Why It Matters</Eyebrow>
            <SectionHeading line1="Industrial businesses operate differently." line2="We built LVRGWRKS for that." />
            <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-6">
              Most firms that sell improvement to industrial businesses come from software or from strategy. They know tools or they know slides. They have not run a crew at 6am, carried a payroll through a slow quarter, or taken the call when a job goes sideways.
            </p>
            <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-12">
              LVRGWRKS is built the other way around. Operations first, tools second. We work with owners and leadership teams in manufacturing, construction, energy services and distribution.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((x) => (
                <Link key={x.href} href={x.href} className="bg-brand-surface border border-gray-100 rounded-xl p-6 font-display font-bold text-lg text-brand-navy hover:border-brand-gold/40 transition-all">
                  {x.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-8 tracking-tight leading-tight">
            What keeps landing on your desk that shouldn&apos;t?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Thirty minutes. You leave with a short written note and a straight answer on whether a diagnostic is worth doing. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <BookCallButton variant="gold" />
            <Link href="/capabilities" className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold transition-all text-center">
              How we work
            </Link>
          </div>
          <TestLink tone="dark" className="mt-10" />
        </div>
      </section>
    </>
  );
}
