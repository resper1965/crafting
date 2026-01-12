import { Metadata } from 'next'

const baseUrl = 'https://siteedu.vercel.app'
const siteName = 'Crafting Solutions'
const defaultDescription = 'Transformamos desafios em oportunidades únicas de investimentos. Especialistas em reestruturações complexas com mais de 25 anos de experiência.'

export function createMetadata({
  title,
  description = defaultDescription,
  path = '',
  image = '/og-image.jpg', // Criar depois se necessário
}: {
  title: string
  description?: string
  path?: string
  image?: string
}): Metadata {
  const url = `${baseUrl}${path}`
  const fullTitle = `${title} - ${siteName}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}
