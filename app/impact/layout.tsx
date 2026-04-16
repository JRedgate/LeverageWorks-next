import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Impact & Case Studies | LVRGWRKS (LeverageWorks) - Proven AI Implementation Results' },
  description: 'See how LVRGWRKS (LeverageWorks) delivers 7.5x+ ROI across manufacturing, finance, and energy sectors. Case studies in AI strategy, operating model optimization, and digital transformation.',
  alternates: { canonical: '/impact' },
};

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
