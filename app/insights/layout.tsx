import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: "Insights | LVRGWRKS (LeverageWorks) - AI Strategy & Operations for Alberta's Mid-Market" },
  description: 'Practical insights on AI strategy, fractional CTO services, digital transformation, and business process automation for mid-market companies in Alberta and Western Canada.',
  alternates: { canonical: '/insights' },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
