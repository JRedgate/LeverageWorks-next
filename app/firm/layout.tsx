import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'The Firm | Fractional CTO Calgary | LVRGWRKS' },
  description: 'Built by operators, for operators. The fractional CTO and operating partner for owner-led mid-market companies in Alberta and Western Canada.',
  alternates: { canonical: '/firm' },
};

export default function FirmLayout({ children }: { children: React.ReactNode }) {
  return children;
}
