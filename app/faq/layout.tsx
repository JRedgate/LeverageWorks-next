import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Fractional CTO FAQ | Calgary & Alberta | LVRGWRKS' },
  description: 'The questions owners actually ask about fractional CTO engagements, pricing basis, timelines, and scope in Calgary and across Alberta.',
  alternates: { canonical: '/faq' },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the coordination tax, and how do I work out what ours costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is the labour your team burns every day moving work and information between systems and people that do not line up. Re-keying the same data into a second platform. Chasing an approval that is sitting in someone's inbox. Rebuilding a report because two systems disagree. None of it appears as a line on your P&L, which is exactly why it grows unchecked. It is also the single biggest reason a company adds revenue without adding margin. Revenue grows 15 percent, headcount grows 25 percent, and nobody can point at where the gap went. The Coordination Tax Calculator gives you a first number in about sixty seconds from four inputs. The Leverage Audit gives you the real one."
      }
    },
    {
      "@type": "Question",
      "name": "When does a company our size need a fractional CTO instead of promoting someone internally or hiring an operations manager?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Promote internally when the problem is capacity. Hire a fractional CTO when the problem is structure. An operations manager makes the current system run better. That is worth doing, and if your workflows are sound but under-resourced, it is the right call and it is cheaper. What an internal promotion cannot usually do is tell you the structure itself is wrong, because the person you promoted helped build it. A fractional CTO comes in without that history, has seen the same pattern in twenty other operations, and is not competing for a job at the end of it."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with companies outside Calgary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We work across Alberta and Western Canada. Calgary is home and a good share of the work is here, but the operational patterns we fix are not local to one city. Most of the engagement runs remotely with on-site time at the points where it matters: the audit, the working sessions, and go-live. If you are outside Western Canada, say so early and we will tell you honestly whether we are the right fit."
      }
    },
    {
      "@type": "Question",
      "name": "How is this different from a consultant who gives us a report and leaves?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A report is a diagnosis. We are not in the diagnosis business, we are in the it-actually-changed business. The traditional model ends where the hard part starts. You get a document, a set of recommendations, and the entire job of implementation lands back on the team that was already too busy to fix it. That is why most of those reports sit in a drawer. We diagnose, design, build the fix inside your operation, and stay to run it. Every 30 days you get a Value Creation Report showing what the system actually produced, not what it was supposed to."
      }
    },
    {
      "@type": "Question",
      "name": "We already tried AI and it did not stick. Why would this be different?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because most AI projects fail on the process, not the technology. The common pattern is a tool bought, a pilot run, some enthusiasm, and then nothing changes because the tool was laid on top of a workflow that was already broken. Better software over a bad process gives you the same coordination cost with a nicer interface. We start with how the work flows, and automation or AI gets used only where the diagnosis calls for it. Sometimes the fix is removing a handoff or moving a decision so it stops routing through you, and no AI is involved at all."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know this will actually work in our business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do not, and neither do we, until we have looked. That is what the audit is for. We will not tell you it will work before we have seen your operation. The free 60-minute Leverage Audit maps your highest-coordination workflows, puts a real dollar figure on the labour cost, and ranks the fixes by return. You leave with that in writing whether or not you engage us. If the numbers do not support roughly a three to one return, we say so and we do not take the work. That has happened, and it will happen again."
      }
    },
    {
      "@type": "Question",
      "name": "Why do you price against value created instead of charging by the hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because an hourly rate pays us to be slow, and you should not have to audit a timesheet to know whether you got your money's worth. The retainer is set at roughly one third of the annual value the work creates. It runs from $4,500 to $8,500 a month and it is capped at $8,500, so if the system produces far more than expected, the extra is yours and the bill does not move. There is no upfront fee and no hardware cost. The minimum term is three months from go-live, not from signature, so you are committing after you have seen it working rather than before."
      }
    },
    {
      "@type": "Question",
      "name": "Will our software vendor just build this into their product in a year or two?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some of it, yes. That is the right question to ask and most people do not ask it. Single-platform features do get absorbed. If the whole value of a fix is one button inside one piece of software, assume the vendor ships it eventually and do not pay someone to build it. What vendors cannot copy is the way work flows across your whole operation, because no vendor can see across all of your systems and none of them are incentivised to. That is the layer we rebuild, and it is the part that holds."
      }
    },
    {
      "@type": "Question",
      "name": "What happens to our team when we rebuild how the work flows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They stop doing the parts of their job that nobody would miss. The goal is getting more out of the team you already have, not fewer of them. In practice most clients use the recovered capacity to avoid a hire they were about to make, or to move experienced people onto work that actually earns. The change itself is real and we do not pretend otherwise. People have opinions about how their work is done and they should. We involve the people doing the work early, because a workflow designed without them fails on contact with reality."
      }
    },
    {
      "@type": "Question",
      "name": "How much of our team's time will this take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Less than you think during the build, more than you think at go-live. Through discovery and build we need short working sessions rather than sustained involvement, usually a couple of hours a week from the people closest to the workflow. The demand rises at go-live and in the first month after, because that is when the system meets real conditions and needs tuning against real judgment. That time is the single largest driver of whether a system gets trusted and used, so we would rather ask for it plainly than discover later that nobody had it."
      }
    },
    {
      "@type": "Question",
      "name": "What access do you need to our systems, and how is that controlled?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Read access first, scoped narrowly, and nothing beyond what the specific build requires. Discovery usually needs read access to the systems in the workflow being mapped. Build needs API access to those specific systems, granted per system rather than as blanket administrative rights. We work with your IT contact on scoping and we do not ask for credentials outside what the build touches. Where a client's own customers impose security requirements, those get disclosed at intake and the deployment gets designed around them, including running entirely inside your own infrastructure where that is what the requirement calls for."
      }
    },
    {
      "@type": "Question",
      "name": "Does our company data have to stay in Canada if we use AI tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually not, and this is the most commonly misunderstood point in the category. No Canadian federal law requires private-sector commercial data to be stored in Canada. PIPEDA and Alberta's PIPA are accountability-based rather than location-based: you stay responsible for the data wherever it is processed, and you have to provide comparable protection and be transparent about cross-border transfers. Real residency obligations, when they exist, come from somewhere else. Sector rules such as Alberta's Health Information Act, a contract with your own customer, or a commitment in your own published privacy policy. Those are worth checking before anyone tells you the law says something it does not."
      }
    },
    {
      "@type": "Question",
      "name": "Is there still a government grant that helps pay for this?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most Alberta mid-market companies, no. Be careful of advice that says otherwise. The Canada Digital Adoption Program, which is the grant most people are thinking of, stopped accepting new applicants in February 2024. A lot of content still online treats it as live. Federal AI funding that does exist is aimed largely at companies building AI products rather than adopting them. SR&ED is worth a conversation only in narrow cases, because the Canada Revenue Agency does not treat calling an API or integrating a vendor's model as resolving technological uncertainty. If a firm leads with grant money as the reason to proceed, ask them to name the program and its current intake status."
      }
    }
  ]
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
