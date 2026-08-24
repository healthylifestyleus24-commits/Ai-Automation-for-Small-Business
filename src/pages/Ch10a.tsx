import {
  Flag, Hourglass, TrendingUp, Wrench, Gauge, Users, HeartPulse, Sigma, CalendarClock, Compass,
  ListChecks, Timer, CircleDollarSign, TriangleAlert,
} from "lucide-react";
import { ScaledPage, PageFoot, PageHead, Reveal } from "../components/Page";
import { Bullets, Callout, MiniCard, SectionHead } from "../components/blocks";
import { Roadmap30, Matrix22, DashboardMock } from "../components/diagrams";

/* ============ PAGE 23 — 30-DAY ROADMAP ============ */
export function P23() {
  return (
    <ScaledPage id="p23">
      <div className="ghost" style={{ width: 360, height: 360, top: -140, right: -140, background: "rgba(124,58,237,.14)" }} />
      <PageHead eyebrow="Chapter 10" tag="Execute" accent="#a78bfa" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Your 30-Day AI Automation Roadmap</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Four weeks, four wins — about <strong>an hour a day</strong>. Small by design: a finished small system beats an ambitious abandoned one, every time.</p>
      </Reveal>
      <div style={{ marginTop: 16 }}><Reveal><Roadmap30 /></Reveal></div>
      <div className="two-col" style={{ gap: 30, marginTop: 16 }}>
        <Reveal><div className="grid" style={{ gap: 12 }}>
          <SectionHead>What “done” looks like each week</SectionHead>
          <div className="grid gap-2">
            {[
              { w: "Week 1 · Audit", d: "Log every task you repeat for 5 working days. Score each with R·T·R·V (p.05). Nothing gets built yet — pattern-seeking only.", c: "#22d3ee" },
              { w: "Week 2 · Build #1", d: "Take the top-scoring task. Build it end-to-end, test it as your own customer, and run it in parallel with your manual way.", c: "#4f8dff" },
              { w: "Week 3 · Connect", d: "Wire system #1 into its neighbor — lead form into email, booking into reviews. Add the human-review checkpoint.", c: "#a78bfa" },
              { w: "Week 4 · Optimize", d: "Measure against p.25's scoreboard, fix the top friction point, document the workflow, and choose automation #2 for next month.", c: "#d4af37" },
            ].map((x, i) => (
              <div key={i} className="card" style={{ padding: "11px 14px", borderLeft: `3px solid ${x.c}` }}>
                <div className="t-h3" style={{ fontSize: 14, color: "#fff" }}>{x.w}</div>
                <div className="t-small" style={{ marginTop: 3 }}>{x.d}</div>
              </div>
            ))}
          </div>
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 13 }}>
          <div className="grid gap-2.5" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <MiniCard c="v" icon={<Hourglass size={15} />} title="One hour a day">Same time daily. Automation rewards <strong>consistency over intensity</strong> — skip weekends guilt-free.</MiniCard>
            <MiniCard c="b" icon={<Wrench size={15} />} title="Parallel running">Run new systems <strong>alongside</strong> the old way for a week before trusting them alone.</MiniCard>
            <MiniCard c="c" icon={<ListChecks size={15} />} title="Document as you go">Future-you (and future hires) inherit a playbook, not a mystery. 5 lines per system is enough.</MiniCard>
            <MiniCard c="g" icon={<Flag size={15} />} title="Day-30 checkpoint">One system live, one connected, results measured, next target picked. That's a successful month.</MiniCard>
          </div>
          <Callout variant="gold" icon={<Compass size={15} />} title="If you fall behind">
            Shrink the scope, never the habit. A two-step automation that <strong>actually runs</strong> beats the seven-step masterpiece you never finished. Month two exists for a reason.
          </Callout>
        </div></Reveal>
      </div>
      <PageFoot n={23} section="Chapter 10 · Roadmap" />
    </ScaledPage>
  );
}

