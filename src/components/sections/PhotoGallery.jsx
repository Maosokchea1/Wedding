// src/components/sections/PhotoGallery.jsx
import React, { useState } from 'react';
import { FanCrest, OrnateDivider } from '../common/DecorativeSVG';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';
import { I18N } from '../../data/i18n';

/**
 * PHOTO GALLERY SECTION (កម្រងរូបភាពអនុស្សាវរីយ៍ - ពណ៌ផ្កាឈូកស្ដើង)
 * Masonry grid layout with lightbox full-screen modal and swipe/arrow navigation.
 */
export default function PhotoGallery({ currentLang = 'km' }) {
  const t = I18N[currentLang];
  const { gallery } = WEDDING_DATA;
  const [activePhotoIdx, setActivePhotoIdx] = useState(null);

  const openLightbox = (index) => setActivePhotoIdx(index);
  const closeLightbox = () => setActivePhotoIdx(null);

  const prevPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="relative py-24 px-4 md:px-8 bg-[#fff5f8] text-[#4a2430] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FanCrest className="w-14 h-9 mb-2" />
        <h2 className="font-moul text-2xl md:text-3xl gold-foil-text text-center">
          {t.galleryTitle}
        </h2>
        <p className="font-kantumruy text-xs md:text-sm text-[#7a3246] mt-1 text-center font-semibold">
          {t.gallerySubtitle}
        </p>
        <OrnateDivider className="w-48 h-4 my-2 opacity-90" />

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-10 w-full">
          {gallery.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="relative rounded-2xl overflow-hidden aspect-[3/4] pink-anime-card cursor-pointer group shadow-[0_10px_25px_rgba(235,160,180,0.22)] p-1.5 bg-white border border-[#e8aebb]"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#4a2430]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/90 border border-[#d4af37] text-[#7a3246] transform scale-75 group-hover:scale-100 transition-transform shadow-md">
                    <Eye className="w-5 h-5 text-[#c59728]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {activePhotoIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={prevPhoto}
            aria-label="Previous"
            className="absolute left-4 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:border-[#d4af37] transition-all z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] rounded-lg overflow-hidden border border-[#d4af37]/40 shadow-2xl"
          >
            <img
              src={gallery[activePhotoIdx].url}
              alt={gallery[activePhotoIdx].title}
              className="max-h-[85vh] w-auto object-contain"
            />
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextPhoto}
            aria-label="Next"
            className="absolute right-4 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:border-[#d4af37] transition-all z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
