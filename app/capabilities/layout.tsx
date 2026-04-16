import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Capabilities | LVRGWRKS - AI Automation and Operations for Alberta Mid-Market' },
  description: 'LVRGWRKS builds AI automation systems, operational integrations, and fractional CTO services for mid-market companies in Alberta. See how we diagnose, design, build, and stay.',
  alternates: { canonical: '/capabilities' },
};

export default function CapabilitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
