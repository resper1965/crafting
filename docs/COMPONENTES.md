# Documentação de Componentes

## Componentes Compartilhados

### Navigation

**Localização:** `components/Navigation.tsx`

**Tipo:** Client Component (usa `'use client'`)

**Props:** Nenhuma (usa dados internos)

**Funcionalidades:**
- Menu responsivo com breakpoint em `md` (768px)
- Menu mobile com toggle via estado `isOpen`
- Navegação sticky (fixa no topo)
- Links definidos em array `navItems` (linhas 9-15)

**Estrutura:**
```tsx
<nav>
  <div className="container-custom">
    <Link href="/">Crafting Solutions</Link>
    {/* Desktop Navigation */}
    <div className="hidden md:flex">
      {navItems.map(...)}
    </div>
    {/* Mobile Menu Button */}
    <button onClick={toggleMenu}>...</button>
    {/* Mobile Navigation */}
    {isOpen && <div>...</div>}
  </div>
</nav>
```

**Classes CSS utilizadas:**
- `bg-slate-900` - Background da navegação
- `border-b border-slate-800` - Borda inferior
- `sticky top-0 z-50` - Fixo no topo
- `container-custom` - Container centralizado (definido em `app/globals.css` linha 53)

**Itens de navegação:**
Definidos no array `navItems` (linhas 9-15):
```tsx
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/produtos-servicos', label: 'Produtos & Serviços' },
  { href: '/time', label: 'Time' },
  { href: '/contato', label: 'Contato' },
]
```

**Como modificar:**
1. Editar array `navItems` em `components/Navigation.tsx` (linhas 9-15)
2. Adicionar/remover itens conforme necessário
3. Links são gerados automaticamente via `.map()`

---

### Footer

**Localização:** `components/Footer.tsx`

**Tipo:** Server Component

**Props:** Nenhuma

**Seções:**
1. **Navegação** (linhas 17-32)
   - Links para todas as páginas
   - Array `navItems` similar ao Navigation (inclui política de privacidade)

2. **Contato** (linhas 34-54)
   - Endereço completo
   - Email: `contato@craftingsolutions.com.br`
   - Telefone: `(11) 98236-9546`

3. **Como chegar** (linhas 56-77)
   - Link para Waze
   - Link para Google Maps

4. **Copyright** (linhas 80-93)
   - Copyright 2026
   - Crédito para Tango Marketing

**Como modificar contato:**
Editar diretamente em `components/Footer.tsx`:
- Endereço: linhas 38-42
- Email: linha 44-46
- Telefone: linha 48-51

---

## Componentes de Página

### Home (`app/page.tsx`)

**Estrutura:**
1. **Hero Section** (linhas 6-21)
   - Título principal
   - Descrição
   - Botão CTA "Saiba mais"

2. **O que fazemos** (linhas 23-69)
   - Grid de 4 cards com serviços
   - Cards definidos inline (linhas 34-60)
   - Botão "Saiba mais" linkando para `/produtos-servicos`

3. **Quem somos** (linhas 71-84)
   - Seção resumida
   - Link para página completa `/quem-somos`

4. **CTA Final** (linhas 86-99)
   - Call-to-action final
   - Link para `/contato`

**Como modificar serviços na home:**
Editar cards inline em `app/page.tsx` (linhas 34-60). Cada card tem:
- `h3` com título (classe `text-primary-400`)
- `p` com descrição (classe `text-slate-400`)

---

### Produtos & Serviços (`app/produtos-servicos/page.tsx`)

**Estrutura de dados:**
Array `services` (linhas 2-19) com objetos:
```tsx
{
  title: string,
  description: string
}
```

**Como adicionar/editar serviços:**
1. Editar array `services` em `app/produtos-servicos/page.tsx` (linhas 2-19)
2. Adicionar/remover objetos conforme necessário
3. Grid se ajusta automaticamente (2 colunas em desktop, 1 em mobile)

**Serviços atuais:**
1. Diagnósticos estratégicos e operacionais
2. Planos de reestruturação
3. Gestão e governança
4. Soluções de capital

---

## Classes CSS Utilitárias

Definidas em `app/globals.css` (linhas 40-56):

### Botões
- **`.btn-primary`** (linha 41-43)
  - Background: `bg-primary-500` (#00ade8)
  - Hover: `bg-primary-600`
  - Uso: CTAs principais

- **`.btn-secondary`** (linha 45-47)
  - Border: `border-slate-700`
  - Hover: `border-slate-600`
  - Uso: Botões secundários

### Layout
- **`.section-padding`** (linha 49-51)
  - Padding vertical: `py-16 md:py-24`
  - Padding horizontal: `px-4 md:px-8`
  - Uso: Espaçamento padrão de seções

- **`.container-custom`** (linha 53-55)
  - Max width: `max-w-7xl`
  - Margin: `mx-auto` (centralizado)
  - Uso: Container principal de conteúdo

**Como usar:**
```tsx
<section className="section-padding bg-slate-950">
  <div className="container-custom">
    {/* Conteúdo */}
  </div>
</section>
```

---

## Padrões de Componentes

### Estrutura de Página

Todas as páginas seguem este padrão:

```tsx
export default function NomeDaPagina() {
  return (
    <section className="section-padding bg-slate-950">
      <div className="container-custom">
        <h1>Título</h1>
        {/* Conteúdo */}
      </div>
    </section>
  )
}
```

### Cores de Background

- `bg-slate-950` - Background principal (mais escuro)
- `bg-slate-900` - Background secundário
- `bg-gradient-to-b from-slate-950 to-slate-900` - Gradiente (usado no hero)

### Tipografia

- **Títulos:** Classe `font-display` (Montserrat)
- **Corpo:** Classe `font-sans` (Inter)
- **Cores:**
  - Títulos: `text-white`
  - Subtítulos: `text-primary-400` (#00ade8)
  - Texto corpo: `text-slate-300` ou `text-slate-400`

---

## Referências

- Navigation: `components/Navigation.tsx`
- Footer: `components/Footer.tsx`
- Classes utilitárias: `app/globals.css` (linhas 40-56)
- Tokens de cores: `tailwind.config.ts` (linhas 11-23)
