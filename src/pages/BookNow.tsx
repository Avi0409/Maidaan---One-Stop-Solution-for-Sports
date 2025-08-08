import { useState } from 'react';
import { MapPin, Clock, Users, Star, Wifi, Car, Bath, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';

const BookNow = () => {
  const { t } = useLanguage();
  const [selectedSport, setSelectedSport] = useState('all');

  const venues = [
    {
      id: 1,
      name: 'Sports Arena Plus',
      location: 'Bandra West, Mumbai',
      sport: 'cricket',
      price: 2500,
      rating: 4.8,
      image: '/api/placeholder/400/250',
      facilities: ['Lighting', 'Washrooms', 'Parking', 'WiFi'],
      timeSlots: ['6:00 AM', '8:00 AM', '10:00 AM', '4:00 PM', '6:00 PM'],
      description: 'Premium cricket turf with international standards',
    },
    {
      id: 2,
      name: 'Goal Masters Football Club',
      location: 'Andheri East, Mumbai',
      sport: 'football',
      price: 3000,
      rating: 4.6,
      image: '/api/placeholder/400/250',
      facilities: ['Floodlights', 'Changing Rooms', 'Equipment'],
      timeSlots: ['7:00 AM', '9:00 AM', '5:00 PM', '7:00 PM'],
      description: 'FIFA standard football turf with premium facilities',
    },
    {
      id: 3,
      name: 'Shuttle Point Badminton',
      location: 'Powai, Mumbai',
      sport: 'badminton',
      price: 800,
      rating: 4.7,
      image: '/api/placeholder/400/250',
      facilities: ['AC Courts', 'Equipment Rental', 'Parking'],
      timeSlots: ['6:00 AM', '8:00 AM', '6:00 PM', '8:00 PM'],
      description: 'Air-conditioned badminton courts with wooden flooring',
    },
    {
      id: 4,
      name: 'Tennis Pro Academy',
      location: 'Juhu, Mumbai',
      sport: 'tennis',
      price: 1200,
      rating: 4.9,
      image: '/api/placeholder/400/250',
      facilities: ['Professional Courts', 'Coaching Available', 'Equipment'],
      timeSlots: ['6:00 AM', '8:00 AM', '4:00 PM', '6:00 PM'],
      description: 'Professional tennis courts with certified coaching',
    },
  ];

  const sports = [
    { id: 'all', name: 'All Sports' },
    { id: 'cricket', name: 'Cricket' },
    { id: 'football', name: 'Football' },
    { id: 'badminton', name: 'Badminton' },
    { id: 'tennis', name: 'Tennis' },
    { id: 'squash', name: 'Squash' },
    { id: 'pickleball', name: 'Pickleball' },
  ];

  const filteredVenues = selectedSport === 'all' 
    ? venues 
    : venues.filter(venue => venue.sport === selectedSport);

  const getFacilityIcon = (facility: string) => {
    switch (facility.toLowerCase()) {
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'parking': return <Car className="w-4 h-4" />;
      case 'washrooms':
      case 'changing rooms': return <Bath className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-neon">
        <div className="container mx-auto text-center">
          <h1 className="text-display text-background mb-6">{t('bookNow')}</h1>
          <p className="text-xl text-background/90 max-w-2xl mx-auto">
            Find and book the perfect sports venue for your next game
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {sports.map((sport) => (
              <Button
                key={sport.id}
                variant={selectedSport === sport.id ? "default" : "outline"}
                onClick={() => setSelectedSport(sport.id)}
                className="hover-glow"
              >
                {sport.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVenues.map((venue, index) => (
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
                      <span className="text-muted-foreground text-sm">(120+ reviews)</span>
                    </div>

                    <p className="text-sm text-muted-foreground">{venue.description}</p>

                    {/* Facilities */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Facilities</h4>
                      <div className="flex flex-wrap gap-2">
                        {venue.facilities.map((facility) => (
                          <div 
                            key={facility}
                            className="flex items-center space-x-1 text-xs bg-secondary px-2 py-1 rounded-full"
                          >
                            {getFacilityIcon(facility)}
                            <span>{facility}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Time Slots */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Available Today</h4>
                      <div className="flex flex-wrap gap-2">
                        {venue.timeSlots.slice(0, 3).map((time) => (
                          <Badge key={time} variant="outline" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {time}
                          </Badge>
                        ))}
                        {venue.timeSlots.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{venue.timeSlots.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1 hover-glow">
                        <Calendar className="w-4 h-4 mr-2" />
                        {t('bookVenue')}
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Users className="w-4 h-4 mr-2" />
                        {t('findPlayers')}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookNow;