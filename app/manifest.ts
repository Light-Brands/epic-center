import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Transformational Epicenter',
    short_name: 'TEC',
    description:
      'A luxury medical retreat platform for deep healing through bio-optimization, plant medicine and trauma integration.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1A3A3A',
    theme_color: '#1A3A3A',
    orientation: 'portrait-primary',
    categories: ['health', 'medical', 'business'],
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-maskable-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
