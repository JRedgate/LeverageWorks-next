'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Fires a GA4 conversion event when a visitor clicks through to a money page.
// Uses a single delegated listener so no per-link wiring is needed.
const CTA_EVENTS: { match: string; event: string }[] = [
  { match: '/leverage-audit', event: 'cta_leverage_audit' },
  { match: '/coordination-tax-calculator', event: 'cta_calculator' },
  { match: '/contact', event: 'cta_contact' },
];

export function AnalyticsEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') ?? '';
      const hit = CTA_EVENTS.find((c) => href.startsWith(c.match));
      if (hit && typeof window.gtag === 'function') {
        window.gtag('event', hit.event, {
          link_url: href,
          link_text: (anchor.textContent ?? '').trim().slice(0, 80),
        });
      }
    }
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
