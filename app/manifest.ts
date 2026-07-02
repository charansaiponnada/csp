import { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.shortTitle,
    short_name: 'CSP',
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: SITE.backgroundColor,
    theme_color: SITE.themeColor,
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { src: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { src: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
