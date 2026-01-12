import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import PoliticaPrivacidadeClient from './PoliticaPrivacidadeClient'

export const metadata: Metadata = createMetadata({
  title: 'Política de Privacidade',
  description: 'Política de privacidade da Crafting Solutions. Conheça como coletamos, usamos e protegemos suas informações pessoais.',
  path: '/politica-privacidade',
})

export default function PoliticaPrivacidade() {
  return <PoliticaPrivacidadeClient />
}
