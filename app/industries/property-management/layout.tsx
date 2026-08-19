import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Property Management Automation Alberta | LVRGWRKS' },
  description: 'Your portfolio is growing and administrative overhead is growing faster. Operations and automation help for Alberta property management firms.',
  alternates: { canonical: '/industries/property-management' },
  openGraph: {
    title: 'Your portfolio is growing and administrative overhead is growing faster',
    description: 'Operations and automation help for Alberta property management firms. Billing, maintenance, tenant and owner reporting connected into one operating layer.',
    url: '/industries/property-management',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-card-v2.jpg', width: 2400, height: 1260 }],
  },
};

export default function PropertyManagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
