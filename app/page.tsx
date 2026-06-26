'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Hero } from '@/components/Hero';
import { useBriefing } from '@/components/BriefingProvider';

export default function HomePage() {
  const { openBriefing } = useBriefing();
  const router = useRouter();

  return (
    <>
      <Hero onCtaClick={() => openBriefing()} onSecondCtaClick={() => router.push('/capabilities')} />

      {/* The Problem */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The Problem</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-8 leading-tight">
              Revenue grows 15%. Headcount grows 25%.<br />
              <span className="text-gray-400">The math never catches up.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              Most mid-market operators hit the same wall. As the business scales, the cost of holding it together compounds faster than the systems can keep up. We call it the coordination tax: the hidden labour your team burns every day moving data between platforms that do not talk to each other, chasing approvals that should take hours, and manually gluing together the workflows your software was supposed to automate. It is the single biggest reason a growing business adds revenue without adding margin, and it almost never shows up on a report.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-2xl mb-3">Decisions That Drag</div>
                <p className="text-gray-400 leading-relaxed">Decisions that should take hours take weeks. Approvals stack. Context gets lost between handoffs.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-2xl mb-3">Meeting and Reporting Overhead</div>
                <p className="text-gray-400 leading-relaxed">Meetings multiply. Reporting layers expand. Your best people burn capacity on manual work instead of driving growth.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-2xl mb-3">Headcount Outrunning Revenue</div>
                <p className="text-gray-400 leading-relaxed">You hire people to manage the overhead instead of drive the growth. Fixed costs rise faster than revenue.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-2xl mb-3">Margin That Leaks</div>
                <p className="text-gray-400 leading-relaxed">Profit stalls or slips even as the topline grows. The problem is in how the work flows, not how hard the team works.</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              You do not need another software subscription. You need an operating partner embedded inside your business who can see where the system is breaking and build the infrastructure to fix it.
            </p>
            <div className="bg-gradient-to-br from-brand-gold/10 to-brand-gold/5 border border-brand-gold/30 rounded-xl p-8 md:p-10 max-w-3xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-2 block">Free Tool</span>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-tight">Want to see what this is costing you?</h3>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 md:pl-16">
                Use the Coordination Tax Calculator to quantify the hidden labour cost your team is absorbing every week. Four inputs. Real numbers. Sixty seconds. No email required to see your result.
              </p>
              <div className="md:pl-16">
                <Link href="/coordination-tax-calculator" className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-lg group">
                  Try the Calculator
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The Solution</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-8 leading-tight">
              We do not bolt tools onto a broken process.<br />
              <span className="text-brand-slate italic">We rebuild how the work flows, and we stay.</span>
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-10">
              LVRGWRKS comes in as your operating partner. We find where the business spends effort without getting faster, redesign how the work flows, build the fix inside the operation using whatever the diagnosis calls for, and stay to run it and prove the return. The retainer is set against the value the work creates, not the hours it takes or the tools it uses. The same work that lifts your margin lifts what the business is worth when you sell it or bring in a partner. You own everything from day one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-brand-gold pl-6">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">We do not optimize broken structures</h3>
                <p className="text-brand-slate leading-relaxed">Most consultants make your existing system faster. We evaluate whether the structure itself is economically misaligned under growth. If it is, we redesign it. Automation or AI is used only where the diagnosis calls for it, never as the default.</p>
              </div>
              <div className="border-l-4 border-brand-gold pl-6">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">The moat is the operating model</h3>
                <p className="text-brand-slate leading-relaxed">Single-platform features get absorbed by your software vendors. What they cannot copy is the way your work flows across the whole operation. That is what we rebuild, and it is the part that holds.</p>
              </div>
              <div className="border-l-4 border-brand-gold pl-6">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">You own everything from day one</h3>
                <p className="text-brand-slate leading-relaxed">No vendor lock-in. No dependency on us to keep the systems running. The engagement can end at any time and the operation keeps running.</p>
              </div>
              <div className="border-l-4 border-brand-gold pl-6">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">We prove it every 30 days</h3>
                <p className="text-brand-slate leading-relaxed">Every month you receive a Value Creation Report documenting labour hours recovered, automation performance, and rolling ROI against your retainer. No guessing. We document it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Plan */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">How It Works</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-6 leading-tight">Four moves. One operating cadence.</h2>
            <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-16">Your first bottleneck is solved within 60 days of engagement start. The system compounds from there.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-xl border border-gray-100">
                <div className="text-brand-gold font-display font-bold text-5xl mb-4">01</div>
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-4">Diagnose</h3>
                <p className="text-brand-slate leading-relaxed">The 60-Minute Leverage Audit. We map every manual workflow in your operation, quantify the exact labour cost, and rank the fixes by return. You leave the call with a written summary of where your operations are bleeding capacity and what it is costing you. No cost. No commitment.</p>
              </div>
              <div className="bg-white p-10 rounded-xl border border-gray-100">
                <div className="text-brand-gold font-display font-bold text-5xl mb-4">02</div>
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-4">Design</h3>
                <p className="text-brand-slate leading-relaxed">We design the fix around how your operation actually runs. Sometimes that is automation or AI. Sometimes it is removing a handoff or moving a decision so it stops routing through you. Nothing gets ripped out and no new platform is forced on your team. You see the blueprint before any building begins.</p>
              </div>
              <div className="bg-white p-10 rounded-xl border border-gray-100">
                <div className="text-brand-gold font-display font-bold text-5xl mb-4">03</div>
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-4">Build</h3>
                <p className="text-brand-slate leading-relaxed">Our team builds and deploys the system. You review outputs, not code. Every workflow, automation, and AI agent built belongs to you from day one. The system runs on your infrastructure and keeps running whether or not LVRGWRKS is in the picture. Your first bottleneck is solved within 60 days.</p>
              </div>
              <div className="bg-white p-10 rounded-xl border border-gray-100">
                <div className="text-brand-gold font-display font-bold text-5xl mb-4">04</div>
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-4">Stay</h3>
                <p className="text-brand-slate leading-relaxed">This is not a project with an end date. We monitor, evolve, and expand the system as your business grows. Every month you receive a Value Creation Report showing exactly what was recovered: labour hours, automation performance, and rolling ROI against your retainer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The Return</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-10 leading-tight">Priced against the value, not the hours.</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              We set the retainer at roughly one third of the value an engagement is calculated to create. That builds the work to return two to three times what it costs, and we prove it every 30 days in a Value Creation Report. Above the Scale tier the share tapers, so the largest engagements are not charged a flat third. The figures below are illustrative. The Leverage Audit replaces them with your own number.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">~3x</div>
                <p className="text-gray-400 text-sm leading-relaxed">Return the work is built to deliver, value against retainer</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">1/3</div>
                <p className="text-gray-400 text-sm leading-relaxed">Of the value created, where the retainer is set</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">30 days</div>
                <p className="text-gray-400 text-sm leading-relaxed">How often we prove the value, in writing</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">Day 1</div>
                <p className="text-gray-400 text-sm leading-relaxed">When you own everything we build</p>
              </div>
            </div>
            <Link href="/coordination-tax-calculator" className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-white transition-all group">
              Try the Coordination Tax Calculator
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Engagement Tiers */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The Investment</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-6 leading-tight">
              Priced to the value it creates.<br />
              <span className="text-brand-slate italic">Not the hours. Not the tools.</span>
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-16">
              The retainer is set against the value an engagement is calculated to create, not the time it takes or the technology it uses. Three tiers, matched to where your constraints actually sit. You see the number that fits your operation in the audit, before anything is built.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-brand-surface border border-gray-100 rounded-xl p-6">
                <div className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-2">Step 1</div>
                <h4 className="font-display font-bold text-lg text-brand-navy mb-2">Leverage Audit</h4>
                <p className="text-brand-slate text-sm leading-relaxed">A free 60-minute working session. We map your highest-coordination workflows and show you where the margin is leaking. No cost, no commitment, a written summary to keep.</p>
              </div>
              <div className="bg-brand-surface border border-gray-100 rounded-xl p-6">
                <div className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-2">Step 2</div>
                <h4 className="font-display font-bold text-lg text-brand-navy mb-2">Leverage Diagnostic</h4>
                <p className="text-brand-slate text-sm leading-relaxed">A focused engagement that turns the audit into your own number. We quantify the coordination tax in your operation and design the fix, so you decide with the value in front of you.</p>
              </div>
              <div className="bg-brand-surface border border-gray-100 rounded-xl p-6">
                <div className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-2">Step 3</div>
                <h4 className="font-display font-bold text-lg text-brand-navy mb-2">Build and Operate</h4>
                <p className="text-brand-slate text-sm leading-relaxed">The monthly retainer below. We build the fix inside your operation, run it, and prove the value every 30 days. You own everything from day one.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-surface p-10 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">Ignite</h3>
                <p className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-6">Your operational proof point</p>
                <p className="text-brand-slate leading-relaxed mb-6">Get more out of the team you already have, starting with your biggest bottleneck. Your LVRGWRKS operating partner, your first build live within 60 days, and your Monthly Value Creation Report showing the return every 30 days.</p>
              </div>
              <div className="bg-brand-navy p-10 rounded-xl border-2 border-brand-gold relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full">Most Chosen</div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Build</h3>
                <p className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-6">An embedded operator</p>
                <p className="text-gray-300 leading-relaxed mb-6">Build the operational foundation that lets your business grow without your costs growing with it. Your LVRGWRKS operating partner embedded across departments, multiple builds run and managed as one system, and the return tracked across departments every month.</p>
              </div>
              <div className="bg-brand-surface p-10 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">Scale</h3>
                <p className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-6">A named operating partner</p>
                <p className="text-brand-slate leading-relaxed mb-6">A permanent operating partner inside your business, running your systems as you grow. Your LVRGWRKS operating partner alongside your leadership, unlimited build scope, and an executive-level Monthly Value Creation Report every 30 days.</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="/fractional-cto-calgary" className="inline-flex items-center gap-2 text-brand-navy font-bold text-sm uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all group">
                Explore Fractional CTO Services
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta-section" className="py-20 md:py-32 bg-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-5xl md:text-7xl text-brand-navy mb-8 tracking-tight">
            Stop paying the<br />
            <span className="text-brand-slate italic">coordination tax.</span>
          </h2>
          <p className="text-brand-slate max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            60 minutes. No cost. No commitment. We map your highest-friction workflows, quantify the exact labour cost of that pain, and outline where the fix sits before the call ends. You leave with a clear picture of where your operations are costing you more than they should, regardless of whether we work together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <button onClick={() => openBriefing()} className="bg-brand-navy text-white px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-gold transition-all shadow-xl hover:shadow-brand-gold/20">
              Request Free Leverage Audit
            </button>
            <Link href="/firm" className="text-brand-navy text-sm font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all">
              Read The Firm Thesis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


