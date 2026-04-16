import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'AI Automation Consulting Alberta | LVRGWRKS - Operational AI for Mid-Market Companies' },
  description: 'LVRGWRKS builds AI automation systems for mid-market companies in Alberta and Western Canada. We connect your platforms, eliminate manual workflows, and prove ROI every 30 days.',
  alternates: { canonical: '/ai-automation-consulting' },
};

export default function AIAutomationConsultingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
