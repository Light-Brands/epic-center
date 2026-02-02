import type { Metadata } from 'next'
import './globals.css'
import { ScenarioProvider } from '@/lib/context/ScenarioContext'
import { Header } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Transformational Epicenter | Investor Pitch',
  description: 'A luxury medical retreat platform for deep healing through plant medicine, bio-optimization, and trauma integration. $13.77M project, 73.5% projected IRR.',
  keywords: ['investment', 'wellness', 'medical retreat', 'ibogaine', 'mental health'],
  metadataBase: new URL('https://www.transformational-epicenter.com'),
  openGraph: {
    title: 'Transformational Epicenter — Luxury Medical Retreat Investment',
    description: 'Luxury medical retreat at the convergence of psychedelic therapy and wellness tourism. $13.77M raise, 73.5% projected IRR, 6.69x MOIC.',
    siteName: 'Transformational Epicenter',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transformational Epicenter — Luxury Medical Retreat Investment',
    description: 'Luxury medical retreat at the convergence of psychedelic therapy and wellness tourism. $13.77M raise, 73.5% projected IRR, 6.69x MOIC.',
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
