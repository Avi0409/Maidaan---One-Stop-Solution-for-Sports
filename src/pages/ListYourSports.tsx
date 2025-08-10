import { useState } from 'react';
import { CheckCircle, Users, TrendingUp, Shield, Clock, Star, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';

const ListYourSports = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [demoFormData, setDemoFormData] = useState({
    name: '',
    email: '',
    phone: '',
    venueName: '',
    location: '',
  });

  const handleDemoRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Demo request submitted!",
      description: "We'll contact you within 24 hours to schedule your demo.",
    });
    
    setDemoFormData({
      name: '',
      email: '',
      phone: '',
      venueName: '',
      location: '',
    });
    setIsSubmitting(false);
  };

  const handleMessageSend = async () => {
    if (!message.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: t('messageSent'),
      description: "Our team will get back to you soon.",
    });
    
    setMessage('');
    setIsSubmitting(false);
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: 'Increase Revenue',
      description: 'Boost your bookings by up to 40% with our platform\'s visibility.',
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Reach More Players',
      description: 'Connect with thousands of active sports enthusiasts in your area.',
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: 'Secure Payments',
      description: 'Get paid on time with our secure payment processing system.',
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: 'Easy Management',
      description: 'Manage bookings, schedules, and payments from one dashboard.',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      venue: 'Sports Arena Mumbai',
      image: '/api/placeholder/100/100',
      rating: 5,
      comment: 'Maidaan helped us increase our bookings by 60%. The platform is incredibly user-friendly.',
    },
    {
      name: 'Priya Sharma',
      venue: 'Elite Badminton Club',
      image: '/api/placeholder/100/100',
      rating: 5,
      comment: 'Best decision we made for our business. Customer support is exceptional.',
    },
    {
      name: 'Mohammad Ali',
      venue: 'Champions Football Turf',
      image: '/api/placeholder/100/100',
      rating: 5,
      comment: 'The automated booking system saved us so much time. Highly recommended!',
    },
  ];

  const steps = [
    {
      step: '1',
      title: 'Register Your Venue',
      description: 'Sign up and add your venue details, photos, and amenities.',
    },
    {
      step: '2',
      title: 'Set Your Pricing',
      description: 'Configure your hourly rates and availability schedule.',
    },
    {
      step: '3',
      title: 'Go Live',
      description: 'Start receiving bookings and grow your business.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-sport">
        <div className="container mx-auto text-center">
          <h1 className="text-display text-background mb-6">{t('listYourSportsTitle')}</h1>
          <p className="text-xl text-background/90 max-w-2xl mx-auto mb-8">
            {t('listYourSportsSubtitle')}
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="hover-glow">
                {t('requestDemo')}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{t('requestDemo')}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleDemoRequest} className="space-y-4">
                <Input
                  placeholder="Full Name"
                  value={demoFormData.name}
                  onChange={(e) => setDemoFormData({...demoFormData, name: e.target.value})}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={demoFormData.email}
                  onChange={(e) => setDemoFormData({...demoFormData, email: e.target.value})}
                  required
                />
                <Input
                  placeholder="Phone Number"
                  value={demoFormData.phone}
                  onChange={(e) => setDemoFormData({...demoFormData, phone: e.target.value})}
                  required
                />
                <Input
                  placeholder="Venue Name"
                  value={demoFormData.venueName}
                  onChange={(e) => setDemoFormData({...demoFormData, venueName: e.target.value})}
                  required
                />
                <Input
                  placeholder="Location"
                  value={demoFormData.location}
                  onChange={(e) => setDemoFormData({...demoFormData, location: e.target.value})}
                  required
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? t('loading') : t('requestDemo')}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-6">{t('howItWorks')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center space-y-4 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center text-2xl font-bold text-background mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <img 
              src="/api/placeholder/800/400" 
              alt="Registration process illustration"
              className="mx-auto rounded-lg shadow-elevated"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-6">{t('whyChooseMaidaan')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the leading sports venue booking platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="text-center hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="mx-auto w-fit">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-6">{t('ownerTestimonials')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from successful venue owners on our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.venue}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Care */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-heading mb-6">{t('customerCare')}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions? We're here to help you get started.
            </p>
            
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <p className="font-semibold">Contact Information</p>
                <p className="text-muted-foreground">Phone: +91 7869606696</p>
                <p className="text-muted-foreground">Email: partners@maidaan.com</p>
                <p className="text-muted-foreground">Instagram: @maidaan_sports</p>
              </div>
              
              <div className="space-y-4">
                <Textarea
                  placeholder={t('yourMessage')}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-32"
                />
                <Button 
                  onClick={handleMessageSend}
                  disabled={isSubmitting || !message.trim()}
                  className="w-full hover-glow"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? t('loading') : t('sendMessage')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ListYourSports;