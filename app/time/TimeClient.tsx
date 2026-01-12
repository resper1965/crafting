'use client'

import { AnimatedSection } from '@/components/AnimatedSection'

// Conteúdo extraído do site antigo
const content = {
  h1: 'Time',
  h2: ['Eduardo Matias', 'Leonardo Morato'],
  text: 'Um time de especialistas em reestruturações complexas com mais de 25 anos de experiência e participação ativa em diferentes projetos.'
}

export default function TimeClient() {
  return (
    <section className="section-padding bg-crafting-grafite relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crafting-azul/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <h1 className="mb-12 font-light tracking-tight">{content.h1}</h1>
            
            <div className="space-y-10">
              <AnimatedSection delay={0.1}>
                <p className="text-crafting-cinzaAlvo/80 leading-relaxed font-light text-lg">
                  {content.text}
                </p>
              </AnimatedSection>
              
              {content.h2.length > 0 && (
                <AnimatedSection delay={0.2}>
                  <div className="space-y-8 mt-12">
                    {content.h2.map((member, index) => (
                      <div key={index} className="border-t border-crafting-verde/10 pt-8">
                        <h2 className="text-2xl text-crafting-branco mb-4 font-light tracking-tight">
                          {member}
                        </h2>
                        <p className="text-crafting-cinzaAlvo/70 leading-relaxed font-light">
                          {/* Informações adicionais dos membros podem ser adicionadas aqui quando disponíveis */}
                        </p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
