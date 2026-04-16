import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Digital Transformation Consulting Calgary Alberta | LVRGWRKS' },
  description: 'Digital transformation consulting for mid-market companies in Calgary and Alberta. LVRGWRKS identifies why transformations fail and builds operating model changes that actually stick.',
  alternates: { canonical: '/digital-transformation-consulting' },
};

export default function DigitalTransformationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
