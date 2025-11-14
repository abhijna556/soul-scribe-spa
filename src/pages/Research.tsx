import { Microscope, FileText, TrendingUp } from "lucide-react";

const Research = () => {
  const projects = [
    {
      icon: Microscope,
      title: "Neural Network Optimization",
      description: "Exploring efficient training methods for deep learning models"
    },
    {
      icon: TrendingUp,
      title: "Web Performance Analysis",
      description: "Studying patterns in modern web application performance"
    },
    {
      icon: FileText,
      title: "Developer Tools Research",
      description: "Investigating ways to improve developer productivity"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Research</h1>
          <p className="text-muted-foreground mb-12">
            My research interests span across computer science, with a focus on practical applications and real-world impact.
          </p>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-[var(--shadow-card)] border border-border p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <project.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
