import { ExternalLink, Github, Calendar, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'CG Library Function',
      period: 'Oct 2023 – May 2024',
      description: 'A comprehensive custom header file integrating multiple computer graphics algorithms including DDA, Bresenham, and Midpoint algorithms. Designed to provide modular code architecture for graphics-based applications.',
      tech: ['C', 'Computer Graphics', 'Algorithm Implementation'],
      features: [
        'DDA Line Drawing Algorithm',
        'Bresenham\'s Line Algorithm',
        'Midpoint Circle Algorithm',
        'Modular function architecture',
        'Optimized for graphics applications'
      ],
      image: '📊',
      category: 'System Programming',
      status: 'Completed'
    },
    {
      title: 'Project Review Platform',
      period: 'Jul 2024 – Mar 2025',
      description: 'A comprehensive multi-role academic project review system built with modern web technologies. Features secure authentication, file uploads, and mentor-student interaction capabilities.',
      tech: ['React', 'Node.js', 'Express.js', 'MySQL', 'Multer', 'Tailwind CSS'],
      features: [
        'Multi-role user authentication',
        'PDF, video, and PPT file uploads',
        'Real-time mentor remarks system',
        'Secure role-based access control',
        'Responsive design with Tailwind CSS',
        'RESTful API architecture'
      ],
      image: '🔍',
      category: 'Full-Stack Web Application',
      status: 'In Development'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating expertise in software development, 
            AI/ML implementation, and system design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="tech-card h-full hover:scale-105 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <Code className="h-3 w-3" />
                    {project.category}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 group"
                    onClick={() => window.open('https://github.com/Atharvb03', '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    View Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 group"
                    disabled={project.status !== 'Completed'}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <Button 
            className="hero-button group"
            onClick={() => window.open('https://github.com/Atharvb03', '_blank')}
          >
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Visit GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;