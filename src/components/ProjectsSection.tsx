import { ExternalLink, Github, Database, Brain, BarChart, Shield, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  icon: React.ReactNode;
  demoLink: string;
  codeLink: string;
  delay: number;
}

const ProjectCard = ({ title, description, techStack, icon, demoLink, codeLink, delay }: ProjectCardProps) => {
  return (
    <div 
      className="mission-card animate-fade-in-up group"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Mission Badge */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold font-anime text-primary group-hover:text-accent transition-colors">
            {title}
          </h3>
          <span className="text-sm text-muted-foreground">Mission Status: Completed</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-2 text-accent">Tech Arsenal:</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-muted rounded-full text-xs font-medium border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground"
          onClick={() => window.open(demoLink, '_blank')}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Live Demo
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 group/btn hover:bg-secondary hover:text-secondary-foreground"
          onClick={() => window.open(codeLink, '_blank')}
        >
          <Github className="w-4 h-4 mr-2" />
          View Code
        </Button>
      </div>

      {/* Power Level Indicator */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Difficulty Level:</span>
          <span className="text-accent font-bold">Advanced</span>
        </div>
        <div className="power-bar mt-1">
          <div className="power-fill w-4/5"></div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Titanic Survival Predictor",
      description: "Implemented machine learning models to predict passenger survival on the Titanic using Logistic Regression and Random Forest. Created an interactive Streamlit dashboard for real-time predictions with data visualization.",
      techStack: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Matplotlib", "Seaborn"],
      icon: <Database className="w-6 h-6" />,
      demoLink: "https://github.com",
      codeLink: "https://github.com",
      delay: 200
    },
    {
      title: "Iris Flower Classifier", 
      description: "Built a multi-class classification system using K-Nearest Neighbors and Support Vector Machine algorithms to classify iris flowers based on petal and sepal measurements with 98% accuracy.",
      techStack: ["Python", "Scikit-learn", "NumPy", "Matplotlib", "Jupyter"],
      icon: <Brain className="w-6 h-6" />,
      demoLink: "https://github.com",
      codeLink: "https://github.com",
      delay: 400
    },
    {
      title: "Email Spam Detector",
      description: "Developed a text classification model using Naive Bayes algorithm and NLTK for natural language processing. Achieved 95% accuracy in distinguishing spam from legitimate emails.",
      techStack: ["Python", "NLTK", "Scikit-learn", "Pandas", "WordCloud"],
      icon: <Shield className="w-6 h-6" />,
      demoLink: "https://github.com",
      codeLink: "https://github.com",
      delay: 600
    },
    {
      title: "House Price Estimator",
      description: "Created a regression model using Linear Regression and XGBoost to predict house prices based on various features. Built a responsive web application for interactive price estimation.",
      techStack: ["Python", "XGBoost", "Flask", "Pandas", "Plotly", "HTML/CSS"],
      icon: <TrendingUp className="w-6 h-6" />,
      demoLink: "https://github.com",
      codeLink: "https://github.com",
      delay: 800
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Implemented unsupervised anomaly detection using Isolation Forest algorithm to identify fraudulent credit card transactions. Handled imbalanced dataset with advanced preprocessing techniques.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Imbalanced-learn", "Seaborn"],
      icon: <Shield className="w-6 h-6" />,
      demoLink: "https://github.com",
      codeLink: "https://github.com",
      delay: 1000
    },
    {
      title: "Employee Turnover Analysis",
      description: "Analyzed HR dataset using Decision Trees and Logistic Regression to predict employee attrition. Created an interactive Power BI dashboard for HR insights and recommendations.",
      techStack: ["Python", "Power BI", "Pandas", "Scikit-learn", "Plotly"],
      icon: <Users className="w-6 h-6" />,
      demoLink: "https://github.com",
      codeLink: "https://github.com",
      delay: 1200
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 font-anime">
            <span className="hero-gradient bg-clip-text text-transparent">Missions Completed</span>
          </h2>
          <p className="text-xl text-muted-foreground japanese-text">完了したミッション</p>
          <p className="text-lg mt-4 text-muted-foreground max-w-3xl mx-auto">
            Like the Survey Corps in Attack on Titan, I've embarked on various data science missions, 
            each one pushing the boundaries of what's possible with AI and machine learning.
          </p>
        </div>

        {/* Mission Board Header */}
        <div className="text-center mb-12">
          <div className="manga-panel max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-primary font-anime mb-2">Mission Board</h3>
            <div className="flex justify-between text-sm">
              <span>Completed: <span className="text-accent font-bold">6</span></span>
              <span>Success Rate: <span className="text-accent font-bold">100%</span></span>
              <span>Rank: <span className="text-primary font-bold">S-Class</span></span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="speech-bubble max-w-2xl mx-auto mb-8">
            <p className="text-lg font-medium">
              "Every project is a new adventure, every algorithm a new jutsu to master. 
              The journey of a thousand models begins with a single dataset!"
            </p>
          </div>
          <Button className="anime-button text-lg px-8 py-4">
            View All Projects on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};