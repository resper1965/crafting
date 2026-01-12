#!/usr/bin/env node

import { fetchWithRetry } from './lib/fetcher.js';
import { extractContent } from './lib/parser.js';

const url = 'https://projetos.tangomarketing.com.br/craftingsolutions/';

async function test() {
  console.log('Testando parser...');
  
  try {
    const response = await fetchWithRetry(url, {}, 2, 15000);
    const html = await response.text();
    
    console.log('HTML recebido:', html.length, 'bytes');
    
    const content = extractContent(html, url);
    
    console.log('\n=== RESULTADO ===');
    console.log('Title:', content.title);
    console.log('H1:', content.headings.h1);
    console.log('H2:', content.headings.h2.slice(0, 3));
    console.log('Word count:', content.wordCount);
    console.log('\nTexto (primeiros 500 chars):');
    console.log(content.text.substring(0, 500));
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

test();
