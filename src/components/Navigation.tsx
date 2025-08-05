import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun, Volume2, VolumeX } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initialize audio with placeholder file (user can replace this)
    audioRef.current = new Audio('/naruto-theme-placeholder.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;
    
    // Add comprehensive error handling
    audioRef.current.addEventListener('error', (e) => {
      console.log('Audio placeholder not found - please add your Naruto theme music to /public/naruto-theme-placeholder.mp3');
    });
    
    audioRef.current.addEventListener('canplay', () => {
      console.log('Audio loaded successfully');
    });
    
    audioRef.current.addEventListener('loadstart', () => {
      console.log('Started loading audio file');
    });
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const navItems = [
    { label: 'Origin Story', href: '#about' },
    { label: 'Training Arc', href: '#education' },
    { label: 'Missions', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Connect', href: '#social' },
    { label: 'Anime Journey', href: '#anime' },
    { label: 'Summon Me', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#hero' || href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicOn) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
    }
    setIsMusicOn(!isMusicOn);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border anime-shadow' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-xl font-bold font-anime text-primary hover:text-accent transition-colors"
          >
            <span className="hero-gradient bg-clip-text text-transparent">
              Lokkesh.exe
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium anime-text relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="relative group"
              title={isDarkMode ? "Slice of Life Mode" : "Shonen Battle Mode"}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </Button>

            {/* Music Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMusic}
              className="relative group"
              title={isMusicOn ? "Mute OST" : "Play Anime OST"}
            >
              {isMusicOn ? (
                <Volume2 className="w-5 h-5 text-accent" />
              ) : (
                <VolumeX className="w-5 h-5 text-muted-foreground" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border anime-shadow">
            <div className="p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium anime-text py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Power Level Indicator */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
          <div 
            className="h-full power-gradient transition-all duration-300"
            style={{ 
              width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` 
            }}
          ></div>
        </div>
      )}
    </nav>
  );
};