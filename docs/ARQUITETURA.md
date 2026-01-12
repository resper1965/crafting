# Arquitetura do Projeto

## Visão Geral

Site institucional da Crafting Solutions construído com **Next.js 14** usando **App Router**, **TypeScript** e **Tailwind CSS**, seguindo o design system **ness.**

## Estrutura de Diretórios

```
siteedu/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout raiz com Navigation e Footer
│   ├── page.tsx           # Página Home (/)
│   ├── globals.css        # Estilos globais e classes utilitárias
│   ├── quem-somos/        # Página Quem Somos
│   ├── produtos-servicos/  # Página Produtos & Serviços
│   ├── time/              # Página Time
│   ├── contato/           # Página Contato
│   └── politica-privacidade/ # Página Política de Privacidade
├── components/            # Componentes reutilizáveis
│   ├── Navigation.tsx     # Navegação principal
│   └── Footer.tsx         # Rodapé
├── .cursor/               # Regras de desenvolvimento
│   └── rules/            # Regras anti-alucinação e guardrails
├── tailwind.config.ts     # Configuração Tailwind e tokens de design
├── next.config.js         # Configuração Next.js
└── package.json          # Dependências e scripts
```

## Tecnologias

### Core
- **Next.js 14.2.0** - Framework React com App Router
- **React 18.3.0** - Biblioteca UI
- **TypeScript 5.3.3** - Tipagem estática

### Estilização
- **Tailwind CSS 3.4.1** - Framework CSS utility-first
- **PostCSS 8.4.33** - Processamento CSS
- **Autoprefixer 10.4.17** - Compatibilidade de browsers

### Fontes
- **Inter** - Fonte para corpo do texto (via Google Fonts)
- **Montserrat** - Fonte para títulos (via Google Fonts)

## Arquitetura de Páginas

### App Router (Next.js 14)

Todas as páginas são **Server Components** por padrão, localizadas em `app/*/page.tsx`:

- **`app/page.tsx`** - Página Home (`/`)
- **`app/quem-somos/page.tsx`** - Página Quem Somos (`/quem-somos`)
- **`app/produtos-servicos/page.tsx`** - Página Produtos & Serviços (`/produtos-servicos`)
- **`app/time/page.tsx`** - Página Time (`/time`)
- **`app/contato/page.tsx`** - Página Contato (`/contato`)
- **`app/politica-privacidade/page.tsx`** - Política de Privacidade (`/politica-privacidade`)

### Layout Principal

**Arquivo:** `app/layout.tsx` (linhas 1-39)

- Define estrutura HTML base
- Carrega fontes Inter e Montserrat via Next.js Font Optimization
- Inclui componentes globais: `Navigation` e `Footer`
- Define metadata global (title, description)

**Estrutura:**
```tsx
<html>
  <body>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </body>
</html>
```

## Componentes Compartilhados

### Navigation

**Arquivo:** `components/Navigation.tsx` (linhas 1-80)

- **Tipo:** Client Component (`'use client'`)
- **Funcionalidade:**
  - Menu responsivo (desktop e mobile)
  - Estado de menu mobile controlado por `useState`
  - Links de navegação definidos em array `navItems` (linhas 9-15)
  - Sticky navigation (fixo no topo)

**Itens de navegação:**
- Home (`/`)
- Quem Somos (`/quem-somos`)
- Produtos & Serviços (`/produtos-servicos`)
- Time (`/time`)
- Contato (`/contato`)

### Footer

**Arquivo:** `components/Footer.tsx` (linhas 1-97)

- **Tipo:** Server Component
- **Conteúdo:**
  - Links de navegação (linhas 4-11)
  - Informações de contato (linhas 35-54)
  - Links para mapas (Waze, Google Maps) (linhas 57-77)
  - Copyright e créditos (linhas 80-93)

## Rotas e URLs

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | `app/page.tsx` | Página inicial com hero e seções principais |
| `/quem-somos` | `app/quem-somos/page.tsx` | Sobre a empresa |
| `/produtos-servicos` | `app/produtos-servicos/page.tsx` | Lista de serviços oferecidos |
| `/time` | `app/time/page.tsx` | Informações sobre a equipe |
| `/contato` | `app/contato/page.tsx` | Informações de contato |
| `/politica-privacidade` | `app/politica-privacidade/page.tsx` | Política de privacidade |

## Fluxo de Dados

### Server Components (Padrão)
- Todas as páginas são Server Components por padrão
- Renderização no servidor
- Sem JavaScript no cliente (exceto interatividade)

### Client Components
- Apenas `Navigation.tsx` é Client Component (necessário para estado do menu mobile)
- Marcado com `'use client'` na linha 1

## Build e Deploy

### Build
- **Comando:** `npm run build`
- **Output:** `.next/` (gerado automaticamente)
- **Otimizações:** Next.js aplica automaticamente:
  - Code splitting
  - Image optimization
  - Font optimization
  - CSS minification

### Deploy
- **Plataforma:** Vercel (recomendado)
- **Configuração:** Detecta automaticamente Next.js
- **Arquivo de configuração:** `next.config.js` (otimizações para produção)

## Referências de Arquivos

- Layout: `app/layout.tsx`
- Navegação: `components/Navigation.tsx`
- Footer: `components/Footer.tsx`
- Estilos globais: `app/globals.css`
- Tokens de design: `tailwind.config.ts`
- Config Next.js: `next.config.js`
