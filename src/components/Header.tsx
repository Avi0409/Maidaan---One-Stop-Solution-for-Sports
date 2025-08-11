import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Globe,
  MapPin,
  Users,
  Calendar,
  Plus,
  LogIn,
  UserPlus,
  Building
} from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { useLanguage } from '@/components/LanguageProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-neon rounded-lg flex items-center justify-center font-bold text-background">
              M
            </div>
            <span className="text-xl font-bold neon-glow">Maidaan</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/about" 
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Users className="w-4 h-4" />
              <span>{t('aboutUs')}</span>
            </Link>
            <Link 
              to="/venues" 
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>{t('exploreVenues')}</span>
            </Link>
            <Link 
              to="/venue-registration" 
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Building className="w-4 h-4" />
              <span>List Your Venue</span>
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center space-x-1"
              asChild
            >
              <Link to="/find-players">
                <Plus className="w-4 h-4" />
                <span>{t('postGameInvite')}</span>
              </Link>
            </Button>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center space-x-2 max-w-md mx-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder={t('searchVenuesOrSports')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 neon-border bg-card/50"
              />
            </div>
          </form>

          {/* User Actions & Controls */}
          <div className="flex items-center space-x-2">
            {/* Login/Signup for Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-1 hover-glow"
                asChild
              >
                <Link to="/login">
                  <LogIn className="w-4 h-4" />
                  <span>{t('login')}</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-1 hover-glow"
                asChild
              >
                <Link to="/signup">
                  <UserPlus className="w-4 h-4" />
                  <span>{t('signUp')}</span>
                </Link>
              </Button>
            </div>

            {/* Theme & Language Controls */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover-glow"
              aria-label={t('toggleTheme')}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hover-glow"
              aria-label={t('toggleLanguage')}
            >
              <Globe className="w-4 h-4" />
              <span className="ml-1 text-xs">{language.toUpperCase()}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t('toggleMenu')}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="text"
                    placeholder={t('searchVenuesOrSports')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </form>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-2">
                <Link 
                  to="/about" 
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-card-hover transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Users className="w-4 h-4" />
                  <span>{t('aboutUs')}</span>
                </Link>
                <Link 
                  to="/venues" 
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-card-hover transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MapPin className="w-4 h-4" />
                  <span>{t('exploreVenues')}</span>
                </Link>
                <Link 
                  to="/venue-registration" 
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-card-hover transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Building className="w-4 h-4" />
                  <span>List Your Venue</span>
                </Link>
                <Link 
                  to="/find-players" 
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-card-hover transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Plus className="w-4 h-4" />
                  <span>{t('postGameInvite')}</span>
                </Link>
                
                {/* Mobile Login/Signup */}
                <div className="border-t border-border pt-2 mt-2">
                  <Link 
                    to="/login" 
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-card-hover transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LogIn className="w-4 h-4" />
                    <span>{t('login')}</span>
                  </Link>
                  <Link 
                    to="/signup" 
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-card-hover transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>{t('signUp')}</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;