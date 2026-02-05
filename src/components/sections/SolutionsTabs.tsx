'use client'

import { useState } from 'react'

const solutions = [
  {
    id: 'residential',
    icon: 'home',
    tab: 'Residential',
    title: 'Residential Buildings',
    description: 'Homes, apartments, and housing complexes need reliable fire protection that safeguards families while they sleep. IGNIS provides 24/7 intelligent monitoring with instant alerts and clear evacuation guidance for residents of all ages.',
    features: [
      { icon: 'family_restroom', title: 'Family Safety', description: 'Personalized alerts and guidance for each family member including children and elderly' },
      { icon: 'nights_stay', title: 'Night Monitoring', description: 'Enhanced detection during sleeping hours with louder, persistent alerts' },
      { icon: 'smartphone', title: 'Mobile Alerts', description: 'Instant notifications to family members even when away from home' },
      { icon: 'map', title: 'Safe Exit Routes', description: 'Clear visual and audio guidance to the safest exit from any room' },
    ],
    stats: { coverage: '10K+ homes', response: '<2s', accuracy: '99.4%' }
  },
  {
    id: 'commercial',
    icon: 'apartment',
    tab: 'Commercial',
    title: 'Commercial Buildings',
    description: 'Office complexes, shopping centers, and business facilities with high occupancy require sophisticated fire detection and evacuation systems that can handle complex layouts and large numbers of occupants.',
    features: [
      { icon: 'stairs', title: 'Multi-floor Evacuation', description: 'Intelligent routing across multiple floors with real-time stairwell monitoring' },
      { icon: 'elevator', title: 'Elevator Integration', description: 'Automatic elevator recall and safe floor designation during emergencies' },
      { icon: 'groups', title: 'Crowd Analysis', description: 'AI-powered density monitoring to prevent dangerous bottlenecks' },
      { icon: 'notifications_active', title: 'Zone Alerts', description: 'Targeted notifications to specific building zones and tenants' },
    ],
    stats: { coverage: '500K+ sq ft', response: '<2s', accuracy: '99.5%' }
  },
  {
    id: 'educational',
    icon: 'school',
    tab: 'Educational',
    title: 'Educational Institutions',
    description: 'Schools, universities, and research facilities require special safety protocols to protect students, staff, and sensitive research equipment while maintaining organized evacuation procedures.',
    features: [
      { icon: 'campaign', title: 'Classroom Alerts', description: 'Room-specific notifications with teacher override controls' },
      { icon: 'location_on', title: 'Assembly Coordination', description: 'Automated headcount and assembly point management' },
      { icon: 'accessible', title: 'Accessibility Support', description: 'Special routing for students with mobility requirements' },
      { icon: 'lock', title: 'Lockdown Integration', description: 'Seamless coordination between fire and security systems' },
    ],
    stats: { coverage: '200+ rooms', response: '<3s', accuracy: '99.2%' }
  },
  {
    id: 'healthcare',
    icon: 'local_hospital',
    tab: 'Healthcare',
    title: 'Healthcare Facilities',
    description: 'Hospitals and clinics face unique challenges with critical patients, sensitive medical equipment, and the need for continuous operation even during emergencies.',
    features: [
      { icon: 'hotel', title: 'Patient Awareness', description: 'Mobility tracking and priority evacuation for critical patients' },
      { icon: 'biotech', title: 'Equipment Protection', description: 'Automated protocols for sensitive medical equipment' },
      { icon: 'badge', title: 'Staff Coordination', description: 'Role-based alerts and responsibility assignment' },
      { icon: 'emergency', title: 'OR Protection', description: 'Special protocols for operating rooms and ICUs' },
    ],
    stats: { coverage: '300+ beds', response: '<2s', accuracy: '99.8%' }
  },
  {
    id: 'industrial',
    icon: 'factory',
    tab: 'Industrial',
    title: 'Industrial Sites',
    description: 'Manufacturing plants and warehouses with hazardous materials require specialized detection systems and evacuation protocols that account for chemical hazards and equipment safety.',
    features: [
      { icon: 'science', title: 'Hazmat Mapping', description: 'Real-time tracking of hazardous material locations' },
      { icon: 'power_settings_new', title: 'Equipment Shutdown', description: 'Automated safe shutdown sequences for machinery' },
      { icon: 'person_pin_circle', title: 'Worker Tracking', description: 'Real-time location tracking for all personnel' },
      { icon: 'air', title: 'Ventilation Control', description: 'Automated HVAC response to contain smoke spread' },
    ],
    stats: { coverage: '1M+ sq ft', response: '<1.5s', accuracy: '99.9%' }
  },
]

export function SolutionsTabs() {
  const [activeTab, setActiveTab] = useState('residential')

  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0]

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {solutions.map((solution) => (
          <button
            key={solution.id}
            onClick={() => setActiveTab(solution.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === solution.id
                ? 'bg-forest-green text-white shadow-lg shadow-forest-green/20'
                : 'bg-white text-forest-dark/70 border border-forest-green/20 hover:border-forest-green/40 hover:text-forest-dark'
            }`}
          >
            <span className="material-symbols-outlined text-lg">{solution.icon}</span>
            {solution.tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white rounded-3xl border border-forest-green/30 overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Info */}
          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="size-14 rounded-2xl bg-forest-green/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-forest-green text-3xl">{activeSolution.icon}</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-forest-dark">{activeSolution.title}</h3>
            </div>

            <p className="text-forest-dark/60 leading-relaxed mb-8">
              {activeSolution.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-cream rounded-2xl mb-8">
              <div className="text-center">
                <p className="text-xl font-bold text-forest-green">{activeSolution.stats.coverage}</p>
                <p className="text-xs text-forest-dark/50">Coverage</p>
              </div>
              <div className="text-center border-x border-forest-green/10">
                <p className="text-xl font-bold text-forest-green">{activeSolution.stats.response}</p>
                <p className="text-xs text-forest-dark/50">Response</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-forest-green">{activeSolution.stats.accuracy}</p>
                <p className="text-xs text-forest-dark/50">Accuracy</p>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="bg-cream/50 p-8 lg:p-12">
            <h4 className="text-sm font-bold text-forest-dark/40 uppercase tracking-wider mb-6">Key Features</h4>
            <div className="space-y-4">
              {activeSolution.features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 bg-white rounded-xl border border-forest-green/20 transition-all hover:border-forest-green/40 hover:shadow-sm"
                >
                  <div className="size-10 rounded-lg bg-forest-green/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-forest-green text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-forest-dark mb-1">{feature.title}</h5>
                    <p className="text-sm text-forest-dark/60">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
