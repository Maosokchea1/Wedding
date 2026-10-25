// src/components/sections/ThankYouSection.jsx
import React, { useState } from 'react';
import CoupleNameLogo from '../common/CoupleNameLogo';
import { FanCrest, OrnateDivider } from '../common/DecorativeSVG';
import { Copy, Check } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';
import { I18N } from '../../data/i18n';

/* ─────────────────────────────────────────────────────────────
   Brand SVG Icons (inline, no extra dependency)
   ───────────────────────────────────────────────────────────── */
const TelegramIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const MessengerIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
  </svg>
);

const FacebookIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

/**
 * THANK YOU SECTION (សូមអរគុណ - ពណ៌ផ្កាឈូកស្ដើង & ក្បាច់ខ្មែរ)
 */
export default function ThankYouSection({ currentLang = 'km' }) {
  const t = I18N[currentLang];
  const { groom, bride } = WEDDING_DATA;
  const [copiedLink, setCopiedLink] = useState(false);

  const currentUrl =
    typeof window !== 'undefined'
      ? window.location.href
      : 'https://wedding.example.com';

  const encodedUrl = encodeURIComponent(currentUrl);
  const shareText = encodeURIComponent(
    `សូមគោរពអញ្ជើញចូលរួមពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍ ${groom.khmerName} & ${bride.khmerName}៖ `
  );

  /* ── Share URLs (web-friendly) ── */
  const shareLinks = {
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${shareText}`,
    // Web share URL (ជំនួស fb-messenger:// protocol ដែលខូចលើ desktop)
    messenger: `https://www.facebook.com/dialog/send?link=${encodedUrl}&redirect_uri=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      /* Fallback for older browsers */
      const el = document.createElement('textarea');
      el.value = currentUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const shareBtnClass =
    'flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-white border border-[#e8aebb] text-xs font-kantumruy font-bold text-[#5c2838] hover:border-[#d4af37] hover:scale-102 active:scale-95 transition-all shadow-sm';

  return (
    <footer className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-[#fff0f4] to-[#fce4ea] text-[#4a2430] overflow-hidden">
      <div className="absolute inset-0 texture-envelope-pink opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Sacred Popil Candles */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="w-3 h-5 rounded-full bg-gradient-to-t from-amber-500 via-amber-300 to-white blur-[1px] animate-pulse"
                style={{ animationDelay: `${i * 350}ms`, animationDuration: '1.8s' }}
              />
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 blur-[0.5px] -mt-1" />
              <div className="w-2.5 h-8 bg-gradient-to-b from-[#ffffff] to-[#fce4ea] rounded-t-sm shadow-sm mt-0.5 border-t border-amber-300" />
            </div>
          ))}
        </div>

        <FanCrest className="w-14 h-9 mb-2" />

        <h2 className="font-moul text-3xl md:text-4xl gold-foil-text">
          {t.thankYouTitle}
        </h2>
        <OrnateDivider className="w-48 h-4 my-2 opacity-90" />

        <p className="font-kantumruy text-sm md:text-base text-[#683745] max-w-lg leading-relaxed mt-4 font-medium">
          {t.thankYouMessage}
        </p>

        <div className="my-10">
          <CoupleNameLogo
            groomShort={groom.shortKhmer}
            brideShort={bride.shortKhmer}
            size="md"
            animated={false}
          />
        </div>

        {/* ── Share Buttons with proper brand icons + real URLs ── */}
        <div className="w-full max-w-md mt-4">
          <p className="font-kantumruy text-xs text-[#7a3246] font-bold mb-4 tracking-wider uppercase">
            {t.shareWith}
          </p>

          <div className="grid grid-cols-2 gap-3">
            {/* Telegram — real <a> link */}
            <a
              href={shareLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={shareBtnClass}
              aria-label="Share via Telegram"
            >
              <TelegramIcon className="w-4 h-4 text-[#2AABEE]" />
              <span>{t.shareTelegram}</span>
            </a>

            {/* Messenger — web share URL */}
            <a
              href={shareLinks.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className={shareBtnClass}
              aria-label="Share via Messenger"
            >
              <MessengerIcon className="w-4 h-4 text-[#0084FF]" />
              <span>{t.shareMessenger}</span>
            </a>

            {/* Facebook — real <a> link */}
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={shareBtnClass}
              aria-label="Share via Facebook"
            >
              <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
              <span>{t.shareFacebook}</span>
            </a>

            {/* Copy Link — still a button (needs JS) */}
            <button
              onClick={handleCopyLink}
              type="button"
              className={shareBtnClass}
              aria-label="Copy link"
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

        {/* Footer credit */}
        <div className="mt-16 pt-8 border-t border-[#e8aebb]/50 w-full text-center space-y-2 text-[11px] text-[#8c5261] font-kantumruy font-medium">
          <p>
            © 2026 {groom.englishName} & {bride.englishName}. All Rights Reserved.
          </p>
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