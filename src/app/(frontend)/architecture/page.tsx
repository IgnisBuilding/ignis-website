import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'System Architecture - IGNIS Technical Design',
  description: 'Explore the technical architecture of IGNIS AI fire detection and evacuation system.',
}

const systemLayers = [
  {
    layer: 'Perception Layer',
    icon: 'sensors',
    description: 'Hardware sensors and data acquisition systems',
    components: [
      { name: 'Visual Sensors', desc: 'HD cameras with night vision capability' },
      { name: 'Thermal Sensors', desc: 'Infrared detection for heat signatures' },
      { name: 'Environmental Sensors', desc: 'Smoke, CO, temperature monitors' },
      { name: 'IoT Gateway', desc: 'Edge devices for local processing' },
    ],
  },
  {
    layer: 'Intelligence Layer',
    icon: 'psychology',
    description: 'AI processing and decision-making systems',
    components: [
      { name: 'Fire Detection CNN', desc: 'Convolutional neural network for visual analysis' },
      { name: 'Anomaly Detection', desc: 'Statistical models for sensor data' },
      { name: 'Fusion Engine', desc: 'Multi-sensor data correlation' },
      { name: 'Risk Assessment', desc: 'Real-time threat level calculation' },
    ],
  },
  {
    layer: 'Routing Layer',
    icon: 'route',
    description: 'Evacuation planning and pathfinding systems',
    components: [
      { name: 'Graph Model', desc: 'Building topology representation' },
      { name: 'Pathfinding Engine', desc: 'A* algorithm with dynamic weights' },
      { name: 'Crowd Simulation', desc: 'Density and flow prediction' },
      { name: 'Route Optimizer', desc: 'Multi-objective path selection' },
    ],
  },
  {
    layer: 'Interface Layer',
    icon: 'devices',
    description: 'User interfaces and communication systems',
    components: [
      { name: 'Control Dashboard', desc: 'Web-based monitoring interface' },
      { name: 'Mobile Alerts', desc: 'Push notifications and SMS' },
      { name: 'Visual Guidance', desc: 'Digital signage integration' },
      { name: 'API Gateway', desc: 'External system integration' },
    ],
  },
]

const dataFlow = [
  { step: 1, title: 'Data Collection', description: 'Sensors continuously stream visual, thermal, and environmental data', icon: 'sensors' },
  { step: 2, title: 'Edge Processing', description: 'Local devices perform initial filtering and compression', icon: 'memory' },
  { step: 3, title: 'AI Analysis', description: 'Neural networks analyze data for fire indicators', icon: 'psychology' },
  { step: 4, title: 'Threat Assessment', description: 'System evaluates confidence and severity levels', icon: 'verified_user' },
  { step: 5, title: 'Route Calculation', description: 'Pathfinding algorithms compute optimal evacuation paths', icon: 'route' },
  { step: 6, title: 'Alert Distribution', description: 'Notifications sent to dashboards, mobile devices, and signage', icon: 'notifications_active' },
]

const specs = [
  { label: 'Processing Latency', value: '<500ms', desc: 'End-to-end detection time' },
  { label: 'Sensor Capacity', value: '500+', desc: 'Devices per installation' },
  { label: 'Route Calculation', value: '<2s', desc: 'Full building path update' },
  { label: 'System Availability', value: '99.9%', desc: 'Uptime guarantee' },
]

