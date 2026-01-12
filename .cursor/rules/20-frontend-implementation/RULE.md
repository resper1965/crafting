---
description: "Padrões de implementação no frontend: compatibilidade, consistência e mínima superfície de mudança."
globs:
  - "**/*.ts"
  - "**/*.tsx"
alwaysApply: false
---

# Padrões de Implementação (Frontend)

## Consistência
- Reutilize helpers/hooks existentes; não crie duplicatas.
- Se criar componente novo:
  - usar composição a partir dos componentes base existentes
  - export consistente com o padrão do repo (default export para componentes de página)
  - sem quebrar props públicas existentes (backwards compatible)

## Estrutura de componentes existente
- Componentes de página: `app/*/page.tsx` - default export, server components
- Componentes compartilhados: `components/*.tsx` - default export
- Layout: `app/layout.tsx` - estrutura base com Navigation e Footer

## Padrões de estilo
- Usar classes Tailwind via `app/globals.css` quando disponíveis
- Seguir design system ness. (slate-* para backgrounds, primary-* para acentos)
- Tipografia: Inter para corpo, Montserrat para títulos (via font-display)

## Segurança contra regressão
- Se alterar um componente compartilhado:
  - identificar consumidores (busca no codebase) e listar impactos
  - sugerir teste/ajuste mínimo necessário
- Componentes compartilhados atuais:
  - `components/Navigation.tsx` - usado em `app/layout.tsx` (linha 31)
  - `components/Footer.tsx` - usado em `app/layout.tsx` (linha 35)
