import { useState, useEffect, useRef } from 'react';

interface PowerBarProps {
  skill: string;
  percentage: number;
  color: string;
  delay: number;
}

const PowerBar = ({ skill, percentage, color, delay }: PowerBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={barRef} className="mb-4">
      <div className="flex justify-between mb-2 items-center">
        <span className="font-anime font-medium text-sm md:text-base">{skill}</span>
        <span className="font-bold text-primary text-sm md:text-base">{percentage}%</span>
      </div>
      <div className="power-bar">
        <div
          className={`power-fill transition-all duration-2000 ease-out ${
            isVisible ? 'w-full' : 'w-0'
          }`}
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  );
};

export const AboutSection = () => {
  const technicalSkills = [
    { skill: 'Python', percentage: 90, color: 'bg-anime-gold', delay: 200 },
    { skill: 'C++', percentage: 80, color: 'bg-anime-blue', delay: 400 },
    { skill: 'C', percentage: 70, color: 'bg-anime-red', delay: 600 },
    { skill: 'Data Visualization', percentage: 85, color: 'bg-secondary', delay: 800 },
  ];

  const softSkills = [
    { skill: 'Responsibility', percentage: 100, color: 'bg-anime-red', delay: 1000 },
    { skill: 'Teamwork', percentage: 95, color: 'bg-anime-gold', delay: 1200 },
    { skill: 'Communication', percentage: 90, color: 'bg-anime-blue', delay: 1400 },
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-anime">
            <span className="accent-gradient bg-clip-text text-transparent">Origin Story</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground japanese-text">キャラクタープロフィール</p>
        </div>

        {/* Manga Panel Layout */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Left Panel - Story */}
          <div className="manga-panel animate-slide-in-left">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary font-anime">The Journey Begins</h3>
            <div className="space-y-3 md:space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                Born on <span className="text-accent font-bold">October 22, 2005</span> in the vibrant city of Chennai, 
                my adventure into the world of technology began early.
              </p>
              <p>
                Like any good anime protagonist, I discovered my passion for <span className="text-primary font-bold">coding at age 15</span>, 
                when lines of code felt like magic spells that could bring digital worlds to life.
              </p>
              <p>
                Currently pursuing <span className="text-secondary font-bold">B.Tech in Artificial Intelligence & Data Science</span> 
                at DMI College of Engineering (2023-2027), I'm on a quest to master the arts of 
                machine learning, data visualization, and turning data into meaningful stories.
              </p>
              <p className="text-accent font-medium italic text-sm md:text-base">
                "Every dataset has a story to tell, just like every anime has a lesson to teach."
              </p>
            </div>
          </div>

          {/* Right Panel - Stats */}
          <div className="manga-panel animate-slide-in-right">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary font-anime">Character Stats</h3>
            
            {/* Technical Skills */}
            <div className="mb-6 md:mb-8">
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-accent">Technical Abilities</h4>
              {technicalSkills.map((skill, index) => (
                <PowerBar key={index} {...skill} />
              ))}
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-accent">Special Traits</h4>
              {softSkills.map((skill, index) => (
                <PowerBar key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Personal Quote */}
        <div className="text-center">
          <div className="speech-bubble max-w-3xl mx-auto animate-fade-in-up">
            <p className="text-base md:text-xl font-medium japanese-text">
              "Like Senku from Dr. Stone, I believe in the power of science and logic. 
              But like Tanjiro from Demon Slayer, I never forget the importance of kindness and determination."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};