---
description: "Guardrails de UI: preservar design system, tokens e padrões de componentes."
globs:
  - "**/*.tsx"
  - "**/*.jsx"
  - "**/*.css"
  - "**/*.scss"
alwaysApply: false
---

# Guardrails de Design (UI é contrato)

## Primeiro passo obrigatório (antes de editar UI)
- Localize e use SOMENTE fontes reais do design system do projeto:
  - tokens (cores, spacing, radius, typography)
  - componentes base (Button, Input, Card, Modal, etc.)
  - convenções de layout (grid, containers, breakpoints)
- Liste os arquivos de referência encontrados (paths reais).

## Tokens existentes no projeto
- **Cores**: `tailwind.config.ts` (linhas 11-23) - paleta primary-* (#00ade8 como primary-500)
- **Fontes**: `tailwind.config.ts` (linhas 25-28) - Inter (sans), Montserrat (display)
- **Classes utilitárias**: `app/globals.css` (linhas 40-56)
  - `.btn-primary` - botão primário (bg-primary-500)
  - `.btn-secondary` - botão secundário (border)
  - `.section-padding` - padding de seções (py-16 md:py-24)
  - `.container-custom` - container centralizado (max-w-7xl)

## Componentes base existentes
- `components/Navigation.tsx` - navegação principal
- `components/Footer.tsx` - rodapé

## Restrições
- Não criar cores/spacing "na mão".
  - Use tokens existentes (Tailwind config / theme / variables).
- Não introduzir novas bibliotecas de UI sem pedido explícito.
- Evitar CSS ad-hoc; preferir padrões do projeto (utility classes do Tailwind).

## Se for inevitável mudar design
- Justificar em 3 bullets:
  1) por que o token/var/componente atual não atende
  2) qual novo token/var será criado (nome e local)
  3) onde será reutilizado (mínimo 2 usos) para não virar exceção
