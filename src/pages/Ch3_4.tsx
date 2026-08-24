import {
  Headset, HelpCircle, Package, Clock, DollarSign, Wrench, TriangleAlert, BookOpen, ListChecks, UserRound,
  Lightbulb, FileText, CalendarDays, Sparkles, Eye, ShieldCheck, PencilRuler, Share2, Gauge, Bot,
} from "lucide-react";
import { ScaledPage, PageFoot, PageHead, Reveal } from "../components/Page";
import { Bullets, Callout, FlowSteps, MiniCard, MonoCard, NumSteps, SectionHead } from "../components/blocks";
import { ChatMock, HubSpoke, WeekStrip } from "../components/diagrams";

/* ============ PAGE 8 — CUSTOMER SUPPORT AUTOMATION ============ */
export function P08() {
  return (
    <ScaledPage id="p8">
      <div className="ghost" style={{ width: 360, height: 360, top: -140, right: -130, background: "rgba(124,58,237,.14)" }} />
      <PageHead eyebrow="Chapter 03" tag="Automation 2 of 7" accent="#a78bfa" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>AI Customer Support <span className="grad-text">Automation</span></h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Somewhere between 60–80% of the questions you answer are <strong>the same ten questions in different clothing</strong>. An AI support assistant answers those instantly and perfectly — so you only touch the conversations that truly need a human.</p>
      </Reveal>
      <div className="two-col" style={{ gap: 30, marginTop: 18 }}>
        <Reveal><div className="grid" style={{ gap: 14 }}>
          <div>
            <SectionHead>What the AI confidently handles</SectionHead>
            <div className="grid gap-2" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {[
                { i: <HelpCircle size={15} />, t: "FAQs & policies" }, { i: <Package size={15} />, t: "Product questions" },
                { i: <BookOpen size={15} />, t: "Service details" }, { i: <Clock size={15} />, t: "Hours & locations" },
                { i: <DollarSign size={15} />, t: "Pricing inquiries" }, { i: <ListChecks size={15} />, t: "Order/status checks" },
                { i: <Wrench size={15} />, t: "Basic troubleshooting" }, { i: <CalendarDays size={15} />, t: "Booking links" },
              ].map((x, i) => (
                <div key={i} className="card flex items-center gap-2.5" style={{ padding: "10px 12px" }}>
                  <span style={{ color: "#67e8f9" }}>{x.i}</span><span className="t-body" style={{ fontSize: 13.5, color: "#dbe7fb" }}>{x.t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-2.5" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <MiniCard c="v" icon={<Bot size={16} />} title="AI handles">Volume, repetition, instant answers, first drafts — the <strong>known knowns</strong>.</MiniCard>
            <MiniCard c="m" icon={<UserRound size={16} />} title="Humans handle">Complaints, refunds, edge cases, emotions — <strong>judgment calls</strong>.</MiniCard>
          </div>
          <Callout variant="gold" icon={<TriangleAlert size={15} />} title="Draw the line before launch">
            Write your <strong>escalation list</strong> first: anything involving money disputes, safety, anger, or legal words goes straight to a human. No exceptions, no “the bot almost handled it.”
          </Callout>
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 12 }}>
          <ChatMock />
          <p className="t-small" style={{ color: "#7488ad" }}><strong style={{ color: "#9fb3d6" }}>The result:</strong> customers get answers at 11pm on a Sunday, in their language, in seconds — and your Monday inbox is half the size. Measure <strong>deflection rate</strong> (% solved without you) and <strong>satisfaction after chat</strong>.</p>
        </div></Reveal>
      </div>
      <PageFoot n={8} section="Chapter 03 · Support" />
    </ScaledPage>
  );
}

/* ============ PAGE 9 — 24/7 RESPONSE SYSTEM ============ */
export function P09() {
  return (
    <ScaledPage id="p9">
      <PageHead eyebrow="Chapter 03" tag="Build It" accent="#a78bfa" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Build a 24/7 Customer Response System</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Four building blocks turn “an AI” into <strong>your</strong> support agent: what it knows, what it may say, when it stays quiet, and how it hands off.</p>
      </Reveal>
      <div style={{ marginTop: 16 }}>
        <Reveal>
          <FlowSteps items={[
            { icon: <HelpCircle size={16} />, t: "Question", s: "chat · email · DM", c: "b" },
            { icon: <Sparkles size={16} />, t: "AI reads", s: "intent + tone", c: "v" },
            { icon: <BookOpen size={16} />, t: "Knowledge base", s: "your real answers", c: "c" },
            { icon: <Headset size={16} />, t: "Answer", s: "instant & on-brand", c: "g" },
            { icon: <UserRound size={16} />, t: "Escalate", s: "if rules say so", c: "m" },
          ]} />
        </Reveal>
      </div>
      <div className="two-col" style={{ gap: 30, marginTop: 14 }}>
        <Reveal><div className="grid" style={{ gap: 12 }}>
          <SectionHead>The four building blocks</SectionHead>
          <div className="grid gap-2.5">
            {[
              { n: "1 · Knowledge base", d: "Your source of truth: services, pricing ranges, policies, process. Start by turning your 20 most-answered emails into short articles.", c: "c" as const, i: <BookOpen size={15} /> },
              { n: "2 · FAQ database", d: "The quick layer: 15–25 Q&A pairs in plain language, exactly as customers phrase them. Update monthly.", c: "b" as const, i: <ListChecks size={15} /> },
              { n: "3 · Response rules", d: "Voice, length, do's and don'ts. “Warm, brief, concrete. Never invent a price. Always offer the next step.”", c: "v" as const, i: <PencilRuler size={15} /> },
              { n: "4 · Escalation + handoff", d: "Trigger words and situations that route to you — with the full transcript attached so nobody repeats themselves.", c: "m" as const, i: <UserRound size={15} /> },
            ].map((x, i) => (
              <div key={i} className="card flex items-start gap-3" style={{ padding: "12px 14px" }}>
                <span className={`icobox ico-${x.c}`} style={{ width: 32, height: 32, borderRadius: 9 }}>{x.i}</span>
                <div><div className="t-h3" style={{ fontSize: 14, color: "#fff" }}>{x.n}</div><div className="t-small" style={{ marginTop: 2 }}>{x.d}</div></div>
              </div>
            ))}
          </div>
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 13 }}>
          <MonoCard
            label="Adapt this · assistant rules"
            tint="#a78bfa"
            lines={[
              { pre: "ROLE", text: "You are Ava, support for GreenLeaf Cleaning.", c: "#c4d8f5" },
              { pre: "TONE", text: "Warm, brief, concrete. Max 4 sentences.", c: "#c4d8f5" },
              { pre: "KNOW", text: "Answer only from /knowledge. If unsure,", c: "#67e8f9" },
              { pre: "", text: "  say so and offer human help.", c: "#67e8f9" },
              { pre: "NEVER", text: "Promise refunds, invent prices, or guess", c: "#f9a8d4" },
              { pre: "", text: "  dates. Never discuss other customers.", c: "#f9a8d4" },
              { pre: "ESCALATE", text: "Words: refund, complaint, broken, lawyer,", c: "#f6e27a" },
              { pre: "", text: "  OR any 1-star sentiment → human + transcript.", c: "#f6e27a" },
              { pre: "CLOSE", text: "End with one clear next step or booking link.", c: "#a7f3d0" },
            ]}
          />
          <Callout variant="violet" icon={<Gauge size={15} />} title="Launch small, then grow">
            Ship with <strong>10–15 FAQs</strong>, watch every conversation for week one, and add the questions AI missed. Most teams reach <strong>50%+ deflection</strong> within a month of steady tuning.
          </Callout>
          <Callout variant="cyan" icon={<ShieldCheck size={15} />}>
            <strong>Tell people it's an assistant</strong> and make reaching a human effortless. Honest bots earn trust; disguised ones burn it.
          </Callout>
        </div></Reveal>
      </div>
      <PageFoot n={9} section="Chapter 03 · 24/7 System" />
    </ScaledPage>
  );
}

