/**
 * Crawler BFS para descobrir e extrair páginas
 */

import pLimit from 'p-limit';
import * as cheerio from 'cheerio';
import { fetchWithRetry } from './fetcher.js';
import { extractContent } from './parser.js';
import { allowlist, normalizeUrl, resolveUrl, isHtmlUrl, removeFragment } from './url-utils.js';

/**
 * Extrai links de uma página HTML usando Cheerio
 */
function extractLinks(html, baseUrl) {
  const links = [];
  try {
    const $ = cheerio.load(html);
    
    $('a[href]').each(function() {
      const href = $(this).attr('href');
      if (href) {
        const resolved = resolveUrl(baseUrl, href);
        if (resolved) {
          links.push(resolved);
        }
      }
    });
  } catch (error) {
    // Fallback para regex se cheerio falhar
    const regex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    let match;
    while ((match = regex.exec(html)) !== null) {
      const href = match[1];
      if (href) {
        const resolved = resolveUrl(baseUrl, href);
        if (resolved) {
          links.push(resolved);
        }
      }
    }
  }
  
  return links;
}

/**
 * Crawler BFS principal
 */
export async function crawlBFS({
  seedUrl,
  maxUrls = 5000,
  maxDepth = 6,
  concurrency = 5,
  onProgress = () => {}
}) {
  const queue = [{ url: seedUrl, depth: 0, discoveredFrom: null }];
  const visited = new Set();
  const processing = new Set();
  const results = [];
  const limit = pLimit(concurrency);
  
  // Processar fila enquanto houver itens e não atingir limite
  while ((queue.length > 0 || processing.size > 0) && results.length < maxUrls) {
    // Processar itens da fila
    while (queue.length > 0 && results.length < maxUrls && processing.size < concurrency * 2) {
      const item = queue.shift();
      if (!item) break;
      
      const { url, depth, discoveredFrom } = item;
      
      if (depth > maxDepth) continue;
      
      const normalized = normalizeUrl(url);
      if (!normalized) continue;
      
      // Verificar se já foi visitada ou está sendo processada
      if (visited.has(normalized) || processing.has(normalized)) continue;
      
      // Verificar allowlist
      if (!allowlist(normalized)) continue;
      
      // Verificar se é HTML
      if (!isHtmlUrl(normalized)) continue;
      
      // Marcar como sendo processada
      processing.add(normalized);
      
      // Processar URL
      const promise = limit(async () => {
      try {
        const response = await fetchWithRetry(normalized, {}, 2, 15000);
        
        if (!response.ok) {
          return {
            url: normalized,
            statusCode: response.status,
            contentType: response.headers.get('content-type') || '',
            depth,
            discoveredFrom,
            error: `HTTP ${response.status}`
          };
        }
        
        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('text/html')) {
          return {
            url: normalized,
            statusCode: response.status,
            contentType,
            depth,
            discoveredFrom,
            error: 'Not HTML'
          };
        }
        
        const html = await response.text();
        const content = extractContent(html, normalized);
        
        // Extrair links para continuar crawl
        if (depth < maxDepth) {
          const links = extractLinks(html, normalized);
          const newLinks = [];
          links.forEach(link => {
            const resolved = resolveUrl(normalized, link);
            if (resolved) {
              const normalizedLink = normalizeUrl(removeFragment(resolved));
              if (normalizedLink && !visited.has(normalizedLink) && allowlist(normalizedLink)) {
                newLinks.push(normalizedLink);
                queue.push({
                  url: normalizedLink,
                  depth: depth + 1,
                  discoveredFrom: normalized
                });
              }
            }
          });
          if (newLinks.length > 0) {
            console.log(`   📎 ${newLinks.length} novos links encontrados em ${normalized}`);
          }
        }
        
        onProgress({
          processed: results.length + 1,
          queued: queue.length,
          total: visited.size
        });
        
        console.log(`   ✅ Extraído: ${normalized} (${content.wordCount} palavras)`);
        
        // Marcar como visitada após sucesso
        visited.add(normalized);
        processing.delete(normalized);
        
        return {
          url: normalized,
          statusCode: response.status,
          contentType,
          depth,
          discoveredFrom,
          ...content,
          extractedAt: new Date().toISOString()
        };
      } catch (error) {
        processing.delete(normalized);
        console.log(`   ❌ Erro ao processar ${normalized}: ${error.message}`);
        return {
          url: normalized,
          statusCode: 0,
          contentType: '',
          depth,
          discoveredFrom,
          error: error.message
        };
      }
    });
    
      results.push(promise);
    }
    
    // Aguardar um pouco se não há itens na fila mas há processamento
    if (queue.length === 0 && processing.size > 0) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  // Aguardar todas as promises restantes
  if (results.length > 0) {
    const finalResults = await Promise.all(results);
    
    // Filtrar apenas resultados válidos (sem erro e com conteúdo)
    return finalResults.filter(r => r && !r.error && r.text);
  }
  
  return [];
}
