import { Metadata } from 'next'
import { TeamGrid } from '@/components/sections/TeamGrid'
import { Timeline } from '@/components/sections/Timeline'
import { StatsSection } from '@/components/sections/StatsSection'
import { PageHero } from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'About IGNIS - Our Mission & Team',
  description: 'Learn about IGNIS, Pakistan\'s first AI-powered fire detection and smart evacuation platform.',
}

const teamMembers = [
  {
    name: 'Mohammad Irtiza',
    role: 'CEO & Co-Founder',
    description: 'Product vision & system architecture',
    image: '/irtiza.jpeg',
  },
  {
    name: 'Ali Raza',
    role: 'CTO & Co-Founder',
    description: 'Technology & platform development',
    image: '/aliraza.jpeg',
  },
  {
    name: 'Ahmed Haque',
    role: 'Lead Engineer',
    description: 'AI systems & integration',
    image: '/ahmed.jpeg',
  },
  {
    name: 'Dr. Farrukh Shahid',
    role: 'Technical Advisor',
    description: 'Strategic guidance & research',
    image: '/Dr_farrukh.jpeg',
  },
]

const timelineEvents = [
  {
    year: '2025',
    title: 'Ideation & Research',
    description: 'Identified the gap in traditional fire safety systems and began developing our AI-powered solution concept.',
    position: 'left' as const,
  },
  {
    year: '2025',
    title: 'Product Development',
    description: 'Built and trained proprietary AI models for real-time fire detection with industry-leading accuracy.',
    position: 'right' as const,
  },
  {
    year: '2026',
    title: 'Platform Launch',
    description: 'Launched complete platform with AI detection, smart evacuation routing, and real-time monitoring dashboard.',
    position: 'left' as const,
  },
  {
    year: '2026',
    title: 'Market Expansion',
    description: 'Partnering with residential complexes, commercial buildings, and institutions across Pakistan.',
    position: 'right' as const,
  },
]

const stats = [
  { value: '99.2%', label: 'Detection Accuracy', icon: 'verified' },
  { value: '<3s', label: 'Response Time', icon: 'timer' },
  { value: '142', label: 'Sensors Supported', icon: 'sensors' },
  { value: '24/7', label: 'Monitoring', icon: 'schedule' },
]

const values = [
  {
    icon: 'shield',
    title: 'Safety First',
    description: 'Every decision we make prioritizes human safety above all else.',
  },
  {
    icon: 'psychology',
    title: 'Innovation',
    description: 'Pushing boundaries with AI to solve real-world emergency challenges.',
  },
  {
    icon: 'handshake',
    title: 'Collaboration',
    description: 'Working together with institutions and researchers to improve safety systems.',
  },
  {
    icon: 'science',
    title: 'Research-Driven',
    description: 'Grounded in academic rigor and evidence-based methodologies.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Building a Safer Tomorrow"
        description="IGNIS is Pakistan's first AI-powered fire detection and intelligent evacuation platform, designed to protect lives when every second matters."
      >
        <p className="text-forest-green font-semibold text-xl mt-4">Detect Fast. Evacuate Smart. Save Lives.</p>
      </PageHero>

      {/* Stats */}
      <StatsSection stats={stats} variant="dark" />

      {/* Mission */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-forest-dark mb-6">Our Mission</h2>
            <p className="text-forest-dark/70 leading-relaxed mb-4">
              Traditional fire safety systems rely on outdated detection methods and static evacuation plans.
              IGNIS changes this paradigm by combining cutting-edge AI with real-time adaptive routing.
            </p>
            <p className="text-forest-dark/70 leading-relaxed">
              We believe that every second counts in an emergency. Our system is designed to detect fire
              hazards earlier, alert occupants faster, and guide them through the safest evacuation routes
              based on real-time conditions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 border border-forest-green/20 hover:border-forest-green/40 transition-colors">
                <div className="size-10 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-forest-green">{value.icon}</span>
                </div>
                <h3 className="font-bold text-forest-dark mb-2">{value.title}</h3>
                <p className="text-sm text-forest-dark/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamGrid
        title="Meet the Team"
        subtitle="A dedicated group of engineers and researchers working to make buildings safer."
        members={teamMembers}
      />

      {/* Timeline */}
      <Timeline
        subtitle="PROJECT TIMELINE"
        title="Our Development Journey"
        events={timelineEvents}
      />

      {/* CTA */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 py-16">
        <div className="bg-forest-dark rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Partner With Us</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            We're building the future of fire safety in Pakistan. Whether you're a property developer,
            building manager, or enterprise looking for advanced safety solutions — let's talk.
          </p>
          <div className="flex justify-center gap-4 text-white/40 text-sm">
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
