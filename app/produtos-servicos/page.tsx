import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import ProdutosServicosClient from './ProdutosServicosClient'

export const metadata: Metadata = createMetadata({
  title: 'Produtos & Serviços',
  description: 'Transformamos desafios em oportunidades únicas de investimentos. Diagnósticos estratégicos, planos de reestruturação, gestão e governança, e soluções de capital.',
  path: '/produtos-servicos',
})

export default function ProdutosServicos() {
  return <ProdutosServicosClient />
}
