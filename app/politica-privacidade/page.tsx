'use client'

import { AnimatedSection } from '@/components/AnimatedSection'

export default function PoliticaPrivacidade() {
  return (
    <section className="section-padding bg-crafting-grafite relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crafting-azul/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <h1 className="mb-12 font-light tracking-tight">Política de Privacidade</h1>
            
            <div className="space-y-10">
              <AnimatedSection delay={0.1}>
                <p className="text-crafting-cinzaAlvo/80 leading-relaxed font-light text-lg">
                  A Crafting Solutions está comprometida com a proteção da privacidade e dos dados pessoais de seus clientes e visitantes do site.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div>
                  <h2 className="text-xl text-crafting-branco mb-4 font-light tracking-tight">Coleta de Informações</h2>
                  <p className="text-crafting-cinzaAlvo/70 leading-relaxed font-light">
                    Coletamos informações que você nos fornece diretamente, como quando preenche formulários de contato ou se comunica conosco por email ou telefone.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <div>
                  <h2 className="text-xl text-crafting-branco mb-4 font-light tracking-tight">Uso das Informações</h2>
                  <p className="text-crafting-cinzaAlvo/70 leading-relaxed font-light">
                    Utilizamos as informações coletadas para responder suas solicitações, fornecer nossos serviços e melhorar nossa comunicação com você.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <div>
                  <h2 className="text-xl text-crafting-branco mb-4 font-light tracking-tight">Proteção dos Dados</h2>
                  <p className="text-crafting-cinzaAlvo/70 leading-relaxed font-light">
                    Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.5}>
                <div>
                  <h2 className="text-xl text-crafting-branco mb-4 font-light tracking-tight">Contato</h2>
                  <p className="text-crafting-cinzaAlvo/70 leading-relaxed font-light">
                    Para questões sobre esta política de privacidade, entre em contato conosco através do email{' '}
                    <a href="mailto:contato@craftingsolutions.com.br" className="text-crafting-cinzaAlvo hover:text-crafting-branco transition-colors">
                      contato@craftingsolutions.com.br
                    </a>
                    {' '}ou pelo telefone (11) 98236-9546.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
