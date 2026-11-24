import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookCallButton } from '@/components/BookCallButton';
import { RelatedReading } from '@/components/RelatedReading';
import { DarkCards, Eyebrow, GoldBarGrid, HowItWorksBand, LightCards, SectionHeading, TestLink } from '@/components/Sections';
import { INDUSTRIES, IndustryKey, QUESTIONS_HEADING, SHARED_QUESTIONS, SHARED_WORK_CLOSE, industryTitle, sharedWork } from '@/content/industries';
import { OG_IMAGE } from '@/lib/site';

// One structure for every industry page (addendum 2 Section 3, addendum 3
// Section 4): hero as `main`, four moments as dark 2x2 cards, the shared block
// as the gold-bar grid, "Who we work with" as three cards, the shared "How it
// works" band, two Q&As, final CTA. StoryBrand additions: STEP-REVIEW-4 4.2.

export const industryMetadata = (key: IndustryKey): Metadata => {
  const i = INDUSTRIES[key];
  const path = `/industries/${key}`;
  return {
    title: { absolute: industryTitle(i) },
    description: i.description,
    alternates: { canonical: path },
    openGraph: {
      title: `${i.headline[0]} ${i.headline[1]}`,
      description: i.description,
      url: path,
      siteName: 'LVRGWRKS',
      locale: 'en_CA',
      type: 'website',
      images: [OG_IMAGE],
    },
  };
};

export const IndustryPage: React.FC<{ industry: IndustryKey }> = ({ industry }) => {
  const i = INDUSTRIES[industry];
  return (
    <>
      {/* Hero: `main` layout */}
      <header className="relative pt-40 pb-24 md:pt-56 md:pb-36 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          {/* Wider than the homepage hero so no headline runs past three lines at 1440px (STEP-REVIEW-4 fix 2). */}
          <div className="max-w-6xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">{i.pill}</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
              {i.headline[0]}<br />
              <span className="text-brand-slate italic">{i.headline[1]}</span>
            </h1>
            <p className="text-brand-navy text-xl leading-relaxed mb-10 max-w-2xl">{i.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <BookCallButton variant="navy" />
              <Link href="/capabilities" className="inline-flex items-center justify-center bg-white border border-gray-200 text-brand-navy px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:border-brand-navy/30 hover:bg-gray-50 transition-all text-center">
                How we work
              </Link>
            </div>
            <TestLink className="mt-8" />
          </div>
        </div>
      </header>

      {/* Where it lands: dark 2x2 cards */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>The Problem</Eyebrow>
            <SectionHeading tone="dark" line1="Where it lands on your desk" className="mb-12" />
            <DarkCards items={i.moments} />
            {/* Internal problem (STEP-REVIEW-5 3.3) */}
            <p className="text-white font-display font-semibold text-xl md:text-2xl leading-snug mt-12">
              You have good people. The decision still comes to you.
            </p>
          </div>
        </div>
      </section>

      {/* Shared block: gold-bar grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>How We Work</Eyebrow>
            <SectionHeading line1="What we work on with your team" className="mb-12" />
            <GoldBarGrid items={sharedWork(i.handoffs)} />
            <p className="text-brand-navy text-lg leading-relaxed max-w-3xl mt-12 font-semibold">{SHARED_WORK_CLOSE}</p>
          </div>
        </div>
      </section>

      {/* Who we work with: three cards */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>{i.name}</Eyebrow>
            <SectionHeading line1="Who we work with" className="mb-12" />
            <LightCards items={i.who} />
          </div>
        </div>
      </section>

      {/* The plan: shared with the homepage */}
      <HowItWorksBand />

      {/* Q&As */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>Common Questions</Eyebrow>
            <SectionHeading line1={QUESTIONS_HEADING} size="md" className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SHARED_QUESTIONS.map((x) => (
                <div key={x.q} className="border-l-4 border-brand-gold pl-6">
                  <h3 className="font-display font-bold text-xl text-brand-navy mb-3">{x.q}</h3>
                  <p className="text-brand-slate leading-relaxed">{x.a}</p>
                </div>
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
          <p className="text-white font-semibold max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            The aim is a business that runs without waiting on you.
          </p>
          <BookCallButton variant="gold" />
        </div>
      </section>

      {i.related.length > 0 && <RelatedReading items={i.related} />}
    </>
  );
};
