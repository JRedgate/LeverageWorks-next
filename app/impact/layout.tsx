import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Impact | What Operational Leverage Looks Like | LVRGWRKS' },
  description: 'Modelled scenarios showing what operational leverage looks like inside an owner-led mid-market company. Figures are illustrative, not client results.',
  alternates: { canonical: '/impact' },
};

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
