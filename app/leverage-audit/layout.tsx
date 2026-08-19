import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Free Leverage Audit Calgary | 60-Minute Diagnostic' },
  description: 'A 60-minute operational diagnostic for owner-led mid-market companies in Alberta. Find where coordination is costing you margin. No cost, no obligation.',
  alternates: { canonical: '/leverage-audit' },
  openGraph: {
    title: 'The Leverage Audit. 60 minutes, no cost, no commitment.',
    description: 'We map your highest-coordination workflows, put a real dollar figure on the labour cost, and rank the fixes by return. You keep the written summary either way.',
    url: '/leverage-audit',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function LeverageAuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
