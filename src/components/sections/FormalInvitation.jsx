// src/components/sections/FormalInvitation.jsx
import React from 'react';
import { FanCrest, OrnateDivider, CornerFlourish } from '../common/DecorativeSVG';
import { WEDDING_DATA } from '../../data/wedding';
import { I18N } from '../../data/i18n';

/**
 * FORMAL INVITATION SECTION (លិខិតអញ្ជើញផ្លូវការ - ពណ៌ផ្កាឈូកស្ដើង & ក្បាច់ខ្មែរ)
 * Soft blush pink background, white-pink luxury cards,
 * arched couple portrait, parents written strictly on separate lines.
 */
export default function FormalInvitation({ currentLang = 'km' }) {
  const t = I18N[currentLang];
  const { groom, bride } = WEDDING_DATA;

  return (
    <section className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-[#fff0f4] via-[#fdebed] to-[#fff5f8] text-[#4a2430] overflow-hidden">
      {/* Background Subtle Rose Paper Texture */}
      <div className="absolute inset-0 texture-envelope-pink opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Khmer Temple Crest */}
        <FanCrest className="w-16 h-10 mb-3" />

        <h2 className="font-moul text-2xl md:text-3xl gold-foil-text drop-shadow-sm">
          {t.formalTitle}
        </h2>
        <OrnateDivider className="w-48 h-4 my-3 opacity-90" />

        {/* Both Sets of Parents with Strict Rule:
            "លោក X" on one line and "និងលោកស្រី Y" on the next */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-10 max-w-2xl">
          {/* Groom's Parents */}
          <div className="flex flex-col items-center pink-anime-card rounded-2xl p-6 relative">
            <CornerFlourish position="top-left" className="absolute top-1 left-1 w-8 h-8 opacity-80" />
            <CornerFlourish position="top-right" className="absolute top-1 right-1 w-8 h-8 opacity-80" />
            
            <h3 className="font-moul text-sm md:text-base gold-foil-subtle mb-3">
              {t.formalHeadingGroomParents}
            </h3>
            <p className="font-kantumruy font-bold text-base md:text-lg text-[#5c2838]">
              {groom.parents.father}
            </p>
            <p className="font-kantumruy font-bold text-base md:text-lg text-[#5c2838]">
              {groom.parents.mother}
            </p>
          </div>

          {/* Bride's Parents */}
          <div className="flex flex-col items-center pink-anime-card rounded-2xl p-6 relative">
            <CornerFlourish position="top-left" className="absolute top-1 left-1 w-8 h-8 opacity-80" />
            <CornerFlourish position="top-right" className="absolute top-1 right-1 w-8 h-8 opacity-80" />

            <h3 className="font-moul text-sm md:text-base gold-foil-subtle mb-3">
              {t.formalHeadingBrideParents}
            </h3>
            <p className="font-kantumruy font-bold text-base md:text-lg text-[#5c2838]">
              {bride.parents.father}
            </p>
            <p className="font-kantumruy font-bold text-base md:text-lg text-[#5c2838]">
              {bride.parents.mother}
            </p>
          </div>
        </div>

        {/* Arched Couple Portrait Photo with Gold & Rose Border */}
        <div className="relative my-6 w-56 md:w-64 aspect-[3/4] rounded-t-full overflow-hidden border-3 border-[#d4af37] shadow-[0_15px_35px_rgba(220,130,155,0.28)] group bg-white p-1">
          <div className="w-full h-full rounded-t-full overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUgjiGQ898q9bDAecO-OY0LuOQ8GKgQEQQ0pAeBHDJu-5O419Vl11gkDs&s=10"
              alt="The Royal Couple"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 rounded-t-full ring-1 ring-inset ring-white/40 pointer-events-none" />
        </div>

        {/* Formal Invitation Text */}
        <div className="max-w-2xl px-4 mt-6 space-y-4">
          <p className="font-kantumruy text-sm md:text-base leading-relaxed text-[#683745]">
            {t.formalTextPrefix}
          </p>
          <div className="py-2">
            <span className="font-moul text-xl md:text-2xl gold-foil-text mx-2">
              {groom.khmerName}
            </span>
            <span className="font-cormorant italic text-xl text-[#c59728] mx-1">
              {t.togetherWith}
            </span>
            <span className="font-moul text-xl md:text-2xl gold-foil-text mx-2">
              {bride.khmerName}
            </span>
          </div>
          <p className="font-kantumruy text-sm md:text-base leading-relaxed text-[#683745]">
            {t.formalBlessingClosing}
          </p>
        </div>
      </div>
    </section>
  );
}
