import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Fractional CTO Calgary | LVRGWRKS - Operating Partner for Mid-Market Alberta Companies' },
  description: 'LVRGWRKS embeds as your fractional CTO and operating partner in Calgary and across Alberta. We find where coordination is costing you margin, rebuild how the work flows, and prove the return every 30 days.',
  alternates: { canonical: '/fractional-cto-calgary' },
};

export default function FractionalCTOCalgaryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
