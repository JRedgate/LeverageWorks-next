import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { BookCallButton } from '@/components/BookCallButton';
import { SixtyDayTest } from '@/components/SixtyDayTest';
import { DarkCards, Eyebrow, FigureBand, GoldBarGrid, HowItWorksBand, SectionHeading, SuccessBand } from '@/components/Sections';

// Layout: RELEASE-0-ADDENDUM-3-LAYOUT.md, Section 3. Every section is an
// eyebrow, a headline and one component from `main` (components/Sections).

const stakes = [
  { title: 'The quote that waits for you.', body: 'It is priced and ready. It goes out when you get to it.' },
  { title: 'The customer who only calls you.', body: 'Your biggest account has one number, and it is yours.' },
  { title: 'The purchase nobody else can approve.', body: 'The work stops until you say yes.' },
  { title: 'The job that goes sideways.', body: 'The phone rings, and it is your phone.' },
];

const guide = [
  { title: 'Operations first, tools second.', body: 'We don’t sell software and we don’t start with AI. Technology comes in only where it earns its place.' },
  { title: 'With your people.', body: 'Your team may already see what needs to change and not have the time or the authority. We work alongside them until the change holds.' },
  { title: 'Run operations for an owner?', body: 'You see where the work stalls. We help you fix it, with the backing to make it stick.' },
  { title: 'Yours to keep.', body: 'The diagnostic findings are yours whether or not you continue.' },
];

const figures = [
  { figure: '20+ years', caption: 'In industrial operations and capital projects' },
  { figure: '125', caption: 'Largest crews on projects he ran' },
  { figure: '$100M+', caption: 'Capital portfolio led' },
  { figure: '40+', caption: 'Operator conversations building this firm' },
];


export default function HomePage() {
  return (
    <>
      <Hero />

      {/* The problem: dark band, 2x2 cards */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>The Problem</Eyebrow>
            <SectionHeading tone="dark" line1="You added the revenue." line2="The margin did not follow." />
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-6">
              As a business grows, more decisions, approvals and problems find their way back to the top. Each one that waits on you or a senior leader slows the work, and the cost shows up in margin. We call it the coordination tax. It rarely appears on a report, and it tends to grow with the business.
            </p>
            {/* Internal and philosophical problem (STEP-REVIEW-4 Section 4.1, proposed copy). */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              You have good people and a good business, and you still have to step in constantly. Growing a business shouldn&apos;t make it depend more on you.
            </p>
            <DarkCards items={stakes} />
          </div>
        </div>
      </section>

      {/* The 60-Day Test: white band, two columns */}
      <section id="sixty-day-test" className="py-20 md:py-32 bg-white border-b border-gray-100 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <Eyebrow>The 60-Day Test</Eyebrow>
              <SectionHeading size="md" line1="Could your business run" line2="for 60 days without you?" />
              <p className="text-brand-slate text-lg leading-relaxed">
                Five questions, about two minutes, no email needed. Count how many still come back to you.
              </p>
            </div>
            <SixtyDayTest variant="card" header={false} />
          </div>
        </div>
      </section>

      {/* The guide: grey band, gold-bar feature grid */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>The Guide</Eyebrow>
            <SectionHeading line1="You know your business." line2="We help you get it off your desk." />
            <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-10">
              Improving a business while you run it is hard.
            </p>
            <GoldBarGrid items={guide} />
          </div>
        </div>
      </section>

      {/* Who you work with: dark band, four gold figures */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>Who You Work With</Eyebrow>
            <SectionHeading tone="dark" line1="Led by an operator." className="mb-4" />
            <p className="text-gray-300 text-lg leading-relaxed mb-10">Founded and led by Jeremy Redgate.</p>
            <FigureBand figures={figures} />
            <p className="text-gray-300 text-lg leading-relaxed mt-10 mb-6">
              Red Seal journeyman electrician. Executive MBA in finance, Haskayne. Energy, construction and manufacturing, across Western Canada.
            </p>
            <Link href="/firm" className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-white transition-all">
              Meet Jeremy
            </Link>
          </div>
        </div>
      </section>

      {/* How it works: white band, numbered cards. #how-we-work kept for old links. */}
      <HowItWorksBand id="how-we-work" />

      {/* What changes: grey band, gold-bar grid (STEP-REVIEW-4 Section 4.1) */}
      <SuccessBand />

      {/* Final CTA */}
      <section id="cta-section" className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-8 tracking-tight leading-tight">
            Get the decisions off your desk.
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
