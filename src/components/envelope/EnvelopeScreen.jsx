// src/components/envelope/EnvelopeScreen.jsx
import React, { useState, useRef } from 'react';
import WaxSeal from './WaxSeal';
import CoupleNameLogo from '../common/CoupleNameLogo';
import { CornerFlourish, FanCrest } from '../common/DecorativeSVG';
import { Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';
import { I18N } from '../../data/i18n';

/**
 * 3D LUXURY FULL-SCREEN ENVELOPE SCREEN (ផ្ទាំងស្រោមសំបុត្រប្រណិត 3D ពេញអេក្រង់)
 * Grand portrait proportion fitting mobile & desktop viewports beautifully,
 * textured soft blush pink paper, gold filigree trim, horizontal silk ribbon sash,
 * royal wax seal, and 5.5s cinematic hand-opening animation.
 */
export default function EnvelopeScreen({
  isOpen,
  onOpenComplete,
  onStartMusic,
  currentLang = 'km'
}) {
  const [animStage, setAnimStage] = useState(0); 
  // 0: idle
  // 1: seal pressed (0.0s)
  // 2: seal lifted (0.4s)
  // 3: seal off-screen (1.1s)
  // 4: flap opening 180deg (1.4s)
  // 5: card drawn out at slight angle (3.2s)
  // 6: envelope dropped out of frame (4.2s)
  // 7: card comes to camera (4.7s)
  // 8: fade through soft light pink (5.3s)
  // 9: completed (5.6s)

  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const t = I18N[currentLang];

  // Mouse & touch tilt effect during idle stage
  const handlePointerMove = (e) => {
    if (animStage > 0) return;
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
    setMouseTilt({
      x: Math.max(-8, Math.min(8, -y * 6)),
      y: Math.max(-10, Math.min(10, x * 8))
    });
  };

  const handlePointerLeave = () => {
    if (animStage === 0) {
      setMouseTilt({ x: 0, y: 0 });
    }
  };

  // 5.5s Slow "By Hand" Opening Choreography
  const handleOpenInvitation = () => {
    if (animStage > 0) return;

    // Start music immediately on the opening tap
    if (onStartMusic) {
      onStartMusic();
    }

    // Step 1: Seal pressed down
    setAnimStage(1);

    // Step 2: Seal lifted with growing shadow
    setTimeout(() => setAnimStage(2), 400);

    // Step 3: Seal swept aside off screen
    setTimeout(() => setAnimStage(3), 1100);

    // Step 4: Flap folds back 180° in 3D
    setTimeout(() => setAnimStage(4), 1400);

    // Step 5: Inner card slides out of pocket at a slight angle
    setTimeout(() => setAnimStage(5), 3200);

    // Step 6: Envelope drops down out of frame
    setTimeout(() => setAnimStage(6), 4200);

    // Step 7: Inner card comes forward to camera
    setTimeout(() => setAnimStage(7), 4700);

    // Step 8: Screen fades through soft light pink / white
    setTimeout(() => setAnimStage(8), 5300);

    // Step 9: Handover to Cover / Hero
    setTimeout(() => {
      setAnimStage(9);
      if (onOpenComplete) onOpenComplete();
    }, 5600);
  };

  if (animStage === 9) return null;

  // Flap 3D rotation logic
  const isFlapOpen = animStage >= 4;
  // Flap layer order: once flap passes 90deg, it must sit behind the card
  const flapBehindCard = animStage >= 4; 

  return (
    <div
      ref={containerRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between py-6 md:py-10 px-4 overflow-hidden transition-opacity duration-700 ${
        animStage >= 8 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background: Pre-Wedding Photo with Soft Dreamy Pink Anime Ambiance */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop')`,
          filter: 'blur(10px) brightness(0.85) saturate(1.15)'
        }}
      />
      {/* Romantic Soft Light Pink Watercolor & Sunbeam Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff5f8]/85 via-[#fdebed]/70 to-[#fce4ea]/92 pointer-events-none" />

      {/* Floating Sparkle Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-[12%] left-[10%] w-2 h-2 rounded-full bg-amber-300 animate-ping opacity-75" />
        <span className="absolute top-[22%] right-[15%] w-3 h-3 rounded-full bg-pink-300 animate-pulse opacity-65" />
        <span className="absolute bottom-[20%] left-[18%] w-2.5 h-2.5 rounded-full bg-amber-200 animate-ping opacity-60" />
      </div>

      {/* Top Header Text: Ceremonial Greeting */}
      <div
        className={`relative z-20 text-center px-4 transition-all duration-700 ${
          animStage >= 4 ? 'opacity-0 -translate-y-6' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="inline-flex items-center justify-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 text-[#c59728] animate-spin" />
          <p className="font-moul text-xl md:text-3xl gold-foil-text drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)]">
            {t.envelopeTitle}
          </p>
          <Sparkles className="w-4 h-4 text-[#c59728] animate-spin" />
        </div>
        <p className="font-cormorant italic text-sm md:text-base text-[#7a3246] tracking-widest uppercase font-semibold">
          {t.envelopeSub}
        </p>
      </div>

      {/* 3D Envelope Stage - GRAND PORTRAIT PROPORTIONS (ពេញអេក្រង់ទូរស័ព្ទ) */}
      <div
        className="relative w-[92vw] max-w-[410px] aspect-[1/1.34] my-auto perspective-stage preserve-3d"
        style={{
          transform: animStage === 0 
            ? `rotateX(${mouseTilt.x}deg) rotateY(${mouseTilt.y}deg)` 
            : 'rotateX(0deg) rotateY(0deg)',
          transition: animStage === 0 ? 'transform 0.15s ease-out' : 'transform 1s ease-in-out'
        }}
      >
        {/* Envelope Container (Moves down when card is extracted) */}
        <div
          className={`relative w-full h-full preserve-3d transition-all duration-1000 ${
            animStage >= 6 
              ? 'translate-y-[120vh] opacity-0' 
              : animStage >= 5 
                ? 'translate-y-12' 
                : 'translate-y-0'
          }`}
        >
          {/* Layer 1: Back Panel of Envelope (Soft Light Pink Paper with Gold Rim) */}
          <div
            className="absolute inset-0 rounded-3xl texture-envelope-pink border-2 border-[#d4af37]/60 shadow-[0_25px_60px_rgba(210,120,145,0.4)] preserve-3d overflow-hidden"
            style={{ zIndex: 1 }}
          >
            {/* Subtle Inner Gold Foil Border */}
            <div className="absolute inset-2.5 rounded-2xl border border-[#d4af37]/40 pointer-events-none" />
            <CornerFlourish position="top-left" className="absolute top-1 left-1 w-8 h-8 opacity-75" />
            <CornerFlourish position="top-right" className="absolute top-1 right-1 w-8 h-8 opacity-75" />
            <CornerFlourish position="bottom-left" className="absolute bottom-1 left-1 w-8 h-8 opacity-75" />
            <CornerFlourish position="bottom-right" className="absolute bottom-1 right-1 w-8 h-8 opacity-75" />
          </div>

          {/* Layer 2: Inner Card (Pure Ivory Cream Card with Arched Border & Calligraphy) */}
          <div
            className={`absolute inset-3.5 md:inset-4 rounded-2xl texture-card-cream border-2 border-[#d4af37]/70 p-5 flex flex-col items-center justify-between shadow-lg preserve-3d transition-all ${
              animStage >= 7
                ? 'fixed z-[100] inset-4 md:inset-16 scale-110 opacity-98 duration-1000'
                : animStage >= 5
                  ? '-translate-y-[82%] -rotate-2 scale-102 shadow-2xl z-30 duration-1000'
                  : 'translate-y-0 rotate-0 z-10 duration-700'
            }`}
          >
            {/* Khmer Kbach Phni Tes Corner Borders */}
            <CornerFlourish position="top-left" className="absolute top-2 left-2 w-10 h-10" />
            <CornerFlourish position="top-right" className="absolute top-2 right-2 w-10 h-10" />
            <CornerFlourish position="bottom-left" className="absolute bottom-2 left-2 w-10 h-10" />
            <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-10 h-10" />

            {/* Inner Card Top Khmer Temple Crest */}
            <div className="mt-2 text-center">
              <FanCrest className="w-12 h-8 mx-auto" />
              <p className="font-moul text-xs md:text-sm gold-foil-text mt-1">
                សិរីសួស្តីអាពាហ៍ពិពាហ៍
              </p>
            </div>

            {/* Couple Name Logo on Inner Card */}
            <CoupleNameLogo
              groomShort={WEDDING_DATA.groom.shortKhmer}
              brideShort={WEDDING_DATA.bride.shortKhmer}
              size="md"
              animated={false}
              className="my-auto"
            />

            {/* Inner Card Date Badge */}
            <div className="mb-2 text-center bg-[#fdebed] px-4 py-1.5 rounded-full border border-pink-200/80">
              <p className="font-kantumruy font-bold text-xs text-[#5c2838]">
                {WEDDING_DATA.event.dayNameKm} ទី{WEDDING_DATA.event.dayKm} {WEDDING_DATA.event.monthKm} {WEDDING_DATA.event.yearKm}
              </p>
              <p className="font-cormorant italic text-xs text-[#a8761a] font-medium">
                {WEDDING_DATA.venue.nameEnglish}
              </p>
            </div>
          </div>

          {/* Layer 3: Front Pocket (Folded Left, Right, and Bottom Pink Paper Panels) */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden preserve-3d"
            style={{ zIndex: flapBehindCard ? 20 : 15 }}
          >
            {/* Left Folded Flap */}
            <div
              className="absolute inset-0 texture-envelope-pink shadow-[inset_15px_0_30px_rgba(190,110,135,0.35)] border-l border-[#d4af37]/45"
              style={{
                clipPath: 'polygon(0% 0%, 50% 50%, 0% 100%)'
              }}
            />

            {/* Right Folded Flap */}
            <div
              className="absolute inset-0 texture-envelope-pink shadow-[inset_-15px_0_30px_rgba(190,110,135,0.35)] border-r border-[#d4af37]/45"
              style={{
                clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)'
              }}
            />

            {/* Bottom Folded Flap */}
            <div
              className="absolute inset-0 texture-envelope-pink shadow-[0_-10px_25px_rgba(190,110,135,0.45)] border-b border-[#d4af37]/55"
              style={{
                clipPath: 'polygon(0% 100%, 50% 45%, 100% 100%)'
              }}
            />

            {/* Pocket Seam Gold & Rose Gold Inlay Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 536"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="0" x2="200" y2="268" stroke="url(#gold-sheen-grad)" strokeWidth="1" opacity="0.75" />
              <line x1="400" y1="0" x2="200" y2="268" stroke="url(#gold-sheen-grad)" strokeWidth="1" opacity="0.75" />
              <line x1="0" y1="536" x2="200" y2="241" stroke="url(#gold-sheen-grad)" strokeWidth="1" opacity="0.75" />
              <line x1="400" y1="536" x2="200" y2="241" stroke="url(#gold-sheen-grad)" strokeWidth="1" opacity="0.75" />
            </svg>
          </div>

          {/* LUXURY SILK RIBBON SASH (ខ្សែបូសូត្រមាស & កូលាប រុំកាត់កណ្តាលស្រោមសំបុត្រ) */}
          <div
            className="absolute top-[48%] left-0 right-0 h-10 -translate-y-1/2 pointer-events-none preserve-3d"
            style={{ zIndex: flapBehindCard ? 21 : 16 }}
          >
            <div className="w-full h-full bg-gradient-to-r from-[#d4af37]/80 via-[#f8c8d3] to-[#d4af37]/80 border-y border-[#d4af37] shadow-[0_4px_14px_rgba(190,100,125,0.35)] flex items-center justify-between px-3">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            </div>
          </div>

          {/* Layer 4: Scalloped Lotus Flap with 3D Fold (Folds back 180° in 3D) */}
          <div
            className={`absolute top-0 left-0 right-0 h-[52%] origin-top preserve-3d transition-transform duration-[2200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isFlapOpen ? 'rotate-x-180' : 'rotate-x-0'
            }`}
            style={{
              transformOrigin: 'top center',
              transform: isFlapOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
              zIndex: flapBehindCard ? 5 : 25
            }}
          >
            {/* Front of Flap in Soft Pink Paper (Visible when closed) */}
            <div
              className="absolute inset-0 texture-envelope-pink clip-scalloped-flap shadow-[0_18px_35px_rgba(180,90,115,0.45)] border-t-2 border-[#d4af37]/70 flex flex-col items-center pt-5 px-6"
              style={{
                backfaceVisibility: 'hidden'
              }}
            >
              {/* Couple Name Logo on Flap */}
              <div className="transform scale-95 mb-1">
                <CoupleNameLogo
                  groomShort={WEDDING_DATA.groom.shortKhmer}
                  brideShort={WEDDING_DATA.bride.shortKhmer}
                  size="sm"
                  animated={false}
                />
              </div>

              {/* Gold & Rose Scalloped Lotus Decorative Trim Line */}
              <svg
                viewBox="0 0 300 24"
                className="w-full max-w-[240px] h-5 mt-auto mb-2 opacity-95"
                fill="none"
              >
                <path
                  d="M10 12 Q 25 20, 40 12 T 70 12 T 100 12 T 130 12 T 160 12 T 190 12 T 220 12 T 250 12 T 280 12"
                  stroke="url(#gold-sheen-grad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="150" cy="17" r="2.5" fill="url(#rose-gold-grad)" />
              </svg>
            </div>

            {/* Back Lining of Flap (Ivory & Rose Damask visible when flap folds 180deg back) */}
            <div
              className="absolute inset-0 texture-flap-lining-pink clip-scalloped-flap border-b-2 border-[#d4af37]/60 shadow-inner"
              style={{
                transform: 'rotateY(180deg) rotateZ(180deg)',
                backfaceVisibility: 'hidden'
              }}
            >
              <div className="w-full h-full flex items-center justify-center opacity-45">
                <FanCrest className="w-18 h-12 text-[#d4af37]" />
              </div>
            </div>
          </div>

          {/* Flap Cast Shadow on Pocket (Fades away as flap lifts open) */}
          <div
            className={`absolute top-[48%] left-1/2 -translate-x-1/2 w-56 h-10 rounded-full bg-[#5c2838]/30 blur-md pointer-events-none transition-opacity duration-1000 ${
              isFlapOpen ? 'opacity-0' : 'opacity-80'
            }`}
            style={{ zIndex: 18 }}
          />

          {/* Layer 5: Royal Gold Wax Seal with Khmer Emblem (Positioned directly over apex) */}
          <div
            className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ zIndex: 35 }}
          >
            <WaxSeal
              onClick={handleOpenInvitation}
              isOpening={animStage > 0}
              step={animStage}
            />
          </div>
        </div>
      </div>

      {/* Bottom Glowing Action Prompt Button */}
      <div
        className={`relative z-20 text-center px-4 transition-all duration-700 ${
          animStage > 0 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        <button
          onClick={handleOpenInvitation}
          className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white/95 border-2 border-[#d4af37] shadow-[0_8px_25px_rgba(215,130,155,0.35)] hover:border-[#b8860b] hover:scale-105 active:scale-95 transition-all group backdrop-blur-md"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-ping" />
          <span className="font-kantumruy text-xs md:text-sm text-[#5c2838] font-bold tracking-wide">
            {t.tapToOpen}
          </span>
          <span className="text-sm">✨</span>
        </button>
      </div>
    </div>
  );
}
