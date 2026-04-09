import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.name': 'NovaHeaven',
    'hero.tagline': 'Your peaceful retreat awaits',
    'hero.cta': 'Get Booking Details on WhatsApp',
    
    // About
    'about.title': 'Welcome to Our Home',
    'about.description': 'Located on the outskirts of North Delhi, NovaHeaven offers a modern homestay experience where elegant design meets everyday comfort. Our thoughtfully curated property provides the perfect setting for families seeking a peaceful getaway or hosting memorable private events.',
    'about.highlight1': 'Experience the warmth of authentic Tamil hospitality in our spacious, well-maintained home.',
    'about.highlight2': 'Our beautiful lawn and gazebo create the perfect ambiance for intimate gatherings and celebrations.',
    
    // Highlights
    'highlights.title': 'What Makes Us Special',
    'highlights.accommodation.title': 'Spacious Accommodation',
    'highlights.accommodation.desc': 'Comfortable bedrooms and living areas designed for family comfort',
    'highlights.events.title': 'Event-Friendly Setup',
    'highlights.events.desc': 'Beautiful lawn, gazebo, and pergola perfect for private gatherings',
    'highlights.well.title': 'Historic Water Well',
    'highlights.well.desc': 'A distinctive signature feature that adds character to your stay',
    'highlights.peaceful.title': 'Peaceful Atmosphere',
    'highlights.peaceful.desc': 'Quiet residential surroundings away from city noise',
    
    // Gallery
    'gallery.title': 'Explore Our Property',
    'gallery.subtitle': 'Take a virtual tour through photos and videos',
    
    // Location
    'location.title': 'Find Us',
    'location.address': 'Farmhouse 27, GT Karnal Road, Alipur, North Delhi, Delhi 110036',
    'location.cta': 'Get Directions',
    
    // Contact
    'contact.title': 'Ready to Book?',
    'contact.subtitle': 'Get in touch with us on WhatsApp for availability and pricing',
    'contact.phone': '+91 93635 90700',
    
    // WhatsApp
    'whatsapp.message': 'Hello, I\'d like to get details about availability, pricing, and booking at NovaHeaven.',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.tagline': 'A peaceful retreat in North Delhi',
    'footer.devBy': 'Developed by GRG',
  },
  ta: {
    // Header
    'nav.home': 'முகப்பு',
    'nav.about': 'எங்களைப் பற்றி',
    'nav.gallery': 'படத்தொகுப்பு',
    'nav.location': 'இருப்பிடம்',
    'nav.contact': 'தொடர்பு',
    
    // Hero
    'hero.name': 'நோவாஹீவன்',
    'hero.tagline': 'உங்கள் அமைதியான ஓய்வு காத்திருக்கிறது',
    'hero.cta': 'வாட்ஸ்அப்பில் முன்பதிவு விவரங்களைப் பெறுங்கள்',
    
    // About
    'about.title': 'எங்கள் வீட்டிற்கு வரவேற்கிறோம்',
    'about.description': 'வட டெல்லியின் புறநகர் பகுதியில் அமைந்துள்ள நோவாஹீவன், நவீன வசதிகளும் அழகிய வடிவமைப்பும் இணைந்த தனித்துவமான ஹோம்ஸ்டே அனுபவத்தை வழங்குகிறது. குடும்பங்களுக்கான அமைதியான ஓய்வு மற்றும் நினைவில் நிற்கும் தனியார் நிகழ்வுகளுக்கு இது சிறந்த இடமாகும்.',
    'about.highlight1': 'எங்கள் விசாலமான, நன்கு பராமரிக்கப்படும் வீட்டில் உண்மையான தமிழ் விருந்தோம்பலின் அரவணைப்பை அனுபவியுங்கள்.',
    'about.highlight2': 'எங்கள் அழகான புல்வெளியும் கேஸிபோவும் நெருக்கமான கூட்டங்கள் மற்றும் கொண்டாட்டங்களுக்கு சிறந்த சூழலை உருவாக்குகின்றன.',
    
    // Highlights
    'highlights.title': 'எங்களை சிறப்பாக்குவது என்ன',
    'highlights.accommodation.title': 'விசாலமான தங்குமிடம்',
    'highlights.accommodation.desc': 'குடும்ப வசதிக்காக வடிவமைக்கப்பட்ட வசதியான படுக்கையறைகள்',
    'highlights.events.title': 'நிகழ்வுகளுக்கு ஏற்ற அமைப்பு',
    'highlights.events.desc': 'தனிப்பட்ட கூட்டங்களுக்கு ஏற்ற அழகான புல்வெளி மற்றும் கேஸிபோ',
    'highlights.well.title': 'வரலாற்று கிணறு',
    'highlights.well.desc': 'தனித்துவமான அழகு சேர்க்கும் பாரம்பரிய கிணறு',
    'highlights.peaceful.title': 'அமைதியான சூழல்',
    'highlights.peaceful.desc': 'நகர இரைச்சலிலிருந்து விலகி அமைதியான குடியிருப்பு பகுதி',
    
    // Gallery
    'gallery.title': 'எங்கள் சொத்தை ஆராயுங்கள்',
    'gallery.subtitle': 'புகைப்படங்கள் மற்றும் வீடியோக்கள் மூலம் மெய்நிகர் சுற்றுப்பயணம்',
    
    // Location
    'location.title': 'எங்களைக் கண்டறியுங்கள்',
    'location.address': 'பார்ம்ஹவுஸ் 27, ஜி.டி. கர்னால் சாலை, அலிபூர், வட டெல்லி, டெல்லி 110036',
    'location.cta': 'வழிகளைப் பெறுங்கள்',
    
    // Contact
    'contact.title': 'முன்பதிவு செய்ய தயாரா?',
    'contact.subtitle': 'கிடைப்பது மற்றும் விலை விவரங்களுக்கு வாட்ஸ்அப்பில் எங்களை தொடர்பு கொள்ளுங்கள்',
    'contact.phone': '+91 93635 90700',
    
    // WhatsApp
    'whatsapp.message': 'வணக்கம், நோவாஹீவனில் தங்கும் வசதி மற்றும் முன்பதிவு விவரங்களை அறிய விரும்புகிறேன்.',
    
    // Footer
    'footer.rights': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை',
    'footer.tagline': 'வட டெல்லியில் ஒரு அமைதியான ஓய்வு இடம்',
    'footer.devBy': 'GRG நிறுவனத்தால் உருவாக்கப்பட்டது',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = sessionStorage.getItem('novaheaven-lang');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    sessionStorage.setItem('novaheaven-lang', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
