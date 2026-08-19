import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'AI Automation Consulting Alberta | LVRGWRKS' },
  description: 'AI automation consulting for mid-market companies in Alberta and Western Canada. Stop paying people to move data between systems that should talk.',
  alternates: { canonical: '/ai-automation-consulting' },
};

export default function AIAutomationConsultingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
