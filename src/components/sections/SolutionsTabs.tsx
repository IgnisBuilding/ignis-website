'use client'

import { useState } from 'react'

const solutions = [
  {
    id: 'residential',
    icon: 'home',
    tab: 'Residential',
    title: 'Residential Buildings',
    problem: 'Families panic during fires, unfamiliar with building layouts and unable to find safe exits in smoke-filled corridors—especially at night when most fatal fires occur.',
    solution: 'IGNIS provides intelligent fire detection with voice-guided evacuation, helping every family member navigate to safety even in zero visibility conditions.',
    features: [
      { icon: 'videocam', title: 'AI Fire Detection', description: 'Camera-based detection with anti-spoofing distinguishes real fires from TV screens, eliminating false alarms' },
      { icon: 'record_voice_over', title: 'Voice Navigation', description: 'Turn-by-turn voice guidance directs each resident to the nearest safe exit' },
      { icon: 'my_location', title: 'Indoor Positioning', description: 'WiFi-based tracking locates family members in real-time during emergencies' },
    ],
    stats: { market: '75,000+', marketLabel: 'Buildings in Pakistan' }
  },
  {
    id: 'commercial',
    icon: 'apartment',
    tab: 'Commercial',
    title: 'Commercial Buildings',
    problem: 'Shopping malls and offices have thousands of visitors unfamiliar with exit locations. During fires, crowds create dangerous bottlenecks and people move toward danger without knowing fire location.',
    solution: 'IGNIS detects fires instantly and guides each person through personalized voice navigation, preventing crowd crushes and directing everyone away from danger.',
    features: [
      { icon: 'videocam', title: 'AI Fire Detection', description: 'Real-time visual detection across camera feeds with false alarm prevention' },
      { icon: 'record_voice_over', title: 'Voice Navigation', description: 'Personalized evacuation guidance directing each person to the nearest safe exit' },
      { icon: 'my_location', title: 'Indoor Positioning', description: 'Track occupant locations across multiple floors for coordinated evacuation' },
    ],
    stats: { market: '11,000+', marketLabel: 'Malls in Pakistan' }
  },
  {
    id: 'educational',
    icon: 'school',
    tab: 'Educational',
    title: 'Educational Institutions',
    problem: 'Schools house hundreds of children who panic easily. Teachers struggle to account for all students during chaotic evacuations, and visitors are unfamiliar with emergency exits.',
    solution: 'IGNIS provides clear voice guidance for organized evacuation while tracking student locations, ensuring no child is left behind.',
    features: [
      { icon: 'videocam', title: 'AI Fire Detection', description: 'Intelligent detection through existing camera infrastructure with instant alerts' },
      { icon: 'record_voice_over', title: 'Voice Navigation', description: 'Clear voice commands guide students and staff to designated assembly points' },
      { icon: 'my_location', title: 'Indoor Positioning', description: 'Real-time location tracking ensures all students are accounted for during evacuation' },
    ],
    stats: { market: '278,000+', marketLabel: 'Institutions in Pakistan' }
  },
  {
    id: 'healthcare',
    icon: 'local_hospital',
    tab: 'Healthcare',
    title: 'Healthcare Facilities',
    problem: 'Hospitals have patients with limited mobility, critical equipment that cannot be abandoned, and complex layouts. Traditional alarms cause panic without providing actionable guidance.',
    solution: 'IGNIS enables coordinated evacuation with priority routing for patient areas while tracking everyone\'s location for efficient rescue operations.',
    features: [
      { icon: 'videocam', title: 'AI Fire Detection', description: 'Smart detection that minimizes false alarms from medical equipment and steam' },
      { icon: 'record_voice_over', title: 'Voice Navigation', description: 'Calm voice guidance with priority routing for patient wards and critical areas' },
      { icon: 'my_location', title: 'Indoor Positioning', description: 'Track patients, staff, and visitors for coordinated evacuation and rescue' },
    ],
    stats: { market: '1,900+', marketLabel: 'Hospitals in Pakistan' }
  },
  {
    id: 'industrial',
    icon: 'factory',
    tab: 'Industrial',
    title: 'Industrial Sites',
    problem: 'Factories have complex layouts, high noise levels, and workers spread across large areas. Traditional sirens don\'t indicate fire location or safe evacuation routes.',
    solution: 'IGNIS cuts through industrial noise with personalized voice guidance, directing each worker to safety while tracking everyone\'s location.',
    features: [
      { icon: 'videocam', title: 'AI Fire Detection', description: 'Visual detection optimized for industrial environments with heat and dust' },
      { icon: 'record_voice_over', title: 'Voice Navigation', description: 'Clear voice directions that cut through factory noise to guide workers to exits' },
      { icon: 'my_location', title: 'Indoor Positioning', description: 'Real-time tracking of all personnel across the facility' },
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

            {/* Problem */}
            <div className="mb-6 p-4 bg-forest-dark/5 rounded-xl border-l-2 border-forest-dark/20">
              <p className="text-xs font-semibold text-forest-dark/50 uppercase tracking-wider mb-2">The Challenge</p>
              <p className="text-forest-dark/70 leading-relaxed">
                {activeSolution.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-8 p-4 bg-forest-green/5 rounded-xl border-l-2 border-forest-green">
              <p className="text-xs font-semibold text-forest-green uppercase tracking-wider mb-2">How IGNIS Helps</p>
              <p className="text-forest-dark/80 leading-relaxed">
                {activeSolution.solution}
              </p>
            </div>

            {/* Market Size */}
            <div className="p-4 bg-forest-green rounded-2xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">{activeSolution.stats.market}</p>
                <p className="text-sm text-white/70">{activeSolution.stats.marketLabel}</p>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="bg-cream/50 p-8 lg:p-12">
            <h4 className="text-sm font-bold text-forest-dark/40 uppercase tracking-wider mb-6">Key Capabilities</h4>
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

            {/* Rescue Team Note */}
            <div className="mt-6 p-4 bg-forest-dark/5 rounded-xl border border-forest-dark/10">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-forest-green">local_fire_department</span>
                <div>
                  <p className="text-sm font-semibold text-forest-dark">Rescue Team Support</p>
                  <p className="text-xs text-forest-dark/60">Firefighters and rescue headquarters receive real-time dashboards showing exact fire location and all occupant positions for targeted rescue operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
