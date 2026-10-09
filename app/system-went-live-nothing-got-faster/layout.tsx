import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { buildSystemsDecisionMetadata } from '@/content/systems-decisions/seo';
import { buildSystemsDecisionGraph } from '@/content/systems-decisions/schema';
import { content } from '@/content/systems-decisions/system-went-live-nothing-got-faster';

export const metadata: Metadata = buildSystemsDecisionMetadata(content);

export default function SystemWentLiveNothingGotFasterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildSystemsDecisionGraph(content)} />
      {children}
    </>
  );
}
