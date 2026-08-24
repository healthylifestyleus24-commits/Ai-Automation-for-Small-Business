import {
  MailPlus, GraduationCap, HeartHandshake, ShoppingCart, Inbox, Users, Handshake,
  ReplyAll, FileQuestion, Presentation, Quote, Ban, AlarmClockCheck, Target, Sparkles, ShieldCheck, Send, Database,
} from "lucide-react";
import { ScaledPage, PageFoot, PageHead, Reveal } from "../components/Page";
import { Bullets, Callout, FlowSteps, MiniCard, MonoCard, SectionHead } from "../components/blocks";
import { Seq5, DayLine } from "../components/diagrams";

/* ============ PAGE 12 — EMAIL MARKETING AUTOMATION ============ */
export function P12() {
  return (
    <ScaledPage id="p12">
      <div className="ghost" style={{ width: 360, height: 360, top: -140, left: -130, background: "rgba(79,141,255,.13)" }} />
      <PageHead eyebrow="Chapter 05" tag="Automation 4 of 7" accent="#4f8dff" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>AI Email Marketing <span className="grad-text">Automation</span></h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Social rents attention; <strong>email owns it</strong>. An automated sequence turns a stranger's signup into trust, and trust into a sale — written once, working forever, personalized by AI at send time.</p>
      </Reveal>
      <div style={{ marginTop: 16 }}>
        <Reveal>
          <FlowSteps items={[
            { icon: <Inbox size={16} />, t: "New lead", s: "magnet or form", c: "b" },
            { icon: <MailPlus size={16} />, t: "Welcome", s: "deliver + delight", c: "c" },
            { icon: <GraduationCap size={16} />, t: "Education", s: "teach the problem", c: "v" },
            { icon: <HeartHandshake size={16} />, t: "Trust", s: "proof & stories", c: "m" },
            { icon: <Target size={16} />, t: "Offer", s: "one clear CTA", c: "g" },
            { icon: <ReplyAll size={16} />, t: "Follow-up", s: "nudge or re-route", c: "b" },
          ]} />
        </Reveal>
      </div>
      <div className="two-col" style={{ gap: 30, marginTop: 16 }}>
        <Reveal><div className="grid" style={{ gap: 13 }}>
          <SectionHead>The campaigns worth automating</SectionHead>
          <Bullets gap={7} items={[
            <span><strong>Welcome & nurture sequences</strong> — your best introduction, delivered to every new subscriber at the exact moment they care most.</span>,
            <span><strong>Educational drips</strong> — teach the problem over 5–8 emails; you become the obvious choice to solve it.</span>,
            <span><strong>Product recommendations</strong> — AI matches content and offers to what each person clicked, bought, or asked about.</span>,
            <span><strong>Abandoned-cart & browse reminders</strong> — the highest-ROI emails in e-commerce: friendly, timed, specific.</span>,
            <span><strong>Re-engagement</strong> — wake up cold subscribers with a genuine “still want these?” before pruning the list.</span>,
            <span><strong>Customer follow-ups</strong> — check-ins, replenishment reminders, and the bridge to Chapter 8's review requests.</span>,
          ]} />
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 12 }}>
          <div className="grid gap-2.5" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <MiniCard c="b" icon={<Users size={15} />} title="Segment">New lead ≠ loyal customer. Tags from Chapters 2–3 let each group get its own conversation.</MiniCard>
            <MiniCard c="v" icon={<Sparkles size={15} />} title="Personalize">Beyond “Hi {`{first_name}`}” — AI adjusts examples, tone and offers from what it knows.</MiniCard>
            <MiniCard c="c" icon={<Send size={15} />} title="Send smart">Consistent days, sane frequency. 4–6 touches a month beats 14 and an unsubscribe.</MiniCard>
            <MiniCard c="g" icon={<ShoppingCart size={15} />} title="Recover">Cart reminders recover revenue you're already earning — then politely stop.</MiniCard>
          </div>
          <Callout variant="gold" icon={<ShieldCheck size={15} />} title="The trust contract">
            Email people <strong>who asked to hear from you</strong>, include a working unsubscribe, and honor it instantly. Never buy lists, never scrape inboxes — one spam complaint wave can sink your sender reputation for months.
          </Callout>
        </div></Reveal>
      </div>
      <PageFoot n={12} section="Chapter 05 · Email" />
    </ScaledPage>
  );
}

