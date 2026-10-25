// src/components/sections/ThankYouSection.jsx
import React, { useState } from 'react';
import CoupleNameLogo from '../common/CoupleNameLogo';
import { FanCrest, OrnateDivider } from '../common/DecorativeSVG';
import { Send, MessageCircle, Share2, Copy, Check } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';
import { I18N } from '../../data/i18n';

/**
 * THANK YOU SECTION (សូមអរគុណ - ពណ៌ផ្កាឈូកស្ដើង & ក្បាច់ខ្មែរ)
 * Sacred Popil candles ambiance, thank you message,
 * platform share buttons (Telegram, Messenger, Facebook, Copy link),
 * signature Couple Name Logo, and required Someth Phay footer credit.
 */
export default function ThankYouSection({ currentLang = 'km' }) {
  const t = I18N[currentLang];
  const { groom, bride } = WEDDING_DATA;
  const [copiedLink, setCopiedLink] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://wedding.example.com';
  const shareText = encodeURIComponent(
    `សូមគោរពអញ្ជើញចូលរួមពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍ ${groom.khmerName} & ${bride.khmerName}៖ `
  );

  const handleShareTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${shareText}`, '_blank');
  };

  const handleShareMessenger = () => {
    window.open(`fb-messenger://share/?link=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <footer className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-[#fff0f4] to-[#fce4ea] text-[#4a2430] overflow-hidden">
      {/* Background Subtle Rose Texture */}
      <div className="absolute inset-0 texture-envelope-pink opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Sacred Popil Wedding Candles Lighting Up in Row (ទៀនពពិលមង្គលការ) */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Sacred Flame Glow */}
              <div
                className="w-3 h-5 rounded-full bg-gradient-to-t from-amber-500 via-amber-300 to-white blur-[1px] animate-pulse"
                style={{ animationDelay: `${i * 350}ms`, animationDuration: '1.8s' }}
              />
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 blur-[0.5px] -mt-1" />
              {/* Candle Body with Soft Rose Ivory Texture */}
              <div className="w-2.5 h-8 bg-gradient-to-b from-[#ffffff] to-[#fce4ea] rounded-t-sm shadow-sm mt-0.5 border-t border-amber-300" />
            </div>
          ))}
        </div>

        {/* Khmer Temple Crest */}
        <FanCrest className="w-14 h-9 mb-2" />

        {/* សូមអរគុណ Title */}
        <h2 className="font-moul text-3xl md:text-4xl gold-foil-text">
          {t.thankYouTitle}
        </h2>
        <OrnateDivider className="w-48 h-4 my-2 opacity-90" />

        {/* Heartfelt Message */}
        <p className="font-kantumruy text-sm md:text-base text-[#683745] max-w-lg leading-relaxed mt-4 font-medium">
          {t.thankYouMessage}
        </p>

        {/* Signature Couple Name Logo */}
        <div className="my-10">
          <CoupleNameLogo
            groomShort={groom.shortKhmer}
            brideShort={bride.shortKhmer}
            size="md"
            animated={false}
          />
        </div>

        {/* Social Share Buttons with Platform Logos & Short Line */}
        <div className="w-full max-w-md mt-4">
          <p className="font-kantumruy text-xs text-[#7a3246] font-bold mb-4 tracking-wider uppercase">
            {t.shareWith}
          </p>

          <div className="grid grid-cols-2 gap-3">
            {/* Telegram */}
            <button
              onClick={handleShareTelegram}
              type="button"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-white border border-[#e8aebb] text-xs font-kantumruy font-bold text-[#5c2838] hover:border-[#d4af37] hover:scale-102 active:scale-95 transition-all shadow-sm"
            >
              <Send className="w-4 h-4 text-[#2AABEE]" />
              <span>{t.shareTelegram}</span>
            </button>

            {/* Messenger */}
            <button
              onClick={handleShareMessenger}
              type="button"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-white border border-[#e8aebb] text-xs font-kantumruy font-bold text-[#5c2838] hover:border-[#d4af37] hover:scale-102 active:scale-95 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#0084FF]" />
              <span>{t.shareMessenger}</span>
            </button>

            {/* Facebook */}
            <button
              onClick={handleShareFacebook}
              type="button"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-white border border-[#e8aebb] text-xs font-kantumruy font-bold text-[#5c2838] hover:border-[#d4af37] hover:scale-102 active:scale-95 transition-all shadow-sm"
            >
              <Share2 className="w-4 h-4 text-[#1877F2]" />
              <span>{t.shareFacebook}</span>
            </button>

            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              type="button"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-white border border-[#e8aebb] text-xs font-kantumruy font-bold text-[#5c2838] hover:border-[#d4af37] hover:scale-102 active:scale-95 transition-all shadow-sm"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600 font-bold">{t.linkCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#c59728]" />
                  <span>{t.copyLink}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Copyright & Mandatory Footer Credit:
            "Design inspired by Someth Phay · somethphay.me" linking to https://somethphay.me */}
        <div className="mt-16 pt-8 border-t border-[#e8aebb]/50 w-full text-center space-y-2 text-[11px] text-[#8c5261] font-kantumruy font-medium">
          <p>© 2026 {groom.englishName} & {bride.englishName}. All Rights Reserved.</p>
          <p>
            <a
              href="https://somethphay.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5c2838] transition-colors underline decoration-[#d4af37]/60 underline-offset-4"
            >
              {t.footerInspired}
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
