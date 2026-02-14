import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ScenarioProvider } from '@/lib/context/ScenarioContext'
import { VaultProvider } from '@/lib/context/VaultContext'
import { Header } from '@/components/layout'
import { ServiceWorkerRegistration } from '@/components/pwa/ServiceWorkerRegistration'
import { AppleSplashLinks } from '@/components/pwa/AppleSplashLinks'

export const viewport: Viewport = {
  themeColor: '#1A3A3A',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Transformational Epicenter | Investor Pitch',
  description: 'A luxury medical retreat platform for deep healing through bio-optimization, plant medicine and trauma integration. $16.8M equity raise.',
  keywords: ['investment', 'wellness', 'medical retreat', 'ibogaine', 'mental health'],
  metadataBase: new URL('https://www.transformational-epicenter.com'),
  applicationName: 'Transformational Epicenter',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'TEC',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: 'Transformational Epicenter - Luxury Medical Retreat Investment',
    description: 'Luxury medical retreat at the convergence of psychedelic therapy and wellness tourism. $16.8M equity raise.',
    siteName: 'Transformational Epicenter',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transformational Epicenter - Luxury Medical Retreat Investment',
    description: 'Luxury medical retreat at the convergence of psychedelic therapy and wellness tourism. $16.8M equity raise.',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <AppleSplashLinks />
      </head>
      <body className="min-h-screen flex flex-col">
        <ScenarioProvider>
          <VaultProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </VaultProvider>
        </ScenarioProvider>
        <ServiceWorkerRegistration />
      </body>
    </html>
  )
}
