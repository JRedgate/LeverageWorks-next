import type { Metadata } from 'next';
import { OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'How We Work | Operating Partner for Industrial Businesses | LVRGWRKS' },
  description: 'How LVRGWRKS works with industrial businesses: find which decisions and handoffs still run through the top, agree which ones move, work the change with your people, and report what changed each month.',
  alternates: { canonical: '/capabilities' },
  openGraph: {
    title: 'How we work with your business',
    description: 'Too many decisions still land on your desk. This is how LVRGWRKS moves them into the business, with your people.',
    url: '/capabilities',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [OG_IMAGE],
  },
};

export default function CapabilitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
