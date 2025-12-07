import Link from "next/link"
import { getSortedPostsData } from "../../lib/posts"
import { ArrowLeft, Calendar, BookOpen } from "lucide-react"

export default function BlogIndex() {
  // AQUÍ ocurre la magia: Llamamos a nuestra función lógica directamente.
  // Al ser un componente de servidor, esto no se ejecuta en el navegador del usuario,
  // sino en el momento de la construcción (Build time).
  const allPostsData = getSortedPostsData()

  return (
    <main className="min-h-screen flex flex-col items-center p-6 bg-white dark:bg-zinc-950 transition-colors">
      
      {/* Botón Volver */}
      <div className="w-full max-w-4xl mb-8 mt-4">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-500 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver al inicio
        </Link>
      </div>

      <div className="max-w-4xl w-full space-y-8">
        
        {/* Encabezado */}
        <div className="text-center sm:text-left space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Lecturas para Crisis
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Guías prácticas, reflexiones honestas y herramientas mentales. 
            Sin relleno, directo al punto.
          </p>
        </div>

        {/* Lista de Artículos (Grid) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allPostsData.map(({ id, date, title, description, author }) => (
            <Link key={id} href={`/blog/${id}`}>
              <article className="h-full p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group">
                
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-mono">
                    <Calendar className="w-3 h-3" />
                    <time dateTime={date}>{date}</time>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {description || "Sin descripción disponible."}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs pt-4 border-t border-gray-200 dark:border-zinc-800 mt-auto">
                   <span className="text-gray-500 font-medium">
                     Por: {author || "Axel"}
                   </span>
                   <span className="flex items-center text-blue-600 dark:text-blue-400 font-bold group-hover:translate-x-1 transition-transform">
                     Leer más <BookOpen className="w-3 h-3 ml-1" />
                   </span>
                </div>

              </article>
            </Link>
          ))}
        </div>

        {allPostsData.length === 0 && (
          <p className="text-center text-gray-500 py-20">
            Aún no hay artículos publicados. Vuelve pronto.
          </p>
        )}

      </div>
    </main>
  )
}