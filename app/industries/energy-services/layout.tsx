import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Energy Services Automation Alberta | LVRGWRKS' },
  description: 'Field operations generate data that never reaches the back office in time to use. Operations and automation help for Alberta energy services firms.',
  alternates: { canonical: '/industries/energy-services' },
};

export default function EnergyServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
