'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedSection, AnimatedCard } from '@/components/AnimatedSection'
import { AnimatedText } from '@/components/AnimatedText'
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'

export default function HomeClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-padding bg-crafting-grafite overflow-hidden">
        {/* Gradientes sofisticados */}
        <div className="absolute inset-0 bg-gradient-to-br from-crafting-azul/10 via-transparent to-crafting-verde/10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-crafting-azul/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-crafting-verde/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <AnimatedText>
              <h1 className="mb-10 font-light tracking-tight leading-[1.05]">
                Soluções em reestruturação, turnaround e governança
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-xl md:text-2xl text-crafting-cinzaAlvo/90 mb-6 max-w-3xl leading-relaxed font-light">
                Localizamos oportunidades nas situações de estresse enfrentadas por empresas dos mais variados ramos de atividade.
              </p>
              <p className="text-lg md:text-xl text-crafting-cinzaAlvo/80 mb-16 max-w-3xl leading-relaxed font-light">
                Um time de especialistas em reestruturações complexas com mais de 25 anos de experiência e participação ativa dos sócios em cada projeto.
              </p>
            </AnimatedText>
            <AnimatedText delay={0.4}>
              <Button 
                asChild 
                size="lg"
                className="text-base md:text-lg px-10 py-7"
              >
                <Link href="/contato">Saiba mais</Link>
              </Button>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="section-padding bg-crafting-chumbo relative overflow-hidden">
        {/* Efeitos de gradiente modernos */}
        <div className="absolute inset-0 bg-gradient-to-t from-crafting-grafite/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-crafting-azul/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mb-20">
              <h2 className="mb-8 font-light tracking-tight">O que fazemos</h2>
              <p className="text-lg md:text-xl text-crafting-cinzaAlvo/80 leading-relaxed font-light mb-4">
                Localizamos oportunidades nas situações de estresse enfrentadas por empresas dos mais variados ramos de atividade.
              </p>
              <p className="text-base md:text-lg text-crafting-cinzaAlvo/70 leading-relaxed font-light">
                Transformamos desafios em oportunidades únicas de investimentos.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <AnimatedCard key={service.title} delay={(index + 1) * 0.1}>
                <Card className="group relative bg-crafting-grafite/80 border-crafting-verde/20 hover:border-crafting-azul/50 transition-all duration-500 hover:shadow-2xl hover:shadow-crafting-azul/20 hover:-translate-y-2 backdrop-blur-sm overflow-hidden">
                  {/* Gradiente sutil no hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-crafting-azul/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10 pb-6">
                    <CardTitle className="text-crafting-branco text-xl md:text-2xl font-light tracking-tight group-hover:text-crafting-azul transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-crafting-cinzaAlvo/70 leading-relaxed font-light text-base group-hover:text-crafting-cinzaAlvo/90 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quem somos */}
      <section className="section-padding bg-crafting-grafite relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crafting-azul/8 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crafting-azul/3 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-12 font-light tracking-tight">Quem somos</h2>
              <p className="text-xl md:text-2xl text-crafting-cinzaAlvo/80 mb-8 leading-relaxed font-light">
                Especialistas em soluções estratégicas para empresas em estresse e transformação — preservando valor e destravando crescimento.
              </p>
              <p className="text-lg md:text-xl text-crafting-cinzaAlvo/70 mb-16 leading-relaxed font-light">
                Um time de especialistas em reestruturações complexas com mais de 25 anos de experiência e participação ativa dos sócios em cada projeto.
              </p>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="text-base md:text-lg px-10 py-7"
              >
                <Link href="/quem-somos">Saiba mais</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-crafting-chumbo relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-crafting-azul/15 via-transparent to-crafting-verde/15 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-crafting-azul/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-crafting-verde/8 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-10 font-light tracking-tight">Soluções em Reestruturação, Turnaround e Governança</h2>
              <p className="text-xl md:text-2xl text-crafting-cinzaAlvo/80 mb-8 leading-relaxed font-light">
                Transformamos desafios em oportunidades únicas de investimentos.
              </p>
              <p className="text-lg md:text-xl text-crafting-cinzaAlvo/70 mb-16 leading-relaxed font-light">
                Localizamos oportunidades nas situações de estresse enfrentadas por empresas dos mais variados ramos de atividade.
              </p>
              <Button 
                asChild 
                size="lg"
                className="text-base md:text-lg px-10 py-7"
              >
                <Link href="/contato">Entre em contato</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
