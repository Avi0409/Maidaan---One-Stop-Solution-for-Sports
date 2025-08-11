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
    listYourSports: 'List Your Venue',
    exploreVenues: 'Choose Your Sport',
    postGameInvite: 'Post Your Game Invite',
    
    // Hero Section
    heroTitle: 'Connect. Book. Play.',
    heroSubtitle: 'Discover nearby venues, book your perfect time slot, and connect with players in your community.',
    getStarted: 'Enter Your Location',
    
    // Sports
    cricket: 'Cricket',
    football: 'Football',
    badminton: 'Badminton',
    pickleball: 'Pickleball',
    squash: 'Squash',
    tennis: 'Tennis',
    chooseYourSport: 'Choose Your Sport',
    
    // Sport Quotes
    cricketQuote: 'Cricket is not just a game, it\'s a passion that unites millions.',
    footballQuote: 'Football is the beautiful game that brings the world together.',
    badmintonQuote: 'Badminton teaches us grace, speed, and precision in every shot.',
    pickleballQuote: 'Pickleball combines fun, fitness, and friendship in perfect harmony.',
    squashQuote: 'Squash is the ultimate test of endurance and mental strength.',
    tennisQuote: 'Tennis is a perfect combination of violent action taking place in an atmosphere of total tranquility.',
    
    // Venues
    pricePerHour: 'per hour',
    available: 'Available',
    amenities: 'Amenities',
    location: 'Location',
    workingHours: 'Working Hours',
    contactInfo: 'Contact Info',
    reviews: 'Reviews',
    shareVenue: 'Share Venue',
    openInMaps: 'Open in Google Maps',
    bookingCart: 'Booking Cart',
    proceedToPayment: 'Proceed to Payment',
    selectSport: 'Select Sport',
    selectDate: 'Select Date',
    selectTime: 'Select Time',
    selectHours: 'Select Hours',
    addToCart: 'Add to Cart',
    
    // Find Players
    postYourInvite: 'Post Your Game Invite',
    joinGame: 'Join Game',
    requestSent: 'Request Sent',
    chat: 'Chat',
    playersNeeded: 'players needed',
    joined: 'joined',
    organizer: 'Organizer',
    skillLevel: 'Skill Level',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    gameDate: 'Game Date',
    gameTime: 'Game Time',
    gameLocation: 'Game Location',
    description: 'Description',
    numberOfPlayers: 'Number of Players',
    notes: 'Notes',
    submit: 'Submit',
    cancel: 'Cancel',
    
    // List Your Sports
    listYourSportsTitle: 'Partner with Maidaan',
    listYourSportsSubtitle: 'Join hundreds of venue owners who trust us to bring players to their facilities.',
    howItWorks: 'How It Works',
    requestDemo: 'Request a Demo',
    whyChooseMaidaan: 'Why Choose Maidaan?',
    ownerTestimonials: 'What Venue Owners Say',
    customerCare: 'Customer Care',
    sendMessage: 'Send Message',
    yourMessage: 'Your message...',
    messageSent: 'Message sent successfully!',
    
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
    followUs: 'Follow Us',
    
    // Common
    viewDetails: 'View Details',
    bookVenue: 'Book Venue',
    findPlayers: 'Find Players',
    close: 'Close',
    loading: 'Loading...',
    error: 'Something went wrong',
    tryAgain: 'Try Again',
    
    // Login/Signup
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    fullName: 'Full Name',
    phoneNumber: 'Phone Number',
    loginToAccount: 'Login to Your Account',
    createAccount: 'Create Your Account',
    dontHaveAccount: 'Don\'t have an account?',
    alreadyHaveAccount: 'Already have an account?',
    forgotPassword: 'Forgot Password?',
    
    // About Us
    aboutUsTitle: 'About Our Team',
    ourLocation: 'Our Location',
    visitUs: 'Visit Us',
    
    // Accessibility
    toggleTheme: 'Toggle theme',
    toggleLanguage: 'Toggle language',
    toggleMenu: 'Toggle menu',
    closeModal: 'Close modal',
    openModal: 'Open modal',
  },
  hi: {
    // Header
    aboutUs: 'हमारे बारे में',
    bookNow: 'अभी बुक करें',
    findPlayersNearby: 'पास के खिलाड़ी खोजें',
    searchVenuesOrSports: 'स्थान या खेल खोजें...',
    listYourSports: 'अपना स्थान सूची करें',
    exploreVenues: 'अपना खेल चुनें',
    postGameInvite: 'अपना गेम निमंत्रण पोस्ट करें',
    
    // Hero Section
    heroTitle: 'जुड़ें। बुक करें। खेलें।',
    heroSubtitle: 'आस-पास के स्थान खोजें, अपना सही समय बुक करें, और अपने समुदाय के खिलाड़ियों से जुड़ें।',
    getStarted: 'अपना स्थान दर्ज करें',
    
    // Sports
    cricket: 'क्रिकेट',
    football: 'फुटबॉल',
    badminton: 'बैडमिंटन',
    pickleball: 'पिकलबॉल',
    squash: 'स्क्वैश',
    tennis: 'टेनिस',
    chooseYourSport: 'अपना खेल चुनें',
    
    // Sport Quotes
    cricketQuote: 'क्रिकेट सिर्फ एक खेल नहीं, यह एक जुनून है जो लाखों लोगों को जोड़ता है।',
    footballQuote: 'फुटबॉल एक सुंदर खेल है जो दुनिया को एक साथ लाता है।',
    badmintonQuote: 'बैडमिंटन हमें हर शॉट में अनुग्रह, गति और सटीकता सिखाता है।',
    pickleballQuote: 'पिकलबॉल मज़े, फिटनेस और दोस्ती को सही तालमेल में जोड़ता है।',
    squashQuote: 'स्क्वैश सहनशीलता और मानसिक शक्ति की परम परीक्षा है।',
    tennisQuote: 'टेनिस पूर्ण शांति के माहौल में हिंसक कार्रवाई का एक सही संयोजन है।',
    
    // Venues
    pricePerHour: 'प्रति घंटा',
    available: 'उपलब्ध',
    amenities: 'सुविधाएं',
    location: 'स्थान',
    workingHours: 'कार्य समय',
    contactInfo: 'संपर्क जानकारी',
    reviews: 'समीक्षाएं',
    shareVenue: 'स्थान साझा करें',
    openInMaps: 'गूगल मैप्स में खोलें',
    bookingCart: 'बुकिंग कार्ट',
    proceedToPayment: 'भुगतान के लिए आगे बढ़ें',
    selectSport: 'खेल चुनें',
    selectDate: 'दिनांक चुनें',
    selectTime: 'समय चुनें',
    selectHours: 'घंटे चुनें',
    addToCart: 'कार्ट में जोड़ें',
    
    // Find Players
    postYourInvite: 'अपना गेम निमंत्रण पोस्ट करें',
    joinGame: 'गेम में शामिल हों',
    requestSent: 'अनुरोध भेजा गया',
    chat: 'चैट',
    playersNeeded: 'खिलाड़ी चाहिए',
    joined: 'शामिल हुए',
    organizer: 'आयोजक',
    skillLevel: 'कौशल स्तर',
    beginner: 'शुरुआती',
    intermediate: 'मध्यम',
    advanced: 'उन्नत',
    gameDate: 'गेम की तारीख',
    gameTime: 'गेम का समय',
    gameLocation: 'गेम का स्थान',
    description: 'विवरण',
    numberOfPlayers: 'खिलाड़ियों की संख्या',
    notes: 'नोट्स',
    submit: 'सबमिट करें',
    cancel: 'रद्द करें',
    
    // List Your Sports
    listYourSportsTitle: 'मैदान के साथ साझेदारी करें',
    listYourSportsSubtitle: 'सैकड़ों स्थान मालिकों में शामिल हों जो अपनी सुविधाओं में खिलाड़ी लाने के लिए हम पर भरोसा करते हैं।',
    howItWorks: 'यह कैसे काम करता है',
    requestDemo: 'डेमो का अनुरोध करें',
    whyChooseMaidaan: 'मैदान क्यों चुनें?',
    ownerTestimonials: 'स्थान मालिकों का कहना है',
    customerCare: 'ग्राहक सेवा',
    sendMessage: 'संदेश भेजें',
    yourMessage: 'आपका संदेश...',
    messageSent: 'संदेश सफलतापूर्वक भेजा गया!',
    
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
    followUs: 'हमें फॉलो करें',
    
    // Common
    viewDetails: 'विवरण देखें',
    bookVenue: 'स्थान बुक करें',
    findPlayers: 'खिलाड़ी खोजें',
    close: 'बंद करें',
    loading: 'लोड हो रहा है...',
    error: 'कुछ गलत हुआ',
    tryAgain: 'फिर कोशिश करें',
    
    // Login/Signup
    email: 'ईमेल',
    password: 'पासवर्ड',
    confirmPassword: 'पासवर्ड की पुष्टि करें',
    fullName: 'पूरा नाम',
    phoneNumber: 'फोन नंबर',
    loginToAccount: 'अपने खाते में लॉगिन करें',
    createAccount: 'अपना खाता बनाएं',
    dontHaveAccount: 'खाता नहीं है?',
    alreadyHaveAccount: 'पहले से खाता है?',
    forgotPassword: 'पासवर्ड भूल गए?',
    
    // About Us
    aboutUsTitle: 'हमारी टीम के बारे में',
    ourLocation: 'हमारा स्थान',
    visitUs: 'हमसे मिलें',
    
    // Accessibility
    toggleTheme: 'थीम टॉगल करें',
    toggleLanguage: 'भाषा टॉगल करें',
    toggleMenu: 'मेनू टॉगल करें',
    closeModal: 'मॉडल बंद करें',
    openModal: 'मॉडल खोलें',
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