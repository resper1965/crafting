'use client'

import { AnimatedSection } from '@/components/AnimatedSection'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
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
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <Badge variant="outline" className="border-crafting-azul/30 text-crafting-azul bg-crafting-azul/10 font-light px-4 py-1.5 rounded-full mb-6">
                Nosso Time
              </Badge>
              <h1 className="mb-12 font-light tracking-tight">{content.h1}</h1>
            </div>
            
            <div className="space-y-12">
              <AnimatedSection delay={0.1}>
                <p className="text-xl md:text-2xl text-crafting-cinzaAlvo/80 leading-relaxed font-light">
                  {content.text}
                </p>
              </AnimatedSection>
              
              {TEAM_MEMBERS.length > 0 && (
                <AnimatedSection delay={0.2}>
                  <Separator className="bg-crafting-verde/20" />
                  <div className="space-y-12 mt-12">
                    {TEAM_MEMBERS.map((member, index) => (
                      <div key={member.name} className="group">
                        <div className="flex items-start justify-between gap-6 mb-4">
                          <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl text-crafting-branco mb-3 font-light tracking-tight group-hover:text-crafting-azul transition-colors duration-300">
                              {member.name}
                            </h2>
                            <Badge variant="secondary" className="mt-2">
                              {member.role}
                            </Badge>
                          </div>
                        </div>
                        {index < TEAM_MEMBERS.length - 1 && (
                          <Separator className="mt-8 bg-crafting-verde/10" />
                        )}
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
