import { Button } from '@/components/ui/Button'

interface HeroSectionProps {
  badge?: string
  title: React.ReactNode
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  showImage?: boolean
  imageUrl?: string
}

export function HeroSection({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  showImage = true,
  imageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH-cE260_ouocQlgOatTQXMOpGkOD-JBuA8ve8wc53ge28NmTnKLgDEobacsVhvVUg8NcXzC9TorGNrpLTgoxWucw68h3xFaLBA-4-COqWhmzQAlzDGS40oCd1ysj7Jx6kVFeT5eW0Bkb9PE7Bm5BANQYU2v0lSYghMilrGVDqV5RbbmwbwkUxrU7Xk328RYca8L00qz3-ZcDeV7uOulitgpbtgtMKFYsRvLO43OGOkrcy-G-hp214K_G-dax9m9RsaSn4eiqPZr5N',
}: HeroSectionProps) {
  return (
    <section className="w-full max-w-[1280px] px-6 lg:px-10 py-6 lg:py-10">
      <div className={`grid grid-cols-1 ${showImage ? 'lg:grid-cols-12' : ''} gap-12 lg:gap-16 items-center`}>
        {/* Text Content */}
        <div className={`${showImage ? 'lg:col-span-5' : ''} flex flex-col gap-8`}>
          <div className="flex flex-col gap-4">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/20 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
                </span>
                <span className="text-xs font-bold text-forest-green uppercase tracking-wider">{badge}</span>
              </div>
            )}
            <h1 className="text-forest-dark text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              {title}
            </h1>
            <p className="text-forest-dark/70 text-lg leading-relaxed max-w-lg">
              {description}
            </p>
          </div>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary" size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}

          <div className="pt-8 border-t border-forest-dark/10 mt-2">
            <p className="text-sm font-semibold text-forest-dark/60 mb-4">The Future of Emergency Response</p>
            <div className="flex items-center gap-6">
              <span className="text-lg font-sans font-bold tracking-tight text-forest-green">AI-Powered</span>
              <span className="text-lg font-sans font-black tracking-tighter text-forest-dark/70">Real-Time</span>
              <span className="text-lg font-serif italic font-bold text-forest-dark/70">Life-Saving</span>
              <span className="hidden sm:block text-lg font-sans font-bold tracking-widest uppercase text-xs text-accent-green">First Response</span>
            </div>
          </div>
        </div>

        {/* Visual */}
        {showImage && (
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent-green/20 to-transparent rounded-[2rem] blur-2xl opacity-50 -z-10"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-forest-dark border border-forest-dark/10 aspect-[4/3] lg:aspect-auto lg:h-[600px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("${imageUrl}")` }}
              />
              <div className="absolute inset-0 bg-forest-dark/40 backdrop-contrast-125"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(23,207,115,0.1),transparent_70%)]"></div>

              {/* Floating Status Card */}
              <div className="absolute top-8 left-8 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg animate-pulse hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-accent-green shadow-[0_0_10px_#17cf73]"></div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-medium tracking-wider uppercase">System Status</span>
                    <span className="text-accent-green text-xs font-bold">All Systems Active</span>
                  </div>
                </div>
              </div>

              {/* Glowing Nodes */}
              <div className="absolute bottom-1/3 right-1/4 size-3 bg-accent-green rounded-full shadow-[0_0_15px_3px_rgba(23,207,115,0.6)] animate-pulse"></div>
              <div className="absolute top-1/4 left-1/3 size-2 bg-accent-green rounded-full shadow-[0_0_15px_3px_rgba(23,207,115,0.6)] animate-pulse delay-75"></div>
              <div className="absolute top-1/2 right-1/3 size-2 bg-accent-green rounded-full shadow-[0_0_15px_3px_rgba(23,207,115,0.6)] animate-pulse delay-150"></div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <line x1="33%" y1="25%" x2="66%" y2="50%" stroke="#17cf73" strokeWidth="1" />
                <line x1="66%" y1="50%" x2="75%" y2="66%" stroke="#17cf73" strokeWidth="1" />
                <line x1="33%" y1="25%" x2="50%" y2="50%" stroke="#17cf73" strokeWidth="1" />
              </svg>
            </div>

            {/* System Health Widget */}
            <div className="absolute -bottom-6 -right-6 lg:bottom-12 lg:-left-12 lg:right-auto z-20 w-72">
              <div className="bg-white rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-forest-green/20 flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-forest-green">shield</span>
                    <span className="text-forest-dark text-sm font-bold">System Health</span>
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded text-xs font-bold text-green-700">
                    <span className="size-1.5 rounded-full bg-green-600"></span>
                    Active
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-cream rounded-lg p-2">
                    <p className="text-xs text-forest-dark/60 mb-1">Uptime</p>
                    <p className="text-forest-green font-bold text-lg">99.9%</p>
                  </div>
                  <div className="bg-cream rounded-lg p-2">
                    <p className="text-xs text-forest-dark/60 mb-1">Sensors</p>
                    <p className="text-forest-green font-bold text-lg">142</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-forest-dark/40 font-medium">
                  <span className="material-symbols-outlined text-[14px]">sync</span>
                  Last synced: 2s ago
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
