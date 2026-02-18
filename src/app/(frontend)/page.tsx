import { HeroSection } from '@/components/sections/HeroSection'
import { Button } from '@/components/ui/Button'

const problems = [
  {
    icon: 'warning',
    title: 'Panic & Confusion',
    description: 'People panic during fires and are unfamiliar with building layouts, exit locations, and safe evacuation routes, leading to confusion and deadly delays.',
  },
  {
    icon: 'location_off',
    title: 'No Real-Time Information',
    description: 'Lack of real-time information about fire\'s exact location causes chaotic evacuations where occupants unknowingly move toward danger instead of safety.',
  },
  {
    icon: 'local_fire_department',
    title: 'Blind Rescue Operations',
    description: 'Firefighters arrive without knowing precise fire location or where occupants are trapped, forcing blind searches that risk lives and waste precious time.',
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection
        title={
          <>
            When Fire Strikes, <br />
            <span className="text-forest-green">We Guide You</span> <br />
            To Safety
          </>
        }
        description="AI-powered voice navigation and real-time evacuation guidance that turns panic into action—because knowing the way out saves lives."
        primaryCta={{ label: 'Request Demo', href: '/contact' }}
        secondaryCta={{ label: 'View Solutions', href: '/solutions' }}
        imageUrl="/img1.jpeg"
      />

      {/* Problem Section - with impact stat */}
      <section className="w-full bg-forest-dark py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          {/* Impact stat */}
          <div className="text-center mb-14">
            <p className="text-accent-green text-sm font-semibold uppercase tracking-wider mb-3">The Problem</p>
            <p className="text-lg text-white/60 mb-6"><span className="text-accent-green font-bold">63,200+</span> fire incidents reported across major regions from 2020–2025</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">Why Traditional Systems Fail</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The critical challenge is not just detection — it's effective evacuation and response where panic, unfamiliarity with layouts, and lack of real-time fire data cost lives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="size-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-accent-green text-2xl">{problem.icon}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{problem.title}</h3>
                <p className="text-sm text-white/60">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why IGNIS - Horizontal card layout */}
      <section className="w-full bg-cream-dark py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-accent-green text-sm font-semibold uppercase tracking-wider mb-3">Why IGNIS</p>
            <h2 className="text-3xl font-extrabold text-forest-dark mb-4">Made in Pakistan. Built for Safety.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: 'smart_toy', title: 'AI Fire Detection', description: 'Camera-based detection with anti-spoofing that distinguishes real fires from false alarms in real time.' },
              { icon: 'navigation', title: 'Indoor Navigation', description: 'WiFi-based indoor positioning that tracks occupant locations across multiple floors during emergencies.' },
              { icon: 'record_voice_over', title: 'Voice-Guided Evacuation', description: 'Turn-by-turn voice directions guiding each person to the nearest safe exit, even in zero visibility.' },
              { icon: 'dashboard', title: 'Rescue Dashboard', description: 'Real-time dashboards showing firefighters exact fire location and all occupant positions for targeted rescue.' },
              { icon: 'support_agent', title: 'Local Support', description: 'Built and supported in Pakistan with on-ground teams for deployment, training, and maintenance.' },
              { icon: 'flag', title: 'Made in Pakistan', description: 'Designed for Pakistani buildings, regulations, and infrastructure from the ground up.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-forest-green/10 hover:border-forest-green/30 transition-all hover:shadow-md flex items-start gap-5">
                <div className="size-14 rounded-xl bg-forest-green/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-forest-green text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-forest-dark text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-forest-dark/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 py-16">
        <div className="bg-forest-dark rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Partner With Us</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            We're building the future of fire safety in Pakistan. Whether you're a property developer,
            building manager, or enterprise looking for advanced safety solutions — let's talk.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button href="/contact" variant="primary">Request Demo</Button>
            <Button href="/solutions" variant="outline" className="border-white/20 text-white hover:bg-white/10">View Solutions</Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-white/40 text-sm">
            <span>Karachi, Pakistan</span>
            <span>•</span>
            <span>Nationwide Coverage</span>
            <span>•</span>
            <span>Enterprise Ready</span>
          </div>
        </div>
      </section>
    </>
  )
}
