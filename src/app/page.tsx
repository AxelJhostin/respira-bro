'use client'; 

import Link from "next/link";
import QuoteGenerator from "@/components/QuoteGenerator";
import { BookOpen, PlayCircle, Anchor } from "lucide-react"; // Agrega Anchor

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-28 px-6 pb-6 text-center bg-background text-foreground transition-colors duration-300">
      
      <div className="max-w-2xl space-y-8 mt-12 sm:mt-0"> {/* Agregué mt-12 para dar espacio al nav en móvil */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-balance">
          ¿Te sientes como la mierda?
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 text-balance">
          No somos psicólogos. Somos una caja de herramientas para cuando todo pesa demasiado. 
          <br className="hidden sm:block" />
          Sin juicios. Sin cuentas. Gratis.
        </p>

        {/* --- COMPONENTE DE FRASES --- */}
        <QuoteGenerator />

        {/* --- BOTONES PRINCIPALES (ACCIÓN INMEDIATA) --- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Link href="/test" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/20">
              Necesito ayuda ahora
            </button>
          </Link>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-gray-200 dark:bg-zinc-800 text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors">
            Solo estoy mirando
          </button>
        </div>

        <div className="mt-6">
          <Link href="/test-burnout" className="text-sm font-medium text-gray-500 hover:text-orange-500 transition-colors flex items-center justify-center gap-2 underline decoration-dotted underline-offset-4">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            ¿Crees que tienes Burnout? Haz el test específico
          </Link>
        </div>

        {/* --- NUEVA SECCIÓN: RECURSOS ADICIONALES (VISIBLE EN MÓVIL) --- */}
        <div className="pt-12 border-t border-gray-200 dark:border-zinc-800 w-full">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
            O explora a tu ritmo
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Tarjeta BLOG */}
            <Link href="/blog" className="group">
              <div className="p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer text-left">
                <BookOpen className="w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Blog & Guías</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Lecturas cortas para entender lo que sientes.
                </p>
              </div>
            </Link>

            {/* Tarjeta VIDEOS */}
            <Link href="/reflexiones" className="group">
              <div className="p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 hover:border-red-500 dark:hover:border-red-500 transition-all cursor-pointer text-left">
                <PlayCircle className="w-8 h-8 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Zona de Videos</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Reflexiones para ver y desconectar un rato.
                </p>
              </div>
            </Link>

            {/* Tarjeta GROUNDING */}
            <Link href="/herramientas/grounding" className="group">
              <div className="p-6 h-full rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 hover:border-teal-500 dark:hover:border-teal-500 transition-all cursor-pointer text-left">
                <Anchor className="w-8 h-8 text-teal-500 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Grounding 5-4-3-2-1</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Técnica rápida para detener ataques de pánico.
                </p>
              </div>
            </Link>

          </div>
        </div>

      </div>

      <footer className="mt-16 text-sm text-gray-400 pb-6">
        Hecho en Manabí por alguien que te entiende.
      </footer>
    </main>
  );
}