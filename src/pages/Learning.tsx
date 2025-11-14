import { BookOpen, Code, Lightbulb } from "lucide-react";

const Learning = () => {
  const topics = [
    {
      icon: Code,
      title: "Web Development",
      description: "React, TypeScript, Node.js, and modern web technologies"
    },
    {
      icon: Lightbulb,
      title: "Machine Learning",
      description: "Python, TensorFlow, and AI fundamentals"
    },
    {
      icon: BookOpen,
      title: "Computer Science",
      description: "Algorithms, data structures, and system design"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Learning Journey</h1>
          <p className="text-muted-foreground mb-12">
            Continuous learning is at the heart of everything I do. Here are the areas I'm currently exploring.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-[var(--shadow-card)] border border-border p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300"
              >
                <topic.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{topic.title}</h3>
                <p className="text-sm text-muted-foreground">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
