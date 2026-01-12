'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SITE_CONFIG, NAV_ITEMS } from '@/lib/constants'

export default function Footer() {
  const navItems = [...NAV_ITEMS, { href: '/politica-privacidade', label: 'Política de privacidade' }]

  return (
    <footer className="bg-crafting-chumbo border-t border-crafting-verde/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-crafting-grafite/30 via-transparent to-transparent pointer-events-none" />
      
      <div className="container-custom section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
        >
          {/* Navegação */}
          <div>
            <h3 className="font-display text-crafting-branco font-light mb-6 text-sm tracking-wide uppercase">Navegação</h3>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="group relative text-crafting-branco/90 hover:text-crafting-branco transition-colors text-sm font-light inline-block"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-crafting-azul transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-crafting-branco font-light mb-6 text-sm tracking-wide uppercase">Contato</h3>
            <ul className="space-y-4 text-crafting-branco/90 text-sm font-light leading-relaxed">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {SITE_CONFIG.address.street}<br />
                {SITE_CONFIG.address.neighborhood}<br />
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}, {SITE_CONFIG.address.zipCode}
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-crafting-branco transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="hover:text-crafting-branco transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </motion.li>
            </ul>
          </div>

          {/* Como chegar */}
          <div>
            <h3 className="font-display text-crafting-branco font-light mb-6 text-sm tracking-wide uppercase">Como chegar</h3>
            <div className="flex flex-col space-y-3">
              <motion.a
                href={`https://waze.com/ul?q=${encodeURIComponent(SITE_CONFIG.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-crafting-cinzaAlvo/70 hover:text-crafting-branco transition-colors text-sm font-light group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="inline-block">Waze</span>
                <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </motion.a>
              <motion.a
                href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-crafting-cinzaAlvo/70 hover:text-crafting-branco transition-colors text-sm font-light group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="inline-block">Google Maps</span>
                <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-crafting-verde/30 text-center text-crafting-branco/80 text-xs font-light"
        >
          <p>© 2026 Crafting Solutions. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}
