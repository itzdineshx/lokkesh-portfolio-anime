import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AnimeData {
  title: string;
  lesson: string;
  poster: string;
  rating: number;
  genre: string;
}

export const AnimeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const animeList: AnimeData[] = [
    {
      title: "Naruto",
      lesson: "Never give up on your dreams, no matter how impossible they seem.",
      poster: "🍥",
      rating: 9.5,
      genre: "Shonen"
    },
    {
      title: "One Piece", 
      lesson: "Adventure is the heart of life, and friendship is the greatest treasure.",
      poster: "🏴‍☠️",
      rating: 9.8,
      genre: "Adventure"
    },
    {
      title: "Attack on Titan",
      lesson: "Freedom comes at a price, but it's worth fighting for.",
      poster: "⚔️",
      rating: 9.7,
      genre: "Dark Fantasy"
    },
    {
      title: "My Hero Academia",
      lesson: "Anyone can be a hero if they have the heart to help others.",
      poster: "🦸",
      rating: 9.2,
      genre: "Superhero"
    },
    {
      title: "Demon Slayer",
      lesson: "Kindness and determination can overcome even the darkest evil.",
      poster: "🗡️",
      rating: 9.4,
      genre: "Supernatural"
    },
    {
      title: "Jujutsu Kaisen",
      lesson: "Sometimes you have to be a little crazy to do what's right.",
      poster: "👻",
      rating: 9.3,
      genre: "Supernatural"
    },
    {
      title: "Fullmetal Alchemist",
      lesson: "To obtain something, something of equal value must be lost.",
      poster: "⚗️",
      rating: 9.9,
      genre: "Adventure"
    },
    {
      title: "Steins;Gate",
      lesson: "The choices we make create the timeline we live in.",
      poster: "⏰",
      rating: 9.6,
      genre: "Sci-Fi"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % animeList.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, animeList.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % animeList.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + animeList.length) % animeList.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const getVisibleAnime = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % animeList.length;
      visible.push({ ...animeList[index], index });
    }
    return visible;
  };

  return (
    <section id="anime" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 font-anime">
            <span className="accent-gradient bg-clip-text text-transparent">My Anime Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground japanese-text">私のアニメの旅</p>
          <p className="text-lg mt-4 text-muted-foreground max-w-3xl mx-auto">
            Every great anime teaches us something valuable. Here are the stories that shaped my worldview 
            and continue to inspire my journey in AI and life.
          </p>
        </div>

        {/* Anime Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 h-12 w-12 rounded-full border-primary hover:bg-primary hover:text-primary-foreground"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 h-12 w-12 rounded-full border-primary hover:bg-primary hover:text-primary-foreground"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Carousel Content */}
          <div className="mx-12">
            <div className="grid md:grid-cols-3 gap-6">
              {getVisibleAnime().map((anime, idx) => (
                <div
                  key={anime.index}
                  className={`anime-card transition-all duration-500 ${
                    idx === 1 ? 'scale-110 z-10' : 'scale-95 opacity-75'
                  }`}
                >
                  {/* Anime Poster */}
                  <div className="text-center mb-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary via-accent to-secondary rounded-lg flex items-center justify-center text-6xl mb-4 anime-shadow">
                      {anime.poster}
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-bold text-accent">{anime.rating}</span>
                      <span className="text-sm text-muted-foreground">/ 10</span>
                    </div>
                    
                    {/* Genre Badge */}
                    <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium border border-border">
                      {anime.genre}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-center mb-3 text-primary font-anime">
                    {anime.title}
                  </h3>

                  {/* Lesson */}
                  <div className="speech-bubble">
                    <p className="text-sm font-medium text-center leading-relaxed">
                      "{anime.lesson}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {animeList.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center anime-card">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Episodes Watched</p>
          </div>
          <div className="text-center anime-card">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <p className="text-muted-foreground">Anime Series Completed</p>
          </div>
          <div className="text-center anime-card">
            <div className="text-3xl font-bold text-secondary mb-2">∞</div>
            <p className="text-muted-foreground">Life Lessons Learned</p>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center mt-12">
          <div className="speech-bubble max-w-3xl mx-auto">
            <p className="text-lg font-medium italic">
              "Anime taught me that with enough determination, training, and the power of friendship, 
              you can overcome any algorithm... I mean, any obstacle! Plus Ultra! 💪"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};