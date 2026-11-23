import type { Metadata } from 'next';

import { OG_IMAGE } from '@/lib/site';
export const metadata: Metadata = {
  title: { absolute: 'Fractional CTO Calgary | Mid-Market Alberta | LVRGWRKS' },
  description: 'LVRGWRKS is an operating partner for industrial businesses. Technology work is one of the tools we use. Senior technology leadership without a full-time hire.',
  alternates: { canonical: '/fractional-cto-calgary' },
  openGraph: {
    title: 'Technology leadership for industrial businesses in Calgary',
    description: 'Senior technology leadership without a full-time hire. We find where coordination is costing you margin, rebuild how the work flows, and prove the return every 30 days.',
    url: '/fractional-cto-calgary',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [OG_IMAGE],
  },
};

export default function FractionalCTOCalgaryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
