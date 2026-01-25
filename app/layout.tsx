import type { Metadata } from 'next'
import './globals.css'
import { ScenarioProvider } from '@/lib/context/ScenarioContext'
import { Header } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Transformational Epicenter | Investor Pitch',
  description: 'A luxury medical retreat platform for deep healing through plant medicine, bio-optimization, and trauma integration. $19M project, 30% projected IRR.',
  keywords: ['investment', 'wellness', 'medical retreat', 'ibogaine', 'mental health'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ScenarioProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
        </ScenarioProvider>
      </body>
    </html>
  )
}
