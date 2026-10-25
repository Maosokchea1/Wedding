// src/components/common/DecorativeSVG.jsx
import React from 'react';

/**
 * Universal Gold & Rose Gold Foil Gradients and Specular Lighting Filters
 */
export const SvgGoldDefs = () => (
  <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
    <defs>
      {/* Royal Gold Foil Gradient */}
      <linearGradient id="gold-foil-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#bf953f" />
        <stop offset="25%" stopColor="#fcf6ba" />
        <stop offset="50%" stopColor="#b38728" />
        <stop offset="75%" stopColor="#fbf5b7" />
        <stop offset="100%" stopColor="#aa771c" />
      </linearGradient>

      {/* Radiant Gold Sheen */}
      <linearGradient id="gold-sheen-grad" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#d4af37" />
        <stop offset="35%" stopColor="#fff9d2" />
        <stop offset="65%" stopColor="#b8860b" />
        <stop offset="100%" stopColor="#e5c158" />
      </linearGradient>

      {/* Rose Gold Accent Gradient (សម្រាប់លាយជាមួយពណ៌ផ្កាឈូកស្ដើង) */}
      <linearGradient id="rose-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d99879" />
        <stop offset="30%" stopColor="#fbe2d5" />
        <stop offset="60%" stopColor="#c57f62" />
        <stop offset="85%" stopColor="#f7d0be" />
        <stop offset="100%" stopColor="#aa6245" />
      </linearGradient>

      {/* SVG Specular Lighting for Wax Seal */}
      <filter id="seal-specular" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2.2" result="blur" />
        <feSpecularLighting
          in="blur"
          surfaceScale="3.2"
          specularConstant="1.25"
          specularExponent="22"
          lightingColor="#fff9e6"
          result="specOut"
        >
          <fePointLight x="-45" y="-65" z="170" />
        </feSpecularLighting>
        <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specIn" />
        <feComposite in="SourceGraphic" in2="specIn" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
      </filter>

      {/* Deboss Shadow Filter */}
      <filter id="deboss-filter">
        <feOffset dx="0" dy="1" />
        <feGaussianBlur stdDeviation="1" result="offset-blur" />
        <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
        <feFlood floodColor="#3a1c22" floodOpacity="0.55" result="color" />
        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
      </filter>
    </defs>
  </svg>
);

/**
 * KBACH KHMER CREST (ក្បាច់ហោជាង និងផ្កាចន្ទន៍ខ្មែរ)
 * Inspired by traditional Khmer temple pediment (ហោជាង) with towering spire,
 * curling Phni Tes flame tendrils, and auspicious blooming lotus.
 */
export const FanCrest = ({ className = "w-16 h-12 text-[#d4af37]" }) => (
  <svg
    viewBox="0 0 120 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Center Sacred Spire (កំពូលស្រួចប្រាសាទ) */}
    <path
      d="M60 2 C61.5 7, 63 12, 60 18 C57 12, 58.5 7, 60 2 Z"
      fill="url(#gold-sheen-grad)"
    />
    <circle cx="60" cy="3" r="2" fill="#fffdf0" />
    <circle cx="60" cy="19" r="2.5" fill="url(#rose-gold-grad)" />

    {/* Upper Phni Flame Wings (ក្បាច់ភ្ញីទេសក្រឡាស់សងខាង) */}
    <path
      d="M60 18 C52 14, 38 10, 26 18 C14 26, 22 36, 32 32 C42 28, 48 24, 60 28 C72 24, 78 28, 88 32 C98 36, 106 26, 94 18 C82 10, 68 14, 60 18 Z"
      fill="url(#gold-foil-grad)"
    />

    {/* Elegant Curled Scroll Tips (ចុងភ្ញីទេសកោងង) */}
    <path
      d="M26 18 C20 14, 12 18, 14 24 C16 30, 24 28, 22 22"
      stroke="url(#gold-sheen-grad)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M94 18 C100 14, 108 18, 106 24 C104 30, 96 28, 98 22"
      stroke="url(#gold-sheen-grad)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />

    {/* Center Sacred Lotus Rosette (ក្បាច់ផ្កាចន្ទន៍កណ្តាល) */}
    <g transform="translate(60, 42)">
      {/* Central Diamond Core */}
      <rect x="-6" y="-6" width="12" height="12" transform="rotate(45)" fill="url(#gold-sheen-grad)" />
      <circle cx="0" cy="0" r="2.5" fill="#fffdf5" />

      {/* Lotus Petals (៤ ទិស) */}
      <path d="M0 -7 C-4 -12, 4 -12, 0 -7 Z" fill="url(#rose-gold-grad)" />
      <path d="M0 7 C-4 12, 4 12, 0 7 Z" fill="url(#rose-gold-grad)" />
      <path d="M-7 0 C-12 -4, -12 4, -7 0 Z" fill="url(#rose-gold-grad)" />
      <path d="M7 0 C12 -4, 12 4, 7 0 Z" fill="url(#rose-gold-grad)" />
    </g>

    {/* Lower Supporting Lotus Tier (ជើងទ្រត្របកឈូក) */}
    <path
      d="M30 48 C42 42, 52 46, 60 54 C68 46, 78 42, 90 48 C80 56, 70 54, 60 62 C50 54, 40 56, 30 48 Z"
      fill="url(#gold-foil-grad)"
      opacity="0.9"
    />
    <circle cx="60" cy="64" r="2" fill="url(#gold-sheen-grad)" />

    {/* Fine Filigree Lines */}
    <path d="M60 28 V40" stroke="url(#gold-foil-grad)" strokeWidth="1.2" />
    <path d="M48 32 C44 38, 42 46, 38 52" stroke="url(#gold-sheen-grad)" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
    <path d="M72 32 C76 38, 78 46, 82 52" stroke="url(#gold-sheen-grad)" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
  </svg>
);

