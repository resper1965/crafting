/**
 * Descoberta e parsing de sitemaps
 */

import { XMLParser } from 'fast-xml-parser';
import { fetchWithRetry } from './fetcher.js';
import { allowlist, normalizeUrl } from './url-utils.js';

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_'
});

/**
 * Extrai URLs de sitemap do robots.txt
 */
export async function extractSitemapsFromRobots(robotsText, baseUrl) {
  if (!robotsText) return [];
  
  const sitemaps = [];
  const lines = robotsText.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.toLowerCase().startsWith('sitemap:')) {
      const url = trimmed.substring(8).trim();
      try {
        const fullUrl = new URL(url, baseUrl).href;
        sitemaps.push(fullUrl);
      } catch {
        // Ignora URLs inválidas
      }
    }
  }
  
  return sitemaps;
}

/**
 * Tenta descobrir sitemaps comuns
 */
export function getCommonSitemapUrls(baseUrl) {
  const commonPaths = [
    '/sitemap.xml',
    '/sitemap_index.xml',
    '/sitemap.xml.gz',
    '/craftingsolutions/sitemap.xml'
  ];
  
  return commonPaths.map(path => new URL(path, baseUrl).href);
}

/**
 * Faz parse de sitemap XML
 */
export async function parseSitemap(sitemapUrl) {
  try {
    const response = await fetchWithRetry(sitemapUrl, {}, 1, 10000);
    
    if (!response.ok) {
      return { urls: [], sitemaps: [] };
    }
    
    const xml = await response.text();
    const result = parser.parse(xml);
    
    const urls = [];
    const sitemaps = [];
    
    // Sitemap index
    if (result.sitemapindex) {
      const sitemapList = Array.isArray(result.sitemapindex.sitemap) 
        ? result.sitemapindex.sitemap 
        : [result.sitemapindex.sitemap];
      
      for (const sitemap of sitemapList) {
        if (sitemap?.loc) {
          sitemaps.push(sitemap.loc);
        }
      }
    }
    
    // URL set
    if (result.urlset) {
      const urlList = Array.isArray(result.urlset.url)
        ? result.urlset.url
        : [result.urlset.url];
      
      for (const url of urlList) {
        if (url?.loc) {
          const normalized = normalizeUrl(url.loc);
          if (normalized && allowlist(normalized)) {
            urls.push(normalized);
          }
        }
      }
    }
    
    return { urls, sitemaps };
  } catch (error) {
    console.error(`Erro ao fazer parse de ${sitemapUrl}:`, error.message);
    return { urls: [], sitemaps: [] };
  }
}

/**
 * Descobre todas as URLs via sitemaps
 */
export async function discoverUrlsFromSitemaps(baseUrl) {
  const allUrls = new Set();
  const sitemapsToProcess = new Set();
  const processedSitemaps = new Set();
  
  // 1. Verificar robots.txt
  try {
    const robotsResponse = await fetchWithRetry(
      new URL('/robots.txt', baseUrl).href,
      {},
      1,
      5000
    );
    
    if (robotsResponse.ok) {
      const robotsText = await robotsResponse.text();
      const sitemaps = await extractSitemapsFromRobots(robotsText, baseUrl);
      sitemaps.forEach(s => sitemapsToProcess.add(s));
    }
  } catch {
    // Continua mesmo se robots.txt falhar
  }
  
  // 2. Tentar sitemaps comuns
  const commonSitemaps = getCommonSitemapUrls(baseUrl);
  commonSitemaps.forEach(s => sitemapsToProcess.add(s));
  
  // 3. Processar sitemaps recursivamente
  while (sitemapsToProcess.size > 0) {
    const sitemapUrl = Array.from(sitemapsToProcess)[0];
    sitemapsToProcess.delete(sitemapUrl);
    
    if (processedSitemaps.has(sitemapUrl)) continue;
    processedSitemaps.add(sitemapUrl);
    
    console.log(`Processando sitemap: ${sitemapUrl}`);
    
    const { urls, sitemaps } = await parseSitemap(sitemapUrl);
    
    urls.forEach(url => allUrls.add(url));
    sitemaps.forEach(s => {
      if (!processedSitemaps.has(s)) {
        sitemapsToProcess.add(s);
      }
    });
  }
  
  return Array.from(allUrls);
}
