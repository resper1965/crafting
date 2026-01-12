/**
 * Constantes centralizadas do projeto
 */

export const SITE_CONFIG = {
  name: 'Crafting Solutions',
  description: 'Soluções em Reestruturação, Turnaround e Governança',
  url: 'https://siteedu.vercel.app',
  email: 'contato@craftingsolutions.com.br',
  phone: '(11) 98236-9546',
  address: {
    street: 'Rua Alexandre Dumas, 1711',
    neighborhood: 'Chácara Santo Antônio',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '04717-911',
    full: 'Rua Alexandre Dumas, 1711, Chácara Santo Antônio, São Paulo, SP, 04717-911',
  },
} as const

export const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/produtos-servicos', label: 'Produtos & Serviços' },
  { href: '/time', label: 'Time' },
  { href: '/contato', label: 'Contato' },
] as const

export const SERVICES = [
  {
    title: 'Diagnósticos estratégicos e operacionais',
    description: 'Análise profunda da situação atual da empresa, identificando pontos críticos e oportunidades de melhoria.',
  },
  {
    title: 'Planos de reestruturação',
    description: 'Desenvolvimento de estratégias personalizadas para reestruturação empresarial, focadas em resultados sustentáveis.',
  },
  {
    title: 'Gestão e governança',
    description: 'Implementação de práticas eficientes de gestão e governança corporativa, garantindo transparência e controle.',
  },
  {
    title: 'Soluções de capital',
    description: 'Acesso a fontes de capital e estruturação financeira adequada para viabilizar projetos de reestruturação.',
  },
] as const

export const TEAM_MEMBERS = [
  { name: 'Eduardo Matias', role: 'Sócio Fundador' },
  { name: 'Leonardo Morato', role: 'Sócio' },
] as const
