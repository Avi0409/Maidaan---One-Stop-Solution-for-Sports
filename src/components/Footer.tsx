import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  LogIn,
  UserPlus
} from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-neon rounded-lg flex items-center justify-center font-bold text-background">
                M
              </div>
              <span className="text-xl font-bold neon-glow">Maidaan</span>
            </div>
            <p className="text-muted-foreground">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/maidaan_sports" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/maidaan_sports" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/maidaan_sports" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@maidaan_sports" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('quickLinks')}</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t('aboutUs')}
              </Link>
              <Link 
                to="/book-now" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t('bookNow')}
              </Link>
              <Link 
                to="/find-players" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t('findPlayersNearby')}
              </Link>
              <Link 
                to="/venues" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t('exploreVenues')}
              </Link>
              <Link 
                to="/list-your-sports" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t('listYourSports')}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('contactUs')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@maidaan.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 7869606696</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Account */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('account')}</h3>
            <div className="space-y-3">
              <Link 
                to="/login" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <LogIn className="w-4 h-4" />
                <span>{t('login')}</span>
              </Link>
              <Link 
                to="/signup" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <UserPlus className="w-4 h-4" />
                <span>{t('signUp')}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Maidaan. {t('allRightsReserved')}.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              to="/privacy" 
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              {t('privacyPolicy')}
            </Link>
            <Link 
              to="/terms" 
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              {t('termsOfService')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;