/**
 * Cliente HTTP com retry, backoff e timeout
 */

/**
 * Fetch com retry e timeout
 */
export async function fetchWithRetry(url, options = {}, retries = 2, timeout = 15000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; CraftingCrawler/1.0)',
        ...options.headers
      }
    });
    
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (retries > 0 && (error.name === 'AbortError' || error.code === 'ECONNRESET')) {
      // Backoff exponencial
      const delay = Math.pow(2, 3 - retries) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
      return fetchWithRetry(url, options, retries - 1, timeout);
    }
    
    throw error;
  }
}

/**
 * Verifica robots.txt
 */
export async function checkRobotsTxt(baseUrl) {
  try {
    const robotsUrl = new URL('/robots.txt', baseUrl).href;
    const response = await fetchWithRetry(robotsUrl, {}, 1, 5000);
    
    if (!response.ok) return null;
    
    const text = await response.text();
    return text;
  } catch {
    return null;
  }
}

/**
 * Verifica se URL está permitida pelo robots.txt
 */
export function isAllowedByRobots(url, robotsText) {
  if (!robotsText) return true;
  
  // Implementação simples: verifica se há "Disallow: /" geral
  // Para implementação completa, usar biblioteca como robots-parser
  const lines = robotsText.split('\n');
  let disallowAll = false;
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.toLowerCase().startsWith('disallow: /')) {
      disallowAll = true;
      break;
    }
  }
  
  return !disallowAll;
}
