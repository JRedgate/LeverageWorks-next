import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { buildSystemsDecisionMetadata } from '@/content/systems-decisions/seo';
import { buildSystemsDecisionGraph } from '@/content/systems-decisions/schema';
import { content } from '@/content/systems-decisions/business-central-acumatica-netsuite';

export const metadata: Metadata = buildSystemsDecisionMetadata(content);

export default function BusinessCentralAcumaticaNetsuiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildSystemsDecisionGraph(content)} />
      {children}
    </>
  );
}
