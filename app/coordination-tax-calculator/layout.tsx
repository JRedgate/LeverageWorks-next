import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Coordination Tax Calculator | Alberta Mid-Market | LVRGWRKS' },
  description: 'Quantify what manual coordination is costing your Alberta business each year. A short calculator built for owner-led mid-market operations.',
  alternates: { canonical: '/coordination-tax-calculator' },
  openGraph: {
    title: 'What is coordination costing you? Four inputs, sixty seconds.',
    description: 'Quantify the hidden labour cost your team absorbs every week moving work between systems that do not line up. No email required to see your result.',
    url: '/coordination-tax-calculator',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
