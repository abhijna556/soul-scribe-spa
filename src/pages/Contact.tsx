import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:alex@example.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Get in Touch</h1>
          <div className="bg-card rounded-lg shadow-[var(--shadow-card)] border border-border p-8">
            <p className="text-foreground/90 mb-8 leading-relaxed">
              I'm always interested in connecting with fellow developers, researchers, and learners.
              Feel free to reach out through any of the following channels:
            </p>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start hover:bg-accent hover:border-primary transition-all"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="mr-3 h-5 w-5" />
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
