import type { Metadata } from 'next';

import { OG_IMAGE } from '@/lib/site';
export const metadata: Metadata = {
  title: { absolute: 'Insights | Operations and Margin for Industrial Businesses | LVRGWRKS' },
  description: 'Thinking on operations, decisions and margin for owners and leadership teams of industrial businesses. Written for operators, not vendors.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Operations, automation and margin, written for operators',
    description: 'Thinking on where margin leaks inside industrial businesses. Written for operators, not vendors.',
    url: '/insights',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [OG_IMAGE],
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
