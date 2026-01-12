/**
 * Parser HTML para extração de conteúdo
 */

import * as cheerio from 'cheerio';

/**
 * Remove elementos comuns de navegação/rodapé (mais conservador)
 */
function removeNavigationElements($) {
  // Remover apenas elementos explícitos de navegação
  $('nav, script, style, noscript').remove();
  
  // Remover header/footer apenas se não contiverem conteúdo principal
  $('header, footer').each(function() {
    const $el = $(this);
    const text = $el.text().trim();
    // Se tiver menos de 50 caracteres, provavelmente é só navegação
    if (text.length < 50) {
      $el.remove();
    }
  });
  
  // Remover breadcrumbs explícitos
  $('[class*="breadcrumb"], [id*="breadcrumb"]').remove();
  
  // Remover comentários
  $('*').contents().filter(function() {
    return this.nodeType === 8; // Comment node
  }).remove();
}

/**
 * Encontra o conteúdo principal da página
 */
function findMainContent($) {
  // Prioridade 1: tag <main>
  let main = $('main').first();
  if (main.length > 0 && main.text().trim().length > 50) {
    return main;
  }
  
  // Prioridade 2: classes comuns de conteúdo (mais específicas)
  const contentSelectors = [
    'main',
    '[role="main"]',
    '.content',
    '#content',
    '.main-content',
    '#main-content',
    '.entry-content',
    '.post-content',
    'article',
    '.article'
  ];
  
  for (const selector of contentSelectors) {
    const element = $(selector).first();
    if (element.length > 0 && element.text().trim().length > 50) {
      return element;
    }
  }
  
  // Prioridade 3: maior bloco de texto (heurística melhorada)
  let maxText = 0;
  let bestElement = $('body');
  
  // Procurar em divs, sections, articles
  $('div, section, article').each(function() {
    const $el = $(this);
    const text = $el.text().trim();
    const textLength = text.length;
    
    // Ignorar elementos muito pequenos ou que parecem ser navegação
    if (textLength < 100) return;
    
    // Ignorar se contém muitos links (provavelmente é menu)
    const linkCount = $el.find('a').length;
    if (linkCount > textLength / 20) return; // Muitos links em relação ao texto
    
    if (textLength > maxText) {
      maxText = textLength;
      bestElement = $el;
    }
  });
  
  return bestElement;
}

/**
 * Extrai headings da página
 */
function extractHeadings($, content) {
  const headings = {
    h1: [],
    h2: [],
    h3: []
  };
  
  content.find('h1, h2, h3').each(function() {
    const tag = this.tagName.toLowerCase();
    const text = $(this).text().trim();
    if (text && headings[tag]) {
      headings[tag].push(text);
    }
  });
  
  return headings;
}

/**
 * Extrai texto principal limpo
 */
function extractText($, content) {
  // Clonar para não modificar original
  const clone = content.clone();
  
  // Remover elementos que não são texto
  clone.find('script, style, noscript, iframe, embed, object, svg, img').remove();
  
  // Preservar parágrafos e headings primeiro
  const paragraphs = [];
  const headings = [];
  
  // Extrair headings
  clone.find('h1, h2, h3, h4, h5, h6').each(function() {
    const text = $(this).text().trim();
    if (text && text.length > 3) {
      headings.push(text);
    }
  });
  
  // Extrair parágrafos
  clone.find('p').each(function() {
    const pText = $(this).text().trim();
    if (pText && pText.length > 20) {
      paragraphs.push(pText);
    }
  });
  
  // Se encontrou parágrafos, usar eles
  if (paragraphs.length > 0) {
    return paragraphs.join('\n\n');
  }
  
  // Fallback: extrair texto completo
  let text = clone.text();
  
  // Limpar: múltiplos espaços, quebras de linha excessivas
  text = text
    .replace(/\s+/g, ' ')
    .replace(/\n\s*\n\s*\n+/g, '\n\n')
    .trim();
  
  return text;
}

/**
 * Extrai conteúdo de uma página HTML
 */
export function extractContent(html, url) {
  const $ = cheerio.load(html);
  
  // Remover elementos de navegação
  removeNavigationElements($);
  
  // Encontrar conteúdo principal
  const content = findMainContent($);
  
  // Extrair dados
  const title = $('title').text().trim() || '';
  const headings = extractHeadings($, content);
  const text = extractText($, content);
  const wordCount = text.split(/\s+/).filter(w => w.length > 0).length;
  
  return {
    title,
    headings,
    text,
    wordCount
  };
}
