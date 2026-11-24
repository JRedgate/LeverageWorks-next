'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { sendWhenReady } from '@/components/AnalyticsEvents';
import { BookCallButton } from '@/components/BookCallButton';

// One source for the 60-Day Test copy and scoring. Used by /60-day-test
// (variant "page") and the homepage test band (variant "card").
//
// Answers live in component state only. Nothing is posted, stored or sent to
// analytics, so the privacy line on the page stays true.

export const SIXTY_DAY_ITEMS = [
  'Set prices and sign off quotes',
  'Take your biggest customer’s call',
  'Approve spending and hiring',
  'Know last month’s numbers',
  'Fix it when a job goes sideways',
];

export const SIXTY_DAY_BANDS = [
  { range: '0 to 1', min: 0, max: 1, heading: 'The business runs without you', line: 'Your time is yours to spend on growth. Worth checking that it holds as you grow.' },
  { range: '2 to 3', min: 2, max: 3, heading: 'A few hand-offs from running without you', line: 'Two or three decisions still come back to you. Moving them would give you back real time.' },
  { range: '4 to 5', min: 4, max: 5, heading: 'The business runs through you', line: 'That sets the ceiling on its growth and on your time. It can be changed, one hand-off at a time.' },
];

export const sixtyDayBand = (count: number) =>
  SIXTY_DAY_BANDS.find((b) => count >= b.min && count <= b.max) ?? SIXTY_DAY_BANDS[0];

type Answer = 'me' | 'else' | null;

const choiceClass = (selected: boolean, compact: boolean) =>
  `${compact ? 'px-3 py-1.5 text-xs' : 'px-5 py-2.5 text-sm'} rounded-lg font-bold border-2 transition-all ${
    selected ? 'bg-brand-navy text-white border-brand-navy' : 'bg-white text-brand-slate border-gray-200 hover:border-brand-navy/40'
  }`;

// `header={false}` drops the card's own eyebrow and headline where the
// section beside it already carries them (homepage test band).
export const SixtyDayTest: React.FC<{ variant?: 'page' | 'card'; header?: boolean }> = ({ variant = 'page', header = true }) => {
  const compact = variant === 'card';
  const [answers, setAnswers] = useState<Answer[]>(SIXTY_DAY_ITEMS.map(() => null));
  const completeSent = useRef(false);

  const done = answers.every((a) => a !== null);
  const count = answers.filter((a) => a === 'me').length;
  const band = sixtyDayBand(count);

  // sixty_day_test_complete is the page's event (addendum 1, Section 2). The
  // homepage card does not fire it, so the event keeps counting page completions.
  useEffect(() => {
    if (variant === 'page' && done && !completeSent.current) {
      completeSent.current = true;
      sendWhenReady('sixty_day_test_complete', {});
    }
  }, [done, variant]);

  const setAnswer = (i: number, a: Answer) =>
    setAnswers((prev) => prev.map((v, j) => (j === i ? a : v)));

  const list = (
    <ol className={compact ? 'space-y-2' : 'space-y-4 mb-12'}>
      {SIXTY_DAY_ITEMS.map((item, i) => (
        <li
          key={item}
          className={
            compact
              ? 'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-2 border-b border-gray-100 last:border-b-0'
              : 'bg-brand-surface border border-gray-100 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'
          }
        >
          <span className={`text-brand-navy font-semibold ${compact ? 'text-sm' : 'text-lg'}`}>
            <span className={`text-brand-gold font-display font-bold ${compact ? 'mr-2' : 'mr-3'}`}>{i + 1}.</span>
            {item}
          </span>
          <div className="flex gap-2 shrink-0" role="group" aria-label={item}>
            <button type="button" aria-pressed={answers[i] === 'me'} onClick={() => setAnswer(i, 'me')} className={choiceClass(answers[i] === 'me', compact)}>Me</button>
            <button type="button" aria-pressed={answers[i] === 'else'} onClick={() => setAnswer(i, 'else')} className={choiceClass(answers[i] === 'else', compact)}>Someone else</button>
          </div>
        </li>
      ))}
    </ol>
  );

  if (compact) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 md:p-8">
        {header && (
          <>
            <p className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-2">The 60-Day Test</p>
            <p className="font-display font-semibold text-xl text-brand-navy leading-snug mb-1">Could your business run for 60 days without you?</p>
          </>
        )}
        <p className="text-brand-slate text-sm mb-4">For each of the five below, who would do it?</p>
        {list}
        <div className="mt-5 pt-5 border-t border-gray-100" aria-live="polite">
          <p className="font-display font-bold text-lg text-brand-navy">
            Your count: {count} of 5{!done && <span className="text-brand-slate font-sans font-normal text-sm"> (answer all five)</span>}
          </p>
          {done && (
            <>
              <p className="font-display font-bold text-brand-gold mt-1">{band.heading}</p>
              <p className="text-brand-slate text-sm leading-relaxed mt-1">{band.line}</p>
            </>
          )}
          <Link href="/60-day-test" className="inline-block mt-4 text-brand-navy font-semibold text-sm underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold transition-colors">
            See what your count means
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {list}
      {done && (
        <div className="bg-brand-navy text-white rounded-xl p-8 md:p-12" aria-live="polite">
          <p className="font-display font-bold text-3xl md:text-4xl mb-6">Your count: {count} of 5</p>
          <h2 className="font-display font-bold text-2xl text-brand-gold mb-3">{band.heading}</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">{band.line}</p>
          <p className="text-gray-300 text-sm mb-8">A rule of thumb, not a study. It tells you where to look, not what it costs.</p>
          <p className="text-gray-200 text-lg leading-relaxed mb-8">
            <strong className="text-white">Bring your count to a 30-minute call.</strong> We&apos;ll tell you which hand-off we would start with and whether a diagnostic is worth doing.
          </p>
          <BookCallButton variant="gold" />
          <div className="mt-8 flex flex-col gap-2 text-sm">
            <button type="button" onClick={() => window.print()} className="self-start text-brand-gold underline underline-offset-4 hover:text-white transition-colors">
              Print the test for your leadership team.
            </button>
            <p className="text-gray-400">Your answers stay on this page. We don&apos;t store them.</p>
          </div>
        </div>
      )}
    </>
  );
};
