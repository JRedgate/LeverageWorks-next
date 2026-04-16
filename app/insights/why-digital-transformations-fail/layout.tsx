import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Why Most Digital Transformations Fail | LVRGWRKS' },
  description: 'Most digital transformations in mid-market companies fail for the same reason. It is not the technology. Here is what actually goes wrong and how Alberta operators are solving it differently.',
  alternates: { canonical: '/insights/why-digital-transformations-fail' },
};

export default function WhyTransformationsFailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
