import { useState } from 'react';
import { Users, MapPin, Clock, MessageCircle, Trophy, Calendar, Plus, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';

const FindPlayers = () => {
  const { t } = useLanguage();
  const [selectedSport, setSelectedSport] = useState('all');
  const [gameInvites, setGameInvites] = useState([
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
      joinRequests: [],
      chat: [],
      hasJoined: false,
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
      joinRequests: [],
      chat: [],
      hasJoined: false,
    },
  ]);

  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [chatModalData, setChatModalData] = useState(null);
  const [newInvite, setNewInvite] = useState({
    sport: '',
    title: '',
    date: '',
    time: '',
    playersNeeded: 1,
    location: '',
    description: '',
    skillLevel: 'Intermediate',
  });
  const [chatMessage, setChatMessage] = useState('');

  const sports = [
    { id: 'all', name: 'All Sports' },
    { id: 'cricket', name: 'Cricket' },
    { id: 'football', name: 'Football' },
    { id: 'badminton', name: 'Badminton' },
    { id: 'tennis', name: 'Tennis' },
    { id: 'squash', name: 'Squash' },
    { id: 'pickleball', name: 'Pickleball' },
  ];

  const handlePostInvite = (e) => {
    e.preventDefault();
    const newId = Date.now();
    const invite = {
      id: newId,
      ...newInvite,
      organizer: 'You',
      totalPlayers: newInvite.playersNeeded + 2, // Set reasonable total
      joinRequests: [],
      chat: [],
      hasJoined: false,
    };
    
    setGameInvites(prev => [invite, ...prev]);
    setNewInvite({
      sport: '',
      title: '',
      date: '',
      time: '',
      playersNeeded: 1,
      location: '',
      description: '',
      skillLevel: 'Intermediate',
    });
    setIsPostModalOpen(false);
  };

  const handleJoinGame = (inviteId) => {
    setGameInvites(prev => prev.map(invite => 
      invite.id === inviteId 
        ? { ...invite, hasJoined: true }
        : invite
    ));
  };

  const handleSendMessage = (inviteId) => {
    if (!chatMessage.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      sender: 'You',
      message: chatMessage,
      timestamp: new Date().toLocaleTimeString(),
    };

    setGameInvites(prev => prev.map(invite => 
      invite.id === inviteId 
        ? { ...invite, chat: [...invite.chat, newMessage] }
        : invite
    ));
    setChatMessage('');
  };

  const filteredInvites = selectedSport === 'all' 
    ? gameInvites 
    : gameInvites.filter(invite => invite.sport === selectedSport);

  const getSportColor = (sport) => {
    const colors = {
      cricket: 'bg-sport-cricket/20 text-sport-cricket border-sport-cricket',
      football: 'bg-sport-football/20 text-sport-football border-sport-football',
      badminton: 'bg-sport-badminton/20 text-sport-badminton border-sport-badminton',
      tennis: 'bg-sport-tennis/20 text-sport-tennis border-sport-tennis',
      squash: 'bg-sport-squash/20 text-sport-squash border-sport-squash',
      pickleball: 'bg-sport-pickleball/20 text-sport-pickleball border-sport-pickleball',
    };
    return colors[sport] || 'bg-primary/20 text-primary border-primary';
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
          
          {/* Post Game Invite Modal */}
          <Dialog open={isPostModalOpen} onOpenChange={setIsPostModalOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="hover-glow animate-scale-in">
                <Plus className="w-5 h-5 mr-2" />
                {t('postYourInvite')}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md animate-fade-in">
              <DialogHeader>
                <DialogTitle>{t('postYourInvite')}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handlePostInvite} className="space-y-4">
                <Select value={newInvite.sport} onValueChange={(value) => setNewInvite({...newInvite, sport: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Sport" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cricket">Cricket</SelectItem>
                    <SelectItem value="football">Football</SelectItem>
                    <SelectItem value="badminton">Badminton</SelectItem>
                    <SelectItem value="tennis">Tennis</SelectItem>
                    <SelectItem value="squash">Squash</SelectItem>
                    <SelectItem value="pickleball">Pickleball</SelectItem>
                  </SelectContent>
                </Select>
                
                <Input
                  placeholder="Game Title"
                  value={newInvite.title}
                  onChange={(e) => setNewInvite({...newInvite, title: e.target.value})}
                  required
                />
                
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    type="date"
                    value={newInvite.date}
                    onChange={(e) => setNewInvite({...newInvite, date: e.target.value})}
                    required
                  />
                  <Input
                    type="time"
                    value={newInvite.time}
                    onChange={(e) => setNewInvite({...newInvite, time: e.target.value})}
                    required
                  />
                </div>
                
                <Input
                  type="number"
                  placeholder="Players Needed"
                  value={newInvite.playersNeeded}
                  onChange={(e) => setNewInvite({...newInvite, playersNeeded: parseInt(e.target.value)})}
                  min="1"
                  required
                />
                
                <Input
                  placeholder="Location (optional)"
                  value={newInvite.location}
                  onChange={(e) => setNewInvite({...newInvite, location: e.target.value})}
                />
                
                <Textarea
                  placeholder="Description"
                  value={newInvite.description}
                  onChange={(e) => setNewInvite({...newInvite, description: e.target.value})}
                />
                
                <div className="flex gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsPostModalOpen(false)} className="flex-1">
                    {t('cancel')}
                  </Button>
                  <Button type="submit" className="flex-1">
                    {t('submit')}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
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
                className="hover-glow transition-all duration-200"
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
                          <Badge variant="outline">
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
                        <div className="text-sm text-muted-foreground">{t('organizer')}</div>
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
                          <span className="font-medium text-primary">{invite.playersNeeded}</span> {t('playersNeeded')}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground">{invite.description}</p>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button 
                        className="flex-1 hover-glow transition-all duration-200" 
                        disabled={invite.hasJoined}
                        onClick={() => handleJoinGame(invite.id)}
                      >
                        <Trophy className="w-4 h-4 mr-2" />
                        {invite.hasJoined ? t('requestSent') : t('joinGame')}
                      </Button>
                      
                      {/* Chat Modal */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="hover-glow">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            {t('chat')}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md animate-scale-in">
                          <DialogHeader>
                            <DialogTitle>Chat - {invite.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <ScrollArea className="h-64 border rounded-lg p-4">
                              {invite.chat.length === 0 ? (
                                <p className="text-muted-foreground text-center">No messages yet. Start the conversation!</p>
                              ) : (
                                invite.chat.map((msg) => (
                                  <div key={msg.id} className="mb-3">
                                    <div className="flex items-center space-x-2 mb-1">
                                      <span className="text-sm font-medium">{msg.sender}</span>
                                      <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                                    </div>
                                    <p className="text-sm">{msg.message}</p>
                                  </div>
                                ))
                              )}
                            </ScrollArea>
                            <div className="flex gap-2">
                              <Input
                                placeholder="Type your message..."
                                value={chatMessage}
                                onChange={(e) => setChatMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(invite.id)}
                              />
                              <Button onClick={() => handleSendMessage(invite.id)} size="sm">
                                <Send className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
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

export default FindPlayers;