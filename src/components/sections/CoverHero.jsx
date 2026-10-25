// src/components/sections/CoverHero.jsx
import React from 'react';
import CoupleNameLogo from '../common/CoupleNameLogo';
import { CornerFlourish, FanCrest, OrnateDivider } from '../common/DecorativeSVG';
import { ChevronDown, MapPin } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';
import { I18N } from '../../data/i18n';

/**
 * COVER HERO SECTION (គម្រប និងទំព័រដើមចម្បង - ពណ៌ផ្កាឈូកស្ដើង & ស្ទាយ Anime រ៉ូមែនទិក)
 * Dreamy anime wedding lighting, soft pink tones, golden Kbach Phni Tes corners,
 * Moulpali name logo, date row, lunar date, venue, and floating scroll cue.
 */
export default function CoverHero({ currentLang = 'km' }) {
  const t = I18N[currentLang];
  const { groom, bride, event, venue } = WEDDING_DATA;

  return (
    <section className="relative w-full h-[100svh] min-h-[640px] flex flex-col items-center justify-between text-center overflow-hidden px-4 py-8 md:py-12 select-none">
      
      {/* Background: Pre-Wedding Photo with Dreamy Soft Light Pink Anime Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-102 transform transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop')`,
          filter: 'brightness(0.95) contrast(1.02) saturate(1.1)'
        }}
      />
      {/* Romantic Anime Pastel Pink & Golden Sunbeam Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff5f8]/75 via-[#fdebed]/60 to-[#fff0f4]/95 z-0 pointer-events-none" />

      {/* Decorative Khmer Corner Flourishes (ក្បាច់កែងភ្ញីទេសខ្មែរ) */}
      <CornerFlourish position="top-left" className="absolute top-3 left-3 md:top-6 md:left-6 w-14 h-14 md:w-20 md:h-20 z-10 opacity-90" />
      <CornerFlourish position="top-right" className="absolute top-3 right-3 md:top-6 md:right-6 w-14 h-14 md:w-20 md:h-20 z-10 opacity-90" />
      <CornerFlourish position="bottom-left" className="absolute bottom-3 left-3 md:bottom-6 md:left-6 w-14 h-14 md:w-20 md:h-20 z-10 opacity-90" />
      <CornerFlourish position="bottom-right" className="absolute bottom-3 right-3 md:bottom-6 md:right-6 w-14 h-14 md:w-20 md:h-20 z-10 opacity-90" />

      {/* Top Header Group: Khmer Temple Crest + Ceremonial Title */}
      <div className="relative z-10 flex flex-col items-center mt-6 md:mt-2">
        <FanCrest className="w-14 h-9 md:w-16 md:h-11 mb-1.5" />
        <h1 className="font-moul text-2xl md:text-3xl lg:text-4xl gold-foil-text drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]">
          {t.heroBlessing}
        </h1>
        <p className="font-cormorant italic text-xs md:text-sm text-[#7e4758] tracking-widest uppercase mt-0.5 font-semibold">
          {currentLang === 'km' ? 'The Wedding Invitation' : 'Royal Cambodian Union'}
        </p>
      </div>

      {/* Center Group: Signature Couple Name Logo + English Names + Pledge */}
      <div className="relative z-10 flex flex-col items-center my-auto max-w-lg w-full">
        {/* Animated Couple Name Logo in Moulpali Gold Foil */}
        <div className="mb-2">
          <CoupleNameLogo
            groomShort={groom.shortKhmer}
            brideShort={bride.shortKhmer}
            size="lg"
            animated={true}
          />
        </div>

        {/* English Couple Names */}
        <div className="flex items-center justify-center gap-3 font-cormorant text-lg md:text-2xl text-[#4a2430] tracking-wider font-medium">
          <span>{groom.englishName}</span>
          <span className="font-pinyon text-2xl md:text-3xl text-[#c59728]">&</span>
          <span>{bride.englishName}</span>
        </div>

        {/* Kbach Chan Ornate Flourish Divider */}
        <OrnateDivider className="w-48 md:w-64 h-4 my-2 opacity-95" />

        {/* សូមគោរពអញ្ជើញ Framed Badge with Light Pink & Gold Border */}
        <div className="pink-anime-card rounded-full px-7 md:px-11 py-1.5 md:py-2 shadow-sm border border-[#e8aebb]">
          <p className="font-kantumruy font-bold text-xs md:text-sm tracking-widest text-[#7a3246]">
            {t.invitationPledge}
          </p>
        </div>
      </div>

      {/* Bottom Group: Date Grid + Lunar Date + Venue + Scroll Cue */}
      <div className="relative z-10 flex flex-col items-center space-y-2 md:space-y-3 mb-1 w-full max-w-xl">
        {/* ថ្ងៃ | ទី | ខែ | ឆ្នាំ Date Row with Frosted Light Pink Card */}
        <div className="flex items-center justify-center divide-x divide-[#e2b0bc] bg-white/90 border border-[#d4af37]/45 rounded-2xl px-5 py-2 backdrop-blur-md shadow-[0_8px_25px_rgba(235,160,180,0.22)] text-xs md:text-sm">
          <div className="px-3.5 flex flex-col items-center">
            <span className="text-[10px] md:text-xs text-[#8c5261] font-kantumruy font-medium">{t.dateHeader.day}</span>
            <span className="font-kantumruy font-bold text-[#5c2838]">{event.dayNameKm}</span>
          </div>
          <div className="px-3.5 flex flex-col items-center">
            <span className="text-[10px] md:text-xs text-[#8c5261] font-kantumruy font-medium">{t.dateHeader.date}</span>
            <span className="font-moul text-sm md:text-base gold-foil-text">{currentLang === 'km' ? event.dayKm : event.dayEn}</span>
          </div>
          <div className="px-3.5 flex flex-col items-center">
            <span className="text-[10px] md:text-xs text-[#8c5261] font-kantumruy font-medium">{t.dateHeader.month}</span>
            <span className="font-kantumruy font-bold text-[#5c2838]">{currentLang === 'km' ? event.monthKm : event.monthEn}</span>
          </div>
          <div className="px-3.5 flex flex-col items-center">
            <span className="text-[10px] md:text-xs text-[#8c5261] font-kantumruy font-medium">{t.dateHeader.year}</span>
            <span className="font-kantumruy font-bold text-[#5c2838]">{currentLang === 'km' ? event.yearKm : event.yearEn}</span>
          </div>
        </div>

        {/* Khmer Lunar Date */}
        <p className="font-kantumruy text-[11px] md:text-xs text-[#8f5f14] font-semibold max-w-md px-2">
          {currentLang === 'km' ? event.lunarDateKm : event.lunarDateEn}
        </p>

        {/* Venue Information */}
        <div className="flex items-center justify-center gap-1.5 text-xs md:text-sm text-[#4a2430] font-medium bg-white/60 px-4 py-1 rounded-full border border-pink-200/50">
          <MapPin className="w-3.5 h-3.5 text-[#c59728] shrink-0" />
          <span className="font-kantumruy line-clamp-1">
            {currentLang === 'km' ? venue.nameKhmer : venue.nameEnglish}
          </span>
        </div>

        {/* Floating Scroll Cue with Gentle Anime Pulse */}
        <div className="pt-1 flex flex-col items-center text-[#c59728] animate-bounce">
          <span className="text-[10px] uppercase font-kantumruy tracking-wider font-semibold opacity-90">
            {t.scrollDown}
          </span>
          <ChevronDown className="w-4 h-4 text-[#c59728]" />
        </div>
      </div>
    </section>
  );
}