/* ============ PAGE 10 — CONTENT AUTOMATION ============ */
export function P10() {
  return (
    <ScaledPage id="p10">
      <div className="ghost" style={{ width: 340, height: 340, bottom: -140, right: -140, background: "rgba(244,114,182,.1)" }} />
      <PageHead eyebrow="Chapter 04" tag="Automation 3 of 7" accent="#f472b6" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>AI Content &amp; Social Media <span className="grad-text">Automation</span></h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Consistent content isn't a talent problem — it's a <strong>throughput problem</strong>. AI removes the blank page, and one good idea becomes a week of presence across every channel.</p>
      </Reveal>
      <Reveal><div style={{ marginTop: 6 }}><HubSpoke /></div></Reveal>
      <div className="two-col" style={{ gap: 30, marginTop: 4 }}>
        <Reveal><Bullets gap={7} items={[
          <span><strong>Ideas on tap:</strong> mine your customer questions, reviews and sales calls — AI turns them into 30 ranked topics.</span>,
          <span><strong>Drafts in minutes:</strong> captions, posts, blog outlines and email sections start at 80% done instead of 0%.</span>,
          <span><strong>Repurposing by default:</strong> every pillar piece automatically spins off channel-native versions.</span>,
          <span><strong>A calendar that fills itself:</strong> topics map to days, formats map to channels, weeks map to campaigns.</span>,
        ]} /></Reveal>
        <Reveal><div className="grid" style={{ gap: 12 }}>
          <div className="grid gap-2.5" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <MiniCard c="v" icon={<Share2 size={15} />} title="Rented reach">Social builds awareness — but the algorithm owns the room. <strong>Borrow it, don't live there.</strong></MiniCard>
            <MiniCard c="g" icon={<FileText size={15} />} title="Owned audience">Every post should nudge people to your list or site — the channels <strong>you</strong> control.</MiniCard>
          </div>
          <Callout variant="gold" icon={<Eye size={15} />} title="The 80/20 of AI content">
            Let AI do the 80%: structure, drafts, resizing, scheduling. <strong>You own the 20% that matters</strong> — real opinions, real stories, real numbers. That last 20% is the entire brand.
          </Callout>
        </div></Reveal>
      </div>
      <PageFoot n={10} section="Chapter 04 · Content" />
    </ScaledPage>
  );
}

