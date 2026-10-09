import type { RelatedLink } from '@/components/RelatedReading';
import type { SystemsDecisionSlug } from './registry';

/**
 * A string of body text.
 *
 * Exactly two markdown constructs are parsed, both by components/RichText.tsx:
 *   **bold**                 renders <strong>
 *   [label](/path)           renders a next/link
 *   [label](https://host)    renders an external anchor
 * Everything else is literal text.
 *
 * DO NOT USE HTML ENTITIES. React escapes the ampersand, so "&apos;" renders
 * on the page as the five visible characters &apos;. Write a plain apostrophe.
 * This is the opposite of the convention in the repo's hand-written JSX pages.
 */
export type InlineText = string;

export interface Paragraph {
  kind: 'p';
  text: InlineText;
}

export interface BulletList {
  kind: 'ul';
  items: InlineText[];
}

export interface NumberedList {
  kind: 'ol';
  items: InlineText[];
}

/** The only block shapes an answer body may contain. */
export type AnswerBlock = Paragraph | BulletList | NumberedList;

export interface QuestionAndAnswer {
  /** Rendered as an h2. Plain text, no markdown. */
  question: string;
  /** Paragraphs and optional short lists, in copy-file order. */
  answer: AnswerBlock[];
}

export interface SourceItem {
  /** Source name as the copy file writes it, for example "BDC, LIFT program page". */
  name: string;
  /** Absolute URL, verified to resolve. */
  url: string;
  /** Link text. Defaults to the url minus scheme and leading www. */
  urlLabel?: string;
  /** Exactly as the copy file writes it, for example "8 October 2026". */
  accessed: string;
  /** The same date in ISO 8601, for the time element dateTime attribute. */
  accessedIso: string;
}

export interface SystemsDecisionContent {
  /** The route is `/${slug}`. Typed, so a typo is a build error. */
  slug: SystemsDecisionSlug;

  /** Copy file frontmatter `title`, used verbatim as the absolute page title. */
  seoTitle: string;
  /** Copy file frontmatter `meta_description`. */
  metaDescription: string;
  /** openGraph.title. Falls back to hero.h1. */
  ogTitle?: string;
  /** openGraph.description. Falls back to metaDescription. */
  ogDescription?: string;

  /**
   * schema.org Service.name. Falls back to hero.h1, because no copy file
   * supplies a separate service name and the brief forbids inventing words.
   * Set it only when a copy file provides one.
   */
  serviceName?: string;
  /** schema.org Service.description. Falls back to metaDescription. */
  serviceDescription?: string;
  /** BreadcrumbList leaf label. Falls back to hero.h1. */
  breadcrumbLabel?: string;

  /** Section 1. */
  hero: {
    /**
     * The page's only h1, as one or two lines. The site's hero convention is
     * two: a navy first line, then an italic slate second line under a break.
     * The lines are joined with a space for og:title, Service.name and the
     * breadcrumb label, so the full phrase is what machines read.
     */
    h1Lines: string[];
    /**
     * Lead paragraphs under the h1. The brief specifies one. The site's own
     * hero convention across the four service pages and the four industry
     * pages is two, which is why this is an array: a second paragraph is a
     * one-line copy edit, not a template change.
     */
    subhead: InlineText[];
    /** The locked CTA string. The href is fixed by the component, not by content. */
    ctaLabel: string;
    /** Pill above the h1. Omit unless the copy file supplies the words. */
    eyebrow?: string;
  };

  /** Section 2. */
  whoThisIsFor: {
    /** The copy file's own section heading, transcribed. */
    heading: string;
    items: InlineText[];
  };

  /**
   * Section 3. The copy file's own "Questions and answers" heading, rendered as
   * the section eyebrow rather than an h2, because each question is an h2 and
   * an h2 section title directly above sibling h2 questions is a broken outline.
   */
  questionsEyebrow: string;
  questions: QuestionAndAnswer[];

  /**
   * Section 4, the optional comparison table, is not implemented. Deferred on
   * founder instruction 8 Oct 2026 until the copy for
   * business-central-acumatica-netsuite arrives, which is the only page that
   * needs it. See README.md.
   */

  /** Section 5. */
  firstStep: {
    /** The copy file's own section heading, transcribed. */
    heading: string;
    /** Paragraphs, in copy-file order. */
    body: InlineText[];
    /** The locked CTA string. */
    ctaLabel: string;
  };

  /** Section 6, optional. Present only on pages citing third-party facts. */
  sources?: {
    /** The copy file's own section heading, transcribed. */
    heading: string;
    items: SourceItem[];
  };

  /** Section 7. Reuses components/RelatedReading.tsx unchanged. */
  relatedReading: RelatedLink[];
  /** Override for RelatedReading's own default heading. */
  relatedReadingHeading?: string;
}

/**
 * The full h1 as one string. Used wherever a machine reads the heading rather
 * than a person: og:title, schema.org Service.name, the breadcrumb leaf.
 */
export function heroH1Text(content: SystemsDecisionContent): string {
  return content.hero.h1Lines.join(' ');
}
