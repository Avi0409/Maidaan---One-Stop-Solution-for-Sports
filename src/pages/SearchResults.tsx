import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Star, Users, Calendar, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';

// Import backdrop images
import cricketBackdrop from '@/assets/cricket-venue-backdrop.jpg';
import footballBackdrop from '@/assets/football-venue-backdrop.jpg';
import badmintonBackdrop from '@/assets/badminton-venue-backdrop.jpg';
import tennisBackdrop from '@/assets/tennis-venue-backdrop.jpg';
import squashBackdrop from '@/assets/squash-venue-backdrop.jpg';
import pickleballBackdrop from '@/assets/pickleball-venue-backdrop.jpg';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  const searchQuery = searchParams.get('q') || '';
  
  const venues = [
    {
      id: 1,
      name: 'Mumbai Cricket Ground',
      location: 'Andheri, Mumbai',
      sport: ['cricket'],
      image: cricketBackdrop,
      rating: 4.8,
      price: '₹800/hour',
      availability: 'Available today',
      amenities: ['Parking', 'Changing Room', 'Equipment', 'Refreshments'],
      workingHours: '6:00 AM - 10:00 PM',
    },
    {
      id: 2,
      name: 'Elite Football Arena',
      location: 'Bandra, Mumbai',
      sport: ['football'],
      image: footballBackdrop,
      rating: 4.7,
      price: '₹1200/hour',
      availability: 'Available today',
      amenities: ['Parking', 'Changing Room', 'Floodlights', 'Refreshments'],
      workingHours: '6:00 AM - 11:00 PM',
    },
    {
      id: 3,
      name: 'Ace Badminton Courts',
      location: 'Powai, Mumbai',
      sport: ['badminton'],
      image: badmintonBackdrop,
      rating: 4.9,
      price: '₹600/hour',
      availability: 'Available today',
      amenities: ['AC', 'Parking', 'Equipment Rental', 'Coaching'],
      workingHours: '5:00 AM - 11:00 PM',
    },
    {
      id: 4,
      name: 'Tennis Excellence Club',
      location: 'Juhu, Mumbai',
      sport: ['tennis'],
      image: tennisBackdrop,
      rating: 4.6,
      price: '₹900/hour',
      availability: 'Available tomorrow',
      amenities: ['Parking', 'Pro Shop', 'Coaching', 'Refreshments'],
      workingHours: '6:00 AM - 10:00 PM',
    },
    {
      id: 5,
      name: 'Urban Squash Complex',
      location: 'Lower Parel, Mumbai',
      sport: ['squash'],
      image: squashBackdrop,
      rating: 4.5,
      price: '₹700/hour',
      availability: 'Available today',
      amenities: ['AC', 'Parking', 'Equipment', 'Coaching'],
      workingHours: '6:00 AM - 11:00 PM',
    },
    {
      id: 6,
      name: 'Pickleball Paradise',
      location: 'Worli, Mumbai',
      sport: ['pickleball'],
      image: pickleballBackdrop,
      rating: 4.7,
      price: '₹500/hour',
      availability: 'Available today',
      amenities: ['Parking', 'Equipment', 'Coaching', 'Refreshments'],
      workingHours: '6:00 AM - 10:00 PM',
    }
  ];

  // Filter venues based on search query
  const filteredVenues = venues.filter(venue => {
    const query = searchQuery.toLowerCase();
    return venue.sport.some(sport => sport.toLowerCase().includes(query)) ||
           venue.name.toLowerCase().includes(query) ||
           venue.location.toLowerCase().includes(query);
  });

  const getSportColor = (sport: string) => {
    const colors = {
      cricket: 'bg-sport-cricket',
      football: 'bg-sport-football', 
      badminton: 'bg-sport-badminton',
      tennis: 'bg-sport-tennis',
      squash: 'bg-sport-squash',
      pickleball: 'bg-sport-pickleball'
    };
    return colors[sport as keyof typeof colors] || 'bg-primary';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Search Results for "{searchQuery}"
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {filteredVenues.length} venue{filteredVenues.length !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredVenues.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVenues.map((venue) => (
                <Card key={venue.id} className="overflow-hidden hover-lift transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={venue.image} 
                      alt={venue.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      {venue.sport.map((sport, index) => (
                        <Badge 
                          key={index}
                          className={`${getSportColor(sport)} text-white mb-1 mr-1`}
                        >
                          {sport.charAt(0).toUpperCase() + sport.slice(1)}
                        </Badge>
                      ))}
                    </div>
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{venue.rating}</span>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-start justify-between">
                      <span className="text-lg">{venue.name}</span>
                      <span className="text-lg font-bold text-primary">{venue.price}</span>
                    </CardTitle>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{venue.location}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{venue.workingHours}</span>
                        </div>
                        <span className="text-green-600 font-medium">{venue.availability}</span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {venue.amenities.slice(0, 3).map((amenity, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                        {venue.amenities.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{venue.amenities.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="flex-1"
                          asChild
                        >
                          <Link to={`/venue/${venue.id}`}>
                            <Calendar className="w-4 h-4 mr-1" />
                            Book Venue
                          </Link>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          asChild
                        >
                          <Link to="/find-players">
                            <Users className="w-4 h-4 mr-1" />
                            Find Players
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No venues found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any venues matching "{searchQuery}". Try searching for:
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {['Cricket', 'Football', 'Badminton', 'Tennis', 'Squash', 'Pickleball'].map((sport) => (
                  <Badge 
                    key={sport}
                    variant="outline" 
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.location.href = `/search?q=${sport.toLowerCase()}`}
                  >
                    {sport}
                  </Badge>
                ))}
              </div>
              <Button asChild>
                <Link to="/venues">
                  Explore All Venues
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SearchResults;