/* ============ PAGE 11 — CONTENT ENGINE ============ */
export function P11() {
  return (
    <ScaledPage id="p11">
      <PageHead eyebrow="Chapter 04" tag="Build It" accent="#f472b6" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Create a Content Engine</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>A repeatable weekly rhythm: <strong>one pillar idea, seven spins, zero panic-posting.</strong> Same steps, every week — the system does the shuffling.</p>
      </Reveal>
      <div className="two-col" style={{ gap: 30, marginTop: 18 }}>
        <Reveal>
          <NumSteps steps={[
            { t: "Choose a weekly topic", d: "Pick from your ranked idea list — ideally a question customers already ask." },
            { t: "Generate the core content", d: "AI drafts the pillar piece from your outline and 3–5 of your bullet-point opinions." },
            { t: "Repurpose it", d: "Spin off: blog, email, 3 social posts, short-video script, pin/carousel. One prompt per format." },
            { t: "Review & edit", d: "You pass over everything once: voice, facts, stories, links. Non-negotiable human step." },
            { t: "Schedule", d: "Load everything into your scheduler. Dates set, tags added, done." },
            { t: "Publish", d: "The scheduler posts. You reply to comments like a human — because you are." },
            { t: "Measure", d: "Friday: 10 minutes. Which topic moved? Feed the winners back into the idea list." },
          ]} />
        </Reveal>
        <Reveal><div className="grid" style={{ gap: 14 }}>
          <div>
            <SectionHead note="sample weekly rhythm">The cadence at a glance</SectionHead>
            <WeekStrip />
          </div>
          <MonoCard
            label="Reuse weekly · pillar prompt"
            tint="#f472b6"
            lines={[
              { pre: "INPUT", text: "Topic, 5 bullets of MY opinions, 1 client story.", c: "#c4d8f5" },
              { pre: "TASK", text: "Draft a 600-word pillar post in my voice.", c: "#c4d8f5" },
              { pre: "VOICE", text: "Plain, friendly, a bit blunt. See /voice-notes.", c: "#67e8f9" },
              { pre: "THEN", text: "Produce: 3 social posts (max 60 words),", c: "#f6e27a" },
              { pre: "", text: "  1 email blurb, 1 short-video script (30 sec),", c: "#f6e27a" },
              { pre: "", text: "  1 carousel outline (6 slides).", c: "#f6e27a" },
              { pre: "RULE", text: "No hype. One idea per piece. One CTA.", c: "#f9a8d4" },
            ]}
          />
          <Callout variant="gold" icon={<Lightbulb size={15} />} title="Automation without the mush">
            The failure mode of AI content is <strong>generic noise at scale</strong>. Your engine works because the inputs are yours — opinions, stories, screenshots. AI multiplies them; it never invents them.
          </Callout>
        </div></Reveal>
      </div>
      <PageFoot n={11} section="Chapter 04 · Content Engine" />
    </ScaledPage>
  );
}
