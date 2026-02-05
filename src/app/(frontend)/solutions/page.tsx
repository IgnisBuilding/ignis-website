import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/sections/PageHero'
import { SolutionsTabs } from '@/components/sections/SolutionsTabs'

export const metadata: Metadata = {
  title: 'Solutions - IGNIS Fire Safety Applications',
  description: 'Discover how IGNIS AI fire detection can be applied across different building types and scenarios.',
}

const realIncidents = [
  {
    title: 'Baldia Town Factory Fire',
    location: 'Karachi, 2012',
    icon: 'factory',
    description: 'A fire broke out in Ali Enterprises garment factory. Workers were trapped inside with locked exits and no evacuation guidance.',
    casualties: { deaths: '260+', injured: '55+' },
    lesson: 'With real-time occupant tracking and voice-guided evacuation, workers could have been directed to safety before exits were blocked.',
  },
  {
    title: 'Gul Plaza Fire',
    location: 'Karachi, 2023',
    icon: 'apartment',
    description: 'Fire engulfed a multi-story commercial building. People were trapped on upper floors with no information about safe escape routes.',
    casualties: { deaths: '3', injured: '15+' },
    lesson: 'Indoor positioning and dynamic routing could have guided occupants away from fire spread to the nearest safe exits.',
  },
  {
    title: 'Punjab College Fire',
    location: 'Lahore, 2019',
    icon: 'school',
    description: 'Fire broke out in a college building during class hours. Students panicked and rushed toward blocked exits.',
    casualties: { deaths: '0', injured: '12+' },
    lesson: 'Voice navigation could have calmly directed students to alternate exits, preventing panic and injuries.',
  },
]

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title="Solutions for Every Environment"
        description="IGNIS adapts to different building types and scenarios, providing intelligent fire detection and evacuation guidance tailored to specific needs."
      />

      {/* Solutions Tabs */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 pb-20">
        <SolutionsTabs />
      </section>

      {/* Real Incidents - Timeline Design */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 py-20">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent-green mb-4">Why This Matters</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-forest-dark tracking-tight mb-6">Every Fire Has a Story</h2>
          <p className="text-lg text-forest-dark/50 max-w-2xl mx-auto">Real tragedies from Pakistan that could have ended differently with intelligent fire safety.</p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-forest-green/20 via-forest-green/40 to-forest-green/20 hidden md:block"></div>

          <div className="space-y-16">
            {realIncidents.map((incident, index) => (
              <div key={incident.title} className="relative">
                {/* Timeline Node */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 hidden md:flex">
                  <div className="size-12 rounded-full bg-forest-green flex items-center justify-center ring-4 ring-cream shadow-lg">
                    <span className="material-symbols-outlined text-white">{incident.icon}</span>
                  </div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ${index % 2 === 1 ? '' : ''}`}>
                  {/* Left Side - Incident Details */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:text-right'} md:pr-16 lg:pr-0`}>
                    <div className={`${index % 2 === 1 ? '' : 'lg:ml-auto'} max-w-md`}>
                      {/* Mobile Icon */}
                      <div className="mb-4 md:hidden flex items-center gap-3">
                        <div className="size-10 rounded-full bg-forest-green flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-lg">{incident.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-forest-dark">{incident.title}</h3>
                          <p className="text-sm text-forest-dark/50">{incident.location}</p>
                        </div>
                      </div>

                      {/* Desktop Title */}
                      <div className="hidden md:block mb-4">
                        <h3 className="text-2xl font-bold text-forest-dark">{incident.title}</h3>
                        <p className="text-sm text-forest-green font-medium">{incident.location}</p>
                      </div>

                      {/* What Happened */}
                      <div className="bg-cream rounded-xl p-5 border border-forest-green/10">
                        <p className="text-forest-dark/70 text-sm leading-relaxed mb-4">{incident.description}</p>
                        <div className="flex gap-6 pt-4 border-t border-forest-green/10">
                          <div>
                            <p className="text-2xl font-bold text-forest-dark">{incident.casualties.deaths}</p>
                            <p className="text-xs text-forest-dark/50">Lives Lost</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-forest-dark">{incident.casualties.injured}</p>
                            <p className="text-xs text-forest-dark/50">Injured</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - How IGNIS Could Help */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''} md:pl-16 lg:pl-0`}>
                    <div className={`${index % 2 === 1 ? 'lg:mr-auto' : ''} max-w-md`}>
                      <div className="bg-forest-green/5 rounded-xl p-5 border-l-4 border-forest-green">
                        <p className="text-xs font-semibold text-forest-green uppercase tracking-wider mb-2">How IGNIS Could Help</p>
                        <p className="text-forest-dark/70 text-sm leading-relaxed">{incident.lesson}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-forest-green text-white px-6 py-3 rounded-full shadow-lg">
              <span className="material-symbols-outlined">shield</span>
              <span className="text-sm font-medium">Building a safer Pakistan with intelligent fire safety</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 pb-16">
        <div className="bg-cream-dark rounded-3xl p-8 lg:p-12 text-center border border-forest-green/20">
          <h2 className="text-2xl font-bold text-forest-dark mb-4">Ready to See IGNIS in Action?</h2>
          <p className="text-forest-dark/70 max-w-xl mx-auto mb-6">
            Schedule a demo to see how IGNIS can be customized for your specific
            building type and safety requirements.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact" variant="primary">Request Demo</Button>
            <Button href="/about" variant="outline">About Us</Button>
          </div>
        </div>
      </section>
    </>
  )
}
