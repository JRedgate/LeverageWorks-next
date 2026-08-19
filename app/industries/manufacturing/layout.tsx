import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Manufacturing Automation Alberta | LVRGWRKS' },
  description: 'Your production data exists. Your systems do not share it. Automation and operations help for Alberta manufacturers in the mid-market.',
  alternates: { canonical: '/industries/manufacturing' },
};

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
