import type { SystemsDecisionContent } from './types';

/**
 * Transcribed verbatim from
 * C:\LVRGWRKS-marketing\site-copy-2026-10\job-costing-change-orders-contractors.md
 * status: DRAFT FOR FOUNDER REVIEW, 8 Oct 2026. Not approved, not published.
 *
 * Do not edit the copy here. Edits go in the copy file and are transcribed back.
 * The copy file's closing "Internal links to add pointing at this page" and
 * "Notes for founder review" sections are not page copy and are not transcribed.
 */
export const content: SystemsDecisionContent = {
  slug: 'job-costing-change-orders-contractors',

  seoTitle: 'Job Costing and Change Orders for Alberta Contractors | LVRGWRKS',
  metaDescription:
    'Change order money is lost on site, not in billing. How Alberta contractors stop losing margin they already earned on extra work.',

  hero: {
    h1: 'Job costing and change orders for Alberta contractors',
    subhead:
      'Most contractors try to fix change orders in the office: better billing, better software, a stricter project manager. But the money is rarely lost in the office. It is lost in the first ten minutes, on site, when someone says yes to extra work and no record gets made. Everything after that is the office trying to rebuild a record that never existed.',
    ctaLabel: 'Request Free Leverage Audit',
  },

  whoThisIsFor: {
    heading: 'Who this is for',
    items: [
      'Owners, general managers and controllers of Alberta contractors with roughly 20 to 250 people, in civil, electrical, mechanical, industrial and general contracting',
      'Extra work, T&M tickets and force account work that gets done in the field and argued about at billing',
      'Job cost reports that arrive after the job can still be corrected',
      'Project managers spending their week chasing paperwork instead of running work',
    ],
  },

  questionsEyebrow: 'Questions and answers',
  questions: [
    {
      question: 'Where does change order money actually go missing?',
      answer: [
        { kind: 'p', text: 'Not where most owners look.' },
        {
          kind: 'p',
          text: 'Here is the usual path. A superintendent agrees to extra work. The crew does it. Nobody writes it down that day, because the crew is busy and the super is already on the next problem. Days later someone writes the ticket from memory. The project manager prices it when they get to it. The client signs it, or argues about it. Accounting bills it on the next cycle, if they know it exists.',
        },
        {
          kind: 'p',
          text: "Every step after the first one is trying to recover information that should have been captured at the moment of yes. The quantity is a guess. The hours are a guess. The client's memory of agreeing to it has faded, and the client has every reason to remember it differently. By the time the change reaches billing, you are not invoicing work. You are negotiating it.",
        },
        {
          kind: 'p',
          text: 'That is why better billing software rarely fixes the problem. It arrives at the end of a path whose damage is done at the start.',
        },
      ],
    },
    {
      question: 'Why this is the cheapest margin you will ever recover',
      answer: [
        {
          kind: 'p',
          text: 'Unbilled extra work is the only margin you lose after you have already earned it. The crew was paid. The material was bought. The work is in the ground. There is no new sale to make and no new work to do. All that is missing is a record and an invoice.',
        },
        {
          kind: 'p',
          text: 'Every other way to improve margin, winning better work, pricing higher, cutting cost, costs something or risks something. Collecting what you already earned does not.',
        },
      ],
    },
    {
      question: 'How do we know if this is costing us?',
      answer: [
        { kind: 'p', text: 'Pull the last three closed jobs and check two things.' },
        {
          kind: 'ol',
          items: [
            '**Compare what was billed as extra work against what the field remembers doing.** Ask the superintendent and the foreman to list the extras on each job. Then compare that list against the change orders and T&M tickets that were actually invoiced. The difference is money you earned and did not collect.',
            '**Count the days from yes to invoice.** For each change that was billed, find the date someone in the field agreed to it and the date it appeared on an invoice. The longer that gap, the more your clients push back and the more you write off.',
          ],
        },
        {
          kind: 'p',
          text: 'Neither check needs software. Do it on three jobs before you believe anyone, including us.',
        },
      ],
    },
    {
      question: 'Why is our job cost report always a month behind?',
      answer: [
        {
          kind: 'p',
          text: 'Because costs reach the job late. Timesheets get collected weekly and keyed in by someone in the office. Material is received on site but the bill does not land until the supplier invoices. Equipment hours sit on a log sheet. Committed costs, the purchase orders and subcontracts you have signed but not yet been billed for, often are not tracked against the job at all.',
        },
        {
          kind: 'p',
          text: 'So the report shows what has been paid for, not what has been spent or committed. By the time it tells you a job is going sideways, the work that caused it is finished. The fix is getting costs onto the job when they happen, and tracking what you have committed, not only what you have paid.',
        },
      ],
    },
    {
      question: 'Will new construction software fix it?',
      answer: [
        {
          kind: 'p',
          text: 'Not if the record never gets made. Fix the moment of yes first. Procore, Jonas, Sage 300 CRE, Viewpoint Vista, Business Central with construction add-ons and others can all handle change orders and job cost. Some are project management platforms that connect to your accounting system. Others are construction accounting systems with project tools attached. Know which one you are buying and which half of the problem it covers.',
        },
        {
          kind: 'p',
          text: 'But software records the process you give it. If a change still waits three days for someone to write it up, the new system records a change that waited three days. If the foreman still will not enter anything on site, the system fills up with data entered from memory at the end of the week.',
        },
        {
          kind: 'p',
          text: 'Before you buy, settle how a change should move: who can approve it in the field, how fast it gets captured, who prices it, and how it reaches billing. Then test every system against that path.',
        },
      ],
    },
    {
      question: 'What does a working change process look like?',
      answer: [
        {
          kind: 'p',
          text: 'There is no single right answer, but the ones that work tend to share a few things:',
        },
        {
          kind: 'ul',
          items: [
            '**One record per change, created on site the same day.** A photo, a description and the job number, captured by whoever agreed to the work. Pricing can follow. The record has to exist first.',
            '**One person who owns each change until it is billed.** Not the field, not the office. One named role.',
            '**The same record flows to the project manager, the client and billing.** Nobody retypes it.',
            '**A weekly look at every open change and its age.** Anything older than your agreed limit gets chased by name.',
            '**Job cost that includes committed costs**, updated weekly at least, so the project manager sees the overrun while there is still work left to manage.',
          ],
        },
      ],
    },
    {
      question: 'Our foremen will not do paperwork. Now what?',
      answer: [
        {
          kind: 'p',
          text: 'Then the process is asking the wrong person to do the wrong thing at the wrong time. When the field pushes back on a new form, that is usually information about the form, not a character problem. A foreman running a crew will not fill in a twelve-field screen at the end of a long day. Most will take a photo and answer three questions on a phone while they are standing at the work.',
        },
        {
          kind: 'p',
          text: 'Design the capture to fit the field, and move everything else to the office. The test is whether the person closest to the work can create the record in under a minute.',
        },
      ],
    },
    {
      question: 'Can government programs help pay for this?',
      answer: [
        {
          kind: 'p',
          text: 'Some can, and the rules are specific, so check before you plan around them.',
        },
        {
          kind: 'ul',
          items: [
            "**BDC's LIFT program** has a digital track that finances projects including ERP and CRM systems for Canadian businesses with at least $1 million in revenue, and requires a BDC plan. Its productivity track, for businesses with at least $5 million in revenue, lists construction among the eligible sectors and also requires a plan. Both can cover installation, integration and implementation costs tied to the technology investment.",
          ],
        },
        {
          kind: 'p',
          text: 'Program terms change. Confirm current eligibility with BDC before you rely on it.',
        },
      ],
    },
  ],

  firstStep: {
    heading: 'What the first step looks like',
    body: [
      'Start with the free 60-minute Leverage Audit. Bring the last report you sent to an owner, a client or your board, and one recent change order or T&M ticket, from the moment someone in the field said yes to the moment it was invoiced. We follow that change through your operation, count the handoffs, show you where it waited and where it was retyped, and rank what is worth fixing by what it returns. You keep a written summary either way.',
      'If the audit shows a bigger problem worth solving, the next step is the Leverage Diagnostic. It is a few days of work with your team, on site and on paper, and it turns the audit into an analysis of your highest-value targets and a one-year plan. The Diagnostic is scoped and quoted in writing after the audit, before any work starts.',
    ],
    ctaLabel: 'Request Free Leverage Audit',
  },

  sources: {
    heading: 'Sources',
    items: [
      {
        name: 'BDC, LIFT program page',
        url: 'https://www.bdc.ca/en/lift',
        urlLabel: 'bdc.ca/en/lift',
        accessed: '8 October 2026',
        accessedIso: '2026-10-08',
      },
    ],
  },

  relatedReading: [
    {
      href: '/industries/construction',
      title: 'Construction',
      blurb: 'Where construction companies lose margin they do not have to lose.',
    },
    {
      href: '/insights/hidden-cost-of-estimating',
      title: 'The hidden cost of estimating',
      blurb: 'What three project files revealed about where estimating time actually goes.',
    },
    {
      href: '/coordination-tax-calculator',
      title: 'Coordination Tax Calculator',
      blurb: 'Four inputs, sixty seconds, a first number on what coordination is costing you.',
    },
  ],
};
