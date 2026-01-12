#!/usr/bin/env node

import { fetchWithRetry } from './lib/fetcher.js';
import { allowlist, normalizeUrl } from './lib/url-utils.js';

const url = 'https://projetos.tangomarketing.com.br/craftingsolutions/';

async function test() {
  console.log('Testando conexão com:', url);
  
  try {
    const response = await fetchWithRetry(url, {}, 2, 15000);
    console.log('Status:', response.status);
    console.log('Content-Type:', response.headers.get('content-type'));
    
    const html = await response.text();
    console.log('Tamanho HTML:', html.length, 'bytes');
    
    // Testar allowlist
    console.log('Allowlist check:', allowlist(url));
    
    // Testar normalização
    console.log('Normalized:', normalizeUrl(url));
    
    // Contar links
    const linkMatches = html.match(/<a[^>]+href=["']([^"']+)["'][^>]*>/gi);
    console.log('Links encontrados:', linkMatches ? linkMatches.length : 0);
    
    if (linkMatches) {
      console.log('\nPrimeiros 5 links:');
      linkMatches.slice(0, 5).forEach((match, i) => {
        const href = match.match(/href=["']([^"']+)["']/)?.[1];
        console.log(`  ${i + 1}. ${href}`);
      });
    }
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

test();
