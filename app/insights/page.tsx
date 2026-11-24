import React from 'react';
import Link from 'next/link';

import { BookCallButton } from '@/components/BookCallButton';
import { Eyebrow, TestLink } from '@/components/Sections';
const articles = [
  {
    label: 'OPERATIONS',
    heading: 'The Coordination Tax: Why Mid-Market Companies Grow Revenue Without Growing Margin',
    body: 'If your revenue is up and your margin is flat, the money is being paid out to an overhead layer nobody named. Here is what it is and how to fix it.',
    href: '/insights/coordination-tax-mid-market',
  },
  {
    label: 'ESTIMATING',
    heading: 'The Hidden Cost of Estimating: What We Found Inside Three Project Files',
    body: 'We opened three completed estimate files from an engineering contractor and compared them line by line. Almost nothing was reused between jobs.',
    href: '/insights/hidden-cost-of-estimating',
  },
  {
    label: 'SYSTEMS',
    heading: 'Why Most Digital Transformations Fail (And What Mid-Market Companies Do Instead)',
    body: 'Most digital transformations in mid-market companies fail for the same reason, and it is almost never the technology.',
    href: '/insights/why-digital-transformations-fail',
  },
  {
    label: 'OPERATIONS',
    heading: 'The Real Cost of Manual Data Entry in Your Business',
    body: 'Most business owners underestimate what manual data movement is costing them. Here is a simple framework to find out.',
    href: '/insights/cost-of-manual-data-entry',
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-56 md:pb-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-6xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Insights & Resources</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">
              Thinking on operations and margin<br />
              <span className="text-brand-slate italic">for industrial businesses.</span>
            </h1>
            <p className="text-brand-navy text-xl leading-relaxed max-w-2xl">
              Practical reading for owners, presidents and operating leaders.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <Eyebrow>Articles</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-brand-surface p-10 rounded-xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-xl transition-all flex flex-col"
              >
                <span className="text-brand-gold-text font-bold tracking-widest text-[10px] uppercase mb-4 block">{article.label}</span>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4 group-hover:text-brand-gold transition-colors leading-tight">{article.heading}</h3>
                <p className="text-brand-slate leading-relaxed mb-6 flex-grow">{article.body}</p>
                <span className="text-brand-navy font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:text-brand-gold transition-colors">
                  Read
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 tracking-tight">Seeing some of this in your own business?</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Tell us where on a 30-minute call. You get a short written note of what we heard and whether a diagnostic is worth doing.
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
