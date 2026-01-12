import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-crafting-grafite">
        <div className="container-custom">
          <div className="max-w-3xl pt-8">
            <h1 className="mb-8 font-light tracking-tight leading-[1.1]">
              Soluções em reestruturação, turnaround e governança
            </h1>
            <p className="text-lg text-crafting-cinzaAlvo/90 mb-12 max-w-2xl leading-relaxed font-light">
              Localizamos oportunidades nas situações de estresse enfrentadas por empresas dos mais variados ramos de atividade.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-crafting-azul hover:bg-crafting-azul/90 text-crafting-branco font-light tracking-wide rounded-sm px-8 py-6 h-auto"
            >
              <Link href="/contato">Saiba mais</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="section-padding bg-crafting-chumbo">
        <div className="container-custom">
          <div className="max-w-2xl mb-16">
            <h2 className="mb-6 font-light tracking-tight">O que fazemos</h2>
            <p className="text-crafting-cinzaAlvo/80 leading-relaxed font-light">
              Localizamos oportunidades nas situações de estresse enfrentadas por empresas dos mais variados ramos de atividade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-crafting-grafite border-crafting-verde/10 hover:border-crafting-verde/20 transition-colors rounded-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-crafting-branco text-lg font-light tracking-tight">
                  Diagnósticos estratégicos e operacionais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-crafting-cinzaAlvo/70 leading-relaxed font-light text-sm">
                  Análise profunda da situação atual da empresa, identificando pontos críticos e oportunidades de melhoria.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-crafting-grafite border-crafting-verde/10 hover:border-crafting-verde/20 transition-colors rounded-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-crafting-branco text-lg font-light tracking-tight">
                  Planos de reestruturação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-crafting-cinzaAlvo/70 leading-relaxed font-light text-sm">
                  Desenvolvimento de estratégias personalizadas para reestruturação empresarial, focadas em resultados sustentáveis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-crafting-grafite border-crafting-verde/10 hover:border-crafting-verde/20 transition-colors rounded-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-crafting-branco text-lg font-light tracking-tight">
                  Gestão e governança
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-crafting-cinzaAlvo/70 leading-relaxed font-light text-sm">
                  Implementação de práticas eficientes de gestão e governança corporativa, garantindo transparência e controle.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-crafting-grafite border-crafting-verde/10 hover:border-crafting-verde/20 transition-colors rounded-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-crafting-branco text-lg font-light tracking-tight">
                  Soluções de capital
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-crafting-cinzaAlvo/70 leading-relaxed font-light text-sm">
                  Acesso a fontes de capital e estruturação financeira adequada para viabilizar projetos de reestruturação.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quem somos */}
      <section className="section-padding bg-crafting-grafite">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-8 font-light tracking-tight">Quem somos</h2>
            <p className="text-crafting-cinzaAlvo/80 mb-12 leading-relaxed font-light">
              Um time de especialistas em reestruturações complexas com mais de 25 anos de experiência e participação ativa dos sócios em cada projeto.
            </p>
            <Button 
              asChild 
              variant="outline" 
              className="border-crafting-verde/30 text-crafting-cinzaAlvo hover:bg-crafting-azul hover:border-crafting-azul hover:text-crafting-branco font-light tracking-wide rounded-sm px-8 py-6 h-auto"
            >
              <Link href="/quem-somos">Saiba mais</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-crafting-chumbo">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6 font-light tracking-tight">Soluções em Reestruturação, Turnaround e Governança</h2>
            <p className="text-crafting-cinzaAlvo/80 mb-12 leading-relaxed font-light">
              Transformamos desafios em oportunidades únicas de investimentos.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-crafting-azul hover:bg-crafting-azul/90 text-crafting-branco font-light tracking-wide rounded-sm px-8 py-6 h-auto"
            >
              <Link href="/contato">Entre em contato</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
