import { NavLink } from "@/components/NavLink";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Learning", path: "/learning" },
    { name: "Research", path: "/research" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-primary">MyBlog</h1>
            <div className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="px-4 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                  activeClassName="text-primary bg-accent/50"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <Button variant="ghost" size="icon" className="hover:bg-accent">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
