'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatedSection, AnimatedCard } from '@/components/AnimatedSection'
import { SERVICES } from '@/lib/constants'

export default function ProdutosServicosClient() {

  return (
    <section className="section-padding bg-crafting-grafite relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-crafting-azul/5 via-transparent to-crafting-verde/5 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-20">
            <Badge variant="outline" className="border-crafting-azul/30 text-crafting-azul bg-crafting-azul/10 font-light px-4 py-1.5 rounded-full mb-6">
              Nossas Soluções
            </Badge>
            <h1 className="mb-8 font-light tracking-tight">Produtos & Serviços</h1>
            <p className="text-lg md:text-xl text-crafting-branco leading-relaxed font-light">
              Transformamos desafios em oportunidades únicas de investimentos.
            </p>
            <Separator className="mt-8 bg-crafting-verde/40" />
          </div>
        </AnimatedSection>

        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-crafting-grafite/50 border-crafting-verde/20">
            <TabsTrigger 
              value="todos" 
              className="data-[state=active]:bg-crafting-azul data-[state=active]:text-crafting-branco font-light"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger 
              value="estrategicos" 
              className="data-[state=active]:bg-crafting-azul data-[state=active]:text-crafting-branco font-light"
            >
              Estratégicos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="todos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.map((service, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <Card className="group relative bg-crafting-chumbo/80 border-crafting-verde/20 hover:border-crafting-azul/50 transition-all duration-500 hover:shadow-2xl hover:shadow-crafting-azul/20 hover:-translate-y-2 backdrop-blur-sm overflow-hidden">
                    {/* Gradiente sutil no hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-crafting-azul/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardHeader className="relative z-10 pb-6">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <CardTitle className="text-crafting-azul group-hover:text-crafting-branco transition-colors duration-300 text-xl md:text-2xl font-light tracking-tight flex-1">
                          {service.title}
                        </CardTitle>
                        <Badge variant="outline" className="border-crafting-azul/20 text-crafting-azul/70 bg-crafting-azul/5 font-light shrink-0">
                          {index + 1}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-crafting-cinzaAlvo/70 group-hover:text-crafting-cinzaAlvo/90 leading-relaxed font-light text-base transition-colors duration-300">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="estrategicos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.filter((_, index) => index < 2).map((service, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <Card className="group relative bg-crafting-chumbo/80 border-crafting-verde/20 hover:border-crafting-azul/50 transition-all duration-500 hover:shadow-2xl hover:shadow-crafting-azul/20 hover:-translate-y-2 backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-crafting-azul/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardHeader className="relative z-10 pb-6">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <CardTitle className="text-crafting-azul group-hover:text-crafting-branco transition-colors duration-300 text-xl md:text-2xl font-light tracking-tight flex-1">
                          {service.title}
                        </CardTitle>
                        <Badge variant="outline" className="border-crafting-azul/20 text-crafting-azul/70 bg-crafting-azul/5 font-light shrink-0">
                          Estratégico
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-crafting-cinzaAlvo/70 group-hover:text-crafting-cinzaAlvo/90 leading-relaxed font-light text-base transition-colors duration-300">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
