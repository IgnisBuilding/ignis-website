import { Metadata } from 'next'
import { TeamGrid } from '@/components/sections/TeamGrid'
import { Timeline } from '@/components/sections/Timeline'
import { PageHero } from '@/components/sections/PageHero'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About IGNIS - Our Mission & Team',
  description: 'Learn about IGNIS, Pakistan\'s first AI-powered fire detection and smart evacuation platform.',
}

const teamMembers = [
  {
    name: 'Muhammad Irtiza',
    role: 'Co-Founder',
    description: 'Lead full-stack development & system architecture',
    image: '/irtiza.jpeg',
  },
  {
    name: 'Ali Raza',
    role: 'Co-Founder',
    description: 'Platform development & engineering',
    image: '/aliraza.jpeg',
  },
  {
    name: 'Ahmed Haque',
    role: 'Co-Founder',
    description: 'AI & intelligence systems',
    image: '/ahmed.jpeg',
  },
  {
    name: 'Dr. M. Farrukh Shahid',
    role: 'Faculty Supervisor',
    description: 'Research guidance & academic supervision',
    image: '/Dr_farrukh.jpeg',
  },
]

const timelineEvents = [
  {
    year: '2025',
    title: 'IoBM Competition',
    description: 'Competed in IoBM Startup Competition. Validated fire safety problem and refined our solution concept.',
    position: 'left' as const,
  },
  {
    year: '2025',
    title: 'HBL Pasha Awards',
    description: 'Participated in HBL Pasha Awards. Refined pitch and expanded industry network.',
    position: 'right' as const,
  },
  {
    year: '2026',
    title: 'Product Development',
    description: 'Built complete platform with real-time fire detection, dynamic evacuation routing, and rescue team support.',
    position: 'left' as const,
  },
  {
    year: '2026',
    title: 'NIC Karachi & Ignite',
    description: 'Applying to National Incubation Center (NIC Karachi) funded by Ignite, MoITT to scale Pakistan\'s first AI-powered fire safety system.',
    position: 'right' as const,
  },
]

const visionPoints = [
  {
    icon: 'check_circle',
    title: 'Why We Exist',
    description: 'To identify gaps in current fire safety systems and prevent avoidable deaths through intelligent technology.',
  },
  {
    icon: 'visibility',
    title: 'Our Vision',
    description: 'Create the region\'s most advanced AI-powered fire safety ecosystem where detection meets action.',
  },
  {
    icon: 'trending_up',
    title: 'Market Shift',
    description: 'Shifting fire safety from passive alarms to intelligent systems with detection, guidance, and rescue intelligence.',
  },
  {
    icon: 'public',
    title: 'Global Impact',
    description: 'Making intelligent fire safety the standard across South Asia with measurable results and saved lives.',
  },
]

const problems = [
  {
    icon: 'warning',
    title: 'Panic & Confusion',
    description: 'People panic during fires and are unfamiliar with building layouts, exit locations, and safe evacuation routes.',
  },
  {
    icon: 'location_off',
    title: 'No Real-Time Information',
    description: 'Lack of real-time information about fire\'s exact location causes chaotic evacuations where occupants move toward danger.',
  },
  {
    icon: 'local_fire_department',
    title: 'Blind Rescue Operations',
    description: 'Firefighters arrive without knowing precise fire location or where occupants are trapped, forcing blind searches.',
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

      {/* Problem Section */}
      <section className="w-full bg-forest-dark py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-accent-green text-sm font-semibold uppercase tracking-wider mb-3">The Problem</p>
            <h2 className="text-3xl font-extrabold text-white mb-4">Why Traditional Systems Fail</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Fire-related incidents cause significant loss of life and property in Pakistan.
              The critical challenge is not just detection, but effective evacuation and response.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="size-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-accent-green text-2xl">{problem.icon}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{problem.title}</h3>
                <p className="text-sm text-white/60">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 py-16">
        <div className="text-center mb-12">
          <p className="text-accent-green text-sm font-semibold uppercase tracking-wider mb-3">Our Vision</p>
          <h2 className="text-3xl font-extrabold text-forest-dark mb-4">Where Detection Meets Action</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionPoints.map((point) => (
            <div key={point.title} className="bg-white rounded-xl p-6 border border-forest-green/20 hover:border-forest-green/40 transition-colors">
              <div className="size-10 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-forest-green">{point.icon}</span>
              </div>
              <h3 className="font-bold text-forest-dark mb-2">{point.title}</h3>
              <p className="text-sm text-forest-dark/60">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="w-full bg-cream-dark py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-accent-green text-sm font-semibold uppercase tracking-wider mb-3">Why IGNIS</p>
            <h2 className="text-3xl font-extrabold text-forest-dark mb-4">Made in Pakistan. Built for Safety.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: 'smart_toy', label: 'AI Detection' },
              { icon: 'navigation', label: 'Indoor Navigation' },
              { icon: 'record_voice_over', label: 'Voice Guidance' },
              { icon: 'dashboard', label: 'Rescue Dashboard' },
              { icon: 'support_agent', label: 'Local Support' },
              { icon: 'flag', label: 'Made in Pakistan' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-4 text-center border border-forest-green/10">
                <span className="material-symbols-outlined text-forest-green text-2xl mb-2">{item.icon}</span>
                <p className="text-sm font-semibold text-forest-dark">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamGrid
        title="Meet the Team"
        subtitle="A dedicated team of engineers building the future of fire safety in Pakistan."
        members={teamMembers}
      />

      {/* Timeline */}
      <Timeline
        subtitle="OUR JOURNEY"
        title="Traction & Progress"
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
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button href="/contact" variant="primary">Request Demo</Button>
            <Button href="/solutions" variant="outline" className="border-white/20 text-white hover:bg-white/10">View Solutions</Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-white/40 text-sm">
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
