// src/components/sections/CandlelightSection.jsx
import React, { useState, useRef } from 'react';
import { FanCrest, OrnateDivider } from '../common/DecorativeSVG';
import { Sparkles } from 'lucide-react';
import { I18N } from '../../data/i18n';

/**
 * CANDLELIGHT & WATER LOTUS SECTION (រាត្រីគោមបណ្តែតទឹក - ស្ទាយ Anime រ៉ូមែនទិក)
 * Dreamy twilight water, touching ripples and floating glowing lotus lanterns.
 */
export default function CandlelightSection({ currentLang = 'km' }) {
  const t = I18N[currentLang];
  const [lanterns, setLanterns] = useState([
    { id: 1, x: 28, y: 62, size: 44 },
    { id: 2, x: 68, y: 70, size: 50 },
    { id: 3, x: 48, y: 78, size: 42 }
  ]);
  const [ripples, setRipples] = useState([]);
  const containerRef = useRef(null);

  const handleTouchWater = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    if (!clientX || !clientY) return;

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    // Add ripple effect
    const newRipple = { id: Date.now(), x, y };
    setRipples((prev) => [...prev.slice(-5), newRipple]);

    // Spawn a floating lotus lantern
    if (lanterns.length < 9) {
      const newLantern = {
        id: Date.now() + 1,
        x: Math.max(10, Math.min(90, x)),
        y: Math.max(40, Math.min(85, y)),
        size: Math.floor(Math.random() * 15) + 38
      };
      setLanterns((prev) => [...prev, newLantern]);
    }

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1800);
  };

  return (
    <section
      ref={containerRef}
      onClick={handleTouchWater}
      className="relative w-full min-h-[580px] h-[80vh] flex flex-col items-center justify-between py-16 px-4 bg-gradient-to-b from-[#3a1a27] via-[#522538] to-[#2c131e] overflow-hidden cursor-pointer select-none text-[#fffdf7]"
    >
      {/* Background Water & Candlelight Photo with Anime Sunset Twilight Tone */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop')`,
          filter: 'brightness(0.55) contrast(1.1) saturate(1.3)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff0f4]/40 via-[#f8c8d3]/30 to-[#2c131e]/90 pointer-events-none" />

      {/* Ripple Rings in Soft Pink / Gold */}
      {ripples.map((rip) => (
        <span
          key={rip.id}
          className="absolute rounded-full border-2 border-[#ffd4df]/80 pointer-events-none animate-ping"
          style={{
            left: `${rip.x}%`,
            top: `${rip.y}%`,
            width: '64px',
            height: '64px',
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}

      {/* Floating Lotus Lanterns (Anime Lotus Glow) */}
      {lanterns.map((lan) => (
        <div
          key={lan.id}
          className="absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 animate-[float_4s_ease-in-out_infinite]"
          style={{
            left: `${lan.x}%`,
            top: `${lan.y}%`,
            width: `${lan.size}px`,
            height: `${lan.size}px`
          }}
        >
          {/* Glowing Candle Flame */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-300 blur-sm animate-pulse" />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white" />

          {/* Lotus Petal Base with Soft Rose & Gold Petals */}
          <svg viewBox="0 0 100 80" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,180,200,0.85)]">
            <path
              d="M50 20 C40 40, 20 45, 10 60 C30 65, 45 60, 50 75 C55 60, 70 65, 90 60 C80 45, 60 40, 50 20 Z"
              fill="url(#rose-gold-grad)"
            />
            <circle cx="50" cy="55" r="9" fill="#ffb6c1" opacity="0.95" />
            <circle cx="50" cy="55" r="5" fill="#fff" opacity="0.9" />
          </svg>
        </div>
      ))}

      {/* Header Info */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <FanCrest className="w-14 h-9 mb-2" />
        <h2 className="font-moul text-2xl md:text-3xl gold-foil-text drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {t.candlelightTitle}
        </h2>
        <OrnateDivider className="w-48 h-4 my-2 opacity-90" />
      </div>

      {/* Interactive Bottom Hint */}
      <div className="relative z-10 flex items-center gap-2 px-5 py-2 rounded-full bg-white/85 border border-[#e8aebb] backdrop-blur-md text-xs text-[#5c2838] shadow-md font-semibold">
        <Sparkles className="w-4 h-4 text-[#c59728] animate-spin" />
        <span className="font-kantumruy">{t.candlelightHint}</span>
      </div>
    </section>
  );
}
