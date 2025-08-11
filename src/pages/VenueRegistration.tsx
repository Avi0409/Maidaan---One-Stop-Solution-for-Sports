import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';

const VenueRegistration = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    venueName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    sports: [] as string[],
    description: '',
    amenities: [] as string[],
    workingHours: '',
    pricing: '',
  });

  const availableSports = [
    'Cricket',
    'Football',
    'Badminton',
    'Tennis',
    'Squash',
    'Pickleball',
  ];

  const availableAmenities = [
    'Parking',
    'Restrooms',
    'Changing Rooms',
    'Equipment Rental',
    'Floodlights',
    'Cafeteria',
    'Air Conditioning',
    'First Aid',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Registration Successful!",
      description: "Your venue registration has been submitted. We'll contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      venueName: '',
      ownerName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      sports: [],
      description: '',
      amenities: [],
      workingHours: '',
      pricing: '',
    });
    setIsSubmitting(false);
  };

  const handleSportChange = (sport: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, sports: [...formData.sports, sport] });
    } else {
      setFormData({ ...formData, sports: formData.sports.filter(s => s !== sport) });
    }
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, amenities: [...formData.amenities, amenity] });
    } else {
      setFormData({ ...formData, amenities: formData.amenities.filter(a => a !== amenity) });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-display mb-6">Register Your Venue</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join Maidaan and start earning more from your sports venue
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Venue Registration Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Basic Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="venueName">Venue Name *</Label>
                      <Input
                        id="venueName"
                        value={formData.venueName}
                        onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                        placeholder="Enter venue name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="ownerName">Owner Name *</Label>
                      <Input
                        id="ownerName"
                        value={formData.ownerName}
                        onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                        placeholder="Enter owner name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Location Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Location Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Complete Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Enter complete address"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, city: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                          <SelectItem value="pune">Pune</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        placeholder="Enter state"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        placeholder="Enter pincode"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Sports Offered */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Sports Offered *</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {availableSports.map((sport) => (
                      <div key={sport} className="flex items-center space-x-2">
                        <Checkbox
                          id={sport}
                          checked={formData.sports.includes(sport)}
                          onCheckedChange={(checked) => handleSportChange(sport, checked as boolean)}
                        />
                        <Label htmlFor={sport}>{sport}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {availableAmenities.map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <Checkbox
                          id={amenity}
                          checked={formData.amenities.includes(amenity)}
                          onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                        />
                        <Label htmlFor={amenity}>{amenity}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Additional Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Venue Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe your venue, its features, and what makes it special"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="workingHours">Working Hours</Label>
                      <Input
                        id="workingHours"
                        value={formData.workingHours}
                        onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
                        placeholder="e.g., 6:00 AM - 11:00 PM"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="pricing">Pricing Information</Label>
                      <Input
                        id="pricing"
                        value={formData.pricing}
                        onChange={(e) => setFormData({ ...formData, pricing: e.target.value })}
                        placeholder="e.g., ₹500/hour"
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Register Venue'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VenueRegistration;