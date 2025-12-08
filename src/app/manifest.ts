import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Respira, Bro',
    short_name: 'Respira',
    description: 'Herramientas de salud mental para hombres.',
    start_url: '/',
    display: 'standalone', // Esto quita la barra del navegador
    background_color: '#09090b', // Color de fondo al abrir (oscuro)
    theme_color: '#2563eb', // Color de la barra de estado (Azul)
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}