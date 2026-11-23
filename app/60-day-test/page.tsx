'use client';

import React, { useEffect, useRef, useState } from 'react';
import { sendWhenReady } from '@/components/AnalyticsEvents';
import { BookCallButton } from '@/components/BookCallButton';
import { LwSymbol } from '@/components/Logo';

// Answers live in component state only. Nothing is posted, stored or sent to
// analytics, so the privacy line at the foot of the result stays true.

const ITEMS = [
  'Set prices and sign off quotes',
  'Take your biggest customer’s call',
  'Approve spending and hiring',
  'Know last month’s numbers',
  'Fix it when a job goes sideways',
];

const BANDS = [
  { range: '0 to 1', min: 0, max: 1, heading: 'The business runs without you', line: 'Your time is yours to spend on growth. Worth checking that it holds as you grow.' },
  { range: '2 to 3', min: 2, max: 3, heading: 'A few hand-offs from running without you', line: 'Two or three decisions still come back to you. Moving them would give you back real time.' },
  { range: '4 to 5', min: 4, max: 5, heading: 'The business runs through you', line: 'That sets the ceiling on its growth and on your time. It can be changed, one hand-off at a time.' },
];

type Answer = 'me' | 'else' | null;

const choiceClass = (selected: boolean) =>
  `px-5 py-2.5 rounded-lg text-sm font-bold border-2 transition-all ${
    selected ? 'bg-brand-navy text-white border-brand-navy' : 'bg-white text-brand-slate border-gray-200 hover:border-brand-navy/40'
  }`;

export default function SixtyDayTestPage() {
  const [answers, setAnswers] = useState<Answer[]>(ITEMS.map(() => null));
  const completeSent = useRef(false);

  const done = answers.every((a) => a !== null);
  const count = answers.filter((a) => a === 'me').length;
  const band = BANDS.find((b) => count >= b.min && count <= b.max) ?? BANDS[0];

  useEffect(() => {
    if (done && !completeSent.current) {
      completeSent.current = true;
      sendWhenReady('sixty_day_test_complete', {});
    }
  }, [done]);

  const setAnswer = (i: number, a: Answer) =>
    setAnswers((prev) => prev.map((v, j) => (j === i ? a : v)));

  return (
    <>
      {/* Print: one page, no navigation or footer. */}
      <style>{`
        @media print {
          @page { margin: 14mm; }
          nav, footer { display: none !important; }
          body { background: #fff !important; }
        }
      `}</style>

      <div className="print:hidden">
        <header className="relative pt-40 pb-16 md:pt-52 md:pb-20 overflow-hidden bg-brand-surface">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="container mx-auto px-6 md:px-16 relative z-10">
            <div className="max-w-3xl">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The 60-Day Test</span>
              <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
                Could your business run for 60 days without you?
              </h1>
              <p className="text-brand-slate text-xl leading-relaxed">
                Picture 60 days away. No calls and no texts. For each of the five below, who would do it?
              </p>
            </div>
          </div>
        </header>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <ol className="space-y-4 mb-12">
                {ITEMS.map((item, i) => (
                  <li key={item} className="bg-brand-surface border border-gray-100 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <span className="text-brand-navy font-semibold text-lg">
                      <span className="text-brand-gold font-display font-bold mr-3">{i + 1}.</span>
                      {item}
                    </span>
                    <div className="flex gap-3 shrink-0" role="group" aria-label={item}>
                      <button type="button" aria-pressed={answers[i] === 'me'} onClick={() => setAnswer(i, 'me')} className={choiceClass(answers[i] === 'me')}>Me</button>
                      <button type="button" aria-pressed={answers[i] === 'else'} onClick={() => setAnswer(i, 'else')} className={choiceClass(answers[i] === 'else')}>Someone else</button>
                    </div>
                  </li>
                ))}
              </ol>

              {done && (
                <div className="bg-brand-navy text-white rounded-xl p-8 md:p-12" aria-live="polite">
                  <p className="font-display font-bold text-3xl md:text-4xl mb-6">Your count: {count} of 5</p>
                  <h2 className="font-display font-bold text-2xl text-brand-gold mb-3">{band.heading}</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">{band.line}</p>
                  <p className="text-gray-400 text-sm mb-8">A rule of thumb, not a study. It tells you where to look, not what it costs.</p>
                  <p className="text-gray-200 text-lg leading-relaxed mb-8">
                    <strong className="text-white">Bring your count to a 30-minute call.</strong> We&apos;ll tell you which hand-off we would start with and whether a diagnostic is worth doing.
                  </p>
                  <BookCallButton variant="gold" />
                  <div className="mt-8 flex flex-col gap-2 text-sm">
                    <button type="button" onClick={() => window.print()} className="self-start text-brand-gold underline underline-offset-4 hover:text-white transition-colors">
                      Print the test for your leadership team.
                    </button>
                    <p className="text-gray-500">Your answers stay on this page. We don&apos;t store them.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Print sheet: blank boxes, the three bands, lockup and contact. */}
      <div className="hidden print:block text-brand-navy bg-white">
        <div className="flex items-center gap-3 mb-6">
          <LwSymbol className="w-10 h-10" />
          <span className="font-display font-bold text-xl tracking-tight">LVRGWRKS</span>
        </div>
        <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mb-2">The 60-Day Test</p>
        <h1 className="font-display font-bold text-2xl mb-2">Could your business run for 60 days without you?</h1>
        <p className="text-sm mb-5">Picture 60 days away. No calls and no texts. For each of the five below, who would do it?</p>
        <table className="w-full text-sm border-collapse mb-5">
          <thead>
            <tr>
              <th className="text-left py-2 border-b border-gray-300"></th>
              <th className="py-2 px-3 border-b border-gray-300 w-20">Me</th>
              <th className="py-2 px-3 border-b border-gray-300 w-28">Someone else</th>
            </tr>
          </thead>
          <tbody>
            {ITEMS.map((item, i) => (
              <tr key={item}>
                <td className="py-2.5 border-b border-gray-200">{i + 1}. {item}</td>
                <td className="py-2.5 border-b border-gray-200 text-center"><span className="inline-block w-4 h-4 border border-gray-500"></span></td>
                <td className="py-2.5 border-b border-gray-200 text-center"><span className="inline-block w-4 h-4 border border-gray-500"></span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm font-bold mb-2">Count your &ldquo;Me&rdquo; answers.</p>
        <div className="space-y-2 mb-5 text-sm">
          {BANDS.map((b) => (
            <p key={b.range}><strong>{b.range}: {b.heading}.</strong> {b.line}</p>
          ))}
        </div>
        <p className="text-xs mb-4">A rule of thumb, not a study. It tells you where to look, not what it costs.</p>
        <p className="text-sm"><strong>Bring your count to a 30-minute call.</strong> lvrgwrks.com · jredgate@lvrgwrks.com</p>
      </div>
    </>
  );
}
