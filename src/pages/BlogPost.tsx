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
    title: "My Learnings This Week",
    date: "November 14, 2025",
    likes: 24,
    image: blogLearning,
    content: [
      "This week has been incredibly productive and full of new discoveries. I've been diving deep into various aspects of AI and machine learning, expanding my knowledge base significantly.",
      "One of the key takeaways was understanding how neural networks process information layer by layer. Each layer extracts different features from the input data, building up to more complex representations.",
      "I also spent time working on Python programming, particularly focusing on NumPy and Pandas libraries. These tools are essential for data manipulation and analysis in machine learning projects.",
      "The practical exercises helped solidify theoretical concepts. Building a simple classifier from scratch gave me insights into the mathematics behind ML algorithms."
    ]
  },
  2: {
    title: "Research on AI Models",
    date: "November 12, 2025",
    likes: 38,
    image: blogResearch,
    content: [
      "Artificial Intelligence models have evolved dramatically over the past few years. From simple linear models to complex transformer architectures, the field continues to push boundaries.",
      "Current research focuses on making AI models more efficient and interpretable. Large language models like GPT and BERT have shown remarkable capabilities in understanding and generating human language.",
      "Computer vision models such as ResNet and YOLO have revolutionized image recognition and object detection. These architectures use clever techniques like skip connections and anchor boxes to achieve high accuracy.",
      "The future of AI research lies in developing models that are not just powerful, but also ethical, sustainable, and accessible to everyone. Energy-efficient training methods and few-shot learning are promising areas."
    ]
  },
  3: {
    title: "Understanding Machine Learning Basics",
    date: "November 10, 2025",
    likes: 42,
    image: blogResearch,
    content: [
      "Machine learning is fundamentally about teaching computers to learn patterns from data. Instead of explicitly programming rules, we provide examples and let algorithms discover the patterns.",
      "There are three main types of machine learning: supervised learning (with labeled data), unsupervised learning (finding patterns in unlabeled data), and reinforcement learning (learning through trial and error).",
      "Key concepts include training data, features, models, and evaluation metrics. Features are the input variables we use to make predictions, while the model is the mathematical representation of patterns.",
      "Getting started is easier than ever with libraries like scikit-learn and TensorFlow. Start with simple algorithms like linear regression, then gradually move to more complex models as you build confidence."
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
