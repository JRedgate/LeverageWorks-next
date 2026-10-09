import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { buildSystemsDecisionMetadata } from '@/content/systems-decisions/seo';
import { buildSystemsDecisionGraph } from '@/content/systems-decisions/schema';
import { content } from '@/content/systems-decisions/erp-selection-alberta-manufacturers';

export const metadata: Metadata = buildSystemsDecisionMetadata(content);

export default function ErpSelectionAlbertaManufacturersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildSystemsDecisionGraph(content)} />
      {children}
    </>
  );
}
