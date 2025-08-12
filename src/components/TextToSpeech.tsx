import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageProvider';

const TextToSpeech = () => {
  const [isReading, setIsReading] = useState(false);
  const { t, language } = useLanguage();

  const speakContent = () => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      if (isReading) {
        setIsReading(false);
        return;
      }

      // Get all text content from the page
      const content = document.body.innerText;
      
      const utterance = new SpeechSynthesisUtterance(content);
      
      // Set language based on current selection
      utterance.lang = language === 'hi' ? 'hi-IN' : 'en-US';
      utterance.rate = 0.8;
      utterance.pitch = 1;
      
      utterance.onstart = () => setIsReading(true);
      utterance.onend = () => setIsReading(false);
      utterance.onerror = () => setIsReading(false);
      
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Sorry, your browser does not support text-to-speech.');
    }
  };

  return (
    <Button
      onClick={speakContent}
      variant="outline"
      size="sm"
      className="fixed bottom-4 right-4 z-50 bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground"
      aria-label={isReading ? 'Stop reading' : 'Read page content aloud'}
    >
      {isReading ? (
        <>
          <VolumeX className="w-4 h-4 mr-2" />
          Stop Reading
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4 mr-2" />
          Read Aloud
        </>
      )}
    </Button>
  );
};

export default TextToSpeech;