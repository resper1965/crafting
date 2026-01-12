---
description: "Anti-alucinação: respostas devem ser ancoradas no codebase e nunca inventar APIs/arquivos."
alwaysApply: true
---

# Regras anti-alucinação (sempre ativas)

## Obrigatório
- Antes de propor mudanças, identifique e cite:
  - arquivos relevantes (paths reais) e símbolos (funções/classes/componentes) existentes.
- Quando mencionar uma API, prop, hook, endpoint, env var, rota, schema ou config:
  - aponte onde isso está definido no repo (path + nome do símbolo).
- Se você não encontrar evidência no repo, diga explicitamente "não encontrei no codebase" e sugira:
  - (a) como localizar, ou
  - (b) como criar com impacto mínimo e testes.

## Proibido
- Inventar arquivos, pastas, funções, props, endpoints, bibliotecas instaladas ou padrões "assumidos".
- Alterar design/estilos sem localizar tokens e componentes base do projeto.

## Modo de trabalho
- Sempre proponha um plano curto (5–10 passos) e liste os arquivos que pretende alterar.
- Prefira mudanças pequenas, com diffs claros e reversíveis.

## Referências do projeto
- Design tokens: `tailwind.config.ts` (cores primary-*, fontes sans/display)
- Componentes base: `components/Navigation.tsx`, `components/Footer.tsx`
- Classes utilitárias: `app/globals.css` (.btn-primary, .btn-secondary, .section-padding, .container-custom)
- Config Next.js: `next.config.js`
- Estrutura de páginas: `app/*/page.tsx`
