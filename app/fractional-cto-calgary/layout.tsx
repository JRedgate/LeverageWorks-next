import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Fractional CTO Calgary | Mid-Market Alberta | LVRGWRKS' },
  description: 'Fractional CTO and operating partner for owner-led mid-market companies in Calgary and Alberta. Senior technology leadership without a full-time hire.',
  alternates: { canonical: '/fractional-cto-calgary' },
  openGraph: {
    title: 'Fractional CTO for owner-led mid-market companies in Alberta',
    description: 'Senior technology leadership without a full-time hire. We find where coordination is costing you margin, rebuild how the work flows, and prove the return every 30 days.',
    url: '/fractional-cto-calgary',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function FractionalCTOCalgaryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
