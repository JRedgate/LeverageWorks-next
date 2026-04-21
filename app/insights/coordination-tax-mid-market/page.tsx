import React from 'react';
import Link from 'next/link';

export default function CoordinationTaxArticle() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Insight - Operations</span>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-6 leading-tight">
              The Coordination Tax: Why Mid-Market Companies Grow Revenue Without Growing Margin
            </h1>
            <p className="text-brand-slate text-lg leading-relaxed">
              If your revenue is up and your margin is flat, the money is not disappearing. It is being paid out, quietly, to an overhead layer nobody named. Here is what that layer is, how it compounds, and why adding people almost never fixes it.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <article className="max-w-3xl mx-auto">

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">The gap nobody can explain</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              A growing mid-market company closes its year with revenue up twenty-two percent. The owner pulls the financials expecting to see margin expand in the same direction. It does not. EBITDA holds flat. In some cases it compresses. Headcount is up twenty-eight percent. The team is working harder than ever. The business looks like it is winning on the top line and losing somewhere in the middle. The pattern becomes visible when you stop looking at total revenue and start looking at what each new hire actually produces.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              The CFO flags it. The leadership team debates it. The usual explanations get trotted out. Wage pressure. Input costs. Timing of a few large jobs. Some of that is real. Most of it is not the actual answer.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              The actual answer is that the business is paying a tax it never agreed to and cannot see on any invoice. Every growing mid-market company pays it. The ones that figure out what it is get ahead. The ones that do not spend the next five years hiring to outrun it and wondering why the math never catches up.
            </p>

            {/* Visual 1: Revenue per Incremental Headcount */}
            <figure className="my-12 bg-brand-surface p-8 md:p-10 rounded-xl border border-gray-100">
              <figcaption className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-2">Figure 1</figcaption>
              <p className="text-brand-navy font-display font-bold text-lg mb-1">Each new hire produces less than the one before.</p>
              <p className="text-brand-slate text-sm mb-6">Revenue per incremental headcount, mid-market company growing through the coordination tax.</p>

              <svg viewBox="0 0 680 340" role="img" aria-label="Line chart showing revenue per incremental headcount declining from $300,000 in Year 2 to $140,000 in Year 5." className="w-full h-auto">
                {/* Y-axis title - vertical on left */}
                <text x="18" y="150" textAnchor="middle" fontSize="12" fill="#0A2540" fontFamily="sans-serif" fontWeight="500" transform="rotate(-90, 18, 150)">Revenue per new FTE</text>

                <g transform="translate(90, 30)">
                  {/* Gridlines: Y-axis $80k to $320k over 240px. $320k=0, $260k=60, $200k=120, $140k=180, $80k=240 */}
                  <line x1="0" y1="0" x2="520" y2="0" stroke="#E5E7EB" strokeWidth="0.5" />
                  <line x1="0" y1="60" x2="520" y2="60" stroke="#E5E7EB" strokeWidth="0.5" />
                  <line x1="0" y1="120" x2="520" y2="120" stroke="#E5E7EB" strokeWidth="0.5" />
                  <line x1="0" y1="180" x2="520" y2="180" stroke="#E5E7EB" strokeWidth="0.5" />
                  <line x1="0" y1="240" x2="520" y2="240" stroke="#6B7280" strokeWidth="1" />

                  {/* Y-axis tick labels */}
                  <text x="-10" y="4" textAnchor="end" fontSize="11" fill="#6B7280" fontFamily="sans-serif">$320k</text>
                  <text x="-10" y="64" textAnchor="end" fontSize="11" fill="#6B7280" fontFamily="sans-serif">$260k</text>
                  <text x="-10" y="124" textAnchor="end" fontSize="11" fill="#6B7280" fontFamily="sans-serif">$200k</text>
                  <text x="-10" y="184" textAnchor="end" fontSize="11" fill="#6B7280" fontFamily="sans-serif">$140k</text>
                  <text x="-10" y="244" textAnchor="end" fontSize="11" fill="#6B7280" fontFamily="sans-serif">$80k</text>

                  {/* Data coordinates: scale is $80k to $320k over 240px. px per $k = 240/240 = 1
                      Y2: $300k → y = 240 - (300-80) = 240 - 220 = 20
                      Y3: $240k → y = 240 - 160 = 80
                      Y4: $180k → y = 240 - 100 = 140
                      Y5: $140k → y = 240 - 60 = 180
                      X positions across 520 width with 4 points: Y2=65, Y3=215, Y4=365, Y5=515 */}

                  {/* Data line - declining */}
                  <polyline
                    points="65,20 215,80 365,140 515,180"
                    fill="none"
                    stroke="#0A2540"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Data points */}
                  <circle cx="65" cy="20" r="5" fill="#0A2540" />
                  <circle cx="215" cy="80" r="5" fill="#0A2540" />
                  <circle cx="365" cy="140" r="5" fill="#0A2540" />
                  <circle cx="515" cy="180" r="5" fill="#0A2540" />

                  {/* Data point value labels */}
                  <text x="65" y="8" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0A2540" fontFamily="sans-serif">$300k</text>
                  <text x="215" y="68" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0A2540" fontFamily="sans-serif">$240k</text>
                  <text x="365" y="128" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0A2540" fontFamily="sans-serif">$180k</text>
                  <text x="515" y="168" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0A2540" fontFamily="sans-serif">$140k</text>

                  {/* X-axis tick labels */}
                  <text x="65" y="262" textAnchor="middle" fontSize="12" fill="#0A2540" fontFamily="sans-serif" fontWeight="500">Year 2</text>
                  <text x="215" y="262" textAnchor="middle" fontSize="12" fill="#0A2540" fontFamily="sans-serif" fontWeight="500">Year 3</text>
                  <text x="365" y="262" textAnchor="middle" fontSize="12" fill="#0A2540" fontFamily="sans-serif" fontWeight="500">Year 4</text>
                  <text x="515" y="262" textAnchor="middle" fontSize="12" fill="#0A2540" fontFamily="sans-serif" fontWeight="500">Year 5</text>
                </g>
              </svg>

              <p className="text-brand-slate text-xs leading-relaxed mt-4 italic">
                Illustrative pattern for a mid-market company growing revenue around 15% annually without redesigning its coordination layer. The curve steepens earlier in higher-complexity sectors such as construction, manufacturing, and field services, and later in lower-complexity ones.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-brand-slate text-sm leading-relaxed mb-3">
                  <span className="font-bold text-brand-navy">Revenue per incremental headcount</span> is the dollars of new revenue the business earns for each additional person it adds in a given year. It is the clearest single indicator of whether your business is scaling with leverage or scaling through brute force.
                </p>
                <p className="text-brand-navy text-sm leading-relaxed mb-3 italic">
                  (Revenue in Year N − Revenue in Year N-1) ÷ (Headcount in Year N − Headcount in Year N-1)
                </p>
                <p className="text-brand-slate text-sm leading-relaxed">
                  A healthy business holds this number steady or grows it over time. Each new hire contributes at least as much as the one before. When the coordination tax takes hold, the number declines year over year, even as total revenue keeps climbing. The business is still getting bigger. It is just getting less out of every person it adds.
                </p>
              </div>
            </figure>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">What the coordination tax actually is</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              Coordination tax is the cumulative labour cost of moving information, decisions, and work between people and systems inside an organization. It is the time your team spends not doing the job, but coordinating the doing of the job. Status updates. Handoff confirmations. Manual reconciliation between platforms. Meetings held because nobody trusts the dashboard. Rework caused by a detail that did not make it from one function to the next.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              At a ten-person company this tax is near zero. Everyone sits in the same room. Information moves by conversation. Decisions get made in the hallway. The business runs on shared context and tribal knowledge, and for a while that is enough.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              By the time that same business is fifty people across two locations, the context has fragmented. Information that used to move for free now requires a meeting. Decisions that used to happen in minutes now wait for three people to respond. Handoffs that used to be invisible now leak detail and require follow-up. Nothing obvious broke. The structure outgrew the way it was being run.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              By the time the business is 150 people, the coordination layer is a department. Coordinators, project admins, operations managers, dispatchers. A growing portion of headcount exists not to produce output but to move information between the people who do. Margin is being paid out to the tax, and nobody is naming it.
            </p>

            {/* Visual 2: Growth Stages */}
            <figure className="my-12 bg-brand-surface p-8 md:p-10 rounded-xl border border-gray-100">
              <figcaption className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-2">Figure 2</figcaption>
              <p className="text-brand-navy font-display font-bold text-lg mb-6">How the tax scales with headcount</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <p className="text-brand-slate text-xs uppercase tracking-widest font-bold mb-2">Stage 1</p>
                  <p className="font-display font-bold text-2xl text-brand-navy mb-1">10 people</p>
                  <p className="text-brand-gold text-sm font-bold mb-4">Near-zero tax</p>
                  <p className="text-brand-slate text-sm leading-relaxed">Shared context. Information moves by conversation. Decisions made in the hallway.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-brand-gold/40">
                  <p className="text-brand-slate text-xs uppercase tracking-widest font-bold mb-2">Stage 2</p>
                  <p className="font-display font-bold text-2xl text-brand-navy mb-1">50 people</p>
                  <p className="text-brand-gold text-sm font-bold mb-4">Context fragments</p>
                  <p className="text-brand-slate text-sm leading-relaxed">Meetings replace conversation. Handoffs leak detail. Structure outgrows the run.</p>
                </div>
                <div className="bg-brand-navy p-6 rounded-lg">
                  <p className="text-brand-gold text-xs uppercase tracking-widest font-bold mb-2">Stage 3</p>
                  <p className="font-display font-bold text-2xl text-white mb-1">150 people</p>
                  <p className="text-brand-gold text-sm font-bold mb-4">Tax is a department</p>
                  <p className="text-gray-300 text-sm leading-relaxed">Coordinators, admins, operations managers. A layer that moves information instead of producing.</p>
                </div>
              </div>
            </figure>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">The four forms it takes</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              The coordination tax does not show up as a line item. It shows up in four specific patterns, and every mid-market operator we talk to recognizes at least two of them inside their own business.
            </p>

            {/* Visual 3: Four Forms - 2x2 grid of colored cards */}
            <figure className="my-10">
              <figcaption className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-4">Figure 3</figcaption>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-[#FAECE7] border border-[#D85A30]/30 p-6 rounded-lg">
                  <p className="text-[#712B13] text-xs uppercase tracking-widest font-bold mb-2">Form 1</p>
                  <p className="text-[#4A1B0C] font-display font-bold text-lg mb-2">Manual handoffs between systems</p>
                  <p className="text-[#712B13] text-sm leading-relaxed">Four people touching the same information four times because the tools do not talk.</p>
                </div>
                <div className="bg-[#FAEEDA] border border-[#BA7517]/30 p-6 rounded-lg">
                  <p className="text-[#633806] text-xs uppercase tracking-widest font-bold mb-2">Form 2</p>
                  <p className="text-[#412402] font-display font-bold text-lg mb-2">Status updates and meeting overhead</p>
                  <p className="text-[#633806] text-sm leading-relaxed">Standing meetings exist because nobody trusts the data to reflect what is actually happening.</p>
                </div>
                <div className="bg-[#E1F5EE] border border-[#1D9E75]/30 p-6 rounded-lg">
                  <p className="text-[#085041] text-xs uppercase tracking-widest font-bold mb-2">Form 3</p>
                  <p className="text-[#04342C] font-display font-bold text-lg mb-2">Rework from miscommunication</p>
                  <p className="text-[#085041] text-sm leading-relaxed">Wrong size ordered, wrong scope priced, wrong crew dispatched. Visible cost plus invisible cost.</p>
                </div>
                <div className="bg-[#EEEDFE] border border-[#7F77DD]/30 p-6 rounded-lg">
                  <p className="text-[#3C3489] text-xs uppercase tracking-widest font-bold mb-2">Form 4</p>
                  <p className="text-[#26215C] font-display font-bold text-lg mb-2">Single-person knowledge bottlenecks</p>
                  <p className="text-[#3C3489] text-sm leading-relaxed">The one person who knows where everyone is. Key-person risk disguised as reliability.</p>
                </div>
              </div>
            </figure>

            <div className="space-y-6 mb-10">
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Manual handoffs between systems</h3>
                <p className="text-brand-slate leading-relaxed">
                  A construction estimator finishes a bid in one tool. The PM picks it up and rebuilds the budget inside a project management platform. Procurement pulls the same materials list into a third system to issue POs. Accounting eventually imports the whole thing for invoicing. Four people touch the same information four times because the tools do not talk. That is not workflow. That is the business paying four people to keep four systems in sync, and calling it operations.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Status updates and meeting overhead</h3>
                <p className="text-brand-slate leading-relaxed">
                  Standing meetings exist because nobody trusts the data to reflect the truth. Weekly operations reviews get scheduled to confirm what the system was supposed to show automatically. Senior people spend four hours a week answering variations of the same question: where are we on this. Time that should be going toward decisions gets spent manufacturing the inputs to the decisions. The calendar fills up and nothing gets built.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Rework from miscommunication</h3>
                <p className="text-brand-slate leading-relaxed">
                  A detail gets missed in a handoff. Wrong size ordered. Wrong scope priced. Wrong crew dispatched. The work gets redone. The cost of the rework itself is visible. The cost of the follow-up, the damage control, the trust erosion between functions is not. Over twelve months, the quiet cost of rework is often double the visible cost, and the root cause is almost always the same: information that was supposed to move did not, or moved incompletely.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Single-person knowledge bottlenecks</h3>
                <p className="text-brand-slate leading-relaxed">
                  Every mid-market operation has one. The dispatcher who knows which crews work well together. The scheduler who knows which clients need a heads-up before invoicing. The long-tenured admin who is the only person who understands the old ERP. When that person takes a week off, the operation slows. When that person leaves, a visible portion of the business falls over. That is not institutional knowledge. That is key-person risk disguised as reliability, and every year it goes unaddressed the exposure grows.
                </p>
              </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">Why the default fixes make it worse</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              When leaders feel the weight of coordination tax, they reach for the tools they know. All four of them treat the symptom. None of them fix the structure.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              Hiring. The instinct is that the team is underwater, so more hands should help. But if coordination overhead is already scaling faster than output, every new hire creates more handoffs, more status updates, more sync meetings. A thirty-person team that hires five more people does not get thirty-five people worth of output. It gets thirty-three, and the other two are absorbed into the coordination layer. The business pays for five and receives the capacity of two or three.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              New software. The second reflex. Buy the ERP, the CRM, the project management tool, the AI assistant. Within twelve months the team is running two operational layers in parallel. The official one in the new system, and the real one in the spreadsheets and email threads where the actual decisions still get made. The invoice is paid. The overhead stays.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              Process documents. The third reflex. Someone runs a project to map the workflows, publishes a set of SOPs, and declares the problem solved. The documents get filed. The team keeps working the way they were working. The structure that was producing the tax in the first place never changed.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              Off-sites and culture work. The fourth reflex. Bring the leaders together. Align on the vision. Clarify the values. These efforts are not wasted, but they do not move coordination tax. The tax is structural, not motivational. Energized people coordinating badly still coordinate badly.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">What actually works</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              The coordination tax comes down when the coordination work stops being done by humans. That does not mean replacing the team. It means redesigning the operation so that information moves without a human relay, decisions have the data they need without a meeting to manufacture it, and handoffs happen inside the system rather than on top of it.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              In practice that looks like a connective layer across the tools you already own. Workflows that fire on events rather than on someone remembering to check. Data that flows from the field to the back office automatically and arrives in the shape the next person actually needs. Reports that are live rather than assembled weekly from four spreadsheets. Single-person knowledge captured into the system so the business is not one resignation away from a bad quarter.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              This is not a platform decision. It is an operating model decision. The companies that get this right do it in a specific order. They measure the tax first. They identify the two or three workflows costing the most. They build the automation and data flow to eliminate the manual relay on those workflows. Then they repeat. Over twelve to eighteen months the operation quietly rebuilds itself into something that scales without the overhead scaling with it.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">What you lose by leaving it alone</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              Coordination tax compounds. Every year it goes unaddressed, the overhead layer grows a little larger, the decisions get a little slower, and the margin gap between you and the competitor who is fixing this widens. The operators who rebuild their coordination layer in the next two to three years will set the new cost baseline for their sector. The ones who do not will find themselves losing bids they used to win and wondering why their pricing no longer works.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              The business will still grow. Revenue will still go up. But the owner will stay the bottleneck. Key-person risk will keep rising. The team will keep saying they need more people. And the financials will keep telling the same story: revenue growing, margin flat, and nobody in the room able to say exactly why.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">What changes when you fix it</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              An operation that has rebuilt its coordination layer feels different from the inside. Handoffs happen without follow-up. Status is visible without a meeting to confirm it. Decisions that used to wait for information now have the information waiting for them. The team still works hard, but the work is output, not overhead. Headcount stops being the lever every time the business needs more capacity. Margin starts moving with revenue instead of chasing it.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              From the owner's chair, the shift is quieter than it sounds. Fewer fires. Fewer emergency calls on a Friday afternoon. More of the week spent on the decisions that actually matter. That is what growing without growing overhead looks like, and it is not reserved for tech companies. Every mid-market operator can build toward it. Most just need someone to name what is in the way.
            </p>

            {/* Visual 4: Two Trajectories - Company A vs Company B EBITDA over 3 years at $50M scale, 12% starting margin */}
            <figure className="my-12 bg-brand-surface p-8 md:p-10 rounded-xl border border-gray-100">
              <figcaption className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-2">Figure 4</figcaption>
              <p className="text-brand-navy font-display font-bold text-lg mb-1">Two companies. Same starting point. Different decisions.</p>
              <p className="text-brand-slate text-sm mb-6">Illustrative EBITDA trajectory over three years for a $50M mid-market operation.</p>

              <svg viewBox="0 0 680 460" role="img" aria-label="Line chart comparing EBITDA over three years for two companies starting at the same $6M point. Both grow revenue identically from $50M to $65M. Company A stays the course and reaches $6.17M EBITDA at 9.5% margin by Year 3. Company B rebuilds its coordination layer and reaches $10.4M EBITDA at 16% margin. The annual gap widens from zero to $2.01M to $4.23M." className="w-full h-auto">
                {/* Y-axis title - vertical on left */}
                <text x="18" y="210" textAnchor="middle" fontSize="12" fill="#0A2540" fontFamily="sans-serif" fontWeight="500" transform="rotate(-90, 18, 210)">EBITDA ($M)</text>

                {/* Chart plot area */}
                <g transform="translate(90, 40)">
                  {/* Gridlines: Y-axis 0 to $12M over 320px. $0=320, $3M=240, $6M=160, $9M=80, $12M=0 */}
                  <line x1="0" y1="0" x2="500" y2="0" stroke="#E5E7EB" strokeWidth="0.5" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="#E5E7EB" strokeWidth="0.5" />
                  <line x1="0" y1="160" x2="500" y2="160" stroke="#E5E7EB" strokeWidth="0.5" />
                  <line x1="0" y1="240" x2="500" y2="240" stroke="#E5E7EB" strokeWidth="0.5" />
                  <line x1="0" y1="320" x2="500" y2="320" stroke="#6B7280" strokeWidth="1" />

                  {/* Y-axis tick labels */}
                  <text x="-10" y="4" textAnchor="end" fontSize="11" fill="#6B7280" fontFamily="sans-serif">$12M</text>
                  <text x="-10" y="84" textAnchor="end" fontSize="11" fill="#6B7280" fontFamily="sans-serif">$9M</text>
                  <text x="-10" y="164" textAnchor="end" fontSize="11" fill="#6B7280" fontFamily="sans-serif">$6M</text>
                  <text x="-10" y="244" textAnchor="end" fontSize="11" fill="#6B7280" fontFamily="sans-serif">$3M</text>
                  <text x="-10" y="324" textAnchor="end" fontSize="11" fill="#6B7280" fontFamily="sans-serif">$0</text>

                  {/* Data coordinates based on $0 to $12M scale (320px total height)
                      px per $M = 320/12 = 26.67
                      Y1 (both): $6.0M → y = 320 - (6 * 26.67) = 320 - 160 = 160
                      Y2 Company A: $6.04M → y = 320 - 161 = 159
                      Y2 Company B: $8.05M → y = 320 - 214.7 = 105.3
                      Y3 Company A: $6.17M → y = 320 - 164.5 = 155.5
                      Y3 Company B: $10.4M → y = 320 - 277.3 = 42.7
                      X positions: Y1=0, Y2=225, Y3=450 */}

                  {/* Shaded compounding gap area between the two lines */}
                  <path d="M 0,160 L 225,159 L 450,155.5 L 450,42.7 L 225,105.3 L 0,160 Z" fill="#C9A227" fillOpacity="0.14" />

                  {/* Company A line (stays the course) - gray, solid */}
                  <polyline points="0,160 225,159 450,155.5" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="0" cy="160" r="5" fill="#6B7280" />
                  <circle cx="225" cy="159" r="5" fill="#6B7280" />
                  <circle cx="450" cy="155.5" r="5" fill="#6B7280" />

                  {/* Company A endpoint label */}
                  <text x="458" y="152" fontSize="12" fill="#6B7280" fontFamily="sans-serif" fontWeight="500">Company A</text>
                  <text x="458" y="168" fontSize="11" fill="#6B7280" fontFamily="sans-serif">$6.17M · 9.5%</text>

                  {/* Company B line (rebuilt coordination layer) - brand navy, solid thick */}
                  <polyline points="0,160 225,105.3 450,42.7" fill="none" stroke="#0A2540" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="0" cy="160" r="5" fill="#0A2540" />
                  <circle cx="225" cy="105.3" r="5" fill="#0A2540" />
                  <circle cx="450" cy="42.7" r="5" fill="#0A2540" />

                  {/* Company B endpoint label */}
                  <text x="458" y="39" fontSize="12" fill="#0A2540" fontFamily="sans-serif" fontWeight="500">Company B</text>
                  <text x="458" y="55" fontSize="11" fill="#0A2540" fontFamily="sans-serif">$10.4M · 16.0%</text>

                  {/* Vertical gap indicator at Year 3 */}
                  <line x1="450" y1="42.7" x2="450" y2="155.5" stroke="#C9A227" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* X-axis tick labels */}
                  <text x="0" y="344" textAnchor="middle" fontSize="12" fill="#0A2540" fontFamily="sans-serif" fontWeight="500">Year 1</text>
                  <text x="0" y="360" textAnchor="middle" fontSize="11" fill="#6B7280" fontFamily="sans-serif">$50M revenue</text>
                  <text x="225" y="344" textAnchor="middle" fontSize="12" fill="#0A2540" fontFamily="sans-serif" fontWeight="500">Year 2</text>
                  <text x="225" y="360" textAnchor="middle" fontSize="11" fill="#6B7280" fontFamily="sans-serif">$57.5M revenue</text>
                  <text x="450" y="344" textAnchor="middle" fontSize="12" fill="#0A2540" fontFamily="sans-serif" fontWeight="500">Year 3</text>
                  <text x="450" y="360" textAnchor="middle" fontSize="11" fill="#6B7280" fontFamily="sans-serif">$65M revenue</text>
                </g>

                {/* Legend - aligned flush with chart left margin at x=90 */}
                <g transform="translate(90, 430)">
                  <line x1="0" y1="2" x2="20" y2="2" stroke="#6B7280" strokeWidth="2.5" />
                  <circle cx="10" cy="2" r="3.5" fill="#6B7280" />
                  <text x="28" y="6" fontSize="11" fill="#0A2540" fontFamily="sans-serif" fontWeight="500">Company A: stays the course</text>

                  <line x1="220" y1="2" x2="240" y2="2" stroke="#0A2540" strokeWidth="3" />
                  <circle cx="230" cy="2" r="3.5" fill="#0A2540" />
                  <text x="248" y="6" fontSize="11" fill="#0A2540" fontFamily="sans-serif" fontWeight="500">Company B: rebuilds coordination layer</text>

                  <rect x="455" y="-2" width="12" height="8" fill="#C9A227" fillOpacity="0.3" />
                  <text x="471" y="6" fontSize="11" fill="#0A2540" fontFamily="sans-serif" fontWeight="500">Compounding gap</text>
                </g>
              </svg>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-5 rounded-lg border border-gray-100">
                  <p className="text-brand-slate text-xs uppercase tracking-widest font-bold mb-2">Year 1</p>
                  <p className="font-display font-bold text-brand-navy mb-1">Identical starting point</p>
                  <p className="text-brand-slate text-sm leading-relaxed">Both at $50M revenue, $6M EBITDA, 12% margin.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-100">
                  <p className="text-brand-slate text-xs uppercase tracking-widest font-bold mb-2">Year 2</p>
                  <p className="font-display font-bold text-brand-navy mb-1">The divergence begins</p>
                  <p className="text-brand-slate text-sm leading-relaxed">Company A: 10.5% margin. Company B: 14.0% margin. The gap is <span className="text-brand-gold font-bold">$2.01M</span>.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-brand-gold/40">
                  <p className="text-brand-slate text-xs uppercase tracking-widest font-bold mb-2">Year 3</p>
                  <p className="font-display font-bold text-brand-navy mb-1">The gap compounds</p>
                  <p className="text-brand-slate text-sm leading-relaxed">Company A: 9.5% margin. Company B: 16.0% margin. The gap is <span className="text-brand-gold font-bold">$4.23M annually</span>.</p>
                </div>
              </div>

              <p className="text-brand-slate text-sm mt-6 leading-relaxed">
                Both businesses grow revenue at the same rate. Same sector, same size, same team composition on paper. The difference is not in what they do. It is in how information moves between the people doing it. By year three, Company B is keeping an additional $4.23M of EBITDA every year on identical revenue. That gap is what the coordination layer is worth in real dollars, and it widens every year the decision is deferred.
              </p>
            </figure>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">Where to start</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              The first step is not a platform decision. It is a measurement decision. Before any tool, any hire, any process initiative, the question to answer is: how much is coordination actually costing us right now, and where is the biggest portion of it sitting.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              That is what the LVRGWRKS Leverage Audit does in sixty minutes. Not a technology audit. An operational one. Where is data moving manually. Where are decisions slowing down because information is not available or not trusted. Where is the team spending time on coordination instead of execution. What is the actual labour cost of the friction.
            </p>
            <p className="text-brand-slate leading-relaxed mb-8">
              Once the tax is named and quantified, every decision that follows gets clearer. The platform question, the hiring question, the automation question, all of it. The operators who move first on this get a margin advantage that is difficult to reverse. The ones who do not keep paying the tax and keep wondering where the money went.
            </p>

          </article>

          {/* CTA Box */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white text-center">
              <h3 className="font-display font-bold text-2xl mb-4">Name the tax. Then stop paying it.</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                The 60-Minute Leverage Audit maps your highest-coordination workflows, quantifies what they are costing you, and gives you a clear picture before any technology or hiring decision is made.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <Link
                  href="/leverage-audit"
                  className="inline-block bg-brand-gold text-brand-navy px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all"
                >
                  Book Your Leverage Audit
                </Link>
                <Link
                  href="/coordination-tax-calculator"
                  className="inline-block text-white text-sm font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all"
                >
                  Try the Coordination Tax Calculator
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}