interface PageHeroProps {
  badge?: {
    icon: string
    text: string
  }
  title: string
  description: string
  children?: React.ReactNode
}

export function PageHero({ badge, title, description, children }: PageHeroProps) {
  return (
    <section className="w-full max-w-[1280px] px-6 lg:px-10 pt-6 pb-10 lg:pt-8 lg:pb-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-green/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-tr from-forest-green/5 to-transparent rounded-full blur-3xl -z-10"></div>

      {/* Floating dots decoration */}
      <div className="absolute top-20 right-20 size-2 bg-accent-green/20 rounded-full hidden lg:block"></div>
      <div className="absolute top-40 right-40 size-3 bg-accent-green/10 rounded-full hidden lg:block"></div>
      <div className="absolute bottom-20 right-1/3 size-2 bg-forest-green/10 rounded-full hidden lg:block"></div>

      <div className="max-w-3xl relative">
        <h1 className="text-forest-dark text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
          {title}
        </h1>
        <p className="text-forest-dark/70 text-xl leading-relaxed">
          {description}
        </p>
        {children}
      </div>
    </section>
  )
}
