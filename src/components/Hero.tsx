import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/atharv-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero">
      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up animate">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                🚀 Available for Work
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Atharv</span>
              </h1>
              <div className="text-2xl md:text-3xl text-muted-foreground font-light">
                <p>AI Enthusiast</p>
                <p>Full-Stack Web Developer</p>
                <p>Python Programmer</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Motivated Computer Science student passionate about developing intelligent systems 
              and solving real-world problems using AI technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="hero-button group"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="px-8 py-3 border-2 hover:bg-secondary transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/Atharvb03"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/atharv-bendkhale"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:atharvb03@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end fade-in-up animate">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-card p-2 rounded-full shadow-strong">
                <img
                  src={profilePhoto}
                  alt="Atharv Bendkhale"
                  className="w-80 h-80 rounded-full object-cover shadow-glow"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-medium animate-bounce-in">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-3 rounded-full shadow-medium animate-bounce-in">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;