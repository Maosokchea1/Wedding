// src/components/sections/LoveStorySection.jsx
import React from 'react';
import { FanCrest, OrnateDivider, CornerFlourish } from '../common/DecorativeSVG';
import { Heart } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';
import { I18N } from '../../data/i18n';

/**
 * LOVE STORY SECTION (ដំណើរនៃសេចក្តីស្រឡាញ់ - ពណ៌ផ្កាឈូកស្ដើង & ស្ទាយ Anime)
 * Auto-scrolling infinite photo strip with pause-on-hover.
 */
export default function LoveStorySection({ currentLang = 'km' }) {
  const t = I18N[currentLang];
  const { loveStory } = WEDDING_DATA;

  // Duplicate items for seamless infinite loop
  const loopStories = [...loveStory, ...loveStory];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#fff0f4] via-[#fdebed] to-[#fff5f8] text-[#4a2430] overflow-hidden">
      {/* ── Auto-scroll animation ── */}
      <style>{`
        @keyframes loveStoryAutoScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .love-story-track {
          animation: loveStoryAutoScroll 60s linear infinite;
          will-change: transform;
        }
        .love-story-track:hover,
        .love-story-track:focus-within {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .love-story-track { animation: none; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FanCrest className="w-14 h-9 mb-2" />
        <h2 className="font-moul text-2xl md:text-3xl gold-foil-text text-center">
          {t.loveStoryTitle}
        </h2>
        <p className="font-kantumruy text-xs md:text-sm text-[#7a3246] mt-1 text-center font-semibold">
          {t.loveStorySubtitle}
        </p>
        <OrnateDivider className="w-48 h-4 my-2 opacity-90" />

        {/* Auto-scrolling infinite strip */}
        <div className="w-full mt-12 relative">
          {/* Soft fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-[#fdebed] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-[#fdebed] to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="love-story-track flex w-max py-2">
              {loopStories.map((story, index) => {
                const isDuplicate = index >= loveStory.length;
                return (
                  <div
                    key={index}
                    aria-hidden={isDuplicate ? 'true' : undefined}
                    className="shrink-0 w-[82vw] max-w-sm mr-6 md:mr-8 rounded-2xl pink-anime-card p-4 md:p-5 flex flex-col relative group hover:border-[#d4af37] transition-all"
                  >
                    <CornerFlourish position="top-left" className="absolute top-2 left-2 w-8 h-8 opacity-80" />
                    <CornerFlourish position="top-right" className="absolute top-2 right-2 w-8 h-8 opacity-80" />

                    {/* Photo Frame */}
                    <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative mb-4 bg-white p-1 border border-pink-200 shadow-sm">
                      <div className="w-full h-full rounded-lg overflow-hidden">
                        <img
                          src={story.photo}
                          alt={story.titleKm}
                          loading={isDuplicate ? 'lazy' : 'eager'}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      {/* Milestone Year Badge */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 border border-[#d4af37]/60 backdrop-blur-sm shadow-sm">
                        <span className="font-moul text-xs gold-foil-text">
                          {currentLang === 'km' ? story.year : story.yearEn}
                        </span>
                      </div>
                    </div>

                    {/* Story Details */}
                    <div className="flex flex-col text-center px-2 flex-grow">
                      <div className="flex items-center justify-center gap-1.5 text-[#c59728] mb-1">
                        <Heart className="w-4 h-4 fill-[#f2aab8] text-[#c59728]" />
                        <h3 className="font-moul text-sm md:text-base text-[#5c2838]">
                          {currentLang === 'km' ? story.titleKm : story.titleEn}
                        </h3>
                      </div>
                      <p className="font-kantumruy text-xs md:text-sm text-[#683745] leading-relaxed mt-2 italic font-medium">
                        "{currentLang === 'km' ? story.captionKm : story.captionEn}"
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}