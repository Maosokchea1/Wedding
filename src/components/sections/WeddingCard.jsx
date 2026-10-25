import React from 'react';

const WeddingCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      
      {/* ប្រអប់កាតធំ (Landscape Card) */}
      <div className="relative w-full max-w-3xl aspect-[4/3] rounded-lg shadow-2xl overflow-hidden bg-[#f4d0d8]">
        
        {/* 1. ផ្ទៃខាងក្រោយ (ធ្វើត្រាប់តាមជញ្ជាំងឈើពណ៌ផ្កាឈូក) */}
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(90deg,transparent_50%,rgba(255,255,255,0.2)_50%)] bg-[length:20px_100%]"></div>
        
        {/* 2. ស៊ុមធ្នូ (Archway) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[85%] bg-[#fdfbf7] rounded-t-[150px] shadow-[0_0_15px_rgba(0,0,0,0.1)] border-[3px] border-[#d4af37]/50 flex flex-col items-center pt-16">
          
          {/* សសរទ្រូងឆ្វេង-ស្តាំ (Pillars) */}
          <div className="absolute left-0 bottom-0 w-8 h-[80%] bg-gradient-to-r from-gray-200 to-white border-r border-[#d4af37]/30"></div>
          <div className="absolute right-0 bottom-0 w-8 h-[80%] bg-gradient-to-l from-gray-200 to-white border-l border-[#d4af37]/30"></div>

          {/* អក្សរខាងក្នុងធ្នូ */}
          <div className="text-center space-y-2 z-10">
            <h1 className="text-3xl md:text-4xl text-[#a83c52] font-bold font-moul drop-shadow-sm">
              សិរីមង្គល
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#a83c52] font-bold font-moul">
              អាពាហ៍ពិពាហ៍
            </h2>
          </div>

          {/* ប្រអប់សូមគោរពអញ្ជើញ (Gold Box) */}
          <div className="mt-12 md:mt-16 relative z-10 px-8 py-2 border border-[#d4af37] bg-white/50 backdrop-blur-sm shadow-sm">
            <p className="text-sm md:text-base text-[#8c6b1e] font-khmer font-semibold tracking-wider">
              សូមគោរពអញ្ជើញ
            </p>
          </div>
        </div>

        {/* 3. ការតុបតែងផ្កា (Floral Decor) */}
        {/* ផ្កាខាងឆ្វេង (Left Flowers) */}
        <div className="absolute top-0 left-0 w-1/3 h-full pointer-events-none z-20">
          {/* មែកឈើខាងឆ្វេង */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M10,0 Q40,30 20,60 T40,100" fill="none" stroke="#5c4033" strokeWidth="2" />
            <path d="M0,40 Q30,50 10,80" fill="none" stroke="#5c4033" strokeWidth="1.5" />
          </svg>
          {/* ផ្កា (ប្រើប្រាស់រង្វង់ពណ៌ផ្កាឈូក តំណាងឱ្យផ្កា) */}
          <div className="absolute top-[10%] left-[5%] w-16 h-16 bg-pink-300 rounded-full blur-[2px] opacity-90 shadow-inner"></div>
          <div className="absolute top-[20%] left-[15%] w-12 h-12 bg-pink-400 rounded-full blur-[1px] opacity-80"></div>
          <div className="absolute top-[45%] left-[2%] w-20 h-20 bg-pink-200 rounded-full blur-[2px] opacity-90"></div>
          <div className="absolute bottom-[10%] left-[10%] w-24 h-24 bg-pink-300 rounded-full blur-[3px] opacity-80"></div>
        </div>

        {/* ផ្កាខាងស្តាំ (Right Flowers) */}
        <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none z-20">
           {/* មែកឈើខាងស្តាំ */}
           <svg className="absolute top-0 right-0 w-full h-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M90,0 Q60,30 80,60 T60,100" fill="none" stroke="#5c4033" strokeWidth="2" />
            <path d="M100,40 Q70,50 90,80" fill="none" stroke="#5c4033" strokeWidth="1.5" />
          </svg>
          {/* ផ្កា */}
          <div className="absolute top-[15%] right-[5%] w-16 h-16 bg-pink-300 rounded-full blur-[2px] opacity-90 shadow-inner"></div>
          <div className="absolute top-[30%] right-[15%] w-14 h-14 bg-pink-400 rounded-full blur-[1px] opacity-80"></div>
          <div className="absolute top-[50%] right-[2%] w-20 h-20 bg-pink-200 rounded-full blur-[2px] opacity-90"></div>
          <div className="absolute bottom-[15%] right-[10%] w-28 h-28 bg-pink-300 rounded-full blur-[3px] opacity-80"></div>
        </div>

        {/* ស្រទាប់ Overlay សម្រាប់ធ្វើឱ្យរូបមានម្លប់ (Vignette) */}
        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.2)] pointer-events-none z-30"></div>
      </div>
    </div>
  );
};

export default WeddingCard;