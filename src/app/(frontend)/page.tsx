import { HeroSection } from '@/components/sections/HeroSection'
import { FeatureStrip } from '@/components/sections/FeatureStrip'

const features = [
  {
    icon: 'sensors',
    title: 'Predictive Detection',
    description: 'Detects threats before escalation.',
  },
  {
    icon: 'hub',
    title: 'Smart Routing',
    description: 'Real-time evacuation guidance.',
  },
  {
    icon: 'analytics',
    title: 'Emergency Insights',
    description: 'Data for responders & authorities.',
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
      <FeatureStrip features={features} />
    </>
  )
}
