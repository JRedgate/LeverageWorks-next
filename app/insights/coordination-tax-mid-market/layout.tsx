import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'The Coordination Tax: Why Mid-Market Companies Grow Revenue Without Growing Margin | LVRGWRKS' },
  description: 'Most mid-market operators scale revenue faster than margin. The reason is coordination tax, the hidden overhead that compounds as companies grow. Here is what it is, what it costs, and how to fix it.',
  alternates: { canonical: '/insights/coordination-tax-mid-market' },
};

export default function CoordinationTaxLayout({ children }: { children: React.ReactNode }) {
  return children;
}
