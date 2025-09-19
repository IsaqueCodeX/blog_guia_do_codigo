export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  authorAvatar: string;
  date: string;
  category: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    slug: "getting-started-with-react-hooks",
    title: "Primeiros Passos com React Hooks",
    excerpt: "Aprenda os fundamentos dos React Hooks e como eles podem simplificar seus componentes e gerenciamento de estado.",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    author: "Codex",
    authorAvatar: "https://i.postimg.cc/pd5F7JLt/IsaquePerfil.png",
    date: "15 de Julho, 2024",
    category: "React",
    content: "<p>React Hooks, introduzidos no React 16.8, revolucionaram a forma como escrevemos componentes. Eles nos permitem usar estado e outros recursos do React sem escrever uma classe. Os hooks mais comuns são <code>useState</code> para gerenciar o estado local e <code>useEffect</code> para lidar com efeitos colaterais.</p><p>Neste post, vamos explorar como usar esses hooks para criar componentes mais limpos e reutilizáveis.</p>"
  },
  {
    id: 2,
    slug: "a-guide-to-tailwind-css",
    title: "Um Guia para Tailwind CSS",
    excerpt: "Descubra como o Tailwind CSS, um framework CSS utility-first, pode acelerar seu processo de desenvolvimento web.",
    imageUrl: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Codex",
    authorAvatar: "https://i.postimg.cc/pd5F7JLt/IsaquePerfil.png",
    date: "12 de Julho, 2024",
    category: "CSS",
    content: "<p>Tailwind CSS é diferente de outros frameworks como Bootstrap ou Foundation. Em vez de componentes pré-estilizados, ele fornece classes de utilidade de baixo nível que permitem construir designs completamente personalizados sem nunca sair do seu HTML.</p><p>Isso resulta em um desenvolvimento mais rápido e em um CSS final menor, pois você não está enviando um monte de estilos não utilizados para o navegador.</p>"
  },
  {
    id: 3,
    slug: "understanding-typescript-in-5-minutes",
    title: "Entendendo TypeScript em 5 Minutos",
    excerpt: "TypeScript adiciona tipos estáticos ao JavaScript para melhorar a qualidade do código e a experiência do desenvolvedor.",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    author: "Codex",
    authorAvatar: "https://i.postimg.cc/pd5F7JLt/IsaquePerfil.png",
    date: "10 de Julho, 2024",
    category: "TypeScript",
    content: "<p>TypeScript é um superconjunto de JavaScript que compila para JavaScript puro. Sua principal vantagem é a verificação de tipos estáticos, o que significa que você pode detectar erros durante o desenvolvimento, antes mesmo de executar o código. Isso leva a aplicações mais robustas e fáceis de manter.</p>"
  },
  {
    id: 4,
    slug: "building-restful-apis-with-nodejs",
    title: "Construindo APIs RESTful com Node.js e Express",
    excerpt: "Um guia passo a passo para criar APIs robustas e escaláveis utilizando o ecossistema Node.js.",
    imageUrl: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    author: "Codex",
    authorAvatar: "https://i.postimg.cc/pd5F7JLt/IsaquePerfil.png",
    date: "08 de Julho, 2024",
    category: "Node.js",
    content: "<p>Node.js, combinado com o framework Express, é uma das escolhas mais populares para o desenvolvimento de backend. Neste tutorial, vamos cobrir os conceitos essenciais de APIs RESTful, configurar um servidor Express, definir rotas e conectar a um banco de dados para criar uma API completa.</p>"
  },
  {
    id: 5,
    slug: "ui-ux-principles-for-developers",
    title: "Princípios de UI/UX para Desenvolvedores",
    excerpt: "Você não precisa ser um designer para criar interfaces bonitas e funcionais. Aprenda os princípios básicos de UI/UX.",
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    author: "Codex",
    authorAvatar: "https://i.postimg.cc/pd5F7JLt/IsaquePerfil.png",
    date: "05 de Julho, 2024",
    category: "Design",
    content: "<p>Entender os fundamentos de User Interface (UI) e User Experience (UX) pode transformar a qualidade de suas aplicações. Vamos explorar conceitos como hierarquia visual, contraste, espaçamento, feedback do usuário e como aplicá-los para criar produtos que as pessoas amam usar.</p>"
  },
  {
    id: 6,
    slug: "web-performance-optimization-core-web-vitals",
    title: "Otimização de Performance Web: Core Web Vitals",
    excerpt: "Aprenda sobre as métricas do Google (LCP, FID, CLS) e como otimizar seu site para uma melhor experiência do usuário e SEO.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    author: "Codex",
    authorAvatar: "https://i.postimg.cc/pd5F7JLt/IsaquePerfil.png",
    date: "02 de Julho, 2024",
    category: "Performance",
    content: "<p>Os Core Web Vitals são um conjunto de métricas que o Google usa para medir a experiência do usuário em uma página. Um bom desempenho nessas métricas não só agrada seus visitantes, mas também pode impulsionar seu ranking nos resultados de busca. Vamos ver o que cada métrica significa e como melhorá-las.</p>"
  }
];