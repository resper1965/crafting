import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-crafting-grafite to-crafting-chumbo">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="mb-6">
              Soluções em reestruturação, turnaround e governança
            </h1>
            <p className="text-xl text-crafting-cinzaAlvo mb-8 max-w-2xl">
              Localizamos oportunidades nas situações de estresse enfrentadas por empresas dos mais variados ramos de atividade.
            </p>
            <Button asChild size="lg" className="bg-crafting-azul hover:bg-crafting-verde text-crafting-branco">
              <Link href="/contato">Saiba mais</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="section-padding bg-crafting-chumbo">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4">O que fazemos</h2>
            <p className="text-lg text-crafting-cinzaAlvo">
              Localizamos oportunidades nas situações de estresse enfrentadas por empresas dos mais variados ramos de atividade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-crafting-grafite border-crafting-verde/20">
              <CardHeader>
                <CardTitle className="text-crafting-azul">Diagnósticos estratégicos e operacionais</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-crafting-cinzaAlvo">
                  Análise profunda da situação atual da empresa, identificando pontos críticos e oportunidades de melhoria.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-crafting-grafite border-crafting-verde/20">
              <CardHeader>
                <CardTitle className="text-crafting-azul">Planos de reestruturação</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-crafting-cinzaAlvo">
                  Desenvolvimento de estratégias personalizadas para reestruturação empresarial, focadas em resultados sustentáveis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-crafting-grafite border-crafting-verde/20">
              <CardHeader>
                <CardTitle className="text-crafting-azul">Gestão e governança</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-crafting-cinzaAlvo">
                  Implementação de práticas eficientes de gestão e governança corporativa, garantindo transparência e controle.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-crafting-grafite border-crafting-verde/20">
              <CardHeader>
                <CardTitle className="text-crafting-azul">Soluções de capital</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-crafting-cinzaAlvo">
                  Acesso a fontes de capital e estruturação financeira adequada para viabilizar projetos de reestruturação.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-crafting-verde text-crafting-cinzaAlvo hover:bg-crafting-azul hover:text-crafting-branco">
              <Link href="/produtos-servicos">Saiba mais</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quem somos */}
      <section className="section-padding bg-crafting-grafite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Quem somos</h2>
            <p className="text-lg text-crafting-cinzaAlvo mb-8 max-w-2xl mx-auto">
              Um time de especialistas em reestruturações complexas com mais de 25 anos de experiência e participação ativa dos sócios em cada projeto.
            </p>
            <Button asChild size="lg" className="bg-crafting-azul hover:bg-crafting-verde text-crafting-branco">
              <Link href="/quem-somos">Saiba mais</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-crafting-chumbo">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4">Soluções em Reestruturação, Turnaround e Governança</h2>
            <p className="text-xl text-crafting-cinzaAlvo mb-8">
              Transformamos desafios em oportunidades únicas de investimentos.
            </p>
            <Button asChild size="lg" className="bg-crafting-azul hover:bg-crafting-verde text-crafting-branco">
              <Link href="/contato">Entre em contato</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
