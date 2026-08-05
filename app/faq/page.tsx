import React from 'react';
import Link from 'next/link';

export default function FaqPage() {
  return (
    <>
      <header className="relative pt-40 pb-20 md:pt-56 md:pb-28 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Questions</span>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
              The questions owners <span className="text-brand-slate italic">actually ask.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl">
              These are the questions that come up in the room, in roughly the order they come up. Answered plainly, including the ones where the honest answer is no.
            </p>
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-10">
              <div className="border-b border-gray-100 pb-10">
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4 leading-snug">What is the coordination tax, and how do I work out what ours costs?</h3>
                <p className="text-brand-slate leading-relaxed text-lg mb-4">It is the labour your team burns every day moving work and information between systems and people that do not line up. Re-keying the same data into a second platform. Chasing an approval that is sitting in someone&apos;s inbox. Rebuilding a report because two systems disagree. None of it appears as a line on your P&L, which is exactly why it grows unchecked.</p>
                <p className="text-brand-slate leading-relaxed">It is also the single biggest reason a company adds revenue without adding margin. Revenue grows 15 percent, headcount grows 25 percent, and nobody can point at where the gap went. The Coordination Tax Calculator gives you a first number in about sixty seconds from four inputs. The Leverage Audit gives you the real one.</p>
              </div>
              <div className="border-b border-gray-100 pb-10">
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4 leading-snug">When does a company our size need a fractional CTO instead of promoting someone internally or hiring an operations manager?</h3>
                <p className="text-brand-slate leading-relaxed text-lg mb-4">Promote internally when the problem is capacity. Hire a fractional CTO when the problem is structure.</p>
                <p className="text-brand-slate leading-relaxed">An operations manager makes the current system run better. That is worth doing, and if your workflows are sound but under-resourced, it is the right call and it is cheaper. What an internal promotion cannot usually do is tell you the structure itself is wrong, because the person you promoted helped build it. A fractional CTO comes in without that history, has seen the same pattern in twenty other operations, and is not competing for a job at the end of it.</p>
              </div>
              <div className="border-b border-gray-100 pb-10">
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4 leading-snug">Do you work with companies outside Calgary?</h3>
                <p className="text-brand-slate leading-relaxed text-lg mb-4">Yes. We work across Alberta and Western Canada.</p>
                <p className="text-brand-slate leading-relaxed">Calgary is home and a good share of the work is here, but the operational patterns we fix are not local to one city. Most of the engagement runs remotely with on-site time at the points where it matters: the audit, the working sessions, and go-live. If you are outside Western Canada, say so early and we will tell you honestly whether we are the right fit.</p>
              </div>
              <div className="border-b border-gray-100 pb-10">
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4 leading-snug">How is this different from a consultant who gives us a report and leaves?</h3>
                <p className="text-brand-slate leading-relaxed text-lg mb-4">A report is a diagnosis. We are not in the diagnosis business, we are in the it-actually-changed business.</p>
                <p className="text-brand-slate leading-relaxed">The traditional model ends where the hard part starts. You get a document, a set of recommendations, and the entire job of implementation lands back on the team that was already too busy to fix it. That is why most of those reports sit in a drawer. We diagnose, design, build the fix inside your operation, and stay to run it. Every 30 days you get a Value Creation Report showing what the system actually produced, not what it was supposed to.</p>
              </div>
              <div className="border-b border-gray-100 pb-10">
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4 leading-snug">We already tried AI and it did not stick. Why would this be different?</h3>
                <p className="text-brand-slate leading-relaxed text-lg mb-4">Because most AI projects fail on the process, not the technology.</p>
                <p className="text-brand-slate leading-relaxed">The common pattern is a tool bought, a pilot run, some enthusiasm, and then nothing changes because the tool was laid on top of a workflow that was already broken. Better software over a bad process gives you the same coordination cost with a nicer interface. We start with how the work flows, and automation or AI gets used only where the diagnosis calls for it. Sometimes the fix is removing a handoff or moving a decision so it stops routing through you, and no AI is involved at all.</p>
              </div>
              <div className="border-b border-gray-100 pb-10">
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4 leading-snug">How do I know this will actually work in our business?</h3>
                <p className="text-brand-slate leading-relaxed text-lg mb-4">You do not, and neither do we, until we have looked. That is what the audit is for.</p>
                <p className="text-brand-slate leading-relaxed">We will not tell you it will work before we have seen your operation. The free 60-minute Leverage Audit maps your highest-coordination workflows, puts a real dollar figure on the labour cost, and ranks the fixes by return. You leave with that in writing whether or not you engage us. If the numbers do not support roughly a three to one return, we say so and we do not take the work. That has happened, and it will happen again.</p>
              </div>
              <div className="border-b border-gray-100 pb-10">
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4 leading-snug">Why do you price against value created instead of charging by the hour?</h3>
                <p className="text-brand-slate leading-relaxed text-lg mb-4">Because an hourly rate pays us to be slow, and you should not have to audit a timesheet to know whether you got your money&apos;s worth.</p>
                <p className="text-brand-slate leading-relaxed">The retainer is set at roughly one third of the annual value the work creates. It runs from $4,500 to $8,500 a month and it is capped at $8,500, so if the system produces far more than expected, the extra is yours and the bill does not move. There is no upfront fee and no hardware cost. The minimum term is three months from go-live, not from signature, so you are committing after you have seen it working rather than before.</p>
              </div>
              <div className="border-b border-gray-100 pb-10">
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4 leading-snug">Will our software vendor just build this into their product in a year or two?</h3>
                <p className="text-brand-slate leading-relaxed text-lg mb-4">Some of it, yes. That is the right question to ask and most people do not ask it.</p>
                <p className="text-brand-slate leading-relaxed">Single-platform features do get absorbed. If the whole value of a fix is one button inside one piece of software, assume the vendor ships it eventually and do not pay someone to build it. What vendors cannot copy is the way work flows across your whole operation, because no vendor can see across all of your systems and none of them are incentivised to. That is the layer we rebuild, and it is the part that holds.</p>
              </div>
              <div className="border-b border-gray-100 pb-10">
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4 leading-snug">What happens to our team when we rebuild how the work flows?</h3>
                <p className="text-brand-slate leading-relaxed text-lg mb-4">They stop doing the parts of their job that nobody would miss.</p>
                <p className="text-brand-slate leading-relaxed">The goal is getting more out of the team you already have, not fewer of them. In practice most clients use the recovered capacity to avoid a hire they were about to make, or to move experienced people onto work that actually earns. The change itself is real and we do not pretend otherwise. People have opinions about how their work is done and they should. We involve the people doing the work early, because a workflow designed without them fails on contact with reality.</p>
              </div>
              <div className="border-b border-gray-100 pb-10">
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4 leading-snug">How much of our team&apos;s time will this take?</h3>
                <p className="text-brand-slate leading-relaxed text-lg mb-4">Less than you think during the build, more than you think at go-live.</p>
                <p className="text-brand-slate leading-relaxed">Through discovery and build we need short working sessions rather than sustained involvement, usually a couple of hours a week from the people closest to the workflow. The demand rises at go-live and in the first month after, because that is when the system meets real conditions and needs tuning against real judgment. That time is the single largest driver of whether a system gets trusted and used, so we would rather ask for it plainly than discover later that nobody had it.</p>
              </div>
              <div className="border-b border-gray-100 pb-10">
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4 leading-snug">What access do you need to our systems, and how is that controlled?</h3>
                <p className="text-brand-slate leading-relaxed text-lg mb-4">Read access first, scoped narrowly, and nothing beyond what the specific build requires.</p>
                <p className="text-brand-slate leading-relaxed">Discovery usually needs read access to the systems in the workflow being mapped. Build needs API access to those specific systems, granted per system rather than as blanket administrative rights. We work with your IT contact on scoping and we do not ask for credentials outside what the build touches. Where a client&apos;s own customers impose security requirements, those get disclosed at intake and the deployment gets designed around them, including running entirely inside your own infrastructure where that is what the requirement calls for.</p>
              </div>
              <div className="border-b border-gray-100 pb-10">
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4 leading-snug">Does our company data have to stay in Canada if we use AI tools?</h3>
                <p className="text-brand-slate leading-relaxed text-lg mb-4">Usually not, and this is the most commonly misunderstood point in the category.</p>
                <p className="text-brand-slate leading-relaxed">No Canadian federal law requires private-sector commercial data to be stored in Canada. PIPEDA and Alberta&apos;s PIPA are accountability-based rather than location-based: you stay responsible for the data wherever it is processed, and you have to provide comparable protection and be transparent about cross-border transfers. Real residency obligations, when they exist, come from somewhere else. Sector rules such as Alberta&apos;s Health Information Act, a contract with your own customer, or a commitment in your own published privacy policy. Those are worth checking before anyone tells you the law says something it does not.</p>
              </div>
              <div className="border-b border-gray-100 pb-10">
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-4 leading-snug">Is there still a government grant that helps pay for this?</h3>
                <p className="text-brand-slate leading-relaxed text-lg mb-4">For most Alberta mid-market companies, no. Be careful of advice that says otherwise.</p>
                <p className="text-brand-slate leading-relaxed">The Canada Digital Adoption Program, which is the grant most people are thinking of, stopped accepting new applicants in February 2024. A lot of content still online treats it as live. Federal AI funding that does exist is aimed largely at companies building AI products rather than adopting them. SR&ED is worth a conversation only in narrow cases, because the Canada Revenue Agency does not treat calling an API or integrating a vendor&apos;s model as resolving technological uncertainty. If a firm leads with grant money as the reason to proceed, ask them to name the program and its current intake status.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 leading-tight">Still have a question we did not answer?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            Ask it in the audit. Sixty minutes, no cost, no commitment, and you leave with a written summary of where your operation is losing capacity and what it is costing you.
          </p>
          <Link href="/leverage-audit" className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl">
            Request Free Leverage Audit
          </Link>
        </div>
      </section>
    </>
  );
}
