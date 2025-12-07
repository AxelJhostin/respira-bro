import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { Heart } from "lucide-react"

export function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between p-4 px-6 border-b border-gray-200 dark:border-gray-800 bg-background/50 backdrop-blur-md fixed top-0 z-50">
      
      {/* Logo */}
      <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
        Respira<span className="text-blue-600">.</span>
      </Link>

      <div className="flex items-center gap-4">
        {/* Link de Apoyo - Visible y llamativo */}
        <Link 
          href="/apoya" 
          className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
        >
          <Heart className="w-4 h-4" />
          <span>Apoya el proyecto</span>
        </Link>

        {/* Botón del tema */}
        <ThemeToggle />
      </div>
      
    </nav>
  )
}