import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Digital Transformation Consulting Calgary | LVRGWRKS' },
  description: 'Digital transformation consulting for owner-led mid-market companies in Calgary and Alberta. Most transformations fail on process, not technology.',
  alternates: { canonical: '/digital-transformation-consulting' },
  openGraph: {
    title: 'Most digital transformations fail on process, not technology',
    description: 'Digital transformation consulting for owner-led mid-market companies in Calgary and Alberta. We start with how the work flows, before any platform gets selected.',
    url: '/digital-transformation-consulting',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function DigitalTransformationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
