// src/components/sections/ProgrammeSection.jsx
import React from 'react';
import { FanCrest, OrnateDivider } from '../common/DecorativeSVG';
import { Sparkles, Clock } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';
import { I18N } from '../../data/i18n';

/**
 * PROGRAMME SECTION (កម្មវិធីបុណ្យ - ពណ៌ផ្កាឈូកស្ដើង & ក្បាច់ខ្មែរ)
 * Heading strictly "កម្មវិធី".
 * Connected vertical gold thread, rituals lighting up with times and lotus milestone nodes.
 */
export default function ProgrammeSection({ currentLang = 'km' }) {
  const t = I18N[currentLang];
  const { programme } = WEDDING_DATA;

  return (
    <section className="relative py-20 px-4 md:px-8 bg-[#fff0f4] text-[#4a2430] overflow-hidden">
      {/* Background Subtle Rose Texture */}
      <div className="absolute inset-0 texture-envelope-pink opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Khmer Temple Crest & Strict Single Word Heading "កម្មវិធី" */}
        <FanCrest className="w-14 h-9 mb-2" />
        <h2 className="font-moul text-2xl md:text-3xl gold-foil-text">
          {t.programmeTitle}
        </h2>
        <p className="font-kantumruy text-xs md:text-sm text-[#7a3246] mt-1 text-center font-semibold">
          {t.programmeSubtitle}
        </p>
        <OrnateDivider className="w-48 h-4 my-2 opacity-90" />

        {/* Timeline with Continuous Gold Thread */}
        <div className="relative w-full max-w-2xl mt-12 pl-6 md:pl-0">
          
          {/* Vertical Gold Thread (Centered on desktop, left-aligned on mobile) */}
          <div className="absolute top-2 bottom-6 left-6 md:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#d4af37] via-[#f7cad4] to-[#c59728] shadow-[0_0_8px_rgba(212,175,55,0.45)]" />

          <div className="space-y-12">
            {programme.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Ritual Milestone Node (Lotus Bud / Golden Rosette) */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white border-2 border-[#d4af37] shadow-[0_0_12px_rgba(235,160,180,0.6)] z-10">
                    <Sparkles className="w-4 h-4 text-[#c59728]" />
                  </div>

                  {/* Content Card (Alternating left & right on desktop) */}
                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    }`}
                  >
                    <div className="pink-anime-card rounded-2xl p-5 hover:border-[#d4af37] transition-all group">
                      {/* Time Badge with Gold/Rose border */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdebed] border border-[#e8aebb] text-[#7a3246] text-xs font-bold mb-2 ${
                          isEven ? 'md:ml-auto' : ''
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 text-[#c59728]" />
                        <span className="font-kantumruy">
                          {currentLang === 'km' ? item.time : item.timeEn}
                        </span>
                      </div>

                      {/* Ritual Title */}
                      <h3 className="font-moul text-sm md:text-base gold-foil-text">
                        {currentLang === 'km' ? item.titleKm : item.titleEn}
                      </h3>

                      {/* Ritual Description */}
                      <p className="font-kantumruy text-xs md:text-sm text-[#683745] mt-1 leading-relaxed">
                        {currentLang === 'km' ? item.descKm : item.descEn}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
