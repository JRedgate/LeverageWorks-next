import React from 'react';
import Link from 'next/link';

export default function HiddenCostOfEstimatingPage() {
  return (
    <>
      <article className="pt-40 pb-20 md:pt-52 md:pb-28 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <Link href="/insights" className="text-brand-gold font-bold tracking-widest text-[11px] uppercase hover:text-brand-navy transition-colors">Insights</Link>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-6 leading-tight">
              The Hidden Cost of Estimating: What We Found Inside Three Project Files
            </h1>
            <p className="text-brand-slate text-sm mb-6">
              By Jeremy Redgate, Founder, LVRGWRKS &nbsp;&middot;&nbsp; Published August 2026
            </p>
            <p className="text-brand-slate text-xl leading-relaxed mb-10">
              We opened three completed estimate files from a mid-market engineering contractor and compared them line by line. Almost nothing was reused between jobs. Here is what that costs, and why speed is not the prize most firms think it is.
            </p>
            <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy mt-14 mb-5 leading-snug">Every estimate starts from a blank sheet, and almost nobody measures what that costs</h2>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">Estimating is the most expensive manual process in most engineering and construction businesses, and it is almost never on the list of things to fix. It sits upstream of everything. It sets the price of the job, it decides which work you chase, and it is the one phase where a small error compounds across the entire project. And in most firms it is done from scratch, every time, by the most expensive people in the building.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">We recently pulled apart three completed estimate files from a mid-market engineering contractor in Western Canada. Multi-discipline work, several hundred station-level scopes, a mature business with nearly thirty years of project history behind it. The point was not to audit their team, who are good. The point was to find out what the process actually costs when you measure it instead of assuming.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">Four things came out of it. The last one was not what we expected.</p>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy mt-14 mb-5 leading-snug">One: almost nothing gets reused between jobs</h2>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">We took two projects completed in the same year, in the same discipline, for similar facilities, and compared the task lists line by line.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">One estimate carried forty six distinct task names. The other carried seventeen. Between them, only three or four names overlapped.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">That is not a library being pruned. That is two people authoring from a blank sheet, independently, months apart, describing substantially similar work in substantially different words. Every one of those task names was typed by a senior person deciding what to call it and how long it takes.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">The knowledge exists. It is sitting in completed files on a server. It is just not reachable, because nobody has time to mine forty completed workbooks to build a task library, and there is no reward for doing it.</p>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy mt-14 mb-5 leading-snug">Two: the template drifted, and nobody migrated</h2>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">Two generations of the estimating workbook were in circulation at the same time. That alone is normal enough. What was not normal was that the column order was not stable even inside a single generation. In one file the work code sat in column four. In another file from the same year, it was the last column.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">This matters more than it sounds. The most common estimating shortcut in any firm is copying a block of rows from a previous job into a new one. When the column order differs between the source and the destination, that copy silently misaligns. The workbook does not complain. The arithmetic still runs. The total is simply wrong in a way nobody can see.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">We did not find evidence of that having happened. We found the conditions for it, which is worse, because you cannot audit for an error you cannot detect.</p>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy mt-14 mb-5 leading-snug">Three: revisions rebuild the arithmetic by hand</h2>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">One of the three files had reached revision five.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">Every revision in a spreadsheet-based estimate means someone re-doing the arithmetic. The task rows change, the hours change, the rollups have to be rebuilt, the milestone and cost summaries have to be reconciled, and the proposal document has to be brought back into line with the workbook behind it. All by hand, all at the point in the bid cycle when there is the least time available.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">Most firms count the hours it takes to produce an estimate. Very few count the hours it takes to produce revision three, four and five of the same estimate. When we asked how long an estimate takes, the answer described the first cut only. That is the answer you will get in your own business too, unless you ask the question precisely.</p>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy mt-14 mb-5 leading-snug">Four: the effort is not distributed the way people assume</h2>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">This was the useful part. When we mapped hours by task type across all three files, the work split cleanly into two groups.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">Some tasks were effectively fixed. Document control for issue-for-review and issue-for-construction ran five hours on a batched job, every single time. Cost control ran six. Drawing quality assurance ran twelve. Same numbers, different projects, different estimators. Those are not estimates. They are constants that get retyped.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">Other tasks moved by more than two to one on the same job type. Project management ranged from fifty to sixty four hours across six stations on a single project. Structural drafting ranged from fifty four to eighty four. That spread is real judgment, responding to real differences in scope, and it is exactly what you are paying a senior estimator for.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">So roughly speaking, one part of the estimate is a constant being manually re-entered, and the other part is expert judgment. Most firms treat both the same way and price both at the same rate.</p>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy mt-14 mb-5 leading-snug">Now the part that surprised us</h2>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">The obvious conclusion is that estimating should be faster. Automate the constants, keep the judgment, get the hours back. That is true, and it is worth doing, and it is not where the money is.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">When we ran the numbers, this firm issued around a hundred and sixty bids a year and won roughly seventy percent of them. That is a high win rate, and it changes the entire economics of the problem.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">At a thirty percent loss rate, the cost of bids that never convert is real but modest. The usual argument for fixing estimating, that you are burning money on work you do not win, mostly evaporates. And because this firm was not turning away RFPs for lack of capacity, the other usual argument, that you could bid more, evaporated too.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">What is left is the hundred-odd jobs a year they do win.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">On won work, estimating accuracy is not an efficiency question. It is a margin question. A firm winning a hundred jobs a year at a few hundred thousand dollars each is pricing tens of millions of dollars of delivered work off a process where task names are invented fresh each time, column orders drift between templates, and the arithmetic is rebuilt by hand at revision five. A one percent swing in estimating accuracy across that volume is worth more than every hour the team would save.</p>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy mt-14 mb-5 leading-snug">Which means the question most firms ask is the wrong one</h2>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">The question we usually get asked is how much faster estimating could be. It is the wrong question for any business that wins most of what it bids and is not capacity constrained.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">The right question is narrower and much more uncomfortable: across the jobs you won last year, how close were the issued hours to the hours the job actually took? Most firms cannot answer that, because the estimate and the actuals live in different systems and nobody reconciles them after the fact.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">If you can answer it, you know exactly what estimating precision is worth to you. If you cannot, that is the first thing to fix, and it does not require any technology at all.</p>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy mt-14 mb-5 leading-snug">What we would actually do about it</h2>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">Three things, in this order.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">Start by mining your own completed estimates for the constants. You almost certainly have twenty to forty finished workbooks sitting on a server. The fixed tasks, the ones that come out the same every time, can be extracted into a reusable library in a few days of work. That alone removes a meaningful share of the typing without touching anything an estimator would call judgment.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">Then fix the template drift before you build anything on top of it. One workbook generation, one column order, migrated properly. If you automate on top of two inconsistent templates you have automated an error source.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">Only then automate. And when you do, the rule that matters is that the model never produces a dollar figure. Have it select tasks and set hours, which is the judgment part, and have code do every rate lookup, every multiplication and every rollup. That is what makes the estimate and the proposal agree, and it is what makes the output safe to put in front of a client.</p>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy mt-14 mb-5 leading-snug">The uncomfortable summary</h2>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">Estimating is usually treated as an administrative function that happens before the real work starts. In an engineering business it is the moment the margin on the job is decided, done under time pressure, from a blank sheet, by people whose time is the most expensive in the company.</p>
                <p className="text-brand-slate leading-relaxed text-lg mb-6">If your firm wins most of what it bids, the prize is not a faster estimate. It is a more precise one.</p>
            </div>
          </div>
        </div>
      </article>

      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 leading-tight">What is estimating costing you?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            Sixty minutes, no cost, no commitment. We map your highest-coordination workflows, put a real number on the labour cost, and you leave with it in writing.
          </p>
          <Link href="/leverage-audit" className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl">
            Request Free Leverage Audit
          </Link>
        </div>
      </section>
    </>
  );
}
