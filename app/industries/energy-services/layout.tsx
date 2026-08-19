import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Energy Services Automation Alberta | LVRGWRKS' },
  description: 'Field operations generate data that never reaches the back office in time to use. Operations and automation help for Alberta energy services firms.',
  alternates: { canonical: '/industries/energy-services' },
  openGraph: {
    title: 'Field operations generate data that never reaches the back office in time to use',
    description: 'Operations and automation help for Alberta energy services firms. Dispatch, field tickets, compliance and back office as one operating layer.',
    url: '/industries/energy-services',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-card-v2.jpg', width: 2400, height: 1260 }],
  },
};

export default function EnergyServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
