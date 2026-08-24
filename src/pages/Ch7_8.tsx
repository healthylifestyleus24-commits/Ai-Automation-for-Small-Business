import {
  CalendarCheck, Clock, BellRing, RefreshCw, MessageSquareHeart, Star, ShieldAlert,
  ThumbsUp, Ear, TrendingUp, MapPin, Link2, AlarmClock, UserRound, Sparkles, CheckCircle2,
} from "lucide-react";
import { ScaledPage, PageFoot, PageHead, Reveal } from "../components/Page";
import { Bullets, Callout, FlowSteps, MiniCard, SectionHead } from "../components/blocks";
import { CalendarMock, ReviewSplit, LoopCycle } from "../components/diagrams";

/* ============ PAGE 16 — SCHEDULING AUTOMATION ============ */
export function P16() {
  return (
    <ScaledPage id="p16">
      <div className="ghost" style={{ width: 340, height: 340, top: -140, left: -130, background: "rgba(56,189,248,.12)" }} />
      <PageHead eyebrow="Chapter 07" tag="Automation 6 of 7" accent="#38bdf8" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>AI Appointment &amp; Scheduling <span className="grad-text">Automation</span></h1>
        <p className="t-lead" style={{ marginTop: 12 }}>“Does Tuesday work? No? Wednesday then?” — <strong>the scheduling ping-pong quietly eats an hour a day</strong>, and every no-show eats revenue. This system books, confirms, reminds and follows up without touching your inbox.</p>
      </Reveal>
      <div style={{ marginTop: 16 }}>
        <Reveal>
          <FlowSteps items={[
            { icon: <UserRound size={16} />, t: "Customer", s: "picks a slot", c: "b" },
            { icon: <CalendarCheck size={16} />, t: "Booking", s: "rules check", c: "c" },
            { icon: <Link2 size={16} />, t: "Calendar", s: "synced live", c: "v" },
            { icon: <CheckCircle2 size={16} />, t: "Confirmation", s: "within 5 min", c: "b" },
            { icon: <BellRing size={16} />, t: "Reminders", s: "24h + 2h", c: "m" },
            { icon: <MapPin size={16} />, t: "Appointment", s: "they show up", c: "g" },
            { icon: <MessageSquareHeart size={16} />, t: "Follow-up", s: "thank + next", c: "b" },
          ]} />
        </Reveal>
      </div>
      <div className="two-col" style={{ gap: 30, marginTop: 16 }}>
        <Reveal><div className="grid" style={{ gap: 13 }}>
          <SectionHead>What the system manages</SectionHead>
          <Bullets gap={7} color="#38bdf8" items={[
            <span><strong>Requests & availability</strong> — customers see real open slots synced from your live calendar. No double-bookings, ever.</span>,
            <span><strong>Confirmations</strong> — instant, with date, address/link, and how to prepare. Certainty is a customer-experience feature.</span>,
            <span><strong>Reminders</strong> — 24 hours and 2 hours before, by email and/or SMS. This alone cuts most no-shows dramatically.</span>,
            <span><strong>Rescheduling & cancellations</strong> — a self-serve link instead of an awkward phone call. Freed slots reopen automatically.</span>,
            <span><strong>After-care</strong> — thank-you note, next steps, and a handoff to Chapter 8's feedback request while the glow is fresh.</span>,
          ]} />
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 12 }}>
          <CalendarMock />
          <div className="grid gap-2.5" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <MiniCard c="c" icon={<AlarmClock size={15} />} title="Buffers">AI enforces breathing room between meetings and caps bookings per day. Your calendar works <strong>for</strong> you.</MiniCard>
            <MiniCard c="v" icon={<RefreshCw size={15} />} title="Recovery">Cancelled slot? The waitlist gets first dibs automatically. Empty hours get a second chance.</MiniCard>
          </div>
        </div></Reveal>
      </div>
      <PageFoot n={16} section="Chapter 07 · Scheduling" />
    </ScaledPage>
  );
}

