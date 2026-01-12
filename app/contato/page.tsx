import { Button } from '@/components/ui/button'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Contato() {
  return (
    <section className="section-padding bg-crafting-grafite">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-16 font-light tracking-tight">Contato</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Informações de Contato */}
            <div className="space-y-10">
              <div>
                <h2 className="mb-8 text-xl font-light tracking-tight">Entre em contato</h2>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-4 h-4 text-crafting-cinzaAlvo/60 mt-1 stroke-[1.5]" />
                      <h3 className="text-crafting-branco font-light text-sm tracking-wide uppercase">Endereço</h3>
                    </div>
                    <p className="text-crafting-cinzaAlvo/70 font-light leading-relaxed text-sm pl-7">
                      Rua Alexandre Dumas, 1711<br />
                      Chácara Santo Antônio<br />
                      São Paulo, SP, 04717-911
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <Mail className="w-4 h-4 text-crafting-cinzaAlvo/60 mt-1 stroke-[1.5]" />
                      <h3 className="text-crafting-branco font-light text-sm tracking-wide uppercase">Email</h3>
                    </div>
                    <a
                      href="mailto:contato@craftingsolutions.com.br"
                      className="text-crafting-cinzaAlvo/70 hover:text-crafting-branco transition-colors font-light text-sm pl-7 block"
                    >
                      contato@craftingsolutions.com.br
                    </a>
                  </div>
                  
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <Phone className="w-4 h-4 text-crafting-cinzaAlvo/60 mt-1 stroke-[1.5]" />
                      <h3 className="text-crafting-branco font-light text-sm tracking-wide uppercase">Telefone</h3>
                    </div>
                    <a
                      href="tel:+5511982369546"
                      className="text-crafting-cinzaAlvo/70 hover:text-crafting-branco transition-colors font-light text-sm pl-7 block"
                    >
                      (11) 98236-9546
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Como chegar */}
            <div>
              <h2 className="mb-8 text-xl font-light tracking-tight">Como chegar</h2>
              
              <div className="space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-crafting-verde/20 text-crafting-cinzaAlvo hover:bg-crafting-azul hover:border-crafting-azul hover:text-crafting-branco font-light tracking-wide rounded-sm"
                >
                  <a
                    href="https://waze.com/ul?q=Rua%20Alexandre%20Dumas,%201711,%20Chácara%20Santo%20Antônio,%20São%20Paulo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir no Waze
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-crafting-verde/20 text-crafting-cinzaAlvo hover:bg-crafting-azul hover:border-crafting-azul hover:text-crafting-branco font-light tracking-wide rounded-sm"
                >
                  <a
                    href="https://maps.google.com/?q=Rua+Alexandre+Dumas,+1711,+Chácara+Santo+Antônio,+São+Paulo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir no Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
