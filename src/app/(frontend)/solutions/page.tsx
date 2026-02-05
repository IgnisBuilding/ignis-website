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
    title: 'Gul Plaza Fire',
    year: '2023',
    location: 'Karachi',
    icon: 'apartment',
    description: 'Fire engulfed a multi-story commercial building. People were trapped on upper floors with no information about safe escape routes.',
    casualties: { deaths: '3', injured: '15+' },
    lesson: 'Indoor positioning and dynamic routing could have guided occupants away from fire spread to the nearest safe exits.',
  },
  {
    title: 'Punjab College Fire',
    year: '2019',
    location: 'Lahore',
    icon: 'school',
    description: 'Fire broke out in a college building during class hours. Students panicked and rushed toward blocked exits.',
    casualties: { deaths: '0', injured: '12+' },
    lesson: 'Voice navigation could have calmly directed students to alternate exits, preventing panic and injuries.',
  },
  {
    title: 'Baldia Town Factory Fire',
    year: '2012',
    location: 'Karachi',
    icon: 'factory',
    description: 'A fire broke out in Ali Enterprises garment factory. Workers were trapped inside with locked exits and no evacuation guidance.',
    casualties: { deaths: '260+', injured: '55+' },
    lesson: 'With real-time occupant tracking and voice-guided evacuation, workers could have been directed to safety before exits were blocked.',
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
          <div className="absolute left-[23px] lg:left-8 top-0 bottom-0 w-px bg-forest-green/20 hidden md:block"></div>

          <div className="space-y-12">
            {realIncidents.map((incident) => (
              <div key={incident.title} className="relative md:pl-20">
                {/* Timeline Node - Year */}
                <div className="absolute left-0 top-0 hidden md:flex flex-col items-center">
                  <div className="size-12 rounded-full bg-forest-green flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-white">{incident.icon}</span>
                  </div>
                  <span className="text-xs font-bold text-forest-green mt-2">{incident.year}</span>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl border border-forest-green/15 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6 lg:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        {/* Mobile Icon */}
                        <div className="size-10 rounded-full bg-forest-green flex items-center justify-center md:hidden">
                          <span className="material-symbols-outlined text-white text-lg">{incident.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-forest-dark">{incident.title}</h3>
                          <p className="text-sm text-forest-dark/50">{incident.location} <span className="md:hidden">• {incident.year}</span></p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-center px-4 py-2 bg-forest-dark/5 rounded-lg">
                          <p className="text-xl font-bold text-forest-dark">{incident.casualties.deaths}</p>
                          <p className="text-[10px] text-forest-dark/50 uppercase tracking-wider">Deaths</p>
                        </div>
                        <div className="text-center px-4 py-2 bg-forest-dark/5 rounded-lg">
                          <p className="text-xl font-bold text-forest-dark">{incident.casualties.injured}</p>
                          <p className="text-[10px] text-forest-dark/50 uppercase tracking-wider">Injured</p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-forest-dark/60 text-sm leading-relaxed mb-5">{incident.description}</p>

                    {/* IGNIS Solution */}
                    <div className="flex gap-3 p-4 bg-forest-green/5 rounded-xl">
                      <span className="material-symbols-outlined text-forest-green text-xl flex-shrink-0">lightbulb</span>
                      <div>
                        <p className="text-xs font-semibold text-forest-green uppercase tracking-wider mb-1">With IGNIS</p>
                        <p className="text-forest-dark/70 text-sm">{incident.lesson}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-16 text-center">
            <p className="text-forest-dark/40 text-sm max-w-lg mx-auto">
              These tragedies remind us why intelligent fire safety matters. Detection alone isn&apos;t enough—we need systems that guide people to safety.
            </p>
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
