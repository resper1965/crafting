# Variáveis de Ambiente

## Variáveis Configuradas na Vercel

As seguintes variáveis de ambiente estão configuradas no projeto na Vercel:

### NEXT_PUBLIC_SITE_URL

**Descrição:** URL base do site

**Valores por ambiente:**
- **Production:** `https://siteedu-klx9szwqo-nessbr-projects.vercel.app`
- **Preview:** `https://siteedu-klx9szwqo-nessbr-projects.vercel.app`
- **Development:** `http://localhost:3000`

**Uso:** Disponível em todo o código via `process.env.NEXT_PUBLIC_SITE_URL`

## Como Gerenciar Variáveis via CLI

### Listar variáveis
```bash
vercel env ls
```

### Adicionar variável
```bash
vercel env add NOME_DA_VARIAVEL
```

### Remover variável
```bash
vercel env rm NOME_DA_VARIAVEL
```

### Baixar variáveis locais
```bash
vercel env pull .env.local
```

## Variáveis Futuras (Opcionais)

Se necessário no futuro, podem ser adicionadas:

- `NEXT_PUBLIC_API_URL` - URL da API (se houver)
- `CONTACT_EMAIL` - Email de contato
- `ANALYTICS_ID` - ID do Google Analytics
- Outras variáveis específicas do projeto

## Nota

Variáveis com prefixo `NEXT_PUBLIC_` são expostas ao cliente (browser).
Variáveis sem esse prefixo são apenas do servidor.
