import { Link } from "react-router-dom";
import { Post } from "@/data/posts";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { GradientDots } from "@/components/ui/gradient-dots";

interface PostCardGridProps {
  posts: Post[];
}

const PostCardGrid = ({ posts }: PostCardGridProps) => {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-8">
      {posts.map((post) => (
        <Link
          to={`/posts/${post.slug}`}
          key={post.id}
          className="group"
        >
          <GlowCard 
            customSize={true} 
            className="w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-sm h-full"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                src={post.imageUrl}
                alt={post.title}
              />
            </div>
            <div className="relative p-4 overflow-hidden">
              <GradientDots className="-z-10" />
              <div className="relative z-10 flex flex-col h-full">
                <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                <h3 className="text-lg text-foreground font-semibold mt-2 truncate">
                  {post.title}
                </h3>
                <p className="text-sm text-foreground/80 mt-2 line-clamp-2 flex-grow">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </GlowCard>
        </Link>
      ))}
    </div>
  );
};

export default PostCardGrid;