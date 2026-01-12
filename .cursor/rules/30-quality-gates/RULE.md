---
description: "Quality gates: mudanças devem vir com verificação mínima (typecheck/lint/test)."
alwaysApply: true
---

# Quality Gates

## Obrigatório ao finalizar uma alteração
- Indicar comandos de verificação aplicáveis ao repo (sem inventar):
  - `npm run lint` - verifica ESLint (definido em `package.json` linha 9)
  - `npm run build` - verifica TypeScript e build (definido em `package.json` linha 7)
  - `npm run dev` - validação manual em desenvolvimento

## Scripts disponíveis no projeto
- `npm run dev` - desenvolvimento local
- `npm run build` - build de produção (verifica TypeScript)
- `npm run start` - servidor de produção
- `npm run lint` - verificação ESLint

## Proibido
- Entregar alterações sem indicar como validar.
- Pular verificação de tipos TypeScript antes de commit.

## Checklist antes de finalizar
- [ ] `npm run lint` passa sem erros
- [ ] `npm run build` compila sem erros TypeScript
- [ ] Componentes renderizam corretamente (teste visual em dev)
- [ ] Não quebrou componentes existentes (verificar Navigation e Footer)
