import { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { TeamGrid } from '@/components/sections/TeamGrid'

export const metadata: Metadata = {
  title: 'Team - IGNIS Fire Safety',
  description: 'Meet the team behind IGNIS, Pakistan\'s first AI-powered fire detection and smart evacuation platform.',
}

const teamMembers = [
  {
    name: 'Muhammad Irtiza',
    role: 'Co-Founder',
    description: 'Architects the IGNIS platform from real-time dashboards to evacuation engine',
    image: '/irtiza.jpeg',
  },
  {
    name: 'Ali Raza',
    role: 'Co-Founder',
    description: 'Builds the infrastructure that powers real-time fire monitoring and alerts',
    image: '/aliraza.jpeg',
  },
  {
    name: 'Ahmed Haque',
    role: 'Co-Founder',
    description: 'Develops the AI models that detect fires and distinguish real threats from false alarms',
    image: '/ahmed.jpeg',
  },
  {
    name: 'Dr. M. Farrukh Shahid',
    role: 'Faculty Supervisor',
    description: 'Guides research methodology and validates the technical approach behind IGNIS',
    image: '/Dr_farrukh.jpeg',
  },
]

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="The Team Behind IGNIS"
        description="Engineers and researchers building Pakistan's first intelligent fire safety platform."
        centered
      />

      <TeamGrid
        title=""
        members={teamMembers}
      />

    </>
  )
}
