// src/components/envelope/WaxSeal.jsx
import React from 'react';
import { FanCrest } from '../common/DecorativeSVG';

/**
 * ROYAL GOLD & ROSE WAX SEAL (ត្រាមាសរាជបិទសំបុត្រ - បែបក្បាច់ខ្មែរ)
 * Authentic poured organic wax edge, SVG specular lighting,
 * debossed Khmer temple crest, double golden beaded rim, and glowing pulse cue.
 */
export default function WaxSeal({
  onClick,
  isOpening = false,
  step = 0, // 0: idle, 1: pressed, 2: lifted, 3: set aside
  className = ""
}) {
  let animationStyles = "transition-all duration-700 ease-out cursor-pointer hover:scale-108 active:scale-95";

  if (step === 1) {
    animationStyles = "scale-95 translate-y-1 shadow-[0_2px_10px_rgba(180,90,110,0.8)] duration-300";
  } else if (step === 2) {
    animationStyles = "scale-115 -translate-y-8 shadow-[0_35px_60px_rgba(140,60,80,0.65)] duration-700";
  } else if (step >= 3) {
    animationStyles = "scale-90 translate-x-56 -translate-y-48 opacity-0 duration-1000 ease-in pointer-events-none";
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isOpening}
      aria-label="ចុចលើត្រាមាសដើម្បីបើកលិខិតអញ្ជើញ (Open Invitation)"
      className={`relative group focus:outline-none select-none ${animationStyles} ${className}`}
    >
      {/* Pulsing Golden Aura Ring (Prompts guest to tap) */}
      {step === 0 && (
        <span className="absolute -inset-2.5 rounded-full border-2 border-[#d4af37]/70 animate-ping pointer-events-none opacity-60" />
      )}
      {step === 0 && (
        <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#d4af37]/30 to-[#fce4ea]/50 blur-sm pointer-events-none animate-pulse" />
      )}

      {/* Realistic Cast Shadow on Paper */}
      <div
        className={`absolute inset-0 rounded-full bg-[#6b283d]/45 blur-md transform translate-y-3 pointer-events-none transition-all duration-500 ${
          step === 2 ? "blur-xl scale-125 opacity-70 translate-y-10" : "opacity-60"
        }`}
      />

      {/* SVG Royal Wax Seal */}
      <svg
        viewBox="0 0 100 100"
        className="relative w-22 h-22 md:w-26 md:h-26 drop-shadow-[0_10px_20px_rgba(180,90,110,0.45)]"
      >
        {/* Uneven organic poured wax rim with natural molten lobes */}
        <path
          d="M50 3
             C66 2, 78 8, 87 18
             C97 29, 99 43, 95 58
             C91 73, 83 85, 71 93
             C57 100, 41 99, 28 93
             C15 86, 5 73, 3 57
             C1 42, 7 27, 18 16
             C28 6, 39 4, 50 3 Z"
          fill="url(#gold-foil-grad)"
          filter="url(#seal-specular)"
        />

        {/* Outer Beaded Pearl Ring */}
        <circle
          cx="50"
          cy="50"
          r="41"
          fill="none"
          stroke="url(#rose-gold-grad)"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          opacity="0.85"
        />

        {/* Deep Melted Wax Pool (Debossed Rim) */}
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="#875314"
          stroke="url(#gold-sheen-grad)"
          strokeWidth="2.8"
          filter="url(#deboss-filter)"
          opacity="0.95"
        />

        {/* Inner Golden Filigree Circle */}
        <circle
          cx="50"
          cy="50"
          r="32"
          fill="#78470c"
          stroke="rgba(255, 245, 204, 0.55)"
          strokeWidth="1.2"
          strokeDasharray="2 3"
        />

        {/* Center Debossed Khmer Royal Temple Crest & Kbach Rosette */}
        <g transform="translate(27, 24) scale(0.38)">
          <FanCrest className="w-30 h-26 text-[#fff8dc]" />
        </g>
      </svg>

      {/* Soft Specular Shimmer Sheen */}
      <div className="absolute inset-2 rounded-full pointer-events-none bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </button>
  );
}
