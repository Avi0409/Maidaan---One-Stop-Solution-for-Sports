import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    aboutUs: 'About Us',
    bookNow: 'Book Now',
    findPlayersNearby: 'Find Players Nearby',
    searchVenuesOrSports: 'Search venues or sports...',
    
    // Hero Section
    heroTitle: 'Connect. Play. Win.',
    heroSubtitle: 'Discover nearby venues, book your perfect time slot, and connect with players in your community.',
    getStarted: 'Get Started Today',
    exploreVenues: 'Explore Venues',
    
    // Sports
    cricket: 'Cricket',
    football: 'Football',
    badminton: 'Badminton',
    pickleball: 'Pickleball',
    squash: 'Squash',
    tennis: 'Tennis',
    
    // Sport Quotes
    cricketQuote: 'Cricket is not just a game, it\'s a passion that unites millions.',
    footballQuote: 'Football is the beautiful game that brings the world together.',
    badmintonQuote: 'Badminton teaches us grace, speed, and precision in every shot.',
    pickleballQuote: 'Pickleball combines fun, fitness, and friendship in perfect harmony.',
    squashQuote: 'Squash is the ultimate test of endurance and mental strength.',
    tennisQuote: 'Tennis is a perfect combination of violent action taking place in an atmosphere of total tranquility.',
    
    // Footer
    footerDescription: 'Your premier destination for booking sports venues and connecting with fellow athletes.',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    account: 'Account',
    login: 'Login',
    signUp: 'Sign Up',
    allRightsReserved: 'All rights reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    venues: 'Venues',
    
    // Common
    viewDetails: 'View Details',
    bookVenue: 'Book Venue',
    findPlayers: 'Find Players',
  },
  hi: {
    // Header
    aboutUs: 'हमारे बारे में',
    bookNow: 'अभी बुक करें',
    findPlayersNearby: 'पास के खिलाड़ी खोजें',
    searchVenuesOrSports: 'स्थान या खेल खोजें...',
    
    // Hero Section
    heroTitle: 'जुड़ें। खेलें। जीतें।',
    heroSubtitle: 'आस-पास के स्थान खोजें, अपना सही समय बुक करें, और अपने समुदाय के खिलाड़ियों से जुड़ें।',
    getStarted: 'आज ही शुरू करें',
    exploreVenues: 'स्थान देखें',
    
    // Sports
    cricket: 'क्रिकेट',
    football: 'फुटबॉल',
    badminton: 'बैडमिंटन',
    pickleball: 'पिकलबॉल',
    squash: 'स्क्वैश',
    tennis: 'टेनिस',
    
    // Sport Quotes
    cricketQuote: 'क्रिकेट सिर्फ एक खेल नहीं, यह एक जुनून है जो लाखों लोगों को जोड़ता है।',
    footballQuote: 'फुटबॉल एक सुंदर खेल है जो दुनिया को एक साथ लाता है।',
    badmintonQuote: 'बैडमिंटन हमें हर शॉट में अनुग्रह, गति और सटीकता सिखाता है।',
    pickleballQuote: 'पिकलबॉल मज़े, फिटनेस और दोस्ती को सही तालमेल में जोड़ता है।',
    squashQuote: 'स्क्वैश सहनशीलता और मानसिक शक्ति की परम परीक्षा है।',
    tennisQuote: 'टेनिस पूर्ण शांति के माहौल में हिंसक कार्रवाई का एक सही संयोजन है।',
    
    // Footer
    footerDescription: 'खेल स्थान बुक करने और साथी एथलीटों से जुड़ने के लिए आपका प्रमुख गंतव्य।',
    quickLinks: 'त्वरित लिंक',
    contactUs: 'संपर्क करें',
    account: 'खाता',
    login: 'लॉगिन',
    signUp: 'साइन अप',
    allRightsReserved: 'सभी अधिकार सुरक्षित',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfService: 'सेवा की शर्तें',
    venues: 'स्थान',
    
    // Common
    viewDetails: 'विवरण देखें',
    bookVenue: 'स्थान बुक करें',
    findPlayers: 'खिलाड़ी खोजें',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}