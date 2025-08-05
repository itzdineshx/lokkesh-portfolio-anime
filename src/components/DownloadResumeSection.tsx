import { Download, FileText, Star, Calendar, MapPin, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DownloadResumeSection = () => {
  const handleDownload = () => {
    // Placeholder function - user can implement actual download logic
    console.log('Resume download initiated - please implement download functionality');
    window.open('lokkesh_resume.pdf', '_blank');
  };

  const resumeStats = [
    { icon: <Code2 className="w-5 h-5" />, label: "Programming Languages", value: "5+" },
    { icon: <Star className="w-5 h-5" />, label: "Projects Completed", value: "10+" },
    { icon: <Calendar className="w-5 h-5" />, label: "Years of Learning", value: "3+" },
    { icon: <MapPin className="w-5 h-5" />, label: "Based In", value: "Chennai" },
  ];

  return (
    <section id="resume" className="py-16 md:py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-anime">
            <span className="power-gradient bg-clip-text text-transparent">Character Profile</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground japanese-text">
            履歴書をダウンロード
          </p>
          <p className="text-base md:text-lg mt-2 text-muted-foreground max-w-2xl mx-auto">
            Download my complete character sheet with all abilities, stats, and achievements unlocked so far!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Resume Preview */}
          <div className="order-2 lg:order-1">
            <div className="anime-card p-6 md:p-8 bg-card relative overflow-hidden group">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-8 md:grid-cols-12 gap-2 h-full">
                  {[...Array(96)].map((_, i) => (
                    <div key={i} className="bg-primary rounded-sm"></div>
                  ))}
                </div>
              </div>

              {/* Resume Preview */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <FileText className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary font-anime">
                      Lokkesh U P
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      AI & Data Science Student
                    </p>
                  </div>
                </div>

                {/* Resume Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {resumeStats.map((stat, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-background/50 border border-border/50
                        hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-primary">{stat.icon}</div>
                      <div>
                        <div className="text-lg md:text-xl font-bold text-accent">
                          {stat.value}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Preview Text */}
                <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
                  <div className="h-2 bg-muted rounded w-full"></div>
                  <div className="h-2 bg-muted rounded w-4/5"></div>
                  <div className="h-2 bg-muted rounded w-3/4"></div>
                  <div className="h-2 bg-muted rounded w-5/6"></div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Right Side - Download CTA */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground font-anime">
                  Ready to see my full potential?
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  My resume contains detailed information about my journey, skills, projects, 
                  and the special techniques I've mastered in the world of AI and Data Science.
                </p>
              </div>

              {/* Download Button */}
              <div className="space-y-4">
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="anime-button group relative overflow-hidden text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
                >
                  <div className="flex items-center gap-3">
                    <Download className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce" />
                    <span className="font-bold">Download Resume</span>
                  </div>
                  
                  {/* Button Energy Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Button>

                <p className="text-xs md:text-sm text-muted-foreground italic">
                  "A true shinobi always keeps their profile updated!" - Naruto Uzumaki
                </p>
              </div>

              {/* File Info */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">PDF Format • Updated 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-12 md:mt-16">
          <div className="speech-bubble max-w-3xl mx-auto animate-fade-in-up">
            <p className="text-base md:text-lg font-medium italic">
              "Just like how every anime character has their character sheet, 
              this resume is my way of showing you all the stats and abilities I've unlocked on my journey!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};