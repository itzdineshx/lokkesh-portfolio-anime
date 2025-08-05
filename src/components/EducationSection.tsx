import { GraduationCap, Code, Database, Brain, BarChart } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  institution: string;
  percentage?: string;
  description: string;
  icon: React.ReactNode;
  isLeft: boolean;
  delay: number;
}

const TimelineItem = ({ year, title, institution, percentage, description, icon, isLeft, delay }: TimelineItemProps) => {
  return (
    <div className={`flex items-center mb-8 md:mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
      {/* Content Card */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} text-center md:text-left mb-4 md:mb-0`}>
        <div 
          className="anime-card animate-fade-in-up"
          style={{ animationDelay: `${delay}ms` }}
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            {!isLeft && <span className="md:block hidden">{icon}</span>}
            <span className="text-sm font-bold text-accent">{year}</span>
            {isLeft && <span className="md:block hidden">{icon}</span>}
            <span className="md:hidden">{icon}</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 font-anime text-primary">{title}</h3>
          <h4 className="text-base md:text-lg font-medium mb-2 text-foreground">{institution}</h4>
          {percentage && (
            <div className="text-xl md:text-2xl font-bold text-accent mb-2">{percentage}</div>
          )}
          <p className="text-sm md:text-base text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Timeline Dot - hidden on mobile */}
      <div className="hidden md:flex w-2/12 justify-center">
        <div className="timeline-dot animate-glow" style={{ animationDelay: `${delay}ms` }}></div>
      </div>

      {/* Empty Space - hidden on mobile */}
      <div className="hidden md:block w-5/12"></div>
    </div>
  );
};

const SkillOrb = ({ skill, icon, color, delay }: { skill: string; icon: React.ReactNode; color: string; delay: number }) => {
  return (
    <div 
      className="relative group cursor-pointer animate-float"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full animate-super-glow opacity-50 scale-110"></div>
      
      {/* Main orb */}
      <div className={`relative flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full ${color} text-white 
        transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 
        shadow-2xl border-2 border-white/20 backdrop-blur-sm
        before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr 
        before:from-white/30 before:to-transparent before:opacity-40
        overflow-hidden`}
      >
        {/* Inner energy effect */}
        <div className="absolute inset-2 rounded-full bg-white/10 animate-aura-pulse"></div>
        
        {/* Icon and text */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-2xl md:text-3xl mb-1 group-hover:scale-125 transition-transform duration-300">
            {icon}
          </div>
          <span className="text-xs md:text-sm font-bold font-anime text-center leading-tight">
            {skill}
          </span>
        </div>
        
        {/* Particle effects */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-4 right-3 w-1 h-1 bg-white rounded-full animate-ping delay-100"></div>
          <div className="absolute bottom-3 left-4 w-1 h-1 bg-white rounded-full animate-ping delay-200"></div>
        </div>
      </div>
      
      {/* Skill level indicator */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full ${
                i < (skill === 'Python' ? 5 : skill === 'Machine Learning' ? 4 : 3) 
                  ? 'bg-accent animate-glow' 
                  : 'bg-muted'
              }`}
              style={{ animationDelay: `${delay + i * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const EducationSection = () => {
  const timelineData = [
    {
      year: "2020-2021",
      title: "11th Standard",
      institution: "Sir Ramaswami Mudaliar Govt. School",
      percentage: "60.33%",
      description: "Foundation years where I discovered my passion for mathematics and logical problem-solving.",
      icon: <GraduationCap className="w-5 h-5 text-primary" />,
      isLeft: true,
      delay: 200
    },
    {
      year: "2021-2022", 
      title: "12th Standard",
      institution: "Sir Ramaswami Mudaliar Govt. School",
      percentage: "76.5%",
      description: "Advanced studies in science and mathematics, preparing for the next level of my journey.",
      icon: <GraduationCap className="w-5 h-5 text-secondary" />,
      isLeft: false,
      delay: 400
    },
    {
      year: "2023-2027",
      title: "B.Tech AI & Data Science",
      institution: "DMI College of Engineering",
      description: "Current pursuit in the fascinating world of Artificial Intelligence and Data Science, learning to create intelligent systems.",
      icon: <Brain className="w-5 h-5 text-accent" />,
      isLeft: true,
      delay: 600
    }
  ];

  const skills = [
    { skill: "C", icon: <Code />, color: "bg-anime-red", delay: 800 },
    { skill: "C++", icon: <Code />, color: "bg-anime-blue", delay: 1000 },
    { skill: "Python", icon: <Code />, color: "bg-anime-gold", delay: 1200 },
    { skill: "Machine Learning", icon: <Brain />, color: "bg-primary", delay: 1400 },
    { skill: "Data Analysis", icon: <BarChart />, color: "bg-secondary", delay: 1600 },
  ];

  return (
    <section id="education" className="py-16 md:py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-anime">
            <span className="power-gradient bg-clip-text text-transparent">Training Arc</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground japanese-text">成長の軌跡</p>
          <p className="text-base md:text-lg mt-2 text-muted-foreground max-w-2xl mx-auto">
            Like every great anime hero, my journey is marked by continuous growth, learning from each challenge, 
            and powering up with new abilities.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-12 md:mb-16">
          {/* Vertical line - hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-primary via-accent to-secondary"></div>
          
          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>

        {/* Skills Orbs */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 text-primary font-anime">Power Orbs Acquired</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Each orb represents a mastered ability. Hover to feel their power!
          </p>
          
          {/* Enhanced orbs container with better spacing and background */}
          <div className="relative">
            {/* Background energy effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-3xl blur-3xl"></div>
            
            <div className="relative grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 justify-items-center py-8 px-4">
              {skills.map((skill, index) => (
                <SkillOrb key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-8 md:mt-12">
          <div className="speech-bubble max-w-2xl mx-auto">
            <p className="text-base md:text-lg font-medium italic">
              "Just like Deku from My Hero Academia, I may have started with no special powers, 
              but through dedication and hard work, I'm building my own unique quirk in AI and Data Science!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};