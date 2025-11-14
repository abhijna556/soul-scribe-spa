import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import blogTech from "@/assets/blog-tech.jpg";
import blogLearning from "@/assets/blog-learning.jpg";
import blogResearch from "@/assets/blog-research.jpg";

const blogPostData: Record<number, { 
  title: string; 
  date: string; 
  likes: number; 
  image: string;
  content: string[];
}> = {
  1: {
    title: "Getting Started with React and TypeScript",
    date: "November 10, 2025",
    likes: 42,
    image: blogTech,
    content: [
      "React and TypeScript together create a powerful combination for building modern web applications. TypeScript brings static typing to JavaScript, catching errors early and improving code quality.",
      "Setting up a React TypeScript project has never been easier with tools like Vite. The development experience is smooth, with fast refresh and excellent type inference.",
      "Key benefits include better IDE support, refactoring confidence, and self-documenting code through type definitions. Your team will thank you for the improved developer experience.",
      "Start by defining your component props with interfaces, use type inference where possible, and embrace the compiler as your friend. TypeScript will help you write more maintainable code."
    ]
  },
  2: {
    title: "The Power of Tailwind CSS",
    date: "November 8, 2025",
    likes: 38,
    image: blogTech,
    content: [
      "Tailwind CSS revolutionizes how we think about styling web applications. Instead of writing custom CSS, you compose designs using utility classes directly in your markup.",
      "The utility-first approach might seem verbose at first, but it leads to more consistent designs and faster development. No more context switching between files!",
      "Tailwind's design system is built-in, with carefully crafted spacing, colors, and typography scales. This ensures your designs are visually coherent without extra effort.",
      "With JIT mode, you get instant compilation and purging, resulting in tiny production bundles. Plus, the developer experience with autocomplete and IntelliSense is phenomenal."
    ]
  },
  3: {
    title: "Understanding Machine Learning Fundamentals",
    date: "November 5, 2025",
    likes: 56,
    image: blogResearch,
    content: [
      "Machine learning has transformed how we solve complex problems. At its core, ML is about teaching computers to learn from data and make predictions or decisions.",
      "The journey begins with understanding the difference between supervised, unsupervised, and reinforcement learning. Each approach tackles different types of problems.",
      "Key concepts include training data, features, models, and evaluation metrics. These building blocks form the foundation of any ML project.",
      "Start with simple algorithms like linear regression and gradually move to more complex models. Python libraries like scikit-learn make getting started accessible to everyone."
    ]
  },
  4: {
    title: "Building RESTful APIs with Node.js",
    date: "November 2, 2025",
    likes: 45,
    image: blogTech,
    content: [
      "RESTful APIs are the backbone of modern web applications. Node.js, with its event-driven architecture, is perfect for building fast, scalable APIs.",
      "Express.js simplifies routing, middleware, and request handling. Combined with modern JavaScript features, you can build clean, maintainable API servers.",
      "Important principles include proper HTTP method usage, meaningful status codes, and consistent endpoint naming. These conventions make your API intuitive to use.",
      "Don't forget about authentication, error handling, and validation. Tools like JWT, express-validator, and proper error middleware are essential for production-ready APIs."
    ]
  },
  5: {
    title: "Data Structures Every Developer Should Know",
    date: "October 28, 2025",
    likes: 67,
    image: blogLearning,
    content: [
      "Data structures are fundamental to programming. They determine how we store, organize, and access data efficiently in our applications.",
      "Arrays, linked lists, stacks, and queues are the basics. Understanding when to use each one can dramatically improve your code's performance.",
      "Trees and graphs unlock solutions to complex problems like hierarchical data and network relationships. Binary search trees, in particular, offer logarithmic search times.",
      "Hash tables provide near-constant time lookups, making them invaluable for caching and fast data retrieval. Master these structures to become a better developer."
    ]
  },
  6: {
    title: "Web Performance Optimization Techniques",
    date: "October 25, 2025",
    likes: 52,
    image: blogTech,
    content: [
      "Web performance directly impacts user experience and conversion rates. Even small improvements in load time can significantly boost engagement.",
      "Start with the basics: optimize images, minify assets, and leverage browser caching. These quick wins often provide the biggest performance gains.",
      "Code splitting and lazy loading reduce initial bundle size, making your app load faster. Only load what users need, when they need it.",
      "Measure everything with tools like Lighthouse and WebPageTest. Performance optimization is an iterative process guided by real data, not guesswork."
    ]
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postId = parseInt(id || "1");
  const post = blogPostData[postId] || blogPostData[1];
  
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-accent"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-[var(--shadow-card)]"
            />
          </div>

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">{post.title}</h1>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {post.date}
                </span>
              </div>
              <button
                onClick={handleLike}
                className="flex items-center space-x-2 text-muted-foreground hover:text-destructive transition-colors"
              >
                <Heart
                  className={`h-5 w-5 ${isLiked ? "fill-destructive text-destructive" : ""}`}
                />
                <span>{likeCount} likes</span>
              </button>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-foreground/90 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
