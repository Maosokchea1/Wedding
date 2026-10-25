// src/components/sections/CountdownSection.jsx
import React, { useState, useEffect } from 'react';
import { FanCrest, OrnateDivider } from '../common/DecorativeSVG';
import { WEDDING_DATA } from '../../data/wedding';
import { I18N, toKhmerNumerals } from '../../data/i18n';

/**
 * COUNTDOWN SECTION (ការរាប់ថយក្រោយដល់ថ្ងៃសិរីមង្គល - ពណ៌ផ្កាឈូកស្ដើង)
 * Displays time left in Khmer numerals with a slow blessing marquee in soft pink & gold.
 */
export default function CountdownSection({ currentLang = 'km' }) {
  const t = I18N[currentLang];
  const targetDate = new Date(WEDDING_DATA.event.isoDate).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNum = (n) => {
    const padded = String(n).padStart(2, '0');
    return currentLang === 'km' ? toKhmerNumerals(padded) : padded;
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#fff5f8] via-[#fdebed] to-[#fff0f4] text-[#4a2430] overflow-hidden">
      
      {/* Background Marquee Blessing Text (Slow Infinite Scroll in Soft Rose Gold) */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none opacity-20 whitespace-nowrap select-none">
        <div className="animate-[marquee_30s_linear_infinite] flex gap-12 font-moul text-4xl md:text-6xl text-[#e8aebb]">
          <span>{t.countdownMarquee}</span>
          <span>{t.countdownMarquee}</span>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <FanCrest className="w-14 h-9 mb-2" />
        <h2 className="font-moul text-2xl md:text-3xl gold-foil-text">
          {t.countdownTitle}
        </h2>
        <OrnateDivider className="w-48 h-4 my-2 opacity-90" />

        {/* Countdown Digits Grid */}
        <div className="grid grid-cols-4 gap-3 md:gap-6 mt-10 w-full max-w-xl">
          {/* Days */}
          <div className="flex flex-col items-center pink-anime-card rounded-2xl p-3 md:p-6 shadow-sm border border-[#e8aebb]">
            <span className="font-moul text-2xl md:text-4xl lg:text-5xl gold-foil-text">
              {formatNum(timeLeft.days)}
            </span>
            <span className="font-kantumruy text-xs md:text-sm text-[#7a3246] mt-1 font-bold">
              {t.timeUnits.days}
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center pink-anime-card rounded-2xl p-3 md:p-6 shadow-sm border border-[#e8aebb]">
            <span className="font-moul text-2xl md:text-4xl lg:text-5xl gold-foil-text">
              {formatNum(timeLeft.hours)}
            </span>
            <span className="font-kantumruy text-xs md:text-sm text-[#7a3246] mt-1 font-bold">
              {t.timeUnits.hours}
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center pink-anime-card rounded-2xl p-3 md:p-6 shadow-sm border border-[#e8aebb]">
            <span className="font-moul text-2xl md:text-4xl lg:text-5xl gold-foil-text">
              {formatNum(timeLeft.minutes)}
            </span>
            <span className="font-kantumruy text-xs md:text-sm text-[#7a3246] mt-1 font-bold">
              {t.timeUnits.minutes}
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center pink-anime-card rounded-2xl p-3 md:p-6 shadow-sm border border-[#e8aebb]">
            <span className="font-moul text-2xl md:text-4xl lg:text-5xl gold-foil-text">
              {formatNum(timeLeft.seconds)}
            </span>
            <span className="font-kantumruy text-xs md:text-sm text-[#7a3246] mt-1 font-bold">
              {t.timeUnits.seconds}
            </span>
          </div>
        </div>

        {/* Calendar Badge */}
        <p className="font-kantumruy text-xs md:text-sm text-[#8c5261] font-semibold mt-8 bg-white/70 px-5 py-1.5 rounded-full border border-pink-200">
          {WEDDING_DATA.event.dayNameKm} ទី{WEDDING_DATA.event.dayKm} {WEDDING_DATA.event.monthKm} {WEDDING_DATA.event.yearKm}
        </p>
      </div>
    </section>
  );
}
