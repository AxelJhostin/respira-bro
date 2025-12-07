import Link from "next/link"
import { ArrowLeft, PlayCircle } from "lucide-react"
import { VideoCard } from "@/components/VideoCard"
import { VIDEOS } from "@/lib/video-list" // <-- Importamos la lista separada

export default function ReflexionesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center p-6 bg-white dark:bg-zinc-950 transition-colors">
      
      {/* Navegación */}
      <div className="w-full max-w-5xl mb-8 mt-4">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-500 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver al inicio
        </Link>
      </div>

      <div className="max-w-5xl w-full space-y-8">
        
        {/* Encabezado */}
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white flex items-center gap-3">
            <PlayCircle className="w-10 h-10 text-red-500" />
            Videos para desconectar
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            A veces no quieres leer ni hacer ejercicios. Solo quieres escuchar a alguien que te entienda.
            Aquí tienes una selección curada.
          </p>
        </div>

        {/* Grid de Videos */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {VIDEOS.map((video, index) => (
            <VideoCard 
              key={index}
              title={video.title}
              videoId={video.videoId}
              channel={video.channel}
            />
          ))}
        </div>

      </div>
    </main>
  )
}