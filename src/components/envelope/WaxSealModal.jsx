// src/components/envelope/WaxSealModal.jsx
import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { CornerFlourish, FanCrest } from '../common/DecorativeSVG';

const GOLD = '#e6c36a';

/**
 * ROYAL KHMER WAX SEAL MODAL (ផ្ទាំងលិខិតអញ្ជើញអាពាហ៍ពិពាហ៍ បែបក្បាច់ខ្មែរ)
 *
 * ✨ KHMER ENHANCEMENTS (ក្បាច់ខ្មែរ):
 *   • ក្បាច់ជ្រុង (Corner Kbach) — 4 corners
 *   • ក្បាច់ផ្កាឈូក (Lotus petal row) — top & bottom edges
 *   • ក្បាច់ខ្សែក្រវាត់ (Diamond kbach) — left & right edges
 *   • ក្បាច់ផ្កាកណ្តាល (Lotus rosette divider) — replaces simple divider
 *   • ក្បាច់ប្រាសាទ (FanCrest temple emblem) — above title
 *   • ក្បាច់ផ្កាឈូកចំហៀង (Lotus flourishes) — beside "សូមគោរពអញ្ជើញ"
 *   • ក្បាច់រង្វង់គុជ (Beaded rings) — on the open button
 */
export default function WaxSealModal({ isOpen, onOpen }) {
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  if (!isOpen) return null;

  // Khmer kbach petal arrays
  const lotusPetals5  = [0, 72, 144, 216, 288];
  const lotusPetals12 = Array.from({ length: 12 }, (_, i) => i * 30);
  const topLotusRow   = Array.from({ length: 20 }, (_, i) => i);
  const sideDiamonds  = Array.from({ length: 20 }, (_, i) => i);
  const beadedAngles  = [0, 60, 120, 180, 240, 300];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="លិខិតអញ្ជើញអាពាហ៍ពិពាហ៍"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
    >
      {/* ═══ Global SVG defs — Khmer gradients (used across all decorative SVGs) ═══ */}
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="modal-gold-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#fff8dc" />
            <stop offset="50%"  stopColor="#e6c36a" />
            <stop offset="100%" stopColor="#8b6914" />
          </linearGradient>
          <linearGradient id="modal-rose-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#f5c9a8" />
            <stop offset="50%"  stopColor="#e6c36a" />
            <stop offset="100%" stopColor="#b76e79" />
          </linearGradient>
        </defs>
      </svg>

      <div
        className="relative w-full max-w-4xl min-h-[520px] md:min-h-0 md:aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/10 animate-in fade-in zoom-in duration-700 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />

        {/* Khmer lotus kbach texture overlay (ក្បាច់ផ្កាឈូក) */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23e6c36a'%3E%3Cellipse cx='30' cy='10' rx='4' ry='7'/%3E%3Cellipse cx='30' cy='50' rx='4' ry='7'/%3E%3Cellipse cx='10' cy='30' rx='7' ry='4'/%3E%3Cellipse cx='50' cy='30' rx='7' ry='4'/%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* ═══ KHMER ORNAMENTAL FRAME ═══ */}
        <div className="absolute inset-3 md:inset-5 rounded-xl border border-[#e6c36a]/60 pointer-events-none" />
        <div className="absolute inset-5 md:inset-8 rounded-lg border border-[#e6c36a]/25 pointer-events-none" />

        {/* ក្បាច់ជ្រុង — Khmer corner flourishes (4 corners) */}
        <CornerFlourish position="top-left"     className="absolute top-2 left-2 md:top-3 md:left-3 w-10 h-10 md:w-12 md:h-12 opacity-90 pointer-events-none" />
        <CornerFlourish position="top-right"    className="absolute top-2 right-2 md:top-3 md:right-3 w-10 h-10 md:w-12 md:h-12 opacity-90 pointer-events-none" />
        <CornerFlourish position="bottom-left"  className="absolute bottom-2 left-2 md:bottom-3 md:left-3 w-10 h-10 md:w-12 md:h-12 opacity-90 pointer-events-none" />
        <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-10 h-10 md:w-12 md:h-12 opacity-90 pointer-events-none" />

        {/* ក្បាច់ផ្កាឈូក — top edge lotus petal row */}
        <svg
          className="absolute top-1.5 md:top-2 left-[12%] right-[12%] h-3 pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 400 16"
          aria-hidden="true"
        >
          {topLotusRow.map((i) => (
            <g key={i} transform={`translate(${10 + i * 20} 8)`} opacity="0.75">
              <ellipse cx="0" cy="0" rx="3" ry="6"
                fill="url(#modal-gold-sheen)" stroke="#8b6914" strokeWidth="0.3" />
            </g>
          ))}
        </svg>

        {/* ក្បាច់ផ្កាឈូក — bottom edge lotus petal row */}
        <svg
          className="absolute bottom-1.5 md:bottom-2 left-[12%] right-[12%] h-3 pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 400 16"
          aria-hidden="true"
        >
          {topLotusRow.map((i) => (
            <g key={i} transform={`translate(${10 + i * 20} 8)`} opacity="0.75">
              <ellipse cx="0" cy="0" rx="3" ry="6"
                fill="url(#modal-gold-sheen)" stroke="#8b6914" strokeWidth="0.3" />
            </g>
          ))}
        </svg>

        {/* ក្បាច់ខ្សែក្រវាត់ — left edge diamond kbach strip */}
        <svg
          className="absolute left-1.5 md:left-2 top-[20%] bottom-[20%] w-3 pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 16 400"
          aria-hidden="true"
        >
          {sideDiamonds.map((i) => (
            <g key={i} transform={`translate(8 ${10 + i * 20})`} opacity="0.65">
              <path d="M0 -4 L4 0 L0 4 L-4 0 Z" fill="none" stroke="#e6c36a" strokeWidth="0.6" />
              <circle r="0.9" fill="#e6c36a" />
            </g>
          ))}
        </svg>

        {/* ក្បាច់ខ្សែក្រវាត់ — right edge diamond kbach strip */}
        <svg
          className="absolute right-1.5 md:right-2 top-[20%] bottom-[20%] w-3 pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 16 400"
          aria-hidden="true"
        >
          {sideDiamonds.map((i) => (
            <g key={i} transform={`translate(8 ${10 + i * 20})`} opacity="0.65">
              <path d="M0 -4 L4 0 L0 4 L-4 0 Z" fill="none" stroke="#e6c36a" strokeWidth="0.6" />
              <circle r="0.9" fill="#e6c36a" />
            </g>
          ))}
        </svg>

        {/* ═══ CONTENT ═══ */}
        <div className="relative z-10 flex h-full min-h-[520px] md:min-h-0 flex-col items-center justify-between px-6 py-14 md:py-16 text-center">

          {/* Header with Khmer temple crest */}
          <header className="space-y-2">

            {/* ក្បាច់ប្រាសាទ — FanCrest temple emblem above title */}
            <div className="flex justify-center mb-1">
              <FanCrest className="w-16 h-10 md:w-20 md:h-12 text-[#e6c36a] drop-shadow-[0_2px_6px_rgba(230,195,106,0.5)]" />
            </div>

            <h1
              className="font-moul text-3xl md:text-5xl lg:text-6xl leading-[1.7]"
              style={{ color: GOLD, textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
            >
              សិរីមង្គល
            </h1>
            <h2
              className="font-moul text-xl md:text-3xl lg:text-4xl leading-[1.7]"
              style={{ color: GOLD, textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
            >
              អាពាហ៍ពិពាហ៍
            </h2>

            {/* ក្បាច់ផ្កាកណ្តាល — Khmer lotus rosette divider */}
            <div className="flex items-center justify-center gap-3 pt-2" aria-hidden="true">
              <span className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#e6c36a]" />
              <svg width="52" height="52" viewBox="0 0 52 52" className="shrink-0">
                <g transform="translate(26 26)">
                  {/* Beaded ring border */}
                  <circle r="20" fill="none" stroke="#e6c36a" strokeWidth="0.6" strokeDasharray="2 2.5" opacity="0.7" />
                  <circle r="17" fill="none" stroke="#e6c36a" strokeWidth="0.4" opacity="0.45" />
                  {/* 12 lotus petals */}
                  {lotusPetals12.map((a, i) => (
                    <ellipse key={i} cx="0" cy="-11" rx="2.4" ry="4.5"
                      fill="url(#modal-gold-sheen)" stroke="#8b6914" strokeWidth="0.3"
                      transform={`rotate(${a})`} opacity="0.9" />
                  ))}
                  {/* Center rosette */}
                  <circle r="5.5" fill="url(#modal-rose-gold)" stroke="#8b6914" strokeWidth="0.4" />
                  <circle r="2.8" fill="#fff8dc" />
                </g>
              </svg>
              <span className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#e6c36a]" />
            </div>
          </header>

          {/* សូមគោរពអញ្ជើញ — with side lotus flourishes */}
          <div className="relative inline-flex items-center gap-3 md:gap-4">
            {/* Left lotus flourish (ក្បាច់ផ្កាឈូកចំហៀង) */}
            <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true" className="shrink-0">
              <g transform="translate(17 17)">
                {lotusPetals5.map((a) => (
                  <ellipse key={a} cx="0" cy="-6.5" rx="2" ry="3.8"
                    fill="url(#modal-gold-sheen)" stroke="#8b6914" strokeWidth="0.3"
                    transform={`rotate(${a})`} opacity="0.9" />
                ))}
                <circle r="2.3" fill="#e6c36a" stroke="#8b6914" strokeWidth="0.3" />
              </g>
            </svg>

            <p
              className="font-khmer font-bold text-base md:text-xl leading-[1.8] tracking-wider rounded-sm border border-[#e6c36a]/70 bg-black/30 backdrop-blur-sm px-8 md:px-14 py-2 md:py-3"
              style={{ color: GOLD }}
            >
              សូមគោរពអញ្ជើញ
            </p>

            {/* Right lotus flourish */}
            <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true" className="shrink-0">
              <g transform="translate(17 17)">
                {lotusPetals5.map((a) => (
                  <ellipse key={a} cx="0" cy="-6.5" rx="2" ry="3.8"
                    fill="url(#modal-gold-sheen)" stroke="#8b6914" strokeWidth="0.3"
                    transform={`rotate(${a})`} opacity="0.9" />
                ))}
                <circle r="2.3" fill="#e6c36a" stroke="#8b6914" strokeWidth="0.3" />
              </g>
            </svg>
          </div>

          {/* Open button with Khmer beaded rings */}
          <button
            onClick={onOpen}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#c9a227] via-[#e6c36a] to-[#c9a227] px-12 py-3 font-khmer text-sm md:text-base font-bold text-[#3a2a00] shadow-[0_10px_30px_rgba(230,195,106,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_36px_rgba(230,195,106,0.55)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            {/* ក្បាច់រង្វង់គុជ — beaded ring left */}
            <svg className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7" viewBox="0 0 28 28" aria-hidden="true">
              <circle cx="14" cy="14" r="11" fill="none" stroke="#5c3f1a" strokeWidth="0.7" strokeDasharray="1.5 2" opacity="0.7" />
              {beadedAngles.map((a) => (
                <circle key={a}
                  cx={14 + 8 * Math.cos((a * Math.PI) / 180)}
                  cy={14 + 8 * Math.sin((a * Math.PI) / 180)}
                  r="1.1" fill="#5c3f1a" opacity="0.85" />
              ))}
            </svg>

            {/* Shimmer */}
            <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/40 transition-all duration-700 group-hover:left-[150%]" />
            <Sparkles className="relative h-5 w-5" />
            <span className="relative leading-[1.8]">បើកលិខិតអញ្ជើញ</span>

            {/* ក្បាច់រង្វង់គុជ — beaded ring right */}
            <svg className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7" viewBox="0 0 28 28" aria-hidden="true">
              <circle cx="14" cy="14" r="11" fill="none" stroke="#5c3f1a" strokeWidth="0.7" strokeDasharray="1.5 2" opacity="0.7" />
              {beadedAngles.map((a) => (
                <circle key={a}
                  cx={14 + 8 * Math.cos((a * Math.PI) / 180)}
                  cy={14 + 8 * Math.sin((a * Math.PI) / 180)}
                  r="1.1" fill="#5c3f1a" opacity="0.85" />
              ))}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}