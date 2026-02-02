import { Metadata } from 'next'
import { TeamGrid } from '@/components/sections/TeamGrid'
import { Timeline } from '@/components/sections/Timeline'
import { StatsSection } from '@/components/sections/StatsSection'
import { PageHero } from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'About IGNIS - Our Mission & Team',
  description: 'Learn about IGNIS, an AI-powered fire detection system developed as a Final Year Project at FAST-NUCES Karachi.',
}

const teamMembers = [
  {
    name: 'Mohammad Irtiza',
    role: 'Project Lead',
    description: 'Full-stack development & system architecture',
  },
  {
    name: 'Ali Raza',
    role: 'AI/ML Engineer',
    description: 'Fire detection algorithms & model training',
  },
  {
    name: 'Ahmed Haque',
    role: 'Systems Engineer',
    description: 'Hardware integration & sensor networks',
  },
  {
    name: 'Dr. Farrukh Shahid',
    role: 'Faculty Advisor',
    description: 'Research guidance & academic supervision',
  },
]

const timelineEvents = [
  {
    year: '2025',
    title: 'Research & Planning',
    description: 'Initial research phase covering literature review, feasibility analysis, and system architecture design for AI-powered fire detection.',
    position: 'left' as const,
  },
  {
    year: '2025',
    title: 'AI Model Development',
    description: 'Training and optimizing neural networks for real-time fire and smoke detection using computer vision and thermal imaging data.',
    position: 'right' as const,
  },
  {
    year: '2026',
    title: 'System Integration',
    description: 'Integrating AI detection models with intelligent evacuation routing algorithms and real-time sensor network communication.',
    position: 'left' as const,
  },
  {
    year: '2026',
    title: 'Testing & Deployment',
    description: 'Comprehensive system testing, performance benchmarking, documentation, and final project presentation at FAST-NUCES.',
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
        description="IGNIS is an AI-powered fire detection and intelligent evacuation system, developed as a Final Year Project at FAST-NUCES Karachi."
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

      {/* Institution */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 py-16">
        <div className="bg-forest-dark rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Academic Project</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            IGNIS is developed as a Final Year Project (FYP) at FAST-NUCES Karachi,
            Pakistan during the 2024-2025 academic year. We are open to academic
            collaboration and research partnerships.
          </p>
          <div className="flex justify-center gap-4 text-white/40 text-sm">
            <span>FAST-NUCES Karachi</span>
            <span>•</span>
            <span>Computer Science Department</span>
            <span>•</span>
            <span>FYP 2024-2025</span>
          </div>
        </div>
      </section>
    </>
  )
}
