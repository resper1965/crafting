# Crawler - Crafting Solutions

## 📋 Visão Geral

Crawler Node.js para extrair conteúdo do site antigo `https://projetos.tangomarketing.com.br/craftingsolutions/` e gerar dataset para refatoração.

## 🚀 Uso Rápido

```bash
cd crawler
npm install
node crawl.js --out ./out
```

## ⚙️ Opções

```bash
node crawl.js [opções]

Opções:
  --out <diretório>        Diretório de saída (padrão: ./out)
  --max-urls <número>      Máximo de URLs a processar (padrão: 5000)
  --max-depth <número>      Profundidade máxima do crawl (padrão: 6)
  --concurrency <número>   Requisições simultâneas (padrão: 5)
  --dry-run                Modo teste (não faz requisições reais)
```

## 📊 Saídas

O crawler gera 3 arquivos:

1. **`out/urls.txt`** - Lista de URLs encontradas (1 por linha)
2. **`out/urls.csv`** - CSV com metadados (url, status_code, content_type, depth, title, h1, word_count)
3. **`out/pages.json`** - Dataset completo com conteúdo extraído

## 🔒 Restrições

- ✅ Aceita **SOMENTE** URLs que começam com `https://projetos.tangomarketing.com.br/craftingsolutions/`
- ✅ Ignora links externos e assets (jpg, png, pdf, css, js, etc)
- ✅ Remove parâmetros de tracking (utm_*, fbclid, gclid)
- ✅ Normaliza URLs (remove fragmentos, trailing slashes)
- ✅ Respeita robots.txt

## 📝 Estrutura do pages.json

```json
[
  {
    "url": "https://...",
    "statusCode": 200,
    "contentType": "text/html; charset=UTF-8",
    "depth": 0,
    "discoveredFrom": null,
    "title": "Título da página",
    "headings": {
      "h1": ["Título H1"],
      "h2": ["Subtítulo 1", "Subtítulo 2"],
      "h3": []
    },
    "text": "Conteúdo principal extraído...",
    "wordCount": 123,
    "extractedAt": "2026-01-12T20:43:37.287Z"
  }
]
```

## 🔧 Desenvolvimento

### Estrutura do Código

```
crawler/
├── crawl.js           # CLI principal
├── lib/
│   ├── url-utils.js   # Normalização e validação de URLs
│   ├── fetcher.js     # HTTP client com retry/backoff
│   ├── parser.js      # Extração de conteúdo HTML
│   ├── sitemap.js     # Descoberta e parsing de sitemaps
│   └── crawler.js     # Lógica de crawl BFS
└── out/               # Saídas (ignorado no git)
```

### Dependências

- `cheerio` - Parser HTML
- `fast-xml-parser` - Parser de sitemaps XML
- `p-limit` - Controle de concorrência

## 📚 Documentação Relacionada

- `docs/DESIGN_SPEC.md` - Design spec baseado em conteúdo extraído
- `docs/CRAWLER_REFATORACAO_RESUMO.md` - Resumo completo da implementação
- `PLANO_EXECUCAO.md` - Plano de execução original

## ⚠️ Notas

- O crawler usa `fetch` nativo do Node.js 18+
- Timeout padrão: 15 segundos
- Retry: 2 tentativas com backoff exponencial
- Concorrência padrão: 5 requisições simultâneas
