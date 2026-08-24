import {
  Lock, TrendingUp, BrainCircuit, Workflow, Database, Mail, CalendarCheck, ClipboardList, Globe, BarChart3, CalendarClock,
  Puzzle, Wallet, Plug, MousePointerClick, Network,
} from "lucide-react";
import { ScaledPage, PageFoot, PageHead, Reveal } from "../components/Page";
import { Bullets, Callout } from "../components/blocks";
import { Journey, Flywheel } from "../components/diagrams";

/* ============ PAGE 20 — AI BUSINESS OPERATING SYSTEM ============ */
export function P20() {
  return (
    <ScaledPage id="p20">
      <div className="ghost" style={{ width: 380, height: 380, top: -140, right: -140, background: "rgba(212,175,55,.1)" }} />
      <PageHead eyebrow="Chapter 09" tag="The 7th Automation" accent="#f6e27a" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Your AI Business <span className="grad-gold">Operating System</span></h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Six systems automate tasks. The seventh connects them: one customer record flowing through a <strong>single journey</strong> — aware of everything that happened before.</p>
      </Reveal>
      <Reveal>
        <div style={{ position: "relative", marginTop: 14, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(148,184,255,.16)", height: 168 }}>
          <img src="images/ecosystem.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(8,15,30,.75), rgba(8,15,30,.15) 55%, rgba(8,15,30,.65))" }} />
          <div style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)" }}>
            <div className="t-mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "#f6e27a" }}>ONE CONNECTED JOURNEY</div>
            <div className="t-h2" style={{ color: "#fff", marginTop: 4 }}>Context travels with the customer.</div>
          </div>
        </div>
      </Reveal>
      <div style={{ marginTop: 14 }}><Reveal><Journey /></Reveal></div>
      <div className="two-col" style={{ gap: 30, marginTop: 14 }}>
        <Reveal><Bullets gap={7} items={[
          <span><strong>Support knows what they bought.</strong> The CRM from Chapter 2 feeds the assistant from Chapter 3 — no “can you remind me which plan you're on?”</span>,
          <span><strong>Email knows what they asked.</strong> A support question about pricing updates next week's nurture angle automatically.</span>,
          <span><strong>Reviews know when they're happiest.</strong> Scheduling's “appointment completed” event is the trigger that asks — at the peak moment.</span>,
        ]} /></Reveal>
        <Reveal><div className="grid" style={{ gap: 12 }}>
          <Callout variant="gold" icon={<Network size={15} />} title="Few connected beats many disconnected">
            The goal was never forty clever bots. It's <strong>eight quiet handoffs</strong> between seven systems you actually use. Every new automation must plug into this map — or it doesn't get built.
          </Callout>
          <Callout variant="violet" icon={<TrendingUp size={15} />}>
            <strong>Why it compounds:</strong> each connection makes every other system smarter. Year one saves hours; year two it starts making decisions obvious.
          </Callout>
        </div></Reveal>
      </div>
      <PageFoot n={20} section="Chapter 09 · Operating System" />
    </ScaledPage>
  );
}

