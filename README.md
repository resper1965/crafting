# Crafting Solutions

Site institucional da Crafting Solutions - Soluções em Reestruturação, Turnaround e Governança.

## 📚 Documentação

Documentação completa disponível em `docs/`:

- **[Arquitetura](docs/ARQUITETURA.md)** - Estrutura do projeto, tecnologias e rotas
- **[Componentes](docs/COMPONENTES.md)** - Documentação de componentes e classes CSS
- **[Design System](docs/DESIGN_SYSTEM.md)** - Paleta de cores, tipografia e tokens
- **[Conteúdo](docs/CONTEUDO.md)** - Guia para atualizar textos e informações
- **[Desenvolvimento](docs/DESENVOLVIMENTO.md)** - Guia de desenvolvimento e workflow

## 🚀 Início Rápido

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

### Verificação de Qualidade

```bash
# Verificação completa
npm run verify

# Individualmente:
npm run lint        # ESLint
npm run type-check  # TypeScript
npm run build       # Build de produção
```

## 🛠 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Design System ness.**

## 📄 Páginas

- `/` - Home
- `/quem-somos` - Quem Somos
- `/produtos-servicos` - Produtos & Serviços
- `/time` - Time
- `/contato` - Contato
- `/politica-privacidade` - Política de Privacidade

## 🎨 Design System

O projeto segue o design system **ness.** com:

- **Cores:** slate-950 a slate-100 (cinzas profundos) + primary-500 (#00ade8)
- **Tipografia:** Inter (corpo) e Montserrat (títulos)
- **Espaçamento:** Múltiplos de 4px
- **Filosofia:** "Invisível quando funciona, Presente quando importa"

Ver documentação completa em [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)

## 🚢 Deploy na Vercel

### Opção 1: CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Opção 2: GitHub

1. Conecte o repositório na Vercel
2. Deploy automático a cada push

Ver guia completo em [DEPLOY.md](DEPLOY.md)

## 📋 Regras de Desenvolvimento

Este projeto segue regras definidas em `.cursor/rules/`:

- **00-grounding** - Anti-alucinação, sempre ancorar no codebase
- **10-design-guardrails** - Preservar design system e tokens
- **20-frontend-implementation** - Padrões de implementação
- **30-quality-gates** - Verificação de qualidade obrigatória

## 📖 Estrutura do Projeto

```
siteedu/
├── app/                    # Páginas (App Router)
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Home
│   ├── globals.css        # Estilos globais
│   └── [rotas]/           # Páginas
├── components/            # Componentes reutilizáveis
│   ├── Navigation.tsx
│   └── Footer.tsx
├── docs/                  # Documentação
├── .cursor/rules/         # Regras de desenvolvimento
├── tailwind.config.ts     # Config Tailwind
└── next.config.js         # Config Next.js
```

## 🔗 Links Úteis

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Tailwind](https://tailwindcss.com/docs)
- [Guia de Deploy](DEPLOY.md)
- [Análise Crítica](ANALISE_CRITICA.md)
