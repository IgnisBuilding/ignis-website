import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/sections/PageHero'
import { SolutionsTabs } from '@/components/sections/SolutionsTabs'

export const metadata: Metadata = {
  title: 'Solutions - IGNIS Fire Safety Applications',
  description: 'Discover how IGNIS AI fire detection can be applied across different building types and scenarios.',
}

const useCases = [
  {
    scenario: 'Kitchen Fire Detection',
    icon: 'cooking',
    challenge: 'Traditional smoke detectors often trigger false alarms from cooking.',
    solution: 'IGNIS visual AI distinguishes between cooking smoke and actual fire conditions.',
  },
  {
    scenario: 'Crowded Event Evacuation',
    icon: 'groups',
    challenge: 'Large crowds can create dangerous bottlenecks during evacuation.',
    solution: 'Dynamic routing distributes evacuees across multiple exits based on real-time density.',
  },
  {
    scenario: 'Multi-Building Complex',
    icon: 'domain',
    challenge: 'Fire in one building affects evacuation routes for connected structures.',
    solution: 'System-wide coordination adjusts routes across all buildings simultaneously.',
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

      {/* Use Cases - Storytelling Design */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 py-20">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-accent-green mb-4">Stories of Transformation</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-forest-dark tracking-tight mb-6">Every Fire Has a Story</h2>
          <p className="text-lg text-forest-dark/40 max-w-2xl mx-auto">These scenarios could end in disaster. With IGNIS, they end differently.</p>
        </div>

        <div className="relative">
          {/* Vertical Journey Line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-forest-green/30 to-transparent hidden md:block"></div>

          <div className="space-y-24">
            {useCases.map((useCase, index) => (
              <div key={useCase.scenario} className="relative">
                {/* Timeline Node */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 hidden md:flex">
                  <div className="size-12 rounded-full bg-forest-dark flex items-center justify-center text-cream font-bold text-lg ring-4 ring-cream">
                    {index + 1}
                  </div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  {/* The Challenge - Story Beginning */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2 lg:text-left' : 'lg:text-right'} md:pr-16 lg:pr-0`}>
                    <div className={`${index % 2 === 1 ? '' : 'lg:ml-auto'} max-w-md`}>
                      <div className="mb-6 md:hidden flex items-center gap-4">
                        <div className="size-10 rounded-full bg-forest-dark flex items-center justify-center text-cream font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-forest-dark">{useCase.scenario}</h3>
                      </div>
                      <h3 className="hidden md:block text-2xl font-bold text-forest-dark mb-4">{useCase.scenario}</h3>
                      <div className="bg-cream-dark/50 border-l-4 border-forest-dark/20 p-5 rounded-r-lg mb-4">
                        <p className="text-xs font-bold text-forest-dark/40 uppercase tracking-wider mb-2">The Challenge</p>
                        <p className="text-forest-dark/60 italic">&ldquo;{useCase.challenge}&rdquo;</p>
                      </div>
                    </div>
                  </div>

                  {/* The Solution - Story Resolution */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1 lg:text-right' : 'lg:text-left'} md:pl-16 lg:pl-0`}>
                    <div className={`${index % 2 === 1 ? 'lg:mr-auto lg:ml-0' : ''} max-w-md`}>
                      <div className="bg-forest-green/5 border-l-4 border-accent-green p-5 rounded-r-lg">
                        <p className="text-xs font-bold text-accent-green uppercase tracking-wider mb-2">IGNIS Response</p>
                        <p className="text-forest-dark/70">{useCase.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Journey End */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 bg-forest-dark text-cream px-6 py-3 rounded-full">
              <span className="material-symbols-outlined text-accent-green">verified</span>
              <span className="text-sm font-medium">Every story ends safer with IGNIS</span>
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
