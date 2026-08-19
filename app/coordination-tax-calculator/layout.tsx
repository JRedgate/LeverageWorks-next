import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Coordination Tax Calculator | Alberta Mid-Market | LVRGWRKS' },
  description: 'Quantify what manual coordination is costing your Alberta business each year. A short calculator built for owner-led mid-market operations.',
  alternates: { canonical: '/coordination-tax-calculator' },
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
