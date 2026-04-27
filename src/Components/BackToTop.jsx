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

  const r = 20,
    circ = 2 * Math.PI * r;

  return (
    <div onClick={scrollToTop} className={["group cursor-pointer select-none", "fixed bottom-10 right-8 z-50 w-14 h-14", visible ? (leaving ? "animate-fade-down" : "animate-fade-up") : "hidden"].join(" ")}>
      <div className='relative w-full h-full animate-float'>
        {/* Scroll progress ring */}
        <svg className='absolute inset-0 w-full h-full -rotate-90' viewBox='0 0 56 56'>
          <circle cx='28' cy='28' r={r} fill='none' stroke='rgba(34,197,94,0.12)' strokeWidth='2.5' />
          <circle cx='28' cy='28' r={r} fill='none' stroke='#22c55e' strokeWidth='2.5' strokeLinecap='round' strokeDasharray={`${circ * progress} ${circ}`} style={{ transition: "stroke-dasharray 0.1s linear", filter: "drop-shadow(0 0 4px rgba(34,197,94,0.8))" }} />
        </svg>

        {/* Button face */}
        <div
          className='
          absolute inset-1.5 rounded-2xl
        dark:bg-green-900/30
          border dark:border-green-400/40 flex items-center justify-center
          shadow-[0_0_20px_rgba(34,197,94,0.2),inset_0_1px_0_rgba(34,197,94,0.15)]
          group-hover:border-green-400/60
          group-hover:shadow-[0_0_30px_rgba(34,197,94,0.45),inset_0_1px_0_rgba(34,197,94,0.25)]
          transition-all duration-300
        '
        >
          <svg className='w-5 h-5 text-green-400 group-hover:text-green-300 transition-all duration-300 group-hover:-translate-y-0.5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
            <polyline points='17 11 12 6 7 11' />
            <line x1='12' y1='6' x2='12' y2='18' />
          </svg>
        </div>

        {/* Hover sparkles */}
        <div className='absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_6px_rgba(34,197,94,1)]' />
        <div className='absolute -bottom-0.5 -left-0.5 w-1 h-1 rounded-full bg-green-500 opacity-0 group-hover:opacity-75 transition-opacity duration-500 shadow-[0_0_4px_rgba(34,197,94,1)]' />
      </div>
    </div>
  );
}
