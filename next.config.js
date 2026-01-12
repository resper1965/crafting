/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Otimizações para produção/Vercel
  compress: true,
  poweredByHeader: false,
  // Configuração de imagens (quando houver)
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
