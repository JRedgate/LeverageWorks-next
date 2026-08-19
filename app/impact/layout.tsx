import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Impact | What Operational Leverage Looks Like | LVRGWRKS' },
  description: 'Modelled scenarios showing what operational leverage looks like inside an owner-led mid-market company. Figures are illustrative, not client results.',
  alternates: { canonical: '/impact' },
  openGraph: {
    title: 'What operational leverage actually looks like',
    description: 'Modelled scenarios showing where coordination cost hides in an owner-led mid-market operation and what recovering it is worth. Figures are illustrative, not client results.',
    url: '/impact',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-card-v2.jpg', width: 2400, height: 1260 }],
  },
};

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
