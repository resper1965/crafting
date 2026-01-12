'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '@/lib/constants'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = NAV_ITEMS

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-crafting-grafite/98 backdrop-blur-xl border-b border-crafting-verde/20 shadow-lg shadow-crafting-grafite/50' 
          : 'bg-crafting-grafite/95 backdrop-blur-md border-b border-crafting-verde/10'
      }`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="font-display text-lg md:text-xl font-medium text-crafting-branco tracking-tight transition-colors hover:text-crafting-azul">
              CRAFTING <span className="font-light text-crafting-cinzaAlvo">solutions</span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={item.href}
                  className={`relative transition-colors text-sm font-light tracking-wide group ${
                    pathname === item.href
                      ? 'text-crafting-branco'
                      : 'text-crafting-cinzaAlvo hover:text-crafting-branco'
                  }`}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-[1px] bg-crafting-azul transition-all duration-300 ${
                      pathname === item.href
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-crafting-cinzaAlvo hover:text-crafting-branco transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-crafting-azul focus:ring-offset-2 focus:ring-offset-crafting-grafite rounded-sm"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 stroke-[1.5]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 stroke-[1.5]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-crafting-verde/10 py-6 space-y-1 overflow-hidden"
              role="menu"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 transition-colors text-sm font-light ${
                      pathname === item.href
                        ? 'text-crafting-branco font-medium'
                        : 'text-crafting-cinzaAlvo hover:text-crafting-branco'
                    }`}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
