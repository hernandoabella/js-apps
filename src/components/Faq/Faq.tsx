import React from "react";

const Faq = () => {
  return (
    <div class="container mx-auto px-4 py-8">
  <h2 class="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
  <div class="grid gap-4">
    <div class="bg-white shadow rounded-lg p-4">
      <h3 class="text-lg font-bold mb-2">¿Cómo usar JS-APPS?</h3>
      <p class="text-gray-700">1. Encuentra un proyecto de Javascript sugerido para construir usando las categorías provistas en la navegación lateral de JSBeginners. 2. Lea la descripción y haga clic en el proyecto para verlo en vivo en su navegador. 3. Clona Git o descarga el código fuente en tu entorno de desarrollo local. 4. ELIMINE por completo el archivo javascript de origen (generalmente llamado app.js) y luego cree el proyecto Javascript usted mismo. 5. Una vez completado, proporciona un enlace a tu proyecto en la sección de comentarios para que otros puedan darte su opinión y reconocimiento.</p>
    </div>
    <div class="bg-white shadow rounded-lg p-4">
      <h3 class="text-lg font-bold mb-2">¿Por qué JS-APPS?</h3>
      <p class="text-gray-700">Hay tantos recursos de Internet de JavaScript que compiten por tu atención, y hay tantos educadores de JavaScript que te alientan a aprender el framework de JavaScript más nuevo antes de que te sientas cómodo con JavaScript básico. JS-APPS te desafía a que primero crees al menos 100 proyectos de JavaScript de nivel básico, intermedio y avanzado por ti mismo. Si debes ver un video tutorial, miralo para ver cómo se construye el proyecto, pero NO para codificar junto con el instructor. Tu trabajo es codificar el proyecto tú mismo. Solo debes pasar a aprender un nuevo framework o lenguaje cuando hayas completado e implementado al menos 100 proyectos sin seguir un tutorial.</p>
    </div>
    <div class="bg-white shadow rounded-lg p-4">
      <h3 class="text-lg font-bold mb-2">¿Cómo contribuir?</h3>
      <p class="text-gray-700">Si deseas contribuir al proyecto, puedes hacerlo de varias maneras, como sugiriendo nuevos proyectos para agregar a la lista, mejorando el sitio web o proporcionando comentarios sobre cómo hacerlo mejor. Para hacerlo, puedes contactarnos a través de nuestro correo electrónico o dejando un comentario en nuestro sitio web.</p>
    </div>
  </div>
</div>

  );
};

export default Faq;