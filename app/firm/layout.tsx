import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'The Firm | Fractional CTO Calgary | LVRGWRKS' },
  description: 'Built by operators, for operators. The fractional CTO and operating partner for owner-led mid-market companies in Alberta and Western Canada.',
  alternates: { canonical: '/firm' },
  openGraph: {
    title: 'Built by operators, for operators',
    description: 'The fractional CTO and operating partner for owner-led mid-market companies in Alberta and Western Canada. You are adding a partner who already speaks the language.',
    url: '/firm',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-card-v2.jpg', width: 2400, height: 1260 }],
  },
};

export default function FirmLayout({ children }: { children: React.ReactNode }) {
  return children;
}
