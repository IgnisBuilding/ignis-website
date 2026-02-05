'use client'

import { useState } from 'react'

const solutions = [
  {
    id: 'residential',
    icon: 'home',
    tab: 'Residential',
    title: 'Residential Buildings',
    description: 'Homes, apartments, and housing complexes need reliable fire protection that safeguards families. IGNIS provides intelligent monitoring with instant alerts and clear evacuation guidance for residents.',
    features: [
      { icon: 'videocam', title: 'AI Fire Detection', description: 'Camera-based fire detection with anti-spoofing to distinguish real fires from screens' },
      { icon: 'record_voice_over', title: 'Voice Navigation', description: 'Voice-guided turn-by-turn directions to the nearest safe exit' },
      { icon: 'my_location', title: 'Indoor Positioning', description: 'WiFi-based tracking to locate occupants in real-time' },
      { icon: 'dashboard', title: 'Rescue Dashboard', description: 'Real-time view of fire location and occupant positions for responders' },
    ],
    stats: { market: '75,000+', marketLabel: 'Buildings in Pakistan' }
  },
  {
    id: 'commercial',
    icon: 'apartment',
    tab: 'Commercial',
    title: 'Commercial Buildings',
    description: 'Office complexes, shopping centers, and business facilities with high occupancy require intelligent fire detection and evacuation systems that can handle complex layouts.',
    features: [
      { icon: 'videocam', title: 'AI Fire Detection', description: 'Camera-based fire detection with anti-spoofing to eliminate false alarms' },
      { icon: 'record_voice_over', title: 'Voice Navigation', description: 'Voice-guided evacuation directing each person to the nearest safe exit' },
      { icon: 'my_location', title: 'Indoor Positioning', description: 'Real-time occupant tracking across multiple floors' },
      { icon: 'dashboard', title: 'Rescue Dashboard', description: 'Emergency screen showing exact fire location and all occupant positions' },
    ],
    stats: { market: '11,000+', marketLabel: 'Malls in Pakistan' }
  },
  {
    id: 'educational',
    icon: 'school',
    tab: 'Educational',
    title: 'Educational Institutions',
    description: 'Schools and universities require safety systems that protect students and staff while enabling organized evacuation procedures during emergencies.',
    features: [
      { icon: 'videocam', title: 'AI Fire Detection', description: 'Visual fire detection through camera feeds with false alarm prevention' },
      { icon: 'record_voice_over', title: 'Voice Navigation', description: 'Clear voice guidance directing students and staff to safe exits' },
      { icon: 'my_location', title: 'Indoor Positioning', description: 'Track occupant locations to ensure everyone evacuates safely' },
      { icon: 'dashboard', title: 'Rescue Dashboard', description: 'Real-time emergency view for rescue teams to locate anyone trapped' },
    ],
    stats: { market: '278,000+', marketLabel: 'Institutions in Pakistan' }
  },
  {
    id: 'healthcare',
    icon: 'local_hospital',
    tab: 'Healthcare',
    title: 'Healthcare Facilities',
    description: 'Hospitals and clinics face unique challenges with patients who may have limited mobility and the need for continuous operation during emergencies.',
    features: [
      { icon: 'videocam', title: 'AI Fire Detection', description: 'Intelligent fire detection that eliminates false alarms from medical equipment' },
      { icon: 'record_voice_over', title: 'Voice Navigation', description: 'Voice-guided evacuation with priority routing for patient areas' },
      { icon: 'my_location', title: 'Indoor Positioning', description: 'Track patients and staff locations for coordinated evacuation' },
      { icon: 'dashboard', title: 'Rescue Dashboard', description: 'Real-time view showing fire spread and occupant positions for targeted rescue' },
    ],
    stats: { market: '1,900+', marketLabel: 'Hospitals in Pakistan' }
  },
  {
    id: 'industrial',
    icon: 'factory',
    tab: 'Industrial',
    title: 'Industrial Sites',
    description: 'Manufacturing plants and warehouses require specialized detection systems and evacuation guidance that accounts for complex facility layouts.',
    features: [
      { icon: 'videocam', title: 'AI Fire Detection', description: 'Camera-based detection optimized for industrial environments' },
      { icon: 'record_voice_over', title: 'Voice Navigation', description: 'Voice-guided evacuation directing workers to nearest safe exits' },
      { icon: 'my_location', title: 'Indoor Positioning', description: 'Real-time location tracking for all personnel on site' },
      { icon: 'dashboard', title: 'Rescue Dashboard', description: 'Emergency dashboard showing fire location and worker positions' },
    ],
    stats: { market: '3,200+', marketLabel: 'Plants in Pakistan' }
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

            {/* Market Size */}
            <div className="p-4 bg-cream rounded-2xl mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-forest-green">{activeSolution.stats.market}</p>
                <p className="text-sm text-forest-dark/50">{activeSolution.stats.marketLabel}</p>
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
