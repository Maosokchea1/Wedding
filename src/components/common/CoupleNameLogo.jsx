// src/components/common/CoupleNameLogo.jsx
import React from 'react';
import { ButterflySvg, FanCrest } from './DecorativeSVG';

/**
 * SIGNATURE COUPLE NAME LOGO (ឡូហ្គោឈ្មោះគូស្នេហ៍)
 * Groom short name top-left, Bride bottom-right in Moulpali gold foil.
 * Flourish connecting line, animated heart pop, and fluttering butterfly under a mini crest.
 * Respects Khmer typography: HTML text layered over SVG, safe vertical padding.
 */
export default function CoupleNameLogo({
  groomShort = "រិទ្ធី",
  brideShort = "ចរិយា",
  size = "md", // 'sm' | 'md' | 'lg'
  animated = true,
  className = ""
}) {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  // Sizing definitions
  const containerWidth = isSm ? "w-28" : isLg ? "w-64 md:w-80" : "w-44 md:w-56";
  const textClass = isSm 
    ? "text-xs font-moulpali leading-none" 
    : isLg 
      ? "text-2xl md:text-3xl font-moulpali" 
      : "text-base md:text-xl font-moulpali";

  return (
    <div className={`relative flex flex-col items-center select-none ${containerWidth} ${className}`}>
      {/* Top Small Decorative Crest */}
      <div className={`transition-all duration-700 ${animated ? "animate-in fade-in zoom-in duration-500" : ""}`}>
        <FanCrest className={isSm ? "w-6 h-4" : isLg ? "w-14 h-9" : "w-10 h-7"} />
      </div>

      {/* Couple Names Grid with Flourish Overlay */}
      <div className="relative w-full aspect-[2.6/1] mt-0.5">
        
        {/* SVG Flourish Connecting Line & Heart Pop */}
        <svg
          viewBox="0 0 200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          {/* S-Flourish connecting ribbon */}
          <path
            d="M50 35 C85 30, 95 65, 150 48"
            stroke="url(#gold-foil-grad)"
            strokeWidth={isSm ? "1" : "1.8"}
            strokeLinecap="round"
            className={animated ? "animate-[dash_2.5s_ease-in-out_forwards]" : ""}
          />
          {/* Delicate Accent Swirls */}
          <path
            d="M30 42 C40 45, 60 40, 75 32"
            stroke="url(#gold-sheen-grad)"
            strokeWidth={isSm ? "0.6" : "1"}
            strokeDasharray="2 3"
            opacity="0.8"
          />
          <path
            d="M125 50 C140 42, 160 38, 175 42"
            stroke="url(#gold-sheen-grad)"
            strokeWidth={isSm ? "0.6" : "1"}
            strokeDasharray="2 3"
            opacity="0.8"
          />

          {/* Golden Heart in the center */}
          <g transform="translate(93, 36) scale(0.75)">
            <path
              d="M10 3.2 C8.5 0, 0 0, 0 6.5 C0 11.5, 7.5 15.5, 10 18 C12.5 15.5, 20 11.5, 20 6.5 C20 0, 11.5 0, 10 3.2 Z"
              fill="url(#gold-sheen-grad)"
              className="drop-shadow-[0_1px_3px_rgba(180,130,30,0.5)]"
            />
          </g>
        </svg>

        {/* Fluttering Golden Butterfly (top-right of heart) */}
        <div
          className={`absolute ${
            isSm ? "right-6 top-0 scale-75" : isLg ? "right-12 -top-2" : "right-8 top-0"
          } pointer-events-none transform -rotate-12 transition-transform duration-700 hover:scale-110`}
        >
          <ButterflySvg className={isSm ? "w-3.5 h-3.5" : isLg ? "w-6 h-6" : "w-5 h-5"} />
        </div>

        {/* HTML Text: Groom Short Name (Top-Left) */}
        {/* Layered over SVG to guarantee correct Khmer vowel/subscript rendering! */}
        <div className="absolute left-1 top-0.5 z-10">
          <span className={`${textClass} gold-foil-text font-bold drop-shadow-sm`}>
            {groomShort}
          </span>
        </div>

        {/* HTML Text: Bride Short Name (Bottom-Right) */}
        <div className="absolute right-1 bottom-0 z-10">
          <span className={`${textClass} gold-foil-text font-bold drop-shadow-sm`}>
            {brideShort}
          </span>
        </div>
      </div>
    </div>
  );
}

