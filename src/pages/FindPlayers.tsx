import { useState } from 'react';
import { Users, MapPin, Clock, MessageCircle, Trophy, Calendar, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';

const FindPlayers = () => {
  const { t } = useLanguage();
  const [selectedSport, setSelectedSport] = useState('all');

  const gameInvites = [
    {
      id: 1,
      sport: 'cricket',
      title: 'Need 4 players for Cricket Match',
      organizer: 'Rahul Sharma',
      location: 'Oval Maidan, Mumbai',
      date: 'Today',
      time: '6:00 PM',
      playersNeeded: 4,
      totalPlayers: 11,
      skillLevel: 'Intermediate',
      description: 'Friendly cricket match, bring your own kit. All skill levels welcome!',
    },
    {
      id: 2,
      sport: 'football',
      title: 'Football 5v5 - Need 2 players',
      organizer: 'Priya Patel',
      location: 'Cooperage Ground, Mumbai',
      date: 'Tomorrow',
      time: '7:00 AM',
      playersNeeded: 2,
      totalPlayers: 10,
      skillLevel: 'Beginner',
      description: 'Morning football session. Perfect for beginners and fitness enthusiasts.',
    },
    {
      id: 3,
      sport: 'badminton',
      title: 'Doubles Badminton Tournament',
      organizer: 'Amit Kumar',
      location: 'Shuttle Point, Powai',
      date: 'This Weekend',
      time: '4:00 PM',
      playersNeeded: 6,
      totalPlayers: 16,
      skillLevel: 'Advanced',
      description: 'Competitive doubles tournament. Entry fee: ₹200. Prizes for winners!',
    },
    {
      id: 4,
      sport: 'tennis',
      title: 'Singles Tennis Practice',
      organizer: 'Sarah Johnson',
      location: 'Tennis Academy, Juhu',
      date: 'Wednesday',
      time: '5:30 PM',
      playersNeeded: 1,
      totalPlayers: 2,
      skillLevel: 'Intermediate',
      description: 'Looking for a practice partner for singles tennis. Regular sessions possible.',
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

  const filteredInvites = selectedSport === 'all' 
    ? gameInvites 
    : gameInvites.filter(invite => invite.sport === selectedSport);

  const getSkillColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSportColor = (sport: string) => {
    switch (sport) {
      case 'cricket': return 'bg-sport-cricket/20 text-sport-cricket border-sport-cricket';
      case 'football': return 'bg-sport-football/20 text-sport-football border-sport-football';
      case 'badminton': return 'bg-sport-badminton/20 text-sport-badminton border-sport-badminton';
      case 'tennis': return 'bg-sport-tennis/20 text-sport-tennis border-sport-tennis';
      default: return 'bg-primary/20 text-primary border-primary';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-sport">
        <div className="container mx-auto text-center">
          <h1 className="text-display text-background mb-6">{t('findPlayersNearby')}</h1>
          <p className="text-xl text-background/90 max-w-2xl mx-auto mb-8">
            Connect with players in your area and join exciting games
          </p>
          <Button size="lg" variant="secondary" className="hover-glow">
            <Plus className="w-5 h-5 mr-2" />
            Post Your Game Invite
          </Button>
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

      {/* Game Invites */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredInvites.map((invite, index) => (
              <Card 
                key={invite.id} 
                className="hover-lift neon-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge className={getSportColor(invite.sport)}>
                            {invite.sport.charAt(0).toUpperCase() + invite.sport.slice(1)}
                          </Badge>
                          <Badge variant="outline" className={getSkillColor(invite.skillLevel)}>
                            {invite.skillLevel}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold">{invite.title}</h3>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>{invite.date}</div>
                        <div className="font-medium">{invite.time}</div>
                      </div>
                    </div>

                    {/* Organizer */}
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-neon text-background">
                          {invite.organizer.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{invite.organizer}</div>
                        <div className="text-sm text-muted-foreground">Organizer</div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{invite.location}</span>
                    </div>

                    {/* Players Info */}
                    <div className="flex items-center justify-between bg-secondary/50 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm">
                          <span className="font-medium text-primary">{invite.playersNeeded}</span> players needed
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {invite.totalPlayers - invite.playersNeeded}/{invite.totalPlayers} joined
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground">{invite.description}</p>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1 hover-glow">
                        <Trophy className="w-4 h-4 mr-2" />
                        Join Game
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-heading mb-4">Join the Community</h2>
            <p className="text-muted-foreground">Connect with thousands of sports enthusiasts</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">2,500+</div>
              <div className="text-muted-foreground">Active Players</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-muted-foreground">Daily Games</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Locations</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">8</div>
              <div className="text-muted-foreground">Sports Available</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FindPlayers;