// src/app/test/page.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

// Las preguntas de tu estrategia
const questions = [
  {
    id: 1,
    text: "¿Cómo dormiste anoche?",
    options: [
      { text: "Bien, descansé", score: 3 },
      { text: "Más o menos", score: 2 },
      { text: "Horrible / No dormí", score: 1 },
    ],
  },
  {
    id: 2,
    text: "¿Cuándo fue la última vez que te sentiste útil?",
    options: [
      { text: "Hoy mismo", score: 3 },
      { text: "Esta semana", score: 2 },
      { text: "No recuerdo", score: 1 },
    ],
  },
  {
    id: 3,
    text: "¿Cómo está tu nivel de energía ahora?",
    options: [
      { text: "Tengo pilas", score: 3 },
      { text: "Sobreviviendo", score: 2 },
      { text: "Agotado totalmente", score: 1 },
    ],
  },
  {
    id: 4,
    text: "¿Qué necesitas en este segundo?",
    options: [
      { text: "Motivación", type: "motivacion" },
      { text: "Calma / Paz", type: "calma" },
      { text: "Desahogarme", type: "desahogo" },
    ],
  },
]

export default function TestPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const handleAnswer = () => {
    // Si hay más preguntas, avanzamos
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Si era la última, terminamos
      setIsFinished(true)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-zinc-950 transition-colors">
      
      {/* Botón para volver (siempre útil) */}
      <div className="absolute top-24 left-6">
        <Link href="/" className="flex items-center text-sm text-gray-500 hover:text-blue-500 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver
        </Link>
      </div>

      <div className="w-full max-w-md">
        
        {/* Barra de Progreso */}
        {!isFinished && (
          <div className="mb-8">
            <div className="text-xs text-gray-400 mb-2 uppercase tracking-widest font-semibold">
              Pregunta {currentStep + 1} de {questions.length}
            </div>
            <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all duration-500 ease-out"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Área de Preguntas (Con animación) */}
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {questions[currentStep].text}
              </h2>

              <div className="space-y-3">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={handleAnswer}
                    className="w-full text-left p-4 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 font-medium text-gray-700 dark:text-gray-300"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            // Pantalla de Resultado (Temporal)
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">¡Gracias por ser honesto!</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Según tus respuestas, te recomendamos empezar con un ejercicio de respiración.
              </p>
              
              {/* AQUÍ AGREGAMOS EL LINK */}
              <Link href="/herramientas/respiracion">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors w-full sm:w-auto">
                  Ir a la Herramienta
                </button>
              </Link>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}