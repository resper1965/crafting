'use client'

import { AnimatedSection } from '@/components/AnimatedSection'

export default function PoliticaPrivacidadeClient() {
  return (
    <section className="section-padding bg-crafting-grafite relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crafting-azul/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-12 font-light tracking-tight">Política de Privacidade</h1>
            
            <div className="space-y-8 text-crafting-branco/90 leading-relaxed font-light">
              <AnimatedSection delay={0.1}>
                <p>
                  A Crafting Solutions respeita a privacidade dos usuários e está comprometida com a proteção de dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD).
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <h2 className="text-xl text-crafting-branco mb-4 font-light tracking-tight mt-8">Coleta de Informações</h2>
                <p>
                  Coletamos informações fornecidas voluntariamente através de formulários de contato e comunicação direta.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <h2 className="text-xl text-crafting-branco mb-4 font-light tracking-tight mt-8">Uso das Informações</h2>
                <p>
                  Utilizamos as informações coletadas exclusivamente para responder a solicitações, fornecer serviços e melhorar nossa comunicação.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <h2 className="text-xl text-crafting-branco mb-4 font-light tracking-tight mt-8">Proteção de Dados</h2>
                <p>
                  Implementamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.5}>
                <h2 className="text-xl text-crafting-branco mb-4 font-light tracking-tight mt-8">Contato</h2>
                <p>
                  Para questões sobre privacidade, entre em contato através do email: contato@craftingsolutions.com.br
                </p>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
