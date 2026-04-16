import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'The Real Cost of Manual Data Entry in Your Business | LVRGWRKS' },
  description: 'Manual data entry does not appear on your P&L. But it is one of the largest controllable costs in most Alberta mid-market companies. Here is how to find it and what to do about it.',
  alternates: { canonical: '/insights/cost-of-manual-data-entry' },
};

export default function CostOfManualDataEntryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
