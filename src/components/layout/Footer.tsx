import Link from 'next/link'
import Image from 'next/image'

const platformLinks = [
  { href: '/technology', label: 'Intelligence Core' },
  { href: '/architecture', label: 'Sensor Mesh' },
  { href: '/solutions', label: 'Integrations' },
  { href: '/architecture', label: 'System Health' },
]

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/about#team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

const legalLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
]

export function Footer() {
  return (
    <footer className="bg-forest-dark text-white border-t border-white/5 w-full">
      <div className="layout-container">
        <div className="w-full max-w-[1280px] px-6 lg:px-10 py-16 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
            {/* Brand Column */}
            <div className="flex flex-col gap-6">
              <Link href="/" className="flex items-center">
                <Image
                  src="/ignis_logo.png"
                  alt="IGNIS"
                  width={200}
                  height={65}
                  className="h-14 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Detect Fast. Evacuate Smart. Save Lives.
              </p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-white/40 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">dataset</span>
                </a>
                <a href="#" className="text-white/40 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">public</span>
                </a>
                <a href="#" className="text-white/40 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">hub</span>
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent-green mb-6">Platform</h4>
              <ul className="flex flex-col gap-3 text-sm text-white/70">
                {platformLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent-green mb-6">Company</h4>
              <ul className="flex flex-col gap-3 text-sm text-white/70">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent-green mb-6">Legal</h4>
              <ul className="flex flex-col gap-3 text-sm text-white/70">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © 2025 IGNIS – Final Year Project (FAST-NUCES). All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs text-white/40">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
                All Systems Operational
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
