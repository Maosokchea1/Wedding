// src/components/envelope/WaxSealModal.jsx
import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const GOLD = '#e6c36a';

export default function WaxSealModal({ isOpen, onOpen }) {
  // ការពារ scroll ខាងក្រោយ ពេល modal បើក
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="លិខិតអញ្ជើញអាពាហ៍ពិពាហ៍"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
    >
      <div
        className="relative w-full max-w-4xl min-h-[520px] md:min-h-0 md:aspect-[16/10] rounded-2xl overflow-hidden
                   shadow-[0_30px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/10
                   animate-in fade-in zoom-in duration-700 bg-cover bg-center"
        style={{
          // ប្តូរទៅរូបភាពកាតពិតរបស់អ្នក ឧ. url('/images/wedding-cover.jpg')
          backgroundImage: `url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        {/* Overlay ងងឹតបន្តិច ដើម្បីឱ្យអក្សរមាសលេចធ្លោ */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />

        {/* ស៊ុមមាសពីរជាន់ */}
        <div className="absolute inset-3 md:inset-5 rounded-xl border border-[#e6c36a]/60 pointer-events-none" />
        <div className="absolute inset-5 md:inset-8 rounded-lg border border-[#e6c36a]/25 pointer-events-none" />

        {/* មាតិកា */}
        <div className="relative z-10 flex h-full min-h-[520px] md:min-h-0 flex-col items-center justify-between px-6 py-14 md:py-16 text-center">

          {/* ចំណងជើង */}
          <header className="space-y-3">
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

            {/* ខ្សែបំបែកលម្អ */}
            <div className="flex items-center justify-center gap-3 pt-2" aria-hidden="true">
              <span className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#e6c36a]" />
              <span className="h-2 w-2 rotate-45 bg-[#e6c36a]" />
              <span className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#e6c36a]" />
            </div>
          </header>

          {/* សូមគោរពអញ្ជើញ */}
          <p
            className="font-khmer font-bold text-base md:text-xl leading-[1.8] tracking-wider
                       rounded-sm border border-[#e6c36a]/70 bg-black/30 backdrop-blur-sm
                       px-10 md:px-16 py-2 md:py-3"
            style={{ color: GOLD }}
          >
            សូមគោរពអញ្ជើញ
          </p>

          {/* ប៊ូតុង */}
          <button
            onClick={onOpen}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full
                       bg-gradient-to-r from-[#c9a227] via-[#e6c36a] to-[#c9a227]
                       px-9 py-3 font-khmer text-sm md:text-base font-bold text-[#3a2a00]
                       shadow-[0_10px_30px_rgba(230,195,106,0.35)]
                       transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_36px_rgba(230,195,106,0.55)]
                       active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            {/* ប្រកាសពន្លឺរំកិល */}
            <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg]
                             bg-white/40 transition-all duration-700 group-hover:left-[150%]" />
            <Sparkles className="relative h-5 w-5" />
            <span className="relative leading-[1.8]">បើកលិខិតអញ្ជើញ</span>
          </button>
        </div>
      </div>
    </div>
  );
}