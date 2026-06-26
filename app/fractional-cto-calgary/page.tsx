'use client';

import React from 'react';
import Link from 'next/link';
import { useBriefing } from '@/components/BriefingProvider';
import type { Metadata } from 'next';

export default function FractionalCTOCalgaryPage() {
  const { openBriefing } = useBriefing();

  return (
    <>
      <header className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Fractional CTO Services - Calgary, AB</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">
              Your operation has outgrown<br />
              <span className="text-brand-slate italic">the way it is run.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-6">Revenue grew. Margin did not move with it, and headcount climbed to hold the operation together. Your best people spend their days moving work and information between systems and people that do not line up. That labour never shows up on a report, and it is the biggest single reason a growing company adds revenue without adding margin.</p>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-10">You do not need another software subscription. You need an operating partner embedded inside your business who can see where the work is breaking and rebuild how it flows. That is what LVRGWRKS does, and we stay to run it.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/leverage-audit" className="bg-brand-navy text-white px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg group">
                Book a Free Leverage Audit
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/capabilities" className="border-2 border-brand-navy text-brand-navy px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-navy hover:text-white transition-all">View Capabilities</Link>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Problem</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Why growing companies stop growing efficiently</h2>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-6">Most mid-market companies in Alberta hit the same wall. Revenue grows 15%. Headcount grows 25%. The math never catches up. The issue is not effort. It is structural design.</p>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl">As organizations scale, the cost of holding the business together compounds faster than the systems can keep up. Decision rights blur. Handoffs multiply. Reporting layers expand. What begins as necessary coordination becomes overhead. We call it the coordination tax, and it is the biggest single reason margin stalls while revenue keeps climbing across Alberta and Western Canada.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4 mx-auto"><span className="text-brand-gold font-display font-bold text-lg">01</span></div>
                <h3 className="font-display font-bold text-base text-brand-navy mb-2">Decisions That Drag</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Decisions that should take hours take weeks. Approvals stack. Context gets lost between handoffs.</p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4 mx-auto"><span className="text-brand-gold font-display font-bold text-lg">02</span></div>
                <h3 className="font-display font-bold text-base text-brand-navy mb-2">Meeting and Reporting Overhead</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Meetings multiply. Reporting layers expand. The work of coordinating eats the capacity your growth needs.</p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4 mx-auto"><span className="text-brand-gold font-display font-bold text-lg">03</span></div>
                <h3 className="font-display font-bold text-base text-brand-navy mb-2">Headcount Outrunning Revenue</h3>
                <p className="text-brand-slate text-sm leading-relaxed">You hire people to manage the overhead instead of drive the growth. Fixed costs rise faster than revenue.</p>
              </div>
              <div className="bg-brand-navy p-8 rounded-xl text-center">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4 mx-auto"><span className="text-brand-gold font-display font-bold text-lg">04</span></div>
                <h3 className="font-display font-bold text-base text-white mb-2">Margin That Leaks</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Profit stalls or slips even as the topline grows. The problem is in how the work flows, not how hard the team works.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The Solution</span>
            <h2 className="font-display font-bold text-4xl mb-6 leading-tight">We do not bolt tools onto a broken process. We rebuild how the work flows, and we stay.</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">LVRGWRKS comes in as your operating partner. We find where the business spends effort without getting faster, redesign how the work flows, build the fix inside the operation using whatever the diagnosis calls for, and stay to run it and prove the return. The retainer is set against the value the work creates, not the hours it takes or the tools it uses. The same work that lifts your margin lifts what the business is worth when you sell it or bring in a partner. You own everything from day one.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">We do not optimize within broken structures</h3>
                <p className="text-gray-300 leading-relaxed">Most consultants make your existing system faster. We look at whether the structure itself stops paying off as you grow. If it does, we redesign it. Automation or AI is used only where the diagnosis calls for it, never as the default.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">The moat is the operating model</h3>
                <p className="text-gray-300 leading-relaxed">Single-platform features get absorbed by your software vendors. What they cannot copy is the way your work flows across the whole operation. That is what we rebuild, you own every part of it from day one, and it is the part that holds.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">We prove it every 30 days</h3>
                <p className="text-gray-300 leading-relaxed">Every month you receive a Value Creation Report documenting the exact labour hours recovered, automation performance, and your rolling return on investment. We do not guess whether we are saving you money. We document it.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">We stay</h3>
                <p className="text-gray-300 leading-relaxed">This is not a project with an end date. As the work improves, the bottleneck moves. Staying embedded keeps the coordination tax from creeping back in new forms as the business keeps growing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Process</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-4">Four moves. One operating cadence.</h2>
              <p className="text-brand-slate text-lg max-w-2xl mx-auto">Your first bottleneck is solved within 60 days. The work continues from there.</p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4"><span className="text-brand-gold font-display font-bold text-2xl">01</span></div>
                    <h3 className="font-display font-bold text-xl text-brand-navy">Diagnose</h3>
                  </div>
                  <div className="md:w-3/4"><p className="text-brand-slate leading-relaxed text-lg">The 60-Minute Leverage Audit. We map your highest-friction workflows and quantify the exact labour cost of that pain. You leave the call with a written summary of where your operations are bleeding capacity and what it is costing you in real dollars. No cost. No commitment.</p></div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4"><span className="text-brand-gold font-display font-bold text-2xl">02</span></div>
                    <h3 className="font-display font-bold text-xl text-brand-navy">Design</h3>
                  </div>
                  <div className="md:w-3/4"><p className="text-brand-slate leading-relaxed text-lg">This is the paid Leverage Diagnostic. We quantify the coordination tax in your own numbers and design the fix around how your operation actually runs. Sometimes that is automation or AI. Sometimes it is removing a handoff or moving a decision so it stops routing through you. Nothing gets ripped out and no new platform is forced on your team. You see the blueprint, and your own number, before any building begins.</p></div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4"><span className="text-brand-gold font-display font-bold text-2xl">03</span></div>
                    <h3 className="font-display font-bold text-xl text-brand-navy">Build</h3>
                  </div>
                  <div className="md:w-3/4"><p className="text-brand-slate leading-relaxed text-lg">Our team executes the builds. You review outputs, not code. Every process change, automation, and agent we build belongs to you from day one. No vendor lock-in. No dependency on LVRGWRKS to keep the lights on.</p></div>
                </div>
              </div>
              <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4"><span className="text-brand-gold font-display font-bold text-2xl">04</span></div>
                    <h3 className="font-display font-bold text-xl text-white">Stay</h3>
                  </div>
                  <div className="md:w-3/4"><p className="text-gray-300 leading-relaxed text-lg">We manage, monitor, and evolve your systems as your business grows. Every month you receive a Value Creation Report: labour hours recovered, automation performance, rolling ROI against your retainer. If the numbers do not justify the partnership, you will know before we do.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Who We Partner With</span>
                <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Built for Alberta operators, not startup ecosystems</h2>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">LVRGWRKS partners with founders, owners, and COOs of mid-market companies across Calgary, Alberta, and Western Canada. Typically 20 to 250 employees, $5M to $150M in revenue, operating in industries where the work is complex, the processes are real, and the margin pressure is constant.</p>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">The Alberta mid-market operates differently from tech-centric markets. You need a partner who understands the operational realities of energy, construction, and industrial services, not someone who learned business in a software startup. LVRGWRKS was founded in Calgary, shaped by 20 years of operational experience across manufacturing, industrial services, and capital programs, and grounded in the executive and financial frameworks of the Haskayne School of Business at the University of Calgary.</p>
                <p className="text-brand-slate text-lg leading-relaxed">If your team is busy but the business is not moving faster, that gap is exactly where we work.</p>
              </div>
              <div className="space-y-4">
                <div className="bg-brand-surface p-6 rounded-xl border border-gray-100 flex items-center gap-6">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-navy">Construction and General Contracting</h3>
                    <p className="text-brand-slate text-sm mt-1">Project coordination, subcontractor management, cost tracking across multi-site operations</p>
                  </div>
                </div>
                <div className="bg-brand-surface p-6 rounded-xl border border-gray-100 flex items-center gap-6">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-navy">Property Management</h3>
                    <p className="text-brand-slate text-sm mt-1">Disconnected billing, maintenance, and tenant systems recovered into a single operating layer</p>
                  </div>
                </div>
                <div className="bg-brand-surface p-6 rounded-xl border border-gray-100 flex items-center gap-6">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-navy">Manufacturing</h3>
                    <p className="text-brand-slate text-sm mt-1">Production coordination, quality systems, and operational reporting rebuilt around constraint throughput</p>
                  </div>
                </div>
                <div className="bg-brand-surface p-6 rounded-xl border border-gray-100 flex items-center gap-6">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-navy">Energy Services</h3>
                    <p className="text-brand-slate text-sm mt-1">Field operations, dispatch, compliance tracking, and reporting across distributed workforces</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Investment</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-4">Priced to the value it creates. Not the hours. Not the tools.</h2>
              <p className="text-brand-slate text-lg max-w-2xl mx-auto">The retainer is set against the value an engagement is calculated to create, not the time it takes or the technology it uses. Three tiers, matched to where your constraints actually sit. You see the number that fits your operation in the Diagnostic, before anything is built, and the work is built to return two to three times what it costs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">Ignite</h3>
                <p className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-6">Your operational proof point</p>
                <p className="text-brand-slate text-sm leading-relaxed mb-6">Get more out of the team you already have, starting with your biggest bottleneck.</p>
                <p className="text-brand-slate text-sm leading-relaxed"><span className="font-bold text-brand-navy">What you get:</span> Your LVRGWRKS operating partner, your first build live within 60 days, and your Monthly Value Creation Report showing the return every 30 days.</p>
              </div>
              <div className="bg-brand-navy p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">Most Chosen</div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Build</h3>
                <p className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-6">An embedded operator</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">Build the operational foundation that lets your business grow without your costs growing with it.</p>
                <p className="text-gray-300 text-sm leading-relaxed"><span className="font-bold text-white">What you get:</span> Your LVRGWRKS operating partner embedded across departments, multiple builds run and managed as one system, and the return tracked across departments every month.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">Scale</h3>
                <p className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-6">A named operating partner</p>
                <p className="text-brand-slate text-sm leading-relaxed mb-6">A permanent operating partner inside your business, managing your systems as you grow.</p>
                <p className="text-brand-slate text-sm leading-relaxed"><span className="font-bold text-brand-navy">What you get:</span> Your LVRGWRKS operating partner alongside your leadership. Unlimited build scope, no project caps. Executive-level Monthly Value Creation Report every 30 days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Start with a free Leverage Audit.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-lg leading-relaxed">60 minutes. No cost. No commitment. We map your highest-friction workflows, quantify the exact labour cost of that pain, and outline where the fix sits before the call ends.</p>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">You leave with a clear picture of where your operations are costing you more than they should, regardless of whether we work together.</p>
          <Link href="/leverage-audit" className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl group">
            Book Your Leverage Audit
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <p className="text-gray-500 text-sm mt-6">Or email directly: jredgate@lvrgwrks.com</p>
        </div>
      </section>
    </>
  );
}


