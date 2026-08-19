import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Capabilities | Fractional CTO Services Alberta | LVRGWRKS' },
  description: 'What we build for owner-led mid-market companies in Alberta. Systems that let your operation scale without scaling headcount at the same rate.',
  alternates: { canonical: '/capabilities' },
  openGraph: {
    title: 'What we build, and what changes when it runs',
    description: 'Systems that let your operation scale without scaling headcount at the same rate. Built for owner-led mid-market companies in Alberta and Western Canada.',
    url: '/capabilities',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function CapabilitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
