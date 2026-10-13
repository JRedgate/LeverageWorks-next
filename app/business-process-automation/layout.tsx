import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { buildSystemsDecisionMetadata } from '@/content/systems-decisions/seo';
import { buildSystemsDecisionGraph } from '@/content/systems-decisions/schema';
import { content } from '@/content/systems-decisions/business-process-automation';

/**
 * The title, the meta description, the canonical and both openGraph strings
 * are the same strings this file carried before the Phase 4.2a rebuild. They
 * now come from the content object so the copy file stays the single source.
 * The page gains the Service and BreadcrumbList nodes it had never carried.
 */
export const metadata: Metadata = buildSystemsDecisionMetadata(content);

export default function BusinessProcessAutomationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildSystemsDecisionGraph(content)} />
      {children}
    </>
  );
}
