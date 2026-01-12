import Link from 'next/link'

export default function Footer() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/quem-somos', label: 'Quem Somos' },
    { href: '/produtos-servicos', label: 'Produtos & Serviços' },
    { href: '/time', label: 'Time' },
    { href: '/contato', label: 'Contato' },
    { href: '/politica-privacidade', label: 'Política de privacidade' },
  ]

  return (
    <footer className="bg-crafting-chumbo border-t border-crafting-verde/10">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Navegação */}
          <div>
            <h3 className="font-display text-crafting-branco font-light mb-6 text-sm tracking-wide uppercase">Navegação</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-crafting-cinzaAlvo/70 hover:text-crafting-branco transition-colors text-sm font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-crafting-branco font-light mb-6 text-sm tracking-wide uppercase">Contato</h3>
            <ul className="space-y-4 text-crafting-cinzaAlvo/70 text-sm font-light leading-relaxed">
              <li>
                Rua Alexandre Dumas, 1711<br />
                Chácara Santo Antônio<br />
                São Paulo, SP, 04717-911
              </li>
              <li>
                <a href="mailto:contato@craftingsolutions.com.br" className="hover:text-crafting-branco transition-colors">
                  contato@craftingsolutions.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5511982369546" className="hover:text-crafting-branco transition-colors">
                  (11) 98236-9546
                </a>
              </li>
            </ul>
          </div>

          {/* Como chegar */}
          <div>
            <h3 className="font-display text-crafting-branco font-light mb-6 text-sm tracking-wide uppercase">Como chegar</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://waze.com/ul?q=Rua%20Alexandre%20Dumas,%201711,%20Chácara%20Santo%20Antônio,%20São%20Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crafting-cinzaAlvo/70 hover:text-crafting-branco transition-colors text-sm font-light"
              >
                Waze
              </a>
              <a
                href="https://maps.google.com/?q=Rua+Alexandre+Dumas,+1711,+Chácara+Santo+Antônio,+São+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crafting-cinzaAlvo/70 hover:text-crafting-branco transition-colors text-sm font-light"
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-crafting-verde/10 text-center text-crafting-cinzaUrbano/60 text-xs font-light">
          <p>© 2026 Crafting Solutions. Todos os direitos reservados.</p>
          <p className="mt-3">
            Criado por{' '}
            <a
              href="https://tangomarketing.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-crafting-cinzaAlvo/70 hover:text-crafting-branco transition-colors"
            >
              Tango Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
