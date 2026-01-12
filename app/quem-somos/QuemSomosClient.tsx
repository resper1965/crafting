'use client'

import { AnimatedSection } from '@/components/AnimatedSection'

// Conteúdo extraído do site antigo
const content = {
  h1: 'Quem Somos',
  h2: ['Diferenciais'],
  paragraphs: [
    'Especialistas em soluções estratégicas para empresas em estresse e transformação — preservando valor e destravando crescimento.',
    'A CRAFTING SOLUTIONS é uma boutique one-stop-shop de advisory financeiro e estratégico com soluções de capital, que busca oportunidade em bons ativos que estão enfrentando desafios estruturais. Nosso objetivo é a preservação das empresas e maximização dos retornos.',
    'Identificamos e desenvolvemos soluções em cenários de estresse e transformação, atuando junto a empresas de diferentes setores para preservar valor e impulsionar novos caminhos de crescimento, sempre alinhando acionistas, credores e investidores.',
    'Combinamos experiência prática, visão multidisciplinar e recursos próprios para construir soluções sólidas. Nossos diferenciais asseguram consistência em cada etapa e alinhamento integral com os objetivos de clientes e investidores.'
  ]
}

export default function QuemSomosClient() {
  return (
    <section className="section-padding bg-crafting-grafite relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crafting-azul/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <h1 className="mb-12 font-light tracking-tight">{content.h1}</h1>
            
            <div className="space-y-10">
              {content.paragraphs.map((paragraph, index) => (
                <AnimatedSection key={index} delay={(index + 1) * 0.1}>
                  <p className={`leading-relaxed font-light ${
                    index === 0 
                      ? 'text-crafting-cinzaAlvo/80 text-lg' 
                      : 'text-crafting-cinzaAlvo/70'
                  }`}>
                    {paragraph}
                  </p>
                </AnimatedSection>
              ))}
              
              {content.h2.includes('Diferenciais') && (
                <AnimatedSection delay={0.5}>
                  <h2 className="text-2xl text-crafting-branco mb-6 font-light tracking-tight">Diferenciais</h2>
                  <p className="text-crafting-cinzaAlvo/70 leading-relaxed font-light">
                    Nossos diferenciais asseguram consistência em cada etapa e alinhamento integral com os objetivos de clientes e investidores.
                  </p>
                </AnimatedSection>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
