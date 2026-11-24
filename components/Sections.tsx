import React from 'react';
import Link from 'next/link';
import { BookCallButton } from '@/components/BookCallButton';

// Section parts lifted from the homepage on `main` (addendum 3, Section 2).
// Every section gets a gold eyebrow, a headline (two-tone where it has two
// parts) and one of these components. Class strings match `main`.

type Tone = 'light' | 'dark';

export const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">{children}</span>
);

// Line one bold navy (white on dark), line two italic slate (grey on dark).
export const SectionHeading: React.FC<{
  line1: React.ReactNode;
  line2?: React.ReactNode;
  tone?: Tone;
  size?: 'lg' | 'md';
  className?: string;
}> = ({ line1, line2, tone = 'light', size = 'lg', className = 'mb-8' }) => (
  <h2 className={`font-display font-bold ${size === 'md' ? 'text-3xl md:text-4xl' : 'text-3xl md:text-5xl'} leading-tight ${tone === 'dark' ? 'text-white' : 'text-brand-navy'} ${className}`}>
    {line1}
    {line2 && (
      <>
        <br />
        <span className={tone === 'dark' ? 'text-gray-400 italic' : 'text-brand-slate italic'}>{line2}</span>
      </>
    )}
  </h2>
);

export type Item = { title: string; body: React.ReactNode };

// `main`: "The Problem", 2x2 cards on navy.
export const DarkCards: React.FC<{ items: Item[] }> = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {items.map((s) => (
      <div key={s.title} className="bg-white/5 border border-white/10 p-8 rounded-xl">
        <h3 className="text-brand-gold font-display font-bold text-xl md:text-2xl mb-3">{s.title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed">{s.body}</p>
      </div>
    ))}
  </div>
);

// `main`: "The Solution", gold-bar feature grid.
export const GoldBarGrid: React.FC<{ items: Item[]; tone?: Tone; cols?: 2 | 3 }> = ({ items, tone = 'light', cols = 2 }) => (
  <div className={`grid grid-cols-1 gap-8 ${cols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
    {items.map((s) => (
      <div key={s.title} className="border-l-4 border-brand-gold pl-6">
        <h3 className={`font-display font-bold text-xl mb-3 ${tone === 'dark' ? 'text-white' : 'text-brand-navy'}`}>{s.title}</h3>
        <p className={`leading-relaxed ${tone === 'dark' ? 'text-gray-300' : 'text-brand-slate'}`}>{s.body}</p>
      </div>
    ))}
  </div>
);

// `main`: "The Return", four large gold figures on navy.
export const FigureBand: React.FC<{ figures: { figure: string; caption: string }[] }> = ({ figures }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {figures.map((f) => (
      <div key={f.figure} className="bg-white/5 border border-white/10 p-6 rounded-xl">
        <div className="text-brand-gold font-display font-bold text-4xl mb-2">{f.figure}</div>
        <p className="text-gray-300 text-sm leading-relaxed">{f.caption}</p>
      </div>
    ))}
  </div>
);

// `main`: "How It Works", numbered cards 01, 02, ...
export const NumberedCards: React.FC<{ items: Item[]; surface?: 'white' | 'grey' }> = ({ items, surface = 'white' }) => (
  <div className={`grid grid-cols-1 gap-8 ${items.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
    {items.map((s, i) => (
      <div key={s.title} className={`p-8 md:p-10 rounded-xl border border-gray-100 ${surface === 'grey' ? 'bg-brand-surface' : 'bg-white'}`}>
        <div className="text-brand-gold font-display font-bold text-5xl mb-4">{String(i + 1).padStart(2, '0')}</div>
        <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4">{s.title}</h3>
        <p className="text-brand-slate leading-relaxed">{s.body}</p>
      </div>
    ))}
  </div>
);

// `main`: "The Investment" step cards, three across on a light band.
export const LightCards: React.FC<{ items: Item[]; surface?: 'white' | 'grey' }> = ({ items, surface = 'white' }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {items.map((s) => (
      <div key={s.title} className={`border border-gray-100 rounded-xl p-6 ${surface === 'grey' ? 'bg-brand-surface' : 'bg-white'}`}>
        <h3 className="font-display font-bold text-lg text-brand-navy mb-2">{s.title}</h3>
        <p className="text-brand-slate text-sm leading-relaxed">{s.body}</p>
      </div>
    ))}
  </div>
);

// `main`: the boxed callout on navy ("Free Tool" box under The Problem).
export const Callout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-brand-navy text-white rounded-xl p-8 md:p-10">
    <p className="font-display font-bold text-xl md:text-2xl leading-snug">{children}</p>
  </div>
);

// Transitional call to action (StoryBrand part 5). Text link to the test.
export const TestLink: React.FC<{ tone?: Tone; className?: string }> = ({ tone = 'light', className = '' }) => (
  <Link
    href="/60-day-test"
    className={`inline-flex items-center text-sm font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 transition-all ${tone === 'dark' ? 'text-white hover:text-brand-gold' : 'text-brand-navy hover:text-brand-gold'} ${className}`}
  >
    Or take the 60-Day Test
  </Link>
);

// The plan (StoryBrand part 4). One source for the homepage and the
// industry pages, so the three steps read the same everywhere.
export const HOW_IT_WORKS_STEPS: Item[] = [
  { title: 'Book a 30-minute call.', body: 'Tell us what keeps coming back to you. You get a short written note of what we heard and whether a diagnostic is worth doing.' },
  { title: 'Run the diagnostic.', body: 'A fixed-scope look at where decisions and handoffs stall and what that costs your business. The findings are yours whether or not you continue.' },
  { title: 'Move it into the business.', body: 'A monthly operating partnership that works the agreed priorities with your team and reports what changed each month.' },
];

export const HowItWorksBand: React.FC<{ id?: string }> = ({ id }) => (
  <section id={id} className="py-20 md:py-32 bg-white scroll-mt-24">
    <div className="container mx-auto px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <Eyebrow>How It Works</Eyebrow>
        <SectionHeading line1="Three steps to get it off your desk." className="mb-12" />
        <div className="mb-12">
          <NumberedCards items={HOW_IT_WORKS_STEPS} surface="grey" />
        </div>
        <BookCallButton variant="navy" />
      </div>
    </div>
  </section>
);

// What success looks like (StoryBrand part 7). STEP-REVIEW-4 Section 4.1,
// proposed copy for review. No figures, no guarantee, nothing on sale value.
const SUCCESS: Item[] = [
  { title: 'Decisions get made where the work is.', body: 'Your managers know which calls are theirs, and they make them.' },
  { title: 'Work moves once.', body: 'Handoffs stop stalling between departments, and less gets done twice.' },
  { title: 'You get time back to lead.', body: 'More of your week goes to customers, people and growth.' },
];

export const SuccessBand: React.FC = () => (
  <section className="py-20 md:py-32 bg-brand-surface">
    <div className="container mx-auto px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <Eyebrow>What Changes</Eyebrow>
        <SectionHeading line1="A business that runs" line2="without waiting on you." className="mb-12" />
        <GoldBarGrid items={SUCCESS} cols={3} />
        <p className="text-brand-navy text-lg leading-relaxed max-w-3xl mt-12 font-semibold">
          That is what we work toward. We agree a baseline first and report what changed against it.
        </p>
      </div>
    </div>
  </section>
);