/* ============ PAGE 13 — NURTURE SEQUENCE ============ */
export function P13() {
  return (
    <ScaledPage id="p13">
      <PageHead eyebrow="Chapter 05" tag="Build It" accent="#4f8dff" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Build a Simple Email Nurture Sequence</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Five emails, eight days, one job each. The pattern is <strong>give, give, give — then ask</strong>. Write it once; it introduces you perfectly, forever.</p>
      </Reveal>
      <div style={{ marginTop: 16 }}><Reveal><Seq5 /></Reveal></div>
      <div className="two-col" style={{ gap: 30, marginTop: 14 }}>
        <Reveal>
          <MonoCard
            label="Draft assistant · email 3 prompt"
            tint="#4f8dff"
            lines={[
              { pre: "ROLE", text: "My email copywriter. Voice: /voice-notes.", c: "#c4d8f5" },
              { pre: "READER", text: "New lead, downloaded “Spring Deep-Clean", c: "#67e8f9" },
              { pre: "", text: "  Checklist” 3 days ago. Hasn't booked.", c: "#67e8f9" },
              { pre: "TASK", text: "Write Email 3: the helpful solution.", c: "#c4d8f5" },
              { pre: "MUST", text: "Teach our 3-step method; mention the", c: "#f6e27a" },
              { pre: "", text: "  walkthrough offer once; end with ONE CTA:", c: "#f6e27a" },
              { pre: "", text: "  book a free 15-min walkthrough.", c: "#f6e27a" },
              { pre: "LIMITS", text: "180 words max. No hype, no fake urgency.", c: "#f9a8d4" },
              { pre: "OUTPUT", text: "Subject + preview text + body. 2 variants.", c: "#a7f3d0" },
            ]}
          />
        </Reveal>
        <Reveal><div className="grid" style={{ gap: 13 }}>
          <Callout variant="cyan" icon={<Presentation size={15} />} title="What each email must accomplish">
            <strong>1</strong> delivers the promise · <strong>2</strong> proves you understand the problem · <strong>3</strong> teaches your way of solving it · <strong>4</strong> removes risk with evidence · <strong>5</strong> makes acting easy. Skip the order and you're pitching strangers.
          </Callout>
          <Callout variant="violet" icon={<FileQuestion size={15} />} title="AI drafts, you decide">
            Generate, then <strong>read it aloud</strong>. Delete anything you wouldn't say to a customer across a table. Check facts, links and the merge fields — a broken “Hi {`{first_name}`}” is the fastest unsubscribe there is.
          </Callout>
          <Callout variant="gold">
            <strong>One CTA per email.</strong> The moment you ask for two actions, you get zero. Link every email's single ask to your booking page from Chapter 7.
          </Callout>
        </div></Reveal>
      </div>
      <PageFoot n={13} section="Chapter 05 · Nurture Sequence" />
    </ScaledPage>
  );
}

