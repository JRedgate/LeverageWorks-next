import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Capabilities | Fractional CTO Services Alberta | LVRGWRKS' },
  description: 'What we build for owner-led mid-market companies in Alberta. Systems that let your operation scale without scaling headcount at the same rate.',
  alternates: { canonical: '/capabilities' },
};

export default function CapabilitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
