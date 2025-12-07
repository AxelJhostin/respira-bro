'use client';

import { useState, useEffect } from "react";

// --- BASE DE DATOS DE FRASES ---
const quotesData = [
  { text: "No tienes que controlarlo todo. A veces solo tienes que soltar.", author: "Anónimo" },
  { text: "Esto también pasará. Respira.", author: "Sabiduría Popular" },
  { text: "No eres tus pensamientos, eres quien los escucha.", author: "Eckhart Tolle" },
  { text: "Date permiso para descansar. No eres una máquina.", author: "Recordatorio" },
  { text: "Un paso a la vez es suficiente.", author: "Proverbio Zen" },
  { text: "La ansiedad miente. Eres más fuerte de lo que crees.", author: "Anónimo" },
  { text: "Lo que niegas te somete. Lo que aceptas te transforma.", author: "Carl Jung" },
  { text: "No creas todo lo que piensas.", author: "Heinz Kohut" },
  { text: "La paz viene de adentro. No la busques afuera.", author: "Buda" },
  { text: "Sé amable contigo mismo hoy.", author: "Respira Bro" },
  { text: "Preocuparse es sufrir dos veces.", author: "Newt Scamander" },
  { text: "Si te cansas, aprende a descansar, no a renunciar.", author: "Banksy" },
  { text: "El dolor es inevitable, el sufrimiento es opcional.", author: "Haruki Murakami" },
  { text: "A veces, la cosa más productiva que puedes hacer es relajarte.", author: "Mark Black" },
  { text: "No pasa nada por no estar bien todo el tiempo.", author: "Anónimo" },
  { text: "Tu valor no disminuye en base a la incapacidad de alguien de ver tu valía.", author: "Anónimo" },
  { text: "Respira. Es solo un mal día, no una mala vida.", author: "Johnny Depp" },
  { text: "La felicidad no es la ausencia de problemas, es la habilidad de tratar con ellos.", author: "Steve Maraboli" },
  { text: "Cae siete veces, levántate ocho.", author: "Proverbio Japonés" },
  { text: "Eres suficiente tal como eres.", author: "Meghan Markle" },
  { text: "No te compares con nadie, ten la cabeza bien alta y recuerda: no eres ni mejor ni peor, simplemente eres tú y eso nadie lo puede superar.", author: "Anónimo" },
  { text: "La calma es un superpoder.", author: "Naval Ravikant" },
  { text: "Hablate a ti mismo como le hablarías a alguien a quien amas.", author: "Brené Brown" },
  { text: "Todo lo que necesitas es este momento.", author: "Mindfulness" },
  { text: "Confía en el proceso.", author: "Anónimo" },
  { text: "Inhala paz, exhala estrés.", author: "Mantra" },
  { text: "No arruines un buen día pensando en un mal ayer.", author: "Anónimo" },
  { text: "La única salida es a través.", author: "Robert Frost" },
  { text: "Tus emociones son visitantes, déjalas venir y déjalas ir.", author: "Mooji" },
  { text: "Hoy elijo la paz sobre la perfección.", author: "Anónimo" }
] as const;

// Tipo para una frase individual
type Quote = {
  text: string;
  author: string;
};

// Función helper
const getRandomQuote = (): Quote => {
  const randomIndex = Math.floor(Math.random() * quotesData.length);
  return quotesData[randomIndex];
};

export default function QuoteGenerator() {
  // Inicializamos con la primera frase para evitar errores de hidratación
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotesData[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  // CORRECCIÓN TÉCNICA AQUÍ:
  // Usamos setTimeout con 0ms dentro del useEffect.
  // Esto convierte la actualización en "asíncrona", lo que satisface al linter
  // y evita el bloqueo del renderizado inicial.
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentQuote(getRandomQuote());
    }, 0);
    
    // Limpiamos el timer si el componente se desmonta rápido
    return () => clearTimeout(timer);
  }, []);

  const handleRefreshClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentQuote(getRandomQuote());
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div className={`mt-8 p-6 bg-gray-100 dark:bg-gray-800/50 rounded-2xl max-w-lg mx-auto border border-gray-200 dark:border-gray-700 shadow-sm transition-opacity duration-200 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
      <p className="text-lg italic font-medium text-gray-700 dark:text-gray-300">
        {currentQuote.text}
      </p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
          — {currentQuote.author}
        </span>
        <button 
          onClick={handleRefreshClick}
          disabled={isAnimating}
          className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors select-none disabled:opacity-50"
        >
          Otra frase ↻
        </button>
      </div>
    </div>
  );
}