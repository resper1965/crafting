# Exploração do Tailwind CSS no Projeto

## 📋 Visão Geral

Este documento explora a configuração e uso do Tailwind CSS no projeto Crafting Solutions, incluindo customizações, padrões e oportunidades de melhoria.

## 🎨 Configuração Atual

### Arquivo: `tailwind.config.ts`

#### Dark Mode
```typescript
darkMode: ['class']
```
- Modo escuro baseado em classe (`.dark`)
- Atualmente sempre ativo no projeto

#### Content Paths
```typescript
content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
]
```
- Cobre todos os arquivos React/TypeScript
- Inclui páginas e componentes

## 🎨 Paleta de Cores Customizada

### Cores do Manual de Marca (crafting-*)

```typescript
crafting: {
  grafite: '#232b2f',      // Grafite Noturno - Background principal
  azul: '#28474f',         // Azul Profundo - Destaques, CTAs
  verde: '#4e5655',        // Verde Aço - Bordas, elementos secundários
  cinzaAlvo: '#d3d4cc',    // Cinza Alvo - Textos secundários
  cinzaUrbano: '#939393',  // Cinza Urbano - Textos terciários
  branco: '#f9fbfd',       // Branco Neve - Textos principais
  chumbo: '#1e1d24',       // Chumbo Mineral - Backgrounds alternativos
}
```

**Uso:**
- `bg-crafting-grafite` - Background principal
- `text-crafting-branco` - Textos principais
- `border-crafting-verde/10` - Bordas sutis (com opacidade)
- `hover:bg-crafting-azul` - Estados hover

### Cores shadcn/ui (HSL Variables)

```typescript
background: 'hsl(var(--background))'
foreground: 'hsl(var(--foreground))'
primary: 'hsl(var(--primary))'
// ... etc
```

**Definidas em:** `app/globals.css` como CSS variables
**Uso:** Integração com shadcn/ui components

## 🔤 Tipografia

### Fontes Customizadas

```typescript
fontFamily: {
  sans: ['Roboto', 'sans-serif'],      // Corpo do texto
  display: ['Montserrat', 'sans-serif'] // Títulos
}
```

**Uso:**
- `font-sans` - Roboto (padrão)
- `font-display` - Montserrat (títulos)

### Escala de Tipografia (definida em globals.css)

```css
h1: text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight
h2: text-3xl md:text-4xl font-light leading-tight tracking-tight
h3: text-2xl md:text-3xl font-light leading-tight tracking-tight
p: text-crafting-cinzaAlvo/70 leading-relaxed font-light
```

## 📐 Espaçamento e Layout

### Classes Utilitárias Customizadas

#### `.section-padding`
```css
@apply py-20 md:py-32 px-4 md:px-8;
```
- Padding vertical: 80px (mobile) / 128px (desktop)
- Padding horizontal: 16px (mobile) / 32px (desktop)

#### `.container-custom`
```css
@apply max-w-7xl mx-auto;
```
- Max width: 1280px
- Centralizado automaticamente

## 🎭 Componentes Customizados

### Botões

#### `.btn-primary`
```css
@apply bg-crafting-azul text-crafting-branco px-6 py-3 rounded-lg 
       font-medium hover:bg-crafting-verde 
       transition-all duration-300 
       hover:scale-[1.02] active:scale-[0.98];
```

#### `.btn-secondary`
```css
@apply border border-crafting-verde text-crafting-cinzaAlvo 
       px-6 py-3 rounded-lg font-medium 
       hover:border-crafting-azul hover:text-crafting-branco 
       transition-all duration-300 
       hover:scale-[1.02] active:scale-[0.98];
```

### Efeitos Visuais

#### `.glass` (Glassmorphism)
```css
@apply backdrop-blur-xl bg-crafting-grafite/80 border border-crafting-verde/10;
```

#### `.gradient-subtle`
```css
background: linear-gradient(135deg, rgba(40, 71, 79, 0.1) 0%, rgba(35, 43, 47, 0.05) 100%);
```

### Animações Customizadas

#### `.fade-in`
```css
animation: fadeIn 0.8s ease-out;
```

#### `.slide-up`
```css
animation: slideUp 0.8s ease-out;
```

## 🎯 Padrões de Uso no Projeto

### Grid Responsivo
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
```
- 1 coluna no mobile
- 2 colunas no desktop (md+)
- Gap de 24px

### Cards com Hover
```tsx
<Card className="group bg-crafting-grafite border-crafting-verde/10 
                 hover:border-crafting-azul/40 
                 transition-all duration-500 
                 rounded-sm 
                 hover:shadow-lg hover:shadow-crafting-azul/10">
```

### Gradientes Sutis
```tsx
<div className="absolute inset-0 
                bg-gradient-to-br 
                from-crafting-azul/5 
                via-transparent 
                to-crafting-verde/5 
                pointer-events-none" />
