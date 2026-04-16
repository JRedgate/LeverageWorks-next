import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Contact | LVRGWRKS (LeverageWorks) - Request a Free Leverage Audit' },
  description: 'Connect with LVRGWRKS (LeverageWorks) strategists. Request a free 60-minute Leverage Audit to discuss your AI implementation challenges and explore engagement pathways.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
