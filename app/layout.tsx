import type { Metadata } from 'next'
import { Roboto, Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap', // Otimização de performance
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap', // Otimização de performance
})

export const metadata: Metadata = {
  title: 'Crafting Solutions - Soluções em Reestruturação, Turnaround e Governança',
  description: 'Transformamos desafios em oportunidades únicas de investimentos. Especialistas em reestruturações complexas com mais de 25 anos de experiência.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${montserrat.variable} font-sans antialiased dark scroll-smooth`}>
        {/* Skip to content link - Acessibilidade */}
        <a href="#main-content" className="skip-to-content">
          Pular para o conteúdo principal
        </a>
        <Navigation />
        <main id="main-content" className="min-h-screen" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
