import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Business Process Automation Calgary & Alberta | LVRGWRKS' },
  description: 'Business process automation for mid-market companies in Alberta. Your team should not be the integration layer between your own systems.',
  alternates: { canonical: '/business-process-automation' },
};

export default function BusinessProcessAutomationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
