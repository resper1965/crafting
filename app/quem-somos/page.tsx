import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import QuemSomosClient from './QuemSomosClient'

export const metadata: Metadata = createMetadata({
  title: 'Quem Somos',
  description: 'Especialistas em soluções estratégicas para empresas em estresse e transformação — preservando valor e destravando crescimento. A CRAFTING SOLUTIONS é uma boutique one-stop-shop de advisory financeiro e estratégico.',
  path: '/quem-somos',
})

export default function QuemSomos() {
  return <QuemSomosClient />
}
