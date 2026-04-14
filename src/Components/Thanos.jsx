import { useState, useEffect } from "react";

const TelegramVanish = ({ text, charIndex = null, onComplete }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!text) return;

    const isMobile = window.innerWidth < 768;
    const charWidth = 10;

    const isFullWidth = charIndex === null;
    const particleCount = isFullWidth ? (isMobile ? 25 : 40) : isMobile ? 12 : 20;
    const originX = isFullWidth ? null : 16 + charIndex * charWidth;
    const spreadWidth = isFullWidth ? Math.min(text.length * charWidth, 200) : charWidth;

    const newParticles = Array.from({ length: particleCount }).map(() => ({
      id: Math.random(),
      x: isFullWidth ? 16 + Math.random() * spreadWidth : originX + (Math.random() - 0.5) * spreadWidth,
      y: 18 + Math.random() * 10,
      vx: (Math.random() - 0.5) * (isFullWidth ? 40 : 30),
      vy: -Math.random() * (isFullWidth ? 60 : 40),
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
