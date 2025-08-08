import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageProvider';

interface SportCardProps {
  sport: string;
  image: string;
  gradient: string;
  route: string;
}

const SportCard = ({ sport, image, gradient, route }: SportCardProps) => {
  const { t } = useLanguage();
  
  const quoteKey = `${sport.toLowerCase()}Quote`;
  const sportKey = sport.toLowerCase();

  return (
    <Link to={route} className="group block">
      <div className={`relative overflow-hidden rounded-xl ${gradient} hover-lift neon-border group-hover:shadow-neon transition-all duration-300`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={t(sportKey)}
            className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative p-8 h-80 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white neon-glow">
              {t(sportKey)}
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              {t(quoteKey)}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/20 neon-border"
            >
              {t('viewDetails')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
};

export default SportCard;