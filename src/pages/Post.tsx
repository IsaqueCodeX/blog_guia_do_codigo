import { useParams, Link } from "react-router-dom";
import { posts } from "@/data/posts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
        <p className="text-muted-foreground mb-8">
          O post que você está procurando não existe.
        </p>
        <Link to="/" className="text-primary hover:underline">
          Voltar para a página inicial
        </Link>
      </main>
    );
  }

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft size={16} />
          Voltar para todos os posts
        </Link>
        <Badge variant="secondary" className="mb-4">{post.category}</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 mb-8">
          <Avatar>
            <AvatarImage src={post.authorAvatar} alt={post.author} />
            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{post.author}</p>
            <p className="text-sm text-muted-foreground">{post.date}</p>
          </div>
        </div>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full rounded-lg mb-8"
        />
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
};

export default PostPage;