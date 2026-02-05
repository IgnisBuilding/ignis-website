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
    title: 'Gul Plaza Shopping Mall',
    year: 'Jan 2026',
    location: 'Karachi',
    icon: 'storefront',
    description: 'Fire broke out at 10:15 PM during wedding season when 1,200+ shops were packed with customers. Only 3 of 16 exits were open. Smoke filled the building in seconds—people couldn\'t see their own hands. 70 people were trapped on the roof for an hour.',
    casualties: { deaths: '79+', injured: '100+' },
    lesson: 'Voice navigation could have guided shoppers to the 3 open exits through zero visibility. Indoor positioning would have shown firefighters exactly where 70 people were trapped on the roof.',
  },
  {
    title: 'Islamabad Residential Tower',
    year: 'Mar 2024',
    location: 'Islamabad',
    icon: 'apartment',
    description: 'Fire broke out at 2 AM on the 12th floor while residents slept. Families with elderly and children became disoriented in darkness and smoke. Nobody knew which stairwell was safe or where the fire was located.',
    casualties: { deaths: '4', injured: '15+' },
    lesson: 'Real-time fire location and voice-guided evacuation would have directed sleeping families to the safe stairwell, preventing deaths from smoke inhalation in wrong corridors.',
  },
  {
    title: 'RJ Shopping Mall',
    year: 'Nov 2023',
    location: 'Karachi',
    icon: 'local_mall',
    description: 'Fire engulfed the four-story mall in Gulshan-e-Iqbal. No proper ventilation caused thick smoke to spread rapidly. People jumped from windows and climbed drainage pipes. All 11 deaths were from suffocation—not burns.',
    casualties: { deaths: '11', injured: '30+' },
    lesson: 'Dynamic evacuation routing could have guided people away from smoke-filled corridors to clear exits, preventing the suffocation deaths.',
  },
  {
    title: 'Faisalabad Textile Mill',
    year: 'Dec 2023',
    location: 'Faisalabad',
    icon: 'factory',
    description: 'Evening shift fire trapped workers on upper floors when emergency exits were found locked. Workers tied cloth together to climb down from windows. The basic alarm provided no information about fire location or safe routes.',
    casualties: { deaths: '8', injured: '30+' },
    lesson: 'Indoor positioning would have tracked all workers. Voice navigation could have directed them to alternate exits before smoke made corridors impassable.',
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

      {/* Real Incidents - Center Timeline Design */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 py-20">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent-green mb-4">Why This Matters</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-forest-dark tracking-tight mb-6">Every Fire Has a Story</h2>
          <p className="text-lg text-forest-dark/50 max-w-2xl mx-auto">Real tragedies from Pakistan that could have ended differently with intelligent fire safety.</p>
        </div>

        <div className="relative">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-forest-green/30 hidden lg:block"></div>

          <div className="space-y-16 lg:space-y-24">
            {realIncidents.map((incident, index) => (
              <div key={incident.title} className="relative">
                {/* Center Timeline Node */}
                <div className="absolute left-1/2 -translate-x-1/2 top-8 hidden lg:flex flex-col items-center z-10">
                  <div className="size-14 rounded-full bg-forest-green flex items-center justify-center shadow-lg ring-4 ring-white">
                    <span className="material-symbols-outlined text-white text-2xl">{incident.icon}</span>
                  </div>
                  <div className="mt-2 px-3 py-1 bg-forest-green rounded-full">
                    <span className="text-xs font-bold text-white">{incident.year}</span>
                  </div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20`}>
                  {/* Left Side - Incident Details */}
                  <div className={`${index % 2 === 0 ? 'lg:pr-16' : 'lg:order-2 lg:pl-16'}`}>
                    <div className={`${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                      {/* Mobile Header */}
                      <div className="flex items-center gap-3 mb-4 lg:hidden">
                        <div className="size-12 rounded-full bg-forest-green flex items-center justify-center">
                          <span className="material-symbols-outlined text-white">{incident.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-forest-dark">{incident.title}</h3>
                          <p className="text-sm text-forest-dark/50">{incident.location} • {incident.year}</p>
                        </div>
                      </div>

                      {/* Desktop Header */}
                      <div className="hidden lg:block mb-4">
                        <h3 className="text-2xl font-bold text-forest-dark">{incident.title}</h3>
                        <p className="text-sm text-forest-green font-medium">{incident.location}</p>
                      </div>

                      {/* Incident Card */}
                      <div className="bg-white rounded-2xl p-6 border border-forest-green/15 shadow-sm">
                        <p className="text-forest-dark/60 text-sm leading-relaxed mb-5">{incident.description}</p>
                        <div className={`flex gap-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                          <div className={`text-center px-4 py-2 bg-forest-dark/5 rounded-lg ${index % 2 === 0 ? '' : ''}`}>
                            <p className="text-2xl font-bold text-forest-dark">{incident.casualties.deaths}</p>
                            <p className="text-[10px] text-forest-dark/50 uppercase tracking-wider">Deaths</p>
                          </div>
                          <div className="text-center px-4 py-2 bg-forest-dark/5 rounded-lg">
                            <p className="text-2xl font-bold text-forest-dark">{incident.casualties.injured}</p>
                            <p className="text-[10px] text-forest-dark/50 uppercase tracking-wider">Injured</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - IGNIS Solution */}
                  <div className={`${index % 2 === 0 ? 'lg:pl-16' : 'lg:order-1 lg:pr-16 lg:text-right'}`}>
                    <div className={`lg:pt-12`}>
                      <div className={`bg-forest-green/5 rounded-2xl p-6 border-l-4 lg:border-l-0 ${index % 2 === 0 ? 'lg:border-l-4' : 'lg:border-r-4'} border-forest-green`}>
                        <div className={`flex gap-3 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                          <span className="material-symbols-outlined text-forest-green text-xl flex-shrink-0">lightbulb</span>
                          <div>
                            <p className="text-xs font-semibold text-forest-green uppercase tracking-wider mb-2">With IGNIS</p>
                            <p className="text-forest-dark/70 text-sm leading-relaxed">{incident.lesson}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-20 text-center">
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
