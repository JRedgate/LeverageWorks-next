import React from 'react';
import Link from 'next/link';

export interface RelatedLink {
  href: string;
  title: string;
  blurb: string;
}

interface RelatedReadingProps {
  items: RelatedLink[];
  heading?: string;
}

export const RelatedReading: React.FC<RelatedReadingProps> = ({ items, heading = 'Related reading' }) => (
  <section className="py-16 md:py-20 bg-brand-surface border-t border-gray-100">
    <div className="container mx-auto px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">{heading}</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-white p-6 rounded-xl border border-gray-100 hover:border-brand-gold transition-colors group"
            >
              <h3 className="font-display font-bold text-lg text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-brand-slate text-sm leading-relaxed">{item.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);
