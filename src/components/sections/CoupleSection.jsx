// src/components/sections/CoupleSection.jsx
import React from 'react';
import { FanCrest, CornerFlourish, OrnateDivider } from '../common/DecorativeSVG';
import { WEDDING_DATA } from '../../data/wedding';
import { I18N } from '../../data/i18n';

/**
 * THE COUPLE SECTION (គូស្វាមីភរិយា - ពណ៌ផ្កាឈូកស្ដើង & ក្បាច់ខ្មែរ)
 * Scalloped photo frames with gold and rose highlights, groom and bride profiles.
 */
export default function CoupleSection({ currentLang = 'km' }) {
  const t = I18N[currentLang];
  const { groom, bride } = WEDDING_DATA;

  return (
    <section className="relative py-20 px-4 bg-[#fff5f8] text-[#4a2430] overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FanCrest className="w-14 h-9 mb-2" />
        <h2 className="font-moul text-2xl md:text-3xl gold-foil-text text-center">
          {t.theCoupleTitle}
        </h2>
        <OrnateDivider className="w-48 h-4 my-2 opacity-90" />

        {/* Groom & Bride Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-12">
          
          {/* Groom Profile */}
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Scalloped Photo Frame with Gold & Rose Border */}
            <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl p-2 bg-gradient-to-b from-[#d4af37] via-[#f7cad4] to-[#d4af37] shadow-[0_15px_35px_rgba(220,130,155,0.25)] group bg-white">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img
                  src={groom.avatar}
                  alt={groom.englishName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a2430]/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <CornerFlourish position="top-left" className="absolute -top-2 -left-2 w-8 h-8 opacity-90" />
              <CornerFlourish position="bottom-right" className="absolute -bottom-2 -right-2 w-8 h-8 opacity-90" />
            </div>

            <span className="font-kantumruy text-xs uppercase tracking-widest text-[#a8761a] font-bold">
              {t.groomRole}
            </span>
            <h3 className="font-moul text-xl md:text-2xl gold-foil-text">
              {groom.khmerName}
            </h3>
            <p className="font-cormorant text-lg text-[#683745] font-medium">
              {groom.englishName}
            </p>
            <div className="text-xs font-kantumruy text-[#8c5261] pt-1 leading-relaxed">
              <p>កូនប្រុសរបស់ {groom.parents.father}</p>
              <p>{groom.parents.mother}</p>
            </div>
          </div>

          {/* Bride Profile */}
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Scalloped Photo Frame with Gold & Rose Border */}
            <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl p-2 bg-gradient-to-b from-[#d4af37] via-[#f7cad4] to-[#d4af37] shadow-[0_15px_35px_rgba(220,130,155,0.25)] group bg-white">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img
                  src={bride.avatar}
                  alt={bride.englishName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a2430]/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <CornerFlourish position="top-left" className="absolute -top-2 -left-2 w-8 h-8 opacity-90" />
              <CornerFlourish position="bottom-right" className="absolute -bottom-2 -right-2 w-8 h-8 opacity-90" />
            </div>

            <span className="font-kantumruy text-xs uppercase tracking-widest text-[#a8761a] font-bold">
              {t.brideRole}
            </span>
            <h3 className="font-moul text-xl md:text-2xl gold-foil-text">
              {bride.khmerName}
            </h3>
            <p className="font-cormorant text-lg text-[#683745] font-medium">
              {bride.englishName}
            </p>
            <div className="text-xs font-kantumruy text-[#8c5261] pt-1 leading-relaxed">
              <p>កូនស្រីរបស់ {bride.parents.father}</p>
              <p>{bride.parents.mother}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
