import { BrainCircuit, Workflow, TrendingUp, CircleAlert, Clock, Scissors, Users, Wrench, Compass, Flag } from "lucide-react";
import { ScaledPage, PageFoot, PageHead, Reveal } from "../components/Page";
import { Bullets, Callout, FlowSteps } from "../components/blocks";
import { NodeNet } from "../components/diagrams";

/* ================= PAGE 1 — COVER ================= */
export function P01() {
  return (
    <ScaledPage id="p1">
      <img src="images/cover.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,12,26,.82) 0%, rgba(6,12,26,.28) 34%, rgba(6,12,26,.12) 55%, rgba(6,12,26,.78) 100%)" }} />
      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Reveal className="flex flex-col items-center">
          <div className="flex items-center gap-3" style={{ marginTop: 26 }}>
            <span style={{ width: 34, height: 1, background: "linear-gradient(90deg,transparent,#D4AF37)" }} />
            <span className="t-eyebrow" style={{ color: "#f6e27a", letterSpacing: "0.34em" }}>GrowthVault Presents</span>
            <span style={{ width: 34, height: 1, background: "linear-gradient(270deg,transparent,#D4AF37)" }} />
          </div>
          <div style={{ marginTop: 92 }} className="gold-ruler" />
          <h1 className="t-display" style={{ marginTop: 26, color: "#fff", textShadow: "0 8px 44px rgba(0,20,60,.8)" }}>
            <span className="grad-gold" style={{ fontSize: 88, letterSpacing: "-0.03em" }}>7</span>{" "}
            <span className="grad-text">AI Automations</span>
            <br />
            <span style={{ color: "#eaf1ff" }}>for Small Business</span>
          </h1>
          <p className="t-lead" style={{ marginTop: 24, maxWidth: 520, color: "#c9d9f6" }}>
            Simple Systems That Save Time, Cut Costs <span style={{ color: "#f6e27a" }}>&amp;</span> Get More Customers
          </p>
        </Reveal>
        <div style={{ flex: 1 }} />
        <Reveal className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-2.5">
            {[{ i: <Clock size={13} />, t: "Save Time" }, { i: <Scissors size={13} />, t: "Cut Costs" }, { i: <Users size={13} />, t: "Win Customers" }].map((c, k) => (
              <span key={k} className="chip" style={{ backdropFilter: "blur(8px)", background: "rgba(10,22,44,.55)", padding: "8px 16px", fontSize: 12 }}>{c.i}{c.t}</span>
            ))}
          </div>
          <div style={{ marginTop: 34, display: "flex", alignItems: "center", gap: 14 }}>
            <span className="t-eyebrow" style={{ color: "#c8d7f5", letterSpacing: "0.3em" }}>By</span>
            <span className="t-h2 grad-gold" style={{ fontSize: 26 }}>GrowthVault</span>
            <span className="t-eyebrow" style={{ color: "#54678c", letterSpacing: "0.22em" }}>· 28-Page Field Guide</span>
          </div>
        </Reveal>
      </div>
      <PageFoot n={1} section="Premium Digital Edition" />
    </ScaledPage>
  );
}

/* ================= PAGE 2 — CONTENTS ================= */
export function P02() {
  const chapters = [
    { n: "01", t: "The Small Business Automation Advantage", p: "04" },
    { n: "02", t: "AI Lead Generation Automation", p: "06" },
    { n: "03", t: "AI Customer Support Automation", p: "08" },
    { n: "04", t: "AI Content & Social Media Automation", p: "10" },
    { n: "05", t: "AI Email Marketing Automation", p: "12" },
    { n: "06", t: "AI Sales Follow-Up Automation", p: "14" },
    { n: "07", t: "AI Appointment & Scheduling Automation", p: "16" },
    { n: "08", t: "AI Review & Reputation Automation", p: "18" },
    { n: "09", t: "Your Simple AI Business Operating System", p: "20", g: true },
    { n: "10", t: "Building Your 30-Day Automation Roadmap", p: "23", g: true },
  ];
  return (
    <ScaledPage id="p2">
      <div className="ghost" style={{ width: 380, height: 380, top: -140, right: -120, background: "rgba(124,58,237,.16)" }} />
      <PageHead eyebrow="Inside This Guide" tag="10 Chapters" accent="#D4AF37" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>Contents</h1>
        <p className="t-lead" style={{ marginTop: 12, maxWidth: 620 }}>
          Seven working systems, one connected operating model, and a 30-day plan to put them in your business — <strong>in plain English</strong>.
        </p>
      </Reveal>
      <div className="two-col" style={{ gap: 34, marginTop: 26 }}>
        <Reveal>
          <div className="grid" style={{ gap: 7 }}>
            {chapters.map((c) => (
              <div key={c.n} className="flex items-baseline gap-3.5" style={{ padding: "7px 0", borderBottom: "1px solid rgba(140,170,255,.1)" }}>
                <span className="t-mono" style={{ fontSize: 12, color: c.g ? "#f6e27a" : "#67e8f9", flex: "none" }}>{c.n}</span>
                <span className="t-h3" style={{ fontSize: 14.5, color: c.g ? "#f6e9c6" : "#e7efff", lineHeight: 1.35 }}>{c.t}</span>
                <span className="t-mono" style={{ marginLeft: "auto", fontSize: 11.5, color: "#5c709a", flex: "none", paddingLeft: 10 }}>{c.p}</span>
              </div>
            ))}
          </div>
          <p className="t-small" style={{ marginTop: 14 }}>Also inside: <strong>How to Use This Guide</strong> (p.03), the <strong>Action Plan &amp; Checklist</strong> (p.27), and a closing note from GrowthVault (p.28).</p>
        </Reveal>
        <Reveal>
          <div className="card relative overflow-hidden" style={{ padding: "18px 20px 14px" }}>
            <div className="t-eyebrow" style={{ color: "#a78bfa", fontSize: 10 }}>The Shape of This Book</div>
            <div style={{ maxWidth: 250, margin: "2px auto -8px" }}><NodeNet /></div>
            <p className="t-small" style={{ borderTop: "1px solid rgba(140,170,255,.12)", paddingTop: 12 }}><strong>How to read it:</strong> Chapters 1–9 each teach one system — read straight through, or jump to the automation you need most. Chapter 10 assembles everything into a 30-day build plan. Implement <strong>one system fully</strong> before starting the next.</p>
          </div>
        </Reveal>
      </div>
      <PageFoot n={2} section="Contents" />
    </ScaledPage>
  );
}

