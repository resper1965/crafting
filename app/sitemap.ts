import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://siteedu.vercel.app'
  
  const routes = [
    '',
    '/quem-somos',
    '/produtos-servicos',
    '/time',
    '/contato',
    '/politica-privacidade',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))
}
