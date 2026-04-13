import { useState, useEffect } from "react";

const TelegramVanish = ({ text, onComplete }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!text) return;

    const particleCount = 40;
    const textWidth = Math.min(text.length * 10, 200);

    const newParticles = Array.from({ length: particleCount }).map(() => ({
      id: Math.random(),

      x: 16 + Math.random() * textWidth,
      y: 18 + Math.random() * 10,
      vx: (Math.random() - 0.5) * 40,
      vy: -Math.random() * 60,
      size: Math.random() * 3 + 1,
    }));

    setParticles(newParticles);

    const timer = setTimeout(() => {
      setParticles([]);
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [text, onComplete]);

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
