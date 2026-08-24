import { XCircle, CheckCircle2, Rocket, CalendarDays, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { ScaledPage, PageFoot, PageHead, Reveal } from "../components/Page";
import { SectionHead } from "../components/blocks";
import { LaunchArrow } from "../components/diagrams";

/* ============ PAGE 26 — COMMON MISTAKES ============ */
export function P26() {
  const items: [string, string, string, string][] = [
    ["Automating the wrong task", "Runs perfectly; nothing improves.", "Task was rare or judgment-heavy.", "Score R·T·R·V first (p.05). Frequent + rule-based wins."],
    ["Too much, too soon", "Five half-broken systems at once.", "Excitement outran scope.", "One system per month, fully live, before the next."],
    ["Poor-quality data", "Confident, wrong answers.", "Stale knowledge base, messy CRM.", "One source of truth; clean inputs every quarter."],
    ["No human review", "A bad message reached a customer.", "Full autopilot from day one.", "Approval step on customer-facing output — early on, always."],
    ["Generic AI voice", "“That reply sounded like a robot.”", "No voice notes, no real examples fed.", "Write a voice card; feed real replies; you edit the final pass."],
    ["Broken integrations", "Leads silently stopped flowing.", "Expired token, renamed field.", "Failure alerts on; a monthly 5-minute test submission."],
    ["Ignoring privacy", "Customer data in unsecured tools.", "Speed beat diligence.", "Minimum data, 2FA everywhere, retention limits in writing."],
    ["No monitoring", "Same error repeated for weeks.", "“Set and forget” thinking.", "An error log + a 10-minute weekly glance."],
    ["No fallback plan", "One outage became missed jobs.", "A single point of failure.", "Document the manual path; keep a backup inbox alert."],
    ["Never measuring", "“I think it's working?”", "No baseline was taken.", "The p.25 scoreboard — started before, read monthly."],
  ];
  return (
    <ScaledPage id="p26">
      <div className="ghost" style={{ width: 340, height: 340, top: -140, left: -140, background: "rgba(244,113,116,.1)" }} />
      <PageHead eyebrow="Chapter 10" tag="Repair Manual" accent="#f87171" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Common AI Automation Mistakes</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Every mistake below is normal, fixable, and <strong>cheaper to read about than to live through</strong>.</p>
      </Reveal>
      <Reveal>
        <div className="grid gap-2.5" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 14 }}>
          <div className="card flex items-center gap-3" style={{ padding: "10px 15px", borderColor: "rgba(248,113,113,.3)" }}>
            <XCircle size={17} color="#f87171" style={{ flex: "none" }} />
            <span className="t-small" style={{ fontSize: 12, color: "#f8caca" }}><strong style={{ color: "#fecaca" }}>Bad automation:</strong> big, opaque, ownerless, unsupervised, silent when it fails.</span>
          </div>
          <div className="card flex items-center gap-3" style={{ padding: "10px 15px", borderColor: "rgba(52,211,153,.3)" }}>
            <CheckCircle2 size={17} color="#34d399" style={{ flex: "none" }} />
            <span className="t-small" style={{ fontSize: 12, color: "#c4ecd9" }}><strong style={{ color: "#a7f3d0" }}>Smart automation:</strong> small, documented, supervised, loud when it fails, boring in the best way.</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="grid gap-2" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 11 }}>
          {items.map((m, i) => (
            <div key={i} className="card" style={{ padding: "9px 12px" }}>
              <div className="flex items-baseline gap-2">
                <span className="t-mono" style={{ color: "#f87171", fontSize: 11, fontWeight: 600, flex: "none" }}>{String(i + 1).padStart(2, "0")}</span>
                <span className="t-h3" style={{ fontSize: 13, color: "#fff" }}>{m[0]}</span>
              </div>
              <div className="t-small grid gap-0.5" style={{ fontSize: 11, marginTop: 4, gridTemplateColumns: "34px 1fr", columnGap: 6 }}>
                <span className="t-mono" style={{ fontSize: 9, color: "#7488ad", paddingTop: 1.5 }}>LOOKS</span><span style={{ color: "#b9c9e6" }}>{m[1]}</span>
                <span className="t-mono" style={{ fontSize: 9, color: "#7488ad", paddingTop: 1.5 }}>WHY</span><span style={{ color: "#93a8cb" }}>{m[2]}</span>
                <span className="t-mono" style={{ fontSize: 9, color: "#34d399", paddingTop: 1.5 }}>FIX</span><span style={{ color: "#d7e4fb" }}>{m[3]}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <PageFoot n={26} section="Chapter 10 · Mistakes" />
    </ScaledPage>
  );
}

/* ============ PAGE 27 — ACTION PLAN + CHECKLIST ============ */
export function P27() {
  const checks = [
    "Identify 3 repetitive tasks you did this week",
    "Estimate the weekly time each one consumes",
    "Choose the highest-value task (p.24 matrix)",
    "Define the desired outcome in one sentence",
    "Choose the tools — category first, brand second",
    "Map and build the workflow, step by step",
    "Test it as your own customer, twice",
    "Add human oversight on customer-facing output",
    "Launch small — one audience, one channel",
    "Measure results against your baseline",
    "Improve one thing, then document the system",
  ];
  return (
    <ScaledPage id="p27">
      <div className="ghost" style={{ width: 340, height: 340, bottom: -140, right: -140, background: "rgba(52,211,153,.09)" }} />
      <PageHead eyebrow="Chapter 10" tag="Your Move" accent="#34d399" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Your Action Plan</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Print this page. Tick the boxes. <strong>Eleven small steps</strong> stand between you and your first working automation.</p>
      </Reveal>
      <Reveal>
        <div className="card" style={{ padding: "16px 20px", marginTop: 14 }}>
          <div className="t-eyebrow" style={{ fontSize: 10, color: "#34d399", marginBottom: 10 }}>Quick-start checklist</div>
          <div className="grid gap-x-8 gap-y-2.5" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {checks.map((c, i) => (
              <div key={i} className="checkitem">
                <span className="checkbox" />
                <span className="t-body" style={{ fontSize: 13.5, color: "#d5e2f8" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="two-col" style={{ gap: 28, marginTop: 14 }}>
        <Reveal><div className="grid" style={{ gap: 11 }}>
          <SectionHead>Start today — literally</SectionHead>
          {[
            { i: <Rocket size={15} />, c: "c" as const, t: "Today · 30 minutes", d: "Write your 3 most-repeated tasks on paper. Score them R·T·R·V. Circle the winner. That's it — day one, done." },
            { i: <CalendarDays size={15} />, c: "v" as const, t: "This week", d: "Build the circled one. Form + AI step + one action. Test it yourself. Turn it on with supervision." },
            { i: <TrendingUp size={15} />, c: "g" as const, t: "This month", d: "Run the p.23 roadmap: connect it to a neighbor, measure the scoreboard, document five lines, pick automation #2." },
          ].map((x, i) => (
            <div key={i} className="card flex items-start gap-3" style={{ padding: "11px 14px" }}>
              <span className={`icobox ico-${x.c}`} style={{ width: 32, height: 32, borderRadius: 9, flex: "none" }}>{x.i}</span>
              <div><div className="t-h3" style={{ fontSize: 14, color: "#fff" }}>{x.t}</div><div className="t-small" style={{ marginTop: 2 }}>{x.d}</div></div>
            </div>
          ))}
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 10 }}>
          <LaunchArrow />
          <div className="card" style={{ padding: "13px 16px", borderColor: "rgba(212,175,55,.3)" }}>
            <p className="t-body" style={{ fontSize: 14, color: "#e8f0ff" }}>
              <Sparkles size={14} color="#f6e27a" style={{ display: "inline", marginBottom: 2 }} /> <strong>Don't automate your business overnight.</strong> Automate one meaningful thing this week — then let the wins compound. A year from now you'll run a quieter inbox, a fuller calendar, and a business that works even when you don't.
            </p>
          </div>
        </div></Reveal>
      </div>
      <Reveal>
        <div className="flex items-center justify-center gap-2" style={{ marginTop: 12 }}>
          <span className="t-eyebrow" style={{ color: "#7488ad", fontSize: 9.5 }}>One task</span><ArrowRight size={12} color="#4f8dff" />
          <span className="t-eyebrow" style={{ color: "#9fb3d6", fontSize: 9.5 }}>One system</span><ArrowRight size={12} color="#7c3aed" />
          <span className="t-eyebrow" style={{ color: "#f6e27a", fontSize: 9.5 }}>One flywheel</span>
        </div>
      </Reveal>
      <PageFoot n={27} section="Chapter 10 · Action Plan" />
    </ScaledPage>
  );
}

/* ============ PAGE 28 — CLOSING ============ */
export function P28() {
  return (
    <ScaledPage id="p28" last>
      <img src="images/closing.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,12,26,.88) 0%, rgba(6,12,26,.55) 40%, rgba(6,12,26,.25) 70%, rgba(6,12,26,.8) 100%)" }} />
      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Reveal className="flex flex-col items-center">
          <div className="gold-ruler" style={{ marginTop: 66 }} />
          <h1 className="t-display" style={{ marginTop: 30, fontSize: 52, color: "#fff", maxWidth: 620, textShadow: "0 8px 44px rgba(0,16,48,.8)" }}>
            Work Smarter. <span className="grad-text">Automate the Repetitive.</span> Grow the Business.
          </h1>
          <p className="t-lead" style={{ marginTop: 26, maxWidth: 560, color: "#ccdaf5" }}>
            AI automation was never about replacing people. It's about <strong>removing the work that keeps people from doing their best work</strong> — so you can spend your hours on customers, strategy, creativity, and growth.
          </p>
          <p className="t-body" style={{ marginTop: 16, maxWidth: 520, color: "#9fb3d6" }}>
            You now have the map: seven systems, one flywheel, thirty days. The businesses that win the next decade won't be the biggest — they'll be the ones whose <strong>owners got their time back first</strong>.
          </p>
        </Reveal>
        <div style={{ flex: 1 }} />
        <Reveal className="flex flex-col items-center">
          <span className="chip" style={{ background: "rgba(10,22,44,.6)", backdropFilter: "blur(8px)", borderColor: "rgba(34,211,238,.4)", color: "#aee9ff", padding: "8px 18px", fontSize: 12 }}>Your first automation is one afternoon away.</span>
          <div style={{ marginTop: 30, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span className="t-h2 grad-text" style={{ fontSize: 24 }}>7 AI Automations for Small Business</span>
            <span className="t-body" style={{ fontSize: 13.5, color: "#c8d7f5" }}>Simple Systems That Save Time, Cut Costs &amp; Get More Customers</span>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 6 }}>
              <span style={{ width: 30, height: 1, background: "linear-gradient(90deg,transparent,#D4AF37)" }} />
              <span className="t-eyebrow" style={{ color: "#f6e27a", letterSpacing: "0.3em", fontSize: 12 }}>By GrowthVault</span>
              <span style={{ width: 30, height: 1, background: "linear-gradient(270deg,transparent,#D4AF37)" }} />
            </div>
            <span className="t-mono" style={{ fontSize: 10, color: "#54678c", letterSpacing: "0.2em", marginTop: 10 }}>PREMIUM DIGITAL EDITION · THANK YOU FOR READING</span>
          </div>
        </Reveal>
      </div>
      <PageFoot n={28} section="The End · Now Begin" />
    </ScaledPage>
  );
}
