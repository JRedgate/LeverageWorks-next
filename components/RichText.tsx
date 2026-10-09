import React from 'react';
import Link from 'next/link';
import type { AnswerBlock } from '@/content/systems-decisions/types';

/** The repo's existing inline prose link treatment. */
const INLINE_LINK =
  'text-brand-navy font-semibold underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold transition-colors';

/**
 * Renders the only inline markdown the systems-decision content files support:
 *   **bold**              -> strong
 *   [label](/path)        -> next/link
 *   [label](https://...)  -> external anchor
 * Anything else is literal text, and an unbalanced ** renders as literal
 * asterisks rather than failing, which is why the build checklist greps for
 * stray asterisks in the rendered output.
 */
export function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  // The regex is built inside the function on purpose. A module-level /g/
  // regex carries lastIndex between .exec() calls and silently skips matches
  // on every call after the first.
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

  const out: React.ReactNode[] = [];
  let last = 0;
  let n = 0;
  let match: RegExpExecArray | null;

  // A while/exec loop, not for...of over matchAll. tsconfig sets target es5
  // with no downlevelIteration, so iterating a RegExpStringIterator is a hard
  // type error here.
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) out.push(text.slice(last, match.index));

    const bold = match[1];
    if (bold !== undefined) {
      out.push(
        <strong key={`${keyPrefix}-b${n}`} className="font-semibold text-brand-navy">
          {bold}
        </strong>
      );
    } else {
      const label = match[2];
      const href = match[3];
      out.push(
        href.charAt(0) === '/' ? (
          <Link key={`${keyPrefix}-l${n}`} href={href} className={INLINE_LINK}>
            {label}
          </Link>
        ) : (
          <a
            key={`${keyPrefix}-l${n}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={INLINE_LINK}
          >
            {label}
          </a>
        )
      );
    }

    last = match.index + match[0].length;
    n += 1;
  }

  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** A gold dot bullet, matching the repo's existing list treatment. */
function Bullet() {
  return (
    <span
      className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2.5 flex-shrink-0"
      aria-hidden="true"
    />
  );
}

/**
 * Renders an answer body: paragraphs and optional short lists, as real HTML
 * text. Tailwind preflight zeroes list markers and padding, so the ordered
 * list sets list-decimal and its own padding explicitly. The browser owns the
 * numbering, so screen readers and sighted readers cannot disagree about it.
 */
export function AnswerBody({ blocks, keyPrefix }: { blocks: AnswerBlock[]; keyPrefix: string }) {
  return (
    <>
      {blocks.map((block, i) => {
        const key = `${keyPrefix}-${i}`;

        if (block.kind === 'p') {
          return (
            <p key={key} className="text-brand-slate leading-relaxed mb-5 last:mb-0">
              {renderInline(block.text, key)}
            </p>
          );
        }

        if (block.kind === 'ul') {
          return (
            <ul key={key} className="space-y-3 mb-5 last:mb-0">
              {block.items.map((item, j) => (
                <li key={`${key}-${j}`} className="flex items-start gap-3">
                  <Bullet />
                  <span className="text-brand-slate leading-relaxed">
                    {renderInline(item, `${key}-${j}`)}
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <ol
            key={key}
            className="list-decimal pl-6 space-y-3 mb-5 last:mb-0 marker:text-brand-gold marker:font-bold"
          >
            {block.items.map((item, j) => (
              <li key={`${key}-${j}`} className="text-brand-slate leading-relaxed pl-1">
                {renderInline(item, `${key}-${j}`)}
              </li>
            ))}
          </ol>
        );
      })}
    </>
  );
}
