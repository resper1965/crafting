'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/quem-somos', label: 'Quem Somos' },
    { href: '/produtos-servicos', label: 'Produtos & Serviços' },
    { href: '/time', label: 'Time' },
    { href: '/contato', label: 'Contato' },
  ]

  return (
    <nav className="bg-crafting-grafite/95 backdrop-blur-md border-b border-crafting-verde/10 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-display text-lg md:text-xl font-medium text-crafting-branco tracking-tight">
            CRAFTING <span className="font-light text-crafting-cinzaAlvo">solutions</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-crafting-cinzaAlvo hover:text-crafting-branco transition-colors text-sm font-light tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-crafting-cinzaAlvo hover:text-crafting-branco transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 stroke-[1.5]" />
            ) : (
              <Menu className="w-5 h-5 stroke-[1.5]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-crafting-verde/10 py-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-crafting-cinzaAlvo hover:text-crafting-branco transition-colors text-sm font-light"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
