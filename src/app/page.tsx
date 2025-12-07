import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-background text-foreground transition-colors duration-300">
      
      {/* Sección Principal (Hero) */}
      <div className="max-w-2xl space-y-8">
        
        {/* Título Principal */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-balance">
          ¿Te sientes como la mierda?
        </h1>
        
        {/* Subtítulo */}
        <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 text-balance">
          No somos psicólogos. Somos una caja de herramientas para cuando todo pesa demasiado. 
          <br className="hidden sm:block" />
          Sin juicios. Sin cuentas. Gratis.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          {/* Botón Primario CON LINK */}
          <Link href="/test">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-transform transform hover:scale-105 shadow-lg">
              Necesito ayuda ahora
            </button>
          </Link>
          
          {/* Botón Secundario */}
          <button className="w-full sm:w-auto px-8 py-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
            Solo estoy mirando
          </button>
        </div>
      </div>

      {/* Footer personal */}
      <footer className="absolute bottom-6 text-sm text-gray-400">
        Hecho en Manabí por alguien que te entiende.
      </footer>
    </main>
  );
}