import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Manufacturing Automation Alberta | LVRGWRKS' },
  description: 'Your production data exists. Your systems do not share it. Automation and operations help for Alberta manufacturers in the mid-market.',
  alternates: { canonical: '/industries/manufacturing' },
  openGraph: {
    title: 'Your production data exists. Your systems do not share it.',
    description: 'Operations and automation help for Alberta manufacturers in the mid-market. Built around your actual constraint, not a generic playbook.',
    url: '/industries/manufacturing',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
