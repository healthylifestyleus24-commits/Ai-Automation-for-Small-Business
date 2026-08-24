import { useEffect, useRef, type ReactNode } from "react";

export const PAGE_W = 816;
export const PAGE_H = 1056;

/* Scales the fixed 816x1056 page canvas to fit its container on screen.
   In print + mobile modes, CSS takes over (transform disabled). */
export function ScaledPage({ children, id, last }: { children: ReactNode; id: string; last?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const apply = () => {
      const s = el.clientWidth / PAGE_W;
      el.style.setProperty("--s", String(s));
    };
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    apply();
    return () => ro.disconnect();
  }, []);

  return (
    <div className="page-wrap px-3 py-4 sm:px-6">
      <div id={id} ref={ref} className={`page-outer${last ? " pb-last" : ""}`} data-page>
        <div className="page-inner">
          <article className="ebook-page">{children}</article>
        </div>
      </div>
    </div>
  );
}

/* Scroll reveal */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`rv ${className}`}>
      {children}
    </div>
  );
}

/* Standard page header: eyebrow + chapter tag */
export function PageHead({ eyebrow, tag, accent = "#22d3ee" }: { eyebrow: string; tag?: string; accent?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 mb-5">
      <div className="flex items-center gap-3">
        <span style={{ width: 26, height: 2, background: `linear-gradient(90deg, ${accent}, transparent)`, borderRadius: 2 }} />
        <span className="t-eyebrow" style={{ color: accent }}>{eyebrow}</span>
      </div>
      {tag && (
        <span className="chip" style={{ padding: "5px 12px", fontSize: 10.5 }}>
          {tag}
        </span>
      )}
    </div>
  );
}

/* Standard page footer with page number */
export function PageFoot({ n, section }: { n: number; section?: string }) {
  return (
    <footer className="pg-foot">
      <span>7 AI Automations for Small Business</span>
      <span className="hidden sm:inline" style={{ color: "#54678c" }}>{section ?? "GrowthVault"}</span>
      <span className="pg-num"><i /><b>{String(n).padStart(2, "0")}</b></span>
    </footer>
  );
}
