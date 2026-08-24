import { useEffect, useState } from "react";
import { Download, Hexagon, ChevronUp } from "lucide-react";
import { P01, P02, P03 } from "./pages/FrontMatter";
import { P04, P05, P06, P07 } from "./pages/Ch1_2";
import { P08, P09, P10, P11 } from "./pages/Ch3_4";
import { P12, P13, P14, P15 } from "./pages/Ch5_6";
import { P16, P17, P18, P19 } from "./pages/Ch7_8";
import { P20, P21, P22 } from "./pages/Ch9a";
import { P23, P24, P25 } from "./pages/Ch10a";
import { P26, P27, P28 } from "./pages/Closing";

const PAGES = [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28];

export default function App() {
  const [current, setCurrent] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const els = document.querySelectorAll<HTMLElement>("[data-page]");
      const mid = window.innerHeight * 0.42;
      let active = 1;
      els.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) active = i + 1;
      });
      setCurrent(active);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div className="scene" />

      {/* ======= SCREEN CHROME (hidden in print) ======= */}
      <header className="app-chrome fixed top-0 inset-x-0 z-50">
        <div style={{ backdropFilter: "blur(14px)", background: "rgba(6,12,24,.72)", borderBottom: "1px solid rgba(140,170,255,.12)" }}>
          <div className="mx-auto flex items-center gap-3 px-4 sm:px-6" style={{ maxWidth: 1080, height: 58 }}>
            <span className="flex items-center gap-2.5" style={{ flex: "none" }}>
              <Hexagon size={20} color="#D4AF37" fill="rgba(212,175,55,.15)" />
              <span className="t-eyebrow" style={{ color: "#f6e27a", letterSpacing: "0.26em" }}>GrowthVault</span>
            </span>
            <span className="hidden md:block t-small" style={{ color: "#54678c", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              7 AI Automations for Small Business
            </span>
            <span className="t-mono" style={{ marginLeft: "auto", color: "#8ea5cd", fontSize: 11, letterSpacing: "0.14em", flex: "none" }}>
              PAGE <b style={{ color: "#f6e27a" }}>{String(current).padStart(2, "0")}</b> / 28
            </span>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 transition-transform hover:-translate-y-0.5"
              style={{
                flex: "none", cursor: "pointer", border: "1px solid rgba(212,175,55,.45)",
                background: "linear-gradient(140deg, rgba(212,175,55,.2), rgba(212,175,55,.06))",
                color: "#f6e27a", borderRadius: 999, padding: "8px 16px",
                fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.04em",
              }}
            >
              <Download size={14} /> Save as PDF
            </button>
          </div>
          <div style={{ height: 2, background: "rgba(140,170,255,.08)" }}>
            <div style={{ height: "100%", width: `${progress * 100}%`, background: "linear-gradient(90deg,#22d3ee,#4f8dff,#7c3aed,#d4af37)", transition: "width .15s linear" }} />
          </div>
        </div>
      </header>

      {/* Dot navigation */}
      <nav className="app-chrome fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-1.5 xl:flex">
        {PAGES.map((_, i) => (
          <a
            key={i}
            href={`#p${i + 1}`}
            onClick={(e) => { e.preventDefault(); document.getElementById(`p${i + 1}`)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
            aria-label={`Page ${i + 1}`}
            style={{
              width: current === i + 1 ? 8 : 5, height: current === i + 1 ? 8 : 5, borderRadius: "50%",
              marginLeft: current === i + 1 ? 0 : 1.5,
              background: current === i + 1 ? "linear-gradient(135deg,#f6e27a,#d4af37)" : "rgba(140,170,255,.3)",
              boxShadow: current === i + 1 ? "0 0 10px rgba(212,175,55,.7)" : "none",
              transition: "all .3s", display: "block",
            }}
          />
        ))}
      </nav>

      {/* Back to top */}
      <button
        className="app-chrome fixed bottom-5 right-5 z-50 flex items-center justify-center transition-opacity"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        style={{
          width: 42, height: 42, borderRadius: "50%", cursor: "pointer",
          border: "1px solid rgba(140,170,255,.25)", background: "rgba(10,20,38,.85)", backdropFilter: "blur(10px)",
          color: "#9fc2ff", opacity: progress > 0.06 ? 1 : 0, pointerEvents: progress > 0.06 ? "auto" : "none",
        }}
      >
        <ChevronUp size={18} />
      </button>

      {/* ======= THE BOOK ======= */}
      <main className="book-main mx-auto" style={{ maxWidth: 960, paddingTop: 58 }}>
        <div className="app-chrome mx-auto flex justify-center px-4" style={{ maxWidth: 760, paddingTop: 26 }}>
          <p className="t-small text-center" style={{ color: "#7488ad", fontSize: 12 }}>
            Scroll to read the complete 28-page guide — or press <b style={{ color: "#f6e27a" }}>Save as PDF</b> (⌘/Ctrl&nbsp;P&nbsp;→&nbsp;“Save as PDF”) to export the print-perfect ebook.
          </p>
        </div>
        <div className="book-col mx-auto grid" style={{ maxWidth: 940, padding: "6px 0 70px", gap: 8 }}>
          {PAGES.map((Page, i) => (
            <Page key={i} />
          ))}
        </div>
      </main>
    </div>
  );
}
