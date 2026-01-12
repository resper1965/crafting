import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ProdutosServicos() {
  const services = [
    {
      title: 'Diagnósticos estratégicos e operacionais',
      description: 'Realizamos análises profundas e abrangentes da situação atual da empresa, identificando pontos críticos, oportunidades de melhoria e riscos potenciais. Nossos diagnósticos cobrem aspectos estratégicos, operacionais, financeiros e organizacionais.',
    },
    {
      title: 'Planos de reestruturação',
      description: 'Desenvolvemos estratégias personalizadas e detalhadas para reestruturação empresarial, focadas em resultados sustentáveis e de longo prazo. Nossos planos são práticos, viáveis e adaptados à realidade de cada organização.',
    },
    {
      title: 'Gestão e governança',
      description: 'Implementamos práticas eficientes de gestão e governança corporativa, garantindo transparência, controle e alinhamento entre os diferentes níveis organizacionais. Trabalhamos na estruturação de processos, políticas e controles internos.',
    },
    {
      title: 'Soluções de capital',
      description: 'Facilitamos o acesso a fontes de capital e estruturamos soluções financeiras adequadas para viabilizar projetos de reestruturação. Conectamos empresas com investidores e instituições financeiras, sempre buscando as melhores condições.',
    },
  ]

  return (
    <section className="section-padding bg-crafting-grafite">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="mb-6">Produtos & Serviços</h1>
          <p className="text-lg text-crafting-cinzaAlvo">
            Localizamos oportunidades nas situações de estresse enfrentadas por empresas dos mais variados ramos de atividade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-crafting-chumbo border-crafting-verde/20 hover:border-crafting-azul/40 transition-colors"
            >
              <CardHeader>
                <CardTitle className="text-crafting-azul">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-crafting-cinzaAlvo">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
