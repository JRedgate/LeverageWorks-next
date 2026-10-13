import type { SystemsDecisionContent } from './types';

/**
 * Transcribed verbatim from
 * C:\LVRGWRKS-marketing\site-copy-2026-10\operations-process-improvement-alberta.md
 * status: DRAFT 2 13 Oct 2026, rewritten around change management and
 * undocumented processes at the founder's direction, APPROVED.
 *
 * Phase 4.1, not Phase 3. This is the core service page, so its footer link
 * sits under Expertise rather than Systems decisions, which its copy file
 * specifies and registry.ts enforces. It renders through the Phase 2 template
 * unchanged apart from the blockquote block, which this page is the first to
 * use.
 *
 * Three things come from the copy file's build notes rather than its prose,
 * and all three are instructions, not new words:
 *   - "choosing an ERP" and "implementations that went live without getting
 *     faster" carry links, in the software and automation answer
 *   - the owner quote renders as a blockquote, kept exactly as written,
 *     comma splice and quotation marks included, because it is verbatim
 *   - the footer label is "Process Improvement", under Expertise
 *
 * Do not edit the copy here. Edits go in the copy file and are transcribed back.
 * The copy file's closing "Internal links to add pointing at this page",
 * "Build notes for Claude Code" and "Notes for founder review" sections are not
 * page copy and are not transcribed.
 */
