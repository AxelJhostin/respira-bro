export function VideoCard({ title, videoId, channel }: { title: string, videoId: string, channel: string }) {
  return (
    <div className="flex flex-col gap-3 group">
      {/* Contenedor del Video (Mantiene el formato 16:9 siempre) */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-800 bg-black">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* Info del video */}
      <div>
        <h3 className="font-bold text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Canal: {channel}
        </p>
      </div>
    </div>
  )
}