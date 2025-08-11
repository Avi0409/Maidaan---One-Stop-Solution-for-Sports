import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, MapPin, Users, Calendar, Music } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SportCard from '@/components/SportCard';
import { useLanguage } from '@/components/LanguageProvider';

// Import sport images
import heroBg from '@/assets/hero-bg.jpg';
import cricketIcon from '@/assets/cricket-icon.jpg';
import footballIcon from '@/assets/football-icon.jpg';
import badmintonIcon from '@/assets/badminton-icon.jpg';
import pickleballIcon from '@/assets/pickleball-icon.jpg';
import squashIcon from '@/assets/squash-icon.jpg';
import tennisIcon from '@/assets/tennis-icon.jpg';

const Index = () => {
  const { t } = useLanguage();

  const sports = [
    {
      sport: 'Cricket',
      image: cricketIcon,
      gradient: 'sport-cricket',
      route: '/sports/cricket',
    },
    {
      sport: 'Football',
      image: footballIcon,
      gradient: 'sport-football',
      route: '/sports/football',
    },
    {
      sport: 'Badminton',
      image: badmintonIcon,
      gradient: 'sport-badminton',
      route: '/sports/badminton',
    },
    {
      sport: 'Pickleball',
      image: pickleballIcon,
      gradient: 'sport-pickleball',
      route: '/sports/pickleball',
    },
    {
      sport: 'Squash',
      image: squashIcon,
      gradient: 'sport-squash',
      route: '/sports/squash',
    },
    {
      sport: 'Tennis',
      image: tennisIcon,
      gradient: 'sport-tennis',
      route: '/sports/tennis',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="Sports action montage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 video-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
          <h1 className="text-hero text-white animate-fade-in">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-in">
            Connect. Book. Play.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <MapPin className="w-5 h-5 text-white" />
              <select className="bg-transparent text-white border-none outline-none">
                <option value="mumbai" className="text-black">Mumbai</option>
                <option value="delhi" className="text-black">Delhi - NCR</option>
              </select>
            </div>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-black neon-border"
              asChild
            >
              <Link to="#sports">
                <Play className="mr-2 w-5 h-5" />
                Choose Your Sport
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section id="sports" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">{t('chooseYourSport')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select from our wide range of sports and find the perfect venue for your game
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sports.map((sport, index) => (
              <div key={sport.sport} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <SportCard {...sport} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">Why Choose Maidaan?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make it easy to find, book, and play at the best sports venues near you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 hover-lift">
              <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold">Find Venues</h3>
              <p className="text-muted-foreground">
                Discover sports venues near you with real-time availability
              </p>
            </div>

            <div className="text-center space-y-4 hover-lift">
              <div className="w-16 h-16 bg-gradient-sport rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold">Book Instantly</h3>
              <p className="text-muted-foreground">
                Reserve your preferred time slots with instant confirmation
              </p>
            </div>

            <div className="text-center space-y-4 hover-lift">
              <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold">Connect Players</h3>
              <p className="text-muted-foreground">
                Find and connect with players in your area for team games
              </p>
            </div>

            <div className="text-center space-y-4 hover-lift">
              <div className="w-16 h-16 bg-gradient-sport rounded-full flex items-center justify-center mx-auto">
                <Music className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold">Curated Playlists</h3>
              <p className="text-muted-foreground">
                Enjoy specially curated Spotify playlists while you play
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-neon">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-display text-background mb-6">Ready to Start Playing?</h2>
          <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
            Join thousands of sports enthusiasts who trust Maidaan for their venue booking needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-4 text-lg"
              asChild
            >
              <Link to="/book-now">
                Book a Venue Now
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg border-background text-background hover:bg-background hover:text-foreground"
              asChild
            >
              <Link to="/find-players">
                Find Players
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
