// src/data/i18n.js
/**
 * BILINGUAL TRANSLATIONS & KHMER FORMATTERS (ភាសាខ្មែរ និងអង់គ្លេស)
 * Khmer is default ("Khmer first").
 */

// Khmer Numerals Map (លេខខ្មែរ)
const KHMER_DIGITS = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];

export const toKhmerNumerals = (num) => {
  if (num === null || num === undefined) return '';
  return String(num).replace(/[0-9]/g, (digit) => KHMER_DIGITS[parseInt(digit, 10)]);
};

export const I18N = {
  km: {
    // Envelope Screen
    envelopeTitle: "សិរីសួស្តីអាពាហ៍ពិពាហ៍",
    envelopeSub: "The Wedding Invitation",
    tapToOpen: "ចុចលើត្រាបិទដើម្បីបើកលិខិតអញ្ជើញ",
    openByHand: "បើកលិខិតអញ្ជើញ",

    // Cover & Hero
    heroBlessing: "សិរីសួស្តីអាពាហ៍ពិពាហ៍",
    invitationPledge: "សូមគោរពអញ្ជើញ",
    togetherWith: "និង",
    dateHeader: {
      day: "ថ្ងៃ",
      date: "ទី",
      month: "ខែ",
      year: "ឆ្នាំ"
    },
    scrollDown: "រំកិលចុះក្រោមដើម្បីអានព័ត៌មាន",

    // Formal Invitation
    formalTitle: "សិរីមង្គលអាពាហ៍ពិពាហ៍",
    formalHeadingGroomParents: "មាតាបិតាកូនកំលោះ",
    formalHeadingBrideParents: "មាតាបិតាកូនក្រមុំ",
    formalTextPrefix: "យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយសក្នុងពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍ កូនប្រុស កូនស្រី របស់យើងខ្ញុំ",
    formalBlessingClosing: "ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្តី ជ័យមង្គល វិបុលសុខ មហាប្រសើរ ដល់គូស្វាមីភរិយាថ្មី។",

    // The Couple Section
    theCoupleTitle: "គូស្វាមីភរិយា",
    groomRole: "កូនកំលោះ",
    brideRole: "កូនក្រមុំ",

    // Countdown Section
    countdownTitle: "រាប់ថយក្រោយដល់ថ្ងៃមង្គល",
    countdownMarquee: "សិរីសួស្តី ជ័យមង្គល វិបុលសុខ មហាប្រសើរ ភព្វព្រេងសំណាងល្អ អាយុយឺនយូរ ស្រឡាញ់គ្នារហូតដល់ចាស់កោងខ្នង",
    timeUnits: {
      days: "ថ្ងៃ",
      hours: "ម៉ោង",
      minutes: "នាទី",
      seconds: "វិនាទី"
    },

    // Programme Section
    programmeTitle: "កម្មវិធី",
    programmeSubtitle: "កាលវិភាគនៃពិធីមង្គលការតាមប្រពៃណីខ្មែរ",

    // Love Story
    loveStoryTitle: "ដំណើរនៃសេចក្តីស្រឡាញ់",
    loveStorySubtitle: "ពីការជួបគ្នាដំបូង រហូតដល់ថ្ងៃសន្យាជាគូជីវិត",

    // Candlelight
    candlelightTitle: "រាត្រីគោមបណ្តែតទឹក",
    candlelightHint: "ប៉ះលើផ្ទៃទឹកដើម្បីបណ្តែតផ្កាឈូក និងប្រសិទ្ធពរជ័យ",

    // Gallery
    galleryTitle: "កម្រងរូបភាពអនុស្សាវរីយ៍",
    gallerySubtitle: "ស្នាមញញឹម និងពេលវេលាដ៏មានតម្លៃបំផុត",
    viewAllPhotos: "មើលរូបភាពទាំងអស់",
    closeGallery: "បិទ",

    // Venue
    venueTitle: "ទីតាំងប្រារព្ធពិធី",
    openGoogleMaps: "បើកក្នុង Google Maps",
    saveToCalendar: "រក្សាទុកក្នុងប្រតិទិន (.ics)",

    // Gift Section
    giftTitle: "ចំណងដៃអាពាហ៍ពិពាហ៍",
    giftSubtitle: "ប្រសិនបើលោកអ្នកមានបំណងជូនពរជាចំណងដៃតាមរយៈគណនីធនាគារ",
    copyNumber: "ចម្លងលេខគណនី",
    copied: "បានចម្លងរួចរាល់ ✓",
    saveQr: "រក្សាទុករូបភាព QR",

    // Thank You Section
    thankYouTitle: "សូមអរគុណ",
    thankYouMessage: "វត្តមានដ៏ឧត្តុង្គឧត្តមរបស់លោកអ្នក គឺជាកិត្តិយស និងជាសេចក្តីរីករាយដ៏ជ្រាលជ្រៅបំផុតសម្រាប់យើងខ្ញុំ និងក្រុមគ្រួសារទាំងសងខាង។",
    shareWith: "ចែករំលែកលិខិតអញ្ជើញនេះ",
    shareTelegram: "ផ្ញើតាម Telegram",
    shareMessenger: "ផ្ញើតាម Messenger",
    shareFacebook: "ចែករំលែកលើ Facebook",
    copyLink: "ចម្លងតំណភ្ជាប់",
    linkCopied: "បានចម្លងតំណភ្ជាប់!",

    // Top Bar & Controls
    languageToggle: "EN",
    audioOn: "បើកសំឡេង",
    audioOff: "បិទសំឡេង",
    footerInspired: "Design inspired by Someth Phay · somethphay.me"
  },

  en: {
    // Envelope Screen
    envelopeTitle: "The Wedding Invitation",
    envelopeSub: "Royal Ceremony & Reception",
    tapToOpen: "Tap the gold wax seal to open the invitation",
    openByHand: "Open Invitation",

    // Cover & Hero
    heroBlessing: "The Wedding Invitation",
    invitationPledge: "Cordially Invite You",
    togetherWith: "Together with",
    dateHeader: {
      day: "Day",
      date: "Date",
      month: "Month",
      year: "Year"
    },
    scrollDown: "Scroll down to view details",

    // Formal Invitation
    formalTitle: "The Holy Matrimony",
    formalHeadingGroomParents: "Groom's Parents",
    formalHeadingBrideParents: "Bride's Parents",
    formalTextPrefix: "We have the distinct honor of cordially inviting your esteemed presence as our honored guests to celebrate the sacred union and wedding ceremony of our son and daughter",
    formalBlessingClosing: "To bestow auspicious blessings, enduring joy, good health, and eternal prosperity upon the newlyweds.",

    // The Couple Section
    theCoupleTitle: "The Bride & Groom",
    groomRole: "Groom",
    brideRole: "Bride",

    // Countdown Section
    countdownTitle: "Counting Down to Forever",
    countdownMarquee: "Eternal Love • Endless Joy • Everlasting Prosperity • Blessed Union • Growing Old Together",
    timeUnits: {
      days: "Days",
      hours: "Hours",
      minutes: "Mins",
      seconds: "Secs"
    },

    // Programme Section
    programmeTitle: "Programme",
    programmeSubtitle: "Ceremonial Schedule of Sacred Cambodian Traditions",

    // Love Story
    loveStoryTitle: "Our Love Story",
    loveStorySubtitle: "From our first serendipitous glance to forever",

    // Candlelight
    candlelightTitle: "Candlelight & Water Lanterns",
    candlelightHint: "Touch the water to send ripples and float a lotus lantern",

    // Gallery
    galleryTitle: "Pre-Wedding Gallery",
    gallerySubtitle: "Treasured moments captured before our big day",
    viewAllPhotos: "View All Photos",
    closeGallery: "Close",

    // Venue
    venueTitle: "Celebration Venue",
    openGoogleMaps: "Open in Google Maps",
    saveToCalendar: "Add to Calendar (.ics)",

    // Gift Section
    giftTitle: "Wedding Gift (Chhang Dai)",
    giftSubtitle: "Should you wish to honor the newlyweds with a monetary blessing",
    copyNumber: "Copy Account Number",
    copied: "Copied to Clipboard ✓",
    saveQr: "Save QR Code",

    // Thank You Section
    thankYouTitle: "Thank You",
    thankYouMessage: "Your presence, love, and heartfelt prayers are the greatest gifts to us as we begin this new journey together.",
    shareWith: "Share This Invitation",
    shareTelegram: "Share via Telegram",
    shareMessenger: "Share via Messenger",
    shareFacebook: "Share to Facebook",
    copyLink: "Copy Link",
    linkCopied: "Link copied to clipboard!",

    // Top Bar & Controls
    languageToggle: "ខ្មែរ",
    audioOn: "Sound On",
    audioOff: "Mute",
    footerInspired: "Design inspired by Someth Phay · somethphay.me"
  }
};

