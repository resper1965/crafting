# Documentação - Crafting Solutions

Bem-vindo à documentação completa do site Crafting Solutions.

## 📚 Índice da Documentação

### 1. [Arquitetura](ARQUITETURA.md)
Visão geral da estrutura do projeto, tecnologias utilizadas, rotas e fluxo de dados.

**Conteúdo:**
- Estrutura de diretórios
- Tecnologias (Next.js, React, TypeScript, Tailwind)
- Arquitetura de páginas (App Router)
- Componentes compartilhados
- Rotas e URLs
- Build e deploy

**Ideal para:** Desenvolvedores que precisam entender a estrutura do projeto.

---

### 2. [Componentes](COMPONENTES.md)
Documentação detalhada de todos os componentes do projeto.

**Conteúdo:**
- Navigation (menu principal)
- Footer (rodapé)
- Componentes de página
- Classes CSS utilitárias
- Padrões de componentes

**Ideal para:** Desenvolvedores que vão criar ou modificar componentes.

---

### 3. [Design System](DESIGN_SYSTEM.md)
Guia completo do design system ness. usado no projeto.

**Conteúdo:**
- Paleta de cores (primary, slate)
- Tipografia (Inter, Montserrat)
- Espaçamento e grid
- Componentes de UI (botões, cards)
- Estados e interações
- Breakpoints

**Ideal para:** Designers e desenvolvedores que vão trabalhar com estilos.

---

### 4. [Conteúdo](CONTEUDO.md)
Guia prático para atualizar textos e informações do site.

**Conteúdo:**
- Informações de contato
- Páginas (Home, Quem Somos, Serviços, etc.)
- Navegação
- Metadata (SEO)
- Links externos

**Ideal para:** Editores de conteúdo e não-desenvolvedores.

---

### 5. [Desenvolvimento](DESENVOLVIMENTO.md)
Guia completo de desenvolvimento, workflow e boas práticas.

**Conteúdo:**
- Instalação e setup
- Scripts disponíveis
- Como adicionar páginas/componentes
- Regras de desenvolvimento
- Debugging
- Boas práticas

**Ideal para:** Desenvolvedores que vão trabalhar no projeto.

---

## 🎯 Por Onde Começar?

### Se você é...

**Desenvolvedor novo no projeto:**
1. Leia [Arquitetura](ARQUITETURA.md) para entender a estrutura
2. Leia [Desenvolvimento](DESENVOLVIMENTO.md) para configurar ambiente
3. Consulte [Componentes](COMPONENTES.md) quando precisar modificar código

**Designer:**
1. Leia [Design System](DESIGN_SYSTEM.md) para entender tokens e padrões
2. Consulte [Componentes](COMPONENTES.md) para ver implementação

**Editor de Conteúdo:**
1. Leia [Conteúdo](CONTEUDO.md) - guia completo para atualizar textos

**Gerente de Projeto:**
1. Leia [Arquitetura](ARQUITETURA.md) para visão geral
2. Consulte [Desenvolvimento](DESENVOLVIMENTO.md) para entender workflow

---

## 📁 Estrutura de Arquivos

```
docs/
├── README.md              # Este arquivo (índice)
├── ARQUITETURA.md         # Estrutura e tecnologias
├── COMPONENTES.md         # Documentação de componentes
├── DESIGN_SYSTEM.md       # Design system ness.
├── CONTEUDO.md            # Guia de conteúdo
└── DESENVOLVIMENTO.md     # Guia de desenvolvimento
```

---

## 🔍 Referências Rápidas

### Onde encontrar...

| O que procurar | Documento | Seção |
|---------------|-----------|-------|
| Adicionar nova página | [Desenvolvimento](DESENVOLVIMENTO.md) | Adicionar Nova Página |
| Modificar cores | [Design System](DESIGN_SYSTEM.md) | Paleta de Cores |
| Atualizar contato | [Conteúdo](CONTEUDO.md) | Informações de Contato |
| Criar componente | [Desenvolvimento](DESENVOLVIMENTO.md) | Criar Novo Componente |
| Entender estrutura | [Arquitetura](ARQUITETURA.md) | Estrutura de Diretórios |
| Classes CSS | [Componentes](COMPONENTES.md) | Classes CSS Utilitárias |
| Adicionar serviço | [Conteúdo](CONTEUDO.md) | Página Produtos & Serviços |

---

## 📝 Convenções da Documentação

### Citações de Arquivos

A documentação sempre cita arquivos reais com:
- **Caminho completo:** `app/page.tsx`
- **Número de linha:** `linhas 9-15`
- **Referência direta:** Links para arquivos no codebase

### Exemplos de Código

Todos os exemplos são baseados em código real do projeto, sempre ancorados em arquivos existentes.

---

## 🔗 Links Externos

- [README Principal](../README.md) - Visão geral do projeto
- [Guia de Deploy](../DEPLOY.md) - Instruções de deploy na Vercel
- [Análise Crítica](../ANALISE_CRITICA.md) - Análise e melhorias sugeridas

---

## 💡 Dicas

1. **Sempre verifique o codebase** - A documentação referencia arquivos reais
2. **Siga as regras** - Consulte `.cursor/rules/` para padrões de desenvolvimento
3. **Teste localmente** - Use `npm run dev` para ver mudanças
4. **Verifique qualidade** - Execute `npm run verify` antes de commitar

---

**Última atualização:** Documentação criada para versão inicial do projeto.
