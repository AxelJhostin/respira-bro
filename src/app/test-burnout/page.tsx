"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Flame, AlertTriangle, BatteryWarning } from "lucide-react"

// PREGUNTAS ENFOCADAS EN BURNOUT (Cinismo, Agotamiento, Ineficacia)
const questions = [
  {
    id: 1,
    text: "¿Cómo te sientes antes de empezar tu día (trabajo/estudio)?",
    options: [
      { text: "Con energía / Normal", score: 0 },
      { text: "Ya estoy cansado solo de pensarlo", score: 2 },
      { text: "Siento un peso físico en el pecho", score: 3 },
    ],
  },
  {
    id: 2,
    text: "¿Te irritas con facilidad últimamente?",
    options: [
      { text: "No, tengo paciencia", score: 0 },
      { text: "A veces, con cosas tontas", score: 1 },
      { text: "Sí, todo y todos me molestan", score: 3 },
    ],
  },
  {
    id: 3,
    text: "¿Sientes que lo que haces tiene sentido?",
    options: [
      { text: "Sí, me siento útil", score: 0 },
      { text: "Hago lo mínimo para cumplir", score: 2 },
      { text: "No, siento que nada importa", score: 3 },
    ],
  },
  {
    id: 4,
    text: "¿Cómo está tu capacidad de concentración?",
    options: [
      { text: "Me enfoco bien", score: 0 },
      { text: "Me distraigo mucho con el celular", score: 1 },
      { text: "Mi mente está en blanco o nublada", score: 3 },
    ],
  },
  {
    id: 5,
    text: "¿Logras desconectar cuando terminas?",
    options: [
      { text: "Sí, disfruto mi tiempo libre", score: 0 },
      { text: "Me cuesta, sigo pensando en pendientes", score: 2 },
      { text: "No, incluso sueño con problemas", score: 3 },
    ],
  },
]

export default function BurnoutTestPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const handleAnswer = (points: number) => {
    const newScore = score + points
    setScore(newScore)

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsFinished(true)
    }
  }

  // Lógica simple de resultados
  const getResult = () => {
    if (score < 5) return {
      title: "Estás bien (Zona Verde)",
      desc: "Tienes el estrés normal de la vida, pero lo estás manejando. Sigue cuidando tus descansos.",
      icon: <BatteryWarning className="w-12 h-12 text-green-500" />,
      action: "Ver un video relajante",
      link: "/reflexiones"
    }
    if (score < 10) return {
      title: "Alerta Amarilla (Inicio de Burnout)",
      desc: "Estás empezando a 'quemarte'. Tu batería está bajando rápido. Es momento de frenar un poco antes de que empeore.",
      icon: <AlertTriangle className="w-12 h-12 text-yellow-500" />,
      action: "Leer guía sobre Burnout",
      link: "/blog/no-eres-flojo" // Link al artículo que escribimos
    }
    return {
      title: "Zona Roja (Burnout Activo)",
      desc: "Tus sistemas de defensa están agotados. No es 'flojera', es una señal de auxilio de tu cuerpo. Necesitas desconexión radical.",
      icon: <Flame className="w-12 h-12 text-red-500" />,
      action: "Hacer respiración 4-7-8 YA",
      link: "/herramientas/respiracion"
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-orange-50 dark:bg-zinc-950 transition-colors">
      
      <div className="absolute top-6 left-6 sm:top-24">
        <Link href="/" className="flex items-center text-sm text-gray-500 hover:text-orange-600 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Cancelar test
        </Link>
      </div>

      <div className="w-full max-w-md">
        
        {/* Barra de Progreso (Color Naranja para diferenciar) */}
        {!isFinished && (
          <div className="mb-8">
            <div className="text-xs text-orange-600/60 dark:text-orange-400 mb-2 uppercase tracking-widest font-semibold flex justify-between">
              <span>Test de Agotamiento</span>
              <span>{currentStep + 1} / {questions.length}</span>
            </div>
            <div className="h-2 w-full bg-orange-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-orange-500 transition-all duration-500 ease-out"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl border border-orange-100 dark:border-zinc-800"
            >
              <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white leading-snug">
                {questions[currentStep].text}
              </h2>

              <div className="space-y-3">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full text-left p-4 rounded-xl border-2 border-transparent bg-gray-50 dark:bg-zinc-800/50 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-all duration-200 font-medium text-gray-700 dark:text-gray-200"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            // PANTALLA DE RESULTADOS
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-zinc-800"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-50 dark:bg-zinc-800 rounded-full">
                  {getResult().icon}
                </div>
              </div>
              
              <h2 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">
                {getResult().title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                {getResult().desc}
              </p>
              
              <Link href={getResult().link}>
                <button className="w-full bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-transform hover:scale-105 shadow-lg shadow-orange-500/30">
                  {getResult().action}
                </button>
              </Link>

              <Link href="/" className="block mt-6 text-sm text-gray-400 hover:text-gray-600">
                Volver al inicio
              </Link>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}