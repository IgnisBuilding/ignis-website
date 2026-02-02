interface TimelineEvent {
  year: string
  title: string
  description: string
  position: 'left' | 'right'
}

interface TimelineProps {
  title?: string
  subtitle?: string
  events: TimelineEvent[]
}

export function Timeline({
  title = 'A Legacy of Protection',
  subtitle = 'OUR JOURNEY',
  events
}: TimelineProps) {
  return (
    <section className="w-full max-w-[1280px] px-6 lg:px-10 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-[0.2em] text-forest-dark/50 uppercase mb-3 block">
          {subtitle}
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-forest-dark">
          {title}
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-forest-green/20 -translate-x-1/2 hidden md:block"></div>

        {/* Mobile vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-forest-green/20 md:hidden"></div>

        {/* Events */}
        <div className="space-y-12 md:space-y-0">
          {events.map((event, index) => {
            const isLeft = event.position === 'left'
            const isLast = index === events.length - 1

            return (
              <div
                key={`${event.title}-${index}`}
                className="relative md:grid md:grid-cols-2 md:gap-8 md:py-8"
              >
                {/* Year indicator - shown on opposite side on desktop */}
                <div className={`hidden md:flex items-start ${isLeft ? 'order-2 justify-start pl-12' : 'order-1 justify-end pr-12'}`}>
                  <span className={`text-6xl lg:text-7xl font-extrabold leading-none ${isLast ? 'text-forest-green/40' : 'text-forest-green/10'}`}>
                    {event.year}
                  </span>
                </div>

                {/* Content card */}
                <div className={`relative pl-12 md:pl-0 ${isLeft ? 'order-1 md:pr-12' : 'order-2 md:pl-12'}`}>
                  {/* Mobile year */}
                  <span className={`text-4xl font-extrabold mb-2 block md:hidden ${isLast ? 'text-forest-green/40' : 'text-forest-green/10'}`}>
                    {event.year}
                  </span>

                  <div className={isLeft ? 'md:text-right md:ml-auto' : 'md:text-left'}>
                    <h3 className="text-xl lg:text-2xl font-bold text-forest-dark mb-3">
                      {event.title}
                    </h3>
                    <p className={`text-sm lg:text-base text-forest-dark/60 leading-relaxed max-w-sm ${isLeft ? 'md:ml-auto' : ''}`}>
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot - desktop centered */}
                <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2">
                  <div className={`size-4 rounded-full border-2 ${isLast ? 'bg-accent-green border-accent-green' : 'bg-white border-forest-green/30'}`}></div>
                </div>

                {/* Timeline dot - mobile left aligned */}
                <div className="md:hidden absolute left-4 top-4 -translate-x-1/2">
                  <div className={`size-3 rounded-full border-2 ${isLast ? 'bg-accent-green border-accent-green' : 'bg-white border-forest-green/30'}`}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
