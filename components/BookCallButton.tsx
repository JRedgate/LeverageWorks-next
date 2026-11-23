import React from 'react';
import Link from 'next/link';
import { BOOKING_LABEL, BOOKING_URL, isExternalBooking } from '@/lib/booking';

type Variant = 'navy' | 'gold' | 'white' | 'nav' | 'link' | 'linkOnDark' | 'custom';

const VARIANTS: Record<Variant, string> = {
  navy: 'inline-flex items-center justify-center gap-3 bg-brand-navy text-white px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-slate transition-all shadow-lg group',
  gold: 'inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-navy px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl group',
  white: 'inline-flex items-center justify-center gap-3 bg-white text-brand-navy px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-gold transition-all shadow-xl group',
  nav: 'px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wide transition-all shadow-md hover:shadow-lg',
  link: 'text-brand-navy font-semibold underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold transition-colors',
  linkOnDark: 'text-brand-gold hover:text-white transition-colors',
  // Keeps a page's existing button classes, passed in through className.
  custom: '',
};

const Arrow = () => (
  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

interface BookCallButtonProps {
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}

// Clicks are counted by the delegated listener in AnalyticsEvents, which
// matches BOOKING_URL and sends book_call_click.
export const BookCallButton: React.FC<BookCallButtonProps> = ({ variant = 'navy', className = '', arrow }) => {
  const showArrow = arrow ?? ['navy', 'gold', 'white'].includes(variant);
  const classes = `${VARIANTS[variant]} ${className}`.trim();
  const content = (
    <>
      {BOOKING_LABEL}
      {showArrow && <Arrow />}
    </>
  );

  if (isExternalBooking) {
    return (
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={BOOKING_URL} className={classes}>
      {content}
    </Link>
  );
};
