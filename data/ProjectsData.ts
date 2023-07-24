export const projectsData = [
  // {
  //   id: 1,
  //   name: "Redimensionador de texto 📐",
  //   description:
  //     "Personaliza el tamaño del texto según tus necesidades con esta útil aplicación de ajuste.",
  //   category: "Texto",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "https://github.com/hernandoabella/redimensionador-de-texto",
  //   demoLink: "https://effulgent-pasca-40a1c9.netlify.app/",
  //   htmlCode: `
  //     <!-- Código HTML del proyecto Redimensionador de texto -->
  //   `,
  //   cssCode: `
  //     /* Código CSS del proyecto Redimensionador de texto */
  //   `,
  //   jsCode: `
  //     // Código JavaScript del proyecto Redimensionador de texto
  //   `,
  // },
  // {
  //   id: 2,
  //   name: "Carrusel de imágenes 🖼️",
  //   description:
  //     "Disfruta de un carrusel de imágenes versátil y personalizable con desplazamiento automático para mostrar tus fotos de manera impresionante.",
  //   category: "Imagen",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://superb-heliotrope-a182fc.netlify.app/",
  //   htmlCode: `
  //     <!-- Código HTML del proyecto Carrusel de imágenes -->
  //   `,
  //   cssCode: `
  //     /* Código CSS del proyecto Carrusel de imágenes */
  //   `,
  //   jsCode: `
  //     // Código JavaScript del proyecto Carrusel de imágenes
  //   `,
  // },
  {
    id: 3,
    name: "Calificación con emojis 🙂",
    description:
      "Permite que tus usuarios expresen su opinión de manera divertida y sencilla mediante emojis con este componente de calificación único.",
    category: "Emojis",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://phenomenal-florentine-e1bc03.netlify.app/",
    htmlCode: `
      <!-- Código HTML del proyecto Calificación con emojis -->
    `,
    cssCode: `
      /* Código CSS del proyecto Calificación con emojis */
    `,
    jsCode: `
      // Código JavaScript del proyecto Calificación con emojis
    `,
  },
  // {
  //   id: 4,
  //   name: "Contador 🧮",
  //   description:
  //     "Controla fácilmente tus contadores con esta sencilla y práctica aplicación que te permite incrementar, decrementar y reiniciar los valores.",
  //   category: "Contador",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://incredible-boba-57ba5d.netlify.app/",
  //   htmlCode: `<!DOCTYPE html>
  //   <html lang="en">
  //     <head>
  //       <meta charset="UTF-8" />
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //       <title>Contador</title>
  //       <link rel="stylesheet" href="styles.css" />
  //       <link
  //         rel="stylesheet"
  //         href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
  //         integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
  //         crossorigin="anonymous"
  //       />
  //     </head>
  //     <body>
  //       <div id="container">
  //         <div id="numero" class="numero">0</div>
  //         <div class="flexStyle">
  //           <button id="boton2" onclick="restar()">
  //             <i class="fas fa-minus"></i>
  //           </button>
  //           <button id="boton3" onclick="reiniciar()">
  //             <i class="fas fa-redo"></i>
  //           </button>
  //           <button id="boton1" onclick="sumar()">
  //             <i class="fas fa-plus"></i>
  //           </button>
  //         </div>
  //       </div>
  //       <script src="./script.js"></script>
  //     </body>
  //   </html>`,
  //   cssCode: `@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@300&display=swap");

  //   /* Variables */

  //   :root {
  //     --color1: #2ab7ca;
  //     --color2: #fe4a49;
  //     --color3: #585757;
  //   }

  //   body {
  //     font-size: 1.3em;
  //     font-family: "Fraunces", serif;
  //     overflow: hidden;
  //     background: linear-gradient(270deg, #f6d365, #fda085);
  //     background-size: 400% 400%;
  //     -webkit-animation: animacionFondo 6s ease infinite;
  //     -moz-animation: animacionFondo 6s ease infinite;
  //     -o-animation: animacionFondo 6s ease infinite;
  //     animation: animacionFondo 6s ease infinite;
  //   }

  //   #container {
  //     -webkit-backdrop-filter: blur(16px) saturate(180%);
  //     backdrop-filter: blur(16px) saturate(180%);
  //     background-color: rgba(255, 255, 255, 0.75);
  //     border-radius: 12px;
  //     border: 1px solid rgba(209, 213, 219, 0.3);
  //     position: absolute;
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-50%, -50%);
  //     width: 320px;
  //     height: 250px;
  //   }

  //   .flexStyle {
  //     display: flex;
  //     justify-content: space-evenly;
  //     position: relative;
  //     top: 65px;
  //   }

  //   #numero {
  //     font-size: 3.5em;
  //     text-align: center;
  //     user-select: none;
  //     font-weight: bold;
  //     color: var(--color3);
  //     position: relative;
  //     top: 30px;
  //   }

  //   /* Botones */

  //   #boton1,
  //   #boton2,
  //   #boton3 {
  //     padding: 20px;
  //     border-radius: 12px;
  //     cursor: pointer;
  //     transition: 0.4s;
  //     border: none;
  //     outline: none;
  //     position: relative;
  //   }

  //   #boton1:active,
  //   #boton2:active,
  //   #boton3:active {
  //     opacity: 0.9;
  //     transform: translateY(-2px) scale(1.1);
  //   }

  //   #boton1,
  //   #boton2 {
  //     background: #59c77a;
  //     color: #585757;
  //   }

  //   #boton1:hover {
  //     background: var(--color1);
  //     color: #fff;
  //   }

  //   #boton2:hover {
  //     background: var(--color2);
  //     color: #fff;
  //   }

  //   #boton3 {
  //     color: #fff;
  //     background: var(--color3);
  //   }

  //   /* Animaciones */

  //   .animacion,
  //   .animacion2 {
  //     animation: animacion 0.1s;
  //   }

  //   @keyframes animacion {
  //     50% {
  //       transform: scale(1.5);
  //     }
  //   }

  //   @keyframes animacion2 {
  //     50% {
  //       transform: scale(1.5);
  //     }
  //   }

  //   @-webkit-keyframes animacionFondo {
  //     0% {
  //       background-position: 0% 50%;
  //     }
  //     50% {
  //       background-position: 100% 50%;
  //     }
  //     100% {
  //       background-position: 0% 50%;
  //     }
  //   }
  //   @-moz-keyframes animacionFondo {
  //     0% {
  //       background-position: 0% 50%;
  //     }
  //     50% {
  //       background-position: 100% 50%;
  //     }
  //     100% {
  //       background-position: 0% 50%;
  //     }
  //   }
  //   @-o-keyframes animacionFondo {
  //     0% {
  //       background-position: 0% 50%;
  //     }
  //     50% {
  //       background-position: 100% 50%;
  //     }
  //     100% {
  //       background-position: 0% 50%;
  //     }
  //   }
  //   @keyframes animacionFondo {
  //     0% {
  //       background-position: 0% 50%;
  //     }
  //     50% {
  //       background-position: 100% 50%;
  //     }
  //     100% {
  //       background-position: 0% 50%;
  //     }
  //   }`,
  //   jsCode: `// Variables
  //   let contador = 0; // Inicializamos la variable contador en 0
  //   const numero = document.getElementById('numero'); // Obtenemos el elemento con el ID 'numero'
  //   const boton1 = document.getElementById('boton1'); // Obtenemos el elemento con el ID 'boton1'
  //   const boton2 = document.getElementById('boton2'); // Obtenemos el elemento con el ID 'boton2'

  //   const sumar = () => {
  //      removeAnimationClass(); // Elimina las clases 'animacion' y 'animacion2'
  //      setTimeout(() => {
  //         numero.classList.add('animacion'); // Agrega la clase 'animacion' después de 10 milisegundos
  //      }, 10);
  //      contador++; // Incrementa la variable contador
  //      testColor(); // Actualiza el color del número
  //      console.log(contador); // Imprime el valor actual del contador en la consola
  //      numero.innerText = contador; // Actualiza el contenido del elemento 'numero' con el valor de la variable contador
  //      return contador; // Devuelve el valor actual del contador
  //   }

  //   const restar = () => {
  //      removeAnimationClass(); // Elimina las clases 'animacion' y 'animacion2'
  //      setTimeout(() => {
  //         numero.classList.add('animacion2'); // Agrega la clase 'animacion2' después de 10 milisegundos
  //      }, 10);
  //      contador--; // Decrementa la variable contador
  //      testColor(); // Actualiza el color del número
  //      console.log(contador); // Imprime el valor actual del contador en la consola
  //      numero.innerText = contador; // Actualiza el contenido del elemento 'numero' con el valor de la variable contador
  //      return contador; // Devuelve el valor actual del contador
  //   }

  //   // Elimina las clases 'animacion' y 'animacion2'
  //   const removeAnimationClass = () => {
  //      numero.classList.remove('animacion2', 'animacion');
  //   }

  //   const testColor = () => {
  //      if (contador < 0) {
  //         numero.style.color = "var(--color2)"; // Color 'color2' para números negativos
  //      } else if (contador > 0) {
  //         numero.style.color = "var(--color1)"; // Color 'color1' para números positivos
  //      } else {
  //         numero.style.color = '#585757'; // Color '#333' para el número 0
  //      }
  //   }

  //   // Sumar automáticamente
  //   // setInterval(sumar, 1000);

  //   // Restar automáticamente
  //   // setInterval(restar, 1000);

  //   // Reinicia el contador y actualiza el color del número
  //   const reiniciar = () => {
  //      contador = 0; // Reinicia la variable contador a 0
  //      removeAnimationClass(); // Elimina las clases de animación
  //      testColor(); // Actualiza el color del número
  //      console.log(contador); // Imprime el valor reiniciado del contador en la consola
  //      numero.innerText = contador; // Actualiza el contenido del elemento 'numero' con el valor de la variable contador
  //      return contador; // Devuelve el valor reiniciado del contador
  //   }`,
  // },
  // {
  //   id: 5,
  //   name: "Campeón de palabras 🏆",
  //   description: "Este juego te jugar desafía a escribir tantas palabras como puedas en un límite de tiempo.",
  //   category: "Juegos",
  //   difficulty: 3,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://iridescent-fox-bdb4e8.netlify.app/",
  // },
  {
    id: 6,
    name: "Sonido al hacer clic 🔔",
    description:
      "Agrega un toque de interactividad a tu sitio web reproduciendo efectos de sonido encantadores cuando los usuarios hacen clic en los botones.",
    category: "Audio",
    difficulty: 1,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://ephemeral-cheesecake-015964.netlify.app/",
  },
  {
    id: 7,
    name: "Validación de contraseña 🔒",
    description:
      "Asegura la protección de tus usuarios mediante esta aplicación que verifica la fortaleza y validez de las contraseñas ingresadas.",
    category: "Validación",
    difficulty: 3,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://superlative-cupcake-2a9bd7.netlify.app/",
  },
  {
    id: 8,
    name: "Generador de perfil de github 🐱",
    description:
      "Crea perfiles de GitHub llamativos y personalizados con esta aplicación que te ayuda a destacar en la comunidad de desarrolladores.",
    category: "Generador",
    difficulty: 3,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://adorable-custard-09481a.netlify.app/",
  },
  {
    id: 9,
    name: "Cambiar color de fondo 🟩",
    description:
      "Personaliza el aspecto visual de tu sitio web al instante al cambiar el color de fondo de forma fácil y rápida.",
    category: "Color",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://prismatic-seahorse-3f7a5c.netlify.app",
  },
  // {
  //   id: 10,
  //   name: "Carrito de compras 🛒",
  //   description: "Esta aplicación te permite añadir productos a tu carrito de compras.",
  //   category: "Validación",
  //   difficulty: 3,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://sensational-salamander-cf3425.netlify.app",
  // },
  // {
  //   id: 11,
  //   name: "Calculadora 📟",
  //   description: "Realiza cálculos matemáticos precisos y rápidos con esta calculadora intuitiva y funcional.",
  //   category: "Calculadora",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://roaring-speculoos-9b2532.netlify.app",
  // },
  {
    id: 12,
    name: "Calculadora de edad 🎂",
    description:
      "Descubre la edad de una persona con solo ingresar su fecha de nacimiento en esta práctica herramienta de cálculo de edades.",
    category: "Calculadora",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://cool-dodol-d5b2cc.netlify.app",
  },
  // {
  //   id: 13,
  //   name: "Kit de batería 🥁",
  //   description: "Experimenta la emoción de tocar la batería con este divertido kit virtual. ¡Crea ritmos, demuestra tus habilidades y disfruta de la experiencia de ser un baterista virtual!",
  //   category: "Audio",
  //   difficulty: 3,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://dashing-yeot-f69ea3.netlify.app",
  // },
  // {
  //   id: 14,
  //   name: "Reproductor MP3 🎧",
  //   description: "Disfruta de tus canciones favoritas con este reproductor de música en línea que te permite reproducir archivos MP3 con facilidad.",
  //   category: "Audio",
  //   difficulty: 4,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://serene-lamington-5aab02.netlify.app",
  // },
  {
    id: 15,
    name: "Reloj Digital ⌚",
    description:
      "Mantén un seguimiento preciso del tiempo con este reloj digital elegante y fácil de leer que muestra la hora actual en tu navegador.",
    category: "Tiempo",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://ubiquitous-klepon-29f6bc.netlify.app",
  },
  {
    id: 16,
    name: "Cronómetro ⏱️",
    description:
      "Mide el tiempo transcurrido con precisión utilizando este cronómetro digital que te ayuda a contar intervalos y eventos con facilidad.",
    category: "Tiempo",
    difficulty: 3,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://venerable-halva-38027d.netlify.app",
  },
  {
    id: 17,
    name: "Temporizador Pomodoro 🍅",
    description:
      "Aumenta tu productividad utilizando la popular técnica Pomodoro, que divide tu tiempo en bloques enfocados para maximizar tu eficiencia.",
    category: "Tiempo",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://grand-faloodeh-69ef7e.netlify.app",
  },
  {
    id: 18,
    name: "Generador de bromas 😄",
    description:
      "Genera risas y alegría con este divertido generador de bromas que te proporciona chistes y ocurrencias para compartir con tus amigos.",
    category: "Generador",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://chic-douhua-da8067.netlify.app",
  },
  // {
  //   id: 19,
  //   name: "Generador Fibonacci 🔢",
  //   description:
  //     "Explora la secuencia matemática de Fibonacci con este generador que te muestra los números en la famosa sucesión de forma rápida y sencilla.",
  //   category: "Generador",
  //   difficulty: 3,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://frolicking-gingersnap-81eb24.netlify.app",
  // },
  {
    id: 20,
    name: "Generador de contraseñas 🔐",
    description:
      "Crea contraseñas seguras y robustas al instante con esta herramienta que genera combinaciones aleatorias y difíciles de adivinar.",
    category: "Generador",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://verdant-fenglisu-a95152.netlify.app",
  },
  // {
  //   id: 21,
  //   name: "Generador de imágenes 📷",
  //   description:
  //     "Descubre la creatividad ilimitada con este generador de imágenes. ¡Crea composiciones únicas y experimenta con diferentes estilos visuales!",
  //   category: "Validación",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://helpful-hummingbird-e58695.netlify.app",
  // },
  // {
  //   id: 22,
  //   name: "Generador de comidas 🍔",
  //   description:
  //     "¿Necesitas ideas para tu próxima comida? Este generador de comidas te ofrecerá una amplia variedad de opciones deliciosas. ¡Prepárate para disfrutar de una experiencia culinaria única!",
  //   category: "Validación",
  //   difficulty: 3,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://transcendent-tapioca-6f10ff.netlify.app",
  // },
  {
    id: 23,
    name: "Contador de caracteres ✏️",
    description:
      "Mantén un registro preciso del número de caracteres en tus textos con este práctico contador. Útil para escribir mensajes, publicaciones en redes sociales y mucho más.",
    category: "Contador",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://stunning-stroopwafel-ad7ef4.netlify.app",
  },
  {
    id: 24,
    name: "Calculadora de BMI 🏋️‍♂️",
    description:
      "Determina rápidamente el Índice de Masa Corporal (BMI) de una persona con esta calculadora. Obtén información sobre la salud y el bienestar basada en medidas simples.",
    category: "Calculadora",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://preeminent-cendol-ef8bae.netlify.app",
  },
  {
    id: 25,
    name: "Velocidad y precisión de escritura ⌨️",
    description:
      "Esta aplicación te permite evaluar tu velocidad y precisión al escribir. Pon a prueba tus habilidades de mecanografía y comprueba qué tan rápido y preciso puedes escribir diferentes textos.",
    category: "Teclado",
    difficulty: 4,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://dynamic-cajeta-8ab8c6.netlify.app",
  },
  {
    id: 26,
    name: "Calendario 📅",
    description:
      "Mantén un registro organizado de tus eventos, reuniones y actividades diarias con este calendario interactivo. Nunca te pierdas una fecha importante nuevamente.",
    category: "Tiempo",
    difficulty: 3,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://remarkable-macaron-98cbe2.netlify.app",
  },
  {
    id: 27,
    name: "Caja modal 📦",
    description:
      "Agrega interacción y estilo a tu sitio web con una caja modal. Muestra información adicional, imágenes o solicitudes de confirmación de manera elegante y fácil de usar.",
    category: "Caja modal",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://celebrated-beignet-0ab5af.netlify.app",
  },
  {
    id: 28,
    name: "Verificar conexión de red 🌐",
    description:
      "Asegúrate de que tu aplicación o sitio web esté conectado a Internet con esta útil herramienta de verificación de conexión. Mantén a tus usuarios informados y brinda una experiencia sin interrupciones.",
    category: "Validación",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://musical-lily-78ebf4.netlify.app",
  },
  {
    id: 29,
    name: "Validación de email ✉️",
    description:
      "Valida la autenticidad y el formato correcto de las direcciones de correo electrónico con esta herramienta de validación. Asegura una comunicación efectiva y sin errores con tus usuarios.",
    category: "Validación",
    difficulty: 3,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://merry-cajeta-6bc82d.netlify.app",
  },
  {
    id: 30,
    name: "Verificar fuerza de contraseña 🔐",
    description:
      "Evalúa la fortaleza y seguridad de las contraseñas con esta calculadora de fuerza de contraseñas. Ayuda a los usuarios a proteger sus cuentas y datos personales.",
    category: "Validación",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://dancing-granita-c4c594.netlify.app",
  },
  {
    id: 31,
    name: "Detectar navegador 🌐",
    description:
      "Identifica y obtén información sobre el navegador web utilizado por los usuarios de tu sitio web con esta aplicación. Adapta tu contenido y funcionalidad según las características del navegador.",
    category: "Navegador",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://reliable-pithivier-640794.netlify.app",
  },
  {
    id: 32,
    name: "Contador de productos 📊",
    description:
      "Lleva un seguimiento preciso del número de productos en inventario con este contador. Útil para administrar el stock y realizar un seguimiento de las ventas y los niveles de existencias.",
    category: "Contador",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://dazzling-banoffee-acfe6e.netlify.app",
  },
  // {
  //   id: 33,
  //   name: "Piano 🎹",
  //   description:
  //     "Explora tu lado musical y disfruta tocando melodías en este piano virtual. Crea hermosas composiciones musicales y diviértete con diferentes notas y tonos.",
  //   category: "Audio",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://merry-cassata-7cae39.netlify.app",
  // },
  {
    id: 34,
    name: "Visualizador de audio 🎵",
    description:
      "Sumérgete en el mundo de la música con este visualizador de audio. Observa cómo las ondas de sonido cobran vida y sincronizan con la reproducción de tus canciones favoritas.",
    category: "Audio",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://starlit-rolypoly-6197fe.netlify.app",
  },
  {
    id: 35,
    name: "Validación de formulario ✉️",
    description:
      "Asegúrate de que los datos ingresados en tus formularios sean válidos y consistentes con esta herramienta de validación de formularios. Mejora la calidad de los datos y la experiencia del usuario.",
    category: "Validación",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://inquisitive-ganache-d85029.netlify.app",
  },
  {
    id: 36,
    name: "Calculadora de porcentaje 📊",
    description:
      "Realiza cálculos de porcentaje de manera rápida y sencilla con esta calculadora. Perfecta para calcular descuentos, incrementos y otras operaciones relacionadas con porcentajes.",
    category: "Calculadora",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://delightful-salmiakki-6a9f1a.netlify.app",
  },
  {
    id: 37,
    name: "Calculadora de amor ❤️",
    description:
      "Descubre la compatibilidad y el nivel de amor entre dos personas con esta calculadora de amor. Ingresa los nombres y descubre si están destinados a estar juntos.",
    category: "Calculadora",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://resplendent-fenglisu-02a5f7.netlify.app",
  },
  {
    id: 38,
    name: "Semáforo 🚦",
    description:
      "Simula un semáforo con esta aplicación interactiva. Aprende sobre los diferentes estados y tiempos de un semáforo y experimenta cómo cambian las luces en respuesta a tus acciones.",
    category: "Simulación",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://inspiring-croissant-aaea4d.netlify.app",
  },
  {
    id: 39,
    name: "Combinación de colores 🎨",
    description:
      "Explora diferentes combinaciones de colores y descubre qué colores funcionan bien juntos con esta herramienta de combinación de colores. Útil para diseñadores y artistas.",
    category: "Color",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://endearing-selkie-58973a.netlify.app",
  },
  {
    id: 40,
    name: "Juego del tesoro 🏴‍☠️",
    description:
      "Embárcate en una emocionante búsqueda del tesoro con este juego interactivo. Descubre pistas, resuelve acertijos y encuentra el tesoro oculto. ¡Diviértete en esta aventura virtual!",
    category: "Juegos",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://polite-florentine-9fc12a.netlify.app",
  },
  {
    id: 41,
    name: "Juego del ahorcado 💀",
    description:
      "Adivina la palabra oculta antes de que se complete el dibujo del ahorcado en este emocionante juego clásico. Pon a prueba tu vocabulario y habilidades de deducción mientras intentas adivinar la palabra con la menor cantidad de intentos posible.",
    category: "Juegos",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://willowy-semolina-6fa82a.netlify.app",
  },
  // {
  //   id: 42,
  //   name: "Juego de asteroides 🚀",
  //   description:
  //     "Embárcate en una aventura espacial llena de acción y emoción en este desafiante juego de asteroides. Pilota tu nave espacial y esquiva los peligrosos asteroides mientras intentas llegar lo más lejos posible. Pon a prueba tus reflejos y habilidades de navegación para alcanzar nuevas puntuaciones récord.",
  //   category: "Juegos",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://rainbow-sunflower-0309dd.netlify.app",
  // },
  {
    id: 43,
    name: "Adivina el número 🔢",
    description:
      "Ponte a prueba en este divertido juego de adivinanzas numéricas. Intenta adivinar el número secreto generado aleatoriamente dentro de un rango específico. Utiliza pistas y tu intuición para encontrar la respuesta correcta. ¿Tienes lo necesario para descubrir el número en el menor número de intentos posible?",
    category: "Juegos",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#wwwwdaaaaawssdd",
    demoLink: "https://dynamic-empanada-7e232f.netlify.app",
  },
  {
    id: 44,
    name: "Adivina el color 🎨",
    description:
      "Demuestra tus habilidades para reconocer colores en este entretenido juego de adivinanzas. Se te mostrará un color en pantalla y deberás adivinar cuál es su nombre. Cuanto más rápido aciertes, mayor será tu puntuación. ¡Diviértete explorando el fascinante mundo de los colores!",
    category: "Juegos",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://profound-valkyrie-179f94.netlify.app",
  },
  {
    id: 45,
    name: "Adivina la palabra 📚",
    description:
      "Demuestra tu habilidad lingüística en este desafiante juego de adivinanzas de palabras. Se te presentará una serie de imágenes y deberás adivinar la palabra que representa cada una de ellas. Pon a prueba tu vocabulario y conocimientos mientras te diviertes tratando de adivinar todas las palabras correctamente.",
    category: "Juegos",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://keen-mousse-cca4ea.netlify.app",
  },
  {
    id: 46,
    name: "Calculadora de propinas 💰",
    description:
      "Calcula rápidamente la propina adecuada con esta práctica calculadora. Ingresa el monto de la cuenta y selecciona el porcentaje de propina que deseas dejar. Obtén de inmediato el monto total a pagar, incluyendo la propina. Facilita tus cálculos y asegúrate de dejar propinas justas en cualquier situación.",
    category: "Calculadora",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://stunning-malabi-694d5f.netlify.app",
  },
  {
    id: 47,
    name: "Reloj análogo ⏰",
    description:
      "Observa el paso del tiempo de forma clásica con este reloj análogo virtual. Admira la elegancia de las manecillas en movimiento y verifica rápidamente la hora actual. Un reloj sencillo y funcional que te ayudará a mantener el control del tiempo en cualquier momento y lugar.",
    category: "Tiempo",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://zesty-begonia-4a6189.netlify.app",
  },
  {
    id: 48,
    name: "Personaliza el loro 🦜",
    description:
      "Diviértete personalizando a un adorable loro en esta entretenida aplicación interactiva. Cambia el plumaje, el pico y los accesorios del loro para crear tu propia combinación única. Muestra tu creatividad y comparte tu loro personalizado con tus amigos.",
    category: "Entretenimiento",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://gleeful-khapse-2bd1d3.netlify.app",
  },
  {
    id: 49,
    name: "Tic Tac Toe ⭕❌",
    description:
      "Disfruta del clásico juego de tres en raya en esta versión en línea. Juega contra la computadora o reta a un amigo para ver quién puede colocar tres símbolos en línea primero. Pon a prueba tu estrategia y lógica en este divertido desafío que nunca pasa de moda.",
    category: "Juegos",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://dreamy-treacle-14c1b6.netlify.app",
  },
  {
    id: 51,
    name: "Bot de charla 🤖💬",
    description:
      "Interactúa con este bot inteligente y descubre cómo puede responder a tus preguntas e iniciar conversaciones interesantes. ¡Una experiencia de chat única!",
    category: "Chat",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://stirring-sopapillas-c0c8a9.netlify.app",
  },
  // {
  //   id: 52,
  //   name: "Generador de degradados 🌈",
  //   description:
  //     "Crea hermosos degradados de colores con esta aplicación fácil de usar. Personaliza y experimenta con diferentes combinaciones de colores para obtener resultados impresionantes.",
  //   category: "Tiempo",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://candid-torrone-b66209.netlify.app",
  // },
  // {
  //   id: 53,
  //   name: "Piedra, papel o tijeras ✊🖐✌️",
  //   description:
  //     " ¡Desafía a la computadora en este clásico juego de piedra, papel o tijeras! Pon a prueba tu suerte y habilidades estratégicas para derrotar a tu oponente virtual.",
  //   category: "Tiempo",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://loquacious-paletas-2bfd28.netlify.app",
  // },
  // {
  //   id: 54,
  //   name: "Fiesta de halloween 🎃",
  //   description:
  //     "Sumérgete en el espíritu de Halloween con esta aplicación llena de diversión y emocionantes actividades temáticas. Disfruta de juegos, disfraces virtuales y más sorpresas espeluznantes.",
  //   category: "Halloween",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://keen-duckanoo-b9f982.netlify.app",
  // },
  {
    id: 55,
    name: "Aplicacion meteorologica ☀️🌦️",
    description:
      "Mantente informado sobre las condiciones climáticas actuales y pronósticos precisos con esta aplicación meteorológica intuitiva. Obtén información detallada sobre temperatura, humedad, viento y más.",
    category: "Tiempo",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://heartfelt-caramel-695b45.netlify.app",
  },
  {
    id: 56,
    name: "Contador de año nuevo 🎉",
    description:
      "¡Prepárate para la cuenta regresiva del Año Nuevo con este contador interactivo! Mide el tiempo que falta para la medianoche y celebra la llegada del nuevo año con estilo.",
    category: "Contador",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://sprightly-cactus-3fbf33.netlify.app",
  },
  {
    id: 57,
    name: "Significado de tu nombre 📜",
    description:
      "Descubre el significado oculto detrás de tu nombre con esta aplicación intrigante. Explora el origen, las características y curiosidades asociadas a tu nombre personal.",
    category: "Entretenimiento",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://silly-fox-ccdfe8.netlify.app",
  },
  // {
  //   id: 58,
  //   name: "Arrastra y suelta 🖱️🖼️",
  //   description:
  //     "on a prueba tu habilidad y destreza con esta divertida aplicación de arrastrar y soltar. Completa desafíos y resuelve puzzles moviendo elementos en la pantalla.",
  //   category: "Entretenimiento",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://heroic-swan-76e763.netlify.app",
  // },
  {
    id: 59,
    name: "Captura al emoji 🎯",
    description:
      "Atrapa rápidamente los emojis que aparecen en la pantalla en esta emocionante carrera contra el tiempo. Demuestra tus reflejos y precisión en esta adictiva aplicación de captura de emojis.",
    category: "Juegos",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://tangerine-starship-960b72.netlify.app",
  },
  {
    id: 60,
    name: "Aplicación de recetas 🍽️",
    description:
      "Explora una amplia colección de deliciosas recetas con esta aplicación culinaria. Encuentra inspiración para cocinar platos sabrosos y sorprende a tus seres queridos con nuevas creaciones gastronómicas.",
    category: "Recetas",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://monumental-otter-7b41c9.netlify.app",
  },

  {
    id: 61,
    name: "Presupuesto semanal",
    description:
      "Organiza tus finanzas con esta práctica aplicación que te permite realizar un seguimiento de tus gastos y calcular tu presupuesto semanal. Mantén tus finanzas bajo control de manera fácil y eficiente.",
    category: "Finanzas",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://glittery-cendol-b90697.netlify.app",
  },
  {
    id: 62,
    name: "Evento keycode",
    description:
      "Explora el mundo de los eventos de teclado con esta aplicación interactiva. Observa y registra los códigos de teclas generados por tus pulsaciones y descubre cómo se maneja la interacción de teclado en tiempo real.",
    category: "Teclado",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://elegant-starlight-518463.netlify.app",
  },
  {
    id: 63,
    name: "Entrenador matemático",
    description:
      "Mejora tus habilidades matemáticas con este práctico entrenador. Practica operaciones básicas, resuelve problemas desafiantes y pon a prueba tus conocimientos matemáticos en un entorno interactivo.",
    category: "Matemáticas",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://effulgent-bombolone-bde7e9.netlify.app",
  },
  // {
  //   id: 64,
  //   name: "Ajedrez",
  //   description:
  //     "Sumérgete en el fascinante mundo del ajedrez con esta aplicación. Juega contra la computadora o reta a tus amigos en partidas estratégicas. Mejora tus habilidades y disfruta de este juego milenario.",
  //   category: "Juegos 🎮",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://earnest-beijinho-8a8f4a.netlify.app",
  // },
  {
    id: 65,
    name: "Lanzamiento de moneda",
    description:
      "Toma decisiones al azar con esta aplicación de lanzamiento de moneda virtual. Simula los resultados de lanzamientos de moneda y deja que el destino tome las riendas. Perfecto para juegos y toma de decisiones aleatorias.",
    category: "Juegos",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://gilded-syrniki-b834d6.netlify.app",
  },
  {
    id: 66,
    name: "Carrusel de producto",
    description:
      "Crea un atractivo carrusel de productos con esta aplicación personalizable. Muestra tus productos de manera elegante y permite a los usuarios explorar diferentes opciones y detalles de cada artículo.",
    category: "Slider",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://frolicking-churros-79d066.netlify.app",
  },
  {
    id: 67,
    name: "Convertidor de altura",
    description:
      "Convierte medidas de altura de manera rápida y sencilla con este práctico convertidor. Cambia entre diferentes unidades de medida y obtén resultados precisos en centímetros, pulgadas, pies y más.",
    category: "Convertidor",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://tangerine-palmier-3c8427.netlify.app",
  },
  {
    id: 68,
    name: "Tabla de billonarios",
    description:
      "Explora el fascinante mundo de los billonarios con esta tabla interactiva. Descubre quiénes son las personas más ricas del mundo, sus fortunas y las industrias en las que han acumulado su riqueza.",
    category: "Tabla",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://sunny-cajeta-5dd982.netlify.app",
  },
  {
    id: 69,
    name: "Tablero de colores",
    description:
      "Crea combinaciones de colores llamativas y experimenta con esquemas de colores utilizando este tablero interactivo. Encuentra inspiración para tus proyectos de diseño y descubre cómo se ven las combinaciones de colores en acción.",
    category: "Juegos 🎮",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://classy-gumption-7892ee.netlify.app",
  },
  // {
  //   id: 70,
  //   name: "Ruleta giratoria",
  //   description:
  //     "Haz girar la ruleta y añade emoción a tus juegos y actividades con esta aplicación interactiva. Personaliza los sectores de la ruleta y observa cómo gira para seleccionar al azar un ganador, una pregunta o cualquier otra opción.",
  //   category: "Juegos",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://stirring-melomakarona-c1163c.netlify.app",
  // },
  {
    id: 71,
    name: "Reproductor de música",
    description:
      "Disfruta de tu música favorita con este reproductor de música intuitivo y elegante. Explora tus canciones, crea listas de reproducción personalizadas y sumérgete en una experiencia auditiva excepcional.",
    category: "Audio",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://cosmic-pothos-f4f82a.netlify.app",
  },
  // {
  //   id: 72,
  //   name: "Bueno barato rápido",
  //   description:
  //     "Tomar decisiones puede ser difícil, pero esta aplicación te ayuda a elegir entre tres opciones. Ingresa tus preferencias y descubre la mejor opción para ti: ¿Bueno, barato o rápido? Encuentra el equilibrio perfecto para tus necesidades.",
  //   category: "Extra",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://luminous-pasca-e1ac68.netlify.app",
  // },
  {
    id: 73,
    name: "Aplicación de examen",
    description:
      "Prepárate para tus exámenes con esta útil aplicación. Crea y administra exámenes personalizados, realiza un seguimiento de tu progreso y mejora tus habilidades en diversas áreas. Obtén la confianza que necesitas para tener éxito.",
    category: "Examen",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://lovely-melba-7ff746.netlify.app",
  },
  {
    id: 74,
    name: "Buscador de mascotas",
    description:
      "Encuentra a tu compañero peludo perfecto con este buscador de mascotas. Explora una amplia variedad de perros, gatos y otras mascotas disponibles para adopción. Ayuda a estas adorables criaturas a encontrar un hogar amoroso.",
    category: "Buscador",
    difficulty: 3,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://sparkly-gecko-315dcf.netlify.app",
  },
  {
    id: 75,
    name: "Buscador de imágenes",
    description:
      "Explora el vasto mundo de las imágenes con este buscador interactivo. Encuentra imágenes de alta calidad sobre cualquier tema que desees. Amplía tus horizontes visuales y descubre nuevas inspiraciones.",
    category: "Buscador",
    difficulty: 3,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://luminous-sopapillas-eb83a2.netlify.app",
  },
  {
    id: 76,
    name: "Búsqueda expandible",
    description:
      "Simplifica tus búsquedas con esta práctica aplicación. Realiza búsquedas y obtén resultados expandibles que proporcionan información adicional sin tener que abandonar la página de resultados. Ahorra tiempo y mejora tu eficiencia.",
    category: "Buscador",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://spiffy-brioche-4c4560.netlify.app",
  },
  {
    id: 77,
    name: "Aplicación de relajación 😌",
    description:
      "Escapa del estrés diario y encuentra la calma con esta aplicación de relajación. Disfruta de sonidos relajantes, meditaciones guiadas y actividades tranquilas que te ayudarán a restablecer el equilibrio y la paz interior.",
    category: "Relajación",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://roaring-klepon-843d7b.netlify.app",
  },
  {
    id: 78,
    name: "Tasa de cambio",
    description:
      "Realiza conversiones rápidas y precisas entre diferentes tasas de cambio con esta práctica calculadora. Mantente al día con las fluctuaciones del mercado y realiza cálculos en tiempo real para diferentes monedas y tipos de cambio.",
    category: "Finanzas",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://exquisite-maamoul-2036ef.netlify.app",
  },
  // {
  //   id: 79,
  //   name: "Aplicación de recetas",
  //   description:
  //     "Descubre nuevas recetas y mejora tus habilidades culinarias con esta aplicación de recetas interactiva. Explora una amplia colección de platos, encuentra inspiración y sigue instrucciones detalladas para crear deliciosas comidas en casa.",
  //   category: "Calculadora 🧮",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://cool-snickerdoodle-cea8eb.netlify.app",
  // },
  {
    id: 81,
    name: "Calculadora BMI 🧮",
    description:
      "Calcula tu índice de masa corporal (IMC) y obtén una visión general de tu salud y condición física. Esta calculadora te ayuda a evaluar tu peso en relación con tu altura y proporciona información útil para mantener un estilo de vida saludable.",
    category: "Calculadora",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://celebrated-kashata-440d51.netlify.app",
  },
  // {
  //   id: 83,
  //   name: "Sistema para ordenar pizzas",
  //   description:
  //     "Disfruta de una experiencia personalizada al ordenar pizzas con este sistema intuitivo. Selecciona tus ingredientes favoritos, el tamaño de la pizza y personaliza tu pedido. ¡Satisface tus antojos y disfruta de una deliciosa pizza hecha a tu medida!",
  //   category: "Extra",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://sage-alpaca-2f462c.netlify.app",
  // },
  {
    id: 84,
    name: "Acordeón",
    description:
      "Explora información y contenido de manera interactiva con este acordeón. Con un diseño atractivo y fácil de usar, puedes expandir y contraer secciones para acceder a detalles adicionales. Organiza y muestra información de manera efectiva y elegante.",
    category: "Extra",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://cheerful-muffin-886995.netlify.app",
  },
  {
    id: 85,
    name: "Reserva de asientos para películas",
    description:
      "Disfruta de una experiencia de cine personalizada con esta aplicación de reserva de asientos. Explora la selección de películas, elige tus asientos favoritos en el cine y asegura tu lugar para disfrutar de una película en la comodidad de una butaca reservada.",
    category: "Extra",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://silver-jelly-e671f7.netlify.app",
  },
  {
    id: 86,
    name: "Lista de libros",
    description:
      "Organiza y gestiona tu colección de libros con esta práctica aplicación. Registra tus libros favoritos, lleva un seguimiento de los libros que has leído y descubre nuevas recomendaciones. Mantén tu pasión por la lectura al día.",
    category: "Extra",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://gilded-haupia-ce5dab.netlify.app",
  },
  // {
  //   id: 87,
  //   name: "Aplicación de notas",
  //   description:
  //     "Mantén tus pensamientos organizados y toma notas fácilmente con esta aplicación de notas. Captura tus ideas, crea listas y realiza un seguimiento de tus tareas pendientes. Mantén tu vida digital en orden y nunca olvides una idea importante.",
  //   category: "Calculadora 🧮",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://luminous-malabi-2e438f.netlify.app",
  // },
  {
    id: 88,
    name: "Aplicación de notificaciones",
    description:
      "Mantente actualizado y nunca te pierdas información importante con esta aplicación de notificaciones. Recibe alertas y avisos en tiempo real sobre eventos, noticias y actualizaciones relevantes. Mantén tu dedo en el pulso de lo que está sucediendo a tu alrededor.",
    category: "Extra",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://classy-alfajores-46d91d.netlify.app",
  },
  // {
  //   id: 89,
  //   name: "Aplicación de películas",
  //   description:
  //     "Explora el mundo del cine y descubre nuevas películas con esta aplicación interactiva. Obtén información detallada sobre películas populares, consulta reseñas, mira trailers y mantente al día con las últimas novedades de la industria cinematográfica.",
  //   category: "Calculadora 🧮",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://lucent-paletas-9bc58d.netlify.app",
  // },
  {
    id: 90,
    name: "Calculadora de préstamos",
    description:
      "Realiza cálculos precisos y planifica tus préstamos con esta calculadora financiera. Obtén una visión clara de los pagos mensuales, las tasas de interés y el período de tiempo necesario para pagar un préstamo. Toma decisiones financieras informadas y administra tu deuda de manera efectiva.",
    category: "Calculadora",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://heroic-salamander-1c20f4.netlify.app",
  },
  {
    id: 92,
    name: "Contenedor arrastrable",
    description:
      "Organiza tu contenido de manera intuitiva y fácil con este contenedor arrastrable. Arrastra y suelta elementos para reorganizarlos, personaliza tu interfaz y optimiza tu flujo de trabajo. Simplifica la gestión de elementos y mejora tu productividad.",
    category: "Extra",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://lustrous-bubblegum-d531c4.netlify.app",
  },
  {
    id: 93,
    name: "Control de rango",
    description:
      "Administra y controla rangos de valores con esta aplicación intuitiva. Establece límites y restricciones para garantizar que tus valores se mantengan dentro de un rango específico. Facilita el seguimiento y la gestión de variables numéricas.",
    category: "Controlador",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://lively-blancmange-a00ba0.netlify.app",
  },
  {
    id: 94,
    name: "Convertidor de peso",
    description:
      "Convierte fácilmente entre diferentes unidades de peso con este convertidor. Transforma kilogramos a libras, gramos a onzas y mucho más. Simplifica tus cálculos de peso y obtén resultados precisos en segundos.",
    category: "Convertidor",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://chic-khapse-13d3fe.netlify.app",
  },
  {
    id: 96,
    name: "Temporizador de cuenta regresiva",
    description:
      "Establece y controla el tiempo con este temporizador de cuenta regresiva. Ya sea que estés realizando un seguimiento del tiempo para un proyecto o esperando un evento especial, este temporizador te mantendrá informado y te recordará cuánto tiempo queda.",
    category: "Tiempo",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://melodic-cendol-1ddcb3.netlify.app",
  },
  {
    id: 97,
    name: "Lista de tareas",
    description:
      "Organiza tus tareas y haz un seguimiento de tu lista de quehaceres con esta aplicación de lista de tareas. Agrega, edita y marca tareas como completadas para mantener un registro claro de tus actividades diarias. Aumenta tu productividad y mantén todo bajo control.",
    category: "Extra",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://meek-souffle-785242.netlify.app",
  },
  {
    id: 98,
    name: "Diccionario",
    description:
      "Explora y busca palabras en este práctico diccionario en línea. Encuentra definiciones, sinónimos, antónimos y ejemplos de uso para ampliar tu vocabulario y mejorar tus habilidades lingüísticas. Obtén información detallada sobre las palabras que te interesan.",
    category: "Extra",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://taupe-granita-e7a249.netlify.app",
  },
  {
    id: 99,
    name: "Autenticación con contraseña de un solo uso",
    description:
      "Asegura tus aplicaciones y sistemas con una autenticación adicional mediante contraseñas de un solo uso. Genera contraseñas únicas que expiran después de su uso, proporcionando una capa adicional de seguridad para tus usuarios. Protege tu información confidencial.",
    category: "Contraseña",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://lustrous-beignet-a24a47.netlify.app",
  },
  {
    id: 101,
    name: "Calculador de fechas",
    description:
      "Realiza cálculos y operaciones con fechas con esta práctica calculadora. Suma o resta días, semanas, meses o años a una fecha determinada, calcula la diferencia entre dos fechas y mucho más. Simplifica tus tareas relacionadas con fechas y optimiza tu flujo de trabajo.",
    category: "Calculadora",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://charming-rabanadas-51a703.netlify.app",
  },
  {
    id: 102,
    name: "Convertir Decimal a binario",
    description:
      "Convierte números decimales a su equivalente en sistema binario con esta útil herramienta. Realiza conversiones precisas y obtén resultados rápidamente. Aprende sobre el sistema binario y su aplicación en el campo de la informática.",
    category: "Convertidor",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://tubular-brioche-5a2bbf.netlify.app",
  },
  {
    id: 103,
    name: "Detectar tecla",
    description:
      "Obtén información sobre las teclas que se presionan en tu teclado con esta aplicación de detección de teclas. Realiza un seguimiento de las teclas presionadas y muestra detalles como el código de tecla y el carácter correspondiente. Útil para el desarrollo de aplicaciones y juegos basados en teclado.",
    category: "Teclado",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://celebrated-taffy-b65b13.netlify.app",
  },
  // {
  //   id: 104,
  //   name: "Lista ordenable con arrastrar y soltar",
  //   description:
  //     "Organiza tus elementos de manera intuitiva con esta lista ordenable. Arrastra y suelta elementos para cambiar su orden y reorganizar tu contenido. Simplifica la gestión de listas y mejora la experiencia del usuario al permitirles personalizar su disposición.",
  //   category: "Extra",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://astounding-chimera-95f2bf.netlify.app",
  // },
  {
    id: 105,
    name: "Generador de QR",
    description:
      "Crea códigos QR personalizados con esta herramienta generadora de QR. Ingresa el contenido deseado y genera un código QR único que puedes usar en diversos contextos, como promociones, publicidad o compartir información de contacto.",
    category: "Generador",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://dancing-alfajores-da444c.netlify.app",
  },
  {
    id: 106,
    name: "Generador de Lorem Ipsum",
    description:
      "Crea texto de relleno con este generador de Lorem Ipsum. Obtén párrafos de texto aleatorio que se pueden utilizar para rellenar diseños, maquetas y prototipos. Facilita el proceso de diseño al tener contenido simulado para visualizar el aspecto final.",
    category: "Generador",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://unique-scone-74ef39.netlify.app",
  },
  {
    id: 107,
    name: "Efecto de escritura",
    description:
      "Agrega un efecto de escritura animada a tu texto con esta aplicación. Crea una experiencia visualmente atractiva al mostrar el texto como si se estuviera escribiendo en tiempo real. Personaliza la velocidad, el estilo y más para lograr el efecto deseado.",
    category: "Extra",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://luminous-maamoul-f1cc93.netlify.app",
  },
  // {
  //   id: 105,
  //   name: "Convertidor de texto a voz",
  //   description: "Esta aplicación te permite contar el número de productos.",
  //   category: "Calculadora",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://visionary-kleicha-fb4329.netlify.app",
  // },
  // {
  //   id: 106,
  //   name: "Encuesta de satisfacción",
  //   description:
  //     "Esta aplicación te permite crear y realizar encuestas de satisfacción para obtener comentarios y opiniones de los usuarios.",
  //   category: "Extra",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://voluble-brigadeiros-8aa9a3.netlify.app",
  // },
  // {
  //   id: 107,
  //   name: "Filtro de usuarios",
  //   description:
  //     "Esta aplicación te permite filtrar y buscar usuarios en una lista según diferentes criterios.",
  //   category: "Extra",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://gleeful-kangaroo-54fa72.netlify.app",
  // },
  // {
  //   id: 108,
  //   name: "Fuerza de contraseña con imagen",
  //   description: "Esta aplicación evalúa la fortaleza de una contraseña y muestra una imagen correspondiente al nivel de seguridad.",
  //   category: "Contraseña",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://effortless-sunflower-88f50b.netlify.app",
  // },
  {
    id: 109,
    name: "Generador de animales",
    description:
      "Esta aplicación genera imágenes y descripciones de animales de forma aleatoria.",
    category: "Generador",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://monumental-crostata-6757f4.netlify.app",
  },
  // {
  //   id: 110,
  //   name: "2048 Simple",
  //   description: "Juega al clásico juego 2048 en una versión simplificada.",
  //   category: "Juegos",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://storied-malabi-1ab6c4.netlify.app",
  // },
  // {
  //   id: 111,
  //   name: "Tarjetas de memoria",
  //   description: "Esta aplicación te permite contar el número de productos.",
  //   category: "Calculadora",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://prismatic-sprite-847e80.netlify.app",
  // },
  {
    id: 112,
    name: "Contador ascendente",
    description:
      "Una aplicación que cuenta de forma ascendente a partir de un número inicial.",
    category: "Contador",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://lovely-pavlova-2ac548.netlify.app",
  },
  {
    id: 112,
    name: "Mostrar/ocultar contraseña",
    description:
      "Una aplicación que permite mostrar u ocultar contraseñas en campos de entrada.",
    category: "Contraseña",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://gorgeous-mandazi-c9fb8b.netlify.app",
  },
  // {
  //   id: 113,
  //   name: "Invasores del espacio",
  //   description: "Juego clásico de invasores espaciales en el que debes defender la Tierra de los extraterrestres.",
  //   category: "Juegos",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://gregarious-jalebi-369f4f.netlify.app",
  // },
  {
    id: 114,
    name: "Golpea al topo",
    description:
      "Juego en el que debes golpear topos que aparecen aleatoriamente en la pantalla.",
    category: "Juegos",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://dulcet-sawine-04216d.netlify.app",
  },
  {
    id: 115,
    name: "Generador de color",
    description:
      "Esta aplicación genera colores de forma aleatoria y te muestra su código hexadecimal.",
    category: "Generador",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://timely-bienenstitch-7158d3.netlify.app",
  },
  {
    id: 116,
    name: "Contador de teclas",
    description:
      "Esta aplicación cuenta cuántas teclas has presionado en tiempo real.",
    category: "Contador",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://resplendent-elf-6a61c1.netlify.app",
  },
  // {
  //   id: 117,
  //   name: "Grabar la pantalla",
  //   description:
  //     "Esta aplicación te permite grabar la pantalla de tu dispositivo.",
  //   category: "Video",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://effortless-boba-be7bce.netlify.app",
  // },
  {
    id: 118,
    name: "Indicador de pasos",
    description:
      "Esta aplicación registra y muestra el número de páginas que has navegado en un sitio web específico. Te permite llevar un seguimiento de tus visitas y exploración en la página.",
    category: "Contador",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://benevolent-gnome-e33a30.netlify.app",
  },
  {
    id: 119,
    name: "Tetris",
    description:
      "Juega al clásico juego Tetris y trata de encajar las piezas correctamente.",
    category: "Juegos",
    difficulty: 4,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://bespoke-dolphin-382735.netlify.app",
  },
  {
    id: 120,
    name: "Juego de la serpiente 🐍",
    description:
      "Juega al clásico juego de la serpiente, controlando el movimiento y evitando colisionar con los bordes y tu propio cuerpo.",
    category: "Juegos",
    difficulty: 3,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://effervescent-souffle-601d53.netlify.app",
  },
  {
    id: 121,
    name: "Juego de memoria",
    description:
      "Un juego de memoria que pone a prueba tu capacidad de recordar y emparejar cartas.",
    category: "Juegos de memoria",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://reliable-empanada-3a00e5.netlify.app",
  },
  // {
  //   id: 122,
  //   name: "Reloj hexadecimal",
  //   description: "Una aplicación que muestra la hora actual en formato hexadecimal.",
  //   category: "Relojes",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://sweet-cuchufli-a3b3e9.netlify.app",
  // },
  {
    id: 123,
    name: "Juego de concentración",
    description:
      "Un juego de concentración en el que debes mantener el enfoque y evitar distracciones.",
    category: "Juegos de concentración",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://unrivaled-kleicha-1e2d10.netlify.app",
  },
  {
    id: 124,
    name: "Modo claro/oscuro",
    description:
      "Una aplicación que permite cambiar entre los modos claro y oscuro de una interfaz.",
    category: "Utilidades",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://symphonious-piroshki-ca71c2.netlify.app",
  },
  // {
  //   id: 125,
  //   name: "Mesa de tenis",
  //   description:
  //     "Un juego de mesa de tenis virtual para jugar en línea contra la computadora o un oponente.",
  //   category: "Juegos de mesa",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://profound-liger-bf4a3e.netlify.app",
  // },
  {
    id: 126,
    name: "Número aleatorio",
    description:
      "Una aplicación que genera números aleatorios dentro de un rango especificado.",
    category: "Utilidades",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://lucent-semifreddo-6bce96.netlify.app",
  },
  {
    id: 127,
    name: "Posición del mouse",
    description:
      "Una aplicación que muestra las coordenadas de la posición actual del mouse en la pantalla.",
    category: "Utilidades",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://vermillion-panda-1b032b.netlify.app",
  },
  {
    id: 128,
    name: "Marcador de favoritos",
    description:
      "Una aplicación para guardar y gestionar tus sitios web favoritos.",
    category: "Utilidades",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://sweet-croquembouche-9befda.netlify.app",
  },
  {
    id: 129,
    name: "Leer menos / leer más",
    description:
      "Una función que permite mostrar u ocultar el contenido largo para una lectura más cómoda.",
    category: "Utilidades",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://leafy-cassata-bfdd45.netlify.app",
  },
  // {
  //   id: 130,
  //   name: "Seguidor de gastos",
  //   description: "Una aplicación para realizar un seguimiento y controlar tus gastos personales.",
  //   category: "Finanzas personales",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://deluxe-biscotti-cf7d72.netlify.app",
  // },
  // {
  //   id: 131,
  //   name: "Contador de seguidores",
  //   description: "Esta aplicación te saber cuantas teclas has presionado.",
  //   category: "Contador",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://shiny-salamander-0dc42e.netlify.app",
  // },
  {
    id: 132,
    name: "Juego del tesoro",
    description:
      "Un emocionante juego en el que debes buscar y encontrar tesoros ocultos en un mapa.",
    category: "Juegos de aventura",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://enchanting-lebkuchen-f72ce9.netlify.app",
  },
  // {
  //   id: 134,
  //   name: "Letras de canciones",
  //   description: "Una aplicación que te permite encontrar y leer las letras de tus canciones favoritas.",
  //   category: "Música",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://cool-empanada-7afccc.netlify.app",
  // },
  // {
  //   id: 135,
  //   name: "Rompe bloques",
  //   description: "Un juego clásico en el que debes romper bloques con una pelota y una paleta.",
  //   category: "Juegos de habilidad",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://steady-trifle-4dffeb.netlify.app",
  // },
  // {
  //   id: 136,
  //   name: "Lista filtrable",
  //   description: "Esta aplicación te saber cuantas teclas has presionado.",
  //   category: "Contador",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://shiny-salamander-0dc42e.netlify.app",
  // },
  // {
  //   id: 137,
  //   name: "Lote de parqueo",
  //   description: "Una aplicación que te permite administrar y controlar el lote de parqueo de un lugar, registrando la disponibilidad de espacios y gestionando el ingreso y salida de vehículos.",
  //   category: "Gestión de estacionamiento",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://stalwart-truffle-904655.netlify.app",
  // },
  // {
  //   id: 138,
  //   name: "Menú filtrable",
  //   description: "Una aplicación que te permite filtrar y organizar un menú de opciones o productos según diferentes categorías o criterios.",
  //   category: "Gestión de menú",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://tangerine-treacle-f9559c.netlify.app",
  // },
  // {
  //   id: 139,
  //   name: "Prueba de velocidad de tipado",
  //   description: "Una aplicación que te permite evaluar y medir tu velocidad de escritura a través de pruebas de tipado cronometradas.",
  //   category: "Herramientas de productividad",
  //   difficulty: 2,
  //   downloadLink: "#",
  //   githubLink: "#",
  //   demoLink: "https://dainty-sopapillas-c8aed1.netlify.app",
  // },
  {
    id: 140,
    name: "Comprobador palíndromo",
    description:
      "Una aplicación que te permite verificar si una palabra o frase es un palíndromo, es decir, si se lee igual de izquierda a derecha y viceversa.",
    category: "Herramientas de texto",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "https://harmonious-profiterole-a02ea6.netlify.app",
  },
];