/* ================= PAGE 3 — HOW TO USE ================= */
export function P03() {
  return (
    <ScaledPage id="p3">
      <div className="ghost" style={{ width: 340, height: 340, bottom: -120, left: -140, background: "rgba(34,211,238,.1)" }} />
      <PageHead eyebrow="Before You Begin" tag="Read Me First" accent="#22d3ee" />
      <Reveal>
        <h1 className="t-h1" style={{ color: "#fff" }}>How to Use This Guide</h1>
        <p className="t-lead" style={{ marginTop: 12 }}>This is a <strong>working manual</strong>, not a tech textbook. Every chapter ends with something you can actually build — usually within a week, often within an afternoon.</p>
      </Reveal>
      <div className="two-col" style={{ gap: 30, marginTop: 22 }}>
        <Reveal className="grid" >
          <div className="grid" style={{ gap: 16 }}>
            <div>
              <div className="t-h3 flex items-center gap-2" style={{ color: "#fff", marginBottom: 8 }}><Users size={16} color="#67e8f9" /> Who this is for</div>
              <div className="flex flex-wrap gap-1.5">
                {["Solopreneurs", "Freelancers", "Coaches", "Consultants", "Local businesses", "Online businesses", "E-commerce", "Service pros", "Agencies", "Creators", "Small teams"].map((t) => (
                  <span key={t} className="chip" style={{ fontSize: 11, padding: "4px 11px" }}>{t}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="t-h3 flex items-center gap-2" style={{ color: "#fff", marginBottom: 8 }}><Flag size={16} color="#f6e27a" /> What you'll walk away with</div>
              <Bullets gap={7} items={[
                <span><strong>7 working automation systems</strong> for leads, support, content, email, follow-up, scheduling, and reviews.</span>,
                <span>A simple way to <strong>spot what's worth automating</strong> — and what to leave alone.</span>,
                <span>A <strong>30-day roadmap</strong> plus a one-page action checklist.</span>,
              ]} />
            </div>
            <div>
              <div className="t-h3 flex items-center gap-2" style={{ color: "#fff", marginBottom: 8 }}><Wrench size={16} color="#a78bfa" /> What you need</div>
              <p className="t-small">An <strong>AI assistant</strong>, one <strong>automation platform</strong>, and the tools you already use (email, calendar, forms). Most readers start on free or low-cost plans — <strong>roughly $0–100/month</strong>. No coding required, anywhere in this book.</p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid" style={{ gap: 14 }}>
            <div className="card" style={{ padding: 16 }}>
              <div className="t-eyebrow" style={{ fontSize: 10, color: "#67e8f9", marginBottom: 10 }}>How every system in this book works</div>
              <FlowSteps items={[
                { icon: <CircleAlert size={16} />, t: "Problem", s: "repetitive task", c: "m" },
                { icon: <BrainCircuit size={16} />, t: "AI", s: "thinks & drafts", c: "v" },
                { icon: <Workflow size={16} />, t: "Automation", s: "acts reliably", c: "b" },
                { icon: <TrendingUp size={16} />, t: "Result", s: "measured & improved", c: "g" },
              ]} />
            </div>
            <div>
              <div className="t-h3 flex items-center gap-2" style={{ color: "#fff", marginBottom: 8 }}><Compass size={16} color="#f472b6" /> Choosing where to start</div>
              <p className="t-small">Start where the pain is loudest: drowning in DMs? Go to Chapter 3. Leads going cold? Chapter 6. Nothing stands out? <strong>Follow the roadmap in order</strong> — it's designed so each system makes the next one easier.</p>
            </div>
            <Callout variant="gold" title="The golden rule of this book">
              Automate <strong>one thing well</strong> before automating ten things poorly. A single reliable system will return more value than a dozen half-finished experiments — and it teaches you the pattern for everything that follows.
            </Callout>
          </div>
        </Reveal>
      </div>
      <PageFoot n={3} section="Orientation" />
    </ScaledPage>
  );
}
