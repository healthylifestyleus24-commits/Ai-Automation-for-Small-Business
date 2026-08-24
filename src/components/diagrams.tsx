import {
  BrainCircuit, Magnet, Headset, PenLine, Mail, Repeat, CalendarCheck, Star,
  Sparkles, FileText, Share2, Video, Image as ImageIcon, Layers,
  ArrowDown, ArrowRight, CheckCircle2, AlertTriangle, Bot, CircleUser, TrendingUp, Send,
} from "lucide-react";

const rad = (d: number) => (d * Math.PI) / 180;
const pt = (cx: number, cy: number, r: number, deg: number): [number, number] => [cx + r * Math.cos(rad(deg)), cy + r * Math.sin(rad(deg))];

/* ------------------------------------------------------------------ */
/* TOC — decorative node network                                       */
/* ------------------------------------------------------------------ */
export function NodeNet() {
  const nodes: [number, number, number][] = [
    [60, 60, 5], [180, 40, 7], [300, 80, 4], [350, 180, 6], [250, 150, 9], [120, 150, 5],
    [40, 240, 8], [150, 260, 6], [270, 250, 5], [350, 300, 8], [80, 360, 6], [200, 360, 9],
    [320, 420, 5], [140, 460, 7], [40, 520, 5], [260, 540, 8], [360, 500, 6],
  ];
  const edges: [number, number][] = [[0,1],[1,2],[1,5],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[7,10],[10,11],[11,12],[11,13],[13,14],[13,15],[15,16],[12,16],[4,8],[9,12]];
  return (
    <svg viewBox="0 0 400 580" style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <linearGradient id="nn-edge" x1="0" y1="0" x2="400" y2="580" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0.55" /><stop offset="1" stopColor="#7c3aed" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="nn-glow"><stop offset="0" stopColor="#67e8f9" stopOpacity="0.9" /><stop offset="1" stopColor="#67e8f9" stopOpacity="0" /></radialGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="url(#nn-edge)" strokeWidth="1.4" strokeDasharray="5 7" className="anim-dash" />
      ))}
      {nodes.map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r * 2.6} fill="url(#nn-glow)" opacity={0.35} className="anim-pulse" style={{ animationDelay: `${i * 0.23}s` }} />
          <circle cx={x} cy={y} r={r} fill={i % 4 === 0 ? "#d4af37" : i % 3 === 0 ? "#a78bfa" : "#22d3ee"} opacity={0.9} />
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* P4 — Chaos vs automated order                                       */
/* ------------------------------------------------------------------ */
export function ChaosOrder() {
  const chaos = [
    { t: "Unread emails", x: 8, y: 12, r: -7 }, { t: "Missed follow-up", x: 48, y: 6, r: 5 },
    { t: "Invoice chasing", x: 14, y: 40, r: 4 }, { t: "“Just checking in”", x: 55, y: 38, r: -5 },
    { t: "No-shows", x: 8, y: 70, r: -4 }, { t: "Forgot to post", x: 50, y: 66, r: 6 },
    { t: "Lost lead", x: 30, y: 52, r: 2 },
  ];
  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
      <div className="card relative" style={{ minHeight: 300, borderColor: "rgba(244,113,116,.25)", background: "linear-gradient(160deg, rgba(244,113,116,.07), rgba(255,255,255,.015))" }}>
        <div className="t-eyebrow" style={{ position: "absolute", top: 14, left: 16, color: "#fca5a5", fontSize: 10 }}>Manual mode</div>
        <svg viewBox="0 0 100 100" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.35 }} preserveAspectRatio="none">
          <path d="M20 20 C 60 5, 10 60, 70 45 S 30 95, 80 80" fill="none" stroke="#f87171" strokeWidth="0.7" strokeDasharray="2 2" />
          <path d="M70 15 C 30 30, 90 55, 25 70 S 60 95, 15 90" fill="none" stroke="#f472b6" strokeWidth="0.7" strokeDasharray="2 2" />
        </svg>
        {chaos.map((c, i) => (
          <span key={i} className="t-small anim-float" style={{ position: "absolute", left: `${c.x}%`, top: `${c.y}%`, transform: `rotate(${c.r}deg)`, animationDelay: `${i * 0.4}s`, fontSize: 11.5, color: "#fecaca", border: "1px solid rgba(248,113,113,.35)", background: "rgba(80,20,20,.35)", padding: "5px 10px", borderRadius: 999, whiteSpace: "nowrap" }}>{c.t}</span>
        ))}
      </div>
      <div className="card relative flex flex-col items-center justify-center gap-2" style={{ minHeight: 300, borderColor: "rgba(34,211,238,.3)", background: "linear-gradient(160deg, rgba(34,211,238,.07), rgba(255,255,255,.015))" }}>
        <div className="t-eyebrow" style={{ position: "absolute", top: 14, left: 16, color: "#67e8f9", fontSize: 10 }}>Automated mode</div>
        {["Trigger arrives", "AI decides", "System acts"].map((s, i) => (
          <div key={i} style={{ display: "contents" }}>
            {i > 0 && <ArrowDown size={15} color="#4f8dff" />}
            <span className="t-h3" style={{ fontSize: 13.5, color: "#dff3ff", border: "1px solid rgba(34,211,238,.35)", background: "rgba(8,40,60,.5)", padding: "9px 20px", borderRadius: 12, boxShadow: "0 0 24px -8px rgba(34,211,238,.6)" }}>{s}</span>
          </div>
        ))}
        <span className="chip" style={{ marginTop: 8, borderColor: "rgba(52,211,153,.4)", color: "#a7f3d0" }}><CheckCircle2 size={13} /> Done — while you sleep</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* P5 — Automation Opportunity Scorecard                               */
