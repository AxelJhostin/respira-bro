import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Todos los robots son bienvenidos (Google, Bing, etc.)
      allow: '/',
      disallow: '/private/', // Bloqueamos rutas privadas si las hubiera
    },
    sitemap: 'https://respira-bro.vercel.app/sitemap.xml',
  }
}