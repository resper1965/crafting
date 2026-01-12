import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import ContatoClient from './ContatoClient'

export const metadata: Metadata = createMetadata({
  title: 'Contato',
  description: 'Entre em contato com a Crafting Solutions. Rua Alexandre Dumas, 1711, Chácara Santo Antônio, São Paulo. Email: contato@craftingsolutions.com.br | Telefone: (11) 98236-9546',
  path: '/contato',
})

export default function Contato() {
  return <ContatoClient />
}
