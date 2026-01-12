#!/usr/bin/env node

/**
 * CLI para crawler do site Crafting Solutions
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { discoverUrlsFromSitemaps } from './lib/sitemap.js';
import { crawlBFS } from './lib/crawler.js';
import { normalizeUrl } from './lib/url-utils.js';
import pLimit from 'p-limit';
import { fetchWithRetry } from './lib/fetcher.js';
import { extractContent } from './lib/parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Parse CLI args
const args = process.argv.slice(2);
const outDir = args.find(arg => arg.startsWith('--out'))?.split('=')[1] || './out';
const dryRun = args.includes('--dry-run');
const maxUrls = parseInt(args.find(arg => arg.startsWith('--max-urls'))?.split('=')[1] || '5000');
const maxDepth = parseInt(args.find(arg => arg.startsWith('--max-depth'))?.split('=')[1] || '6');
const concurrency = parseInt(args.find(arg => arg.startsWith('--concurrency'))?.split('=')[1] || '5');

const SEED_URL = 'https://projetos.tangomarketing.com.br/craftingsolutions/';

async function main() {
  console.log('🚀 Iniciando crawler...');
  console.log(`📁 Diretório de saída: ${outDir}`);
  console.log(`🔍 Seed URL: ${SEED_URL}`);
  console.log(`⚙️  Max URLs: ${maxUrls}, Max Depth: ${maxDepth}, Concurrency: ${concurrency}`);
  
  if (dryRun) {
    console.log('🔍 DRY RUN - não fará requisições reais');
    return;
  }
  
  // Criar diretório de saída
  mkdirSync(outDir, { recursive: true });
  
  let allUrls = [];
  
  // 1. Tentar descobrir via sitemaps
  console.log('\n📋 Tentando descobrir URLs via sitemaps...');
  try {
    const sitemapUrls = await discoverUrlsFromSitemaps(SEED_URL);
    console.log(`✅ Encontradas ${sitemapUrls.length} URLs via sitemaps`);
    allUrls = [...sitemapUrls];
  } catch (error) {
    console.log(`⚠️  Erro ao descobrir sitemaps: ${error.message}`);
  }
  
  // 2. Crawl BFS como fallback/complemento
  console.log('\n🕷️  Iniciando crawl BFS...');
  const bfsResults = await crawlBFS({
    seedUrl: SEED_URL,
    maxUrls,
    maxDepth,
    concurrency,
    onProgress: ({ processed, queued, total }) => {
      if (processed % 10 === 0) {
        console.log(`   Processadas: ${processed}, Na fila: ${queued}, Total visitadas: ${total}`);
      }
    }
  });
  
  console.log(`✅ Crawl BFS completo: ${bfsResults.length} páginas extraídas`);
  
  // Combinar URLs (deduplicar)
  const urlSet = new Set(allUrls);
  bfsResults.forEach(r => {
    if (r.url) urlSet.add(r.url);
  });
  
  const finalUrls = Array.from(urlSet).sort();
  
  // 3. Gerar saídas
  console.log('\n📝 Gerando arquivos de saída...');
  
  // urls.txt
  writeFileSync(
    join(outDir, 'urls.txt'),
    finalUrls.join('\n') + '\n',
    'utf-8'
  );
  console.log(`✅ ${join(outDir, 'urls.txt')}`);
  
  // urls.csv
  const csvHeader = 'url,status_code,content_type,depth,discovered_from,title,h1,word_count\n';
  const csvRows = bfsResults.map(r => {
    const h1 = r.headings?.h1?.[0] || '';
    return [
      r.url || '',
      r.statusCode || '',
      r.contentType || '',
      r.depth || '',
      r.discoveredFrom || '',
      (r.title || '').replace(/"/g, '""'),
      h1.replace(/"/g, '""'),
      r.wordCount || 0
    ].map(field => `"${field}"`).join(',');
  });
  writeFileSync(
    join(outDir, 'urls.csv'),
    csvHeader + csvRows.join('\n'),
    'utf-8'
  );
  console.log(`✅ ${join(outDir, 'urls.csv')}`);
  
  // pages.json
  writeFileSync(
    join(outDir, 'pages.json'),
    JSON.stringify(bfsResults, null, 2),
    'utf-8'
  );
  console.log(`✅ ${join(outDir, 'pages.json')}`);
  
  console.log(`\n✨ Concluído! ${bfsResults.length} páginas extraídas.`);
  console.log(`📊 Estatísticas:`);
  console.log(`   - Total de URLs únicas: ${finalUrls.length}`);
  console.log(`   - Páginas com conteúdo: ${bfsResults.filter(r => r.text && r.text.length > 0).length}`);
  console.log(`   - Total de palavras: ${bfsResults.reduce((sum, r) => sum + (r.wordCount || 0), 0)}`);
}

main().catch(error => {
  console.error('❌ Erro:', error);
  process.exit(1);
});
