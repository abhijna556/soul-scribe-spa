const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Me</h1>
          <div className="bg-card rounded-lg shadow-[var(--shadow-card)] border border-border p-8">
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Welcome! I'm Alex Johnson, a passionate computer science student and developer
              with a deep interest in creating meaningful digital experiences.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              My journey in technology started with curiosity about how things work under the hood.
              Now, I spend my time building web applications, exploring machine learning concepts,
              and contributing to open-source projects.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Through this blog, I share my learning experiences, technical insights, and research
              findings. I believe in learning by doing and teaching by sharing.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              When I'm not coding, you can find me reading tech blogs, experimenting with new
              frameworks, or collaborating with fellow developers on exciting projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
