import {
  Zap, Magnet, ClipboardList, Database, Bell, Send, Globe, Filter, Gift, LayoutTemplate,
  Hourglass, BadgeCheck, Workflow, HandMetal, MousePointerClick, Lightbulb, ShieldQuestion, CalendarClock, MessageSquare, ReceiptText, Megaphone, Star,
} from "lucide-react";
import { ScaledPage, PageFoot, PageHead, Reveal } from "../components/Page";
import { Bullets, Callout, FlowSteps, MiniCard, MonoCard, NumSteps, SectionHead } from "../components/blocks";
import { ChaosOrder, Scorecard } from "../components/diagrams";

/* ============ PAGE 4 — THE AUTOMATION ADVANTAGE ============ */
export function P04() {
  return (
    <ScaledPage id="p4">
      <div className="ghost" style={{ width: 360, height: 360, top: -150, right: -130, background: "rgba(79,141,255,.13)" }} />
      <PageHead eyebrow="Chapter 01" tag="Mindset & Method" accent="#22d3ee" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>The Small Business Automation Advantage</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>
          <strong>AI automation</strong> is simply this: software notices a trigger — a form, an email, a booking — uses AI to <strong>understand it and decide</strong>, then takes the right action. On its own. While you're doing the work only you can do.
        </p>
      </Reveal>
      <div className="two-col" style={{ gap: 30, marginTop: 20 }}>
        <Reveal><div className="grid" style={{ gap: 15 }}>
          <div>
            <SectionHead>Why small businesses need it most</SectionHead>
            <Bullets gap={7} items={[
              <span><strong>You're the bottleneck.</strong> In a big company a slow reply costs a lead; in yours, it costs a lead <em>and</em> the hour you spent answering.</span>,
              <span><strong>Consistency beats heroics.</strong> Automations reply in seconds, follow up every time, and never have a bad Tuesday.</span>,
              <span><strong>Headcount-free capacity.</strong> You gain the output of an assistant for the price of a few software subscriptions.</span>,
            ]} />
          </div>
          <div>
            <div className="t-h3" style={{ color: "#fff", marginBottom: 7 }}>The silent time thieves</div>
            <div className="flex flex-wrap gap-1.5">
              {["Inbox triage", "Copy-paste CRM updates", "Scheduling ping-pong", "“Just bumping this up” emails", "Posting to 4 platforms", "Invoice chasing", "Review requests", "Re-writing the same reply"].map((t) => (
                <span key={t} className="chip" style={{ fontSize: 10.5, padding: "4px 10px", color: "#f8caca", borderColor: "rgba(248,113,113,.3)" }}><Hourglass size={11} />{t}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-2.5" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <MiniCard c="m" icon={<HandMetal size={16} />} title="AI assistance">
              You ask, AI answers. Helpful — but <strong>you</strong> still show up, prompt, copy, and paste every single time.
            </MiniCard>
            <MiniCard c="c" icon={<Workflow size={16} />} title="True automation">
              The system watches, decides, and acts — <strong>no prompting needed</strong>. You review outcomes, not drafts.
            </MiniCard>
          </div>
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 14 }}>
          <ChaosOrder />
          <Callout variant="cyan" icon={<Zap size={15} />} title="This is leverage, not laziness">
            Every automated task is a small employee that works 24/7 for pennies and never forgets. Ten of them — all the systems in this book — quietly return <strong>a working day or more each week</strong>. That's the advantage.
          </Callout>
        </div></Reveal>
      </div>
      <PageFoot n={4} section="Chapter 01 · The Advantage" />
    </ScaledPage>
  );
}

/* ============ PAGE 5 — FIND YOUR OPPORTUNITIES ============ */
export function P05() {
  const examples = [
    { icon: <MessageSquare size={16} />, t: "Customer service", s: "Answering hours, pricing & policy questions", c: "c" as const },
    { icon: <Megaphone size={16} />, t: "Marketing", s: "Turning one idea into a week of posts", c: "v" as const },
    { icon: <MousePointerClick size={16} />, t: "Sales", s: "Day 1–7 follow-ups on every inquiry", c: "m" as const },
    { icon: <ReceiptText size={16} />, t: "Admin", s: "Logging leads, renaming files, reminders", c: "b" as const },
    { icon: <CalendarClock size={16} />, t: "Scheduling", s: "Confirmations, reminders & reschedules", c: "g" as const },
    { icon: <Star size={16} />, t: "Reputation", s: "Asking every happy customer for a review", c: "b" as const },
  ];
  return (
    <ScaledPage id="p5">
      <PageHead eyebrow="Chapter 01" tag="The R·T·R·V Framework" accent="#22d3ee" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Find Your Automation Opportunities</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Don't ask <em>"what can AI do?"</em> Ask <em>"what do I keep doing that a rule could do?"</em> The best candidates are <strong>repetitive, predictable, time-consuming, rule-based, frequent</strong> — and honestly, a little boring when done by hand.</p>
      </Reveal>
      <div className="two-col" style={{ gap: 30, marginTop: 20 }}>
        <Reveal><div className="grid" style={{ gap: 14 }}>
          <Scorecard />
          <Callout variant="gold" icon={<Lightbulb size={15} />} title="The coffee-shop test">
            If you did a task <strong>three times this week</strong> in roughly the same way, it's a candidate. If it needs taste, empathy, or negotiation, it isn't — yet.
          </Callout>
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 14 }}>
          <div>
            <SectionHead>Where to hunt first</SectionHead>
            <p className="t-small" style={{ marginBottom: 10 }}>Six departments, six proven hunting grounds. Circle the ones that eat your afternoons.</p>
            <div className="grid gap-2.5" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {examples.map((e, i) => <MiniCard key={i} c={e.c} icon={e.icon} title={e.t}>{e.s}</MiniCard>)}
            </div>
          </div>
          <Callout variant="violet" icon={<ShieldQuestion size={15} />}>
            <strong>Not everything should be automated.</strong> Keep a human on complaints, refunds, custom quotes, and anything emotionally charged. Automation handles the pattern; you handle the exceptions.
          </Callout>
        </div></Reveal>
      </div>
      <PageFoot n={5} section="Chapter 01 · Opportunities" />
    </ScaledPage>
  );
}

