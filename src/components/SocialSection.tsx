import { Instagram, Mail, MessageCircle, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SocialSection = () => {
  const socialPlatforms = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
      hoverColor: 'hover:from-purple-600 hover:via-pink-600 hover:to-orange-500',
      href: 'https://www.instagram.com/_master_of_ethics_/',
      username: '@_master_of_ethics_'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-green-400 to-green-600',
      hoverColor: 'hover:from-green-500 hover:to-green-700',
      href: 'https://wa.me/9444472225',
      username: '+91 XXXXX XXXXX'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
      hoverColor: 'hover:from-blue-600 hover:to-blue-800',
      href: 'mailto:lokkeshup10i@gmail.com',
      username: 'lokkeshup10i@gmail.com'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-gray-700 to-gray-900',
      hoverColor: 'hover:from-gray-800 hover:to-black',
      href: 'https://www.youtube.com/watch?v=OxgKzHUupBM',
      username: '@lokkesh'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-700 hover:to-blue-900',
      href: 'https://www.youtube.com/watch?v=OxgKzHUupBM',
      username: '/in/lokkesh'
    }
  ];

  const handlePlatformClick = (platform: typeof socialPlatforms[0]) => {
    if (platform.href === '#') {
      console.log(`${platform.name} link not configured yet`);
      return;
    }
    window.open(platform.href, '_blank');
  };

  return (
    <section id="social" className="py-16 md:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-anime">
            <span className="accent-gradient bg-clip-text text-transparent">Connect on Other Platforms</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground japanese-text">
            つながりましょう
          </p>
          <p className="text-base md:text-lg mt-2 text-muted-foreground max-w-2xl mx-auto">
            Let's continue our adventure together! Connect with me across different platforms 
            for anime discussions, coding insights, and more fun content.
          </p>
        </div>

        {/* Social Platforms Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-12">
          {socialPlatforms.map((platform, index) => (
            <div
              key={platform.name}
              className="anime-card group cursor-pointer relative overflow-hidden"
              onClick={() => handlePlatformClick(platform)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-6 gap-1 h-full">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className={`${platform.color.split(' ')[1]} rounded-sm`}></div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center p-6 md:p-8">
                {/* Icon with platform colors */}
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full ${platform.color} ${platform.hoverColor} 
                  flex items-center justify-center text-white shadow-2xl transition-all duration-300 
                  group-hover:scale-110 group-hover:rotate-6`}>
                  {platform.icon}
                </div>

                {/* Platform name */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground font-anime group-hover:text-primary transition-colors">
                  {platform.name}
                </h3>

                {/* Username/contact */}
                <p className="text-sm md:text-base text-muted-foreground mb-4 font-mono">
                  {platform.username}
                </p>

                {/* Connect button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  Connect
                </Button>

                {/* Hover effect lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent 
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent 
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
              </div>

              {/* Anime-style corner decoration */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/30 
                group-hover:border-primary transition-colors"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-accent/30 
                group-hover:border-accent transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center">
          <div className="speech-bubble max-w-3xl mx-auto animate-fade-in-up">
            <p className="text-base md:text-lg font-medium italic">
              "Just like how anime characters form bonds across different worlds, 
              let's connect across different platforms and share our passion for technology and anime!"
            </p>
          </div>
        </div>

        {/* Fun statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-lg bg-muted/20 border border-border/50">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
            <div className="text-xs md:text-sm text-muted-foreground">Available for anime discussions</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/20 border border-border/50">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">∞</div>
            <div className="text-xs md:text-sm text-muted-foreground">Code debugging sessions</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/20 border border-border/50">
            <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Anime enthusiasm</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/20 border border-border/50">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">1-3</div>
            <div className="text-xs md:text-sm text-muted-foreground">Business days response</div>
          </div>
        </div>
      </div>
    </section>
  );
};