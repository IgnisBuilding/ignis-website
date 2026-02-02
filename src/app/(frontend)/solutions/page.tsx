import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Solutions - IGNIS Fire Safety Applications',
  description: 'Discover how IGNIS AI fire detection can be applied across different building types and scenarios.',
}

const solutions = [
  {
    icon: 'apartment',
    title: 'Commercial Buildings',
    description: 'Office complexes, shopping centers, and business facilities with high occupancy.',
    features: ['Multi-floor evacuation routing', 'Elevator integration', 'Crowd density analysis'],
  },
  {
    icon: 'school',
    title: 'Educational Institutions',
    description: 'Schools, universities, and research facilities requiring special safety protocols.',
    features: ['Classroom-specific alerts', 'Assembly point coordination', 'Special needs support'],
  },
  {
    icon: 'local_hospital',
    title: 'Healthcare Facilities',
    description: 'Hospitals and clinics with critical patients and sensitive equipment.',
    features: ['Patient mobility awareness', 'Medical equipment protection', 'Staff coordination'],
  },
  {
    icon: 'factory',
    title: 'Industrial Sites',
    description: 'Manufacturing plants and warehouses with hazardous materials.',
    features: ['Hazmat zone mapping', 'Equipment shutdown protocols', 'Worker tracking'],
  },
]

const benefits = [
  {
    icon: 'speed',
    title: 'Faster Response',
    value: '60%',
    description: 'Reduction in detection-to-evacuation time compared to traditional systems.',
  },
  {
    icon: 'group',
    title: 'Safer Evacuations',
    value: '40%',
    description: 'Improvement in evacuation efficiency through dynamic routing.',
  },
  {
    icon: 'savings',
    title: 'Cost Effective',
    value: '30%',
    description: 'Lower operational costs through predictive maintenance.',
  },
  {
    icon: 'eco',
    title: 'False Alarm Reduction',
    value: '90%',
    description: 'Fewer unnecessary evacuations through AI verification.',
  },
]

const useCases = [
  {
    scenario: 'Kitchen Fire Detection',
    challenge: 'Traditional smoke detectors often trigger false alarms from cooking.',
    solution: 'IGNIS visual AI distinguishes between cooking smoke and actual fire conditions.',
  },
  {
    scenario: 'Crowded Event Evacuation',
    challenge: 'Large crowds can create dangerous bottlenecks during evacuation.',
    solution: 'Dynamic routing distributes evacuees across multiple exits based on real-time density.',
  },
  {
    scenario: 'Multi-Building Complex',
    challenge: 'Fire in one building affects evacuation routes for connected structures.',
    solution: 'System-wide coordination adjusts routes across all buildings simultaneously.',
  },
]

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        badge={{ icon: 'lightbulb', text: 'Applications' }}
        title="Solutions for Every Environment"
        description="IGNIS adapts to different building types and scenarios, providing intelligent fire detection and evacuation guidance tailored to specific needs."
      />

      {/* Solutions Grid */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group bg-white rounded-2xl p-8 border border-forest-dark/[0.06] transition-all duration-300 hover:border-forest-green/20 hover:shadow-[0_8px_40px_-12px_rgba(26,60,52,0.15)]"
            >
              {/* Icon */}
              <div className="size-12 rounded-xl bg-forest-dark/[0.03] flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-forest-green text-2xl">{solution.icon}</span>
              </div>

              <h3 className="font-bold text-xl text-forest-dark mb-2">{solution.title}</h3>
              <p className="text-forest-dark/50 text-[15px] leading-relaxed mb-5">{solution.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {solution.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-forest-dark/[0.03] text-forest-dark/70 text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full bg-forest-dark py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <h2 className="text-2xl font-bold text-white mb-12 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="size-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-accent-green text-2xl">{benefit.icon}</span>
                </div>
                <p className="text-4xl font-extrabold text-accent-green mb-2">{benefit.value}</p>
                <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/60">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 py-16">
        <h2 className="text-3xl font-extrabold text-forest-dark mb-8">Real-World Scenarios</h2>
        <div className="space-y-6">
          {useCases.map((useCase, index) => (
            <div key={useCase.scenario} className="bg-white rounded-xl p-6 border border-forest-green/5">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="size-12 rounded-full bg-forest-green text-white flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-bold text-forest-dark mb-2">{useCase.scenario}</h3>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-forest-dark/40 uppercase mb-1">Challenge</p>
                    <p className="text-sm text-forest-dark/70">{useCase.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-accent-green uppercase mb-1">IGNIS Solution</p>
                    <p className="text-sm text-forest-dark/70">{useCase.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 pb-16">
        <div className="bg-cream-dark rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl font-bold text-forest-dark mb-4">Ready to See IGNIS in Action?</h2>
          <p className="text-forest-dark/70 max-w-xl mx-auto mb-6">
            Schedule a demo to see how IGNIS can be customized for your specific
            building type and safety requirements.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact" variant="primary">Request Demo</Button>
            <Button href="/technology" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>
    </>
  )
}
