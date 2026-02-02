interface Stat {
  value: string
  label: string
  icon?: string
}

interface StatsSectionProps {
  stats: Stat[]
  variant?: 'light' | 'dark'
}

export function StatsSection({ stats, variant = 'light' }: StatsSectionProps) {
  const isDark = variant === 'dark'

  return (
    <section className={`w-full py-16 ${isDark ? 'bg-forest-dark' : 'bg-white border-y border-forest-dark/5'}`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              {stat.icon && (
                <div className={`size-12 rounded-full ${isDark ? 'bg-white/10' : 'bg-cream'} flex items-center justify-center mx-auto mb-4`}>
                  <span className={`material-symbols-outlined ${isDark ? 'text-accent-green' : 'text-forest-green'}`}>
                    {stat.icon}
                  </span>
                </div>
              )}
              <p className={`text-4xl font-extrabold mb-2 ${isDark ? 'text-accent-green' : 'text-forest-green'}`}>
                {stat.value}
              </p>
              <p className={`text-sm font-medium ${isDark ? 'text-white/60' : 'text-forest-dark/60'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
