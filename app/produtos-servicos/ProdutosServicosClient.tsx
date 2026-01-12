'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedSection, AnimatedCard } from '@/components/AnimatedSection'
import { SERVICES } from '@/lib/constants'

export default function ProdutosServicosClient() {

  return (
    <section className="section-padding bg-crafting-grafite relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-crafting-azul/5 via-transparent to-crafting-verde/5 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto mb-16">
            <h1 className="mb-8 font-light tracking-tight">Produtos & Serviços</h1>
            <p className="text-crafting-cinzaAlvo/80 leading-relaxed font-light">
              Transformamos desafios em oportunidades únicas de investimentos.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <Card className="group bg-crafting-chumbo border-crafting-verde/10 hover:border-crafting-azul/40 transition-all duration-500 rounded-sm hover:shadow-lg hover:shadow-crafting-azul/10">
                <CardHeader className="pb-4">
                  <CardTitle className="text-crafting-azul group-hover:text-crafting-branco transition-colors duration-300 text-lg font-light tracking-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-crafting-cinzaAlvo/70 group-hover:text-crafting-cinzaAlvo/90 leading-relaxed font-light text-sm transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