/* ============ PAGE 14 — SALES FOLLOW-UP ============ */
export function P14() {
  return (
    <ScaledPage id="p14">
      <div className="ghost" style={{ width: 340, height: 340, top: -130, right: -130, background: "rgba(212,175,55,.1)" }} />
      <PageHead eyebrow="Chapter 06" tag="Automation 5 of 7" accent="#D4AF37" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>AI Sales Follow-Up <span className="grad-gold">Automation</span></h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Here's the uncomfortable truth: <strong>most sales need five or more touches</strong>, and most small businesses stop at one — not from laziness, but from full calendars. Automation never forgets touch two, three, four, five.</p>
      </Reveal>
      <div style={{ marginTop: 16 }}>
        <Reveal>
          <FlowSteps items={[
            { icon: <Inbox size={16} />, t: "Inquiry", s: "form · call · DM", c: "b" },
            { icon: <ReplyAll size={16} />, t: "Instant reply", s: "under 1 minute", c: "c" },
            { icon: <Send size={16} />, t: "Follow-up", s: "day 1–3 value", c: "v" },
            { icon: <AlarmClockCheck size={16} />, t: "Reminder", s: "day 5 proof", c: "m" },
            { icon: <Target size={16} />, t: "Final nudge", s: "day 7 close", c: "g" },
            { icon: <Database size={16} />, t: "CRM update", s: "always current", c: "b" },
          ]} />
        </Reveal>
      </div>
      <div className="two-col" style={{ gap: 30, marginTop: 16 }}>
        <Reveal><div className="grid" style={{ gap: 13 }}>
          <div>
            <SectionHead>Everything this covers</SectionHead>
            <div className="flex flex-wrap gap-1.5">
              {["New inquiries", "Sent quotes", "Consultations", "Demo requests", "Abandoned purchases", "Cold leads", "Past customers", "“Let me think about it”"].map((t) => (
                <span key={t} className="chip" style={{ fontSize: 11, padding: "4.5px 11px" }}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <SectionHead>What a good follow-up looks like</SectionHead>
            <Bullets gap={7} color="#D4AF37" items={[
              <span><strong>Fast:</strong> the first reply lands while the lead is still on your website.</span>,
              <span><strong>Specific:</strong> it references their words — the service, the date, the problem — never a generic “just checking in”.</span>,
              <span><strong>One step:</strong> every message asks for exactly one small thing: a reply, a call, a booking.</span>,
              <span><strong>Useful:</strong> each touch adds something — an answer, a proof point, a tip. Never just pressure.</span>,
            ]} />
          </div>
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 12 }}>
          <div className="grid gap-2.5" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <MiniCard c="g" icon={<Handshake size={15} />} title="Reality check">Deals die quietly. A quoted-but-quiet lead is usually <strong>busy, not uninterested</strong>.</MiniCard>
            <MiniCard c="b" icon={<Quote size={15} />} title="Quotes">Quotes auto-follow at day 2 and 5 with proof + one question. Silence costs more than software.</MiniCard>
          </div>
          <Callout variant="violet" icon={<Ban size={15} />} title="Know when to stop">
            The sequence ends the moment they reply, book, or decline — the CRM stops the clock and <strong>alerts you</strong>. Persistence is a virtue; pestering is a spam report.
          </Callout>
          <div className="t-small" style={{ color: "#7488ad" }}><strong style={{ color: "#9fb3d6" }}>Measure:</strong> follow-up completion rate, reply rate by touch, and time-to-first-response. Those three numbers pay for this system.</div>
        </div></Reveal>
      </div>
      <PageFoot n={14} section="Chapter 06 · Follow-Up" />
    </ScaledPage>
  );
}

/* ============ PAGE 15 — FOLLOW-UP MACHINE ============ */
export function P15() {
  return (
    <ScaledPage id="p15">
      <PageHead eyebrow="Chapter 06" tag="Build It" accent="#D4AF37" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Build Your Follow-Up Machine</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>A five-touch rhythm that feels personal because AI <strong>writes from real context</strong> — their name, their project, your last conversation — not from a template with blanks.</p>
      </Reveal>
      <div className="two-col" style={{ gap: 32, marginTop: 18 }}>
        <Reveal><div className="grid" style={{ gap: 14 }}>
          <SectionHead note="arm it once, it runs every time">The 5-touch cadence</SectionHead>
          <DayLine />
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 13 }}>
          <MonoCard
            label="Personalization · day-1 prompt"
            tint="#D4AF37"
            lines={[
              { pre: "CONTEXT", text: "Pull from CRM: name, service asked,", c: "#c4d8f5" },
              { pre: "", text: "  timeline, budget range, their exact words.", c: "#c4d8f5" },
              { pre: "TASK", text: "Write a 90-word follow-up that answers", c: "#c4d8f5" },
              { pre: "", text: "  their main question + adds one helpful tip", c: "#c4d8f5" },
              { pre: "", text: "  + ends with the booking link.", c: "#c4d8f5" },
              { pre: "TONE", text: "Like the owner wrote it. Warm, direct,", c: "#67e8f9" },
              { pre: "", text: "  zero sales-speak, no exclamation marks.", c: "#67e8f9" },
              { pre: "FACTS", text: "Only use details present in the record.", c: "#f9a8d4" },
              { pre: "", text: "  If a detail is missing, leave it out.", c: "#f9a8d4" },
            ]}
          />
          <Bullets gap={6} color="#D4AF37" items={[
            <span><strong>Merge the context, not just the name.</strong> “Your 8,000 sqft office on Fulton St” beats “your inquiry”.</span>,
            <span><strong>Human on replies:</strong> any response routes to a real person with the full thread attached.</span>,
            <span><strong>Log everything:</strong> touches, opens, replies — straight into the CRM for next quarter's win-back.</span>,
          ]} />
          <Callout variant="gold" icon={<ShieldCheck size={15} />} title="Respect the exits">
            Replies pause the sequence instantly. Opt-outs are honored everywhere, immediately. Follow-up automation builds trust only while it <strong>listens better than it talks</strong>.
          </Callout>
        </div></Reveal>
      </div>
      <PageFoot n={15} section="Chapter 06 · Follow-Up Machine" />
    </ScaledPage>
  );
}
