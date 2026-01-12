import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import HomeClient from './HomeClient'

export const metadata: Metadata = createMetadata({
  title: 'Soluções em Reestruturação, Turnaround e Governança',
  description: 'Localizamos oportunidades nas situações de estresse enfrentadas por empresas dos mais variados ramos de atividade. Um time de especialistas em reestruturações complexas com mais de 25 anos de experiência.',
  path: '/',
})

export default function Home() {
  return <HomeClient />
}