/* ============ PAGE 17 — NO-CHAOS BOOKING SYSTEM ============ */
export function P17() {
  return (
    <ScaledPage id="p17">
      <PageHead eyebrow="Chapter 07" tag="Build It" accent="#38bdf8" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Create a No-Chaos Booking System</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Seven decisions, made once. After that, your calendar manages itself — and <strong>your booking link becomes the answer to almost everything</strong>.</p>
      </Reveal>
      <div className="two-col" style={{ gap: 30, marginTop: 18 }}>
        <Reveal><div className="grid" style={{ gap: 12 }}>
          <SectionHead>The setup checklist</SectionHead>
          <div className="grid gap-2">
            {[
              { n: "Booking page", d: "One link with slot picker, key questions, and instant confirmation. Put it everywhere: bio, emails, invoices, voicemail.", i: <Link2 size={14} /> },
              { n: "Availability rules", d: "Office hours, service durations, 15-min buffers, max 5 bookings/day, 24h minimum notice.", i: <Clock size={14} /> },
              { n: "Confirmation message", d: "Date, time, address or link, what to bring, what happens next. Sent within 5 minutes.", i: <CheckCircle2 size={14} /> },
              { n: "Reminder sequence", d: "24h (email + SMS with confirm button) and 2h (“See you soon — here's parking”).", i: <BellRing size={14} /> },
              { n: "Self-serve rescheduling", d: "One link, no email thread required. Slot reopens instantly for someone else.", i: <RefreshCw size={14} /> },
              { n: "No-show prevention", d: "One-tap confirm prompts; for high-value slots, consider a small deposit — stated plainly upfront.", i: <ShieldAlert size={14} /> },
              { n: "Post-appointment follow-up", d: "Same-day thank-you + next step, and the Chapter 8 feedback trigger 1–2 days later.", i: <MessageSquareHeart size={14} /> },
            ].map((x, i) => (
              <div key={i} className="card flex items-start gap-3" style={{ padding: "10px 13px" }}>
                <span className="icobox ico-b" style={{ width: 28, height: 28, borderRadius: 8 }}>{x.i}</span>
                <div><div className="t-h3" style={{ fontSize: 13.5, color: "#fff" }}>{i + 1} · {x.n}</div><div className="t-small" style={{ fontSize: 12, marginTop: 1 }}>{x.d}</div></div>
              </div>
            ))}
          </div>
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 13 }}>
          <SectionHead>The same system, four ways</SectionHead>
          <div className="grid gap-2.5">
            <MiniCard c="b" icon={<UserRound size={15} />} title="Consultant">Pre-call questionnaire on booking, video link auto-created, agenda sent 24h ahead. Shows up prepared.</MiniCard>
            <MiniCard c="m" icon={<Sparkles size={15} />} title="Salon">Service + staff picker, deposit for peak slots, style-prep note on confirmation, rebooking nudge at week 6.</MiniCard>
            <MiniCard c="v" icon={<Clock size={15} />} title="Coach">Recurring weekly slot, automatic time-zone conversion, session notes link attached to every reminder.</MiniCard>
            <MiniCard c="c" icon={<MapPin size={15} />} title="Local service pro">Address + gate code captured at booking, “on my way” text when the van rolls, photo follow-up after the job.</MiniCard>
          </div>
          <Callout variant="cyan" icon={<BellRing size={15} />} title="Golden rule">
            <strong>Confirmation within five minutes or doubt creeps in.</strong> A booking that isn't confirmed feels like shouting into the void — and voids get no-shows.
          </Callout>
        </div></Reveal>
      </div>
      <PageFoot n={17} section="Chapter 07 · Booking System" />
    </ScaledPage>
  );
}