/* ============ PAGE 6 — LEAD GENERATION AUTOMATION ============ */
export function P06() {
  return (
    <ScaledPage id="p6">
      <div className="ghost" style={{ width: 360, height: 360, top: -140, left: -120, background: "rgba(34,211,238,.1)" }} />
      <PageHead eyebrow="Chapter 02" tag="Automation 1 of 7" accent="#22d3ee" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>AI Lead Generation <span className="grad-text">Automation</span></h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Most leads aren't lost to competitors — they're lost to <strong>slow replies and messy handoffs</strong>. This system captures every inquiry, qualifies it, files it, and alerts you in seconds flat.</p>
      </Reveal>
      <div style={{ marginTop: 18 }}>
        <Reveal>
          <FlowSteps items={[
            { icon: <Globe size={16} />, t: "Visitor", s: "ad, search, social", c: "b" },
            { icon: <ClipboardList size={16} />, t: "Lead form", s: "offer + capture", c: "c" },
            { icon: <Filter size={16} />, t: "AI qualifies", s: "hot · warm · cold", c: "v" },
            { icon: <Database size={16} />, t: "CRM entry", s: "clean & tagged", c: "b" },
            { icon: <Bell size={16} />, t: "Notification", s: "ping the owner", c: "m" },
            { icon: <Send size={16} />, t: "Follow-up", s: "within minutes", c: "g" },
          ]} />
        </Reveal>
      </div>
      <div className="two-col" style={{ gap: 30, marginTop: 16 }}>
        <Reveal><div className="grid" style={{ gap: 13 }}>
          <div>
            <SectionHead>What this system covers</SectionHead>
            <Bullets gap={7} items={[
              <span><strong>Lead magnets</strong> — a checklist, quote calculator, or mini-guide worth trading an email for. AI helps you draft it in an afternoon.</span>,
              <span><strong>Landing pages & forms</strong> — one page, one promise, one form. Ask 3–5 questions max; every extra field costs conversions.</span>,
              <span><strong>AI-generated first responses</strong> — instant, personal-sounding replies that reference what the lead actually wrote.</span>,
              <span><strong>Qualification & routing</strong> — AI reads the answers and tags each lead: hot, warm, or cold — with the reason why.</span>,
              <span><strong>CRM entry + instant alerts</strong> — no more leads living in your inbox. Everything logged, owner notified.</span>,
            ]} />
          </div>
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 13 }}>
          <div className="grid gap-2.5" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <MiniCard c="c" icon={<Gift size={16} />} title="Capture">The magnet earns the email; the form keeps it. Simple beats clever here.</MiniCard>
            <MiniCard c="v" icon={<Filter size={16} />} title="Qualify">AI scores fit and urgency from the form answers — budget, timeline, need.</MiniCard>
            <MiniCard c="b" icon={<LayoutTemplate size={16} />} title="File">Every lead lands in the CRM with source, tag and notes. Zero copy-paste.</MiniCard>
            <MiniCard c="g" icon={<Zap size={16} />} title="Act">Hot leads page you instantly; warm ones enter nurture automatically.</MiniCard>
          </div>
          <Callout variant="cyan" icon={<Magnet size={15} />} title="Why speed wins">
            Responding within <strong>five minutes</strong> instead of five hours can be the difference between a booked job and a dead lead. Humans are busy; <strong>your automation isn't.</strong> Let it answer while it's still thinking about you.
          </Callout>
          <div className="t-small" style={{ color: "#7488ad" }}><strong style={{ color: "#9fb3d6" }}>Privacy note:</strong> collect only what you'll use, and say plainly how you'll use it. Trust starts at the form.</div>
        </div></Reveal>
      </div>
      <PageFoot n={6} section="Chapter 02 · Lead Generation" />
    </ScaledPage>
  );
}

