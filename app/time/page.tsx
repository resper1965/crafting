'use client'

import { AnimatedSection } from '@/components/AnimatedSection'

export default function Time() {
  return (
    <section className="section-padding bg-crafting-grafite relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crafting-azul/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <h1 className="mb-12 font-light tracking-tight">Time</h1>
            
            <div className="space-y-8">
              <AnimatedSection delay={0.1}>
                <p className="text-crafting-cinzaAlvo/80 leading-relaxed font-light text-lg">
                  Nossa equipe é composta por profissionais altamente qualificados e experientes, com formação sólida e histórico comprovado em reestruturações empresariais complexas.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <p className="text-crafting-cinzaAlvo/70 leading-relaxed font-light">
                  Os sócios da Crafting Solutions participam ativamente de cada projeto, garantindo que o conhecimento acumulado ao longo de mais de 25 anos de experiência seja aplicado diretamente nas soluções desenvolvidas para nossos clientes.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <p className="text-crafting-cinzaAlvo/70 leading-relaxed font-light">
                  Combinamos expertise em diferentes áreas - estratégia, operações, finanças, direito empresarial e gestão - para oferecer uma visão 360 graus dos desafios enfrentados pelas empresas.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <p className="text-crafting-cinzaAlvo/70 leading-relaxed font-light">
                  O comprometimento e a dedicação de nosso time são fundamentais para o sucesso dos projetos. Trabalhamos em parceria com nossos clientes, sempre com transparência, ética e foco em resultados.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
