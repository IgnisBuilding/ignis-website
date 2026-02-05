'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  // { href: '/technology', label: 'Technology' }, // Hidden - protect IP
  // { href: '/architecture', label: 'Architecture' }, // Hidden - technical details not for public
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b border-forest-green/5">
      <div className="layout-container">
        <div className="flex w-full max-w-[1280px] items-center justify-between px-6 py-3 lg:px-10 mx-auto h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/ignis_logo.png"
              alt="IGNIS"
              width={280}
              height={90}
              className="h-[90px] w-auto -my-6"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-forest-green font-semibold'
                      : 'text-forest-dark/80 hover:text-forest-green'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-forest-green rounded-full"></span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button href="/contact" variant="primary" className="hidden sm:flex">
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-forest-green/5 px-6 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors py-2 ${
                      isActive
                        ? 'text-forest-green font-semibold'
                        : 'text-forest-dark/80 hover:text-forest-green'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
