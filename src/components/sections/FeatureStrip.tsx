interface Feature {
  icon: string
  title: string
  description: string
}

interface FeatureStripProps {
  features: Feature[]
}

export function FeatureStrip({ features }: FeatureStripProps) {
  return (
    <section className="w-full bg-white border-t border-forest-dark/5 py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {features.map((feature, index) => (
            <div key={feature.title} className="flex items-center gap-10 w-full md:w-auto">
              <div className="flex items-center gap-5 text-forest-dark">
                <div className="size-16 rounded-full bg-cream flex items-center justify-center border border-forest-green/20">
                  <span className="material-symbols-outlined text-forest-green text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">{feature.title}</h3>
                  <p className="text-base text-forest-dark/60">{feature.description}</p>
                </div>
              </div>
              {index < features.length - 1 && (
                <div className="h-14 w-px bg-forest-dark/10 hidden md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
