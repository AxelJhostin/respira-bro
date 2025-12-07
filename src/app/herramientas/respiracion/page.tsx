// src/app/herramientas/respiracion/page.tsx
"use client"

import { useState, useEffect } from "react"
// 1. Importamos 'Variants' para calmar a TypeScript
import { motion, Variants } from "framer-motion" 
import Link from "next/link"
import { ArrowLeft, Play, Pause, RefreshCw } from "lucide-react"

export default function BreathingPage() {
  const [isActive, setIsActive] = useState(false)
  // Definimos explícitamente los tipos de fase permitidos
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale" | "ready">("ready")
  const [text, setText] = useState("¿Listo?")
  const [cycles, setCycles] = useState(0)

  // Tiempos (4-7-8)
  const INHALE_TIME = 4000
  const HOLD_TIME = 7000
  const EXHALE_TIME = 8000

  // Lógica de temporizadores
  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isActive) {
      // Solo manejamos las transiciones automáticas aquí
      if (phase === "inhale") {
        timeout = setTimeout(() => {
          setPhase("hold")
          setText("Mantén el aire...")
        }, INHALE_TIME)
      } else if (phase === "hold") {
        timeout = setTimeout(() => {
          setPhase("exhale")
          setText("Exhala... (Boca)")
        }, HOLD_TIME)
      } else if (phase === "exhale") {
        timeout = setTimeout(() => {
          setPhase("inhale") // Ciclo nuevo
          setText("Inhala... (Nariz)")
          setCycles(c => c + 1)
        }, EXHALE_TIME)
      }
    }

    return () => clearTimeout(timeout)
  }, [isActive, phase])

  // Función para manejar el botón de Play/Pause
  const toggleTimer = () => {
    if (!isActive) {
      // Si estamos empezando desde cero o "ready"
      if (phase === "ready") {
        setPhase("inhale")
        setText("Inhala... (Nariz)")
      }
      setIsActive(true)
    } else {
      // Si pausamos
      setIsActive(false)
      setText("Pausado")
    }
  }

  const resetTimer = () => {
    setIsActive(false)
    setPhase("ready")
    setText("¿Listo?")
    setCycles(0)
  }

  // 2. Tipamos el objeto variants correctamente
  const circleVariants: Variants = {
    ready: { scale: 1, opacity: 0.5 },
    inhale: { 
      scale: 2.5, 
      opacity: 1, 
      transition: { duration: 4, ease: "easeInOut" } 
    },
    hold: { 
      scale: 2.5, 
      opacity: 0.8, 
      transition: { duration: 7, ease: "linear" } 
    },
    exhale: { 
      scale: 1, 
      opacity: 0.5, 
      transition: { duration: 8, ease: "easeInOut" } 
    },
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-950 transition-colors">
      
      {/* Botón Salir */}
      <div className="absolute top-24 left-6">
        <Link href="/" className="flex items-center text-sm text-gray-500 hover:text-blue-500 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Salir
        </Link>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full max-w-lg">
        
        {/* Círculos Animados */}
        <div className="relative flex items-center justify-center w-80 h-80 mb-12">
          {/* Círculo Guía */}
          <div className="absolute w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800" />
          
          {/* Círculo que respira */}
          <motion.div
            variants={circleVariants}
            animate={phase}
            // initial="ready" ayuda a Framer Motion a saber dónde empezar
            initial="ready"
            className="absolute w-32 h-32 rounded-full bg-blue-500/30 backdrop-blur-sm z-10"
          />
          
          {/* Texto Central */}
          <div className="z-20 text-center pointer-events-none">
            <h2 className={`text-2xl font-bold transition-all duration-500 ${phase === 'hold' ? 'scale-110' : ''}`}>
              {text}
            </h2>
          </div>
        </div>

        {/* Controles */}
        <div className="flex gap-6 z-30">
          <button
            onClick={toggleTimer} // Usamos la nueva función controlada
            className="flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
          >
            {isActive ? (
              <> <Pause className="w-5 h-5" /> Pausar </>
            ) : (
              <> <Play className="w-5 h-5 ml-1" /> Empezar </>
            )}
          </button>

          <button
            onClick={resetTimer}
            className="p-4 bg-gray-200 dark:bg-zinc-800 rounded-full hover:bg-gray-300 transition-colors"
            title="Reiniciar"
          >
            <RefreshCw className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-400 font-mono">
          Ciclos completados: {cycles}
        </p>

      </div>
    </main>
  )
}