'use client'

import { AnimatedSection } from '@/components/AnimatedSection'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

// Conteúdo extraído do site antigo
const content = {
  h1: 'Quem Somos',
  h2: ['Diferenciais'],
  paragraphs: [
    'Especialistas em soluções estratégicas para empresas em estresse e transformação — preservando valor e destravando crescimento.',
    'A CRAFTING SOLUTIONS é uma boutique one-stop-shop de advisory financeiro e estratégico com soluções de capital, que busca oportunidade em bons ativos que estão enfrentando desafios estruturais. Nosso objetivo é a preservação das empresas e maximização dos retornos.',
    'Identificamos e desenvolvemos soluções em cenários de estresse e transformação, atuando junto a empresas de diferentes setores para preservar valor e impulsionar novos caminhos de crescimento, sempre alinhando acionistas, credores e investidores.',
    'Combinamos experiência prática, visão multidisciplinar e recursos próprios para construir soluções sólidas. Nossos diferenciais asseguram consistência em cada etapa e alinhamento integral com os objetivos de clientes e investidores.'
  ],
  diferenciais: [
    {
      title: 'Experiência Prática',
      description: 'Mais de 25 anos de experiência em reestruturações complexas e participação ativa dos sócios em cada projeto.'
    },
    {
      title: 'Visão Multidisciplinar',
      description: 'Abordagem integrada que combina expertise financeira, estratégica e operacional para soluções completas.'
    },
    {
      title: 'Recursos Próprios',
      description: 'Capacidade de investimento próprio, permitindo agilidade e alinhamento de interesses com clientes e investidores.'
    },
    {
      title: 'One-Stop-Shop',
      description: 'Soluções completas de advisory financeiro e estratégico, desde diagnóstico até implementação e governança.'
    }
  ]
}

export default function QuemSomosClient() {
  return (
    <section className="section-padding bg-crafting-grafite relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crafting-azul/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <Badge variant="outline" className="border-crafting-azul/30 text-crafting-azul bg-crafting-azul/10 font-light px-4 py-1.5 rounded-full mb-6">
                Nossa História
              </Badge>
              <h1 className="mb-12 font-light tracking-tight">{content.h1}</h1>
            </div>
            
            <div className="space-y-12">
              {content.paragraphs.map((paragraph, index) => (
                <AnimatedSection key={index} delay={(index + 1) * 0.1}>
                  {index > 0 && <Separator className="mb-8 bg-crafting-verde/10" />}
                  <p className={`leading-relaxed font-light ${
                    index === 0 
                      ? 'text-crafting-branco text-xl md:text-2xl' 
                      : 'text-crafting-branco/95 text-lg'
                  }`}>
                    {paragraph}
                  </p>
                </AnimatedSection>
              ))}
              
              {content.h2.includes('Diferenciais') && (
                <AnimatedSection delay={0.5}>
                  <Separator className="mb-12 bg-crafting-verde/30" />
                  <div className="mb-8">
                    <Badge variant="outline" className="border-crafting-azul/30 text-crafting-azul bg-crafting-azul/10 font-light px-4 py-1.5 rounded-full mb-6">
                      Diferenciais
                    </Badge>
                    <h2 className="text-3xl md:text-4xl text-crafting-branco mb-6 font-light tracking-tight">Nossos Diferenciais</h2>
                    <p className="text-crafting-branco/95 leading-relaxed font-light text-lg mb-8">
                      Nossos diferenciais asseguram consistência em cada etapa e alinhamento integral com os objetivos de clientes e investidores.
                    </p>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {content.diferenciais.map((diferencial, index) => (
                      <AccordionItem 
                        key={diferencial.title}
                        value={`item-${index}`}
                        className="border-crafting-verde/40 bg-crafting-grafite/60 rounded-xl px-6 py-2 data-[state=open]:bg-crafting-grafite/90 transition-colors"
                      >
                        <AccordionTrigger className="text-crafting-branco font-light text-lg hover:no-underline hover:text-crafting-azul transition-colors">
                          {diferencial.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-crafting-branco/90 leading-relaxed font-light pt-2">
                          {diferencial.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AnimatedSection>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
