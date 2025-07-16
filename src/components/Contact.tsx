import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'atharvb03@gmail.com',
      href: 'mailto:atharvb03@gmail.com',
      color: 'text-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8446379837',
      href: 'tel:+918446379837',
      color: 'text-accent'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Atharvb03',
      href: 'https://github.com/Atharvb03',
      color: 'text-purple-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Atharv Bendkhale',
      href: 'https://linkedin.com/in/atharv-bendkhale',
      color: 'text-blue-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_gmcozni', // Service ID
        'template_23348h9', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Atharv', // Your name
        },
        '4N_reAjVRqT577ZvU' // Public Key
      );
      
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply connect with fellow developers and tech enthusiasts. Feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="tech-card hover:scale-105 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      <div className={`${item.color} mb-3 flex justify-center sm:justify-start`}>
                        <item.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1 text-center sm:text-left group-hover:text-primary transition-colors">
                        {item.label}
                      </h4>
                      <p className="text-sm text-muted-foreground text-center sm:text-left">
                        {item.value}
                      </p>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Location */}
            <Card className="tech-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-orange-500">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Khed, Maharashtra, India
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="tech-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Send Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full hero-button group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;