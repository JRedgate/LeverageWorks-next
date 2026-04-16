import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Business Process Automation Alberta | LVRGWRKS - Eliminate Manual Workflows' },
  description: 'LVRGWRKS automates manual business processes for mid-market companies in Alberta. We map your workflows, quantify the labour cost, and build automation systems that eliminate the manual work permanently.',
  alternates: { canonical: '/business-process-automation' },
};

export default function BusinessProcessAutomationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
