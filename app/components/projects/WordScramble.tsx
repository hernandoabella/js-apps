"use client";

import React, { useState } from "react";

const words = [
  { word: "react", hint: "Biblioteca de UI de JavaScript" },
  { word: "html", hint: "Lenguaje de marcado web" },
  { word: "css", hint: "Estilos visuales para la web" },
  { word: "node", hint: "Entorno de ejecución JS" },
  { word: "redux", hint: "Manejador de estado global" },
];

const scramble = (w: string) => {
  const arr = w.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
};

const WordScramble = () => {
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);

  const current = words[index];
  const scrambled = scramble(current.word);

  const check = () => {
    setResult(guess.trim().toLowerCase() === current.word ? "correct" : "wrong");
  };

  const next = () => {
    setIndex((index + 1) % words.length);
    setGuess("");
    setResult(null);
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="w-full max-w-[240px] space-y-3 text-center">
        <p className="text-2xl font-bold tracking-widest text-[#DE9804]">{scrambled}</p>
        <p className="text-[10px] text-gray-400 italic">Pista: {current.hint}</p>
        <input
          type="text"
          value={guess}
          onChange={e => setGuess(e.target.value)}
          onKeyDown={e => e.key === "Enter" && check()}
          placeholder="Tu respuesta..."
          className="w-full px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#252525] text-gray-800 dark:text-gray-200 placeholder-gray-400 text-center focus:outline-none focus:ring-2 focus:ring-[#DE9804]"
        />
        {result && (
          <p className={`text-xs font-bold ${result === "correct" ? "text-green-500" : "text-red-500"}`}>
            {result === "correct" ? "¡Correcto! 🎉" : "Incorrecto 😅"}
          </p>
        )}
        <div className="flex justify-center gap-2">
          <button onClick={check}
            className="px-4 py-2 text-xs font-bold text-white bg-[#DE9804] rounded-lg hover:bg-[#c88a04] transition-colors">
            Comprobar
          </button>
          <button onClick={next}
            className="px-4 py-2 text-xs font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-[#303030] rounded-lg hover:bg-gray-200 dark:hover:bg-[#404040] transition-colors">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default WordScramble;
