import BlogCard from "./BlogCard";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    description: "Learn how to set up a modern React project with TypeScript, exploring best practices and common patterns for building scalable applications.",
    date: "November 10, 2025",
    likes: 42,
  },
  {
    id: 2,
    title: "The Power of Tailwind CSS",
    description: "Discover how utility-first CSS can transform your development workflow and help you build beautiful, responsive interfaces faster than ever.",
    date: "November 8, 2025",
    likes: 38,
  },
  {
    id: 3,
    title: "Understanding Machine Learning Fundamentals",
    description: "A beginner-friendly introduction to machine learning concepts, algorithms, and how to get started with your first ML project using Python.",
    date: "November 5, 2025",
    likes: 56,
  },
  {
    id: 4,
    title: "Building RESTful APIs with Node.js",
    description: "Step-by-step guide to creating robust and scalable REST APIs using Node.js, Express, and modern JavaScript practices.",
    date: "November 2, 2025",
    likes: 45,
  },
  {
    id: 5,
    title: "Data Structures Every Developer Should Know",
    description: "Master the fundamental data structures that form the backbone of efficient algorithms and software design.",
    date: "October 28, 2025",
    likes: 67,
  },
  {
    id: 6,
    title: "Web Performance Optimization Techniques",
    description: "Practical tips and strategies to make your web applications faster, more efficient, and provide better user experiences.",
    date: "October 25, 2025",
    likes: 52,
  },
];

const BlogList = () => {
  return (
    <main className="flex-1 min-w-0">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Welcome to My Blog</h2>
        <p className="text-muted-foreground">
          Thoughts, stories, and ideas on technology, learning, and research.
        </p>
      </div>
      
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
};

export default BlogList;
