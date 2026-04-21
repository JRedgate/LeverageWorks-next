'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useBriefing } from '@/components/BriefingProvider';

type Industry = 'Construction' | 'Energy Services' | 'Manufacturing' | 'Property Management' | 'Other';

const TOOL_OPTIONS = [
  'CRM (Salesforce, HubSpot, Pipedrive, etc.)',
  'ERP or Accounting (QuickBooks, Sage, NetSuite, Dynamics, etc.)',
  'Project Management (Asana, Monday, ClickUp, Jira, etc.)',
  'Scheduling / Dispatch (ServiceTitan, Jobber, custom systems)',
  'Field / Mobile Apps (crews, drivers, inspectors)',
  'Document / File Storage (SharePoint, Google Drive, Dropbox)',
  'Spreadsheets as a system of record (Excel, Google Sheets)',
  'Communication (Slack, Teams, email)',
  'Reporting / BI tools (Power BI, Tableau, Looker)',
  'Industry-specific software (Procore, Yardi, AppFolio, etc.)',
];

const COORDINATION_OVERHEAD_RATE = 0.30;
const RECOVERABLE_RATE = 0.50;

export default function CalculatorPage() {
  const { openBriefing } = useBriefing();
  const [officeStaff, setOfficeStaff] = useState<number>(25);
  const [industry, setIndustry] = useState<Industry>('Construction');
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [hourlyCost, setHourlyCost] = useState<number>(75);
  const [name, setName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
  const [emailSubmitting, setEmailSubmitting] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');

  const toggleTool = (tool: string) => {
    setSelectedTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  };

  const results = useMemo(() => {
    const toolsCount = selectedTools.length;
    const frictionMultiplier = 1 + Math.max(0, toolsCount - 3) * 0.08;
    const weeklyCoordinationHours = officeStaff * 40 * COORDINATION_OVERHEAD_RATE * frictionMultiplier;
    const weeklyTax = weeklyCoordinationHours * hourlyCost;
    const rawAnnualTax = weeklyTax * 50;
    const annualTax = Math.min(rawAnnualTax, 2000000);
    const isCapped = rawAnnualTax > 2000000;
    const recoverableAmount = annualTax * RECOVERABLE_RATE;

    // Tier recommendation keyed to recoverable margin.
    // Public tiers only: Ignite, Build, Scale. No pricing stored or displayed.
    let recommendedTier: 'Ignite' | 'Build' | 'Scale' = 'Ignite';
    if (recoverableAmount >= 250000 || isCapped) {
      recommendedTier = 'Scale';
    } else if (recoverableAmount >= 150000) {
      recommendedTier = 'Build';
    } else {
      recommendedTier = 'Ignite';
    }

    // Severity bands are independent of tier pricing.
    let severity: 'Low' | 'Moderate' | 'High' | 'Severe' = 'Low';
    if (recoverableAmount >= 800000 || isCapped) severity = 'Severe';
    else if (recoverableAmount >= 400000) severity = 'High';
    else if (recoverableAmount >= 200000) severity = 'Moderate';

    return {
      toolsCount,
      frictionMultiplier,
      weeklyCoordinationHours,
      weeklyTax,
      annualTax,
      recoverableAmount,
      severity,
      isCapped,
      recommendedTier,
    };
  }, [officeStaff, selectedTools, hourlyCost]);

  const formatCurrency = (value: number): string =>
    new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      maximumFractionDigits: 0,
    }).format(value);

  const getSeverityContent = () => {
    const { severity, annualTax, recoverableAmount, recommendedTier, isCapped } = results;

    if (severity === 'Severe') {
      return {
        label: 'Severe',
        headline: 'The coordination tax is no longer an efficiency problem. It is structural.',
        body: isCapped
          ? 'Your calculated coordination tax exceeds $2,000,000 per year, and at that scale the problem is not something a calculator can size correctly. What you are experiencing is structural misalignment between how your business has scaled and how your systems are architected to support it. This is exactly the situation LVRGWRKS was built to fix.'
          : 'At this scale, the coordination tax is not just expensive. It is actively constraining your ability to grow. You cannot fix this with another software subscription or another admin hire. It requires structural redesign of how the work flows across your operation.',
        tierRecommendation:
          'Book the Leverage Audit directly. We will map your actual situation in 60 minutes and outline what structural remediation looks like for a business at your scale.',
        roiMath:
          'At this severity, the conversation is no longer about incremental efficiency. It is about what this is costing you every month you wait.',
      };
    }

    if (severity === 'High') {
      return {
        label: 'High',
        headline: 'The math is urgent now.',
        body: 'You are paying for the equivalent of multiple full-time employees whose entire job is holding your systems together with spreadsheets and email. Every month you absorb this is a month of margin you do not get back.',
        tierRecommendation: `At your scale, a ${recommendedTier} tier engagement is sized for the problem.`,
        roiMath: `Your total coordination tax is approximately ${formatCurrency(annualTax)} per year. Approximately ${formatCurrency(recoverableAmount)} of that is recoverable through structured automation and process redesign.`,
      };
    }

    if (severity === 'Moderate') {
      return {
        label: 'Moderate',
        headline: 'You are feeling it. Most operators start losing their best people here.',
        body: 'This is the range where your team starts burning out on manual work, and where growth starts costing margin instead of creating it.',
        tierRecommendation: `A ${recommendedTier} tier engagement is the right fit for what you are describing.`,
        roiMath: `Your total coordination tax is approximately ${formatCurrency(annualTax)} per year. Approximately ${formatCurrency(recoverableAmount)} is recoverable through structured automation and process redesign.`,
      };
    }

    return {
      label: 'Low',
      headline: 'Manageable today. But coordination tax compounds.',
      body: 'Most operators at your stage are in this range. The question is not whether to act now. It is whether you want to get ahead of the curve before it compounds.',
      tierRecommendation: 'An Ignite tier engagement is the right entry point to stop the problem from compounding.',
      roiMath: `Your total coordination tax is approximately ${formatCurrency(annualTax)} per year, with approximately ${formatCurrency(recoverableAmount)} recoverable. The real value at this stage is preventing the problem from compounding as you scale.`,
    };
  };

  const currentSeverity = getSeverityContent();
  const showResults = selectedTools.length > 0;

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setEmailError('Please enter your name.');
      return;
    }
    if (!company.trim()) {
      setEmailError('Please enter your company name.');
      return;
    }
    if (!email || !email.includes('@')) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setEmailSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xvzdzrlr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Coordination Tax Calculator — Personalized Breakdown Request',
          name,
          company,
          email,
          source: 'Coordination Tax Calculator',
          office_staff: officeStaff,
          industry,
          tools_used: selectedTools.join(', '),
          tools_count: results.toolsCount,
          hourly_cost: hourlyCost,
          weekly_coordination_hours: results.weeklyCoordinationHours.toFixed(1),
          weekly_coordination_tax: formatCurrency(results.weeklyTax),
          annual_coordination_tax: formatCurrency(results.annualTax),
          recoverable_amount: formatCurrency(results.recoverableAmount),
          severity: results.severity,
          recommended_tier: results.recommendedTier,
          is_capped: results.isCapped,
        }),
      });
      if (response.ok) {
        setEmailSubmitted(true);
      } else {
        setEmailError('Something went wrong. Please try again or email us directly at jredgate@lvrgwrks.com.');
      }
    } catch {
      setEmailError('Something went wrong. Please try again or email us directly at jredgate@lvrgwrks.com.');
    } finally {
      setEmailSubmitting(false);
    }
  };

  return (
    <>
      <header className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Free Tool</span>
            <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
              The Coordination Tax <span className="text-brand-slate italic">Calculator.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl font-light">
              Your platforms do not talk to each other, so your team is manually moving data between them every day. That hidden labour is the coordination tax, and it almost never shows up on any report. Use this calculator to quantify roughly what it is costing your business every year. Takes 60 seconds.
            </p>
          </div>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-surface p-8 md:p-12 rounded-xl border border-gray-100 mb-12">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The Calculator</span>
              <h2 className="font-display font-bold text-3xl text-brand-navy mb-10 leading-tight">Four inputs. Real numbers.</h2>

              <div className="mb-10">
                <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">01. How many people work in office roles at your company?</label>
                <p className="text-brand-slate text-sm mb-4 leading-relaxed">Include operations, admin, project managers, finance, engineering, and leadership. Do not include field crews, external sales, or contractors.</p>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="5"
                    max="50"
                    value={officeStaff}
                    onChange={(e) => setOfficeStaff(Math.max(5, Math.min(50, Number(e.target.value) || 25)))}
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-brand-navy font-bold text-xl focus:border-brand-navy focus:outline-none transition-all"
                  />
                  <span className="text-brand-slate font-medium">office staff</span>
                </div>
              </div>

              <div className="mb-10">
                <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-3">02. Primary Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value as Industry)}
                  className="w-full px-4 py-4 rounded-lg border-2 border-gray-200 bg-white text-brand-navy font-medium focus:border-brand-navy focus:outline-none transition-all"
                >
                  <option value="Construction">Construction</option>
                  <option value="Energy Services">Energy Services</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Property Management">Property Management</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-10">
                <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">03. Which tools does your team use daily?</label>
                <p className="text-brand-slate text-sm mb-4 leading-relaxed">Select everything that applies. The more disconnected tools your team uses, the more coordination tax per hour of work.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {TOOL_OPTIONS.map((tool) => (
                    <button
                      key={tool}
                      onClick={() => toggleTool(tool)}
                      className={`px-4 py-3 rounded-lg text-sm text-left transition-all border-2 ${
                        selectedTools.includes(tool)
                          ? 'bg-brand-navy text-white border-brand-navy'
                          : 'bg-white text-brand-slate border-gray-200 hover:border-brand-navy/30'
                      }`}
                    >
                      {tool}
                    </button>
                  ))}
                </div>
                <p className="text-brand-slate text-xs mt-3">Selected: {results.toolsCount} tool{results.toolsCount === 1 ? '' : 's'}</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">04. Average fully-loaded hourly cost of your office staff</label>
                <p className="text-brand-slate text-sm mb-4 leading-relaxed">Fully loaded means salary plus benefits plus overhead. For most Alberta mid-market operations roles, this is $65 to $95 per hour. Default is $75.</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-display font-bold text-brand-navy">$</span>
                  <input
                    type="number"
                    min="30"
                    max="200"
                    value={hourlyCost}
                    onChange={(e) => setHourlyCost(Math.max(30, Math.min(200, Number(e.target.value) || 75)))}
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-brand-navy font-bold text-xl focus:border-brand-navy focus:outline-none transition-all"
                  />
                  <span className="text-brand-slate font-medium">per hour</span>
                </div>
              </div>
            </div>

            {showResults ? (
              <>
                <div className="bg-brand-navy text-white p-8 md:p-12 rounded-xl mb-8">
                  <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Your Estimated Coordination Tax</span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                      <div className="text-brand-gold font-display font-bold text-3xl md:text-4xl mb-2">{formatCurrency(results.weeklyTax)}</div>
                      <p className="text-gray-400 text-sm leading-relaxed">per week in hidden labour cost</p>
                    </div>
                    <div className="bg-white/5 border-2 border-brand-gold p-6 rounded-xl">
                      <div className="text-brand-gold font-display font-bold text-3xl md:text-4xl mb-2">{results.isCapped ? '$2M+' : formatCurrency(results.annualTax)}</div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">per year in hidden labour cost</p>
                      <p className="text-gray-500 text-xs italic">Based on {officeStaff} staff x 40 hrs/wk x 30% coordination overhead x {results.frictionMultiplier.toFixed(2)} tool friction x ${hourlyCost}/hr</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                      <div className="text-brand-gold font-display font-bold text-3xl md:text-4xl mb-2">{formatCurrency(results.recoverableAmount)}</div>
                      <p className="text-gray-400 text-sm leading-relaxed">recoverable through automation (conservative 50% of total)</p>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase">Severity</span>
                      <span className="text-brand-gold font-display font-bold text-2xl">{currentSeverity.label}</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 leading-tight">{currentSeverity.headline}</h3>
                    <p className="text-gray-300 text-base leading-relaxed mb-6">{currentSeverity.body}</p>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-6">
                      <p className="text-sm text-brand-gold font-bold uppercase tracking-widest mb-2">Recommended Engagement</p>
                      <p className="text-white leading-relaxed mb-3">{currentSeverity.tierRecommendation}</p>
                      <p className="text-gray-400 text-sm leading-relaxed italic">{currentSeverity.roiMath}</p>
                    </div>

                    <button
                      onClick={() => openBriefing()}
                      className="w-full sm:w-auto bg-brand-gold text-brand-navy px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl"
                    >
                      Book Your Free Leverage Audit
                    </button>
                  </div>
                </div>

                <div className="bg-brand-surface p-8 md:p-10 rounded-xl border border-gray-100">
                  {emailSubmitted ? (
                    <>
                      <h3 className="font-display font-bold text-xl text-brand-navy mb-3">Got it. Check your inbox.</h3>
                      <p className="text-brand-slate leading-relaxed">We will send you a personalized one-page breakdown for {industry} operators within 24 hours.</p>
                    </>
                  ) : (
                    <>
                      <h3 className="font-display font-bold text-xl text-brand-navy mb-3">Want this as a personalized one-page breakdown?</h3>
                      <p className="text-brand-slate leading-relaxed mb-6">Enter your details and we will send you a breakdown specific to {industry} operators. No sales pitch. No automated drip sequence.</p>
                      <form onSubmit={handleEmailSubmit} className="space-y-4">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-brand-navy font-medium focus:border-brand-navy focus:outline-none transition-all"
                        />
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Company name"
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-brand-navy font-medium focus:border-brand-navy focus:outline-none transition-all"
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-brand-navy font-medium focus:border-brand-navy focus:outline-none transition-all"
                        />
                        <button
                          type="submit"
                          disabled={emailSubmitting}
                          className="w-full bg-brand-navy text-white px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-slate transition-all shadow-lg disabled:opacity-60"
                        >
                          {emailSubmitting ? 'Sending...' : 'Send Me The Breakdown'}
                        </button>
                      </form>
                      {emailError && <p className="text-red-600 text-sm mt-3">{emailError}</p>}
                    </>
                  )}
                </div>
              </>
            ) : (
              <div className="bg-brand-surface p-10 rounded-xl border border-gray-100 text-center">
                <p className="text-brand-slate leading-relaxed">Select at least one tool above to see your coordination tax calculation.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-surface border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Methodology</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-8 leading-tight">Where these numbers come from.</h2>
            <p className="text-brand-slate text-lg leading-relaxed mb-6">This calculator is grounded in published research from McKinsey, Asana, and Gartner on how much time knowledge workers actually spend on coordination, search, and manual data movement between systems.</p>
            <p className="text-brand-slate text-lg leading-relaxed mb-6">McKinsey estimates interaction workers spend roughly 28 percent of their week on email and another 20 percent searching for internal information. Asana puts coordination overhead at 60 percent of the average knowledge worker's day. Gartner has documented an 83 percent increase in the number of applications used per knowledge worker since 2019.</p>
            <p className="text-brand-slate text-lg leading-relaxed mb-6">This calculator uses a conservative 30% baseline for coordination overhead across a typical office team mix. The friction multiplier (8% per additional tool beyond three) reflects tool sprawl complexity. Research and LVRGWRKS client data show that 40-60% of coordination tax is recoverable through cross-platform automation. We use 50% as a conservative baseline.</p>
            <p className="text-brand-slate text-lg leading-relaxed">If your calculation exceeds $2,000,000 annually, the coordination tax has moved beyond an efficiency problem and become a structural one.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 leading-tight">
            The calculator gave you an estimate.<br />
            <span className="text-gray-400 italic">The Leverage Audit gives you the real number.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">60 minutes. No cost. No commitment. We map your highest-friction workflows, put a precise dollar figure on the labour cost, and outline a conceptual automation architecture before the call ends.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <button
              onClick={() => openBriefing()}
              className="bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl"
            >
              Request Free Leverage Audit
            </button>
            <Link
              href="/fractional-cto-calgary"
              className="text-white text-sm font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all"
            >
              Explore Fractional CTO Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}