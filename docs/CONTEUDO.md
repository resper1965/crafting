# Guia de Conteúdo

## Como Atualizar Conteúdos do Site

Este guia mostra onde e como modificar os textos e informações do site.

## Informações de Contato

### Endereço, Email e Telefone

**Localização:** `components/Footer.tsx`

**Endereço** (linhas 38-42):
```tsx
<li>
  Rua Alexandre Dumas, 1711<br />
  Chácara Santo Antônio<br />
  São Paulo, SP, 04717-911
</li>
```

**Email** (linhas 43-47):
```tsx
<li>
  <a href="mailto:contato@craftingsolutions.com.br">
    contato@craftingsolutions.com.br
  </a>
</li>
```

**Telefone** (linhas 48-52):
```tsx
<li>
  <a href="tel:+5511982369546">
    (11) 98236-9546
  </a>
</li>
```

**Também em:** `app/contato/page.tsx` (linhas 14-42)

**Como atualizar:**
1. Editar `components/Footer.tsx` (linhas 38-52)
2. Editar `app/contato/page.tsx` (linhas 14-42)
3. Manter formato consistente

---

## Página Home

**Localização:** `app/page.tsx`

### Hero Section (linhas 6-21)

**Título principal:**
```tsx
<h1 className="mb-6">
  Soluções em reestruturação, turnaround e governança
</h1>
```

**Descrição:**
```tsx
<p className="text-xl text-slate-300 mb-8 max-w-2xl">
  Localizamos oportunidades nas situações de estresse enfrentadas por empresas dos mais variados ramos de atividade.
</p>
```

### Seção "O que fazemos" (linhas 23-69)

**Título da seção:**
```tsx
<h2 className="mb-4">O que fazemos</h2>
```

**Descrição:**
```tsx
<p className="text-lg text-slate-300">
  Localizamos oportunidades nas situações de estresse enfrentadas por empresas dos mais variados ramos de atividade.
</p>
```

**Cards de serviços** (linhas 34-60):
Cada card tem título e descrição inline. Para modificar:

1. **Diagnósticos** (linhas 34-39):
```tsx
<h3 className="mb-4 text-primary-400">Diagnósticos estratégicos e operacionais</h3>
<p className="text-slate-400">
  Análise profunda da situação atual da empresa...
</p>
```

2. **Planos de reestruturação** (linhas 41-46)
3. **Gestão e governança** (linhas 48-53)
4. **Soluções de capital** (linhas 55-60)

### Seção "Quem somos" (linhas 71-84)

**Título:**
```tsx
<h2 className="mb-6">Quem somos</h2>
```

**Descrição:**
```tsx
<p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
  Um time de especialistas em reestruturações complexas com mais de 25 anos de experiência...
</p>
```

### CTA Final (linhas 86-99)

**Título:**
```tsx
<h2 className="mb-4">Soluções em Reestruturação, Turnaround e Governança</h2>
```

**Descrição:**
```tsx
<p className="text-xl text-slate-300 mb-8">
  Transformamos desafios em oportunidades únicas de investimentos.
</p>
```

---

## Página Quem Somos

**Localização:** `app/quem-somos/page.tsx`

**Conteúdo:**
- Título H1
- Parágrafos de texto sobre a empresa

**Como modificar:**
Editar diretamente os parágrafos em `app/quem-somos/page.tsx`.

---

## Página Produtos & Serviços

**Localização:** `app/produtos-servicos/page.tsx`

**Estrutura de dados:**
Array `services` (linhas 2-19) com objetos:

```tsx
const services = [
  {
    title: 'Nome do Serviço',
    description: 'Descrição detalhada do serviço...',
  },
  // ... mais serviços
]
```

**Serviços atuais:**
1. Diagnósticos estratégicos e operacionais
2. Planos de reestruturação
3. Gestão e governança
4. Soluções de capital

**Como adicionar/editar serviço:**
1. Abrir `app/produtos-servicos/page.tsx`
2. Editar array `services` (linhas 2-19)
3. Adicionar novo objeto ou modificar existente:
```tsx
{
  title: 'Novo Serviço',
  description: 'Descrição do novo serviço...',
}
```

