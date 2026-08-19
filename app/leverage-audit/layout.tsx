import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Free Leverage Audit Calgary | 60-Minute Diagnostic' },
  description: 'A 60-minute operational diagnostic for owner-led mid-market companies in Alberta. Find where coordination is costing you margin. No cost, no obligation.',
  alternates: { canonical: '/leverage-audit' },
};

export default function LeverageAuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
