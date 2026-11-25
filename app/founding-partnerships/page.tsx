import React from 'react';
import Link from 'next/link';
import { BookCallButton } from '@/components/BookCallButton';
import { Eyebrow, NumberedCards, SectionHeading, type Item } from '@/components/Sections';

// Addendum 5: Founding Partnerships, unlisted. Copy is word for word from the
// addendum, Section 3. Layout follows addendum 3: every section has a gold
// eyebrow and a two-tone headline, built from the `main` classes in
// components/Sections. No form on this page. BookCallButton fires
// book_call_click and nothing else is added.

const problem: Item[] = [
  { title: 'Everything routes through one desk', body: 'Pricing, approvals, hiring and the customer who will only call you.' },
  { title: 'The plan is the first thing to slip', body: 'When the week fills up, the numbers, the plan and the quarterly rhythm are what get dropped.' },
  { title: 'Growth should not cost you more hours', body: 'You shouldn’t have to work twice the hours to own twice the company.' },
];

const steps: Item[] = [
  { title: 'The read', body: 'We look at how the business runs today against where you want it to be. You get it in writing: what holds as you grow and what won’t.' },
  { title: 'The work', body: 'For the rest of the 60 days we work the top priorities with you and your leadership team. Decisions move to the people who should hold them, one at a time.' },
  { title: 'Your call', body: 'At day 60 you decide whether we carry on. There is no long term to sign.' },
];

const founding: { title: string; points: string[] }[] = [
  {
    title: 'What you get',
    points: [
      'Founding terms that later clients will not be offered.',
      'A fixed fee agreed before we start. No hourly billing and no success fees.',
      'A way out at day 60 if it is not working for you.',
    ],
  },
  {
    title: 'What we ask',
    points: [
      'A case study you approve before anyone else sees it.',
      'An introduction, if you are happy with the work.',
    ],
  },
];

const fit: Item[] = [
  { title: 'You own or run the business', body: 'You can say yes to moving a decision, and mean it.' },
  { title: 'Someone can take the decisions on', body: 'A leadership team, even a thin one.' },
  { title: 'You will give it time each week', body: 'The work is done with you, not for you in a back room.' },
];

export default function FoundingPartnershipsPage() {
  return (
    <>
      {/* 3.1 Hero: `main` layout, one focal point, no secondary link */}
      <header className="relative pt-24 sm:pt-40 pb-24 md:pt-56 md:pb-36 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Founding Partnerships</span>
            </div>
            <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
              Sixty days to get the first decisions<br />
              <span className="text-brand-slate italic">off your desk.</span>
            </h1>
            <p className="text-brand-navy text-xl leading-relaxed mb-10 max-w-2xl">
              We are taking on three founding partnerships. Each one starts with 60 days of work on the decisions that still come back to you. At day 60 you decide whether we carry on.
            </p>
            <BookCallButton variant="navy" />
          </div>
        </div>
      </header>

      {/* 3.2 The problem: dark band, three cards (DarkCards classes, three across) */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <Eyebrow tone="dark">Where It Starts</Eyebrow>
            <SectionHeading tone="dark" line1="The business grew." line2="The decisions stayed with you." className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problem.map((s) => (
                <div key={s.title} className="bg-white/5 border border-white/10 p-8 rounded-xl">
                  <h3 className="text-brand-gold font-display font-bold text-xl md:text-2xl mb-3">{s.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3.3 The guide: text beside the founder photo, as on the homepage
          "Led by an operator" band. Text stacks first on mobile. */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-center">
              <div className="md:col-span-3 md:order-2">
                <Eyebrow>Who You Work With</Eyebrow>
                <SectionHeading line1="Led by an operator." line2="Done beside your team." className="mb-6" />
                <p className="text-brand-slate text-lg leading-relaxed">
                  LVRGWRKS is led by Jeremy Redgate, with more than 20 years in industrial operations and capital projects. The work happens in your business, on your priorities, with you and the people who will carry it on.
                </p>
              </div>
              {/* Same crop as the homepage band (STEP-REVIEW-8 3.5). */}
              <div className="md:col-span-2 md:order-1 flex md:justify-center">
                <div className="relative w-56 h-56 md:w-[300px] md:h-[300px] shrink-0 rounded-full overflow-hidden">
                  <img
                    src="/jeremy-redgate.jpg"
                    alt="Jeremy Redgate, founder of LVRGWRKS"
                    width={1024}
                    height={1004}
                    className="absolute top-0 left-[-16.45%] w-[134.74%] max-w-none h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.4 The plan: grey band, numbered cards */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>How the 60 Days Run</Eyebrow>
            <SectionHeading line1="Three steps." line2="One decision at the end." className="mb-12" />
            <NumberedCards items={steps} />
          </div>
        </div>
      </section>

      {/* 3.5 What founding means: two cards side by side, one line beneath */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>Why Founding</Eyebrow>
            <SectionHeading line1="What you get." line2="What we ask." className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {founding.map((card) => (
                <div key={card.title} className="p-8 md:p-10 rounded-xl border border-gray-100 bg-brand-surface">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-6">{card.title}</h3>
                  <ul className="space-y-4">
                    {card.points.map((point) => (
                      <li key={point} className="border-l-4 border-brand-gold pl-4 text-brand-slate leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-brand-navy text-lg leading-relaxed max-w-3xl mt-12 font-semibold">
              We are taking three. When the third is signed, this page comes down.
            </p>
          </div>
        </div>
      </section>

      {/* 3.6 Fit: grey band, three cards (LightCards classes) */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>Is It a Fit</Eyebrow>
            <SectionHeading line1="Three things" line2="make this work." className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fit.map((s) => (
                <div key={s.title} className="border border-gray-100 rounded-xl p-8 bg-white">
                  <h3 className="font-display font-bold text-xl text-brand-navy mb-3">{s.title}</h3>
                  <p className="text-brand-slate leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3.7 Final call to action, with the 60-Day Test as the transitional one */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto">
            <Eyebrow tone="dark">The Next Step</Eyebrow>
            <SectionHeading tone="dark" line1="Get the decisions" line2="off your desk." />
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Left alone, the business stays as big as your week. With the right hand-offs it runs without waiting on you.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              Book a 30-minute call. We’ll tell you where we would start and whether a founding partnership fits.
            </p>
            <BookCallButton variant="gold" />
            <p className="text-gray-300 mt-10">
              Not ready to talk?{' '}
              <Link href="/60-day-test" className="text-brand-gold font-semibold border-b-2 border-brand-gold pb-0.5 hover:text-white transition-colors">
                Take the 60-Day Test
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
