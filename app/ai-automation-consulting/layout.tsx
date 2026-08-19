import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'AI Automation Consulting Alberta | LVRGWRKS' },
  description: 'AI automation consulting for mid-market companies in Alberta and Western Canada. Stop paying people to move data between systems that should talk.',
  alternates: { canonical: '/ai-automation-consulting' },
  openGraph: {
    title: 'Stop paying people to move data between systems that should talk',
    description: 'AI automation for mid-market companies in Alberta and Western Canada. Operations first, tools second. Automation is used where the diagnosis calls for it, never as the default.',
    url: '/ai-automation-consulting',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function AIAutomationConsultingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
