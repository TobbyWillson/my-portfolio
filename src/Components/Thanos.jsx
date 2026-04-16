import { useState, useEffect } from "react";

const TelegramVanish = ({ text, charIndex = null, onComplete, containerRef = null }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!text) return;

    const isMobile = window.innerWidth < 768;
    const charWidth = 10;

    const hasContainer = !!containerRef?.current;

    const isFullWidth = charIndex === null;
    const containerWidth = containerRef?.current ? containerRef.current.getBoundingClientRect().width : Math.min(text.length * charWidth, window.innerWidth - 32);

    // const particleCount = isFullWidth ? (isMobile ? 25 : 40) : isMobile ? 12 : 20;
    const baseCount = isFullWidth ? Math.floor(containerWidth / 6) : isMobile ? 12 : 20;
    const mobileCap = isFullWidth ? (hasContainer ? 45 : 25) : 12; // 60 for all texts on Mobile with containerRef, 25 with no ref, 12 for single chars.
    const desktopCap = isFullWidth ? (hasContainer ? 120 : 40) : 20;
    const particleCount = isMobile ? Math.min(baseCount, mobileCap) : Math.min(baseCount, desktopCap);

    const spreadWidth = isFullWidth ? containerWidth : charWidth;
    const originX = isFullWidth ? 0 : 16 + charIndex * charWidth;

    const newParticles = Array.from({ length: particleCount }).map(() => ({
      id: Math.random(),
      x: isFullWidth ? 16 + Math.random() * spreadWidth : originX + (Math.random() - 0.5) * spreadWidth,
      y: isFullWidth ? Math.random() * 28 : 18 + Math.random() * 10,
      vx: (Math.random() - 0.5) * (isFullWidth ? 50 : 30),
      vy: -Math.random() * (isFullWidth ? 70 : 40),
      size: Math.random() * 3 + 1,
    }));

    setParticles(newParticles);

    const timer = setTimeout(
      () => {
        setParticles([]);
        onComplete();
      },
      isFullWidth ? 2000 : 600,
    );

    return () => clearTimeout(timer);
  }, [text, charIndex]);

  return (
    <>
      {particles.map((p) => (
        <span
          key={p.id}
          className='dust text-bg-text dark:text-white'
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            "--dx": `${p.vx}px`,
            "--dy": `${p.vy}px`,
          }}
        />
      ))}
    </>
  );
};

export default TelegramVanish;
