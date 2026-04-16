import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Coordination Tax Calculator | LVRGWRKS - Quantify What Manual Work Is Costing You' },
  description: 'How much is the coordination tax costing your business? Calculate the hidden labour cost of moving data between disconnected systems in under 60 seconds. Free tool by LVRGWRKS.',
  alternates: { canonical: '/coordination-tax-calculator' },
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