/**
 * KBACH PHNI TES CORNER FLOURISH (ក្បាច់កែងភ្ញីទេសខ្មែរ)
 * Authentic Khmer corner flourish with lotus buds, flowing scrolls and flame tendrils.
 * Mirrored cleanly via inner <g transform="..."> so GSAP will NEVER conflict with CSS transforms!
 */
export const CornerFlourish = ({
  className = "w-20 h-20",
  position = "top-left" // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}) => {
  let gTransform = "";
  if (position === "top-right") {
    gTransform = "translate(100, 0) scale(-1, 1)";
  } else if (position === "bottom-left") {
    gTransform = "translate(0, 100) scale(1, -1)";
  } else if (position === "bottom-right") {
    gTransform = "translate(100, 100) scale(-1, -1)";
  }

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g transform={gTransform}>
        {/* Outer Corner Frame Lines with Golden Beads */}
        <path
          d="M6 94 V24 C6 14, 14 6, 24 6 H94"
          stroke="url(#gold-foil-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 94 V28 C12 19, 19 12, 28 12 H94"
          stroke="url(#rose-gold-grad)"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          strokeLinecap="round"
          opacity="0.75"
        />

        {/* Center Corner Rosette Bead */}
        <circle cx="6" cy="6" r="3" fill="url(#gold-sheen-grad)" />
        <circle cx="6" cy="6" r="1.5" fill="#fffdf0" />

        {/* Kbach Phni Tes Main Scroll (ក្បាច់ភ្ញីទេសក្រឡាស់កោង) */}
        <path
          d="M6 6 C16 6, 28 12, 34 22 C38 28, 36 34, 30 36 C24 38, 18 32, 22 24 C26 18, 32 18, 40 18"
          stroke="url(#gold-sheen-grad)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />

        {/* Lotus Bud Tendril (ក្រពុំឈូក) */}
        <path
          d="M34 22 C38 18, 44 14, 52 14 C48 18, 44 24, 40 28"
          stroke="url(#rose-gold-grad)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="52" cy="14" r="2" fill="url(#gold-foil-grad)" />

        {/* Flame Petal Accents (ត្របកភ្ញីភ្លើង) */}
        <path
          d="M24 6 C22 10, 18 14, 14 16 C18 18, 22 22, 24 26 C26 22, 30 18, 34 16 C30 14, 26 10, 24 6 Z"
          fill="url(#gold-foil-grad)"
        />
        <path
          d="M6 24 C10 26, 14 30, 16 34 C18 30, 22 26, 26 24"
          stroke="url(#gold-foil-grad)"
          strokeWidth="1"
        />

        {/* Secondary Tendril toward right */}
        <path
          d="M38 12 C48 10, 60 12, 70 8"
          stroke="url(#gold-foil-grad)"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.8"
        />
        <circle cx="70" cy="8" r="1.5" fill="url(#gold-sheen-grad)" />

        {/* Secondary Tendril downward */}
        <path
          d="M12 38 C10 48, 12 60, 8 70"
          stroke="url(#gold-foil-grad)"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.8"
        />
        <circle cx="8" cy="70" r="1.5" fill="url(#gold-sheen-grad)" />
      </g>
    </svg>
  );
};

/**
 * KBACH CHAN ORNATE DIVIDER (របាំងក្បាច់ផ្កាចន្ទន៍ខ្មែរ)
 * Authentic eight-pointed Kbach Chan rosette in the center, flanked by flowing Khmer flame tendrils.
 */
export const OrnateDivider = ({ className = "w-full max-w-xs h-6 my-4" }) => (
  <svg
    viewBox="0 0 320 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Left Khmer Flame Tendril */}
    <path
      d="M10 14 H110 C120 14, 130 9, 138 5 C136 12, 130 18, 120 20 H110"
      stroke="url(#gold-foil-grad)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="20" cy="14" r="2" fill="url(#rose-gold-grad)" />
    <circle cx="65" cy="14" r="2" fill="url(#gold-foil-grad)" />

    {/* Right Khmer Flame Tendril */}
    <path
      d="M310 14 H210 C200 14, 190 9, 182 5 C184 12, 190 18, 200 20 H210"
      stroke="url(#gold-foil-grad)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="300" cy="14" r="2" fill="url(#rose-gold-grad)" />
    <circle cx="255" cy="14" r="2" fill="url(#gold-foil-grad)" />

    {/* Center Kbach Chan Emblem (ក្បាច់ផ្កាចន្ទន៍កណ្តាល) */}
    <g transform="translate(160, 14)">
      {/* Outer Lotus Cross Petals */}
      <path d="M0 -9 L3 -3 L9 0 L3 3 L0 9 L-3 3 L-9 0 L-3 -3 Z" fill="url(#gold-sheen-grad)" />
      {/* Inner Rosette */}
      <circle cx="0" cy="0" r="3.5" fill="#fffef5" stroke="url(#rose-gold-grad)" strokeWidth="1" />
      <circle cx="0" cy="0" r="1.5" fill="#c57f62" />
    </g>

    {/* Flanking Ornate Accent Beads */}
    <circle cx="142" cy="14" r="2.5" fill="url(#gold-foil-grad)" />
    <circle cx="178" cy="14" r="2.5" fill="url(#gold-foil-grad)" />
  </svg>
);

/**
 * DELICATE GOLD & ROSE BUTTERFLY SVG (មេអំបៅមាសលាយកូលាប)
 */
export const ButterflySvg = ({ className = "w-7 h-7" }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Left Upper Wing */}
    <path
      d="M20 18 C16 10, 7 6, 2 10 C-2 15, 3 24, 16 22 L20 18 Z"
      fill="url(#gold-foil-grad)"
      opacity="0.92"
    />
    {/* Left Lower Wing */}
    <path
      d="M20 22 C15 24, 8 28, 7 33 C6 37, 12 38, 18 28 L20 22 Z"
      fill="url(#rose-gold-grad)"
      opacity="0.85"
    />
    {/* Right Upper Wing */}
    <path
      d="M20 18 C24 10, 33 6, 38 10 C42 15, 37 24, 24 22 L20 18 Z"
      fill="url(#gold-foil-grad)"
      opacity="0.92"
    />
    {/* Right Lower Wing */}
    <path
      d="M20 22 C25 24, 32 28, 33 33 C34 37, 28 38, 22 28 L20 22 Z"
      fill="url(#rose-gold-grad)"
      opacity="0.85"
    />
    {/* Body & Antennae */}
    <path d="M20 14 V27" stroke="#7a4e1d" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M19 14 C17 11, 15 9, 13 9" stroke="url(#gold-sheen-grad)" strokeWidth="1" strokeLinecap="round" />
    <path d="M21 14 C23 11, 25 9, 27 9" stroke="url(#gold-sheen-grad)" strokeWidth="1" strokeLinecap="round" />
  </svg>
);
