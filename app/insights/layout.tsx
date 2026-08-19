import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Insights | Operations & AI for Alberta Mid-Market | LVRGWRKS' },
  description: 'Thinking on operations, automation, and margin for owner-led mid-market companies in Alberta and Western Canada. Written for operators, not vendors.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Operations, automation and margin, written for operators',
    description: 'Thinking on where margin leaks inside owner-led mid-market companies in Alberta and Western Canada. Written for operators, not vendors.',
    url: '/insights',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-card-v2.jpg', width: 2400, height: 1260 }],
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
