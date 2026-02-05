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

      {/* Real Incidents Section */}
      <section className="w-full bg-forest-dark py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-accent-green mb-4">Why This Matters</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">Every Fire Has a Story</h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">Real tragedies from Pakistan that could have ended differently with intelligent fire safety.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {realIncidents.map((incident) => (
              <div key={incident.title} className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-white text-2xl">{incident.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{incident.title}</h3>
                      <p className="text-sm text-white/50">{incident.location}</p>
                    </div>
                  </div>
                </div>

                {/* What Happened */}
                <div className="p-6 border-b border-white/10">
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">What Happened</p>
                  <p className="text-white/70 text-sm leading-relaxed">{incident.description}</p>
                </div>

                {/* Casualties */}
                <div className="p-6 border-b border-white/10 bg-white/5">
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Human Cost</p>
                  <div className="flex gap-6">
                    <div>
                      <p className="text-2xl font-bold text-white">{incident.casualties.deaths}</p>
                      <p className="text-xs text-white/50">Lives Lost</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{incident.casualties.injured}</p>
                      <p className="text-xs text-white/50">Injured</p>
                    </div>
                  </div>
                </div>

                {/* How IGNIS Could Help */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-accent-green uppercase tracking-wider mb-2">How IGNIS Could Help</p>
                  <p className="text-white/60 text-sm leading-relaxed">{incident.lesson}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-16 text-center">
            <p className="text-white/40 text-sm max-w-xl mx-auto">
              These tragedies highlight the urgent need for intelligent fire safety systems that go beyond basic alarms—systems that detect, guide, and save lives.
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
