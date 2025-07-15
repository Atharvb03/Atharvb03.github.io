import { Code, Brain, Database, Smartphone, Globe, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      icon: Globe,
      description: 'Full-stack web development solutions using modern technologies and best practices.',
      features: [
        'Responsive frontend development with React and Tailwind CSS',
        'Backend development with Node.js & Express.js',
        'Database integration with MongoDB and MySQL',
        'RESTful API design and development',
        'Modern UI/UX implementation',
        'Performance optimization'
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Tailwind CSS'],
      color: 'text-primary',
      bgGradient: 'bg-gradient-to-br from-primary/10 to-accent/10'
    },
    {
      title: 'AI Solutions',
      icon: Brain,
      description: 'Intelligent systems and AI-powered applications to solve complex real-world problems.',
      features: [
        'AI/ML model development and training',
        'Python-based intelligent systems',
        'Data-driven application development',
        'Algorithm optimization and implementation',
        'Predictive analytics solutions',
        'Computer vision applications'
      ],
      technologies: ['Python', 'Machine Learning', 'AI Algorithms', 'Data Analysis', 'TensorFlow'],
      color: 'text-accent',
      bgGradient: 'bg-gradient-to-br from-accent/10 to-primary/10'
    }
  ];

  const additionalServices = [
    {
      title: 'Database Design',
      icon: Database,
      description: 'Efficient database architecture and optimization'
    },
    {
      title: 'API Development',
      icon: Code,
      description: 'RESTful APIs and backend services'
    },
    {
      title: 'System Architecture',
      icon: Cpu,
      description: 'Scalable system design and implementation'
    },
    {
      title: 'Mobile-First Design',
      icon: Smartphone,
      description: 'Responsive and mobile-optimized solutions'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional development services combining cutting-edge technology with innovative problem-solving approaches
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`tech-card h-full ${service.bgGradient} border-2 hover:border-primary/30 transition-all duration-300 group`}>
              <CardHeader className="pb-4">
                <div className={`${service.color} mb-4 flex justify-center lg:justify-start`}>
                  <service.icon className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-2xl font-bold text-center lg:text-left group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground text-center lg:text-left">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What I Offer:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className={`${service.color} mt-1`}>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={scrollToContact}
                  className="w-full mt-6 group"
                  variant={index === 0 ? "default" : "outline"}
                >
                  Get Started
                  <service.icon className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Additional Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="tech-card text-center hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    <service.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-hero rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          <Button onClick={scrollToContact} className="hero-button">
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;