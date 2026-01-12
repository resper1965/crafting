# Guia de Deploy - Vercel

## ✅ Preparação Concluída

### Arquivos Criados/Modificados

1. **Regras de Repositório** (`.cursor/rules/`)
   - `00-grounding/RULE.md` - Anti-alucinação, sempre ancorar no codebase
   - `10-design-guardrails/RULE.md` - Preservar design system e tokens
   - `20-frontend-implementation/RULE.md` - Padrões de implementação
   - `30-quality-gates/RULE.md` - Verificação de qualidade

2. **Configurações de Deploy**
   - `next.config.js` - Otimizações para produção (compress, poweredByHeader, images)
   - `package.json` - Scripts adicionais (type-check, verify)
   - `.vercelignore` - Arquivos excluídos do deploy
   - `README.md` - Instruções de deploy atualizadas

## 🚀 Próximos Passos para Deploy

### 1. Instalar Dependências (se ainda não fez)

```bash
npm install
```

### 2. Verificar Localmente

```bash
# Verificar lint e tipos
npm run verify

# Ou testar build
npm run build
```

### 3. Deploy na Vercel

#### Opção A: Via CLI (Recomendado para primeira vez)

```bash
# Instalar CLI globalmente
npm i -g vercel

# Login
vercel login

# Deploy (primeira vez - interativo)
vercel

# Deploys subsequentes
vercel --prod
```

#### Opção B: Via GitHub (Recomendado para CI/CD)

1. Faça push do código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "Add New Project"
4. Conecte seu repositório GitHub
5. A Vercel detectará automaticamente:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Clique em "Deploy"

### 4. Configurações na Vercel (Opcional)

#### Variáveis de Ambiente
Se precisar de variáveis (ex: API keys):
- Settings → Environment Variables
- Adicione por ambiente (Production, Preview, Development)

#### Domínio Customizado
- Settings → Domains
- Adicione seu domínio personalizado

## 📋 Checklist de Deploy

- [ ] Dependências instaladas (`npm install`)
- [ ] Build local funciona (`npm run build`)
- [ ] Lint passa (`npm run lint`)
- [ ] Type check passa (`npm run type-check`)
- [ ] Código commitado no Git
- [ ] Deploy realizado na Vercel
- [ ] Site acessível e funcionando
- [ ] Navegação testada em todas as páginas

## 🔍 Verificação Pós-Deploy

Após o deploy, verifique:

1. **Performance**
   - Acesse o site e verifique velocidade
   - Use Lighthouse (Chrome DevTools)

2. **Funcionalidades**
   - Navegação entre páginas
   - Links externos (email, telefone, mapas)
   - Responsividade mobile/desktop

3. **SEO**
   - Metadata nas páginas
   - Títulos e descrições corretos

## 🐛 Troubleshooting

### Build falha na Vercel
- Verifique logs na dashboard da Vercel
- Confirme que `npm run build` funciona localmente
- Verifique versão do Node.js (Vercel usa Node 18 por padrão)

### Erros de TypeScript
- Execute `npm run type-check` localmente
- Corrija erros antes de fazer deploy

### Erros de ESLint
- Execute `npm run lint` localmente
- Corrija warnings/erros

## 📚 Referências

- [Documentação Vercel - Next.js](https://vercel.com/docs/frameworks/nextjs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
