import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import TimeClient from './TimeClient'

export const metadata: Metadata = createMetadata({
  title: 'Time',
  description: 'Um time de especialistas em reestruturações complexas com mais de 25 anos de experiência e participação ativa em diferentes projetos.',
  path: '/time',
})

export default function Time() {
  return <TimeClient />
}
