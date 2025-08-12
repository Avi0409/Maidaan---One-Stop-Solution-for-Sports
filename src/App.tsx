import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Venues from "./pages/Venues";
import BookNow from "./pages/BookNow";
import ListYourSports from "./pages/ListYourSports";
import FindPlayers from "./pages/FindPlayers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SportPage from "./pages/SportPage";
import VenueDetails from "./pages/VenueDetails";
import VenueRegistration from "./pages/VenueRegistration";
import SpotifyPlaylists from "./pages/SpotifyPlaylists";
import SearchResults from "./pages/SearchResults";
import Hidden from "./pages/Hidden";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="maidaan-ui-theme">
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/venues" element={<Venues />} />
              <Route path="/book-now" element={<BookNow />} />
              <Route path="/list-your-sports" element={<ListYourSports />} />
              <Route path="/find-players" element={<FindPlayers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/sports/:sport" element={<SportPage />} />
            <Route path="/venue/:venueId" element={<VenueDetails />} />
            <Route path="/venue-registration" element={<VenueRegistration />} />
            <Route path="/spotify-playlists" element={<SpotifyPlaylists />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/hidden-admin" element={<Hidden />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
