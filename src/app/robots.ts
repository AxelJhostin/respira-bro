import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Ejemplo: si tuvieras rutas privadas
    },
    sitemap: 'https://respira-bro.vercel.app/sitemap.xml',
  }
}