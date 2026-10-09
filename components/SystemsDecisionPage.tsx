import React from 'react';
import Link from 'next/link';
import { RelatedReading } from './RelatedReading';
import { AnswerBody, renderInline } from './RichText';
import type { SystemsDecisionContent } from '@/content/systems-decisions/types';

/**
 * The shared template for the systems-decision pages.
 *
 * This is a server component and must stay one. Adding a client directive would
 * ship the whole copy object to the browser, and the question-and-answer body
 * has to be real crawlable HTML. The four older service pages carry one as a
 * migrate-pages.mjs artifact. The five app/insights pages are the right
 * precedent, not those.
 *
 * Every word on the page comes from the content object, which is transcribed
 * from an approved copy file. The only strings in this file are structural
 * punctuation and the connective "accessed" in the sources list.
 *
 * Section 4 of the brief, the optional comparison table, is not implemented.
 * Deferred on founder instruction 8 Oct 2026. See
 * content/systems-decisions/README.md.
 */

/**
 * Fixed, never content-supplied. components/AnalyticsEvents.tsx is a delegated
 * listener matching href.startsWith('/leverage-audit'), so letting a content
 * file override this would silently break the cta_leverage_audit event.
 */
const AUDIT_HREF = '/leverage-audit';

/**
 * The secondary hero CTA. Every service and industry page runs a two-button
 * hero row, and seven of the nine point the outlined button at /capabilities
 * with this exact label. Both strings are existing site copy, not new words,
 * which is why they are consts here rather than content fields.
 */
const SECONDARY_CTA_HREF = '/capabilities';
const SECONDARY_CTA_LABEL = 'View Capabilities';

const INLINE_LINK =
  'text-brand-navy font-semibold underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold transition-colors';

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

/** Strips scheme and leading www for display, so link text reads as the copy file wrote it. */
function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
}

export function SystemsDecisionPage({ content }: { content: SystemsDecisionContent }) {
  const { hero, whoThisIsFor, questions, firstStep, sources } = content;

  return (
    <>
      {/* Section 1. Hero */}
      <header className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            {hero.eyebrow && (
              <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">{hero.eyebrow}</span>
              </div>
            )}
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">
              {hero.h1}
            </h1>
            {hero.subhead.map((para, i) => (
              <p
                key={i}
                className={`text-brand-slate text-xl leading-relaxed max-w-2xl ${
                  i === hero.subhead.length - 1 ? 'mb-10' : 'mb-6'
                }`}
              >
                {renderInline(para, `hero-sub-${i}`)}
              </p>
            ))}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={AUDIT_HREF}
                className="bg-brand-navy text-white px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg group"
              >
                {hero.ctaLabel}
                <ArrowIcon />
              </Link>
              <Link
                href={SECONDARY_CTA_HREF}
                className="border-2 border-brand-navy text-brand-navy px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-navy hover:text-white transition-all"
              >
                {SECONDARY_CTA_LABEL}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Section 2. Who this is for */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-4xl text-brand-navy mb-8">{whoThisIsFor.heading}</h2>
            <ul className="space-y-4">
              {whoThisIsFor.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-brand-slate text-lg leading-relaxed">{renderInline(item, `who-${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/*
        Section 3. Questions and answers.
        The brief requires each question to be an h2, so this section carries no
        h2 of its own. Its heading is the gold eyebrow instead, otherwise an h2
        section title would sit directly above sibling h2 questions.
      */}
      <section className="py-20 md:py-32 bg-brand-surface border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">
              {content.questionsEyebrow}
            </span>
            <div className="space-y-10">
              {questions.map((qa, i) => (
                <div key={i} className="border-b border-gray-100 pb-10 last:border-b-0 last:pb-0">
                  <h2 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4 leading-snug">
                    {qa.question}
                  </h2>
                  <AnswerBody blocks={qa.answer} keyPrefix={`qa-${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5. What the first step looks like */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-4xl mb-6 leading-tight">{firstStep.heading}</h2>
            {firstStep.body.map((para, i) => (
              <p key={i} className="text-gray-300 text-lg leading-relaxed mb-6">
                {renderInline(para, `step-${i}`)}
              </p>
            ))}
            <Link
              href={AUDIT_HREF}
              className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl group mt-6"
            >
              {firstStep.ctaLabel}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6. Sources, optional */}
      {sources && (
        <section className="py-16 md:py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 md:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-6">{sources.heading}</h2>
              <ul className="space-y-4">
                {sources.items.map((source, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-brand-slate text-sm leading-relaxed">
                      {source.name},{' '}
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className={INLINE_LINK}>
                        {source.urlLabel ?? displayUrl(source.url)}
                      </a>
                      , accessed <time dateTime={source.accessedIso}>{source.accessed}</time>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Section 7. Related reading, the existing component unchanged */}
      <RelatedReading items={content.relatedReading} heading={content.relatedReadingHeading} />
    </>
  );
}