```

### Opacidade Dinâmica
```tsx
text-crafting-cinzaAlvo/70  // 70% opacidade
border-crafting-verde/10    // 10% opacidade
bg-crafting-grafite/80      // 80% opacidade
```

## 🚀 Recursos Avançados Utilizados

### 1. Arbitrary Values
```tsx
leading-[1.1]           // Line-height customizado
tracking-tight          // Letter-spacing
hover:scale-[1.02]      // Transform scale customizado
```

### 2. Opacity Modifiers
```tsx
text-crafting-cinzaAlvo/70
border-crafting-verde/20
bg-crafting-azul/10
```

### 3. Responsive Variants
```tsx
text-4xl md:text-5xl lg:text-6xl
py-20 md:py-32
grid-cols-1 md:grid-cols-2
```

### 4. State Variants
```tsx
hover:text-crafting-branco
group-hover:text-crafting-azul
active:scale-[0.98]
focus-visible:outline-none
```

### 5. Group Modifier
```tsx
<div className="group">
  <h3 className="group-hover:text-crafting-azul">
  <p className="group-hover:text-crafting-cinzaAlvo/90">
</div>
```

## 📦 Plugins Instalados

### tailwindcss-animate
```typescript
plugins: [require("tailwindcss-animate")]
```
- Animações para shadcn/ui
- Classes: `animate-spin`, `animate-pulse`, etc.

## 💡 Oportunidades de Melhoria

### 1. Customização de Border Radius
```typescript
borderRadius: {
  lg: 'var(--radius)',           // 0.5rem
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)'
}
```
**Status:** ✅ Já configurado

### 2. Breakpoints Customizados
**Atual:** Usando breakpoints padrão do Tailwind
**Oportunidade:** Adicionar breakpoints específicos se necessário

### 3. Espaçamento Customizado
**Atual:** Usando escala padrão do Tailwind
**Oportunidade:** Adicionar espaçamentos específicos do design system

### 4. Shadows Customizadas
**Atual:** Usando `shadow-lg`, `shadow-xl`
**Oportunidade:** Criar shadows customizadas com cores do manual

### 5. Transitions Customizadas
**Atual:** `transition-all duration-300`
**Oportunidade:** Criar presets de transição reutilizáveis

## 🎨 Exemplos de Uso Avançado

### Gradientes Complexos
```tsx
className="bg-gradient-to-br from-crafting-azul/10 via-transparent to-crafting-verde/10"
```

### Backdrop Blur
```tsx
className="backdrop-blur-md bg-crafting-grafite/95"
```

### Transformações com Hover
```tsx
className="hover:scale-105 active:scale-95 transition-transform duration-200"
```

### Aspect Ratio
```tsx
className="aspect-video" // 16:9
className="aspect-square" // 1:1
```

### Grid Template Columns Customizado
```tsx
className="grid grid-cols-[1fr_2fr_1fr]" // 3 colunas com proporções específicas
```

## 📊 Estatísticas de Uso

### Classes Mais Utilizadas
1. `bg-crafting-*` - Backgrounds
2. `text-crafting-*` - Textos
3. `border-crafting-*` - Bordas
4. `hover:*` - Estados hover
5. `transition-*` - Transições
6. `md:*` - Breakpoints responsivos

### Padrões de Nomenclatura
- Cores: `crafting-{nome}`
- Opacidade: `/{porcentagem}`
- Responsivo: `md:`, `lg:`
- Estados: `hover:`, `group-hover:`, `active:`

## 🔍 Recursos Não Utilizados (Oportunidades)

### 1. Container Queries
```tsx
@container (min-width: 768px) {
  // Estilos baseados no container, não viewport
}
```

### 2. CSS Grid Utilities Avançadas
```tsx
grid-template-rows-[repeat(3,minmax(0,1fr))]
```

### 3. Aspect Ratio Utilities
```tsx
aspect-[4/3] // Proporção customizada
```

### 4. Scroll Snap
```tsx
snap-x snap-mandatory
```

### 5. Print Styles
```tsx
print:hidden
print:text-black
```

## 🛠️ Comandos Úteis

### Verificar Build do Tailwind
```bash
npm run build
```

### Analisar Classes Utilizadas
```bash
npx tailwindcss -i ./app/globals.css -o ./output.css --minify
```

### Debug de Classes
- Usar extensão "Tailwind CSS IntelliSense" no VS Code
- Ver classes sugeridas automaticamente

## 📚 Referências

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind Config](https://tailwindcss.com/docs/configuration)
- [Custom Colors](https://tailwindcss.com/docs/customizing-colors)
- [Arbitrary Values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values)

## 🎯 Próximos Passos Sugeridos

1. **Criar Design Tokens Documentados**
   - Documentar todas as cores customizadas
   - Criar guia de uso de espaçamentos

2. **Otimizar Bundle Size**
   - Verificar classes não utilizadas
   - Usar PurgeCSS (já incluído no Tailwind)

3. **Criar Componentes Tailwind Reutilizáveis**
   - Extrair padrões comuns
   - Criar classes utilitárias específicas

4. **Implementar Dark Mode Toggle**
   - Adicionar funcionalidade de alternância
   - Persistir preferência do usuário

5. **Adicionar Animações Customizadas**
   - Criar keyframes específicos do projeto
   - Documentar animações disponíveis
