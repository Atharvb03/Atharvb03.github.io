import { Download, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: 'B.E. in CSE-AIML',
      institution: 'Gharda Institute Of Technology',
      period: 'Expected 2026',
      location: 'Maharashtra',
      icon: '🎓',
    },
    {
      degree: 'HSC (Higher Secondary Certificate)',
      institution: 'Dnyandeep Vidya Mandir College',
      period: 'Completed',
      location: 'Khed, Maharashtra',
      icon: '📚',
    },
    {
      degree: 'SSC (Secondary School Certificate)',
      institution: 'L.T.T English Medium School',
      period: 'Completed',
      location: 'Khed, Maharashtra',
      icon: '🏫',
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-8"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Motivated Computer Science student with a strong foundation in{' '}
                <span className="text-primary font-semibold">Artificial Intelligence</span> and{' '}
                <span className="text-accent font-semibold">Python programming</span>. 
                Deeply interested in developing intelligent systems and solving real-world problems 
                using AI technologies.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Skilled in modern web development tools including{' '}
                <span className="text-primary font-semibold">HTML, CSS, JavaScript, React</span>, and{' '}
                <span className="text-accent font-semibold">MongoDB</span>. Currently focused on 
                enhancing expertise in AI algorithms, data-driven development, and Python-based 
                applications to build innovative and impactful solutions.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Khed, Maharashtra</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>

            <Button 
              className="hero-button group"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Atharv Final Resume.pdf';
                link.download = 'Atharv Final Resume.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              Download Resume
            </Button>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                Education Timeline
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="tech-card border-l-4 border-l-primary hover:border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{item.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {item.degree}
                        </h4>
                        <p className="text-primary font-medium mb-1">
                          {item.institution}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;