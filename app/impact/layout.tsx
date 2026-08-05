import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Impact | LVRGWRKS (LeverageWorks) - What Operational Leverage Looks Like' },
  description: 'Modelled scenarios showing where coordination cost hides in manufacturing, energy and asset-heavy operations, and what recovering it is worth. LVRGWRKS (LeverageWorks) is a fractional CTO and operating partner in Alberta and Western Canada.',
  alternates: { canonical: '/impact' },
};

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
