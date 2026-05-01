// BackToTop.jsx
import { useState, useEffect, useRef } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const leaveTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? scrolled / total : 0);

      if (scrolled > 80) {
        if (!visible && !leaving) setVisible(true);
      } else {
        if (visible) {
          setLeaving(true);
          leaveTimer.current = setTimeout(() => {
            setVisible(false);
            setLeaving(false);
          }, 300);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(leaveTimer.current);
    };
  }, [visible, leaving]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const pct = Math.round(progress * 100);

  return (
    <div onClick={scrollToTop} className={["group cursor-pointer select-none", "fixed bottom-10 right-8 z-50 w-14 h-14", visible ? (leaving ? "animate-fade-down" : "animate-fade-up") : "hidden"].join(" ")}>
      <div className='relative w-full h-full animate-float'>
        {/* Button face — inset clears the full stroke width */}
        <div className='absolute inset-[6px] rounded-xl bg-background border border-border-gray flex flex-col items-center justify-center gap-0.5 group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)]group-hover:border-bg-text/40 transition-all duration-300'>
          <svg className='w-5 h-5 text-bg-text transition-all duration-300 group-hover:-translate-y-0.5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
            <polyline points='17 11 12 6 7 11' />
            <line x1='12' y1='6' x2='12' y2='18' />
          </svg>

          {/* Percentage */}
          <span className='font-mono text-bg-text/80 leading-none group-hover:text-bg-text/90 transition-colors duration-300' style={{ fontSize: 9 }}>
            {pct}%
          </span>
        </div>

        {/* Hover sparkles — use text color */}
        <div className='absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-bg-text opacity-0 group-hover:opacity-30 transition-opacity duration-300' />
        <div className='absolute -bottom-0.5 -left-0.5 w-1 h-1 rounded-full bg-bg-text opacity-0 group-hover:opacity-20 transition-opacity duration-500' />
      </div>
    </div>
  );
}