/* ============ PAGE 18 — REVIEW AUTOMATION ============ */
export function P18() {
  return (
    <ScaledPage id="p18">
      <div className="ghost" style={{ width: 340, height: 340, top: -130, right: -130, background: "rgba(212,175,55,.1)" }} />
      <PageHead eyebrow="Chapter 08" tag="Automation 7 of 7" accent="#f6e27a" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>AI Review &amp; Reputation <span className="grad-gold">Automation</span></h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Happy customers rarely think to leave reviews; unhappy ones rarely forget. A systematic, <strong>honest</strong> request flow fixes the imbalance — and catches problems privately before they go public.</p>
      </Reveal>
      <Reveal><div style={{ marginTop: 12 }}><ReviewSplit /></div></Reveal>
      <div className="two-col" style={{ gap: 30, marginTop: 10 }}>
        <Reveal><div className="grid" style={{ gap: 12 }}>
          <SectionHead>How the machine behaves</SectionHead>
          <Bullets gap={7} color="#f6e27a" items={[
            <span><strong>Timing:</strong> the request fires right after the “happy moment” — delivery, result, or completed service — not three weeks later.</span>,
            <span><strong>Personal requests:</strong> AI personalizes with the service and staff member — “Was Malik's crew on time?” reads like a human wrote it.</span>,
            <span><strong>Positive path:</strong> thank them warmly, share the direct link, showcase the review (with permission) in next week's content.</span>,
            <span><strong>Negative path:</strong> acknowledge fast, route to a human within 24h, fix the issue — then they often update the review themselves.</span>,
            <span><strong>Monitoring:</strong> new-review alerts across your platforms, with AI-drafted replies you approve before posting.</span>,
          ]} />
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 13 }}>
          <Callout variant="gold" icon={<Star size={15} />} title="The reputation code — non-negotiable">
            <strong>Never buy, fake, or script reviews. Never suppress honest criticism.</strong> Never offer incentives that violate platform policies. Ask everyone equally, make it easy, and let real customers speak. One exposed fake costs more than a hundred genuine five-stars will ever earn.
          </Callout>
          <div className="grid gap-2.5" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <MiniCard c="g" icon={<ThumbsUp size={15} />} title="Respond to all">Replying to every review — good and bad — is the sales page nobody else can copy.</MiniCard>
            <MiniCard c="v" icon={<Ear size={15} />} title="Listen at scale">Volume complaints about “wait time”? That's not a PR issue — it's an ops fix, found free.</MiniCard>
          </div>
          <div className="t-small" style={{ color: "#7488ad" }}><strong style={{ color: "#9fb3d6" }}>Measure:</strong> reviews per month, average rating trend, response time to negatives, and issues caught privately.</div>
        </div></Reveal>
      </div>
      <PageFoot n={18} section="Chapter 08 · Reputation" />
    </ScaledPage>
  );
}

/* ============ PAGE 19 — FEEDBACK INTO GROWTH ============ */
export function P19() {
  return (
    <ScaledPage id="p19">
      <PageHead eyebrow="Chapter 08" tag="Compound It" accent="#f6e27a" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Turn Customer Feedback Into Business Growth</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>Reviews are the visible tip. Underneath sits a <strong>free research department</strong>: every comment tells you what to fix, what to sell, and exactly how your customers describe it.</p>
      </Reveal>
      <div className="two-col" style={{ gap: 30, marginTop: 14, alignItems: "start" }}>
        <Reveal><div className="grid" style={{ gap: 12 }}>
          <LoopCycle />
          <div className="card" style={{ padding: "12px 15px" }}>
            <div className="t-eyebrow" style={{ fontSize: 9.5, color: "#67e8f9", marginBottom: 5 }}>Mini case · one loop in action</div>
            <p className="t-small" style={{ fontSize: 12.5 }}>Three customers mention <strong>“confusing pricing”</strong> in one month → AI flags the pattern → owner simplifies the pricing page and adds an FAQ entry → mentions drop to zero, and quote requests rise.</p>
          </div>
        </div></Reveal>
        <Reveal><div className="grid" style={{ gap: 12 }}>
          <SectionHead>Seven ways to spend an insight</SectionHead>
          <Bullets gap={7} color="#f6e27a" items={[
            <span><strong>Fix recurring problems:</strong> AI groups feedback into themes so you repair causes, not symptoms.</span>,
            <span><strong>Steal the language:</strong> your best marketing copy is hiding in reviews — customers name benefits better than agencies do.</span>,
            <span><strong>Testimonials, with permission:</strong> one message asking “may we quote you?” builds a proof library.</span>,
            <span><strong>Content ideas:</strong> every repeated question is next week's pillar topic (Chapter 4 thanks you).</span>,
            <span><strong>Sharper offers:</strong> what people praise is what to feature; what they wish for is your next add-on.</span>,
            <span><strong>Smarter FAQs:</strong> feed friction points back into Chapter 3's knowledge base monthly.</span>,
            <span><strong>Early warning:</strong> three similar grumbles = a system problem brewing. Fix it before it's ten.</span>,
          ]} />
          <Callout variant="violet" icon={<TrendingUp size={15} />} title="Close the loop out loud">
            Tell customers what changed: <strong>“You asked, we fixed it.”</strong> Nothing turns a reviewer into a regular faster than being heard — visibly.
          </Callout>
        </div></Reveal>
      </div>
      <PageFoot n={19} section="Chapter 08 · Feedback Flywheel" />
    </ScaledPage>
  );
}
