// src/components/common/TopNavBar.jsx
import React, { useState, useEffect } from 'react';
import CoupleNameLogo from './CoupleNameLogo';
import { Volume2, VolumeX, Globe } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';
import { I18N } from '../../data/i18n';

/**
 * STICKY TOP NAVIGATION BAR (របារម៉ឺនុយខាងលើ - ពណ៌ផ្កាឈូកស្ដើង)
 * Soft light pink glassmorphism, couple logo,
 * music toggle, and Khmer / English switcher.
 */
export default function TopNavBar({
  isPlayingAudio,
  onToggleAudio,
  currentLang,
  onToggleLang
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = I18N[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-b from-[#fff5f8]/95 via-[#fdebed]/90 to-transparent backdrop-blur-md py-2.5 border-b border-[#e8aebb]/50 shadow-[0_4px_20px_rgba(235,160,180,0.15)]'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Left: Small Signature Couple Name Logo */}
        <div className="flex items-center">
          <CoupleNameLogo
            groomShort={WEDDING_DATA.groom.shortKhmer}
            brideShort={WEDDING_DATA.bride.shortKhmer}
            size="sm"
            animated={false}
            className="origin-left transform scale-90"
          />
        </div>

        {/* Right: Audio Toggle & Language Switcher Controls */}
        <div className="flex items-center gap-2.5">
          {/* Background Audio Play/Pause Button */}
          <button
            onClick={onToggleAudio}
            type="button"
            aria-label={isPlayingAudio ? t.audioOff : t.audioOn}
            className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/90 border border-[#e8aebb] text-[#7a3246] hover:border-[#c59728] hover:scale-105 active:scale-95 transition-all shadow-sm group"
          >
            {isPlayingAudio ? (
              <span className="relative flex items-center justify-center">
                <Volume2 className="w-4 h-4 text-[#c59728]" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#e8aebb] animate-pulse" />
              </span>
            ) : (
              <VolumeX className="w-4 h-4 text-gray-400" />
            )}
          </button>

          {/* Khmer / English Language Switcher Button */}
          <button
            onClick={onToggleLang}
            type="button"
            aria-label="ប្តូរភាសា / Switch Language"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-[#e8aebb] text-[#7a3246] text-xs font-semibold hover:border-[#c59728] hover:scale-105 active:scale-95 transition-all shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 text-[#c59728]" />
            <span className="font-kantumruy uppercase tracking-wide">
              {t.languageToggle}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
