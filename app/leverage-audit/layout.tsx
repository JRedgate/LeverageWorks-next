import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Book a Free Leverage Audit | LVRGWRKS - 60-Minute Operational Diagnostic' },
  description: 'The LVRGWRKS Leverage Audit is a free 60-minute working session where we map your manual workflows, quantify the labour cost, and outline a conceptual automation architecture. No commitment.',
  alternates: { canonical: '/leverage-audit' },
};

export default function LeverageAuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
