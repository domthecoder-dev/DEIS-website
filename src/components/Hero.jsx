'use client'; // ← This is the magic line

import { useEffect, useRef } from 'react';

const MATRIX_CHARS = '10101010101010101010101010111111000001010101010101111100000101010101011';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // This entire effect only runs in the browser → safe for static export
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      columns = Math.floor(canvas.width / fontSize);
      drops.length = 0;
      for (let i = 0; i < columns; i++) drops.push(1);
    };

    let fontSize = 16;
    let columns = Math.floor(window.innerWidth / fontSize);
    let drops = Array(columns).fill(1);

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.fillStyle = 'rgba(18, 32, 53, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#60d1ac';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        if (Math.random() > 0.975) {
          ctx.fillStyle = '#34d399';
          ctx.fillText(char, x, y);
          ctx.fillStyle = '#60d1ac';
        }

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []); // Empty dependency → runs once on mount

  return (
    <section className="relative py-[14px] md:py-[22px] lg:py-[30px] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 min-w-screen h-screen -z-10"
      />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh]">
        <div className="bg-blue-900/30 backdrop-blur-xl rounded-3xl p-10 md:p-16 max-w-5xl w-full mx-auto shadow-2xl border border-cyan-500/20 text-center ring-1 ring-cyan-400/10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Your Business is <span className="text-accent">Unique</span>. Your Website Should Be Too.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            DE Innovative Solutions creates fully custom, hand-coded websites guaranteed to score{' '}
            <strong>90+ on Google Speed Tests</strong>—because your first impression should be fast, secure, and unlike anyone else's.
          </p>
          <a
            href="#quote"
            className="btn-primary text-lg px-8 py-4 inline-block"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}