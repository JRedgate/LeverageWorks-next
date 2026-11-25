'use client';

import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { RelatedReading } from '@/components/RelatedReading';

import { BookCallButton } from '@/components/BookCallButton';
export default function FractionalCTOCalgaryPage() {
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
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-10">You do not need another software subscription. LVRGWRKS is an operating partner for industrial businesses. Technology work is one of the tools we use.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <BookCallButton variant="custom" className="bg-brand-navy text-white px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg group" arrow={true} />
              <Link href="/capabilities" className="border-2 border-brand-navy text-brand-navy px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-navy hover:text-white transition-all">How we work</Link>
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
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">LVRGWRKS comes in as your operating partner. We find where the business spends effort without getting faster, redesign how the work flows, build the fix inside the operation using whatever the diagnosis calls for, and stay to run it. Your data, the findings and the documents we produce for you are yours. Where we put a tool in place, the agreement sets out who owns and licenses it. If the engagement ends, the business keeps running.</p>
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
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">We report what changed</h3>
                <p className="text-gray-300 leading-relaxed">Each month we report what changed against the baseline agreed up front. We do not guess whether the work is paying off. We document it.</p>
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
              <p className="text-brand-slate text-lg max-w-2xl mx-auto">Every engagement starts with a 30-minute call.</p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4"><span className="text-brand-gold font-display font-bold text-2xl">01</span></div>
                    <h3 className="font-display font-bold text-xl text-brand-navy">Diagnose</h3>
                  </div>
                  <div className="md:w-3/4"><p className="text-brand-slate leading-relaxed text-lg">A 30-minute call. Tell us what keeps coming back to you. You get a short written note of what we heard and whether a diagnostic is worth doing.</p></div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4"><span className="text-brand-gold font-display font-bold text-2xl">02</span></div>
                    <h3 className="font-display font-bold text-xl text-brand-navy">Design</h3>
                  </div>
                  <div className="md:w-3/4"><p className="text-brand-slate leading-relaxed text-lg">This is the diagnostic. A fixed-scope look at where decisions and handoffs stall and what that costs your business, and the design of the fix around how your operation actually runs. Sometimes that is automation or AI. Sometimes it is removing a handoff or moving a decision so it stops routing through you. Nothing gets ripped out and no new platform is forced on your team. The findings are yours whether or not you continue.</p></div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4"><span className="text-brand-gold font-display font-bold text-2xl">03</span></div>
                    <h3 className="font-display font-bold text-xl text-brand-navy">Build</h3>
                  </div>
                  <div className="md:w-3/4"><p className="text-brand-slate leading-relaxed text-lg">We build the fix with your people. You review outputs, not code. Your data, the findings and the documents we produce for you are yours. Where we put a tool in place, the agreement sets out who owns and licenses it. If the engagement ends, the business keeps running.</p></div>
                </div>
              </div>
              <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4"><span className="text-brand-gold font-display font-bold text-2xl">04</span></div>
                    <h3 className="font-display font-bold text-xl text-white">Stay</h3>
                  </div>
                  <div className="md:w-3/4"><p className="text-gray-300 leading-relaxed text-lg">We manage, monitor, and evolve your systems as your business grows. Each month we report what changed against the baseline agreed up front. If the work does not justify the partnership, you will know.</p></div>
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
                <p className="text-brand-slate text-lg leading-relaxed mb-6">LVRGWRKS partners with owners and leadership teams of industrial businesses across Canada, in industries where the work is complex, the processes are real, and the margin pressure is constant.</p>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">The Alberta mid-market operates differently from tech-centric markets. You need a partner who understands the operational realities of energy, construction, and industrial services, not someone who learned business in a software startup. LVRGWRKS was founded in Calgary, shaped by more than 20 years of operational experience across manufacturing, industrial services, and capital programs, and grounded in the executive and financial frameworks of the Haskayne School of Business at the University of Calgary.</p>
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


      {/* FAQ */}
      <section className="py-20 md:py-32 bg-brand-surface border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Common Questions</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-12 leading-tight">Fractional CTO Questions, Answered</h2>
            <div className="space-y-8">
              <div className="border-b border-gray-100 pb-8">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">What does it cost?</h3>
                <p className="text-brand-slate leading-relaxed">The diagnostic is a fixed fee agreed before we start. The monthly partnership is priced on the scope you need. We&apos;ll give you real numbers once we understand what you need, usually after the first call.</p>
              </div>
              <div className="border-b border-gray-100 pb-8">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">What is the difference between a fractional CTO and an IT consultant?</h3>
                <p className="text-brand-slate leading-relaxed">An IT consultant delivers a project and leaves. A fractional CTO is <Link href="/insights/what-does-a-fractional-cto-do" className="text-brand-navy font-semibold underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold transition-colors">an operating partner inside the business</Link>. We diagnose where the work is costing you, redesign how it flows, build the fix, and report what changed each month.</p>
              </div>
              <div className="border-b border-gray-100 pb-8">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">How long is a fractional CTO engagement?</h3>
                <p className="text-brand-slate leading-relaxed">Terms are agreed in writing before any work starts. The diagnostic stands on its own, and you keep the findings whether or not you continue.</p>
              </div>
              <div className="border-b border-gray-100 pb-8">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">Do we own what a fractional CTO builds for us?</h3>
                <p className="text-brand-slate leading-relaxed">You do. Your data, the findings and the documents we produce for you are yours. Where we put a tool in place, the agreement sets out who owns and licenses it. If the engagement ends, the business keeps running.</p>
              </div>
            </div>
            <p className="text-brand-slate leading-relaxed mt-10">
              More questions answered on the <Link href="/faq" className="text-brand-navy font-semibold underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold transition-colors">LVRGWRKS FAQ</Link>, including what it costs, who owns what we build, and what happens to your team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Start with a 30-minute call.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">Thirty minutes. You leave with a short written note and a straight answer on whether a diagnostic is worth doing. No obligation.</p>
          <BookCallButton variant="custom" className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl group" arrow={true} />
          <p className="text-gray-500 text-sm mt-6">Or email directly: jredgate@lvrgwrks.com</p>
        </div>
      </section>
      <RelatedReading
        items={[
          { href: '/insights/what-does-a-fractional-cto-do', title: 'What does a fractional CTO actually do?', blurb: 'What the role covers week to week, and when hiring one makes sense.' },
          { href: '/insights/coordination-tax-mid-market', title: 'Why revenue grows but margin does not', blurb: 'The coordination tax, where it hides in a mid-market operation, and what it costs.' },
        ]}
      />
    </>
  );
}


