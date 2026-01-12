'use client'

import { Button } from '@/components/ui/button'
import { MapPin, Mail, Phone } from 'lucide-react'
import { AnimatedSection, AnimatedCard } from '@/components/AnimatedSection'
import { motion } from 'framer-motion'
import MapEmbed from '@/components/MapEmbed'
import ContactForm from '@/components/ContactForm'
import { SITE_CONFIG } from '@/lib/constants'

export default function ContatoClient() {
  return (
    <section className="section-padding bg-crafting-grafite relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-crafting-azul/5 via-transparent to-crafting-verde/5 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <h1 className="mb-16 font-light tracking-tight">Contato</h1>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Formulário de Contato */}
          <AnimatedSection delay={0.1}>
            <div>
              <h2 className="mb-8 text-xl font-light tracking-tight">Envie sua mensagem</h2>
              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Informações de Contato */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-10">
              <div>
                <h2 className="mb-8 text-xl font-light tracking-tight">Entre em contato</h2>
                
                <div className="space-y-8">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="group"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-4 h-4 text-crafting-cinzaAlvo/60 mt-1 stroke-[1.5] group-hover:text-crafting-azul transition-colors" />
                      <h3 className="text-crafting-branco font-light text-sm tracking-wide uppercase">Endereço</h3>
                    </div>
                    <p className="text-crafting-cinzaAlvo/70 font-light leading-relaxed text-sm pl-7">
                      {SITE_CONFIG.address.street}<br />
                      {SITE_CONFIG.address.neighborhood}<br />
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}, {SITE_CONFIG.address.zipCode}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="group"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Mail className="w-4 h-4 text-crafting-cinzaAlvo/60 mt-1 stroke-[1.5] group-hover:text-crafting-azul transition-colors" />
                      <h3 className="text-crafting-branco font-light text-sm tracking-wide uppercase">Email</h3>
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-crafting-cinzaAlvo/70 hover:text-crafting-branco transition-colors font-light text-sm pl-7 block"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="group"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Phone className="w-4 h-4 text-crafting-cinzaAlvo/60 mt-1 stroke-[1.5] group-hover:text-crafting-azul transition-colors" />
                      <h3 className="text-crafting-branco font-light text-sm tracking-wide uppercase">Telefone</h3>
                    </div>
                    <a
                      href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                      className="text-crafting-cinzaAlvo/70 hover:text-crafting-branco transition-colors font-light text-sm pl-7 block"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Mapa e Como chegar - Seção separada */}
        <div className="max-w-4xl mx-auto mt-16">
          <AnimatedSection delay={0.3}>
            <div className="space-y-8">
              <h2 className="text-xl font-light tracking-tight">Como chegar</h2>
              
              {/* Mapa Interativo */}
              <div className="mb-6">
                <MapEmbed 
                  address={SITE_CONFIG.address.full}
                />
              </div>
              
              {/* Links alternativos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-crafting-verde/20 text-crafting-cinzaAlvo hover:bg-crafting-azul hover:border-crafting-azul hover:text-crafting-branco font-light tracking-wide rounded-sm transition-all duration-300"
                  >
                    <a
                      href="https://waze.com/ul?q=Rua%20Alexandre%20Dumas,%201711,%20Chácara%20Santo%20Antônio,%20São%20Paulo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Abrir no Waze
                    </a>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-crafting-verde/20 text-crafting-cinzaAlvo hover:bg-crafting-azul hover:border-crafting-azul hover:text-crafting-branco font-light tracking-wide rounded-sm transition-all duration-300"
                  >
                    <a
                      href="https://maps.google.com/?q=Rua+Alexandre+Dumas,+1711,+Chácara+Santo+Antônio,+São+Paulo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Abrir no Google Maps
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
