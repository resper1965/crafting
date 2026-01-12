# Design System - ness.

## Visão Geral

O projeto segue o **design system ness.** com filosofia "Invisível quando funciona, Presente quando importa".

## Paleta de Cores

### Cores Primárias

**Localização:** `tailwind.config.ts` (linhas 11-23)

```typescript
primary: {
  50: '#e6f7ff',
  100: '#bae7ff',
  200: '#91d5ff',
  300: '#69c0ff',
  400: '#40a9ff',
  500: '#00ade8',  // Cor principal
  600: '#0098d1',
  700: '#0083ba',
  800: '#006ea3',
  900: '#00598c',
}
```

**Uso:**
- `primary-500` (#00ade8) - Cor principal, usada em CTAs e destaques
- `primary-400` - Links e hover states
- `primary-600` - Hover de botões primários

### Cores Neutras (Slate)

**Sistema de cinzas profundos:**

- `slate-950` - Background principal (mais escuro)
- `slate-900` - Background secundário
- `slate-800` - Bordas e divisores
- `slate-700` - Bordas secundárias
- `slate-400` - Texto secundário
- `slate-300` - Texto principal
- `slate-100` - (reservado para futuros usos)

**Uso no projeto:**
- Backgrounds: `bg-slate-950`, `bg-slate-900`
- Bordas: `border-slate-800`, `border-slate-700`
- Texto: `text-slate-300`, `text-slate-400`

## Tipografia

### Fontes

**Localização:** `app/layout.tsx` (linhas 7-16) e `tailwind.config.ts` (linhas 25-28)

- **Inter** - Fonte para corpo do texto (`font-sans`)
- **Montserrat** - Fonte para títulos (`font-display`)
  - Pesos: 400, 500, 600, 700

**Carregamento:**
Fontes carregadas via Next.js Font Optimization em `app/layout.tsx`:
```tsx
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})
```

### Escala Tipográfica

**Localização:** `app/globals.css` (linhas 15-29)

**Títulos (Montserrat):**
- `h1`: `text-4xl md:text-5xl lg:text-6xl` - Títulos principais
- `h2`: `text-3xl md:text-4xl` - Subtítulos de seção
- `h3`: `text-2xl md:text-3xl` - Subtítulos de card

**Corpo (Inter):**
- `p`: `text-slate-400` com `leading-relaxed` (1.625)
- Texto destacado: `text-slate-300`
- Texto secundário: `text-slate-400`

**Line-height:**
- Títulos: `leading-tight` (1.25)
- Corpo: `leading-relaxed` (1.625)

## Espaçamento

**Base:** Múltiplos de 4px

**Classes utilitárias:**
- `section-padding`: `py-16 md:py-24 px-4 md:px-8`
  - Mobile: 64px vertical, 16px horizontal
  - Desktop: 96px vertical, 32px horizontal

**Espaçamento em componentes:**
- Cards: `p-8` (32px)
- Gaps em grids: `gap-8` (32px)
- Espaçamento entre elementos: `space-y-6`, `space-y-8`

## Componentes de UI

### Botões

**Localização:** `app/globals.css` (linhas 41-47)

**Botão Primário (`.btn-primary`):**
```css
bg-primary-500 text-white px-6 py-3 rounded-lg font-medium
hover:bg-primary-600
```
- Uso: CTAs principais, ações primárias

**Botão Secundário (`.btn-secondary`):**
```css
border border-slate-700 text-slate-300 px-6 py-3 rounded-lg font-medium
hover:border-slate-600 hover:text-white
```
- Uso: Ações secundárias, links destacados

### Cards

**Padrão usado em serviços:**
```tsx
<div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
  <h3 className="mb-4 text-primary-400">Título</h3>
  <p className="text-slate-400">Descrição</p>
</div>
```

**Hover state:**
```tsx
hover:border-slate-700 transition-colors
```

### Containers

**`.container-custom`** (definido em `app/globals.css` linha 53-55):
```css
max-w-7xl mx-auto
```
- Max width: 1280px
- Centralizado automaticamente

## Grid System

**Padrão responsivo:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
```
- Mobile: 1 coluna
- Desktop (md+): 2 colunas
- Gap: 32px (gap-8)

## Estados e Interações

### Hover States

- **Links:** `hover:text-white` ou `hover:text-primary-400`
- **Botões:** `hover:bg-primary-600` (primário) ou `hover:border-slate-600` (secundário)
- **Cards:** `hover:border-slate-700`

### Transições

Todas as interações usam `transition-colors` para suavidade.

## Breakpoints (Tailwind)

- `sm`: 640px
- `md`: 768px (breakpoint principal usado)
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Uso no projeto:**
- Navegação mobile/desktop: `hidden md:flex`
- Grid responsivo: `grid-cols-1 md:grid-cols-2`
- Padding responsivo: `py-16 md:py-24`

## Princípios de Design

### "Invisível quando funciona"
- Backgrounds escuros (slate-950/900)
- Texto em cinzas sutis (slate-300/400)
- Bordas discretas (slate-800)
- Azul (#00ade8) usado estrategicamente

### "Presente quando importa"
- CTAs em primary-500
- Links em primary-400
- Hover states claros
- Feedback visual imediato

## Tokens de Referência

**Arquivos principais:**
- Cores: `tailwind.config.ts` (linhas 11-23)
- Tipografia: `tailwind.config.ts` (linhas 25-28)
- Classes utilitárias: `app/globals.css` (linhas 40-56)
- Estilos base: `app/globals.css` (linhas 10-38)

## Como Usar

### Adicionar Nova Cor

1. Editar `tailwind.config.ts` (seção `colors`)
2. Adicionar à paleta existente
3. Usar via classes Tailwind: `bg-nova-cor`, `text-nova-cor`

### Criar Novo Componente

1. Seguir padrão de cores (slate-* para neutros, primary-* para acentos)
2. Usar classes utilitárias existentes quando possível
3. Se necessário, adicionar nova classe em `app/globals.css` (seção `@layer components`)

### Modificar Tipografia

1. Editar escala em `app/globals.css` (linhas 19-29)
2. Ou usar classes Tailwind diretamente: `text-xl`, `text-2xl`, etc.

## Referências

- Config Tailwind: `tailwind.config.ts`
- Estilos globais: `app/globals.css`
- Layout: `app/layout.tsx` (fontes)
- Exemplos de uso: `app/page.tsx`, `components/Navigation.tsx`
