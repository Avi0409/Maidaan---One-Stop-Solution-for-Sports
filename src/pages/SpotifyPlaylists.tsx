import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, ExternalLink, Music } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';

const SpotifyPlaylists = () => {
  const { t } = useLanguage();
  const [selectedSport, setSelectedSport] = useState('all');

  const playlists = [
    {
      id: 1,
      title: 'Cricket Energy',
      sport: 'cricket',
      description: 'High-energy tracks to boost your cricket performance',
      tracks: 50,
      duration: '3h 20m',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd',
      image: 'https://via.placeholder.com/300x300/22C55E/FFFFFF?text=Cricket+Energy',
    },
    {
      id: 2,
      title: 'Football Pump Up',
      sport: 'football',
      description: 'Motivational beats for football training and matches',
      tracks: 45,
      duration: '2h 45m',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd',
      image: 'https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=Football+Pump',
    },
    {
      id: 3,
      title: 'Badminton Focus',
      sport: 'badminton',
      description: 'Concentration-enhancing music for precision sports',
      tracks: 35,
      duration: '2h 10m',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd',
      image: 'https://via.placeholder.com/300x300/8B5CF6/FFFFFF?text=Badminton+Focus',
    },
    {
      id: 4,
      title: 'Tennis Power',
      sport: 'tennis',
      description: 'Powerful rhythms for tennis champions',
      tracks: 40,
      duration: '2h 30m',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd',
      image: 'https://via.placeholder.com/300x300/22C55E/FFFFFF?text=Tennis+Power',
    },
    {
      id: 5,
      title: 'Squash Intensity',
      sport: 'squash',
      description: 'High-intensity beats for fast-paced squash games',
      tracks: 30,
      duration: '2h 00m',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd',
      image: 'https://via.placeholder.com/300x300/F59E0B/FFFFFF?text=Squash+Intensity',
    },
    {
      id: 6,
      title: 'Pickleball Fun',
      sport: 'pickleball',
      description: 'Upbeat tunes for the fastest-growing sport',
      tracks: 25,
      duration: '1h 45m',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd',
      image: 'https://via.placeholder.com/300x300/EC4899/FFFFFF?text=Pickleball+Fun',
    },
    {
      id: 7,
      title: 'Workout Motivation',
      sport: 'general',
      description: 'Universal energy boosters for any sport',
      tracks: 60,
      duration: '4h 00m',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd',
      image: 'https://via.placeholder.com/300x300/EF4444/FFFFFF?text=Workout+Motivation',
    },
    {
      id: 8,
      title: 'Cool Down Vibes',
      sport: 'general',
      description: 'Relaxing tracks for post-game recovery',
      tracks: 30,
      duration: '2h 15m',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd',
      image: 'https://via.placeholder.com/300x300/06B6D4/FFFFFF?text=Cool+Down',
    },
  ];

  const sports = [
    { value: 'all', label: 'All Sports' },
    { value: 'cricket', label: 'Cricket' },
    { value: 'football', label: 'Football' },
    { value: 'badminton', label: 'Badminton' },
    { value: 'tennis', label: 'Tennis' },
    { value: 'squash', label: 'Squash' },
    { value: 'pickleball', label: 'Pickleball' },
    { value: 'general', label: 'General' },
  ];

  const filteredPlaylists = selectedSport === 'all' 
    ? playlists 
    : playlists.filter(playlist => playlist.sport === selectedSport);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-display mb-6">Spotify Playlists</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover curated playlists designed to enhance your sports performance and motivation
            </p>
          </div>

          {/* Sport Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {sports.map((sport) => (
              <Button
                key={sport.value}
                variant={selectedSport === sport.value ? "default" : "outline"}
                onClick={() => setSelectedSport(sport.value)}
                className="rounded-full"
              >
                {sport.label}
              </Button>
            ))}
          </div>

          {/* Playlists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlaylists.map((playlist) => (
              <Card key={playlist.id} className="hover-lift group">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={playlist.image} 
                      alt={playlist.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg flex items-center justify-center">
                      <Button
                        size="sm"
                        onClick={() => window.open(playlist.spotifyUrl, '_blank')}
                        className="bg-primary text-primary-foreground"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Play on Spotify
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-lg">{playlist.title}</h3>
                      <Badge variant="secondary" className="capitalize">
                        {playlist.sport === 'general' ? 'All Sports' : playlist.sport}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm">
                      {playlist.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{playlist.tracks} tracks</span>
                      <span>{playlist.duration}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(playlist.spotifyUrl, '_blank')}
                        className="flex-1"
                      >
                        <Music className="w-4 h-4 mr-2" />
                        Listen
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(playlist.spotifyUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPlaylists.length === 0 && (
            <div className="text-center py-12">
              <Music className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No playlists found</h3>
              <p className="text-muted-foreground">
                No playlists available for the selected sport category.
              </p>
            </div>
          )}

          {/* Spotify Integration Info */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Music className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Connect with Spotify</h3>
                <p className="text-muted-foreground mb-6">
                  These playlists are curated specifically for sports enthusiasts. 
                  Click on any playlist to open it directly in your Spotify app or web player.
                </p>
                <Button 
                  onClick={() => window.open('https://open.spotify.com', '_blank')}
                  className="bg-[#1DB954] hover:bg-[#1DB954]/90 text-white"
                >
                  Open Spotify
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpotifyPlaylists;