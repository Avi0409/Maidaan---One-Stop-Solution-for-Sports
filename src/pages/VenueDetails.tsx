import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Share2, Car, Wifi, Bath, Calendar, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';

interface CartItem {
  sport: string;
  date: string;
  time: string;
  hours: number;
  price: number;
}

const VenueDetails = () => {
  const { venueId } = useParams<{ venueId: string }>();
  const { t } = useLanguage();
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [hours, setHours] = useState(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  // Mock venue data - in real app this would come from API
  const venueData = {
    id: parseInt(venueId || '1'),
    name: 'Sports Arena Plus',
    location: 'Bandra West, Mumbai',
    fullAddress: '123 Sports Complex, Linking Road, Bandra West, Mumbai - 400050',
    rating: 4.8,
    reviewCount: 245,
    images: [
      '/api/placeholder/800/400',
      '/api/placeholder/800/400',
      '/api/placeholder/800/400',
      '/api/placeholder/800/400'
    ],
    sports: ['Cricket', 'Football', 'Tennis'],
    pricing: {
      Cricket: 2500,
      Football: 3000,
      Tennis: 1500
    },
    workingHours: '6:00 AM - 11:00 PM',
    facilities: ['Floodlights', 'Parking', 'Washrooms', 'WiFi', 'Equipment Rental', 'Coaching'],
    about: 'Premium sports facility with international standards. Our venue offers multiple sports with top-notch amenities and professional coaching. Perfect for both casual games and serious training sessions.',
    contact: '+91 98765 43210',
    coordinates: { lat: 19.0596, lng: 72.8295 },
    timeSlots: ['6:00 AM', '8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM']
  };

  const getFacilityIcon = (facility: string) => {
    switch (facility.toLowerCase()) {
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'parking': return <Car className="w-4 h-4" />;
      case 'washrooms': return <Bath className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const addToCart = () => {
    if (!selectedSport || !selectedDate || !selectedTime) {
      alert('Please select sport, date, and time');
      return;
    }

    const newItem: CartItem = {
      sport: selectedSport,
      date: selectedDate,
      time: selectedTime,
      hours,
      price: venueData.pricing[selectedSport as keyof typeof venueData.pricing] * hours
    };

    setCartItems([...cartItems, newItem]);
    setShowCart(true);
    
    // Reset form
    setSelectedSport('');
    setSelectedDate('');
    setSelectedTime('');
    setHours(1);
  };

  const removeFromCart = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: venueData.name,
        text: `Check out ${venueData.name} - ${venueData.location}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=${venueData.coordinates.lat},${venueData.coordinates.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <img 
                    src={venueData.images[0]} 
                    alt={venueData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {venueData.images.slice(1).map((image, index) => (
                    <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${venueData.name} ${index + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Venue Info */}
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{venueData.name}</h1>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{venueData.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span>{venueData.rating}</span>
                        <span>({venueData.reviewCount} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" onClick={handleShare}>
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>

                {/* Sports Available */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Sports Available</h3>
                  <div className="flex flex-wrap gap-2">
                    {venueData.sports.map((sport) => (
                      <Badge key={sport} variant="secondary" className="text-sm">
                        {sport} - ₹{venueData.pricing[sport as keyof typeof venueData.pricing]}/hour
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Working Hours */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Working Hours</h3>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>{venueData.workingHours}</span>
                  </div>
                </div>

                {/* Facilities */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Facilities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {venueData.facilities.map((facility) => (
                      <div key={facility} className="flex items-center space-x-2 p-3 bg-secondary rounded-lg">
                        {getFacilityIcon(facility)}
                        <span className="text-sm">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* About */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">About This Venue</h3>
                  <p className="text-muted-foreground leading-relaxed">{venueData.about}</p>
                </div>

                {/* Location */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Location</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">{venueData.fullAddress}</p>
                    <Button variant="outline" onClick={openGoogleMaps}>
                      <MapPin className="w-4 h-4 mr-2" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Contact</h3>
                  <p className="text-muted-foreground">{venueData.contact}</p>
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="space-y-6">
              {/* Booking Form */}
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Book This Venue</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Select Sport</label>
                      <Select value={selectedSport} onValueChange={setSelectedSport}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a sport" />
                        </SelectTrigger>
                        <SelectContent>
                          {venueData.sports.map((sport) => (
                            <SelectItem key={sport} value={sport}>
                              {sport} - ₹{venueData.pricing[sport as keyof typeof venueData.pricing]}/hour
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Select Date</label>
                      <Input 
                        type="date" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Select Time</label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {venueData.timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Number of Hours</label>
                      <div className="flex items-center space-x-3">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setHours(Math.max(1, hours - 1))}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="px-4 py-2 border rounded-md min-w-16 text-center">{hours}</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setHours(hours + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <Button 
                      className="w-full" 
                      onClick={addToCart}
                      disabled={!selectedSport || !selectedDate || !selectedTime}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Cart */}
              {cartItems.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">Your Bookings</h3>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setShowCart(!showCart)}
                      >
                        {showCart ? 'Hide' : 'Show'}
                      </Button>
                    </div>
                    
                    {showCart && (
                      <div className="space-y-4">
                        {cartItems.map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                            <div className="flex-1">
                              <div className="font-medium">{item.sport}</div>
                              <div className="text-sm text-muted-foreground">
                                {item.date} at {item.time}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {item.hours} hour{item.hours > 1 ? 's' : ''}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">₹{item.price}</div>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => removeFromCart(index)}
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                        ))}
                        
                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold">Total</span>
                            <span className="text-lg font-bold">₹{totalAmount}</span>
                          </div>
                          <Button className="w-full bg-primary text-primary-foreground">
                            Proceed to Payment
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VenueDetails;