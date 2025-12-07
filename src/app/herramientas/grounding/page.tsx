"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Eye, Hand, Ear, Sparkles, CheckCircle2 } from "lucide-react"

// Configuración de las 5 etapas del ejercicio
const STEPS = [
  {
    count: 5,
    id: "sight",
    title: "Cosas que ves",
    verb: "Observa",
    icon: <Eye className="w-12 h-12 text-blue-500" />,
    color: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-600 dark:text-blue-400",
    desc: "Mira a tu alrededor. Nombra 5 cosas que veas ahora mismo."
  },
  {
    count: 4,
    id: "touch",
    title: "Cosas que tocas",
    verb: "Siente",
    icon: <Hand className="w-12 h-12 text-teal-500" />,
    color: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-800",
    text: "text-teal-600 dark:text-teal-400",
    desc: "Toca 4 cosas cerca de ti. La tela de tu ropa, la mesa, tu piel..."
  },
  {
    count: 3,
    id: "sound",
    title: "Cosas que oyes",
    verb: "Escucha",
    icon: <Ear className="w-12 h-12 text-indigo-500" />,
    color: "bg-indigo-50 dark:bg-indigo-900/20",
    border: "border-indigo-200 dark:border-indigo-800",
    text: "text-indigo-600 dark:text-indigo-400",
    desc: "Cierra los ojos un segundo. Identifica 3 sonidos lejanos o cercanos."
  },
  {
    count: 2,
    id: "smell",
    title: "Cosas que hueles",
    verb: "Huele",
    icon: <Sparkles className="w-12 h-12 text-purple-500" />,
    color: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-200 dark:border-purple-800",
    text: "text-purple-600 dark:text-purple-400",
    desc: "Identifica 2 olores. O imagina tus 2 aromas favoritos (café, lluvia...)."
  },
  {
    count: 1,
    id: "taste",
    title: "Cosas que saboreas",
    verb: "Saborea",
    icon: <CheckCircle2 className="w-12 h-12 text-orange-500" />,
    color: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-200 dark:border-orange-800",
    text: "text-orange-600 dark:text-orange-400",
    desc: "1 cosa que puedas saborear. O toma un sorbo de agua."
  }
]

export default function GroundingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  // Inputs controlados para que el usuario sienta que "escribe" (aunque no guardemos)
  // Generamos un objeto vacío inicial
  const [inputs, setInputs] = useState<Record<string, string>>({})

  const activeStep = STEPS[currentStep]

  const handleNext = () => {
    // Limpiamos inputs visualmente para el siguiente paso (opcional)
    setInputs({})
    
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(c => c + 1)
    } else {
      setIsFinished(true)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-950 transition-colors pt-28">
      
      {/* Botón Salir */}
      <div className="absolute top-6 left-6 sm:top-24">
        <Link href="/" className="flex items-center text-sm text-gray-500 hover:text-blue-500 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Salir
        </Link>
      </div>

      <div className="w-full max-w-lg">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`p-8 rounded-3xl shadow-xl border-2 ${activeStep.border} ${activeStep.color} transition-all`}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white dark:bg-zinc-900 rounded-full shadow-sm">
                  {activeStep.icon}
                </div>
              </div>

              <h2 className={`text-3xl font-extrabold text-center mb-2 ${activeStep.text}`}>
                {activeStep.count} {activeStep.title}
              </h2>
              
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 text-lg font-medium">
                {activeStep.desc}
              </p>

              {/* Generamos los inputs dinámicamente según el "count" del paso */}
              <div className="space-y-3 mb-8">
                {Array.from({ length: activeStep.count }).map((_, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={`${activeStep.verb} #${i + 1}...`}
                    className="w-full p-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                    autoFocus={i === 0}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg"
              >
                Listo, siguiente →
              </button>

              <div className="mt-6 flex justify-center gap-2">
                {STEPS.map((_, i) => (
                  <div 
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentStep ? `w-8 ${activeStep.text.replace('text-', 'bg-')}` : "w-2 bg-gray-300 dark:bg-zinc-700"
                    }`} 
                  />
                ))}
              </div>

            </motion.div>
          ) : (
            // PANTALLA FINAL
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center bg-white dark:bg-zinc-900 p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-zinc-800"
            >
              <div className="mb-6 inline-block p-4 bg-green-100 dark:bg-green-900/30 rounded-full">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                ¡Conexión completada!
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Acabas de hackear a tu sistema nervioso para volver al presente. ¿Cómo te sientes?
              </p>

              <div className="grid gap-4">
                <Link href="/">
                  <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                    Volver al inicio
                  </button>
                </Link>
                <Link href="/apoya">
                  <button className="w-full py-4 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors">
                    Apoyar este proyecto
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}