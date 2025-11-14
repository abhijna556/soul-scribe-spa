import BlogCard from "./BlogCard";

const blogPosts = [
  {
    id: 1,
    title: "My Learnings This Week",
    description: "A reflection on the key concepts and skills I've acquired this week, including new programming techniques and insights into AI development.",
    date: "November 14, 2025",
    likes: 24,
  },
  {
    id: 2,
    title: "Research on AI Models",
    description: "Exploring the latest advancements in artificial intelligence models, their architectures, and practical applications in real-world scenarios.",
    date: "November 12, 2025",
    likes: 38,
  },
  {
    id: 3,
    title: "Understanding Machine Learning Basics",
    description: "A beginner-friendly introduction to machine learning fundamentals, covering essential algorithms and concepts for AIML engineering students.",
    date: "November 10, 2025",
    likes: 42,
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
