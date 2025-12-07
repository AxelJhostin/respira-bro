import Link from "next/link"
import { ArrowLeft, Coffee, Heart } from "lucide-react"

export default function SupportPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-950 transition-colors">
      
      {/* Botón Volver */}
      <div className="absolute top-24 left-6">
        <Link href="/" className="flex items-center text-sm text-gray-500 hover:text-blue-500 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver al inicio
        </Link>
      </div>

      <div className="max-w-2xl w-full text-center space-y-8">
        
        {/* Icono animado */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-red-100 dark:bg-red-900/30 blur-xl rounded-full" />
          <Heart className="relative w-16 h-16 text-red-500 mx-auto animate-pulse" fill="currentColor" />
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          ¿Te sirvió de algo esto?
        </h1>

        <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            Hola, soy el desarrollador detrás de <strong>Respira, Bro</strong>.
          </p>
          <p>
            No soy una gran empresa ni una startup de Silicon Valley. Soy un ingeniero de 27 años en Ecuador tratando de construir herramientas que ayuden a la gente a sentirse un poco menos sola o estresada.
          </p>
          <p>
            Este proyecto es 100% gratuito y no tiene anuncios molestos. Si la herramienta de respiración o el test te ayudaron aunque sea 5 minutos hoy, considera invitarme un café.
          </p>
          <p className="font-medium text-blue-600 dark:text-blue-400">
            Eso me ayuda a pagar el servidor y a seguir programando más herramientas.
          </p>
        </div>

        {/* Tarjeta de Donación */}
        <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-sm mt-8">
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Botón PayPal / BuyMeACoffee */}
            {/* REEMPLAZA EL HREF CON TU ENLACE REAL LUEGO */}
            <a 
              href="https://www.paypal.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-xl transition-transform hover:scale-105"
            >
              <Coffee className="w-5 h-5" />
              Invítame un café ($1)
            </a>
          </div>
          
          <p className="text-xs text-gray-400 mt-4">
            (El enlace te llevará a una plataforma de pago segura. No guardamos tus datos).
          </p>
        </div>

      </div>
    </main>
  )
}