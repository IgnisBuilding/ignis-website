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
            Smart Fire Detection <br />
            Meets <span className="text-forest-green">Intelligent</span> <br />
            Evacuation
          </>
        }
        description="An AI-powered fire detection and evacuation system designed to save lives when every second matters."
        primaryCta={{ label: 'Request Demo', href: '/contact' }}
        secondaryCta={{ label: 'View Solutions', href: '/solutions' }}
        imageUrl="/img1.jpeg"
      />
      <FeatureStrip features={features} />
    </>
  )
}
