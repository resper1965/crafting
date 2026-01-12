/**
 * Script para carregar e processar conteúdo extraído
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function loadExtractedContent() {
  const pagesPath = join(__dirname, '../crawler/out/pages.json');
  const pages = JSON.parse(readFileSync(pagesPath, 'utf-8'));
  
  // Mapear por URL simplificada
  const contentMap = {};
  
  pages.forEach(page => {
    const url = page.url;
    const path = url.replace('https://projetos.tangomarketing.com.br/craftingsolutions', '') || '/';
    const cleanPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
    
    contentMap[cleanPath] = {
      title: page.title,
      h1: page.headings?.h1?.[0] || '',
      h2: page.headings?.h2 || [],
      h3: page.headings?.h3 || [],
      text: page.text,
      wordCount: page.wordCount
    };
  });
  
  return contentMap;
}

// Se executado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  const content = loadExtractedContent();
  console.log(JSON.stringify(content, null, 2));
}
