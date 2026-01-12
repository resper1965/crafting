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
      <section className="relative section-padding bg-crafting-grafite overflow-hidden">
        {/* Gradiente sutil de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-crafting-azul/5 via-transparent to-crafting-verde/5 pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl pt-8">
            <AnimatedText>
              <h1 className="mb-8 font-light tracking-tight leading-[1.1]">
                Soluções em reestruturação, turnaround e governança
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-lg text-crafting-cinzaAlvo/90 mb-8 max-w-2xl leading-relaxed font-light">
                Localizamos oportunidades nas situações de estresse enfrentadas por empresas dos mais variados ramos de atividade.
              </p>
              <p className="text-lg text-crafting-cinzaAlvo/80 mb-12 max-w-2xl leading-relaxed font-light">
                Um time de especialistas em reestruturações complexas com mais de 25 anos de experiência e participação ativa dos sócios em cada projeto.
              </p>
            </AnimatedText>
            <AnimatedText delay={0.4}>
              <Button 
                asChild 
                size="lg" 
                className="bg-crafting-azul hover:bg-crafting-azul/90 text-crafting-branco font-light tracking-wide rounded-sm px-8 py-6 h-auto transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Link href="/contato">Saiba mais</Link>
              </Button>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="section-padding bg-crafting-chumbo relative overflow-hidden">
        {/* Efeito de gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-crafting-grafite/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="max-w-2xl mb-16">
              <h2 className="mb-6 font-light tracking-tight">O que fazemos</h2>
              <p className="text-crafting-cinzaAlvo/80 leading-relaxed font-light">
                Localizamos oportunidades nas situações de estresse enfrentadas por empresas dos mais variados ramos de atividade.
              </p>
              <p className="text-crafting-cinzaAlvo/70 leading-relaxed font-light mt-4">
                Transformamos desafios em oportunidades únicas de investimentos.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedCard delay={0.1}>
              <Card className="group bg-crafting-grafite border-crafting-verde/10 hover:border-crafting-azul/40 transition-all duration-500 rounded-sm hover:shadow-lg hover:shadow-crafting-azul/10">
                <CardHeader className="pb-4">
                  <CardTitle className="text-crafting-branco text-lg font-light tracking-tight group-hover:text-crafting-azul transition-colors duration-300">
                    Diagnósticos estratégicos e operacionais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-crafting-cinzaAlvo/70 leading-relaxed font-light text-sm group-hover:text-crafting-cinzaAlvo/90 transition-colors duration-300">
                    Análise profunda da situação atual da empresa, identificando pontos críticos e oportunidades de melhoria.
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <Card className="group bg-crafting-grafite border-crafting-verde/10 hover:border-crafting-azul/40 transition-all duration-500 rounded-sm hover:shadow-lg hover:shadow-crafting-azul/10">
                <CardHeader className="pb-4">
                  <CardTitle className="text-crafting-branco text-lg font-light tracking-tight group-hover:text-crafting-azul transition-colors duration-300">
                    Planos de reestruturação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-crafting-cinzaAlvo/70 leading-relaxed font-light text-sm group-hover:text-crafting-cinzaAlvo/90 transition-colors duration-300">
                    Desenvolvimento de estratégias personalizadas para reestruturação empresarial, focadas em resultados sustentáveis.
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="group bg-crafting-grafite border-crafting-verde/10 hover:border-crafting-azul/40 transition-all duration-500 rounded-sm hover:shadow-lg hover:shadow-crafting-azul/10">
                <CardHeader className="pb-4">
                  <CardTitle className="text-crafting-branco text-lg font-light tracking-tight group-hover:text-crafting-azul transition-colors duration-300">
                    Gestão e governança
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-crafting-cinzaAlvo/70 leading-relaxed font-light text-sm group-hover:text-crafting-cinzaAlvo/90 transition-colors duration-300">
                    Implementação de práticas eficientes de gestão e governança corporativa, garantindo transparência e controle.
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <Card className="group bg-crafting-grafite border-crafting-verde/10 hover:border-crafting-azul/40 transition-all duration-500 rounded-sm hover:shadow-lg hover:shadow-crafting-azul/10">
                <CardHeader className="pb-4">
                  <CardTitle className="text-crafting-branco text-lg font-light tracking-tight group-hover:text-crafting-azul transition-colors duration-300">
                    Soluções de capital
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-crafting-cinzaAlvo/70 leading-relaxed font-light text-sm group-hover:text-crafting-cinzaAlvo/90 transition-colors duration-300">
                    Acesso a fontes de capital e estruturação financeira adequada para viabilizar projetos de reestruturação.
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Quem somos */}
      <section className="section-padding bg-crafting-grafite relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crafting-azul/5 to-transparent pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="mb-8 font-light tracking-tight">Quem somos</h2>
              <p className="text-crafting-cinzaAlvo/80 mb-6 leading-relaxed font-light">
                Especialistas em soluções estratégicas para empresas em estresse e transformação — preservando valor e destravando crescimento.
              </p>
              <p className="text-crafting-cinzaAlvo/70 mb-12 leading-relaxed font-light">
                Um time de especialistas em reestruturações complexas com mais de 25 anos de experiência e participação ativa dos sócios em cada projeto.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-crafting-verde/30 text-crafting-cinzaAlvo hover:bg-crafting-azul hover:border-crafting-azul hover:text-crafting-branco font-light tracking-wide rounded-sm px-8 py-6 h-auto transition-all duration-300"
                >
                  <Link href="/quem-somos">Saiba mais</Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-crafting-chumbo relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-crafting-azul/10 via-transparent to-crafting-verde/10 pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="mb-6 font-light tracking-tight">Soluções em Reestruturação, Turnaround e Governança</h2>
              <p className="text-crafting-cinzaAlvo/80 mb-8 leading-relaxed font-light">
                Transformamos desafios em oportunidades únicas de investimentos.
              </p>
              <p className="text-crafting-cinzaAlvo/70 mb-12 leading-relaxed font-light">
                Localizamos oportunidades nas situações de estresse enfrentadas por empresas dos mais variados ramos de atividade.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-crafting-azul hover:bg-crafting-azul/90 text-crafting-branco font-light tracking-wide rounded-sm px-8 py-6 h-auto transition-all duration-300 shadow-lg shadow-crafting-azul/20 hover:shadow-xl hover:shadow-crafting-azul/30"
                >
                  <Link href="/contato">Entre em contato</Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
