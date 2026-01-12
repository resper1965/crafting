# Plano de Execução - Crawler + Refatoração

## 📋 Visão Geral

Fluxo completo para extrair conteúdo do site antigo e modernizar o site atual mantendo identidade e mensagem.

---

## 🎯 PARTE A - CRAWLER + EXTRAÇÃO

### Passo 1: Setup do Projeto Crawler
- Criar estrutura de diretórios: `crawler/`, `crawler/lib/`, `crawler/out/`
- Criar `crawler/package.json` com dependências
- Configurar `.gitignore` para `out/`

### Passo 2: Implementar Funções Core
- `lib/url-utils.js` - Normalização, allowlist, validação
- `lib/fetcher.js` - HTTP client com retry/backoff/timeout
- `lib/parser.js` - Cheerio para extração de conteúdo
- `lib/sitemap.js` - Descoberta e parsing de sitemaps

### Passo 3: Implementar Crawler BFS
- `lib/crawler.js` - Lógica de crawl BFS
- Fila de URLs, deduplicação, controle de profundidade
- Integração com allowlist e rate limiting

### Passo 4: Implementar Extrator de Conteúdo
- Remover header/footer/nav
- Extrair: title, headings (h1/h2/h3), texto principal, word_count
- Heurística para encontrar conteúdo principal

### Passo 5: CLI e Saídas
- `crawl.js` - CLI principal
- Gerar: `urls.txt`, `urls.csv`, `pages.json`
- Flags: --dry-run, --max-urls, --max-depth, --concurrency

### Passo 6: Executar Crawler
- Rodar crawler no site antigo
- Validar saídas
- Verificar qualidade do conteúdo extraído

---

## 🎨 PARTE B - DESIGN/REFATORAÇÃO

### Passo 7: Análise do Conteúdo Extraído
- Ler `out/pages.json`
- Mapear estrutura de páginas
- Identificar seções e componentes necessários
- Criar design spec baseado em conteúdo real

### Passo 8: Refatoração com Tailwind + shadcn/ui
- Atualizar páginas principais usando conteúdo real
- Criar componentes reutilizáveis
- Aplicar design institucional premium
- Manter identidade visual

### Passo 9: Validação e Testes
- Build/typecheck/lint
- Testes responsivos (mobile/tablet/desktop)
- Acessibilidade (foco, contraste)
- Performance

### Passo 10: Documentação e Deploy
- Documentar mudanças
- Commit e deploy

---

## 📁 Arquivos a Criar/Modificar

### Crawler (NOVO):
```
crawler/
├── package.json
├── crawl.js
├── lib/
│   ├── url-utils.js
│   ├── fetcher.js
│   ├── parser.js
│   ├── sitemap.js
│   └── crawler.js
└── out/
    ├── urls.txt
    ├── urls.csv
    └── pages.json
```

### Refatoração (MODIFICAR):
```
app/
├── page.tsx (Home - usar conteúdo real)
├── quem-somos/page.tsx
├── produtos-servicos/page.tsx
├── time/page.tsx
└── contato/page.tsx

components/
└── (novos componentes se necessário)

docs/
└── DESIGN_SPEC.md (novo)
```

---

## ✅ Checklist de Validação

- [ ] Crawler extraiu todas as páginas de /craftingsolutions/
- [ ] Conteúdo extraído preserva mensagem original
- [ ] Design mantém identidade visual
- [ ] Todas as páginas responsivas
- [ ] Acessibilidade validada
- [ ] Build sem erros
- [ ] Typecheck passa
- [ ] Lint passa
