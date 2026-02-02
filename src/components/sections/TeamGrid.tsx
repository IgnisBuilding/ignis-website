import { Card, CardContent } from '@/components/ui/Card'

interface TeamMember {
  name: string
  role: string
  description?: string
}

interface TeamGridProps {
  title?: string
  subtitle?: string
  members: TeamMember[]
}

export function TeamGrid({ title = 'Meet the Team', subtitle, members }: TeamGridProps) {
  return (
    <section className="w-full max-w-[1280px] px-6 lg:px-10 py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-forest-dark mb-4">{title}</h2>
        {subtitle && <p className="text-forest-dark/60 max-w-2xl">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <Card key={member.name} variant="elevated" className="hover:shadow-lg transition-shadow">
            <CardContent className="text-center py-8">
              <div className="size-20 rounded-full bg-cream-dark border border-forest-green/10 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-forest-green text-3xl">person</span>
              </div>
              <h3 className="font-bold text-lg text-forest-dark mb-1">{member.name}</h3>
              <p className="text-sm text-forest-green font-medium mb-2">{member.role}</p>
              {member.description && (
                <p className="text-xs text-forest-dark/60">{member.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
