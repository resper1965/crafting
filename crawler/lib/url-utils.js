/**
 * Utilitários para normalização e validação de URLs
 */

const ALLOWED_PREFIX = 'https://projetos.tangomarketing.com.br/craftingsolutions/';

/**
 * Verifica se a URL está dentro do prefixo permitido
 */
export function allowlist(url) {
  if (!url || typeof url !== 'string') return false;
  
  try {
    const urlObj = new URL(url);
    // Normalizar pathname: adicionar / no final se necessário para match
    let pathname = urlObj.pathname;
    if (!pathname.endsWith('/') && !pathname.match(/\.[a-z]{2,4}$/i)) {
      pathname = pathname + '/';
    }
    const normalized = urlObj.origin + pathname;
    return normalized.startsWith(ALLOWED_PREFIX);
  } catch {
    return false;
  }
}

/**
 * Normaliza URL: remove fragmentos, parâmetros de tracking, etc.
 */
export function normalizeUrl(url) {
  if (!url) return null;
  
  try {
    const urlObj = new URL(url);
    
    // Remove fragmento
    urlObj.hash = '';
    
    // Remove parâmetros de tracking
    const trackingParams = [
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
      'fbclid', 'gclid', 'ref', '_ga', '_gid', 'mc_cid', 'mc_eid'
    ];
    
    trackingParams.forEach(param => {
      urlObj.searchParams.delete(param);
    });
    
    // Manter trailing slash para diretórios (sem extensão)
    let pathname = urlObj.pathname;
    // Só remover trailing slash se tiver extensão de arquivo
    if (pathname !== '/' && pathname.endsWith('/') && pathname.match(/\.[a-z]{2,4}\/$/i)) {
      pathname = pathname.slice(0, -1);
    }
    
    return urlObj.origin + pathname + (urlObj.search ? urlObj.search : '');
  } catch {
    return null;
  }
}

/**
 * Resolve URL relativa para absoluta
 */
export function resolveUrl(baseUrl, relativeUrl) {
  try {
    return new URL(relativeUrl, baseUrl).href;
  } catch {
    return null;
  }
}

/**
 * Verifica se é URL HTML (não asset)
 */
export function isHtmlUrl(url) {
  if (!url) return false;
  
  const assetExtensions = [
    '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico',
    '.pdf', '.zip', '.rar', '.css', '.js', '.json', '.xml',
    '.woff', '.woff2', '.ttf', '.eot', '.mp4', '.mp3', '.avi'
  ];
  
  const lowerUrl = url.toLowerCase();
  return !assetExtensions.some(ext => lowerUrl.includes(ext));
}

/**
 * Remove fragmentos de URL
 */
export function removeFragment(url) {
  try {
    const urlObj = new URL(url);
    urlObj.hash = '';
    return urlObj.href;
  } catch {
    return url;
  }
}
