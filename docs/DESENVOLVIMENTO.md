# Guia de Desenvolvimento

## Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Git

## Instalação

```bash
# Instalar dependências
npm install
```

## Scripts Disponíveis

**Definidos em:** `package.json` (linhas 5-10)

```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Servidor de produção (após build)
npm start

# Verificação de lint
npm run lint

# Verificação de tipos TypeScript
npm run type-check

# Verificação completa (lint + type-check + build)
npm run verify
```

## Estrutura de Desenvolvimento

### Adicionar Nova Página

1. Criar diretório em `app/`:
```bash
mkdir app/nova-pagina
```

2. Criar `page.tsx`:
```tsx
export default function NovaPagina() {
  return (
    <section className="section-padding bg-slate-950">
      <div className="container-custom">
        <h1>Título da Página</h1>
        {/* Conteúdo */}
      </div>
    </section>
  )
}
```

3. Adicionar ao menu (se necessário):
   - Editar `components/Navigation.tsx` (linhas 9-15)
   - Adicionar: `{ href: '/nova-pagina', label: 'Nova Página' }`

### Criar Novo Componente

1. Criar arquivo em `components/`:
```tsx
// components/NovoComponente.tsx
export default function NovoComponente() {
  return (
    <div>
      {/* Conteúdo */}
    </div>
  )
}
```

2. Importar onde necessário:
```tsx
import NovoComponente from '@/components/NovoComponente'
```

### Adicionar Novo Serviço

**Localização:** `app/produtos-servicos/page.tsx`

1. Editar array `services` (linhas 2-19):
```tsx
const services = [
  // ... serviços existentes
  {
    title: 'Novo Serviço',
    description: 'Descrição do novo serviço...',
  },
]
```

### Modificar Design System

#### Adicionar Nova Cor

**Localização:** `tailwind.config.ts` (linhas 11-23)

```typescript
colors: {
  primary: { /* ... */ },
  novaCor: {
    500: '#hexcode',
    // ... outras variações
  }
}
```

#### Adicionar Nova Classe Utilitária

**Localização:** `app/globals.css` (linhas 40-56)

```css
@layer components {
  /* ... classes existentes */
  .nova-classe {
    @apply /* classes Tailwind */;
  }
}
```

## Regras de Desenvolvimento

### Anti-Alucinação

**Regra:** `.cursor/rules/00-grounding/RULE.md`

- Sempre ancorar mudanças em arquivos existentes
- Citar paths e linhas específicas
- Não inventar APIs/props/classes sem verificar codebase

### Design Guardrails

**Regra:** `.cursor/rules/10-design-guardrails/RULE.md`

- Usar tokens existentes do design system
- Não criar cores/spacing "na mão"
- Reutilizar componentes base

### Padrões de Implementação

**Regra:** `.cursor/rules/20-frontend-implementation/RULE.md`

- Reutilizar helpers/hooks existentes
- Manter compatibilidade com componentes existentes
- Seguir padrão de export (default export)

### Quality Gates

**Regra:** `.cursor/rules/30-quality-gates/RULE.md`

- Sempre executar `npm run verify` antes de commit
- Verificar lint e tipos
- Testar build localmente

## Workflow Recomendado

### 1. Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Acessar http://localhost:3000
```

### 2. Verificação

```bash
# Verificar lint
npm run lint

# Verificar tipos
npm run type-check

# Verificação completa
npm run verify
```

### 3. Build Local

```bash
# Testar build de produção
npm run build

# Testar servidor de produção
npm start
```

### 4. Commit

```bash
# Adicionar arquivos
git add .

# Commit com mensagem descritiva
git commit -m "feat: adiciona nova página X"

# Push
git push
```

## Debugging

### Erros de TypeScript

```bash
# Verificar tipos
npm run type-check

# Ver detalhes do erro
npx tsc --noEmit
```

### Erros de Build

```bash
# Limpar cache do Next.js
rm -rf .next

# Reinstalar dependências
rm -rf node_modules
npm install

# Tentar build novamente
npm run build
```

### Problemas de Estilo

1. Verificar classes Tailwind em `tailwind.config.ts`
2. Verificar classes utilitárias em `app/globals.css`
3. Verificar se classes estão no `content` do Tailwind config

## Boas Práticas

### Componentes

- **Server Components por padrão** (sem `'use client'`)
- **Client Components apenas quando necessário** (interatividade, estado)
- **Default export** para componentes de página e compartilhados

### Estilos

- **Usar classes Tailwind** diretamente
- **Reutilizar classes utilitárias** de `app/globals.css`
- **Seguir design system** (cores, espaçamento, tipografia)

### Código

- **TypeScript strict mode** ativado
- **Nomes descritivos** para variáveis e funções
- **Comentários** quando necessário para contexto

## Estrutura de Arquivos

```
siteedu/
├── app/                    # Páginas (App Router)
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Home
│   ├── globals.css        # Estilos globais
│   └── [pasta]/           # Rotas
│       └── page.tsx       # Página da rota
├── components/            # Componentes reutilizáveis
│   ├── Navigation.tsx
│   └── Footer.tsx
├── .cursor/               # Regras de desenvolvimento
│   └── rules/
├── docs/                  # Documentação
├── tailwind.config.ts     # Config Tailwind
├── next.config.js         # Config Next.js
└── package.json          # Dependências
```

## Referências

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **TypeScript Docs:** https://www.typescriptlang.org/docs
- **Regras do projeto:** `.cursor/rules/`

## Troubleshooting

### Porta 3000 em uso

```bash
# Usar outra porta
npm run dev -- -p 3001
```

### Erro de módulo não encontrado

```bash
# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### Cache do Next.js

```bash
# Limpar cache
rm -rf .next
npm run dev
```
