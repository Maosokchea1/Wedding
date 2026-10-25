// src/data/wedding.js
/**
 * WEDDING DETAILS DATA FILE (ឯកសារព័ត៌មានលម្អិតអាពាហ៍ពិពាហ៍)
 * All couple details, schedule, venue, and media are centralized here.
 * You can update any value inside [ ] with your real event information.
 */

export const WEDDING_DATA = {
  // Groom's Information (ព័ត៌មានកូនកំលោះ)
  groom: {
    khmerName: "រិទ្ធី សុវណ្ណ",
    englishName: "Rithy Sovann",
    shortKhmer: "រិទ្ធី",
    shortEnglish: "Rithy",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qnD9XURf_8U6Cst9XxgkU3dkv0Ab0dpswaDn-82xH_jh6R8cm-N3Xteu&s=10",
    parents: {
      father: "លោក ហេង រិទ្ធី",
      mother: "និងលោកស្រី គង់ សុខា"
    }
  },

  // Bride's Information (ព័ត៌មានកូនក្រមុំ)
  bride: {
    khmerName: "ចរិយា ទេវី",
    englishName: "Chariya Davy",
    shortKhmer: "ចរិយា",
    shortEnglish: "Chariya",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qnD9XURf_8U6Cst9XxgkU3dkv0Ab0dpswaDn-82xH_jh6R8cm-N3Xteu&s=10",
    parents: {
      father: "លោក ជា ចរិយា",
      mother: "និងលោកស្រី អ៊ុំ សុវណ្ណារី"
    }
  },

  // Event Date & Lunar Date (កាលបរិច្ឆេទ និងថ្ងៃខែចន្ទគតិ)
  event: {
    isoDate: "2026-11-28T07:00:00+07:00",
    dayNameKm: "ថ្ងៃសៅរ៍",
    dayKm: "២៨",
    monthKm: "វិច្ឆិកា",
    yearKm: "២០២៦",
    dayEn: "28",
    monthEn: "November",
    yearEn: "2026",
    lunarDateKm: "ត្រូវនឹង ថ្ងៃ១៥កើត ពេញបូណ៌មី ខែកត្តិក ឆ្នាំរោង អដ្ឋស័ក ព.ស.២៥៧០",
    lunarDateEn: "15th Waxing Moon of Kattika, Year of the Dragon, B.E. 2570"
  },

  // Venue & Location (ទីកន្លែងប្រារព្ធពិធី)
  venue: {
    nameKhmer: "សណ្ឋាគារ ហ្គាដិន ស៊ីធី (Garden City Hotel)",
    nameEnglish: "Garden City Hotel, Grand Ballroom",
    addressKhmer: "ផ្លូវលីយ៉ុងផាត់ ភូមិព្រែកតារ័ត្ន សង្កាត់ព្រែកតាសេក ខណ្ឌជ្រោយចង្វារ រាជធានីភ្នំពេញ",
    addressEnglish: "Ly Yong Phat Blvd, Prek Ta Sek, Chroy Changvar, Phnom Penh",
    latitude: 11.6666,
    longitude: 104.9166,
    googleMapsUrl: "https://maps.google.com/?q=Garden+City+Hotel+Phnom+Penh",
    googleMapsEmbed: "https://maps.google.com/maps?q=11.6666,104.9166&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  // Ceremony Programme (កម្មវិធីបុណ្យ និងពេលវេលា)
  programme: [
    {
      time: "០៦:៣០ ព្រឹក",
      timeEn: "06:30 AM",
      titleKm: "ពិធីហែជំនូន និងជួបជុំភ្ញៀវកិត្តិយស",
      titleEn: "Groom's Procession & Welcome Gathering",
      descKm: "ពិធីហែផ្លែឈើ និងជំនូនជូនមាតាបិតាខាងស្រី",
      descEn: "Traditional fruit procession and dowry presentation"
    },
    {
      time: "០៨:០០ ព្រឹក",
      timeEn: "08:00 AM",
      titleKm: "ពិធីកាត់សក់បង្កក់សិរី",
      titleEn: "Hair-Cutting Blessing Ceremony (Gaat Sahk)",
      descKm: "កាត់សក់ដើម្បីបណ្តេញឧបទ្រពចង្រៃ និងប្រសិទ្ធពរជ័យ",
      descEn: "Cleansing ritual and blessings for eternal bliss"
    },
    {
      time: "១០:០០ ព្រឹក",
      timeEn: "10:00 AM",
      titleKm: "ពិធីសំពះផ្ទឹម និងចងដៃ",
      titleEn: "Tying the Knot (Sompeas Phtem)",
      descKm: "ពិធីបង្វិលពពិល និងចងអំបោះក្រហមប្រសិទ្ធពរជ័យ",
      descEn: "Passing the sacred popil candles and wrist-tying blessing"
    },
    {
      time: "០៥:០០ ល្ងាច",
      timeEn: "05:00 PM",
      titleKm: "ពិធីទទួលភ្ញៀវ និងពិសាភោជនាហារ",
      titleEn: "Evening Reception & Wedding Dinner",
      descKm: "ពិសាភោជនាហារ និងរាំលេងកម្សាន្តអបអរសាទរគូស្វាមីភរិយាថ្មី",
      descEn: "Celebratory feast, toasts, and dancing"
    }
  ],

  // Love Story Milestones (ដំណើរនៃសេចក្តីស្រឡាញ់)
  loveStory: [
    {
      year: "២០២១",
      yearEn: "2021",
      titleKm: "ថ្ងៃដំបូងដែលបានជួបគ្នា",
      titleEn: "The First Meeting",
      captionKm: "និស្ស័យបាននាំផ្លូវឱ្យយើងជួបគ្នាដោយមិនបានព្រាងទុក",
      captionEn: "Destiny guided our paths to cross unexpectedly",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJvgyEKbVP4PEz18ZIeBU-_fRxWd74VxzHTiIesEX3ZBSqMfVv2IPw0M&s=10"
    },
    {
      year: "២០២៣",
      yearEn: "2023",
      titleKm: "ពាក្យសន្យាក្រោមពន្លឺព្រះចន្ទ",
      titleEn: "A Promise Under the Stars",
      captionKm: "ចាប់ដៃគ្នាកាត់ឧបសគ្គ ដោយក្តីស្រឡាញ់ និងការយោគយល់",
      captionEn: "Walking hand in hand through every season of life",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJvgyEKbVP4PEz18ZIeBU-_fRxWd74VxzHTiIesEX3ZBSqMfVv2IPw0M&s=10"
    },
    {
      year: "២០២៦",
      yearEn: "2026",
      titleKm: "ថ្ងៃដែលសេចក្តីស្រឡាញ់ពេញបរិបូរណ៍",
      titleEn: "Forever Begins Today",
      captionKm: "រួមចិត្ត រួមកាយ ជាគូជីវិតរហូតតរៀងទៅ",
      captionEn: "Two souls united together forever",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJvgyEKbVP4PEz18ZIeBU-_fRxWd74VxzHTiIesEX3ZBSqMfVv2IPw0M&s=10"
    }
  ],

  // Pre-wedding Photos Gallery (កម្រងរូបភាពអនុស្សាវរីយ៍)
  gallery: [
    {
      id: 1,
      title: "Sweet Embrace",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJvgyEKbVP4PEz18ZIeBU-_fRxWd74VxzHTiIesEX3ZBSqMfVv2IPw0M&s=10",
      span: "row-span-2 col-span-1"
    },
    {
      id: 2,
      title: "Royal Romance",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJvgyEKbVP4PEz18ZIeBU-_fRxWd74VxzHTiIesEX3ZBSqMfVv2IPw0M&s=10",
      span: "row-span-1 col-span-1"
    },
    {
      id: 3,
      title: "Golden Hour Smile",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJvgyEKbVP4PEz18ZIeBU-_fRxWd74VxzHTiIesEX3ZBSqMfVv2IPw0M&s=10",
      span: "row-span-1 col-span-1"
    },
    {
      id: 4,
      title: "Everlasting Promise",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJvgyEKbVP4PEz18ZIeBU-_fRxWd74VxzHTiIesEX3ZBSqMfVv2IPw0M&s=10",
      span: "row-span-2 col-span-1"
    },
    {
      id: 5,
      title: "Traditional Grace",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJvgyEKbVP4PEz18ZIeBU-_fRxWd74VxzHTiIesEX3ZBSqMfVv2IPw0M&s=10",
      span: "row-span-1 col-span-1"
    },
    {
      id: 6,
      title: "Warm Embrace",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJvgyEKbVP4PEz18ZIeBU-_fRxWd74VxzHTiIesEX3ZBSqMfVv2IPw0M&s=10",
      span: "row-span-1 col-span-1"
    }
  ],

  // Digital Gifts KHQR (ចំណងដៃឌីជីថល)
  gifts: [
    {
      bankName: "ABA Bank",
      accountName: "RITHY SOVANN",
      accountNumber: "001 234 567",
      currency: "USD / KHR",
      qrCodeImage: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://link.payway.com.kh/aba?id=001234567"
    },
    {
      bankName: "ACLEDA Bank",
      accountName: "CHARIYA DAVY",
      accountNumber: "1234-5678-9012-34",
      currency: "USD / KHR",
      qrCodeImage: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://acledabank.com.kh/qr?acc=123456789012"
    }
  ],

  // Audio / Music (បទចម្រៀងមង្គលការ)
  music: {
    title: "ភ្ជាប់និស្ស័យ | OLICA (Speed Up)",
    artist: "OLICA",
    youtubeId: "Mn_qLC7_ueA",
    youtubeUrl: "https://youtu.be/Mn_qLC7_ueA?si=GRBcaqTlPPyRMn5l",
    src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-114281.mp3"
  },

  // Color Palette Theme - Soft Light Pink & Gold (Pink ស្ដើង + មាស)
  theme: {
    paper: "#ebd0d7",        // Luxury soft blush pink paper (Pink ស្ដើង)
    pocket: "#e2c0c8",       // Petal pink folded pocket
    cream: "#fffdf9",        // Warm ivory cream inner card stock
    goldGradient: "linear-gradient(135deg, #c59b27 0%, #fff7ce 26%, #d4af37 50%, #fff9d8 74%, #a4781d 100%)",
    roseGoldGradient: "linear-gradient(135deg, #d99879 0%, #fbe2d5 30%, #c57f62 60%, #f7d0be 85%, #aa6245 100%)",
    darkSection: "#140a0f"   // Deep velvet rosewood for photo contrast
  }
};

