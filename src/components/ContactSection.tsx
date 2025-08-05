import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent! 🎌",
      description: "Your message has been received. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 font-anime">
            <span className="hero-gradient bg-clip-text text-transparent">Summon Me</span>
          </h2>
          <p className="text-xl text-muted-foreground japanese-text">私を召喚する</p>
          <p className="text-lg mt-4 text-muted-foreground max-w-3xl mx-auto">
            Ready to embark on an epic AI adventure together? Send me a message and let's create 
            something amazing! Whether it's about projects, anime, or just to say hi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Scroll Style */}
          <div className="manga-panel animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 text-primary font-anime text-center">
              Send Your Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Your Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name..."
                  required
                  className="w-full border-2 border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full border-2 border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Your Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, favorite anime, or just say hello!"
                  rows={5}
                  required
                  className="w-full border-2 border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              {/* Hand-seal Submit Button */}
              <Button
                type="submit"
                className="w-full anime-button text-lg py-4 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="japanese-text">送信</span>
                  Cast Message Jutsu
                  <Send className="w-5 h-5" />
                </span>
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Details */}
            <div className="manga-panel">
              <h3 className="text-2xl font-bold mb-6 text-primary font-anime text-center">
                Guild Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">lokkeshup10i@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91-9444472225</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Availability Status */}
            <div className="manga-panel text-center">
              <h3 className="text-lg font-bold mb-2 text-accent font-anime">
                Current Status
              </h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-medium">Available for Projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Response time: Usually within 24 hours
              </p>
            </div>

            {/* Fun Quote */}
            <div className="speech-bubble">
              <p className="text-center font-medium italic">
                "Just like in anime, every great adventure starts with a single conversation. 
                Let's write our story together!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};