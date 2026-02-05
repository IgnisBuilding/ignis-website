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
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🇵🇰</span>
              <p className="text-sm font-bold text-forest-green uppercase tracking-wide">Pakistan's First</p>
            </div>
            <p className="text-lg font-semibold text-forest-dark/80">
              AI-Powered Fire Emergency Response Platform
            </p>
            <p className="text-sm text-forest-dark/50 mt-2">
              Revolutionizing fire safety with intelligent detection & smart evacuation
            </p>
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
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
