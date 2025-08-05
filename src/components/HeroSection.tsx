import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroAvatar from '@/assets/lokkesh-avatar.jpg';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced background with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="sakura-particle w-2 h-2 bg-accent rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
        {/* Energy Aura Effects */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`aura-${i}`}
            className="aura-effect"
            style={{
              animationDelay: `${i * 0.7}s`,
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
      
      {/* Main content with enhanced visibility */}
      <div className={`text-center z-10 px-4 hero-effect relative ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Background for better text contrast */}
        <div className="absolute inset-0 bg-background/10 backdrop-blur-sm rounded-3xl border border-border/20"></div>
        
        {/* Content */}
        <div className="relative z-10 py-8">
          {/* Avatar */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-primary anime-shadow animate-super-glow battle-stance">
              <img
                src={heroAvatar}
                alt="Lokkesh U P - Anime Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Title with enhanced contrast */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 font-anime drop-shadow-lg">
            <span className="hero-gradient bg-clip-text text-transparent drop-shadow-2xl">
              Welcome to
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-primary font-anime drop-shadow-lg">
            Lokkesh's Universe
          </h2>

          {/* Tagline with better background */}
          <div className="speech-bubble mb-8 max-w-2xl mx-auto bg-card/90 backdrop-blur-sm">
            <p className="text-lg md:text-xl lg:text-2xl font-medium anime-text text-foreground">
              "An AI student by day, Anime hero by night"
            </p>
          </div>

          {/* Stats display with enhanced visibility */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 text-sm md:text-base font-anime">
            <div className="power-card delay-100 bg-card/80 backdrop-blur-sm border border-border/50 px-3 py-2 rounded-lg">
              <span className="text-muted-foreground">Level:</span>
              <span className="text-primary font-bold ml-2">19</span>
            </div>
            <div className="power-card delay-200 bg-card/80 backdrop-blur-sm border border-border/50 px-3 py-2 rounded-lg">
              <span className="text-muted-foreground">Class:</span>
              <span className="text-accent font-bold ml-2">AI Mage</span>
            </div>
            <div className="power-card delay-300 bg-card/80 backdrop-blur-sm border border-border/50 px-3 py-2 rounded-lg">
              <span className="text-muted-foreground">Location:</span>
              <span className="text-secondary font-bold ml-2">Chennai</span>
            </div>
          </div>

          {/* CTA Button with enhanced visibility */}
          <Button
            onClick={scrollToAbout}
            className="anime-button text-base md:text-lg px-6 md:px-8 py-3 md:py-4 group relative overflow-hidden jutsu-seal combat-ready
              bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary 
              text-white font-bold shadow-2xl border-2 border-primary/50"
          >
            <span className="relative z-10">Enter the World</span>
            <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>

        {/* Scroll indicator with better visibility */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-foreground/60 rounded-full flex justify-center bg-background/20 backdrop-blur-sm">
            <div className="w-1 h-3 bg-foreground/80 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};