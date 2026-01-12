import { Button } from '@/components/ui/button'

export default function Contato() {
  return (
    <section className="section-padding bg-crafting-grafite">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8">Contato</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <h2 className="mb-6 text-2xl">Entre em contato</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-crafting-azul mb-2 font-medium">Endereço</h3>
                  <p className="text-crafting-cinzaAlvo">
                    Rua Alexandre Dumas, 1711<br />
                    Chácara Santo Antônio<br />
                    São Paulo, SP, 04717-911
                  </p>
                </div>
                
                <div>
                  <h3 className="text-crafting-azul mb-2 font-medium">Email</h3>
                  <a
                    href="mailto:contato@craftingsolutions.com.br"
                    className="text-crafting-cinzaAlvo hover:text-crafting-branco transition-colors"
                  >
                    contato@craftingsolutions.com.br
                  </a>
                </div>
                
                <div>
                  <h3 className="text-crafting-azul mb-2 font-medium">Telefone</h3>
                  <a
                    href="tel:+5511982369546"
                    className="text-crafting-cinzaAlvo hover:text-crafting-branco transition-colors"
                  >
                    (11) 98236-9546
                  </a>
                </div>
              </div>
            </div>

            {/* Como chegar */}
            <div>
              <h2 className="mb-6 text-2xl">Como chegar</h2>
              
              <div className="space-y-4">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-crafting-verde text-crafting-cinzaAlvo hover:bg-crafting-azul hover:text-crafting-branco"
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
                  className="w-full border-crafting-verde text-crafting-cinzaAlvo hover:bg-crafting-azul hover:text-crafting-branco"
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
