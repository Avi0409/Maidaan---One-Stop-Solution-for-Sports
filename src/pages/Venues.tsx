import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Users, Wifi, Car, Zap, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';

const Venues = () => {
  const { t } = useLanguage();
  const [selectedSport, setSelectedSport] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const venues = [
    {
      id: 1,
      name: 'Mumbai Cricket Club',
      sport: ['cricket'],
      image: '/api/placeholder/400/300',
      price: 2500,
      location: 'Oval Maidan, Mumbai',
      rating: 4.8,
      reviews: 124,
      amenities: ['floodlights', 'parking', 'wifi', 'changing_rooms'],
      workingHours: '6:00 AM - 11:00 PM',
      description: 'Premium cricket ground with professional facilities and excellent pitch conditions.',
    },
    {
      id: 2,
      name: 'Champions Football Turf',
      sport: ['football'],
      image: '/api/placeholder/400/300',
      price: 1800,
      location: 'Andheri, Mumbai',
      rating: 4.6,
      reviews: 89,
      amenities: ['floodlights', 'parking', 'changing_rooms'],
      workingHours: '6:00 AM - 12:00 AM',
      description: 'Modern artificial turf perfect for 5v5 and 7v7 football matches.',
    },
    {
      id: 3,
      name: 'Ace Badminton Academy',
      sport: ['badminton'],
      image: '/api/placeholder/400/300',
      price: 800,
      location: 'Powai, Mumbai',
      rating: 4.9,
      reviews: 156,
      amenities: ['air_conditioning', 'parking', 'equipment_rental'],
      workingHours: '5:00 AM - 11:00 PM',
      description: 'Professional badminton courts with wooden flooring and proper ventilation.',
    },
    {
      id: 4,
      name: 'Elite Tennis Courts',
      sport: ['tennis'],
      image: '/api/placeholder/400/300',
      price: 1200,
      location: 'Bandra, Mumbai',
      rating: 4.7,
      reviews: 203,
      amenities: ['floodlights', 'parking', 'equipment_rental', 'coaching'],
      workingHours: '6:00 AM - 10:00 PM',
      description: 'Clay and hard courts available with professional coaching facilities.',
    },
    {
      id: 5,
      name: 'Squash Central',
      sport: ['squash'],
      image: '/api/placeholder/400/300',
      price: 600,
      location: 'Colaba, Mumbai',
      rating: 4.5,
      reviews: 78,
      amenities: ['air_conditioning', 'changing_rooms', 'equipment_rental'],
      workingHours: '6:00 AM - 11:00 PM',
      description: 'Modern squash courts with glass back walls and international standards.',
    },
    {
      id: 6,
      name: 'Pickleball Paradise',
      sport: ['pickleball'],
      image: '/api/placeholder/400/300',
      price: 500,
      location: 'Juhu, Mumbai',
      rating: 4.4,
      reviews: 45,
      amenities: ['floodlights', 'parking', 'equipment_rental'],
      workingHours: '7:00 AM - 10:00 PM',
      description: 'Dedicated pickleball courts with regulation nets and professional surface.',
    },
  ];

  const sports = [
    { id: 'all', name: 'All Sports' },
    { id: 'cricket', name: t('cricket') },
    { id: 'football', name: t('football') },
    { id: 'badminton', name: t('badminton') },
    { id: 'tennis', name: t('tennis') },
    { id: 'squash', name: t('squash') },
    { id: 'pickleball', name: t('pickleball') },
  ];

  const amenityIcons = {
    floodlights: <Zap className="w-4 h-4" />,
    parking: <Car className="w-4 h-4" />,
    wifi: <Wifi className="w-4 h-4" />,
    changing_rooms: <Users className="w-4 h-4" />,
    air_conditioning: <Zap className="w-4 h-4" />,
    equipment_rental: <Users className="w-4 h-4" />,
    coaching: <Users className="w-4 h-4" />,
  };

  const filteredVenues = venues.filter(venue => {
    const matchesSport = selectedSport === 'all' || venue.sport.includes(selectedSport);
    const matchesSearch = venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         venue.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSport && matchesSearch;
  });

  const getSportColor = (sport: string) => {
    switch (sport) {
      case 'cricket': return 'bg-sport-cricket/20 text-sport-cricket border-sport-cricket';
      case 'football': return 'bg-sport-football/20 text-sport-football border-sport-football';
      case 'badminton': return 'bg-sport-badminton/20 text-sport-badminton border-sport-badminton';
      case 'tennis': return 'bg-sport-tennis/20 text-sport-tennis border-sport-tennis';
      case 'squash': return 'bg-sport-squash/20 text-sport-squash border-sport-squash';
      case 'pickleball': return 'bg-sport-pickleball/20 text-sport-pickleball border-sport-pickleball';
      default: return 'bg-primary/20 text-primary border-primary';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-sport">
        <div className="container mx-auto text-center">
          <h1 className="text-display text-background mb-6">{t('exploreVenues')}</h1>
          <p className="text-xl text-background/90 max-w-2xl mx-auto">
            Find and book the perfect venue for your sport
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <Select value={selectedSport} onValueChange={setSelectedSport}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select Sport" />
                </SelectTrigger>
                <SelectContent>
                  {sports.map((sport) => (
                    <SelectItem key={sport.id} value={sport.id}>
                      {sport.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full md:w-auto">
              <Input
                placeholder="Search venues or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80"
              />
            </div>
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
                className="hover-lift neon-border animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={venue.image} 
                    alt={venue.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    {venue.sport.map((sport) => (
                      <Badge key={sport} className={getSportColor(sport)}>
                        {sport.charAt(0).toUpperCase() + sport.slice(1)}
                      </Badge>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 bg-background/90 rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{venue.rating}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{venue.name}</h3>
                      <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{venue.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{venue.workingHours}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">{venue.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {venue.amenities.slice(0, 3).map((amenity) => (
                        <div key={amenity} className="flex items-center space-x-1 bg-secondary/50 rounded-full px-2 py-1">
                          {amenityIcons[amenity as keyof typeof amenityIcons]}
                          <span className="text-xs capitalize">{amenity.replace('_', ' ')}</span>
                        </div>
                      ))}
                      {venue.amenities.length > 3 && (
                        <div className="bg-secondary/50 rounded-full px-2 py-1">
                          <span className="text-xs">+{venue.amenities.length - 3} more</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <div className="text-2xl font-bold text-primary">₹{venue.price}</div>
                        <div className="text-sm text-muted-foreground">{t('pricePerHour')}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/venue/${venue.id}`}>
                            {t('viewDetails')}
                          </Link>
                        </Button>
                        <Button size="sm" className="hover-glow" asChild>
                          <Link to={`/venue/${venue.id}?action=book`}>
                            <Calendar className="w-4 h-4 mr-1" />
                            {t('bookVenue')}
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="secondary" size="sm" className="flex-1" asChild>
                        <Link to="/find-players">
                          <Users className="w-4 h-4 mr-1" />
                          {t('findPlayers')}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredVenues.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏟️</div>
              <h3 className="text-2xl font-semibold mb-2">No venues found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Venues;