export const content: SystemsDecisionContent = {
  slug: 'operations-process-improvement-alberta',

  seoTitle: 'Process Improvement and Change for Alberta Companies | LVRGWRKS',
  metaDescription:
    'Most companies your size never wrote their processes down. Improve how the work runs with the people who do it, at a pace your team can absorb.',

  hero: {
    // Derived from this page's own frontmatter title, in the site's existing
    // pill format. Not new copy. Change the words here if you want different ones.
    eyebrow: 'Process Improvement and Change - Alberta Companies',
    h1Lines: [
      'Process improvement for Alberta companies',
      'that run on people, not paperwork',
    ],
    subhead: [
      "Most companies your size have never written their processes down. The work runs on the people who know how it's done, and for a long time that has been a strength.",
      'Improving it starts with those people, not with a flowchart or a new system. We learn how the work actually moves from the people doing it, change what is worth changing at a pace your team can absorb, and write down only what needs to be written down.',
    ],
    ctaLabel: 'Request Free Leverage Audit',
  },

  whoThisIsFor: {
    heading: 'Who this is for',
    items: [
      'Owners and general managers of Alberta companies with roughly 20 to 250 people, in manufacturing, construction, energy services and property management',
      "How the work gets done lives in people's heads, a few spreadsheets and your own memory",
      'Growth is straining the old way: things slip, the same questions get asked twice, and too much waits on one or two people',
      'You have tried a fix before, a new system or a binder of procedures, and the team drifted back to the way it was',
      'You want the operation to run better without losing the people who make it run',
    ],
  },

  questionsEyebrow: 'Questions and answers',
  questions: [
    {
      question: "Our processes aren't written down. Is that a problem?",
      answer: [
        {
          kind: 'p',
          text: 'Not on its own. It is how most companies get to your size. A few capable people solved problems as they came up, and the way they solved them became the way things are done. That got you here, and nobody should be made to feel it was a mistake.',
        },
        {
          kind: 'p',
          text: 'It starts to cost you in three situations. When you grow, because new people can only learn by watching someone who is already too busy. When you want to step back, because the business still needs you to remember how things work. And when someone leaves or retires, because what they knew leaves with them. That one is coming whether you plan for it or not. In Alberta construction alone, BuildForce Canada expects 43,400 workers, about a fifth of the 2024 workforce, to retire by 2034. In a company where nothing is written down, everything those people know about how the work gets done goes with them.',
        },
        {
          kind: 'p',
          text: 'Documentation is still not where we start. A binder of procedures nobody follows is worse than none, because it looks like the problem is solved. We start by following one real job through your operation with the people who touch it. What gets written down comes out of that, short and in their words, and only for the steps that break when the usual person is away.',
        },
      ],
    },
    {
      question: 'Why do process changes fail in companies our size?',
      answer: [
        {
          kind: 'p',
          text: 'Rarely because the new way was wrong. A 2024 review of 49 studies on why process improvement projects fail found the main causes were resistance to cultural change, weak support from leadership, inadequate training, poor communication and lack of resources. Not one of those is about the process itself. They are about how the change was handled.',
        },
        {
          kind: 'p',
          text: 'In owner-led companies it usually looks like this:',
        },
        {
          kind: 'ul',
          items: [
            '**People were told, not asked.** The new way was designed in an office and handed to the people who do the work, who could have pointed out what it missed.',
            "**The change landed on top of a full workload.** Nobody's day got lighter to make room for learning something new, so the old way won by default.",
            '**Nobody explained why.** The owner knew the reason. The crew, the office and the field heard only that things were changing again.',
            '**Pushback was treated as an attitude problem.** When experienced people resist a change, they are usually telling you something true about the work that the plan did not account for. We treat that as information, not as an obstacle to push through.',
            '**The answer to resistance was more pressure.** Mandates and incentives can get people to comply on the surface while they quietly stop telling you what is going wrong. That is how a change looks finished on paper and gets worked around on the floor.',
          ],
        },
      ],
    },
    {
      question: 'When does the change management part happen?',
      answer: [
        {
          kind: 'p',
          text: 'From the first conversation, not at rollout. Getting people to use a new way of working is not a final step you add once the design is done. Whether people adopt a change is decided by how it was built: who was asked, what they were told, and whether the new way fits the work as they actually do it.',
        },
        {
          kind: 'p',
          text: 'So the people who do the work help shape the change before anything is decided. We try it on one small piece of the operation first, with the people involved, adjust what does not fit, and only then widen it. It is slower at the start. It is faster after, because nothing has to be forced and nothing has to be redone.',
        },
      ],
    },
    {
      question: 'What about the people who know how everything works?',
      answer: [
        {
          kind: 'p',
          text: 'Every company your size has them. The estimator who knows which customers always change their minds. The office manager who knows where every file is. The superintendent the crews call before they call anyone else. They are among the most valuable people you have, and a process change can feel like a threat to them, because what they know is part of why they matter.',
        },
        {
          kind: 'p',
          text: 'So they come in first, not last. Their judgment goes into the new way of working rather than being written around it. The goal is not to make them replaceable. It is to stop them being the bottleneck for questions anyone could answer, so their time goes to the work only they can do. And a map of how work moves is never used to judge an individual. It shows where the work waits and gets retyped, which is almost always about how the pieces connect, not about who is doing the job.',
        },
      ],
    },
    {
      question: 'Will our people think this is about cutting jobs?',
      answer: [
        {
          kind: 'p',
          text: 'Some will wonder, and they deserve a straight answer early rather than a rumour later. Our work is aimed at the hours lost to waiting on answers and retyping the same information into different places, so the people you have can spend that time on work that needs them.',
        },
        {
          kind: 'p',
          text: 'That matches what Canadian businesses report. When Statistics Canada asked businesses that had started using AI what happened next, 89.4 percent reported no change in their employment levels, and the most common change they did make was developing new workflows. The change that mattered was in how the work flows, not in who does it.',
        },
      ],
    },
    {
      question: 'Where does the owner fit in?',
      answer: [
        {
          kind: 'p',
          text: 'In more than forty conversations with operators, one sentence came up again and again, usually said plainly:',
        },
        {
          // Verbatim, per the copy file's build note. The comma splice and the
          // quotation marks are the speaker's, not ours, and stay.
          kind: 'quote',
          // A template literal, because this one line carries both a double
          // quote and an apostrophe. Neither quoting style escapes cleanly, and
          // a verbatim quotation is the worst place to hide a backslash.
          text: `"I don't trust these people to run my company the way I can, I stay involved to ensure it stays on track."`,
        },
        {
          kind: 'p',
          text: "That is not a flaw. It is often the only reliable way the business has had to stay on track. But it means everything routes through you, and past about five direct reports a leader's day goes to coordinating other people's work rather than running the business.",
        },
        {
          kind: 'p',
          text: 'A change needs you visibly behind it. Your team will watch whether you hold to the new way when it is inconvenient. What it cannot do is depend on you for every decision, or you end up as the bottleneck in the new process too. Part of the work is deciding which calls stay with you and which can move to someone else, and then letting them make those calls. That is often the hardest part for an owner, because being the person who solves every problem is how the business was built. When a leader stops answering every question first, other people start stepping forward with answers of their own.',
        },
      ],
    },
    {
      question: 'How fast can we change how things work?',
      answer: [
        {
          kind: 'p',
          text: 'At the pace your team can absorb, which is usually slower than an owner wants and faster than the team expects. We change one thing at a time, start where the payoff is clear, and avoid your busiest season. We aim to have the first bottleneck solved within 60 days, because people believe in a change once they have seen one work, not when they are told it will.',
        },
      ],
    },
    {
      question: 'Where do software and automation fit?',
      answer: [
        {
          kind: 'p',
          // The two links are the copy file's build note. The words are its own.
          text: 'After the people and the process, never before. Once the work is mapped and the handoffs that should not exist are gone, some of what is left is worth automating. Often the answer is a setting in a system you already pay for. Sometimes it is a new system, and our pages on [choosing an ERP](/erp-selection-alberta-manufacturers) and on [implementations that went live without getting faster](/system-went-live-nothing-got-faster) cover that decision.',
        },
      ],
    },
  ],

  firstStep: {
    heading: 'What the first step looks like',
    body: [
      'The free 60-minute Leverage Audit is a conversation, not an inspection. Bring one recent job, order or project, from the moment it came in to the moment it was invoiced. We map how it actually moved, show you where it waited and where the same information was handled more than once, and rank what is worth fixing by what it returns. You keep a written summary either way.',
      'If the audit shows a bigger problem worth solving, the next step is the Leverage Diagnostic. It is a few days of work with you and your team, on site and on paper, talking with the people who do the work as well as the people who manage it. It turns the audit into an analysis of your highest-value targets and a one-year plan your team has had a hand in. The Diagnostic is scoped and quoted in writing after the audit, before any work starts.',
    ],
    ctaLabel: 'Request Free Leverage Audit',
  },

  sources: {
    heading: 'Sources',
    items: [
      {
        name: 'BuildForce Canada, Employment demands increase in Alberta to 2034 (2025 to 2034 Construction and Maintenance Looking Forward)',
        url: 'https://www.buildforce.ca/en/press-release/employment-demands-increase-in-alberta-to-2034-with-growth-greatest-in-the-non-residential-sector',
        urlLabel:
          'buildforce.ca/en/press-release/employment-demands-increase-in-alberta-to-2034-with-growth-greatest-in-the-non-residential-sector',
        accessed: '13 October 2026',
        accessedIso: '2026-10-13',
      },
      {
        name: 'Statistics Canada, Analysis on artificial intelligence use by businesses in Canada, second quarter of 2025',
        url: 'https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025008-eng.htm',
        urlLabel: 'www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025008-eng.htm',
        accessed: '13 October 2026',
        accessedIso: '2026-10-13',
      },
      {
        name: 'Bader, Antony, Jayaraman and others, Why do process improvement projects fail in organizations? A review and future research agenda, International Journal of Lean Six Sigma, vol. 15, no. 3, 2024',
        url: 'https://researchportal.northumbria.ac.uk/en/publications/why-do-process-improvement-projects-fail-in-organizations-a-revie',
        urlLabel:
          'researchportal.northumbria.ac.uk/en/publications/why-do-process-improvement-projects-fail-in-organizations-a-revie',
        accessed: '13 October 2026',
        accessedIso: '2026-10-13',
      },
    ],
  },

  relatedReading: [
    {
      href: '/insights/coordination-tax-mid-market',
      title: 'The coordination tax',
      blurb: 'Why mid-market companies grow revenue without growing margin.',
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
