import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { EducationSection } from '@/components/EducationSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { DownloadResumeSection } from '@/components/DownloadResumeSection';
import { SocialSection } from '@/components/SocialSection';
import { AnimeSection } from '@/components/AnimeSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <DownloadResumeSection />
      <SocialSection />
      <AnimeSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🎌</span>
            <p className="font-anime text-lg">
              Made with ❤️ and lots of anime inspiration
            </p>
            <span className="text-2xl">⚡</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2025 Lokkesh U P. All rights reserved. | 
            <span className="japanese-text ml-2">頑張って！</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