/* ============ PAGE 24 — CHOOSE YOUR FIRST ============ */
export function P24() {
  return (
    <ScaledPage id="p24">
      <PageHead eyebrow="Chapter 10" tag="Decide" accent="#a78bfa" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Choose Your First Automation</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Score every candidate on six questions, then let this matrix tell you what to build first. <strong>Momentum is a strategy.</strong></p>
      </Reveal>
      <div className="two-col" style={{ gap: 30, marginTop: 16, alignItems: "start" }}>
        <Reveal><div className="grid" style={{ gap: 14 }}>
          <Matrix22 />
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 13 }}>
          <div>
            <SectionHead>Score each candidate 1–5</SectionHead>
            <div className="grid gap-2" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {[
                { i: <Hourglass size={14} />, t: "Time saved", s: "hours back weekly?" }, { i: <CircleDollarSign size={14} />, t: "Revenue potential", s: "protects or creates income?" },
                { i: <Wrench size={14} />, t: "Ease of build", s: "days, not weeks?" }, { i: <Gauge size={14} />, t: "Frequency", s: "daily beats monthly" },
                { i: <Users size={14} />, t: "Customer impact", s: "will they feel it?" }, { i: <HeartPulse size={14} />, t: "Business importance", s: "core, or nice-to-have?" },
              ].map((x, i) => (
                <div key={i} className="card flex items-start gap-2.5" style={{ padding: "10px 12px" }}>
                  <span style={{ color: "#a78bfa", marginTop: 1, flex: "none" }}>{x.i}</span>
                  <div><div className="t-h3" style={{ fontSize: 13, color: "#fff" }}>{x.t}</div><div className="t-small" style={{ fontSize: 11 }}>{x.s}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="card" style={{ padding: "14px 16px", borderColor: "rgba(212,175,55,.32)" }}>
            <div className="t-eyebrow" style={{ fontSize: 10, color: "#f6e27a", marginBottom: 7 }}>The 30-second worksheet</div>
            <div className="grid gap-1.5">
              {["If this ran perfectly, what would my Tuesday look like?", "What's the worst realistic failure — and can a human catch it?", "Could a version of this be live by Friday?"].map((q, i) => (
                <div key={i} className="t-body flex gap-2.5" style={{ fontSize: 13.5, color: "#d7e4fb" }}><span className="t-mono" style={{ color: "#f6e27a", flex: "none" }}>Q{i + 1}</span>{q}</div>
              ))}
            </div>
          </div>
          <Callout variant="violet" icon={<Sigma size={15} />}>
            <strong>Total each task out of 30.</strong> Highest score wins the week — unless it sits in the red quadrant, in which case second place wins. Discipline beats excitement.
          </Callout>
        </div></Reveal>
      </div>
      <PageFoot n={24} section="Chapter 10 · Prioritize" />
    </ScaledPage>
  );
}

/* ============ PAGE 25 — MEASURE RESULTS ============ */
export function P25() {
  return (
    <ScaledPage id="p25">
      <div className="ghost" style={{ width: 340, height: 340, bottom: -140, left: -140, background: "rgba(34,211,238,.1)" }} />
      <PageHead eyebrow="Chapter 10" tag="Prove It" accent="#a78bfa" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Measure the Results</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>“It feels faster” is a start. A <strong>monthly scoreboard</strong> turns automation from an experiment into an asset you can price.</p>
      </Reveal>
      <div className="two-col" style={{ gap: 30, marginTop: 16 }}>
        <Reveal><div className="grid" style={{ gap: 13 }}>
          <DashboardMock />
          <div className="card" style={{ padding: "14px 16px", borderColor: "rgba(212,175,55,.3)", textAlign: "center" }}>
            <div className="t-eyebrow" style={{ fontSize: 9.5, color: "#7488ad" }}>The only formula you need</div>
            <div className="t-h2" style={{ marginTop: 5 }}><span className="grad-text">Automation ROI</span> <span style={{ color: "#7488ad" }}>=</span> <span style={{ color: "#fff" }}>Value created</span> <span className="grad-gold">−</span> <span style={{ color: "#fff" }}>Automation cost</span></div>
            <p className="t-small" style={{ marginTop: 6 }}><strong>Value</strong> = (hours saved × your hourly worth) + revenue influenced. <strong>Cost</strong> = subscriptions + setup hours. Review monthly; kill what can't pay for itself.</p>
          </div>
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 13 }}>
          <div>
            <SectionHead>What to track</SectionHead>
            <div className="flex flex-wrap gap-1.5">
              {["Hours saved", "Leads generated", "Response time", "Conversion rate", "Appointments booked", "Follow-up rate", "Customer satisfaction", "Reviews generated", "Revenue influenced", "Automation errors"].map((t) => (
                <span key={t} className="chip" style={{ fontSize: 11, padding: "4.5px 11px" }}>{t}</span>
              ))}
            </div>
          </div>
          <Bullets gap={7} items={[
            <span><strong>Baseline first.</strong> Note today's numbers <em>before</em> you automate — otherwise there's nothing to beat.</span>,
            <span><strong>Errors are a KPI.</strong> Track failed runs and bad outputs. Near-zero is the goal; zero-vigilance is not.</span>,
            <span><strong>Some wins are quiet.</strong> Calmer inbox, faster Tuesday, customers who feel heard — real value the spreadsheet misses. Count those too, in words.</span>,
          ]} />
          <Callout variant="cyan" icon={<CalendarClock size={15} />} title="The 30-minute monthly ritual">
            One <Timer size={12} style={{ display: "inline", marginBottom: 2 }} /> calendar slot: read the scoreboard, find the biggest friction point, make <strong>one improvement</strong>. Then close the laptop. Twelve small tune-ups a year is how good systems become great ones.
          </Callout>
          <Callout variant="gold" icon={<TriangleAlert size={15} />}>
            If a metric moves the <strong>wrong</strong> way — slower replies, colder leads, crankier customers — the automation isn't broken. The design is. <TrendingUp size={12} style={{ display: "inline", marginBottom: 2 }} /> Page 26 is your repair manual.
          </Callout>
        </div></Reveal>
      </div>
      <PageFoot n={25} section="Chapter 10 · Measurement" />
    </ScaledPage>
  );
}
