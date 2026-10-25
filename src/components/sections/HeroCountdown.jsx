import React from 'react';
import { WEDDING_DATA } from '../../constants/weddingData';
import { useCountdown } from '../../hooks/useCountdown';

// ១. Import រូបភាព (សូមប្តូរឈ្មោះ File អោយត្រូវនឹងរូបភាពពិតក្នុង Folder របស់អ្នក)
// កែបន្ទាត់ទី ៥ ទៅជាបែបនេះ
import bgImage from '../../assets/images/gallery/wedding.png';

const HeroCountdown = () => {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATA.eventDate);

  const eventDateObj = new Date(WEDDING_DATA.eventDate);
  const formattedDate = `ថ្ងៃទី ${eventDateObj.getDate()} ខែ ${eventDateObj.getMonth() + 1} ឆ្នាំ ${eventDateObj.getFullYear()}`;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#e8e4db] font-khmer p-0 md:p-8">
      
      {/* ប្រអប់ធំ */}
      <div className="relative w-full h-[100dvh] md:h-[85vh] md:max-w-6xl bg-[#fbf9f6] overflow-hidden md:rounded-2xl shadow-2xl flex flex-col md:flex-row md:border md:border-[#d4af37]/30">
        
        {/* ================= ផ្នែករូបភាព (ខាងឆ្វេង) ================= */}
        <div className="absolute inset-0 md:relative md:w-1/2 md:h-full z-0">
          {/* ២. ប្រើ src={bgImage} នៅទីនេះ */}
          <img 
            src={bgImage} 
            alt="Wedding Couple" 
            className="w-full h-full object-cover object-center" 
          />
          {/* Overlay ងងឹត (បង្ហាញតែលើ Mobile) */}
          <div className="absolute inset-0 bg-black/40 md:hidden"></div>
        </div>

        {/* ================= ផ្នែកអក្សរ (ខាងស្តាំ) ================= */}
        <div className="relative z-10 w-full h-full md:w-1/2 md:h-full flex flex-col justify-between bg-transparent md:bg-transparent px-6 py-10 md:p-14">
          
          {/* ស៊ុមតុបតែងសម្រាប់ Desktop */}
          <div className="hidden md:block absolute inset-4 border border-[#d4af37]/40 pointer-events-none rounded-xl"></div>

          {/* អក្សរខាងលើគេ */}
          <div className="w-full text-center relative z-10">
            <h1 className="text-[#b8860b] text-2xl md:text-3xl lg:text-4xl font-bold font-moul drop-shadow-sm">
              សិរីមង្គលអាពាហ៍ពិពាហ៍
            </h1>
          </div>

          {/* ព័ត៌មានកណ្តាល */}
          <div className="w-full flex flex-col items-center text-center text-white md:text-gray-800 space-y-6 md:space-y-8 my-auto relative z-10">
            
            {/* ឈ្មោះ */}
            <div className="space-y-1 md:space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#5c4033] font-moul">{WEDDING_DATA.groom.khmerName}</h2>
              <p className="text-sm md:text-base text-gray-300 md:text-gray-500 italic">ជាមួយ</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#5c4033] font-moul">{WEDDING_DATA.bride.khmerName}</h2>
            </div>

            <p className="text-sm md:text-base font-semibold tracking-widest text-gray-200 md:text-gray-600 uppercase">សូមគោរពអញ្ជើញ</p>

            {/* ស៊ុមព័ទ្ធជុំវិញអក្សរអញ្ជើញ */}
            <div className="relative border border-white/80 md:border-[#d4af37] bg-black/10 md:bg-white/50 backdrop-blur-sm px-6 py-3 w-full max-w-sm rounded-sm shadow-sm">
              <div className="absolute -top-[2px] -left-[2px] w-3 h-3 border-t-2 border-l-2 border-white md:border-[#b8860b]"></div>
              <div className="absolute -top-[2px] -right-[2px] w-3 h-3 border-t-2 border-r-2 border-white md:border-[#b8860b]"></div>
              <div className="absolute -bottom-[2px] -left-[2px] w-3 h-3 border-b-2 border-l-2 border-white md:border-[#b8860b]"></div>
              <div className="absolute -bottom-[2px] -right-[2px] w-3 h-3 border-b-2 border-r-2 border-white md:border-[#b8860b]"></div>
              
              <p className="text-sm md:text-base font-semibold flex items-center justify-center gap-2 text-[#5c4033]">
                អញ្ជើញចូលរួមពិធីមង្គលការ <span className="text-red-500 text-lg md:text-xl">♡</span>
              </p>
            </div>

            {/* កាលបរិច្ឆេទ និងទីតាំង */}
            <div className="space-y-2">
              <h3 className="text-lg md:text-2xl font-bold text-[#5c4033]">{formattedDate}</h3>
              <p className="text-xs md:text-sm leading-relaxed max-w-xs md:max-w-md mx-auto text-gray-700">
                {WEDDING_DATA.venue.nameKhmer}
              </p>
            </div>

            {/* ប៊ូតុង Add to Calendar */}
            <button className="mt-2 bg-white text-gray-800 md:bg-[#5c4033] md:text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg hover:bg-gray-100 md:hover:bg-[#4a332a] transition-all active:scale-95 border border-transparent md:border-[#d4af37]/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Add to Calendar
            </button>

            {/* Countdown */}
            <div className="flex justify-center gap-3 md:gap-6 text-xs md:text-sm mt-4 font-medium bg-white/20 md:bg-white px-6 py-3 rounded-xl backdrop-blur-md shadow-sm border border-white/30 md:border-gray-200">
              <div className="flex flex-col items-center text-white md:text-gray-800">
                <span className="text-xl md:text-2xl font-bold text-[#b8860b]">{days}</span> ថ្ងៃ
              </div>
              <div className="flex flex-col items-center text-white md:text-gray-800 border-l border-white/30 md:border-gray-300 pl-3 md:pl-6">
                <span className="text-xl md:text-2xl font-bold text-[#b8860b]">{hours}</span> ម៉ោង
              </div>
              <div className="flex flex-col items-center text-white md:text-gray-800 border-l border-white/30 md:border-gray-300 pl-3 md:pl-6">
                <span className="text-xl md:text-2xl font-bold text-[#b8860b]">{minutes}</span> នាទី
              </div>
              <div className="flex flex-col items-center text-white md:text-gray-800 border-l border-white/30 md:border-gray-300 pl-3 md:pl-6">
                <span className="text-xl md:text-2xl font-bold text-[#b8860b]">{seconds}</span> វិនាទី
              </div>
            </div>
          </div>

          {/* Footer ខាងក្រោម */}
          <div className="w-full text-center pb-2 md:pb-0 mt-auto relative z-10">
             <div className="flex items-center justify-center mb-2">
              <div className="h-[1px] w-16 md:w-24 bg-white/50 md:bg-[#d4af37]/50"></div>
              <div className="mx-3 text-white/80 md:text-[#b8860b]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <div className="h-[1px] w-16 md:w-24 bg-white/50 md:bg-[#d4af37]/50"></div>
            </div>
            <p className="text-white md:text-[#5c4033] text-sm md:text-base font-bold">
              យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroCountdown;