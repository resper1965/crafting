# Design Spec - Refatoração Baseada em Conteúdo Real

## 📊 Análise do Conteúdo Extraído

Baseado em `crawler/out/pages.json`, foram extraídas **9 páginas** do site antigo.

### Mapa de Páginas e Conteúdo

#### 1. Home (`/`)
- **Título:** "Crafting Solutions – Soluções em reestruturação, turnaround e governança"
- **H1:** "Soluções em reestruturação, turnaround e governança"
- **H2:** "O que fazemos", "Quem somos"
- **Conteúdo:**
  - "Localizamos oportunidades nas situações de estresse enfrentadas por empresas dos mais variados ramos de atividade."
  - "Um time de especialistas em reestruturações complexas com mais de 25 anos de experiência e participação ativa dos sócios em cada projeto."
- **Palavras:** 37

#### 2. Quem Somos (`/quem-somos`)
- **Título:** "Quem Somos – Crafting Solutions"
- **H1:** "Quem Somos"
- **H2:** "Diferenciais"
- **Conteúdo:**
  - "Especialistas em soluções estratégicas para empresas em estresse e transformação — preservando valor e destravando crescimento."
  - "A CRAFTING SOLUTIONS é uma boutique one-stop-shop de advisory financeiro e estratégico com soluções de capital, que busca oportunidade em bons ativos que estão enfrentando desafios estruturais. Nosso objetivo é a preservação das empresas e maximização dos retornos."
  - "Identificamos e desenvolvemos soluções em cenários de estresse e transformação, atuando junto a empresas de diferentes setores para preservar valor e impulsionar novos caminhos de crescimento, sempre alinhando acionistas, credores e investidores."
  - "Combinamos experiência prática, visão multidisciplinar e recursos próprios para construir soluções sólidas. Nossos diferenciais asseguram consistência em cada etapa e alinhamento integral com os objetivos de clientes e investidores."
- **Palavras:** 115

#### 3. Produtos & Serviços (`/produtos-servicos`)
- **Título:** "Produtos & Serviços – Crafting Solutions"
- **H2:** "Navegação", "Contato", "Como chegar"
- **Conteúdo:** "Transformamos desafios em oportunidades únicas de investimentos."
- **Palavras:** 7
- **Nota:** Conteúdo mínimo - pode precisar de mais detalhes das subpáginas

#### 4. Subpáginas de Produtos & Serviços:
- `/produtos-servicos/diagnosticos-estrategicos-e-operacionais-2/`
- `/produtos-servicos/planos-de-reestruturacao-2/`
- `/produtos-servicos/gestao-e-governanca-2/`
- `/produtos-servicos/solucoes-de-capital-2/`

#### 5. Time (`/time`)
- **Título:** "Time – Crafting Solutions"
- **H1:** "Time"
- **H2:** "Eduardo Matias", "Leonardo Morato"
- **Conteúdo:** "Um time de especialistas em reestruturações complexas com mais de 25 anos de experiência e participação ativa em diferentes projetos."
- **Palavras:** 20

#### 6. Contato (`/contato`)
- **Título:** "Contato – Crafting Solutions"
- **H2:** "Navegação", "Contato", "Como chegar"
- **Conteúdo:** "Transformamos desafios em oportunidades únicas de investimentos."
- **Palavras:** 7

---

## 🎨 Design Spec - Estrutura de Páginas

### Home (`/`)
**Seções:**
1. **Hero**
   - H1: "Soluções em reestruturação, turnaround e governança"
   - Texto introdutório
   - CTA: "Saiba mais"

2. **O que fazemos**
   - H2: "O que fazemos"
   - Texto introdutório
   - Cards com 4 serviços principais (extrair das subpáginas)

3. **Quem somos** (preview)
   - H2: "Quem somos"
   - Texto resumido
   - Link para página completa

4. **CTA Final**
   - Mensagem de contato

### Quem Somos (`/quem-somos`)
**Seções:**
1. **Hero**
   - H1: "Quem Somos"
   - Texto introdutório

2. **Conteúdo Principal**
   - Parágrafos extraídos do conteúdo real
   - Preservar mensagem sobre "boutique one-stop-shop"

3. **Diferenciais**
   - H2: "Diferenciais"
   - Lista de diferenciais (extrair do conteúdo)

### Produtos & Serviços (`/produtos-servicos`)
**Seções:**
1. **Hero**
   - H1: "Produtos & Serviços"
   - Texto introdutório

2. **Grid de Serviços**
   - 4 cards principais:
     - Diagnósticos estratégicos e operacionais
     - Planos de reestruturação
     - Gestão e governança
     - Soluções de capital
   - Cada card com link para subpágina (se houver)

### Time (`/time`)
**Seções:**
1. **Hero**
   - H1: "Time"
   - Texto introdutório

2. **Membros do Time**
   - Eduardo Matias
   - Leonardo Morato
   - (Extrair mais detalhes se disponível)

### Contato (`/contato`)
**Seções:**
1. **Hero**
   - H1: "Contato"

2. **Informações de Contato**
   - Endereço
   - Email
   - Telefone

3. **Mapa/Links**
   - Waze
   - Google Maps

---

## 🧩 Componentes Necessários

### Componentes shadcn/ui a Usar:
- ✅ **Button** - já existe
- ✅ **Card** - já existe
- **Separator** - para divisões sutis
- **Badge** - para tags/destaques (opcional)

### Componentes Customizados:
- **HeroSection** - Hero padronizado
- **ContentSection** - Seção de conteúdo com espaçamento consistente
- **ServiceCard** - Card específico para serviços
- **TeamMemberCard** - Card para membros do time (se necessário)

---

## 🎨 Diretrizes de Design

### Tipografia
- **Títulos:** Montserrat (font-display), font-light, tracking-tight
- **Corpo:** Roboto (font-sans), font-light
- **Hierarquia:** Preservar H1 > H2 > H3 do conteúdo original

### Espaçamento
- **Seções:** `section-padding` (py-20 md:py-32)
- **Entre elementos:** Espaçamento generoso (space-y-8, space-y-12)
- **Container:** `container-custom` (max-w-7xl)

### Cores
- **Backgrounds:** crafting-grafite, crafting-chumbo
- **Textos:** crafting-branco (títulos), crafting-cinzaAlvo (corpo)
- **Destaques:** crafting-azul (CTAs, links importantes)
- **Bordas:** crafting-verde/10 a /20

### Layout
- **Grid:** Responsivo (grid-cols-1 md:grid-cols-2)
- **Cards:** Bordas sutis, hover elegante
- **Espaço em branco:** Generoso, minimalista

---

## 📝 Regras de Conteúdo

### ✅ PERMITIDO:
- Reestruturar apresentação (layout, componentes)
- Melhorar hierarquia visual
- Adicionar espaçamento e respiração
- Usar animações sutis
- Componentizar elementos repetidos

### ❌ PROIBIDO:
- Inventar textos, frases ou claims
- Adicionar números não presentes no conteúdo original
- Criar seções de conteúdo novas
- Modificar mensagem ou tom
- Adicionar informações não extraídas

---

## 🔄 Mapeamento de Rotas

| URL Antiga | Rota Nova | Status |
|------------|-----------|--------|
| `/` | `/` | ✅ Refatorar |
| `/quem-somos/` | `/quem-somos` | ✅ Refatorar |
| `/produtos-servicos/` | `/produtos-servicos` | ✅ Refatorar |
| `/time/` | `/time` | ✅ Refatorar |
| `/contato/` | `/contato` | ✅ Refatorar |
| `/produtos-servicos/diagnosticos-...` | (integrar em /produtos-servicos) | ⚠️ Verificar |
| `/produtos-servicos/planos-...` | (integrar em /produtos-servicos) | ⚠️ Verificar |
| `/produtos-servicos/gestao-...` | (integrar em /produtos-servicos) | ⚠️ Verificar |
| `/produtos-servicos/solucoes-...` | (integrar em /produtos-servicos) | ⚠️ Verificar |

---

## ✅ Checklist de Implementação

- [ ] Ler `crawler/out/pages.json`
- [ ] Mapear conteúdo por página
- [ ] Refatorar Home com conteúdo real
- [ ] Refatorar Quem Somos com conteúdo real
- [ ] Refatorar Produtos & Serviços com conteúdo real
- [ ] Refatorar Time com conteúdo real
- [ ] Refatorar Contato com conteúdo real
- [ ] Validar que nenhum texto foi inventado
- [ ] Testar responsividade
- [ ] Validar acessibilidade
- [ ] Build e deploy
