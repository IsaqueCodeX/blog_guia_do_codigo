import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MatrixText } from "@/components/ui/matrix-text";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center">
        <Avatar className="w-40 h-40 mb-6 rounded-none">
          <AvatarImage src="https://i.postimg.cc/SR9ymXdT/Untitled-design-4.png" alt="Guia Do Código" />
          <AvatarFallback>GC</AvatarFallback>
        </Avatar>
        <MatrixText
          text="Sobre Codex"
          className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4"
          letterInterval={250}
          repeatInterval={7000}
        />
        <p className="text-xl text-muted-foreground mb-8">
          O Guia Do Código é o seu destino para tudo relacionado ao desenvolvimento web.
        </p>
        <div className="max-w-3xl">
          <p className="mb-4">
            Nossa missão é fornecer tutoriais de alta qualidade, artigos aprofundados e insights práticos para ajudar desenvolvedores de todos os níveis de habilidade a aprimorar seus conhecimentos e construir aplicações incríveis.
          </p>
          <p className="mb-4">
            Acreditamos no poder do código para transformar ideias em realidade e estamos aqui para apoiar sua jornada, seja você um iniciante dando os primeiros passos ou um profissional experiente buscando se manter atualizado com as últimas tecnologias.
          </p>
          <p>
            Explore nosso conteúdo, aprenda algo novo e junte-se à nossa comunidade de entusiastas da tecnologia!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;