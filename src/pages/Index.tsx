import { posts } from "@/data/posts";
import PostCardGrid from "@/components/PostCardGrid";
import { Squares } from "@/components/ui/squares-background";

const Index = () => {
  return (
    <>
      <div className="relative h-[60vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <Squares 
          className="absolute inset-0 -z-10"
          direction="diagonal"
          speed={0.5}
          squareSize={40}
        />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
          Bem-vindo ao
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
          Guia Do Código
        </h1>
        <p className="mt-6 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
          Um espaço para explorar as últimas tendências em desenvolvimento web, design e tecnologia.
        </p>
      </div>

      <section className="container mx-auto bg-transparent px-4 pt-12 pb-24 relative z-0">
        <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent mb-4">
          Últimos Artigos
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-muted-foreground">
          Mantenha-se à frente com novos conteúdos sobre código, design, startups e tudo mais.
        </p>
        <PostCardGrid posts={posts} />
      </section>
    </>
  );
};

export default Index;