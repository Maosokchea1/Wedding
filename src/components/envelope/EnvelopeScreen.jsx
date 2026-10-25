// src/components/envelope/EnvelopeScreen.jsx
import React, { useState, useRef } from 'react';
import WaxSeal from './WaxSeal';
import CoupleNameLogo from '../common/CoupleNameLogo';
import { CornerFlourish, FanCrest } from '../common/DecorativeSVG';
import { Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';
import { I18N } from '../../data/i18n';

export default function EnvelopeScreen({
  isOpen,
  onOpenComplete,
  onStartMusic,
  currentLang = 'km'
}) {
  const [animStage, setAnimStage] = useState(0);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const t = I18N[currentLang];

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
    if (animStage === 0) setMouseTilt({ x: 0, y: 0 });
  };

  const handleOpenInvitation = () => {
    if (animStage > 0) return;
    if (onStartMusic) onStartMusic();

    setAnimStage(1); // 0.0s
    setTimeout(() => setAnimStage(2), 1000); // 1.0s
    setTimeout(() => setAnimStage(3), 2500); // 2.5s
    setTimeout(() => setAnimStage(4), 4000); // 4.0s
    setTimeout(() => setAnimStage(5), 7000); // 7.0s
    setTimeout(() => setAnimStage(6), 9000); // 9.0s
    setTimeout(() => setAnimStage(7), 11000); // 11.0s
    setTimeout(() => setAnimStage(8), 13500); // 13.5s
    setTimeout(() => {
      setAnimStage(9); // 14.3s
      if (onOpenComplete) onOpenComplete();
    }, 14300);
  };

  if (animStage === 9) return null;

  const isFlapOpen = animStage >= 4;
  const flapBehindCard = animStage >= 4;

  const sashPetals = Array.from({ length: 8 }, (_, i) => i * 45);
  const kbachDiamonds = Array.from({ length: 20 }, (_, i) => i * 20 + 10);
  const lotusPetalsBorder = Array.from({ length: 18 }, (_, i) => i);

  return (
    <div
      ref={containerRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between py-6 md:py-10 px-4 overflow-hidden transition-opacity duration-1000 ${
        animStage >= 8 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* ═══ GLOBAL SVG DEFS ═══ */}
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="gold-sheen-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#fff8dc" />
            <stop offset="50%"  stopColor="#d4af37" />
            <stop offset="100%" stopColor="#8b6914" />
          </linearGradient>
          <linearGradient id="rose-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#f5c9a8" />
            <stop offset="50%"  stopColor="#d4af37" />
            <stop offset="100%" stopColor="#b76e79" />
          </linearGradient>
          <linearGradient id="gold-foil-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#fce4b0" />
            <stop offset="45%"  stopColor="#d4af37" />
            <stop offset="100%" stopColor="#6b4a0e" />
          </linearGradient>
          <pattern id="kbach-diamond-pattern" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
            <path d="M9 0 L18 9 L9 18 L0 9 Z" fill="none" stroke="#d4af37" strokeWidth="0.6" opacity="0.55" />
            <circle cx="9" cy="9" r="1.1" fill="#d4af37" opacity="0.65" />
          </pattern>
          <pattern id="kbach-lotus-pattern" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
            <ellipse cx="13" cy="6" rx="3" ry="5" fill="none" stroke="#d4af37" strokeWidth="0.4" opacity="0.35" />
            <ellipse cx="13" cy="20" rx="3" ry="5" fill="none" stroke="#d4af37" strokeWidth="0.4" opacity="0.35" />
            <circle cx="13" cy="13" r="2" fill="#d4af37" opacity="0.25" />
          </pattern>
        </defs>
      </svg>

      {/* Background & Sparkles */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop')`,
          filter: 'blur(10px) brightness(0.85) saturate(1.15)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff5f8]/85 via-[#fdebed]/70 to-[#fce4ea]/92 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-[12%] left-[10%] w-2 h-2 rounded-full bg-amber-300 animate-ping opacity-75" />
        <span className="absolute top-[22%] right-[15%] w-3 h-3 rounded-full bg-pink-300 animate-pulse opacity-65" />
        <span className="absolute bottom-[20%] left-[18%] w-2.5 h-2.5 rounded-full bg-amber-200 animate-ping opacity-60" />
      </div>

      {/* Header */}
      <div
        className={`relative z-20 text-center px-4 transition-all duration-1000 ${
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

      {/* 3D Envelope Stage (បន្ថយទំហំពី 92vw មក 85vw ដើម្បីទុកកន្លែងពង្រីក) */}
      <div
        className="relative w-[85vw] max-w-[400px] aspect-[1/1.34] my-auto perspective-stage preserve-3d"
        style={{
          transform: animStage === 0
            ? `rotateX(${mouseTilt.x}deg) rotateY(${mouseTilt.y}deg)`
            : 'rotateX(0deg) rotateY(0deg)',
          transition: animStage === 0 ? 'transform 0.15s ease-out' : 'transform 1.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className={`relative w-full h-full preserve-3d transition-all duration-[1400ms] ${
          animStage >= 6 ? 'translate-y-12' : animStage >= 5 ? 'translate-y-6' : 'translate-y-0'
        }`}>
          
          {/* Layer 1: Back Panel */}
          <div
            className={`absolute inset-0 rounded-3xl texture-envelope-pink border-2 border-[#d4af37]/60 shadow-[0_25px_60px_rgba(210,120,145,0.4)] preserve-3d overflow-hidden transition-all duration-[1500ms] ${
              animStage >= 6 ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
            }`}
            style={{ zIndex: 1 }}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" preserveAspectRatio="none">
              <rect x="8" y="8" width="calc(100% - 16)" height="calc(100% - 16)" fill="none" stroke="url(#kbach-diamond-pattern)" strokeWidth="14" rx="20" />
            </svg>
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" preserveAspectRatio="none">
              <rect width="100%" height="100%" fill="url(#kbach-lotus-pattern)" />
            </svg>
            <CornerFlourish position="top-left"  className="absolute top-1 left-1 w-9 h-9 opacity-85" />
            <CornerFlourish position="top-right" className="absolute top-1 right-1 w-9 h-9 opacity-85" />
            <CornerFlourish position="bottom-left"  className="absolute bottom-1 left-1 w-9 h-9 opacity-85" />
            <CornerFlourish position="bottom-right" className="absolute bottom-1 right-1 w-9 h-9 opacity-85" />
          </div>

          {/* Layer 3: Front Pocket Panels */}
          <div
            className={`absolute inset-0 rounded-3xl pointer-events-none overflow-hidden preserve-3d transition-all duration-[1500ms] ${
              animStage >= 6 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
            style={{ zIndex: flapBehindCard ? 20 : 15 }}
          >
            <div className="absolute inset-0 texture-envelope-pink shadow-[inset_15px_0_30px_rgba(190,110,135,0.35)] border-l border-[#d4af37]/45" style={{ clipPath: 'polygon(0% 0%, 50% 50%, 0% 100%)' }} />
            <div className="absolute inset-0 texture-envelope-pink shadow-[inset_-15px_0_30px_rgba(190,110,135,0.35)] border-r border-[#d4af37]/45" style={{ clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)' }} />
            <div className="absolute inset-0 texture-envelope-pink shadow-[0_-10px_25px_rgba(190,110,135,0.45)] border-b border-[#d4af37]/55" style={{ clipPath: 'polygon(0% 100%, 50% 45%, 100% 100%)' }} />
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 536" fill="none">
              <line x1="0" y1="0" x2="200" y2="268" stroke="url(#gold-sheen-grad)" strokeWidth="1" opacity="0.75" />
              <line x1="400" y1="0" x2="200" y2="268" stroke="url(#gold-sheen-grad)" strokeWidth="1" opacity="0.75" />
              <line x1="0" y1="536" x2="200" y2="241" stroke="url(#gold-sheen-grad)" strokeWidth="1" opacity="0.75" />
              <line x1="400" y1="536" x2="200" y2="241" stroke="url(#gold-sheen-grad)" strokeWidth="1" opacity="0.75" />
            </svg>
          </div>

          {/* Silk Sash */}
          <div
            className={`absolute top-[48%] left-0 right-0 h-12 -translate-y-1/2 pointer-events-none preserve-3d transition-all duration-[1500ms] ${
              animStage >= 6 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
            style={{ zIndex: flapBehindCard ? 21 : 16 }}
          >
            <svg viewBox="0 0 400 48" preserveAspectRatio="none" className="w-full h-full">
              <rect x="0" y="6" width="400" height="36" fill="url(#rose-gold-grad)" opacity="0.95" />
              <rect x="0" y="8" width="400" height="32" fill="url(#gold-sheen-grad)" opacity="0.55" />
              <line x1="0" y1="7"  x2="400" y2="7"  stroke="#b8860b" strokeWidth="1" />
              <line x1="0" y1="41" x2="400" y2="41" stroke="#b8860b" strokeWidth="1" />
              <g opacity="0.85">
                {kbachDiamonds.map((x, i) => (
                  <g key={`kbach-${i}`} transform={`translate(${x} 24)`}>
                    <path d="M-5 0 L0 -5 L5 0 L0 5 Z" fill="none" stroke="#7a5420" strokeWidth="0.7" opacity="0.7" />
                    <circle r="0.9" fill="#7a5420" opacity="0.8" />
                  </g>
                ))}
              </g>
              <g transform="translate(200 24)">
                <circle r="15" fill="#fff8dc" opacity="0.9" />
                <circle r="14.5" fill="none" stroke="#b8860b" strokeWidth="0.8" />
                <circle r="12"  fill="none" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="1 1.5" />
                {sashPetals.map((a, i) => (
                  <ellipse key={i} cx="0" cy="-8" rx="2.4" ry="4" fill="url(#gold-foil-grad)" stroke="#7a5420" strokeWidth="0.3" transform={`rotate(${a})`} />
                ))}
                <circle r="4.5" fill="url(#gold-sheen-grad)" stroke="#7a5420" strokeWidth="0.5" />
                <circle r="2" fill="#fff8dc" />
              </g>
            </svg>
          </div>

          {/* Layer 4: Flap */}
          <div
            className={`absolute top-0 left-0 right-0 h-[52%] origin-top preserve-3d transition-all duration-[2800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              animStage >= 6 ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
            }`}
            style={{
              transformOrigin: 'top center',
              transform: isFlapOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
              zIndex: flapBehindCard ? 5 : 25
            }}
          >
            <div className="absolute inset-0 texture-envelope-pink clip-scalloped-flap shadow-[0_18px_35px_rgba(180,90,115,0.45)] border-t-2 border-[#d4af37]/70 flex flex-col items-center pt-5 px-6" style={{ backfaceVisibility: 'hidden' }}>
              <div className="transform scale-95 mb-1">
                <CoupleNameLogo groomShort={WEDDING_DATA.groom.shortKhmer} brideShort={WEDDING_DATA.bride.shortKhmer} size="sm" animated={false} />
              </div>
              <svg viewBox="0 0 300 32" className="w-full max-w-[260px] h-7 mt-auto mb-2 opacity-95" fill="none">
                <path d="M10 18 Q 25 24, 40 18 T 70 18 T 100 18 T 130 18 T 160 18 T 190 18 T 220 18 T 250 18 T 280 18" stroke="url(#gold-sheen-grad)" strokeWidth="1.4" strokeLinecap="round" />
                {Array.from({ length: 9 }).map((_, i) => (
                  <g key={`flame-${i}`} transform={`translate(${25 + i * 30} 12)`} opacity="0.8">
                    <path d="M0 3 Q-2.5 0 0 -4 Q2.5 0 0 3 Z" fill="url(#gold-foil-grad)" stroke="#7a5420" strokeWidth="0.3" />
                  </g>
                ))}
                {Array.from({ length: 9 }).map((_, i) => (
                  <ellipse key={`lotus-${i}`} cx={25 + i * 30} cy="24" rx="2.4" ry="2" fill="url(#rose-gold-grad)" stroke="#7a5420" strokeWidth="0.3" opacity="0.85" />
                ))}
                <g transform="translate(150 24)">
                  <circle r="3.5" fill="url(#gold-sheen-grad)" stroke="#7a5420" strokeWidth="0.5" />
                  <circle r="1.2" fill="#fff8dc" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-0 texture-flap-lining-pink clip-scalloped-flap border-b-2 border-[#d4af37]/60 shadow-inner" style={{ transform: 'rotateY(180deg) rotateZ(180deg)', backfaceVisibility: 'hidden' }}>
              <div className="w-full h-full flex items-center justify-center opacity-45">
                <FanCrest className="w-18 h-12 text-[#d4af37]" />
              </div>
            </div>
          </div>

          {/* ═══ Layer 2: Inner Card (កែសម្រួលយ៉ាងសំខាន់នៅទីនេះ) ═══ */}
          <div
            className={`absolute inset-3.5 md:inset-4 rounded-2xl texture-card-cream border-2 border-[#d4af37]/70 p-5 md:p-6 flex flex-col items-center justify-between shadow-lg preserve-3d transition-all duration-[1600ms] ease-in-out ${
              animStage >= 8
                ? 'z-[100] scale-[1.15] md:scale-[1.4] -translate-y-[3%] opacity-0 pointer-events-none'
                : animStage >= 7
                  ? 'z-[100] scale-[1.15] md:scale-[1.4] -translate-y-[3%] shadow-[0_20px_80px_rgba(0,0,0,0.4)] opacity-100 rounded-xl border-[#d4af37]'
                  : animStage >= 5
                    ? '-translate-y-[85%] scale-105 shadow-2xl z-30'
                    : 'translate-y-0 rotate-0 z-10 duration-700'
            }`}
          >
            {/* Kbach frame */}
            <svg className="absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 140">
              <rect x="1" y="1" width="98" height="138" fill="none" stroke="#d4af37" strokeWidth="0.4" rx="4" opacity="0.7" />
              <rect x="2.5" y="2.5" width="95" height="135" fill="none" stroke="#b76e79" strokeWidth="0.3" rx="3" opacity="0.55" strokeDasharray="1.5 1" />
              {lotusPetalsBorder.slice(0, 9).map((_, i) => (
                <g key={`top-lotus-${i}`}>
                  <ellipse cx={12 + i * 9.5} cy="4.2" rx="1.6" ry="1.4" fill="none" stroke="#d4af37" strokeWidth="0.25" opacity="0.75" />
                </g>
              ))}
              {lotusPetalsBorder.slice(0, 9).map((_, i) => (
                <g key={`bot-lotus-${i}`}>
                  <ellipse cx={12 + i * 9.5} cy="135.8" rx="1.6" ry="1.4" fill="none" stroke="#d4af37" strokeWidth="0.25" opacity="0.75" />
                </g>
              ))}
              <g transform="translate(50 8)" opacity="0.85">
                {sashPetals.map((a, i) => (
                  <ellipse key={i} cx="0" cy="-3.5" rx="1.3" ry="2" fill="#d4af37" transform={`rotate(${a})`} opacity="0.7" />
                ))}
                <circle r="1.5" fill="#b76e79" />
              </g>
            </svg>

            <CornerFlourish position="top-left"  className="absolute top-2 left-2 w-10 h-10" />
            <CornerFlourish position="top-right" className="absolute top-2 right-2 w-10 h-10" />
            <CornerFlourish position="bottom-left"  className="absolute bottom-2 left-2 w-10 h-10" />
            <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-10 h-10" />

            <div className="mt-2 text-center relative z-10">
              <FanCrest className="w-12 h-8 mx-auto" />
              <p className="font-moul text-xs md:text-sm gold-foil-text mt-1">
                សិរីសួស្តីអាពាហ៍ពិពាហ៍
              </p>
            </div>

            {/* ឈ្មោះកូនកំលោះកូនក្រមុំ - បង្កើនទំហំ min-h និងរៀបចំឱ្យស្អាត */}
            <div className="relative w-full flex-1 flex flex-col items-center justify-center min-h-[160px] my-2 z-10 overflow-visible">
              <CoupleNameLogo
                groomShort={WEDDING_DATA.groom.shortKhmer}
                brideShort={WEDDING_DATA.bride.shortKhmer}
                size="md"
                animated={false}
                className="w-full max-w-[280px] mx-auto"
              />
            </div>

            {/* ប្រអប់កាលបរិច្ឆេទ - បន្ថែម mb-2 ដើម្បីកុំឱ្យជាប់គែមពេក */}
            <div className="mb-2 text-center bg-[#fdebed] px-5 py-1.5 rounded-full border border-pink-200/80 relative z-10">
              <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <p className="font-kantumruy font-bold text-xs text-[#5c2838]">
                {WEDDING_DATA.event.dayNameKm} ទី{WEDDING_DATA.event.dayKm} {WEDDING_DATA.event.monthKm} {WEDDING_DATA.event.yearKm}
              </p>
              <p className="font-cormorant italic text-xs text-[#a8761a] font-medium">
                {WEDDING_DATA.venue.nameEnglish}
              </p>
            </div>
          </div>

          {/* Layer 5: Wax Seal */}
          <div
            className={`absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
              animStage >= 6 ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ zIndex: 35 }}
          >
            <WaxSeal onClick={handleOpenInvitation} isOpening={animStage > 0} step={animStage} />
          </div>
        </div>
      </div>

      {/* Bottom Tap Button */}
      <div
        className={`relative z-20 text-center px-4 transition-all duration-1000 ${
          animStage > 0 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        <button
          onClick={handleOpenInvitation}
          className="relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/95 border-2 border-[#d4af37] shadow-[0_8px_25px_rgba(215,130,155,0.35)] hover:border-[#b8860b] hover:scale-105 active:scale-95 transition-all group backdrop-blur-md"
        >
          <svg className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="none" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="1.5 2" opacity="0.8" />
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <circle key={a} cx={12 + 7 * Math.cos((a * Math.PI) / 180)} cy={12 + 7 * Math.sin((a * Math.PI) / 180)} r="1" fill="#d4af37" />
            ))}
          </svg>

          <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-ping ml-3" />
          <span className="font-kantumruy text-xs md:text-sm text-[#5c2838] font-bold tracking-wide">
            {t.tapToOpen}
          </span>
          <span className="text-sm">✨</span>

          <svg className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="none" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="1.5 2" opacity="0.8" />
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <circle key={a} cx={12 + 7 * Math.cos((a * Math.PI) / 180)} cy={12 + 7 * Math.sin((a * Math.PI) / 180)} r="1" fill="#d4af37" />
            ))}
          </svg>
        </button>
      </div>
    </div>
  );
}