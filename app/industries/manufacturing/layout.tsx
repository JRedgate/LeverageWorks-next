import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'AI and Automation for Alberta Manufacturing Companies | LVRGWRKS' },
  description: 'LVRGWRKS helps Alberta manufacturing companies automate production reporting, connect quality and ERP systems, and build AI operating models that improve throughput and reduce manual overhead.',
  alternates: { canonical: '/industries/manufacturing' },
};

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
