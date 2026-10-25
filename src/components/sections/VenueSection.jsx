// src/components/sections/VenueSection.jsx
import React from 'react';
import { FanCrest, OrnateDivider, CornerFlourish } from '../common/DecorativeSVG';
import { Navigation, CalendarPlus } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';
import { I18N } from '../../data/i18n';

/**
 * VENUE SECTION (ទីតាំងប្រារព្ធពិធី - ពណ៌ផ្កាឈូកស្ដើង & ក្បាច់ខ្មែរ)
 * Decorative crest, venue name, embedded Google Maps iframe,
 * Direct Google Maps button and Save to Calendar (.ics) generation.
 */
export default function VenueSection({ currentLang = 'km' }) {
  const t = I18N[currentLang];
  const { venue, groom, bride } = WEDDING_DATA;

  // Generate .ics calendar event file download
  const handleSaveToCalendar = () => {
    const startDate = "20261128T070000";
    const endDate = "20261128T220000";
    const title = `Wedding of ${groom.englishName} & ${bride.englishName}`;
    const description = `The Wedding Invitation of ${groom.khmerName} and ${bride.khmerName}. Reception at ${venue.nameEnglish}.`;
    const location = `${venue.nameEnglish}, ${venue.addressEnglish}`;

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Khmer Wedding Invitation//EN",
      "BEGIN:VEVENT",
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `wedding-${groom.shortEnglish}-${bride.shortEnglish}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-24 px-4 md:px-8 bg-[#fff0f4] text-[#4a2430] overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Khmer Temple Crest */}
        <FanCrest className="w-16 h-10 mb-2" />
        <h2 className="font-moul text-2xl md:text-3xl gold-foil-text">
          {t.venueTitle}
        </h2>
        <OrnateDivider className="w-48 h-4 my-2 opacity-90" />

        {/* Venue Information Card */}
        <div className="w-full pink-anime-card rounded-2xl p-6 md:p-8 mt-8 relative">
          <CornerFlourish position="top-left" className="absolute top-2 left-2 w-8 h-8 opacity-80" />
          <CornerFlourish position="top-right" className="absolute top-2 right-2 w-8 h-8 opacity-80" />

          <h3 className="font-moul text-lg md:text-xl gold-foil-subtle mb-2">
            {currentLang === 'km' ? venue.nameKhmer : venue.nameEnglish}
          </h3>
          <p className="font-kantumruy text-sm md:text-base text-[#683745] max-w-xl mx-auto leading-relaxed font-medium">
            {currentLang === 'km' ? venue.addressKhmer : venue.addressEnglish}
          </p>

          {/* Action Buttons: Open Maps & Save to Calendar (.ics) */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href={venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7cad4] to-[#c59728] text-[#4a2430] font-kantumruy font-bold text-xs md:text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <Navigation className="w-4 h-4 text-[#4a2430]" />
              <span>{t.openGoogleMaps}</span>
            </a>

            <button
              onClick={handleSaveToCalendar}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#d4af37]/60 text-[#7a3246] font-kantumruy font-bold text-xs md:text-sm hover:border-[#d4af37] hover:scale-105 active:scale-95 transition-all shadow-sm"
            >
              <CalendarPlus className="w-4 h-4 text-[#c59728]" />
              <span>{t.saveToCalendar}</span>
            </button>
          </div>

          {/* Embedded Google Maps */}
          <div className="mt-8 w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden border border-[#d4af37]/45 shadow-sm">
            <iframe
              title="Wedding Venue Google Maps"
              src={venue.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
