import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'What Does a Fractional CTO Actually Do? | LVRGWRKS' },
  description: 'Most mid-market companies in Alberta are feeling the pain of not having a CTO without being ready to hire one full-time. Here is what a fractional CTO actually does inside your business.',
  alternates: { canonical: '/insights/what-does-a-fractional-cto-do' },
};

export default function WhatFractionalCTODoesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
