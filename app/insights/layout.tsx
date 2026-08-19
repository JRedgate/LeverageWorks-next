import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Insights | Operations & AI for Alberta Mid-Market | LVRGWRKS' },
  description: 'Thinking on operations, automation, and margin for owner-led mid-market companies in Alberta and Western Canada. Written for operators, not vendors.',
  alternates: { canonical: '/insights' },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
