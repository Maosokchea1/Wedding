// src/components/envelope/WaxSeal.jsx
import React from 'react';
import { FanCrest } from '../common/DecorativeSVG';

/**
 * ROYAL GOLD & ROSE WAX SEAL (ត្រាមាសរាជបិទសំបុត្រ - បែបក្បាច់ខ្មែរ)
 * Authentic poured organic wax edge, SVG specular lighting,
 * debossed Khmer temple crest, double golden beaded rim, and glowing pulse cue.
 *
 * ✨ ENHANCED with traditional Khmer Kbach motifs (ក្បាច់ខ្មែរ):
 *   • ក្បាច់ធ្មេញរណ្តៅ (Sawtooth border)
 *   • ក្បាច់ផ្កាឈូក (Lotus petal ring — 12 petals)
 *   • ក្បាច់ភ្លើង (Flame/kbach leaves — 8 flames)
 *   • ក្បាច់ផ្កាកណ្តាល (Rosette petal ring — 16 debossed petals)
 *   • ក្បាច់ប្រាសាទ (Angkor-style temple spires at cardinal points)
 *   • ក្បាច់ជ្រុង (Corner kbach beads at diagonals)
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

  // === Khmer kbach pattern arrays (ម៉ាទ្រីសក្បាច់ខ្មែរ) ===
  const outerPetals   = Array.from({ length: 12 }, (_, i) => (i * 360) / 12);
  const innerFlames   = Array.from({ length: 8 },  (_, i) => (i * 360) / 8 + 22.5);
  const rosettePetals = Array.from({ length: 16 }, (_, i) => (i * 360) / 16);
  const cardinalSpires = [0, 90, 180, 270];
  const diagonalBeads  = [45, 135, 225, 315];

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
        {/* === Defs — gradients & filters (ដើមដើមខ្វះនៅក្នុងកូដចាស់) === */}
        <defs>
          <radialGradient id="gold-foil-grad" cx="35%" cy="30%" r="80%">
            <stop offset="0%"   stopColor="#fce4b0" />
            <stop offset="45%"  stopColor="#d4af37" />
            <stop offset="75%"  stopColor="#a67c1a" />
            <stop offset="100%" stopColor="#6b4a0e" />
          </radialGradient>
          <linearGradient id="rose-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#f5c9a8" />
            <stop offset="50%"  stopColor="#d4af37" />
            <stop offset="100%" stopColor="#b76e79" />
          </linearGradient>
          <linearGradient id="gold-sheen-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#fff8dc" />
            <stop offset="50%"  stopColor="#d4af37" />
            <stop offset="100%" stopColor="#8b6914" />
          </linearGradient>
          <filter id="seal-specular">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feSpecularLighting in="blur" surfaceScale="4" specularConstant="0.7" specularExponent="22" result="spec">
              <fePointLight x="28" y="18" z="90" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" operator="in" result="specOut" />
            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>
          <filter id="deboss-filter">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="blur" />
            <feOffset dx="0.6" dy="0.6" result="offsetBlur" />
            <feComposite in="SourceGraphic" in2="offsetBlur" operator="over" />
          </filter>
        </defs>

        {/* === Outer Organic Wax Rim (មាត់ក្រមួន) === */}
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

        {/* === 🪷 Khmer Sawtooth Border (ក្បាច់ធ្មេញរណ្តៅ) === */}
        <circle
          cx="50" cy="50" r="46.5"
          fill="none"
          stroke="rgba(255, 248, 220, 0.55)"
          strokeWidth="0.5"
          strokeDasharray="1 1.8"
          opacity="0.7"
        />

        {/* === 🪷 Outer Lotus Petal Ring (ក្បាច់ផ្កាឈូក) — 12 petals === */}
        <g opacity="0.92">
          {outerPetals.map((angle, i) => (
            <g key={`outer-petal-${i}`} transform={`rotate(${angle} 50 50)`}>
              <path
                d="M50 5 Q53.5 7 50 9 Q46.5 7 50 5 Z"
                fill="url(#rose-gold-grad)"
                stroke="rgba(255, 248, 220, 0.35)"
                strokeWidth="0.15"
              />
            </g>
          ))}
        </g>

        {/* === Outer Beaded Pearl Ring (ខ្សែក្រវ៉ាត់គុជ) === */}
        <circle
          cx="50" cy="50" r="41"
          fill="none"
          stroke="url(#rose-gold-grad)"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          opacity="0.85"
        />

        {/* === 🔥 Kbach Flame Leaves (ក្បាច់ភ្លើង) — 8 flames === */}
        <g opacity="0.85">
          {innerFlames.map((angle, i) => (
            <g key={`flame-${i}`} transform={`rotate(${angle} 50 50)`}>
              <path
                d="M50 9.5 L51.2 11 L50 12.5 L48.8 11 Z"
                fill="url(#gold-sheen-grad)"
                stroke="rgba(255, 248, 220, 0.4)"
                strokeWidth="0.15"
              />
            </g>
          ))}
        </g>

        {/* === Deep Melted Wax Pool (រណ្តៅក្រមួន) === */}
        <circle
          cx="50" cy="50" r="36"
          fill="#875314"
          stroke="url(#gold-sheen-grad)"
          strokeWidth="2.8"
          filter="url(#deboss-filter)"
          opacity="0.95"
        />

        {/* === 🌸 Rosette Kbach Petal Ring (ក្បាច់ផ្កាកណ្តាល) — 16 debossed petals === */}
        <g opacity="0.7">
          {rosettePetals.map((angle, i) => (
            <ellipse
              key={`rosette-${i}`}
              cx="50" cy="16.5" rx="1.8" ry="2.5"
              fill="url(#gold-foil-grad)"
              transform={`rotate(${angle} 50 50)`}
              opacity="0.85"
            />
          ))}
        </g>

        {/* === Inner Golden Filigree Circle (ខ្សែក្បាច់មាស) === */}
        <circle
          cx="50" cy="50" r="32"
          fill="#78470c"
          stroke="rgba(255, 245, 204, 0.55)"
          strokeWidth="1.2"
          strokeDasharray="2 3"
        />

        {/* === 🏛️ Angkor-style Temple Spires (ក្បាច់ប្រាសាទ) — 4 cardinal points === */}
        <g opacity="0.85">
          {cardinalSpires.map((angle, i) => (
            <g key={`spire-${i}`} transform={`rotate(${angle} 50 50)`}>
              <path
                d="M50 19 L50.6 20.5 L50.4 21.5 L50 22 L49.6 21.5 L49.4 20.5 Z"
                fill="url(#gold-sheen-grad)"
                stroke="rgba(255, 248, 220, 0.5)"
                strokeWidth="0.15"
              />
              <circle cx="50" cy="18.6" r="0.5" fill="#fff8dc" />
            </g>
          ))}
        </g>

        {/* === 🪷 Four Corner Kbach Beads (ក្បាច់ជ្រុង) — diagonals === */}
        <g opacity="0.8">
          {diagonalBeads.map((angle, i) => (
            <g key={`corner-${i}`} transform={`rotate(${angle} 50 50)`}>
              <circle cx="50" cy="22" r="0.9" fill="url(#rose-gold-grad)" />
              <circle cx="50" cy="25" r="0.6" fill="url(#rose-gold-grad)" opacity="0.6" />
            </g>
          ))}
        </g>

        {/* === Center Debossed Khmer Royal Temple Crest & Kbach Rosette === */}
        <g transform="translate(27, 24) scale(0.38)">
          <FanCrest className="w-30 h-26 text-[#fff8dc]" />
        </g>
      </svg>

      {/* Soft Specular Shimmer Sheen */}
      <div className="absolute inset-2 rounded-full pointer-events-none bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </button>
  );
}