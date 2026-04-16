import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'AI and Automation for Alberta Energy Services Companies | LVRGWRKS' },
  description: 'LVRGWRKS builds AI automation and operations systems for Alberta energy services companies. Connect field operations, dispatch, compliance, and back-office into one operating layer.',
  alternates: { canonical: '/industries/energy-services' },
};

export default function EnergyServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
