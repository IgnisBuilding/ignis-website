import type { Metadata } from 'next'
import '../globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'IGNIS - Smart Fire Detection & Evacuation System',
  description: 'Detect Fast. Evacuate Smart. Save Lives. An AI-powered fire detection and evacuation system designed to save lives when every second matters.',
  keywords: ['fire detection', 'AI', 'evacuation', 'smart building', 'safety', 'FAST-NUCES'],
  authors: [{ name: 'IGNIS Team' }],
  openGraph: {
    title: 'IGNIS - Smart Fire Detection & Evacuation System',
    description: 'Detect Fast. Evacuate Smart. Save Lives.',
    type: 'website',
  },
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 w-full flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
