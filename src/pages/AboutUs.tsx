import { MapPin, Users, Target, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';

const AboutUs = () => {
  const { t } = useLanguage();

  const teamMembers = [
    { name: 'Avi Shrivastava', id: 'IPM05086', role: 'Project Lead & Frontend Developer', linkedin: 'https://www.linkedin.com/in/avi-shrivastava-0764b7264' },
    { name: 'Bhavya Modi', id: 'IPM05088', role: 'UI/UX Designer & Developer', linkedin: 'https://www.linkedin.com/in/bhavyamodi777/' },
    { name: 'Dev Ganatra', id: 'IPM05191', role: 'Database Architect', linkedin: 'https://www.linkedin.com/in/dev-ganatra-17a776287/' },
    { name: 'Ishika Gupta', id: 'IPM05168', role: 'Backend Developer', linkedin: 'https://www.linkedin.com/in/ishikagupta4/' },
    { name: 'Vansh Gupta', id: 'IPM05143', role: 'Full Stack Developer', linkedin: 'https://www.linkedin.com/in/vansh-gupta-6332732a3/' },
    { name: 'Kaustubh Gupta', id: 'IPM05176', role: 'DevOps & Security', linkedin: 'https://www.linkedin.com/in/kaustubh-gupta2005/' },
    { name: 'Yusuf Jameel Hashmi', id: 'IPM06181', role: 'Quality Assurance & Testing', linkedin: 'https://www.linkedin.com/in/yusufjhashmi/' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-display mb-6 neon-glow">{t('aboutUs')}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about bringing sports communities together through technology. 
            Our mission is to make sports more accessible and enjoyable for everyone.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 hover-lift">
              <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                To revolutionize sports venue booking and create a thriving community where players can connect, compete, and grow together.
              </p>
            </div>

            <div className="text-center space-y-4 hover-lift">
              <div className="w-16 h-16 bg-gradient-sport rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="text-muted-foreground">
                To become India's leading sports platform, making quality sports infrastructure accessible to everyone, everywhere.
              </p>
            </div>

            <div className="text-center space-y-4 hover-lift">
              <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold">Our Values</h3>
              <p className="text-muted-foreground">
                Community first, transparency in pricing, quality assurance, and making sports accessible to players of all skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A dedicated group of sports enthusiasts and tech experts working to transform the sports experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="bg-card rounded-xl p-6 text-center hover-lift cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(member.linkedin, '_blank')}
              >
                <div className="w-20 h-20 bg-gradient-neon rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-background">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.id}</p>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Head Office Location */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-heading mb-6">Our Head Office</h2>
            <p className="text-xl text-muted-foreground">
              Visit us at our headquarters in the heart of Mumbai
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Maidaan Headquarters</h3>
                  <p className="text-muted-foreground">
                    123 Sports Complex Road<br />
                    Bandra Kurla Complex<br />
                    Mumbai, Maharashtra 400051<br />
                    India
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 space-y-4">
                <h4 className="text-lg font-semibold">Office Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 space-y-4">
                <h4 className="text-lg font-semibold">Contact Information</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Phone: +91 98765 43210</p>
                  <p>Email: info@maidaan.com</p>
                  <p>Support: support@maidaan.com</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embedded */}
            <div className="bg-card rounded-xl overflow-hidden hover-lift">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0234567890!2d72.8656!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c9de654321%3A0x1234567890abcdef!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maidaan Head Office Location"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Partner Venues</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">10K+</div>
              <div className="text-muted-foreground">Active Players</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50K+</div>
              <div className="text-muted-foreground">Bookings Made</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;