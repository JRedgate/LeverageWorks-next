import React from 'react';

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
export const GoldBarGrid: React.FC<{ items: Item[]; tone?: Tone }> = ({ items, tone = 'light' }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
