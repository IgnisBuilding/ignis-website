import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/technology', label: 'Technology' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-forest-dark text-white w-full">
      <div className="layout-container">
        <div className="w-full max-w-[1280px] px-6 lg:px-10 py-16 mx-auto">

          {/* Main Footer Content - 3 Column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

            {/* Column 1: Brand */}
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="mb-5">
                <Image
                  src="/ignis_logo.png"
                  alt="IGNIS"
                  width={240}
                  height={78}
                  className="h-[78px] w-auto"
                />
              </Link>
              <p className="text-white/50 text-sm leading-relaxed text-center md:text-left">
                AI-powered fire detection and intelligent evacuation system.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-sm font-semibold text-white mb-5">Quick Links</h4>
              <nav className="flex flex-col items-center md:items-start gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent-green transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: Contact + CTA */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-sm font-semibold text-white mb-5">Get in Touch</h4>
              <a
                href="mailto:ignis.fyp@gmail.com"
                className="text-sm text-white/50 hover:text-accent-green transition-colors mb-2"
              >
                ignis.fyp@gmail.com
              </a>
              <p className="text-sm text-white/50 mb-1">FAST-NUCES Karachi</p>
              <p className="text-xs text-white/30 mb-6">Computer Science • FYP 2025-2026</p>
              <Button href="/contact" variant="primary" size="sm">
                Request Demo
              </Button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              © 2026 IGNIS. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/30">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green"></span>
              Built with passion at FAST-NUCES
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
