import { Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  id: number;
  title: string;
  description: string;
  date: string;
  likes: number;
}

const BlogCard = ({ id, title, description, date, likes }: BlogCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const navigate = useNavigate();

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleCardClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <article 
      onClick={handleCardClick}
      className="bg-card rounded-lg shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] border border-border p-6 transition-all duration-300 cursor-pointer group"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <button
          onClick={handleLike}
          className="flex items-center space-x-1 text-muted-foreground hover:text-destructive transition-colors"
        >
          <Heart
            className={`h-5 w-5 ${isLiked ? "fill-destructive text-destructive" : ""}`}
          />
          <span className="text-sm">{likeCount}</span>
        </button>
      </div>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{description}</p>
      <time className="text-xs text-muted-foreground">{date}</time>
    </article>
  );
};

export default BlogCard;
