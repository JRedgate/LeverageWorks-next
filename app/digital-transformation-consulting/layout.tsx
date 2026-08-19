import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Digital Transformation Consulting Calgary | LVRGWRKS' },
  description: 'Digital transformation consulting for owner-led mid-market companies in Calgary and Alberta. Most transformations fail on process, not technology.',
  alternates: { canonical: '/digital-transformation-consulting' },
};

export default function DigitalTransformationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
