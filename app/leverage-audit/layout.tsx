import type { Metadata } from 'next';
import { OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Book a Free 30-Minute Operations Consultation | LVRGWRKS' },
  description: 'Book a free 30-minute call with LVRGWRKS. Tell us what keeps landing on your desk, and get a written note on whether a diagnostic is worth doing.',
  alternates: { canonical: '/leverage-audit' },
  openGraph: {
    title: 'Book a 30-minute call',
    description: 'Tell us what keeps landing on your desk. You get a short written note of what we heard and whether a diagnostic is worth doing. No obligation.',
    url: '/leverage-audit',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [OG_IMAGE],
  },
};

export default function LeverageAuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
