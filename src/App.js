// src/App.js
import React, { useState } from 'react';
import { SvgGoldDefs } from './components/common/DecorativeSVG';
import PetalCanvas from './components/common/PetalCanvas';
import TopNavBar from './components/common/TopNavBar';
import EnvelopeScreen from './components/envelope/EnvelopeScreen';
import CoverHero from './components/sections/CoverHero';
import FormalInvitation from './components/sections/FormalInvitation';
import CoupleSection from './components/sections/CoupleSection';
import CountdownSection from './components/sections/CountdownSection';
import ProgrammeSection from './components/sections/ProgrammeSection';
import LoveStorySection from './components/sections/LoveStorySection';
import CandlelightSection from './components/sections/CandlelightSection';
import PhotoGallery from './components/sections/PhotoGallery';
import VenueSection from './components/sections/VenueSection';
import DigitalAngPao from './components/sections/DigitalAngPao';
import ThankYouSection from './components/sections/ThankYouSection';
import { useBackgroundAudio } from './hooks/useBackgroundAudio';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('km'); // 'km' (Khmer default) | 'en'
  const { isPlaying, playAudio, toggleAudio } = useBackgroundAudio();

  const handleEnvelopeComplete = () => {
    setIsEnvelopeOpen(true);
  };

  const handleToggleLang = () => {
    setCurrentLang((prev) => (prev === 'km' ? 'en' : 'km'));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#fff5f8] via-[#fdebed] to-[#fff0f4] text-[#4a2430] antialiased selection:bg-[#f8c8d3] selection:text-[#5c2838] overflow-x-hidden">
      {/* Universal Gold Foil Gradients & Specular SVG Filters */}
      <SvgGoldDefs />

      {/* Romantic Anime Falling Blossom Petals */}
      <PetalCanvas />

      {/* 1. Envelope Opening Screen (3D realistic craft in Soft Light Pink & 5.5s slow hand-opening) */}
      {!isEnvelopeOpen && (
        <EnvelopeScreen
          isOpen={!isEnvelopeOpen}
          onOpenComplete={handleEnvelopeComplete}
          onStartMusic={playAudio}
          currentLang={currentLang}
        />
      )}

      {/* Main Wedding Invitation Website (Shown after envelope opens) */}
      <div
        className={`transition-opacity duration-1000 ${
          isEnvelopeOpen ? 'opacity-100' : 'opacity-0 pointer-events-none h-0 overflow-hidden'
        }`}
      >
        {/* Sticky Top Bar (Mini name logo, audio player, language switcher) */}
        <TopNavBar
          isPlayingAudio={isPlaying}
          onToggleAudio={toggleAudio}
          currentLang={currentLang}
          onToggleLang={handleToggleLang}
        />

        <main>
          {/* 2. Cover & Hero (Light Pink & Dreamy Anime Tone) */}
          <CoverHero currentLang={currentLang} />

          {/* 3. Formal Invitation Words & Parents */}
          <FormalInvitation currentLang={currentLang} />

          {/* 4. The Couple (Scalloped photo frames with Khmer Kbach) */}
          <CoupleSection currentLang={currentLang} />

          {/* 5. Countdown in Khmer Numerals & Blessing Marquee */}
          <CountdownSection currentLang={currentLang} />

          {/* 6. Programme (Heading only "កម្មវិធី", animated gold thread) */}
          <ProgrammeSection currentLang={currentLang} />

          {/* 7. Love Story (Sideways photo strip) */}
          <LoveStorySection currentLang={currentLang} />

          {/* 8. Candlelight & Water Lotus Lanterns */}
          <CandlelightSection currentLang={currentLang} />

          {/* 9. Pre-Wedding Photo Gallery (Masonry & Lightbox) */}
          <PhotoGallery currentLang={currentLang} />

          {/* 10. Venue (Embedded Map & .ics Calendar download) */}
          <VenueSection currentLang={currentLang} />

          {/* 11. Wedding Gift (Always visible KHQR codes & Copy account) */}
          <DigitalAngPao currentLang={currentLang} />

          {/* 12. Thank You & Social Sharing & Someth Phay Credit */}
          <ThankYouSection currentLang={currentLang} />
        </main>
      </div>
    </div>
  );
}
