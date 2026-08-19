import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Construction Operations Automation Alberta | LVRGWRKS' },
  description: 'Project managers should not run jobs and assemble reports at the same time. Operations and automation help for Alberta construction companies.',
  alternates: { canonical: '/industries/construction' },
  openGraph: {
    title: 'Project managers should not run jobs and assemble reports at the same time',
    description: 'Operations and automation help for Alberta construction companies. Cost tracking against estimate, subcontractor coordination, and field-to-office sync.',
    url: '/industries/construction',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function ConstructionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
