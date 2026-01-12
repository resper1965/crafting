'use client'

import { AnimatedSection } from '@/components/AnimatedSection'

export default function QuemSomos() {
  return (
    <section className="section-padding bg-crafting-grafite relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crafting-azul/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <h1 className="mb-12 font-light tracking-tight">Quem somos</h1>
            
            <div className="space-y-8">
              <AnimatedSection delay={0.1}>
                <p className="text-crafting-cinzaAlvo/80 leading-relaxed font-light text-lg">
                  Um time de especialistas em reestruturações complexas com mais de 25 anos de experiência e participação ativa dos sócios em cada projeto.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <p className="text-crafting-cinzaAlvo/70 leading-relaxed font-light">
                  Na Crafting Solutions, acreditamos que situações de estresse empresarial podem ser transformadas em oportunidades únicas de investimento. Nossa equipe combina expertise técnica com uma abordagem prática e focada em resultados.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <p className="text-crafting-cinzaAlvo/70 leading-relaxed font-light">
                  Com mais de duas décadas de experiência no mercado, desenvolvemos uma metodologia própria que nos permite identificar rapidamente os pontos críticos e propor soluções efetivas para empresas dos mais variados setores.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <p className="text-crafting-cinzaAlvo/70 leading-relaxed font-light">
                  O diferencial da Crafting Solutions está na participação direta dos sócios em cada projeto, garantindo que cada cliente receba atenção personalizada e estratégias sob medida para suas necessidades específicas.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