/* ------------------------------------------------------------------ */
export function Scorecard() {
  const rows = [
    { k: "REPEAT", q: "Does it happen again and again?", s: 5, tip: "Weekly or daily scores high" },
    { k: "TIME", q: "Does it eat hours you could reuse?", s: 4, tip: "30+ min per occurrence" },
    { k: "RULES", q: "Can clear rules or criteria decide it?", s: 5, tip: "“If this, then that” logic" },
    { k: "VALUE", q: "Is human judgment low-value here?", s: 4, tip: "Skill adds little per rep" },
  ];
  return (
    <div className="card" style={{ padding: "22px 22px 18px" }}>
      <div className="flex items-center justify-between mb-4">
        <span className="t-eyebrow" style={{ color: "#67e8f9" }}>Automation Opportunity Scorecard</span>
        <span className="t-mono" style={{ color: "#7488ad", fontSize: 10.5 }}>SCORE 1–5 EACH</span>
      </div>
      <div className="grid gap-3.5">
        {rows.map((r) => (
          <div key={r.k} className="grid items-center gap-3" style={{ gridTemplateColumns: "86px 1fr 132px" }}>
            <span className="t-h3 grad-gold" style={{ fontSize: 14.5, letterSpacing: "0.06em" }}>{r.k}</span>
            <div>
              <div className="t-body" style={{ color: "#d7e4fb", fontSize: 14 }}>{r.q}</div>
              <div className="t-small" style={{ fontSize: 11.5, color: "#7488ad" }}>{r.tip}</div>
            </div>
            <div className="flex gap-1.5 justify-end">
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n} style={{ width: 15, height: 15, borderRadius: "50%", background: n <= r.s ? "linear-gradient(135deg,#67e8f9,#4f8dff)" : "rgba(120,150,200,.15)", boxShadow: n <= r.s ? "0 0 10px -2px rgba(34,211,238,.7)" : "none" }} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="t-small" style={{ marginTop: 16, paddingTop: 12, borderTop: "1px dashed rgba(140,170,255,.18)", color: "#9fb3d6", display: "flex", gap: 8, alignItems: "center" }}>
        <Sparkles size={14} color="#f6e27a" /> <span><strong>14+ out of 20</strong> = a strong automation candidate. Score any task in under a minute.</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* P8 — Chatbot mock                                                   */
/* ------------------------------------------------------------------ */
export function ChatMock() {
  return (
    <div className="mono-card" style={{ padding: 0 }}>
      <div className="mono-head">
        <span className="icobox ico-c" style={{ width: 28, height: 28, borderRadius: 9 }}><Bot size={15} /></span>
        <div>
          <div className="t-h3" style={{ fontSize: 13, color: "#fff" }}>Ava — GreenLeaf Support</div>
          <div className="t-small flex items-center gap-1.5" style={{ fontSize: 10.5, color: "#34d399" }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 8px #34d399" }} /> Online · replies instantly</div>
        </div>
        <span className="t-mono" style={{ marginLeft: "auto", color: "#41608f", fontSize: 10 }}>24/7</span>
      </div>
      <div className="grid gap-2.5" style={{ padding: "16px 16px 18px" }}>
        <div className="t-small" style={{ justifySelf: "end", maxWidth: "82%", background: "linear-gradient(140deg,#2f6bff,#1d3f9f)", color: "#eaf2ff", padding: "9px 13px", borderRadius: "14px 14px 5px 14px", fontSize: 13 }}>Do you offer weekly cleaning for offices?</div>
        <div className="t-small" style={{ maxWidth: "86%", background: "rgba(148,184,255,.09)", border: "1px solid rgba(148,184,255,.16)", color: "#d5e2f8", padding: "9px 13px", borderRadius: "14px 14px 14px 5px", fontSize: 13 }}>Yes! Weekly office cleaning starts at $140/visit. I can book a free walkthrough this week — would Tuesday or Thursday suit you?</div>
        <div className="flex gap-2" style={{ justifySelf: "start" }}>
          <span className="chip" style={{ fontSize: 10.5, padding: "4px 11px", cursor: "default" }}>Tuesday</span>
          <span className="chip" style={{ fontSize: 10.5, padding: "4px 11px", cursor: "default" }}>Thursday</span>
          <span className="chip" style={{ fontSize: 10.5, padding: "4px 11px", cursor: "default", borderColor: "rgba(212,175,55,.4)", color: "#f6e27a" }}>Talk to a person</span>
        </div>
        <div className="t-small flex items-center gap-2" style={{ marginTop: 2, color: "#7488ad", fontSize: 11.5 }}>
          <AlertTriangle size={12} color="#f6e27a" /> Refund, complaint or emergency? Ava hands off to a human — instantly.
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* P10 — Hub & spoke repurposing                                       */
/* ------------------------------------------------------------------ */
export function HubSpoke() {
  const cx = 350, cy = 212, R = 168;
  const sats = [
    { icon: <FileText size={17} />, t: "Blog Article", c: "#4f8dff" },
    { icon: <Mail size={17} />, t: "Email Issue", c: "#22d3ee" },
    { icon: <Share2 size={17} />, t: "3+ Social Posts", c: "#a78bfa" },
    { icon: <Video size={17} />, t: "Short Video", c: "#f472b6" },
    { icon: <ImageIcon size={17} />, t: "Pinterest Pin", c: "#d4af37" },
    { icon: <Layers size={17} />, t: "Carousel / PDF", c: "#34d399" },
  ];
  return (
    <svg viewBox="0 0 700 424" style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <radialGradient id="hs-hub" cx="0.5" cy="0.4" r="0.9"><stop offset="0" stopColor="#21335f" /><stop offset="1" stopColor="#101f3c" /></radialGradient>
        <linearGradient id="hs-line" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#22d3ee" /><stop offset="1" stopColor="#7c3aed" /></linearGradient>
      </defs>
      {sats.map((_, i) => {
        const a = -90 + i * 60;
        const [x1, y1] = pt(cx, cy, 78, a);
        const [x2, y2] = pt(cx, cy, R - 58, a);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#hs-line)" strokeWidth="1.8" strokeDasharray="4 8" className="anim-dash" opacity={0.75} />;
      })}
      <circle cx={cx} cy={cy} r={80} fill="url(#hs-hub)" stroke="rgba(148,184,255,.3)" strokeWidth="1.4" />
      <circle cx={cx} cy={cy} r={80} fill="none" stroke="rgba(34,211,238,.35)" strokeWidth="1" strokeDasharray="3 9" className="anim-dash" />
      <g style={{ color: "#f6e27a" }}><Sparkles x={cx - 14} y={cy - 38} size={28} /></g>
      <text x={cx} y={cy + 6} textAnchor="middle" fill="#fff" fontFamily="Sora" fontWeight={800} fontSize={16.5}>ONE PILLAR</text>
      <text x={cx} y={cy + 26} textAnchor="middle" fill="#f6e27a" fontFamily="Sora" fontWeight={800} fontSize={16.5}>IDEA / WEEK</text>
      <text x={cx} y={cy + 46} textAnchor="middle" fill="#8ea5cd" fontFamily="Inter" fontSize={11}>you · 30 minutes</text>
      {sats.map((s, i) => {
        const a = -90 + i * 60;
        const [x, y] = pt(cx, cy, R, a);
        return (
          <g key={i}>
            <rect x={x - 86} y={y - 27} width={172} height={54} rx={14} fill="rgba(13,26,48,.92)" stroke="rgba(148,184,255,.25)" />
            <circle cx={x - 60} cy={y} r={16} fill={s.c} opacity={0.18} />
            <circle cx={x - 60} cy={y} r={16} fill="none" stroke={s.c} strokeOpacity={0.5} />
            <g style={{ color: s.c }}>{<s.icon.type {...(s.icon.props as object)} x={x - 60 - 8.5} y={y - 8.5} size={17} />}</g>
            <text x={x - 36} y={y + 4.5} fill="#dce8fc" fontFamily="Sora" fontWeight={700} fontSize={13}>{s.t}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* P11 — Weekly strip                                                  */
/* ------------------------------------------------------------------ */
export function WeekStrip() {
  const days = [
    { d: "MON", t: "Pick the weekly topic", c: "b" as const }, { d: "TUE", t: "Draft core piece with AI", c: "c" as const },
    { d: "WED", t: "Edit + add your voice", c: "g" as const }, { d: "THU", t: "Repurpose & schedule", c: "v" as const },
    { d: "FRI", t: "Review performance", c: "m" as const },
  ];
  return (
    <div className="grid gap-2.5" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
      {days.map((x, i) => (
        <div key={i} className="card flex flex-col items-center text-center gap-2" style={{ padding: "13px 8px" }}>
          <span className="t-mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "#7488ad" }}>{x.d}</span>
          <span className={`icobox ico-${x.c}`} style={{ width: 30, height: 30, borderRadius: 9 }}><Send size={13} /></span>
          <span className="t-small" style={{ fontSize: 11.5, lineHeight: 1.4, color: "#c8d7f5" }}>{x.t}</span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* P13 — 5-email sequence                                              */
/* ------------------------------------------------------------------ */
export function Seq5() {
  const rows = [
    { n: 1, t: "The Welcome", d: "Deliver the thing they asked for. Set expectations. Feel human.", w: "Immediately", c: "#22d3ee" },
    { n: 2, t: "The Problem", d: "Name their pain better than they can. Teach one useful idea.", w: "Day 2", c: "#4f8dff" },
    { n: 3, t: "The Solution", d: "Show the smarter path — your method, explained generously.", w: "Day 4", c: "#7c3aed" },
    { n: 4, t: "The Proof", d: "Results, a client story, real numbers. Reduce perceived risk.", w: "Day 6", c: "#f472b6" },
    { n: 5, t: "The Offer", d: "One clear call to action with a reason to act this week.", w: "Day 8", c: "#d4af37" },
  ];
  return (
    <div className="grid gap-2.5">
      {rows.map((r) => (
        <div key={r.n} className="card grid items-center gap-3" style={{ gridTemplateColumns: "44px 92px 1fr auto", padding: "11px 14px" }}>
          <span className="t-display" style={{ fontSize: 26, color: r.c, opacity: 0.9 }}>{r.n}</span>
          <span className="t-h3" style={{ fontSize: 14, color: "#fff" }}>{r.t}</span>
          <span className="t-small" style={{ fontSize: 12.5 }}>{r.d}</span>
          <span className="chip" style={{ fontSize: 10, padding: "3px 10px", borderColor: `${r.c}55`, color: r.c }}>{r.w}</span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* P15 — Day timeline                                                  */
/* ------------------------------------------------------------------ */
export function DayLine() {
  const days = [
    { d: "DAY 0", t: "Instant response", s: "Acknowledge + answer + one smart question. Within 60 seconds.", c: "#22d3ee" },
    { d: "DAY 1", t: "Helpful follow-up", s: "Add something useful — a tip, a guide, a quick win.", c: "#4f8dff" },
    { d: "DAY 3", t: "Value + proof", s: "A result, a mini case story, a screenshot of outcomes.", c: "#7c3aed" },
    { d: "DAY 5", t: "Objection handling", s: "Address the #1 reason people hesitate. Offer an easy next step.", c: "#f472b6" },
    { d: "DAY 7", t: "Friendly close", s: "Last nudge, honest and warm. Keep the door open.", c: "#d4af37" },
  ];
  return (
    <div className="relative" style={{ paddingLeft: 26 }}>
      <span style={{ position: "absolute", left: 6, top: 8, bottom: 8, width: 2, background: "linear-gradient(#22d3ee,#7c3aed,#d4af37)" }} />
      <div className="grid gap-3">
        {days.map((x, i) => (
          <div key={i} className="relative">
            <span style={{ position: "absolute", left: -26, top: 4, width: 14, height: 14, borderRadius: "50%", background: "#0b1628", border: `2.5px solid ${x.c}`, boxShadow: `0 0 12px -2px ${x.c}` }} />
            <div className="t-mono" style={{ fontSize: 10.5, letterSpacing: "0.18em", color: x.c }}>{x.d}</div>
            <div className="t-h3" style={{ fontSize: 15, color: "#fff", marginTop: 1 }}>{x.t}</div>
            <div className="t-small" style={{ fontSize: 12.5 }}>{x.s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* P16 — Calendar mock                                                 */
/* ------------------------------------------------------------------ */
export function CalendarMock() {
  const cells: { d?: number; ev?: string; c?: string }[] = Array.from({ length: 35 }, (_, i) => {
    const d = i - 2;
    if (d < 1 || d > 31) return {};
    const evs: Record<number, [string, string]> = { 4: ["10:00 Consult", "#22d3ee"], 6: ["14:30 Demo", "#a78bfa"], 11: ["09:00 Call", "#22d3ee"], 13: ["Follow-up sent", "#d4af37"], 18: ["15:00 Session", "#f472b6"], 25: ["Reminder auto", "#34d399"] };
    return { d, ...(evs[d] ? { ev: evs[d][0], c: evs[d][1] } : {}) };
  });
  return (
    <div className="mono-card" style={{ padding: 0 }}>
      <div className="mono-head">
        <CalendarCheck size={14} color="#67e8f9" />
        <span className="t-h3" style={{ fontSize: 13, color: "#fff", marginLeft: 4 }}>March — bookings run themselves</span>
        <span className="t-mono" style={{ marginLeft: "auto", color: "#41608f", fontSize: 10 }}>SYNCED · 2 CALENDARS</span>
      </div>
      <div className="grid" style={{ gridTemplateColumns: "repeat(7,1fr)", gap: 6, padding: 14 }}>
        {cells.map((c, i) => (
          <div key={i} style={{ minHeight: 52, borderRadius: 9, border: "1px solid rgba(120,160,230,.1)", background: c.ev ? "rgba(34,211,238,.05)" : "rgba(255,255,255,.02)", padding: "5px 6px" }}>
            {c.d && <div className="t-mono" style={{ fontSize: 10, color: "#62779f" }}>{c.d}</div>}
            {c.ev && <div className="t-small" style={{ fontSize: 9.5, marginTop: 3, padding: "2px 5px", borderRadius: 5, color: c.c, border: `1px solid ${c.c}66`, background: `${c.c}14`, lineHeight: 1.3 }}>{c.ev}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* P18 — Review flow with AI classification split                      */
/* ------------------------------------------------------------------ */
export function ReviewSplit() {
  return (
    <svg viewBox="0 0 700 320" style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <marker id="rs-a-g" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#34d399" /></marker>
        <marker id="rs-a-o" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#fbbf24" /></marker>
        <marker id="rs-a-b" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#4f8dff" /></marker>
      </defs>
      {[
        { x: 8, y: 126, w: 128, h: 68, t: "Service", t2: "completed", c: "#4f8dff" },
        { x: 186, y: 126, w: 128, h: 68, t: "Feedback form", t2: "2 questions · 30 sec", c: "#22d3ee" },
        { x: 364, y: 126, w: 128, h: 68, t: "AI reads tone", t2: "& classifies", c: "#a78bfa" },
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={13} fill="rgba(13,26,48,.94)" stroke={`${b.c}88`} />
          <text x={b.x + b.w / 2} y={b.y + 30} textAnchor="middle" fill="#fff" fontFamily="Sora" fontWeight={700} fontSize={13.5}>{b.t}</text>
          <text x={b.x + b.w / 2} y={b.y + 50} textAnchor="middle" fill="#8ea5cd" fontFamily="Inter" fontSize={11.5}>{b.t2}</text>
        </g>
      ))}
      <line x1={136} y1={160} x2={182} y2={160} stroke="#4f8dff" strokeWidth={2} strokeDasharray="4 6" className="anim-dash" markerEnd="url(#rs-a-b)" />
      <line x1={314} y1={160} x2={360} y2={160} stroke="#4f8dff" strokeWidth={2} strokeDasharray="4 6" className="anim-dash" markerEnd="url(#rs-a-b)" />
      <path d="M492 146 C 540 120, 552 92, 580 84" fill="none" stroke="#34d399" strokeWidth={2} strokeDasharray="5 6" className="anim-dash" markerEnd="url(#rs-a-g)" />
      <path d="M492 174 C 540 200, 552 228, 580 236" fill="none" stroke="#fbbf24" strokeWidth={2} strokeDasharray="5 6" className="anim-dash" markerEnd="url(#rs-a-o)" />
      <g>
        <rect x={584} y={40} width={110} height={88} rx={13} fill="rgba(10,44,32,.85)" stroke="#34d399aa" />
        <text x={639} y={68} textAnchor="middle" fill="#a7f3d0" fontFamily="Sora" fontWeight={700} fontSize={12.5}>Happy?</text>
        <text x={639} y={90} textAnchor="middle" fill="#d7f5e6" fontFamily="Inter" fontSize={10.8}>Invite a public</text>
        <text x={639} y={105} textAnchor="middle" fill="#d7f5e6" fontFamily="Inter" fontSize={10.8}>review + thank</text>
      </g>
      <g>
        <rect x={584} y={192} width={110} height={88} rx={13} fill="rgba(56,42,8,.8)" stroke="#fbbf24aa" />
        <text x={639} y={220} textAnchor="middle" fill="#fde68a" fontFamily="Sora" fontWeight={700} fontSize={12.5}>Unhappy?</text>
        <text x={639} y={242} textAnchor="middle" fill="#f7e8c4" fontFamily="Inter" fontSize={10.8}>Human calls</text>
        <text x={639} y={257} textAnchor="middle" fill="#f7e8c4" fontFamily="Inter" fontSize={10.8}>within 24 h</text>
      </g>
      <text x={350} y={300} textAnchor="middle" fill="#7488ad" fontFamily="Inter" fontSize={11}>Honesty rule: invite everyone, never pressure, never invent reviews — routing exists for service recovery, not suppression.</text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* P19 — Feedback loop                                                 */
/* ------------------------------------------------------------------ */
export function LoopCycle() {
  const cx = 300, cy = 190, R = 128;
  const items = [
    { icon: <CircleUser size={17} />, t: "FEEDBACK", s: "collect in 30 sec", c: "#22d3ee", a: -90 },
    { icon: <BrainCircuit size={17} />, t: "INSIGHT", s: "AI finds patterns", c: "#a78bfa", a: 0 },
    { icon: <TrendingUp size={17} />, t: "IMPROVEMENT", s: "fix one thing/week", c: "#f472b6", a: 90 },
    { icon: <Sparkles size={17} />, t: "BETTER CX", s: "customers feel it", c: "#d4af37", a: 180 },
  ];
  return (
    <svg viewBox="0 0 600 380" style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <marker id="lc-a" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#67e8f9" /></marker>
        <radialGradient id="lc-hub" cx="0.5" cy="0.4" r="1"><stop offset="0" stopColor="#243a6b" /><stop offset="1" stopColor="#101f3c" /></radialGradient>
      </defs>
      {items.map((_, i) => {
        const a1 = -90 + i * 90 + 26, a2 = -90 + (i + 1) * 90 - 26;
        const [x1, y1] = pt(cx, cy, R, a1); const [x2, y2] = pt(cx, cy, R, a2);
        return <path key={i} d={`M ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2}`} fill="none" stroke="rgba(103,232,249,.4)" strokeWidth={2} strokeDasharray="4 8" className="anim-dash" markerEnd="url(#lc-a)" />;
      })}
      <circle cx={cx} cy={cy} r={56} fill="url(#lc-hub)" stroke="rgba(148,184,255,.3)" />
      <text x={cx} y={cy - 4} textAnchor="middle" fill="#fff" fontFamily="Sora" fontWeight={800} fontSize={13.5}>LEARN</text>
      <text x={cx} y={cy + 14} textAnchor="middle" fill="#f6e27a" fontFamily="Sora" fontWeight={800} fontSize={13.5}>&amp; IMPROVE</text>
      {items.map((it, i) => {
        const [x, y] = pt(cx, cy, R, it.a);
        return (
          <g key={i}>
            <rect x={x - 92} y={y - 30} width={184} height={60} rx={14} fill="rgba(13,26,48,.95)" stroke={`${it.c}77`} />
            <g style={{ color: it.c }}>{<it.icon.type {...(it.icon.props as object)} x={x - 78} y={y - 8.5} size={17} />}</g>
            <text x={x - 52} y={y - 3} fill="#fff" fontFamily="Sora" fontWeight={700} fontSize={13}>{it.t}</text>
            <text x={x - 52} y={y + 15} fill="#8ea5cd" fontFamily="Inter" fontSize={11}>{it.s}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* P20 — 8-stage business journey (serpentine)                         */
/* ------------------------------------------------------------------ */
export function Journey() {
  const row1 = [
    { t: "Marketing", c: "b" as const }, { t: "Leads", c: "c" as const }, { t: "CRM", c: "v" as const }, { t: "Sales", c: "m" as const },
  ];
  const row2 = [
    { t: "Appointment", c: "m" as const }, { t: "Service", c: "b" as const }, { t: "Review", c: "g" as const }, { t: "Retention", c: "c" as const },
  ];
  const Node = ({ t, c }: { t: string; c: "b" | "c" | "v" | "m" | "g" }) => (
    <div className="card flex-1 flex flex-col items-center gap-1.5" style={{ padding: "12px 6px" }}>
      <span className={`icobox ico-${c}`} style={{ width: 32, height: 32, borderRadius: 10 }}><BrainCircuit size={15} /></span>
      <span className="t-h3" style={{ fontSize: 12.5, color: "#fff" }}>{t}</span>
    </div>
  );
  const Arr = ({ flip }: { flip?: boolean }) => (
    <span className="flex items-center" style={{ color: "#4f8dff", transform: flip ? "scaleX(-1)" : undefined }}><ArrowRight size={15} /></span>
  );
  return (
    <div className="card" style={{ padding: "16px 14px", position: "relative", overflow: "hidden" }}>
      <div className="grid gap-2.5">
        <div className="flex items-center gap-2">{row1.map((n, i) => (<div key={i} className="contents"><Node {...n} />{i < 3 && <Arr />}</div>))}</div>
        <div className="flex justify-end pr-3" style={{ color: "#4f8dff" }}><ArrowDown size={15} /></div>
        <div className="flex items-center gap-2" style={{ flexDirection: "row-reverse" }}>{row2.map((n, i) => (<div key={i} className="contents"><Node {...n} />{i < 3 && <Arr flip />}</div>))}</div>
      </div>
      <div className="t-small text-center" style={{ marginTop: 12, color: "#9fb3d6" }}>One customer, one connected journey — each system hands clean context to the next.</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* P21 — The 7-automation flywheel (flagship)                          */
/* ------------------------------------------------------------------ */
export function Flywheel() {
  const cx = 360, cy = 236, R = 168;
  const items = [
    { icon: Magnet, t: "Lead", t2: "Generation", c: "#22d3ee" },
    { icon: Headset, t: "Customer", t2: "Support", c: "#4f8dff" },
    { icon: PenLine, t: "Content &", t2: "Social", c: "#a78bfa" },
    { icon: Mail, t: "Email", t2: "Marketing", c: "#f472b6" },
    { icon: Repeat, t: "Sales", t2: "Follow-Up", c: "#d4af37" },
    { icon: CalendarCheck, t: "Scheduling", t2: "& Booking", c: "#34d399" },
    { icon: Star, t: "Reviews &", t2: "Reputation", c: "#f6e27a" },
  ];
  return (
    <svg viewBox="0 0 720 472" style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <marker id="fw-a" markerWidth="10" markerHeight="10" refX="7.5" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#67e8f9" /></marker>
        <radialGradient id="fw-hub" cx="0.5" cy="0.35" r="1"><stop offset="0" stopColor="#27396e" /><stop offset="1" stopColor="#0f1e3a" /></radialGradient>
        <linearGradient id="fw-ring" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#22d3ee" /><stop offset="0.5" stopColor="#7c3aed" /><stop offset="1" stopColor="#f472b6" /></linearGradient>
      </defs>
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(148,184,255,.12)" strokeWidth={7} />
      {items.map((_, i) => {
        const step = 360 / 7;
        const a1 = -90 + i * step + 17, a2 = -90 + (i + 1) * step - 17;
        const [x1, y1] = pt(cx, cy, R, a1); const [x2, y2] = pt(cx, cy, R, a2);
        return <path key={i} d={`M ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2}`} fill="none" stroke="url(#fw-ring)" strokeWidth={2.4} strokeDasharray="5 9" className="anim-dash" markerEnd="url(#fw-a)" opacity={0.9} />;
      })}
      {items.map((it, i) => {
        const a = -90 + (i * 360) / 7;
        const [x1, y1] = pt(cx, cy, 64, a); const [x2, y2] = pt(cx, cy, R - 46, a);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={it.c} strokeOpacity={0.35} strokeWidth={1.4} />;
      })}
      <circle cx={cx} cy={cy} r={62} fill="url(#fw-hub)" stroke="rgba(148,184,255,.35)" strokeWidth={1.4} />
      <circle cx={cx} cy={cy} r={62} fill="none" stroke="rgba(34,211,238,.4)" strokeWidth={1} strokeDasharray="2 8" className="anim-dash" />
      <g style={{ color: "#f6e27a" }}><BrainCircuit x={cx - 15} y={cy - 34} size={30} /></g>
      <text x={cx} y={cy + 14} textAnchor="middle" fill="#fff" fontFamily="Sora" fontWeight={800} fontSize={14}>AI BUSINESS</text>
      <text x={cx} y={cy + 32} textAnchor="middle" fill="#f6e27a" fontFamily="Sora" fontWeight={800} fontSize={14}>OPERATING SYSTEM</text>
      {items.map((it, i) => {
        const a = -90 + (i * 360) / 7;
        const [x, y] = pt(cx, cy, R, a);
        const Icon = it.icon;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={46} fill="rgba(12,24,46,.96)" stroke={it.c} strokeOpacity={0.85} strokeWidth={1.6} />
            <circle cx={x} cy={y} r={46} fill="none" stroke={it.c} strokeOpacity={0.25} strokeWidth={6} />
            <circle cx={x} cy={y - 44} r={10.5} fill="#0b1628" stroke={it.c} strokeWidth={1.4} />
            <text x={x} y={y - 40} textAnchor="middle" fill={it.c} fontFamily="Sora" fontWeight={700} fontSize={10.5}>{i + 1}</text>
            <g style={{ color: it.c }}><Icon x={x - 11} y={y - 24} size={22} /></g>
            <text x={x} y={y + 12} textAnchor="middle" fill="#eaf1ff" fontFamily="Sora" fontWeight={700} fontSize={11.5}>{it.t}</text>
            <text x={x} y={y + 26} textAnchor="middle" fill="#eaf1ff" fontFamily="Sora" fontWeight={700} fontSize={11.5}>{it.t2}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* P23 — 30-day roadmap                                                */
/* ------------------------------------------------------------------ */
export function Roadmap30() {
  const weeks = [
    { w: "WEEK 1", d: "Days 1–7", t: "Audit", s: "List & score every repetitive task", tag: "Output: ranked task list", c: "#22d3ee" },
    { w: "WEEK 2", d: "Days 8–14", t: "Build #1", s: "Create your first automation", tag: "Output: one live system", c: "#4f8dff" },
    { w: "WEEK 3", d: "Days 15–21", t: "Connect", s: "Link it to the next system", tag: "Output: data flows", c: "#a78bfa" },
    { w: "WEEK 4", d: "Days 22–30", t: "Optimize", s: "Measure, fix, document", tag: "Output: playbook v1", c: "#d4af37" },
  ];
  return (
    <div>
      <div className="grid gap-2.5" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
        {weeks.map((x, i) => (
          <div key={i} className="card" style={{ padding: "14px 13px", borderTop: `3px solid ${x.c}` }}>
            <div className="flex items-baseline justify-between"><span className="t-mono" style={{ fontSize: 10, letterSpacing: "0.16em", color: x.c }}>{x.w}</span><span className="t-mono" style={{ fontSize: 9.5, color: "#5c709a" }}>{x.d}</span></div>
            <div className="t-h3" style={{ color: "#fff", fontSize: 16, marginTop: 5 }}>{x.t}</div>
            <div className="t-small" style={{ fontSize: 11.5, marginTop: 3, minHeight: 34 }}>{x.s}</div>
            <div className="chip" style={{ fontSize: 9.5, padding: "3px 9px", marginTop: 6, borderColor: `${x.c}55`, color: x.c }}>{x.tag}</div>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-0.5" style={{ marginTop: 10, height: 26 }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} style={{ flex: 1, height: i % 7 === 6 ? 24 : 14, borderRadius: 3, background: i < 7 ? "#22d3ee" : i < 14 ? "#4f8dff" : i < 21 ? "#a78bfa" : "#d4af37", opacity: 0.25 + (i % 7 === 6 ? 0.55 : 0) }} />
        ))}
      </div>
      <div className="flex justify-between t-mono" style={{ fontSize: 9.5, color: "#5c709a", marginTop: 4 }}><span>DAY 1</span><span>DAY 8</span><span>DAY 15</span><span>DAY 22</span><span>DAY 30</span></div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* P24 — Priority matrix                                               */
/* ------------------------------------------------------------------ */
export function Matrix22() {
  const Quad = ({ title, sub, chips, c, star }: { title: string; sub: string; chips: string[]; c: string; star?: boolean }) => (
    <div className="card relative" style={{ padding: "14px 15px", borderColor: `${c}55`, background: `linear-gradient(150deg, ${c}0f, rgba(255,255,255,.015))` }}>
      {star && <span className="t-mono" style={{ position: "absolute", top: 10, right: 12, color: "#f6e27a", fontSize: 9.5, letterSpacing: "0.14em" }}>★ START HERE</span>}
      <div className="t-h3" style={{ color: c, fontSize: 15 }}>{title}</div>
      <div className="t-small" style={{ fontSize: 11.5, margin: "3px 0 8px" }}>{sub}</div>
      <div className="flex flex-wrap gap-1.5">{chips.map((ch, i) => <span key={i} className="chip" style={{ fontSize: 10, padding: "3px 10px", borderColor: `${c}44` }}>{ch}</span>)}</div>
    </div>
  );
  return (
    <div>
      <div className="grid gap-2.5" style={{ gridTemplateColumns: "30px 1fr 1fr" }}>
        <div />
        <div className="t-mono text-center" style={{ fontSize: 10, color: "#67e8f9", letterSpacing: "0.16em" }}>EASY TO BUILD</div>
        <div className="t-mono text-center" style={{ fontSize: 10, color: "#8ea5cd", letterSpacing: "0.16em" }}>HARDER TO BUILD</div>
        <div className="t-mono flex items-center justify-center" style={{ fontSize: 10, color: "#8ea5cd", writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.16em" }}>HIGH IMPACT</div>
        <Quad star title="DO FIRST" sub="High impact · low effort. Momentum lives here." c="#f6e27a" chips={["Instant lead replies", "Review requests", "Booking reminders"]} />
        <Quad title="PLAN NEXT" sub="Worth it — schedule it after your first wins." c="#a78bfa" chips={["Full content engine", "Multi-step nurture"]} />
        <div className="t-mono flex items-center justify-center" style={{ fontSize: 10, color: "#5c709a", writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.16em" }}>LOWER IMPACT</div>
        <Quad title="OPTIONAL" sub="Quick wins when you have spare capacity." c="#67e8f9" chips={["Social scheduling", "Auto FAQ snippets"]} />
        <Quad title="AVOID FOR NOW" sub="Effort-heavy, return-light. Revisit later." c="#f87171" chips={["Custom-coded bots", "Over-engineered CRM"]} />
      </div>
      <div className="t-mono flex justify-between" style={{ fontSize: 9.5, color: "#5c709a", marginTop: 6, paddingLeft: 34 }}><span>EFFORT → LOW</span><span>EFFORT → HIGH</span></div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* P25 — Analytics dashboard mock                                      */
/* ------------------------------------------------------------------ */
export function DashboardMock() {
  const spark = [10, 14, 12, 18, 16, 22, 20, 27, 25, 32];
  const bars = [34, 55, 42, 68, 60, 82];
  const pts = spark.map((v, i) => `${(i * 236) / 9},${52 - (v / 32) * 44}`).join(" ");
  return (
    <div className="mono-card" style={{ padding: 0 }}>
      <div className="mono-head">
        <TrendingUp size={14} color="#67e8f9" />
        <span className="t-h3" style={{ fontSize: 13, color: "#fff", marginLeft: 4 }}>Automation scoreboard</span>
        <span className="t-mono" style={{ marginLeft: "auto", color: "#41608f", fontSize: 9.5 }}>SAMPLE READOUT · LAST 30 DAYS</span>
      </div>
      <div className="grid gap-2.5" style={{ gridTemplateColumns: "repeat(4,1fr)", padding: "14px 14px 0" }}>
        {[
          { k: "Hours saved / wk", v: "11.5", d: "+3.2 vs last mo", c: "#22d3ee" },
          { k: "First response", v: "58s", d: "was 4 h 12 m", c: "#4f8dff" },
          { k: "Leads captured", v: "46", d: "100% entered in CRM", c: "#a78bfa" },
          { k: "Reviews (avg)", v: "4.8", d: "9 new this month", c: "#d4af37" },
        ].map((x, i) => (
          <div key={i} className="card" style={{ padding: "11px 12px" }}>
            <div className="t-small" style={{ fontSize: 10.5, color: "#7e93b8" }}>{x.k}</div>
            <div className="t-display" style={{ fontSize: 26, color: x.c, marginTop: 1 }}>{x.v}</div>
            <div className="t-small" style={{ fontSize: 10, color: "#34d399" }}>{x.d}</div>
          </div>
        ))}
      </div>
      <div className="grid gap-2.5" style={{ gridTemplateColumns: "1.35fr 1fr", padding: 14 }}>
        <div className="card" style={{ padding: "12px 14px" }}>
          <div className="t-small flex justify-between" style={{ fontSize: 10.5, color: "#7e93b8" }}><span>Booked appointments</span><span style={{ color: "#34d399" }}>▲ trending</span></div>
          <svg viewBox="0 0 236 56" style={{ width: "100%", height: "auto", marginTop: 6 }}>
            <polyline points={pts} fill="none" stroke="#22d3ee" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
            <polygon points={`${pts} 236,56 0,56`} fill="url(#dm-fill)" opacity={0.5} />
            <defs><linearGradient id="dm-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#22d3ee" stopOpacity={0.5} /><stop offset="1" stopColor="#22d3ee" stopOpacity={0} /></linearGradient></defs>
          </svg>
        </div>
        <div className="card" style={{ padding: "12px 14px" }}>
          <div className="t-small" style={{ fontSize: 10.5, color: "#7e93b8" }}>Follow-ups completed</div>
          <svg viewBox="0 0 150 56" style={{ width: "100%", height: "auto", marginTop: 6 }}>
            {bars.map((b, i) => (
              <rect key={i} x={i * 26 + 3} y={56 - (b / 100) * 50} width={16} height={(b / 100) * 50} rx={3} fill={i === 5 ? "#f6e27a" : "#4f8dff"} opacity={i === 5 ? 0.95 : 0.75} />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* P27 — Action illustration: launch arrow                             */
/* ------------------------------------------------------------------ */
export function LaunchArrow() {
  return (
    <svg viewBox="0 0 700 190" style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <linearGradient id="la-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#22d3ee" /><stop offset="0.55" stopColor="#7c3aed" /><stop offset="1" stopColor="#d4af37" /></linearGradient>
        <marker id="la-a" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto"><path d="M0,0 L12,6 L0,12 z" fill="#f6e27a" /></marker>
      </defs>
      <path d="M20 150 C 180 160, 380 130, 660 40" fill="none" stroke="url(#la-g)" strokeWidth={3.5} strokeLinecap="round" strokeDasharray="7 10" className="anim-dash" markerEnd="url(#la-a)" />
      {[
        { x: 55, y: 147, t: "One task", c: "#22d3ee" },
        { x: 260, y: 140, t: "One system", c: "#4f8dff" },
        { x: 470, y: 95, t: "One flywheel", c: "#a78bfa" },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={7} fill={n.c} />
          <circle cx={n.x} cy={n.y} r={13} fill="none" stroke={n.c} strokeOpacity={0.4} />
          <text x={n.x + 18} y={n.y + 26} fill="#8ea5cd" fontFamily="Sora" fontWeight={600} fontSize={12}>{n.t}</text>
        </g>
      ))}
      <text x={640} y={34} textAnchor="middle" fill="#f6e27a" fontFamily="Sora" fontWeight={800} fontSize={14.5}>GROWTH</text>
    </svg>
  );
}
