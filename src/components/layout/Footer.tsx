import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '/solutions', label: 'Solutions' },
  // { href: '/technology', label: 'Technology' }, // Hidden - protect IP
  // { href: '/architecture', label: 'Architecture' }, // Hidden - technical details not for public
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
              <Link href="/" className="-mt-8">
                <Image
                  src="/ignis_logo.png"
                  alt="IGNIS"
                  width={280}
                  height={91}
                  className="h-[100px] w-auto"
                />
              </Link>
              <p className="text-white/80 text-sm leading-relaxed text-center md:text-left mb-6">
                AI-powered fire detection and intelligent evacuation system designed to save lives.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full">
                  <span className="material-symbols-outlined text-accent-green text-sm">verified</span>
                  <span className="text-xs text-white/80">99.2% Accuracy</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full">
                  <span className="material-symbols-outlined text-accent-green text-sm">speed</span>
                  <span className="text-xs text-white/80">&lt;3s Response</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-sm font-semibold text-white mb-5">Quick Links</h4>
              <nav className="flex flex-col items-center md:items-start gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/80 hover:text-accent-green transition-colors"
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
                href="mailto:contact.ignis.team@gmail.com"
                className="text-sm text-white hover:text-accent-green transition-colors mb-2"
              >
                contact.ignis.team@gmail.com
              </a>
              <p className="text-sm text-white/80 mb-1">Karachi, Pakistan</p>
              <p className="text-xs text-white/70 mb-6">Smart Fire Safety Solutions</p>
              <Button href="/contact" variant="primary" size="sm">
                Request Demo
              </Button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-14 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/70">
              © 2026 IGNIS. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green"></span>
              Protecting lives with AI
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
