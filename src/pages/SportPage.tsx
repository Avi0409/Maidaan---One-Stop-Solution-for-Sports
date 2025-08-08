import { useParams } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Calendar, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';

const SportPage = () => {
  const { sport } = useParams<{ sport: string }>();
  const { t } = useLanguage();

  const sportData = {
    cricket: {
      name: 'Cricket',
      description: 'Experience the thrill of cricket at premium venues across the city.',
      color: 'sport-cricket',
      venues: [
        {
          id: 1,
          name: 'Mumbai Cricket Academy',
          location: 'Oval Maidan, Mumbai',
          price: 2500,
          rating: 4.8,
          image: '/api/placeholder/400/250',
          description: 'Professional cricket ground with international standards'
        },
        {
          id: 2,
          name: 'Sports Club Elite',
          location: 'Shivaji Park, Mumbai',
          price: 3000,
          rating: 4.9,
          image: '/api/placeholder/400/250',
          description: 'Premium cricket facility with coaching available'
        }
      ]
    },
    football: {
      name: 'Football',
      description: 'Play the beautiful game at top-notch football turfs and stadiums.',
      color: 'sport-football',
      venues: [
        {
          id: 3,
          name: 'Goal Masters FC',
          location: 'Andheri East, Mumbai',
          price: 3500,
          rating: 4.7,
          image: '/api/placeholder/400/250',
          description: 'FIFA standard football turf with professional lighting'
        }
      ]
    },
    badminton: {
      name: 'Badminton',
      description: 'Perfect your shuttlecock skills at our premium badminton courts.',
      color: 'sport-badminton',
      venues: [
        {
          id: 4,
          name: 'Shuttle Point Academy',
          location: 'Powai, Mumbai',
          price: 800,
          rating: 4.6,
          image: '/api/placeholder/400/250',
          description: 'Air-conditioned courts with wooden flooring'
        }
      ]
    }
  };

  const currentSport = sport ? sportData[sport as keyof typeof sportData] : null;

  if (!currentSport) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 text-center">
          <h1 className="text-4xl font-bold">Sport not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className={`pt-24 pb-16 px-4 bg-${currentSport.color}`}>
        <div className="container mx-auto text-center">
          <h1 className="text-display text-background mb-6">{currentSport.name}</h1>
          <p className="text-xl text-background/90 max-w-2xl mx-auto">
            {currentSport.description}
          </p>
        </div>
      </section>

      {/* Venues */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-heading mb-4">Available Venues</h2>
            <p className="text-muted-foreground">
              Choose from our carefully selected {currentSport.name.toLowerCase()} venues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentSport.venues.map((venue, index) => (
              <Card 
                key={venue.id} 
                className="overflow-hidden hover-lift neon-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48">
                  <img 
                    src={venue.image} 
                    alt={venue.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background text-foreground">
                      ₹{venue.price}/hour
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{venue.name}</h3>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{venue.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-medium">{venue.rating}</span>
                      <span className="text-muted-foreground text-sm">(50+ reviews)</span>
                    </div>

                    <p className="text-sm text-muted-foreground">{venue.description}</p>

                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1 hover-glow">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Users className="w-4 h-4 mr-2" />
                        Find Players
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className={`w-16 h-16 bg-${currentSport.color} rounded-full flex items-center justify-center mx-auto`}>
                <Trophy className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">
                All venues are verified and maintained to the highest standards
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className={`w-16 h-16 bg-${currentSport.color} rounded-full flex items-center justify-center mx-auto`}>
                <Clock className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold">Flexible Timing</h3>
              <p className="text-muted-foreground">
                Book slots that fit your schedule with real-time availability
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className={`w-16 h-16 bg-${currentSport.color} rounded-full flex items-center justify-center mx-auto`}>
                <Users className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="text-muted-foreground">
                Connect with fellow {currentSport.name.toLowerCase()} enthusiasts
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SportPage;