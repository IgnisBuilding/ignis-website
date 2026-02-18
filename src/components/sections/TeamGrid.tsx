import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  description?: string
  image?: string
}

interface TeamGridProps {
  title?: string
  subtitle?: string
  members: TeamMember[]
}

export function TeamGrid({ title = 'Meet the Team', subtitle, members }: TeamGridProps) {
  return (
    <section className="w-full max-w-[1280px] px-6 lg:px-10 pb-16">
      {(title || subtitle) && (
        <div className="mb-12">
          {title && <h2 className="text-3xl font-extrabold text-forest-dark mb-4">{title}</h2>}
          {subtitle && <p className="text-forest-dark/60 max-w-2xl">{subtitle}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <div key={member.name} className="bg-forest-dark rounded-2xl p-6 hover:bg-forest-green transition-colors group">
            <div className="text-center">
              <div className="size-24 rounded-full bg-white/10 border-2 border-accent-green/30 flex items-center justify-center mx-auto mb-4 group-hover:border-accent-green/50 transition-colors overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="size-full object-cover object-top"
                  />
                ) : (
                  <span className="material-symbols-outlined text-accent-green text-3xl">person</span>
                )}
              </div>
              <h3 className="font-bold text-lg text-white mb-1">{member.name}</h3>
              <p className="text-sm text-accent-green font-medium mb-2">{member.role}</p>
              {member.description && (
                <p className="text-sm text-white">{member.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
