'use client'

import { AnimatedSection } from '@/components/AnimatedSection'
import { TEAM_MEMBERS } from '@/lib/constants'

const content = {
  h1: 'Time',
  text: 'Um time de especialistas em reestruturações complexas com mais de 25 anos de experiência e participação ativa em diferentes projetos.',
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
              
              {TEAM_MEMBERS.length > 0 && (
                <AnimatedSection delay={0.2}>
                  <div className="space-y-8 mt-12">
                    {TEAM_MEMBERS.map((member, index) => (
                      <div key={member.name} className="border-t border-crafting-verde/10 pt-8">
                        <h2 className="text-2xl text-crafting-branco mb-4 font-light tracking-tight">
                          {member.name}
                        </h2>
                        <p className="text-crafting-cinzaAlvo/70 leading-relaxed font-light">
                          {member.role}
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