**Título da página:**
```tsx
<h1 className="mb-6">Produtos & Serviços</h1>
```

**Descrição introdutória:**
```tsx
<p className="text-lg text-slate-300">
  Localizamos oportunidades nas situações de estresse...
</p>
```

---

## Página Time

**Localização:** `app/time/page.tsx`

**Conteúdo:**
- Título H1
- Parágrafos sobre a equipe

**Como modificar:**
Editar diretamente os parágrafos em `app/time/page.tsx`.

---

## Página Contato

**Localização:** `app/contato/page.tsx`

**Estrutura:**
- Título H1
- Grid com informações de contato (linhas 8-69)
- Links para mapas (Waze e Google Maps)

**Links de mapas:**
- **Waze** (linhas 50-57):
```tsx
href="https://waze.com/ul?q=Rua%20Alexandre%20Dumas,%201711,%20Chácara%20Santo%20Antônio,%20São%20Paulo"
```

- **Google Maps** (linhas 59-66):
```tsx
href="https://maps.google.com/?q=Rua+Alexandre+Dumas,+1711,+Chácara+Santo+Antônio,+São+Paulo"
```

**Como atualizar endereço nos mapas:**
1. Editar URLs em `app/contato/page.tsx` (linhas 51 e 60)
2. Editar URLs em `components/Footer.tsx` (linhas 61 e 69)
3. Codificar endereço corretamente (URL encoding)

---

## Página Política de Privacidade

**Localização:** `app/politica-privacidade/page.tsx`

**Conteúdo:**
- Título H1
- Seções com informações sobre privacidade

**Como modificar:**
Editar diretamente o conteúdo em `app/politica-privacidade/page.tsx`.

---

## Navegação

### Itens do Menu

**Localização:** `components/Navigation.tsx` (linhas 9-15)

**Array de itens:**
```tsx
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/produtos-servicos', label: 'Produtos & Serviços' },
  { href: '/time', label: 'Time' },
  { href: '/contato', label: 'Contato' },
]
```

**Como adicionar/remover item:**
1. Editar array `navItems` em `components/Navigation.tsx`
2. Adicionar objeto: `{ href: '/nova-rota', label: 'Novo Item' }`
3. Criar página correspondente em `app/nova-rota/page.tsx`

**Também em:** `components/Footer.tsx` (linhas 4-11) - inclui política de privacidade

---

## Metadata (SEO)

### Metadata Global

**Localização:** `app/layout.tsx` (linhas 18-21)

```tsx
export const metadata: Metadata = {
  title: 'Crafting Solutions - Soluções em Reestruturação, Turnaround e Governança',
  description: 'Transformamos desafios em oportunidades únicas de investimentos...',
}
```

**Como atualizar:**
Editar em `app/layout.tsx` (linhas 18-21).

**Nota:** Atualmente todas as páginas usam a mesma metadata. Para metadata específica por página, criar `metadata` export em cada `page.tsx`.

---

## Links Externos

### Tango Marketing

**Localização:** `components/Footer.tsx` (linhas 84-91)

```tsx
<a href="https://tangomarketing.com.br" target="_blank" rel="noopener noreferrer">
  Tango Marketing
</a>
```

**Como atualizar:**
Editar URL em `components/Footer.tsx` (linha 85).

---

## Checklist de Atualização

Ao atualizar conteúdos, verificar:

- [ ] Informações de contato atualizadas em `Footer.tsx` e `contato/page.tsx`
- [ ] Links de mapas atualizados (se endereço mudou)
- [ ] Textos revisados e sem erros
- [ ] Formatação HTML mantida (tags `<br />`, etc.)
- [ ] Links funcionando corretamente
- [ ] Build funciona (`npm run build`)

---

## Referências Rápidas

| Conteúdo | Arquivo | Linhas |
|----------|---------|--------|
| Contato (Footer) | `components/Footer.tsx` | 38-52 |
| Contato (Página) | `app/contato/page.tsx` | 14-42 |
| Serviços (Home) | `app/page.tsx` | 34-60 |
| Serviços (Página) | `app/produtos-servicos/page.tsx` | 2-19 |
| Navegação | `components/Navigation.tsx` | 9-15 |
| Metadata | `app/layout.tsx` | 18-21 |
