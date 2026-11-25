import type { Metadata } from 'next';
import { heroH1Text, type SystemsDecisionContent } from './types';
import { isPublished } from './registry';

import { OG_IMAGE } from '@/lib/site';
/**
 * Builds the page metadata from the content object, matching the convention in
 * app/ai-automation-consulting/layout.tsx: an absolute title, a relative
 * canonical and a relative openGraph url, both resolved against the
 * metadataBase set in app/layout.tsx.
 *
 * It also carries the repo's first noindex convention. An unpublished page is
 * noindex, nofollow, driven by the one boolean in registry.ts.
 */
export function buildSystemsDecisionMetadata(content: SystemsDecisionContent): Metadata {
  const path = `/${content.slug}`;

  const metadata: Metadata = {
    title: { absolute: content.seoTitle },
    description: content.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: content.ogTitle ?? heroH1Text(content),
      description: content.ogDescription ?? content.metaDescription,
      url: path,
      siteName: 'LVRGWRKS',
      locale: 'en_CA',
      type: 'website',
      images: [OG_IMAGE],
    },
  };

  if (!isPublished(content.slug)) {
    metadata.robots = { index: false, follow: false };
  }

  return metadata;
}
