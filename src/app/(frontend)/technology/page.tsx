import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Technology - IGNIS AI Fire Detection',
  description: 'Explore the advanced AI technology behind IGNIS fire detection and evacuation system.',
}

const coreCapabilities = [
  {
    icon: 'visibility',
    title: 'Multi-Sensor Fusion',
    description: 'Combines visual, thermal, and environmental data for comprehensive threat detection.',
  },
  {
    icon: 'psychology',
    title: 'Neural Network Analysis',
    description: 'Deep learning models trained on extensive fire imagery for accurate classification.',
  },
  {
    icon: 'speed',
    title: 'Real-Time Processing',
    description: 'Edge computing enables sub-second detection and immediate response triggering.',
  },
  {
    icon: 'route',
    title: 'Dynamic Pathfinding',
    description: 'Graph-based algorithms calculate optimal evacuation routes in real-time.',
  },
]

const techStack = [
  { name: 'TensorFlow', category: 'AI/ML', description: 'Deep learning framework for fire detection models' },
  { name: 'OpenCV', category: 'Vision', description: 'Computer vision for image processing' },
  { name: 'Python', category: 'Backend', description: 'Core system logic and AI integration' },
  { name: 'React', category: 'Frontend', description: 'Real-time monitoring dashboard' },
  { name: 'MQTT', category: 'IoT', description: 'Sensor communication protocol' },
  { name: 'PostgreSQL', category: 'Database', description: 'Event logging and analytics storage' },
]

const performanceMetrics = [
  { metric: '99.2%', label: 'Detection Accuracy' },
  { metric: '<3s', label: 'Response Time' },
  { metric: '0.1%', label: 'False Positive Rate' },
  { metric: '24/7', label: 'Monitoring Uptime' },
]

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        title="Technology That Saves Lives"
        description="IGNIS combines state-of-the-art machine learning with real-time data processing to detect fire hazards faster and guide evacuations smarter than ever before."
      />

      {/* Core Capabilities */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 pb-16">
        <h2 className="text-3xl font-extrabold text-forest-dark mb-8">Core Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreCapabilities.map((cap) => (
            <Card key={cap.title} variant="elevated" className="hover:shadow-lg transition-shadow border-forest-green/20">
              <CardContent className="flex gap-4">
                <div className="size-12 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-forest-green">{cap.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-forest-dark mb-2">{cap.title}</h3>
                  <p className="text-sm text-forest-dark/60">{cap.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="w-full bg-forest-dark py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Performance Metrics</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-4xl font-extrabold text-accent-green mb-2">{item.metric}</p>
                <p className="text-sm text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 py-16">
        <h2 className="text-3xl font-extrabold text-forest-dark mb-8">How It Works</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="relative">
            <div className="absolute top-0 left-6 w-0.5 h-full bg-forest-green/20 lg:hidden"></div>
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-full bg-forest-green text-white flex items-center justify-center font-bold flex-shrink-0 z-10">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg text-forest-dark mb-2">Continuous Monitoring</h3>
                <p className="text-sm text-forest-dark/60">
                  Sensors continuously capture visual, thermal, and environmental data from
                  throughout the building.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-6 w-0.5 h-full bg-forest-green/20 lg:hidden"></div>
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-full bg-forest-green text-white flex items-center justify-center font-bold flex-shrink-0 z-10">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg text-forest-dark mb-2">AI Analysis</h3>
                <p className="text-sm text-forest-dark/60">
                  Neural networks process data in real-time, identifying potential fire
                  hazards with 99.2% accuracy.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-full bg-forest-green text-white flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-lg text-forest-dark mb-2">Smart Response</h3>
              <p className="text-sm text-forest-dark/60">
                Upon detection, the system triggers alerts and calculates optimal
                evacuation routes based on current conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 pb-16">
        <h2 className="text-3xl font-extrabold text-forest-dark mb-8">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((tech) => (
            <div key={tech.name} className="bg-white rounded-xl p-4 border border-forest-green/20 flex items-center gap-4 hover:border-forest-green/40 transition-colors">
              <div className="size-10 rounded-lg bg-cream flex items-center justify-center">
                <span className="text-sm font-bold text-forest-green">{tech.category.slice(0, 2).toUpperCase()}</span>
              </div>
              <div>
                <h3 className="font-bold text-forest-dark">{tech.name}</h3>
                <p className="text-xs text-forest-dark/60">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 pb-16">
        <div className="bg-cream-dark rounded-3xl p-8 lg:p-12 text-center border border-forest-green/20">
          <h2 className="text-2xl font-bold text-forest-dark mb-4">Want to Learn More?</h2>
          <p className="text-forest-dark/70 max-w-xl mx-auto mb-6">
            Explore our solutions or get in touch to discuss how IGNIS
            can protect your home or business.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/solutions" variant="primary">View Solutions</Button>
            <Button href="/contact" variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  )
}
