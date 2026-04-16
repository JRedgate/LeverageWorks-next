import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'AI and Automation for Alberta Construction Companies | LVRGWRKS' },
  description: 'LVRGWRKS helps Alberta construction and general contracting companies eliminate manual reporting, automate subcontractor coordination, and get real-time project cost visibility.',
  alternates: { canonical: '/industries/construction' },
};

export default function ConstructionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
