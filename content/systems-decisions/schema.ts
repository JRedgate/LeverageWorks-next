import { heroH1Text, type SystemsDecisionContent } from './types';

const SITE = 'https://www.lvrgwrks.com';

/**
 * The @id of the site-wide ProfessionalService node in app/layout.tsx. That
 * node stays exactly as it is. These pages reference it, they do not restate it.
 */
const ORG_ID = 'https://www.lvrgwrks.com';

/**
 * One script per page carrying an @graph, rather than two separate scripts.
 * A bare provider: { "@id": ... } in its own script tag relies on the consumer
 * merging nodes by @id across blocks. Google does, but it is not guaranteed.
 * An @graph with a self-describing provider stub is valid standalone and
 * merges correctly either way.
 *
 * No FAQPage node. Google stopped showing FAQ rich results on 7 May 2026, and
 * /faq already carries the site's only FAQPage.
 */
export function buildSystemsDecisionGraph(content: SystemsDecisionContent) {
  const url = `${SITE}/${content.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: content.serviceName ?? heroH1Text(content),
        description: content.serviceDescription ?? content.metaDescription,
        url,
        areaServed: { '@type': 'State', name: 'Alberta' },
        provider: {
          '@type': 'ProfessionalService',
          '@id': ORG_ID,
          name: 'LVRGWRKS (LeverageWorks)',
        },
      },
      {
        // Two items, not three. These pages live at /<slug> with no
        // intermediate, so a third level would fabricate a path that does not
        // exist in the URL or the navigation.
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          {
            '@type': 'ListItem',
            position: 2,
            name: content.breadcrumbLabel ?? heroH1Text(content),
            item: url,
          },
        ],
      },
    ],
  };
}
