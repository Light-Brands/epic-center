import type { Metadata } from 'next'
import './globals.css'
import { ScenarioProvider } from '@/lib/context/ScenarioContext'
import { Header } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Transformational Epicenter | Investor Pitch',
  description: 'A luxury medical retreat platform for deep healing through bio-optimization, plant medicine and trauma integration. $16.8M project, 78% projected IRR.',
  keywords: ['investment', 'wellness', 'medical retreat', 'ibogaine', 'mental health'],
  metadataBase: new URL('https://www.transformational-epicenter.com'),
  openGraph: {
    title: 'Transformational Epicenter - Luxury Medical Retreat Investment',
    description: 'Luxury medical retreat at the convergence of psychedelic therapy and wellness tourism. $16.8M raise, 78% projected IRR, 7.5x MOIC.',
    siteName: 'Transformational Epicenter',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transformational Epicenter - Luxury Medical Retreat Investment',
    description: 'Luxury medical retreat at the convergence of psychedelic therapy and wellness tourism. $16.8M raise, 78% projected IRR, 7.5x MOIC.',
  },
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
