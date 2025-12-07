import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Coffee, CreditCard, Heart } from "lucide-react"

export default function SupportPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-28 px-6 pb-6 bg-white dark:bg-zinc-950 transition-colors">
      
      {/* Botón Volver */}
      <div className="absolute top-6 left-6 sm:top-24">
        <Link href="/" className="flex items-center text-sm text-gray-500 hover:text-blue-500 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver al inicio
        </Link>
      </div>

      <div className="max-w-4xl w-full text-center space-y-8 mt-12 sm:mt-0">
        
        {/* Icono animado */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-red-100 dark:bg-red-900/30 blur-xl rounded-full" />
          <Heart className="relative w-16 h-16 text-red-500 mx-auto animate-pulse" fill="currentColor" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          ¿Te sirvió de algo esto?
        </h1>

        <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          <p>
            Este proyecto es 100% gratuito y no tiene anuncios. Si la herramienta de respiración o el test te ayudaron aunque sea 5 minutos hoy, considera apoyar el proyecto.
          </p>
          <p className="font-medium text-blue-600 dark:text-blue-400">
            Tu apoyo mantiene el servidor activo y me permite crear más herramientas.
          </p>
        </div>

        {/* --- GRID DE DONACIONES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left">
          
          {/* OPCIÓN 1: Internacional (Buy Me a Coffee) */}
          <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-sm flex flex-col">
            <div className="mb-auto">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                <Coffee className="w-6 h-6 text-yellow-500" /> Internacional
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
                Apóyame con tarjeta de crédito o débito de forma segura.
              </p>
            </div>
            
            <div className="space-y-4">
              {/* BOTÓN BUY ME A COFFEE */}
              <a 
                href="https://buymeacoffee.com/axelhernand" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Coffee className="w-5 h-5" />
                Invítame un café ($1)
              </a>
            </div>
          </div>

          {/* OPCIÓN 2: Local (Banco Pichincha / QR) */}
          <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-sm flex flex-col">
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                <CreditCard className="w-6 h-6 text-blue-500" /> Ecuador (Pichincha)
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
                Escanea el QR desde tu app <strong>Deuna!</strong> o Banca Móvil. Cero comisiones.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow bg-white dark:bg-black/40 p-6 rounded-2xl overflow-hidden">
              {/* IMAGEN DEL QR */}
              <div className="relative w-48 h-48 shadow-sm rounded-lg overflow-hidden">
                 <Image 
                   src="/qr-pichincha.jpg" 
                   alt="QR Banco Pichincha"
                   fill
                   className="object-cover"
                 />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  Axel
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                  Cuenta de Ahorros<br/>Banco Pichincha
                </p>
              </div>
            </div>
          </div>

        </div>

        <p className="text-xs text-gray-400 mt-8 max-w-md mx-auto">
          *No guardamos ningún dato de tu tarjeta. Todos los pagos son procesados externamente.
        </p>

      </div>
    </main>
  )
}