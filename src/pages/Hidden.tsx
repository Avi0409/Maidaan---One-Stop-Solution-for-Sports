import { Shield, Users, Target, Code, Award, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const Hidden = () => {
  const teamMembers = [
    { 
      name: 'Avi Shrivastava', 
      id: 'IPM05086', 
      role: 'Project Lead & Frontend Developer',
      linkedin: 'https://linkedin.com/in/avi-shrivastava',
      skills: ['React', 'TypeScript', 'UI/UX Design', 'Project Management']
    },
    { 
      name: 'Bhavya Modi', 
      id: 'IPM05088', 
      role: 'UI/UX Designer & Developer',
      linkedin: '#',
      skills: ['Figma', 'Design Systems', 'Frontend Development', 'User Research']
    },
    { 
      name: 'Ishika Gupta', 
      id: 'IPM05168', 
      role: 'Backend Developer',
      linkedin: '#',
      skills: ['Node.js', 'Database Design', 'API Development', 'Cloud Architecture']
    },
    { 
      name: 'Vansh Gupta', 
      id: 'IPM05143', 
      role: 'Full Stack Developer',
      linkedin: '#',
      skills: ['React', 'Node.js', 'MongoDB', 'DevOps']
    },
    { 
      name: 'Dev Ganatra', 
      id: 'IPM05191', 
      role: 'Database Architect',
      linkedin: '#',
      skills: ['PostgreSQL', 'Database Optimization', 'Data Modeling', 'Analytics']
    },
    { 
      name: 'Kaustubh Gupta', 
      id: 'IPM05176', 
      role: 'DevOps & Security',
      linkedin: '#',
      skills: ['AWS', 'Docker', 'Security', 'CI/CD']
    },
    { 
      name: 'Yusuf Jameel Hashmi', 
      id: 'IPM05181', 
      role: 'Quality Assurance & Testing',
      linkedin: '#',
      skills: ['Test Automation', 'Quality Assurance', 'Performance Testing', 'Bug Tracking']
    },
  ];

  const designPhilosophy = [
    {
      principle: 'User-Centric Design',
      description: 'Every design decision prioritizes user experience and accessibility'
    },
    {
      principle: 'Visual Hierarchy',
      description: 'Clear information architecture guides users through the platform seamlessly'
    },
    {
      principle: 'Consistent Design System',
      description: 'Unified color palette, typography, and component library ensures consistency'
    },
    {
      principle: 'Performance Optimization',
      description: 'Optimized images, lazy loading, and efficient code for fast loading times'
    },
    {
      principle: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect experience across all devices'
    },
    {
      principle: 'Accessibility Standards',
      description: 'WCAG 2.1 compliance with semantic HTML, ARIA labels, and keyboard navigation'
    }
  ];

  const technicalSpecs = [
    { feature: 'Framework', implementation: 'React 18 with TypeScript' },
    { feature: 'Styling', implementation: 'Tailwind CSS with custom design system' },
    { feature: 'State Management', implementation: 'React Query for server state, React Context for client state' },
    { feature: 'Routing', implementation: 'React Router v6 with nested routes' },
    { feature: 'Authentication', implementation: 'JWT-based authentication with secure storage' },
    { feature: 'Performance', implementation: 'Code splitting, lazy loading, optimized images' },
    { feature: 'Accessibility', implementation: 'ARIA labels, semantic HTML, keyboard navigation' },
    { feature: 'SEO', implementation: 'Meta tags, structured data, sitemap optimization' },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold neon-glow">Maidaan - Technical Documentation</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive project documentation for academic evaluation and technical assessment
          </p>
          <Badge variant="outline" className="mt-4">
            Assignment Submission - Sports Platform Project
          </Badge>
        </div>

        {/* Team Information Table */}
        <Card className="mb-12 neon-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-6 h-6 mr-2" />
              Team Members & Roles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Key Skills</TableHead>
                  <TableHead>LinkedIn</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell className="text-primary font-mono">{member.id}</TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <a 
                        href={member.linkedin} 
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Profile
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Design Philosophy */}
        <Card className="mb-12 neon-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="w-6 h-6 mr-2" />
              Design Philosophy & Principles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {designPhilosophy.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold text-primary">{item.principle}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technical Implementation */}
        <Card className="mb-12 neon-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Code className="w-6 h-6 mr-2" />
              Technical Implementation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Implementation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {technicalSpecs.map((spec, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{spec.feature}</TableCell>
                    <TableCell>{spec.implementation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Project Requirements Compliance */}
        <Card className="mb-12 neon-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="w-6 h-6 mr-2" />
              Assignment Requirements Compliance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-primary mb-3">✅ Completed Requirements</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 6+ pages with consistent navigation</li>
                  <li>• Responsive design (mobile, tablet, desktop)</li>
                  <li>• Dark/Light mode toggle</li>
                  <li>• Multi-language support (English/Hindi)</li>
                  <li>• Accessibility features (ARIA, semantic HTML)</li>
                  <li>• SEO optimization with meta tags</li>
                  <li>• Custom favicon implementation</li>
                  <li>• Google Maps integration</li>
                  <li>• Form validation on login/signup</li>
                  <li>• Hidden admin page for evaluation</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-primary mb-3">🎯 Key Features</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Sports venue booking system</li>
                  <li>• Player connection platform</li>
                  <li>• Real-time availability display</li>
                  <li>• Interactive sport selection</li>
                  <li>• Team member showcase</li>
                  <li>• Contact information with maps</li>
                  <li>• Performance optimized images</li>
                  <li>• Consistent design system</li>
                  <li>• Secure authentication flow</li>
                  <li>• Modern UI with neon theme</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Testimonials Section */}
        <Card className="mb-12 neon-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-6 h-6 mr-2" />
              Customer Testimonials Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="font-semibold text-primary">Why Customer Testimonials Are Essential</h3>
              <p className="text-muted-foreground">
                Customer testimonials are crucial for building trust and credibility in our sports platform. 
                They would be strategically placed on:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>• Homepage hero section to build immediate trust</li>
                <li>• Individual sport pages to show sport-specific success stories</li>
                <li>• Venue booking pages to reduce booking hesitation</li>
                <li>• About Us page to humanize our brand</li>
                <li>• Find Players section to encourage community participation</li>
              </ul>
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm">
                  <strong>Implementation Note:</strong> In a production environment, testimonials would be 
                  dynamically loaded from a database with user photos, ratings, and verified booking history 
                  to ensure authenticity and real-time updates.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-8 border-t border-border">
          <p className="text-muted-foreground">
            This documentation page is accessible only to authorized personnel for academic evaluation.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Generated automatically as part of the Maidaan Sports Platform project submission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hidden;