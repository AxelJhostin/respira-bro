import { getSortedPostsData, getPostData } from "../../../lib/posts"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"

// 1. Generación de rutas estáticas (Esto se mantiene igual)
export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

// 2. Definimos el tipo correcto para las Props en Next.js 15/16
type Props = {
  params: Promise<{ slug: string }>
}

// 3. Componente de Página
export default async function Post({ params }: Props) {
  // CORRECCIÓN CRÍTICA: Primero esperamos a que params se resuelva
  const resolvedParams = await params
  const { slug } = resolvedParams

  // Ahora sí usamos el slug seguro
  const postData = await getPostData(slug)

  return (
    <main className="min-h-screen flex flex-col items-center p-6 bg-white dark:bg-zinc-950 transition-colors">
      
      {/* Navegación */}
      <div className="w-full max-w-3xl mb-8 mt-4">
        <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-500 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver al blog
        </Link>
      </div>

      <article className="w-full max-w-3xl">
        
        {/* Encabezado */}
        <header className="mb-10 text-center sm:text-left">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 justify-center sm:justify-start font-mono">
            <Calendar className="w-4 h-4" />
            <time dateTime={postData.date}>{postData.date}</time>
            <span>•</span>
            <span>{postData.author || "Axel"}</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            {postData.title}
          </h1>
        </header>

        {/* CONTENIDO DEL ARTÍCULO */}
        {/* Nota: Asegúrate de haber instalado @tailwindcss/typography para que esto se vea bien */}
        <div 
          className="prose prose-lg prose-blue dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} 
        />
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-zinc-800">
           <p className="text-center text-gray-500 italic">
             ¿Te sirvió esto? <Link href="/apoya" className="text-blue-600 underline">Invítame un café</Link> para seguir escribiendo.
           </p>
        </div>

      </article>
    </main>
  )
}