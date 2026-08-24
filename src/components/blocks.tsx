import type { ReactNode } from "react";
import { ArrowRight, Check, Terminal } from "lucide-react";

/* Bullet list with accent markers */
export function Bullets({ items, color = "#22d3ee", gap = 8 }: { items: (string | ReactNode)[]; color?: string; gap?: number }) {
  return (
    <ul style={{ display: "grid", gap }}>
      {items.map((it, i) => (
        <li key={i} className="t-body flex items-start" style={{ gap: 10 }}>
          <span style={{ marginTop: 8, width: 7, height: 7, borderRadius: 3, flex: "none", background: `linear-gradient(135deg, ${color}, rgba(79,141,255,.6))`, boxShadow: `0 0 10px -2px ${color}` }} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/* Numbered implementation steps */
export function NumSteps({ steps }: { steps: { t: string; d: string | ReactNode }[] }) {
  return (
    <div className="grid gap-3">
      {steps.map((s, i) => (
        <div key={i} className="card flex items-start gap-3.5" style={{ padding: "13px 16px" }}>
          <span className="stepline-dot" style={{ marginTop: 1 }}>{i + 1}</span>
          <div>
            <div className="t-h3" style={{ color: "#fff" }}>{s.t}</div>
            <div className="t-small" style={{ marginTop: 2 }}>{s.d}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* Callout box */
export function Callout({ variant = "cyan", icon, title, children }: { variant?: "gold" | "cyan" | "violet"; icon?: ReactNode; title?: string; children: ReactNode }) {
  return (
    <div className={`callout callout-${variant}`}>
      {icon && <span style={{ flex: "none", marginTop: 1, color: variant === "gold" ? "#f6e27a" : variant === "violet" ? "#c4b5fd" : "#67e8f9" }}>{icon}</span>}
      <div>
        {title && <div className="t-h3" style={{ color: "#fff", marginBottom: 3 }}>{title}</div>}
        <div className="t-small" style={{ color: "#b9c9e6" }}>{children}</div>
      </div>
    </div>
  );
}

/* Generic node flow: icon + title (+sub) nodes connected by animated dashes */
export type FlowItem = { icon: ReactNode; t: string; s?: string; c?: "b" | "c" | "v" | "m" | "g" };
export function FlowSteps({ items }: { items: FlowItem[] }) {
  return (
    <div className="card flow-row" style={{ padding: "14px 10px" }}>
      {items.map((f, i) => (
        <div key={i} style={{ display: "contents" }}>
          {i > 0 && (
            <span className="flow-arrow">
              <ArrowRight size={16} strokeWidth={2.4} />
            </span>
          )}
          <div className="flow-node">
            <span className={`icobox ico-${f.c ?? "b"}`} style={{ width: 38, height: 38 }}>{f.icon}</span>
            <div>
              <div className="t-h3" style={{ fontSize: 13.5, color: "#fff" }}>{f.t}</div>
              {f.s && <div className="t-small" style={{ fontSize: 11, marginTop: 2, color: "#87a0c6" }}>{f.s}</div>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* Terminal-style card for logs / prompts / rules */
export function MonoCard({ label, lines, tint = "#22d3ee" }: { label: string; tint?: string; lines: { pre?: string; text: string; c?: string }[] }) {
  return (
    <div className="mono-card">
      <div className="mono-head">
        <span className="mono-dot" style={{ background: "#f87171" }} />
        <span className="mono-dot" style={{ background: "#fbbf24" }} />
        <span className="mono-dot" style={{ background: "#34d399" }} />
        <span className="t-mono flex items-center gap-1.5" style={{ marginLeft: 8, color: tint, fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          <Terminal size={11} /> {label}
        </span>
      </div>
      <div className="t-mono" style={{ padding: "14px 16px 16px", display: "grid", gap: 7, color: "#a9c3e8" }}>
        {lines.map((l, i) => (
          <div key={i} style={{ display: "flex", gap: 10 }}>
            {l.pre && <span style={{ color: "#41608f", flex: "none" }}>{l.pre}</span>}
            <span style={{ color: l.c ?? "#c4d8f5", whiteSpace: "pre-wrap" }}>{l.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Small icon + title + text tile */
export function MiniCard({ icon, title, children, c = "b" }: { icon: ReactNode; title: string; children: ReactNode; c?: "b" | "c" | "v" | "m" | "g" }) {
  return (
    <div className="card" style={{ padding: "15px 16px" }}>
      <span className={`icobox ico-${c}`} style={{ width: 36, height: 36, borderRadius: 10, marginBottom: 9 }}>{icon}</span>
      <div className="t-h3" style={{ color: "#fff", fontSize: 15.5 }}>{title}</div>
      <div className="t-small" style={{ marginTop: 4 }}>{children}</div>
    </div>
  );
}

/* Section heading inside a page */
export function SectionHead({ children, note }: { children: ReactNode; note?: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-3">
      <span style={{ width: 8, height: 8, borderRadius: 2, background: "linear-gradient(135deg,#f6e27a,#d4af37)", boxShadow: "0 0 12px -2px #d4af37", flex: "none", transform: "translateY(-2px)" }} />
      <h2 className="t-h2" style={{ color: "#fff" }}>{children}</h2>
      {note && <span className="t-small" style={{ color: "#7488ad" }}>{note}</span>}
    </div>
  );
}

export function CheckDot({ children }: { children: ReactNode }) {
  return (
    <li className="t-body flex items-start" style={{ gap: 9 }}>
      <span style={{ flex: "none", marginTop: 2 }}><Check size={16} strokeWidth={3} color="#34d399" /></span>
      <span>{children}</span>
    </li>
  );
}