/* ============ PAGE 21 — THE FLYWHEEL ============ */
export function P21() {
  const links = [
    { n: "1 → 3", t: "Lead gen captures strangers; content creates more of them." },
    { n: "2 → all", t: "Support frees the hours that feed every other system." },
    { n: "3 → 1", t: "Content attracts the visitors the lead machine converts." },
    { n: "4 → 5", t: "Email warms leads until follow-up closes them." },
    { n: "5 → 6", t: "Follow-up's goal is one thing: a booked appointment." },
    { n: "6 → 7", t: "A completed appointment triggers the review request." },
    { n: "7 → 1", t: "Fresh reviews become the proof that powers new leads." },
  ];
  return (
    <ScaledPage id="p21">
      <PageHead eyebrow="Chapter 09" tag="See It Whole" accent="#f6e27a" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Connect the 7 Automations</h1>
        <p className="t-lead" style={{ marginTop: 10 }}>Each system's output is the next system's fuel. That's the flywheel — <strong>push it once, and it keeps turning.</strong></p>
      </Reveal>
      <Reveal><div style={{ maxWidth: 660, margin: "-4px auto 0" }}><Flywheel /></div></Reveal>
      <Reveal>
        <div className="grid gap-x-8 gap-y-1.5" style={{ gridTemplateColumns: "1fr 1fr", marginTop: -6 }}>
          {links.map((l) => (
            <div key={l.n} className="flex items-baseline gap-2.5" style={{ padding: "3px 0" }}>
              <span className="t-mono grad-gold" style={{ fontSize: 11, flex: "none", fontWeight: 600 }}>{l.n}</span>
              <span className="t-small" style={{ fontSize: 12 }}>{l.t}</span>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <div className="flex items-start gap-3" style={{ marginTop: 12 }}>
          <Callout variant="violet" icon={<Lock size={15} />} title="Data rules for connected systems">
            Move the <strong>minimum data needed</strong>, grant tools only the permissions they use, keep a human approving anything customer-facing, and revisit connections quarterly. Convenience never outranks your customers' privacy.
          </Callout>
        </div>
      </Reveal>
      <PageFoot n={21} section="Chapter 09 · The Flywheel" />
    </ScaledPage>
  );
}

/* ============ PAGE 22 — TOOL STACK ============ */
export function P22() {
  const tools = [
    { i: <BrainCircuit size={16} />, c: "v" as const, k: "AI assistant", e: "ChatGPT · Claude · Gemini", d: "Drafts, classifies, decides.", s: "The brain of every system here." },
    { i: <Workflow size={16} />, c: "b" as const, k: "Automation platform", e: "Zapier · Make · n8n", d: "Connects apps with rules.", s: "The plumbing — triggers & actions." },
    { i: <Database size={16} />, c: "c" as const, k: "CRM", e: "HubSpot · Pipedrive", d: "One record per customer.", s: "The memory everything shares." },
    { i: <Mail size={16} />, c: "m" as const, k: "Email platform", e: "Mailchimp · Kit · Brevo", d: "Sequences & broadcasts.", s: "Powers Chapters 5 & 6." },
    { i: <CalendarCheck size={16} />, c: "b" as const, k: "Calendar / booking", e: "Calendly · Cal.com", d: "Slots, reminders, buffers.", s: "Chapter 7 in a box." },
    { i: <ClipboardList size={16} />, c: "c" as const, k: "Form builder", e: "Tally · Typeform · Forms", d: "Captures lead answers.", s: "The front door of Chapter 2." },
    { i: <Globe size={16} />, c: "v" as const, k: "Website / landing", e: "Carrd · Webflow · WordPress", d: "Hosts pages & the bot.", s: "Where Chapters 2–4 live." },
    { i: <BarChart3 size={16} />, c: "g" as const, k: "Analytics", e: "GA4 · built-in reports", d: "Traffic & conversions.", s: "Feeds Chapter 10's review." },
    { i: <CalendarClock size={16} />, c: "m" as const, k: "Content scheduler", e: "Buffer · Later · Metricool", d: "Queues your content engine.", s: "Chapter 4's autopilot." },
  ];
  return (
    <ScaledPage id="p22">
      <div className="ghost" style={{ width: 340, height: 340, bottom: -140, right: -140, background: "rgba(79,141,255,.12)" }} />
      <PageHead eyebrow="Chapter 09" tag="Tool-Agnostic" accent="#f6e27a" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>The Simple AI Tool Stack</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Nine categories. That's the whole shopping list — <strong>buy for the job, not the hype</strong>. Popular examples shown; features, pricing and integrations change, so verify before you commit.</p>
      </Reveal>
      <Reveal>
        <div className="grid gap-2.5" style={{ gridTemplateColumns: "repeat(3, 1fr)", marginTop: 16 }}>
          {tools.map((t, i) => (
            <div key={i} className="card" style={{ padding: "13px 14px" }}>
              <div className="flex items-center gap-2.5">
                <span className={`icobox ico-${t.c}`} style={{ width: 32, height: 32, borderRadius: 9 }}>{t.i}</span>
                <div>
                  <div className="t-h3" style={{ fontSize: 13.5, color: "#fff" }}>{t.k}</div>
                  <div className="t-mono" style={{ fontSize: 9.5, color: "#7e93b8" }}>{t.e}</div>
                </div>
              </div>
              <div className="t-small" style={{ fontSize: 11.5, marginTop: 7 }}>{t.d} <span style={{ color: "#6b80a8" }}>{t.s}</span></div>
            </div>
          ))}
        </div>
      </Reveal>
      <div className="two-col" style={{ gap: 26, marginTop: 14 }}>
        <Reveal>
          <Callout variant="cyan" icon={<Puzzle size={15} />} title="Choose by five filters">
            <strong>Need</strong> (solves this chapter's job?) · <strong>Fit</strong> (integrates with your stack?) · <strong>Budget</strong> (free tier to start?) · <strong>Privacy</strong> (how is customer data handled?) · <strong>Ease</strong> (will you actually open it weekly?).
          </Callout>
        </Reveal>
        <Reveal>
          <Callout variant="violet" icon={<Wallet size={15} />} title="Tools change — systems don't">
            The workflows in this book outlive any vendor. Master the <strong>pattern</strong>, swap the parts freely. And resist tool-collecting: <Plug size={12} style={{ display: "inline", marginBottom: 2 }} /> every subscription must earn its seat monthly. <span style={{ color: "#7e93b8" }}><MousePointerClick size={12} style={{ display: "inline" }} /> No tool is the strategy.</span>
          </Callout>
        </Reveal>
      </div>
      <PageFoot n={22} section="Chapter 09 · Tool Stack" />
    </ScaledPage>
  );
}