/* ============ PAGE 7 — BUILD THE LEAD MACHINE ============ */
export function P07() {
  return (
    <ScaledPage id="p7">
      <PageHead eyebrow="Chapter 02" tag="Build It" accent="#22d3ee" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Build a Simple Automated Lead Machine</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Seven pieces, one afternoon each at most. Connect them in order and you have a machine that works every hour of the week.</p>
      </Reveal>
      <div className="two-col" style={{ gap: 30, marginTop: 18 }}>
        <Reveal>
          <NumSteps steps={[
            { t: "Create the offer", d: "One specific outcome for one specific customer. “Get a free 2-minute quote” beats “subscribe”." },
            { t: "Create the lead form", d: "Name, contact, and 2–3 qualifying questions (need, budget range, timeline)." },
            { t: "Connect an automation platform", d: "Watch for new submissions; this is the pipe between your tools." },
            { t: "Let AI classify the lead", d: "Prompt it to read the answers and output: score (hot/warm/cold), reason, suggested next step." },
            { t: "Store the lead", d: "Create the CRM record with tags and source automatically." },
            { t: "Notify the owner", d: "Hot leads → instant SMS/email with the summary. Warm → daily digest." },
            { t: "Trigger the follow-up", d: "Send the first reply now; hand warm leads to the email sequence from Chapter 5." },
          ]} />
        </Reveal>
        <Reveal><div className="grid" style={{ gap: 14 }}>
          <MonoCard
            label="Live example · GreenLeaf Cleaning Co."
            lines={[
              { pre: "14:02:05", text: "Form received — website · “Office cleaning”", c: "#c4d8f5" },
              { pre: "14:02:06", text: "AI classify → HOT (needs quote this week,", c: "#f6e27a" },
              { pre: "", text: "  8,000 sqft office, budget matches)", c: "#f6e27a" },
              { pre: "14:02:07", text: "CRM → new record created · tagged “B2B/Hot”", c: "#67e8f9" },
              { pre: "14:02:07", text: "Reply sent → personalized email + booking link", c: "#a7f3d0" },
              { pre: "14:02:08", text: "SMS to owner → “Hot lead: Northbeam Office,", c: "#f9a8d4" },
              { pre: "", text: "  wants walkthrough this week. Draft sent.”", c: "#f9a8d4" },
              { pre: "14:02:08", text: "Follow-up sequence armed (Day 1 · 3 · 5)", c: "#c4d8f5" },
              { pre: "—", text: "Owner was on a job site the entire time.", c: "#7488ad" },
            ]}
          />
          <Callout variant="gold" icon={<BadgeCheck size={15} />} title="Before you launch">
            Run through the funnel <strong>as your own customer</strong> — twice, on your phone. Check the reply tone, the CRM fields, and the notification. Five minutes of testing beats a week of silently missed leads.
          </Callout>
          <Callout variant="violet">
            <strong>One machine, many doors:</strong> once built, point everything at it — website, Google Business profile, socials, QR code on your van. Same form, same brain, same follow-up.
          </Callout>
        </div></Reveal>
      </div>
      <PageFoot n={7} section="Chapter 02 · Lead Machine" />
    </ScaledPage>
  );
}