export default function ArchitecturePage() {
  return (
    <>
      <PageHero
        title="System Architecture"
        description="A comprehensive look at how IGNIS components work together to deliver real-time fire detection and intelligent evacuation guidance."
      />

      {/* System Layers - Mind Map */}
      <section className="w-full max-w-[1400px] px-6 lg:px-10 pb-20">
        <h2 className="text-3xl font-extrabold text-forest-dark mb-10">System Layers</h2>

        {/* Mind Map - Desktop */}
        <div className="hidden lg:block">
          <div className="relative h-[580px] bg-forest-dark rounded-3xl border border-forest-green/20 overflow-hidden">
            {/* SVG Connections */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 580" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="mainBranch" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="subBranch" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              {/* Main branches - center to layers */}
              <path d="M 600 290 C 480 290, 400 160, 340 160" stroke="url(#mainBranch)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M 600 290 C 720 290, 800 160, 860 160" stroke="url(#mainBranch)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M 600 290 C 480 290, 400 420, 340 420" stroke="url(#mainBranch)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M 600 290 C 720 290, 800 420, 860 420" stroke="url(#mainBranch)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

              {/* Perception sub-branches */}
              <path d="M 270 160 C 200 160, 170 70, 140 70" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M 270 160 C 200 160, 170 120, 140 120" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M 270 160 C 200 160, 170 200, 140 200" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M 270 160 C 200 160, 170 250, 140 250" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />

              {/* Intelligence sub-branches */}
              <path d="M 930 160 C 1000 160, 1030 70, 1060 70" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M 930 160 C 1000 160, 1030 120, 1060 120" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M 930 160 C 1000 160, 1030 200, 1060 200" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M 930 160 C 1000 160, 1030 250, 1060 250" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />

              {/* Routing sub-branches */}
              <path d="M 270 420 C 200 420, 170 330, 140 330" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M 270 420 C 200 420, 170 380, 140 380" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M 270 420 C 200 420, 170 460, 140 460" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M 270 420 C 200 420, 170 510, 140 510" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />

              {/* Interface sub-branches */}
              <path d="M 930 420 C 1000 420, 1030 330, 1060 330" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M 930 420 C 1000 420, 1030 380, 1060 380" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M 930 420 C 1000 420, 1030 460, 1060 460" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M 930 420 C 1000 420, 1030 510, 1060 510" stroke="url(#subBranch)" strokeWidth="1" fill="none" strokeLinecap="round" />
            </svg>

            {/* Central Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="px-6 py-4 bg-white/90 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4">
                  <Image
                    src="/ignis_logo.png"
                    alt="IGNIS"
                    width={160}
                    height={52}
                    className="h-14 w-auto object-contain"
                  />
                  <div>
                    <p className="text-forest-dark font-bold text-2xl leading-tight">IGNIS</p>
                    <p className="text-forest-dark/60 text-sm">System Architecture</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Perception Layer */}
            <div className="absolute left-[25%] top-[27%] -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="px-3.5 py-2 bg-white/90 text-forest-dark rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md">
                <span className="material-symbols-outlined text-forest-green text-base">sensors</span>
                Perception
              </div>
            </div>

            {/* Perception Components */}
            <div className="absolute left-[2%] top-[9%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                <span className="inline-block size-1.5 rounded-full bg-accent-green mr-2"></span>Visual Sensors
              </div>
            </div>
            <div className="absolute left-[2%] top-[18%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                <span className="inline-block size-1.5 rounded-full bg-accent-green mr-2"></span>Thermal Sensors
              </div>
            </div>
            <div className="absolute left-[2%] top-[31%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                <span className="inline-block size-1.5 rounded-full bg-accent-green mr-2"></span>Environmental
              </div>
            </div>
            <div className="absolute left-[2%] top-[40%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                <span className="inline-block size-1.5 rounded-full bg-accent-green mr-2"></span>IoT Gateway
              </div>
            </div>

            {/* Intelligence Layer */}
            <div className="absolute right-[25%] top-[27%] translate-x-1/2 -translate-y-1/2 z-10">
              <div className="px-3.5 py-2 bg-white/90 text-forest-dark rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md">
                <span className="material-symbols-outlined text-forest-green text-base">psychology</span>
                Intelligence
              </div>
            </div>

            {/* Intelligence Components */}
            <div className="absolute right-[2%] top-[9%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                Fire Detection CNN<span className="inline-block size-1.5 rounded-full bg-accent-green ml-2"></span>
              </div>
            </div>
            <div className="absolute right-[2%] top-[18%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                Anomaly Detection<span className="inline-block size-1.5 rounded-full bg-accent-green ml-2"></span>
              </div>
            </div>
            <div className="absolute right-[2%] top-[31%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                Fusion Engine<span className="inline-block size-1.5 rounded-full bg-accent-green ml-2"></span>
              </div>
            </div>
            <div className="absolute right-[2%] top-[40%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                Risk Assessment<span className="inline-block size-1.5 rounded-full bg-accent-green ml-2"></span>
              </div>
            </div>

            {/* Routing Layer */}
            <div className="absolute left-[25%] top-[73%] -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="px-3.5 py-2 bg-white/90 text-forest-dark rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md">
                <span className="material-symbols-outlined text-forest-green text-base">route</span>
                Routing
              </div>
            </div>

            {/* Routing Components */}
            <div className="absolute left-[2%] top-[54%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                <span className="inline-block size-1.5 rounded-full bg-accent-green mr-2"></span>Graph Model
              </div>
            </div>
            <div className="absolute left-[2%] top-[63%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                <span className="inline-block size-1.5 rounded-full bg-accent-green mr-2"></span>Pathfinding Engine
              </div>
            </div>
            <div className="absolute left-[2%] top-[76%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                <span className="inline-block size-1.5 rounded-full bg-accent-green mr-2"></span>Crowd Simulation
              </div>
            </div>
            <div className="absolute left-[2%] top-[85%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                <span className="inline-block size-1.5 rounded-full bg-accent-green mr-2"></span>Route Optimizer
              </div>
            </div>

            {/* Interface Layer */}
            <div className="absolute right-[25%] top-[73%] translate-x-1/2 -translate-y-1/2 z-10">
              <div className="px-3.5 py-2 bg-white/90 text-forest-dark rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md">
                <span className="material-symbols-outlined text-forest-green text-base">devices</span>
                Interface
              </div>
            </div>

            {/* Interface Components */}
            <div className="absolute right-[2%] top-[54%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                Control Dashboard<span className="inline-block size-1.5 rounded-full bg-accent-green ml-2"></span>
              </div>
            </div>
            <div className="absolute right-[2%] top-[63%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                Mobile Alerts<span className="inline-block size-1.5 rounded-full bg-accent-green ml-2"></span>
              </div>
            </div>
            <div className="absolute right-[2%] top-[76%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                Visual Guidance<span className="inline-block size-1.5 rounded-full bg-accent-green ml-2"></span>
              </div>
            </div>
            <div className="absolute right-[2%] top-[85%] z-10">
              <div className="px-3 py-1.5 bg-white/90 rounded-lg text-[13px] text-forest-dark/80">
                API Gateway<span className="inline-block size-1.5 rounded-full bg-accent-green ml-2"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Mind Map - Mobile/Tablet Fallback */}
        <div className="lg:hidden space-y-4">
          {systemLayers.map((layer) => (
            <div key={layer.layer} className="bg-forest-dark rounded-2xl border border-forest-green/20 overflow-hidden">
              <div className="bg-forest-green/30 p-4 flex items-center gap-3 border-b border-forest-green/20">
                <span className="material-symbols-outlined text-accent-green">{layer.icon}</span>
                <span className="text-white font-semibold">{layer.layer}</span>
              </div>
              <div className="p-4 space-y-2">
                {layer.components.map((comp) => (
                  <div key={comp.name} className="flex items-center gap-3 p-2.5 bg-white/10 rounded-lg">
                    <div className="size-1.5 rounded-full bg-accent-green"></div>
                    <span className="text-sm text-white/80">{comp.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Data Flow Pipeline - Horizontal Timeline */}
      <section className="w-full py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-forest-dark mb-3">Data Flow Pipeline</h2>
            <p className="text-forest-dark/60 max-w-xl mx-auto">How data moves through the IGNIS system from detection to response</p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Arrow Track with flowing animation */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-14 flex items-center">
              {/* Base arrows */}
              {dataFlow.map((_, index) => (
                <div key={index} className="flex-1 flex items-center">
                  <div
                    className="h-12 flex-1 relative bg-forest-green"
                    style={{
                      clipPath: index === dataFlow.length - 1
                        ? 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%, 5% 50%)'
                        : 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%, 5% 50%)',
                    }}
                  >
                    {index === 0 && (
                      <div className="absolute left-0 top-0 bottom-0 w-2 bg-forest-green" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
                    )}
                  </div>
                </div>
              ))}
              {/* Single flowing animation overlay */}
              <div className="absolute inset-0 arrow-flow-overlay pointer-events-none"></div>
            </div>

            {/* Nodes and Content */}
            <div className="relative flex justify-between items-center py-48">
              {dataFlow.map((item, index) => {
                const isTop = index % 2 === 0
                // Sync with 6s arrow flow animation - nodes appear as flow reaches them
                // Adjusted timing so nodes pop just as flow passes
                const flowDelay = index * 0.75 // 750ms between each node
                const contentDelay = flowDelay + 0.15 // Content appears slightly after node
                return (
                  <div key={item.step} className="flex-1 flex flex-col items-center relative group">
                    {/* Content Above - for odd steps (1, 3, 5) */}
                    {isTop && (
                      <div
                        className="absolute bottom-[calc(50%+32px)] left-1/2 w-40 flex flex-col items-center content-slide-up"
                        style={{ animationDelay: `${contentDelay}s` }}
                      >
                        {/* Icon Box */}
                        <div className="mb-2 size-12 rounded-xl border-2 border-forest-green/20 bg-white shadow-sm flex items-center justify-center transition-all duration-300 group-hover:border-forest-green group-hover:shadow-md group-hover:scale-110">
                          <span className="material-symbols-outlined text-forest-green text-xl">{item.icon}</span>
                        </div>
                        {/* Text */}
                        <div className="text-center mb-2">
                          <h3 className="font-bold text-forest-dark text-sm mb-1 group-hover:text-forest-green transition-colors">{item.title}</h3>
                          <p className="text-[11px] text-forest-dark/60 leading-relaxed">{item.description}</p>
                        </div>
                        {/* Connector Line */}
                        <div className="w-px bg-forest-green/40 flex-grow min-h-[20px]"></div>
                      </div>
                    )}

                    {/* Circle Node on Arrow */}
                    <div
                      className="relative z-10 size-14 rounded-full bg-white border-4 border-forest-green shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl node-pop-in"
                      style={{ animationDelay: `${flowDelay}s` }}
                    >
                      <span className="text-forest-green font-bold text-lg transition-colors">{item.step}</span>
                      {/* Pulse ring on hover */}
                      <div className="absolute inset-0 rounded-full border-2 border-forest-green/30 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500"></div>
                    </div>

                    {/* Content Below - for even steps (2, 4, 6) */}
                    {!isTop && (
                      <div
                        className="absolute top-[calc(50%+32px)] left-1/2 w-40 flex flex-col items-center content-slide-down"
                        style={{ animationDelay: `${contentDelay}s` }}
                      >
                        {/* Connector Line */}
                        <div className="w-px bg-forest-green/40 min-h-[20px] mb-2"></div>
                        {/* Icon Box */}
                        <div className="mb-2 size-12 rounded-xl border-2 border-forest-green/20 bg-white shadow-sm flex items-center justify-center transition-all duration-300 group-hover:border-forest-green group-hover:shadow-md group-hover:scale-110">
                          <span className="material-symbols-outlined text-forest-green text-xl">{item.icon}</span>
                        </div>
                        {/* Text */}
                        <div className="text-center">
                          <h3 className="font-bold text-forest-dark text-sm mb-1 group-hover:text-forest-green transition-colors">{item.title}</h3>
                          <p className="text-[11px] text-forest-dark/60 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile/Tablet Timeline */}
          <div className="lg:hidden">
            <div className="relative pl-8">
              {/* Vertical Line with gradient */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-forest-green via-accent-green to-forest-green"></div>

              <div className="space-y-8">
                {dataFlow.map((item) => (
                  <div key={item.step} className="relative">
                    {/* Node with pulse */}
                    <div className="absolute -left-8 top-0 size-7 rounded-full bg-forest-green text-white flex items-center justify-center text-sm font-bold shadow-md">
                      {item.step}
                      <div className="absolute inset-0 rounded-full bg-forest-green/50 animate-ping"></div>
                    </div>
                    {/* Card */}
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-forest-green/20 hover:shadow-md hover:border-forest-green/40 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="size-10 rounded-lg bg-forest-green/10 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-forest-green text-lg">{item.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-forest-dark text-sm mb-1">{item.title}</h3>
                          <p className="text-xs text-forest-dark/60">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 py-16">
        <h2 className="text-3xl font-extrabold text-forest-dark mb-8">Technical Specifications</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec) => (
            <Card key={spec.label} variant="elevated" className="border-forest-green/20">
              <CardContent className="text-center py-8">
                <p className="text-3xl font-extrabold text-forest-green mb-2">{spec.value}</p>
                <h3 className="font-bold text-forest-dark mb-1">{spec.label}</h3>
                <p className="text-xs text-forest-dark/60">{spec.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 pb-16">
        <div className="bg-forest-dark rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">Future Roadmap</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our vision for expanding IGNIS after successful field testing and deployment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="size-12 rounded-xl bg-accent-green/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-accent-green text-2xl">domain</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Multi-Building Deployment</h3>
              <p className="text-white/50 text-sm">Scaling IGNIS to manage multiple facilities from a centralized dashboard</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="size-12 rounded-xl bg-accent-green/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-accent-green text-2xl">emergency</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Emergency Services Integration</h3>
              <p className="text-white/50 text-sm">Direct communication with fire departments and first responders</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="size-12 rounded-xl bg-accent-green/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-accent-green text-2xl">model_training</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Enhanced AI Models</h3>
              <p className="text-white/50 text-sm">Continuous improvement with real-world field data and expanded training sets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 pb-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-forest-dark mb-4">Questions About the Architecture?</h2>
          <p className="text-forest-dark/70 max-w-xl mx-auto mb-6">
            We&apos;re happy to discuss technical details, integration requirements, or
            customization options for your specific needs.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact" variant="primary">Contact Us</Button>
            <Button href="/technology" variant="outline">Back to Technology</Button>
          </div>
        </div>
      </section>
    </>
  )
}
