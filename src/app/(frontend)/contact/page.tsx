import { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'
import { PageHero } from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Contact - IGNIS Fire Detection System',
  description: 'Get in touch with the IGNIS team for demos, collaborations, or inquiries.',
}

const projectInfo = [
  {
    title: 'Project Type',
    items: ['Final Year Project', 'FAST-NUCES', '2025-2026'],
  },
  {
    title: 'Domain',
    items: ['AI Fire Detection', 'Evacuation Systems', 'Emergency Response'],
  },
  {
    title: 'Status',
    items: ['Prototype Stage', 'Demo Available', 'Academic Evaluation'],
  },
  {
    title: 'Institution',
    items: ['FAST-NUCES', 'Karachi, Pakistan', 'Open for Collaboration'],
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's Make Buildings Safer"
        description="Reach out for demos, evaluations, or academic collaboration. We're open to connecting with researchers, institutions, and industry professionals."
      />

      {/* Main Content */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column - Info */}
          <div className="lg:col-span-5 flex flex-col gap-16">
            <div className="space-y-6">
              <div className="flex flex-col gap-4">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 size-10 rounded-full bg-cream-dark border border-forest-green/20 flex items-center justify-center text-forest-green">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-forest-dark/50 uppercase tracking-wider mb-1">Inquiries</h3>
                    <a
                      href="mailto:ignis.fyp@gmail.com"
                      className="text-xl font-semibold text-forest-dark hover:text-forest-green transition-colors"
                    >
                      ignis.fyp@gmail.com
                    </a>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 size-10 rounded-full bg-cream-dark border border-forest-green/20 flex items-center justify-center text-forest-green">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-forest-dark/50 uppercase tracking-wider mb-1">Location</h3>
                    <span className="text-xl font-semibold text-forest-dark">Karachi, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-forest-green/10"></div>

            {/* Project Information */}
            <div>
              <h2 className="text-2xl font-bold text-forest-dark mb-8">Project Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projectInfo.map((info) => (
                  <div key={info.title} className="space-y-2">
                    <h3 className="text-lg font-bold text-forest-green">{info.title}</h3>
                    <p className="text-forest-dark/70 text-sm leading-relaxed">
                      {info.items.map((item, i) => (
                        <span key={item}>
                          {item}
                          {i < info.items.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
