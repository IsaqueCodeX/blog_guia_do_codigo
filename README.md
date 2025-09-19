<div align="center">
  <h1>🦎 Blog guia do código</h1>
  <p><strong>Aplicação Web Moderna • React + TypeScript + Vite</strong></p>
  
  <p>
    <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-6.3.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.11-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  </p>

  <p>
    <strong>Desenvolvido por:</strong> Isaque Santos - Desenvolvedor Full Stack<br>
    <em>Uma aplicação web responsiva e moderna com design system completo</em>
  </p>
</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Configurações](#-configurações)
- [Deploy](#-deploy)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 🎯 Sobre o Projeto

**Blog guia do código** é uma aplicação web moderna desenvolvida com React 18, TypeScript e Vite. O projeto utiliza um design system robusto baseado em Shadcn/ui e Tailwind CSS, oferecendo uma experiência de usuário fluida e responsiva.

### Características Principais

- ⚡ **Performance**: Construído com Vite para desenvolvimento rápido e builds otimizados
- 🎨 **Design System**: Interface moderna usando Shadcn/ui e Tailwind CSS
- 🌙 **Tema Adaptável**: Suporte completo a modo escuro/claro
- 📱 **Responsivo**: Layout adaptável para todos os dispositivos
- 🔧 **TypeScript**: Tipagem estática para melhor experiência de desenvolvimento
- 🎭 **Animações**: Transições suaves com Framer Motion
- 🧩 **Componentização**: Arquitetura modular e reutilizável

---

## 🚀 Funcionalidades

- [x] **Sistema de Roteamento**: Navegação SPA com React Router DOM
- [x] **Gerenciamento de Estado**: React Query para cache e sincronização de dados
- [x] **Formulários Avançados**: Validação com React Hook Form + Zod
- [x] **Notificações**: Sistema de toast messages com Sonner
- [x] **Interface Responsiva**: Design adaptável para mobile, tablet e desktop
- [x] **Tema Dinâmico**: Alternância entre modo claro e escuro
- [x] **Componentes Reutilizáveis**: Biblioteca de componentes UI customizáveis
- [x] **Animações Fluidas**: Transições e efeitos visuais
- [x] **SEO Otimizado**: Meta tags e estrutura semântica

---

## 🛠 Tecnologias Utilizadas

### Core

- **React** `18.3.1` - Biblioteca para interfaces de usuário
- **TypeScript** `5.5.3` - Superset JavaScript com tipagem estática
- **Vite** `6.3.4` - Build tool e servidor de desenvolvimento

### UI/UX

- **Tailwind CSS** `3.4.11` - Framework CSS utility-first
- **Shadcn/ui** - Componentes React modernos e acessíveis
- **Radix UI** - Primitivos de UI headless
- **Framer Motion** `12.23.16` - Biblioteca de animações
- **Lucide React** - Ícones modernos e otimizados

### Estado e Dados

- **TanStack React Query** `5.56.2` - Gerenciamento de estado servidor
- **React Hook Form** `7.53.0` - Gerenciamento de formulários
- **Zod** `3.23.8` - Validação e parsing de schemas

### Roteamento e Navegação

- **React Router DOM** `6.26.2` - Roteamento declarativo

### Utilitários

- **clsx** - Utilitário para classes condicionais
- **date-fns** - Manipulação de datas
- **class-variance-authority** - Variantes de componentes

### Desenvolvimento

- **ESLint** - Linter para JavaScript/TypeScript
- **PostCSS** - Processador CSS
- **Autoprefixer** - Vendor prefixes automáticos

---

## 🏗 Arquitetura

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Apresentação  │    │     Lógica      │    │      Dados      │
│                 │    │                 │    │                 │
│  • Componentes  │◄──►│  • Hooks        │◄──►│  • React Query  │
│  • Páginas      │    │  • Utils        │    │  • API Calls    │
│  • Layout       │    │  • Validações   │    │  • Cache        │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Princípios Arquiteturais

- **Separação de Responsabilidades**: UI, lógica e dados em camadas distintas
- **Componentização**: Componentes reutilizáveis e modulares
- **Composição**: Preferência por composição sobre herança
- **Performance**: Otimizações de rendering e carregamento

---

## 📦 Instalação

### Pré-requisitos

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (recomendado) ou **npm** >= 9.0.0
- **Git** para controle de versão

### Passo a Passo

1. **Clone o repositório**

   ```bash
   git clone <repository-url>
   cd Blog guia do código
   ```

2. **Instale as dependências**

   ```bash
   # Usando pnpm (recomendado)
   pnpm install

   # Ou usando npm
   npm install
   ```

3. **Configure as variáveis de ambiente** (opcional)

   ```bash
   cp .env.example .env.local
   # Edite o arquivo .env.local com suas configurações
   ```

4. **Inicie o servidor de desenvolvimento**

   ```bash
   pnpm dev
   ```

5. **Acesse a aplicação**
   ```
   http://localhost:8080
   ```

---

## 🎮 Uso

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev

# Executar em modo de desenvolvimento com port específica
pnpm dev --port 3000

# Executar linting
pnpm lint

# Executar linting com correção automática
pnpm lint --fix
```

### Produção

```bash
# Build para produção
pnpm build

# Preview do build de produção
pnpm preview

# Build para desenvolvimento (com source maps)
pnpm build:dev
```

---

## 📜 Scripts Disponíveis

| Script           | Descrição                                         |
| ---------------- | ------------------------------------------------- |
| `pnpm dev`       | Inicia o servidor de desenvolvimento (porta 8080) |
| `pnpm build`     | Cria build otimizado para produção                |
| `pnpm build:dev` | Cria build de desenvolvimento com source maps     |
| `pnpm lint`      | Executa ESLint para análise de código             |
| `pnpm preview`   | Visualiza o build de produção localmente          |

---

## 📁 Estrutura de Pastas

```
Blog guia do código/
├── public/                 # Arquivos estáticos
│   ├── placeholder.svg    # Imagens e assets
│   └── robots.txt         # SEO
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── ui/           # Componentes base (Shadcn/ui)
│   │   ├── Layout.tsx    # Layout principal
│   │   ├── Header.tsx    # Cabeçalho
│   │   └── Footer.tsx    # Rodapé
│   ├── pages/            # Páginas da aplicação
│   │   ├── Index.tsx     # Página inicial
│   │   ├── About.tsx     # Sobre
│   │   ├── Contact.tsx   # Contato
│   │   ├── Post.tsx      # Post individual
│   │   └── NotFound.tsx  # 404
│   ├── App.tsx           # Componente raiz
│   ├── main.tsx          # Entry point
│   ├── globals.css       # Estilos globais
│   └── vite-env.d.ts     # Tipos do Vite
├── components.json        # Configuração Shadcn/ui
├── tailwind.config.ts     # Configuração Tailwind
├── tsconfig.json          # Configuração TypeScript
├── vite.config.ts         # Configuração Vite
├── package.json           # Dependências e scripts
└── README.md             # Documentação
```

---

## ⚙️ Configurações

### Tailwind CSS

O projeto usa uma configuração customizada do Tailwind com:

- **Design System**: Variáveis CSS customizadas
- **Temas**: Suporte a modo claro/escuro
- **Animações**: Animações customizadas
- **Typography**: Fonte Poppins como padrão

### TypeScript

Configuração otimizada para:

- **Strict Mode**: Verificações rígidas de tipos
- **Path Mapping**: Aliases para imports (`@/components`)
- **ESNext**: Recursos modernos do JavaScript

### Vite

Configuração para:

- **Hot Module Replacement**: Recarga instantânea
- **Server**: Porta 8080, host `::`
- **Build**: Otimizações para produção

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Build Manual

```bash
# Criar build
pnpm build

# Os arquivos estarão em ./dist/
# Faça upload para seu provedor de hospedagem
```

### Variáveis de Ambiente

```env
# .env.local
VITE_APP_TITLE=Wandering Chameleon Zoom
VITE_API_URL=https://api.example.com
```

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### Diretrizes

- Siga os padrões de código existentes
- Adicione testes para novas funcionalidades
- Mantenha a documentação atualizada
- Use commits semânticos

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📧 Contato

**Isaque Santos** - Desenvolvedor Full Stack

- 💼 **LinkedIn**: [linkedin.com/in/isaquesantos](www.linkedin.com/in/isaque-santos-720b8b15a)
- 🐙 **GitHub**: [github.com/isaquesantos](https://github.com/IsaqueCodeX)

- 🌐 **Portfolio**: [isaquesantos.dev](https://isaque-santos-portfolio.vercel.app/)

---

<div align="center">
  <p><strong>⭐ Se este projeto foi útil para você, considere dar uma estrela!</strong></p>
  <p><em>Feito com ☕ por Isaque Santos</em></p>
</div>
