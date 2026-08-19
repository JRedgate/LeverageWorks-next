import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Construction Operations Automation Alberta | LVRGWRKS' },
  description: 'Project managers should not run jobs and assemble reports at the same time. Operations and automation help for Alberta construction companies.',
  alternates: { canonical: '/industries/construction' },
};

export default function ConstructionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
