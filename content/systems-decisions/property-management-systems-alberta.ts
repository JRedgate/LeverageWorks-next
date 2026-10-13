import type { SystemsDecisionContent } from './types';

/**
 * Transcribed verbatim from
 * C:\LVRGWRKS-marketing\site-copy-2026-10\property-management-systems-alberta.md
 * status: drafted 9 Oct 2026, revised 13 Oct per founder with notes 5 and 6
 * applied, APPROVED. The two revisions are in this transcription: the rent
 * chasing line carries no frequency claim, and the unsourced sentence about
 * availability to US accounts first is gone.
 *
 * Do not edit the copy here. Edits go in the copy file and are transcribed back.
 * The copy file's closing "Internal links to add pointing at this page" and
 * "Notes for founder review" sections are not page copy and are not transcribed.
 */
export const content: SystemsDecisionContent = {
  slug: 'property-management-systems-alberta',

  seoTitle: 'Property Management Software for Alberta Portfolios | LVRGWRKS',
  metaDescription:
    'Before you switch property management software, find where the work actually breaks: leasing intake, maintenance follow-up or owner updates.',

  hero: {
    // Derived from this page's own frontmatter title, in the site's existing
    // pill format. Not new copy. Change the words here if you want different ones.
    eyebrow: 'Property Management Software - Alberta Portfolios',
    h1Lines: [
      'Property management systems',
      'for Alberta portfolios',
    ],
    subhead: [
      'Most property managers looking at new software are fighting one of three things: more enquiries than anyone can answer, maintenance jobs nobody follows up on, and owners asking questions the system should already answer.',
      'New software can help with all three, or bury them in a new set of screens. The difference is knowing which one is costing you before you choose.',
    ],
    ctaLabel: 'Request Free Leverage Audit',
  },

  whoThisIsFor: {
    heading: 'Who this is for',
    items: [
      'Property management companies and owner-operators in Alberta with roughly 20 to 250 people, residential, condo or commercial',
      'Adding doors faster than you are adding staff',
      'Running Yardi, Buildium or another system, or a spreadsheet and a trust account',
      'Thinking about switching, and not sure a switch will fix what is actually wrong',
    ],
  },

  questionsEyebrow: 'Questions and answers',
  questions: [
    {
      question: 'Where does the work actually break?',
      answer: [
        {
          kind: 'p',
          text: 'In most portfolios, in one of three places.',
        },
        {
          kind: 'ul',
          items: [
            "**Leasing intake.** A listing goes up and the enquiries arrive by phone, text and email, each one read, judged and answered by a person. Demand is rarely the problem. Throughput is. The unit sits empty while someone works through the inbox, and that is the owner's money.",
            '**Maintenance follow-up.** When a job goes to plan, the system handles it cleanly. When a contractor never gets the work order, or gets it and does nothing, nothing in the system notices. The tenant does. They call to say nobody came, and only then does anyone chase. In that setup the tenant is your detection system.',
            '**Owner updates.** Owners write in to ask what is happening with a repair, a vacancy or a payment. The system usually holds the answer. It just does not send it. A setup that chases tenants for rent automatically and goes quiet when service fails has it backwards, because service is where owner trust is won and lost.',
          ],
        },
        {
          kind: 'p',
          text: 'Underneath all three are the same two costs. Waiting, when work sits until someone gets to it. And re-entry, when the same job detail gets typed into a task, then into the work order notes, then into the bill.',
        },
      ],
    },
    {
      question: 'How do we know which one is costing us most?',
      answer: [
        {
          kind: 'p',
          text: 'Three checks, none of which need new software:',
        },
        {
          kind: 'ol',
          items: [
            '**Leasing.** Take your last few vacancies. Count the enquiries on each listing and the days from listing to signed lease. Lots of enquiries and still weeks to sign means the problem is how enquiries are handled, not how many arrive.',
            '**Maintenance.** Pull your last twenty work orders. Count how many were chased because a tenant called, and how many times the same job detail was typed by hand from first call to paid bill.',
            "**Owners.** Count last month's owner emails and calls asking for something the system already knew.",
          ],
        },
        {
          kind: 'p',
          text: 'The biggest number tells you where to start.',
        },
      ],
    },
    {
      question: 'Do we need new software?',
      answer: [
        {
          kind: 'p',
          text: 'Often not first. Before you replace anything, find out what the one you own can already do. Property management systems have added a lot in the last few years, and features get bought with a plan and never switched on. Check whether yours already has:',
        },
        {
          kind: 'ul',
          items: [
            'Online rental applications with a review checklist',
            'Self-scheduled showings and automatic replies to enquiries',
            'A maintenance calendar with an overdue view',
            'Bills generated directly from work orders',
            'An owner portal with maintenance history, statements and documents',
            'An API, so your other systems can connect to it',
          ],
        },
        {
          kind: 'p',
          text: "Some of these sit only on a vendor's higher plans, so check your plan as well as the product. A one-hour call with your vendor's support team, with this list in hand, is often the most valuable hour in the whole decision.",
        },
      ],
    },
    {
      question: 'What should an Alberta operator check that a system built for the US market might miss?',
      answer: [
        {
          kind: 'ul',
          items: [
            '**Where your listings go.** Check which listing sites the system posts to, and whether they are the ones your renters actually use, such as Rentfaster and Kijiji. If they are not, keep the listing channel that works and fix the intake behind it: an application link on the ad, qualifying questions and self-scheduled showings in the system, so enquiries stop landing as one-off conversations.',
            '**Tenant screening.** Ask exactly what screening the system can run on a Canadian applicant, and what still has to happen outside it.',
            '**Which features are available in Canada.** Ask feature by feature.',
            '**Trust accounting.** If you manage property for other owners, the Real Estate Council of Alberta requires a property management licence and brokerage registration, and its practice reviews look at how a brokerage reconciles and accounts for trust money. Ask how the system handles trust accounting and the reconciliations your broker signs off.',
            '**Rent collection.** Ask how pre-authorized debit and payments work with Canadian banks, and what each transaction costs.',
          ],
        },
      ],
    },
    {
      question: 'What does a working maintenance process look like?',
      answer: [
        {
          kind: 'p',
          text: 'The ones that work tend to share a few things:',
        },
        {
          kind: 'ul',
          items: [
            '**One record per request, created when the tenant first reports it**, whichever channel it arrives on',
            '**Every work order has an owner and a due date**, and someone looks at the overdue list every day',
            '**The contractor confirms they have it.** No confirmation within a set time, and it gets chased by name',
            '**The tenant and the owner hear about progress automatically** at the steps that matter to them',
            '**The bill comes from the work order**, not from someone retyping it',
          ],
        },
        {
          kind: 'p',
          text: 'None of that is exotic. Most of it is a setting, a rule or a habit, and many current systems can already support it.',
        },
      ],
    },
    {
      question: 'What about the AI assistants vendors are selling for leasing and maintenance?',
      answer: [
        {
          kind: 'p',
          text: 'Judge them like any other feature. Does it fix the step that is actually costing you? Is it included in your plan or an extra charge? Is it available to Canadian accounts? An assistant that answers enquiries faster helps a leasing bottleneck. It does nothing for a maintenance job no contractor ever picked up.',
        },
      ],
    },
    {
      question: 'Should we switch systems?',
      answer: [
        {
          kind: 'p',
          text: 'Switch when the one you have cannot do what your portfolio needs, the vendor has stopped developing it, or nobody local can support it. Do not switch to escape a process problem. If enquiries are handled one at a time and nobody owns overdue work orders, the new system will inherit both, along with a data migration and a retraining of every staff member.',
        },
        {
          kind: 'p',
          text: "If you do switch, settle how leasing, maintenance and owner updates should work first, then test every system against those three, on your hardest property, not the demo's.",
        },
      ],
    },
  ],

  firstStep: {
    heading: 'What the first step looks like',
    body: [
      "Start with the free 60-minute Leverage Audit. Bring the last report you sent to an owner, and either your most recent vacancy from listing to signed lease, or one maintenance job from the tenant's first call to the paid bill. We follow it through your operation, count the handoffs, show you where it waited and where it was retyped, and rank what is worth fixing by what it returns. You keep a written summary either way.",
      'If the audit shows a bigger problem worth solving, the next step is the Leverage Diagnostic. It is a few days of work with your team, on site and on paper, and it turns the audit into an analysis of your highest-value targets and a one-year plan, including what the system you own can already do and what it cannot. The Diagnostic is scoped and quoted in writing after the audit, before any work starts.',
    ],
    ctaLabel: 'Request Free Leverage Audit',
  },

  sources: {
    heading: 'Sources',
    items: [
      {
        name: 'Real Estate Council of Alberta, Licence Types',
        url: 'https://www.reca.ca/which-industry',
        urlLabel: 'reca.ca/which-industry',
        accessed: '9 October 2026',
        accessedIso: '2026-10-09',
      },
      {
        name: 'Real Estate Council of Alberta, Practice Review',
        url: 'https://www.reca.ca/practice-review',
        urlLabel: 'reca.ca/practice-review',
        accessed: '9 October 2026',
        accessedIso: '2026-10-09',
      },
    ],
  },

  relatedReading: [
    {
      href: '/industries/property-management',
      title: 'Property management',
      blurb: 'Alberta deposit, rent increase and trust reporting dates, and where coordination costs build up.',
    },
    {
      href: '/system-went-live-nothing-got-faster',
      title: 'The system went live and nothing got faster',
      blurb: 'How to find out why, and fix it without starting over.',
    },
    {
      href: '/coordination-tax-calculator',
      title: 'Coordination Tax Calculator',
      blurb: 'Four inputs, sixty seconds, a first number on what coordination is costing you.',
    },
  ],
};
