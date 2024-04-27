export const projectsData = [
  {
    name: "Random Number Generator",
    description: "Generate a random number between a (0, 100) range.",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/random-number-generator/archive/refs/heads/main.zip",
    demoLink: "https://lucent-semifreddo-6bce96.netlify.app/",
    htmlCode: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Random Number Generator</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    
    <body>
      <div class="container">
        <div class="output" id="output"></div>
        <div class="form-group-container">
          <div class="form-group">
            <label for="start">Start</label>
            <input type="number" id="start" name="start" min="0" value="0">
          </div>
          <div class="form-group">
            <label for="end">End</label>
            <input type="number" id="end" name="end" min="0" value="100">
          </div>
        </div>
    
        <button class="generate-btn" id="generate-btn">Generate Random Number</button>
      </div>
    
      <script src="script.js"></script>
    </body>
    
    </html>`,
    cssCode: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

    body {
      font-family: "Inter", sans-serif;
      margin: 0;
      padding: 0;
      height: 100vh;
      background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .container {
      background-color: #fff;
      border-radius: 25px;
      padding: 20px;
      border: 1px solid #ccc;
      width: 300px;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    }
    
    .form-group-container {
      display: flex;
      gap: 20px;
    }
    
    .form-group {
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    
    .form-group label {
      font-size: 1.3em;
      font-weight: bold;
      color: #333;
    }
    
    .form-group input {
      padding: 10px;
      border-radius: 12px;
      font-size: 1.3em;
      width: 117px;
    }
    
    .output {
      margin-bottom: 30px;
      font-size: 3em;
      text-align: center;
      font-weight: bold;
    }
    
    .generate-btn {
      padding: 10px;
      font-size: 1.3em;
      cursor: pointer;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 12px;
      transition: background-color 0.3s;
      width: 100%;
    }
    
    .generate-btn:hover {
      background-color: #0056b3;
    }
    
    .animated {
      animation: animation 1s;
    }
    
    @keyframes animation {
      0% {
        color: #007bff;
      }
    }`,
    jsCode: `document.addEventListener('DOMContentLoaded', function () {
      const output = document.getElementById('output');
      const generateBtn = document.getElementById('generate-btn');
    
      // Generate a default random number when the page loads
      generateRandomNumber();
    
      generateBtn.addEventListener('click', generateRandomNumber);
    
      function generateRandomNumber() {
        const startInput = document.getElementById('start');
        const endInput = document.getElementById('end');
    
        const start = parseInt(startInput.value);
        const end = parseInt(endInput.value);
    
        if (isNaN(start) || isNaN(end) || start >= end) {
          output.textContent = "Please enter valid start and end values.";
          return;
        }
    
        const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
        output.textContent = randomNumber;
    
        // Apply animation effect on generating a new number
        output.classList.add('animated');
        setTimeout(() => {
          output.classList.remove('animated');
        }, 500);
      }
    });`,
  },
  {
    name: "Color Generator",
    description: "Generate a random color with its hexadecimal code.",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/color-generator/archive/refs/heads/main.zip",
    demoLink: "https://timely-bienenstitch-7158d3.netlify.app/",
    htmlCode: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple Color Generator</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    
    <body>
        <div class="container">
            <div id="color-box" class="color-box"></div>
            <div class="color-info">
                <div id="color-code" class="color-code">#442A71</div>
                <button id="copy-btn">Copy</button>
            </div>
            <button id="generate-btn">Generate Color</button>
        </div>
        <script src="script.js"></script>
    </body>
    
    </html>`,
    cssCode: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

    body {
        font-family: "Inter", sans-serif;
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .container {
        background-color: #fff;
        border-radius: 25px;
        padding: 20px;
        border: 1px solid #ccc;
        width: 300px;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    }
    
    .color-box {
        width: 100%;
        height: 290px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 100%;
        transition: .3s;
        background: #442A71;
    }
    
    .color-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    
    .color-code {
        margin-right: 10px;
        font-size: 1.5em;
        font-weight: bold;
    }
    
    #copy-btn {
        padding: 10px;
        font-size: 1.3em;
        cursor: pointer;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        transition: background-color 0.3s;
    }
    
    #copy-btn:hover {
        background-color: #0056b3;
    }
    
    #generate-btn {
        padding: 10px;
        font-size: 1.3em;
        cursor: pointer;
        background-color: #6624D9;
        color: #fff;
        border: none;
        border-radius: 12px;
        transition: background-color 0.3s;
        width: 100%;
    }
    
    #generate-btn:hover {
        background-color: #d240f2;
    }`,
    jsCode: `document.addEventListener('DOMContentLoaded', function () {
      const colorBox = document.getElementById('color-box');
      const colorCode = document.getElementById('color-code');
      const generateBtn = document.getElementById('generate-btn');
      const copyBtn = document.getElementById('copy-btn');
  
      generateBtn.addEventListener('click', generateRandomColor);
      copyBtn.addEventListener('click', copyColorCode);
  
      function generateRandomColor() {
          const randomColor = getRandomColor();
          updateColor(randomColor);
      }
  
      function getRandomColor() {
          const letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
      }
  
      function updateColor(color) {
          colorBox.style.backgroundColor = color;
          colorCode.textContent = color;
      }
  
      function copyColorCode() {
          const copyText = document.createElement('textarea');
          copyText.value = colorCode.textContent;
          document.body.appendChild(copyText);
          copyText.select();
          copyText.setSelectionRange(0, 99999);
          document.execCommand('copy');
          document.body.removeChild(copyText);
          colorCode.textContent = "Copied!";
          setTimeout(() => {
              colorCode.textContent = copyText.value;
          }, 2000);
      }
  });`,
  },
  {
    name: "Counter",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/counter/archive/refs/heads/main.zip",
    demoLink: "https://incredible-boba-57ba5d.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Up Counter",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/up-counter/archive/refs/heads/main.zip",
    demoLink: "https://lovely-pavlova-2ac548.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Text Resizer",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/text-resizer/archive/refs/heads/main.zip",
    demoLink: "https://effulgent-pasca-40a1c9.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Play Sound Onclick",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/sound-on-click/archive/refs/heads/main.zip",
    demoLink: "https://ephemeral-cheesecake-015964.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Change Background Color",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/change-background-color/archive/refs/heads/main.zip",
    demoLink: "https://prismatic-seahorse-3f7a5c.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Modal Box",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/modal-box/archive/refs/heads/main.zip",
    demoLink: "https://celebrated-beignet-0ab5af.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Check Internet Connection",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/check-internet-connection/archive/refs/heads/main.zip",
    demoLink: "https://musical-lily-78ebf4.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Traffic Light",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/traffic-light/archive/refs/heads/main.zip",
    demoLink: "https://inspiring-croissant-aaea4d.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "Gradient Generator",
  //   description: "...",
  //   difficulty: 1,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/gradient-generator/archive/refs/heads/main.zip",
  //   demoLink: "https://candid-torrone-b66209.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Good Cheap Fast",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/good-cheap-fast/archive/refs/heads/main.zip",
    demoLink: "https://luminous-pasca-e1ac68.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Expanding Search Bar",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/expanding-search-bar/archive/refs/heads/main.zip",
    demoLink: "https://spiffy-brioche-4c4560.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "OTP Authentication",
  //   description: "...",
  //   difficulty: 1,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/otp-authentication/archive/refs/heads/main.zip",
  //   demoLink: "https://lustrous-beignet-a24a47.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Detect Key",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/detect-key/archive/refs/heads/main.zip",
    demoLink: "https://celebrated-taffy-b65b13.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Follower Counter",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/follower-counter/archive/refs/heads/main.zip",
    demoLink: "https://clever-snickerdoodle-b8c39d.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Date Calculator",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/date-calculator/archive/refs/heads/main.zip",
    demoLink: "https://charming-rabanadas-51a703.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Theme Switcher",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/theme-switcher/archive/refs/heads/main.zip",
    demoLink: "https://symphonious-piroshki-ca71c2.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "Key Counter",
  //   description: "...",
  //   difficulty: 2,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/key-counter/archive/refs/heads/main.zip",
  //   demoLink: "https://resplendent-elf-6a61c1.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Step Indicator",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/step-indicator/archive/refs/heads/main.zip",
    demoLink: "https://benevolent-gnome-e33a30.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Decimal-Binary Converter",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/decimal-binary-converter/archive/refs/heads/main.zip",
    demoLink: "https://tubular-brioche-5a2bbf.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "Sortable List With Drag And Drop",
  //   description: "...",
  //   difficulty: 2,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/sortable-list-with-drag-and-drop/archive/refs/heads/main.zip",
  //   demoLink: "https://astounding-chimera-95f2bf.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Image Slider",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/image-slider/archive/refs/heads/main.zip",
    demoLink: "https://superb-heliotrope-a182fc.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Countdown Timer",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/countdown-timer/archive/refs/heads/main.zip",
    demoLink: "https://melodic-cendol-1ddcb3.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Todo List",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/todo-list/archive/refs/heads/main.zip",
    demoLink: "https://meek-souffle-785242.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Range Control",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/range-control/archive/refs/heads/main.zip",
    demoLink: "https://lively-blancmange-a00ba0.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "Weight Converter",
  //   description: "...",
  //   difficulty: 2,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/weight-converter/archive/refs/heads/main.zip",
  //   demoLink: "https://chic-khapse-13d3fe.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Browser Detector",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/browser-detector/archive/refs/heads/main.zip",
    demoLink: "https://reliable-pithivier-640794.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Calculator",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/calculator/archive/refs/heads/main.zip",
    demoLink: "https://roaring-speculoos-9b2532.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Age Calculator",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/age-calculator/archive/refs/heads/main.zip",
    demoLink: "https://cool-dodol-d5b2cc.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Digital Clock	",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/digital-clock/archive/refs/heads/main.zip",
    demoLink: "https://ubiquitous-klepon-29f6bc.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Stop Watch",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/stop-watch/archive/refs/heads/main.zip",
    demoLink: "https://venerable-halva-38027d.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Joke Generator",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/joke-generator/archive/refs/heads/main.zip",
    demoLink: "https://chic-douhua-da8067.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Fibonacci Generator",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/fibonacci-generator/archive/refs/heads/main.zip",
    demoLink: "https://frolicking-gingersnap-81eb24.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "IBM Calculator	",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/ibm-calculator/archive/refs/heads/main.zip",
    demoLink: "https://monumental-dodol-f022b2.netlify.app",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Calendar	",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/ibm-calculator/archive/refs/heads/main.zip",
    demoLink: "https://remarkable-macaron-98cbe2.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Product Counter",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/product-counter/archive/refs/heads/main.zip",
    demoLink: "https://dazzling-banoffee-acfe6e.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Email Validation	",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/email-validation/archive/refs/heads/main.zip",
    demoLink: "https://merry-cajeta-6bc82d.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Form Validation",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/form-validation/archive/refs/heads/main.zip",
    demoLink: "https://inquisitive-ganache-d85029.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "Percentage Calculator	",
  //   description: "...",
  //   difficulty: 2,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/percentage-calculator/archive/refs/heads/main.zip",
  //   demoLink: "https://delightful-salmiakki-6a9f1a.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  // {
  //   name: "Love Calculator	",
  //   description: "...",
  //   difficulty: 2,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/love-calculator/archive/refs/heads/main.zip",
  //   demoLink: "https://resplendent-fenglisu-02a5f7.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Tip Calculator	",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/tip-calculator/archive/refs/heads/main.zip",
    demoLink: "https://super-clafoutis-e39fb3.netlify.app",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Analog Clock	",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/analog-clock/archive/refs/heads/main.zip",
    demoLink: "https://mellow-frangipane-965914.netlify.app",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Customize The Parrot",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/customize-the-parrot/archive/refs/heads/main.zip",
    demoLink: "https://gleeful-khapse-2bd1d3.netlify.app",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Halloween Party",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/halloween-party/archive/refs/heads/main.zip",
    demoLink: "https://keen-duckanoo-b9f982.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Weather App",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/weather-app/archive/refs/heads/main.zip",
    demoLink: "https://heartfelt-caramel-695b45.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "New Year Counter",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/new-year-counter/archive/refs/heads/main.zip",
    demoLink: "https://sprightly-cactus-3fbf33.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Meaning Of Your Name",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/meaning-of-your-name/archive/refs/heads/main.zip",
    demoLink: "https://silly-fox-ccdfe8.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Coin Flip",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/coin-flip/archive/refs/heads/main.zip",
    demoLink: "https://gilded-syrniki-b834d6.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Height Converter",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/height-converter/archive/refs/heads/main.zip",
    demoLink: "https://tangerine-palmier-3c8427.netlify.app",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Drag And Drop",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/drag-and-drop/archive/refs/heads/main.zip",
    demoLink: "https://heroic-swan-76e763.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Accordion",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/accordion/archive/refs/heads/main.zip",
    demoLink: "https://cheerful-muffin-886995.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Show / Hide Password	",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/show-hide-password/archive/refs/heads/main.zip",
    demoLink: "https://gorgeous-mandazi-c9fb8b.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "Billionaires Table",
  //   description: "...",
  //   difficulty: 2,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/billionaries-table/archive/refs/heads/main.zip",
  //   demoLink: "https://sunny-cajeta-5dd982.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Pet Finder",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/pet-finder/archive/refs/heads/main.zip",
    demoLink: "https://sparkly-gecko-315dcf.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Image Finder",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/image-finder/archive/refs/heads/main.zip",
    demoLink: "https://luminous-sopapillas-eb83a2.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Currency Converter",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/exchange-rate-calculator/archive/refs/heads/main.zip",
    demoLink: "https://exquisite-maamoul-2036ef.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "Loan Calculator",
  //   description: "...",
  //   difficulty: 2,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/loan-calculator/archive/refs/heads/main.zip",
  //   demoLink: "https://heroic-salamander-1c20f4.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Draggable Container	",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/draggable-container/archive/refs/heads/main.zip",
    demoLink: "https://lustrous-bubblegum-d531c4.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Lorem Ipsum Generator	",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/lorem-ipsum-generator/archive/refs/heads/main.zip",
    demoLink: "https://unique-scone-74ef39.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Typing Effect	",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/typing-effect/archive/refs/heads/main.zip",
    demoLink: "https://luminous-maamoul-f1cc93.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Read More / Less",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/read-more-read-less/archive/refs/heads/main.zip",
    demoLink: "https://leafy-cassata-bfdd45.netlify.app",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Hexadecimal Clock",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/hexadecimal-clock/archive/refs/heads/main.zip",
    demoLink: "https://sweet-cuchufli-a3b3e9.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Palindrome Checker	",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/palindrome-checker/archive/refs/heads/main.zip",
    demoLink: "https://harmonious-profiterole-a02ea6.netlify.app",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Live User Filter",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/live-user-filter/archive/refs/heads/main.zip",
    demoLink: "https://gleeful-kangaroo-54fa72.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Expense Tracker",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/expense-tracker/archive/refs/heads/main.zip",
    demoLink: "https://deluxe-biscotti-cf7d72.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Animal Generator",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/animal-generator/archive/refs/heads/main.zip",
    demoLink: "https://monumental-crostata-6757f4.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Mouse Position	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/mouse-position/archive/refs/heads/main.zip",
    demoLink: "https://vermillion-panda-1b032b.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "Bookmarker App",
  //   description: "...",
  //   difficulty: 3,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/bookmarker-app/archive/refs/heads/main.zip",
  //   demoLink: "https://sweet-croquembouche-9befda.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Password Strength With Image",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/password-strength-with-image/archive/refs/heads/main.zip",
    demoLink: "https://effortless-sunflower-88f50b.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Movie Seat Booking	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/movie-seat-booking/archive/refs/heads/main.zip",
    demoLink: "https://silver-jelly-e671f7.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Book List App",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/book-list-app/archive/refs/heads/main.zip",
    demoLink: "https://gilded-haupia-ce5dab.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Notes App",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/notes-app/archive/refs/heads/main.zip",
    demoLink: "https://luminous-malabi-2e438f.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Pizza Ordering System",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/pizza-ordering-system/archive/refs/heads/main.zip",
    demoLink: "https://sage-alpaca-2f462c.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Meditation App	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/meditation-app/archive/refs/heads/main.zip",
    demoLink: "https://roaring-klepon-843d7b.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Toast Notification App",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/toast-notification-app/archive/refs/heads/main.zip",
    demoLink: "https://classy-alfajores-46d91d.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Movie App",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/movie-app/archive/refs/heads/main.zip",
    demoLink: "https://lucent-paletas-9bc58d.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Dictionary App",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/dictionary-app-app/archive/refs/heads/main.zip",
    demoLink: "https://taupe-granita-e7a249.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "QR Generator	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/qr-generator/archive/refs/heads/main.zip",
    demoLink: "https://dancing-alfajores-da444c.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Quiz App	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/quiz-app/archive/refs/heads/main.zip",
    demoLink: "https://lovely-melba-7ff746.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Color Board",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/color-board/archive/refs/heads/main.zip",
    demoLink: "https://classy-gumption-7892ee.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "Music Player	",
  //   description: "...",
  //   difficulty: 3,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/music-player/archive/refs/heads/main.zip",
  //   demoLink: "https://cosmic-pothos-f4f82a.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Spinning Roulette",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/spinning-roulette/archive/refs/heads/main.zip",
    demoLink: "https://stirring-melomakarona-c1163c.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Product Carousel",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/product-carousel/archive/refs/heads/main.zip",
    demoLink: "https://frolicking-churros-79d066.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Emoji Rating	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/emoji-rating/archive/refs/heads/main.zip",
    demoLink: "https://phenomenal-florentine-e1bc03.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Word Beater	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/word-beater/archive/refs/heads/main.zip",
    demoLink: "https://iridescent-fox-bdb4e8.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Weekly Budget	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/weekly-budget/archive/refs/heads/main.zip",
    demoLink: "https://glittery-cendol-b90697.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "Recipes App	",
  //   description: "...",
  //   difficulty: 3,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/recipes-app/archive/refs/heads/main.zip",
  //   demoLink: "https://monumental-otter-7b41c9.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Password Validation	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/password-validation/archive/refs/heads/main.zip",
    demoLink: "https://superlative-cupcake-2a9bd7.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Github Profile Generator",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/github-profile-generator/archive/refs/heads/main.zip",
    demoLink: "https://adorable-custard-09481a.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "Shopping Cart",
  //   description: "...",
  //   difficulty: 3,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/shopping-cart/archive/refs/heads/main.zip",
  //   demoLink: "https://sensational-salamander-cf3425.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Drum Kit",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/drum-kit/archive/refs/heads/main.zip",
    demoLink: "https://dashing-yeot-f69ea3.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "MP3 Player	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/mp3-player/archive/refs/heads/main.zip",
    demoLink: "https://serene-lamington-5aab02.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Pomodoro Timer",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/pomodoro-timer/archive/refs/heads/main.zip",
    demoLink: "https://grand-faloodeh-69ef7e.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Password Generator",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/password-generator/archive/refs/heads/main.zip",
    demoLink: "https://verdant-fenglisu-a95152.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Image Generator",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/image-generator/archive/refs/heads/main.zip",
    demoLink: "https://helpful-hummingbird-e58695.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Food Generator",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/food-generator/archive/refs/heads/main.zip",
    demoLink: "https://transcendent-tapioca-6f10ff.netlify.app",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Check Password Strength",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/check-password-strength/archive/refs/heads/main.zip",
    demoLink: "https://dancing-granita-c4c594.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "Piano",
  //   description: "...",
  //   difficulty: 3,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/piano/archive/refs/heads/main.zip",
  //   demoLink: "https://merry-cassata-7cae39.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Audio Visualizer	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/audio-visualizer/archive/refs/heads/main.zip",
    demoLink: "https://starlit-rolypoly-6197fe.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Color Contrast Generator	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/color-contrast-generator/archive/refs/heads/main.zip",
    demoLink: "https://endearing-selkie-58973a.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Chatbot	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/chatbot/archive/refs/heads/main.zip",
    demoLink: "https://stirring-sopapillas-c0c8a9.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Guess The Number	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/guess-the-number/archive/refs/heads/main.zip",
    demoLink: "https://dynamic-empanada-7e232f.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Guess The Color	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/guess-the-color/archive/refs/heads/main.zip",
    demoLink: "https://profound-valkyrie-179f94.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Guess The Word	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/guess-the-word/archive/refs/heads/main.zip",
    demoLink: "https://keen-mousse-cca4ea.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Rock Paper Scissors",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/rock-paper-scissors/archive/refs/heads/main.zip",
    demoLink: "https://loquacious-paletas-2bfd28.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Math Trainer	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/math-trainer/archive/refs/heads/main.zip",
    demoLink: "https://effulgent-bombolone-bde7e9.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Memory Cards	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/memory-cards/archive/refs/heads/main.zip",
    demoLink: "https://prismatic-sprite-847e80.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Song Lyrics App",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/song-lyrics-app/archive/refs/heads/main.zip",
    demoLink: "https://cool-empanada-7afccc.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Filter Menu	",
    description: "...",
    difficulty: 3,
    downloadLink:
      "https://www.github.com/hernandoabella/filter-menu/archive/refs/heads/main.zip",
    demoLink: "https://tangerine-treacle-f9559c.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "Parking Lot App	",
  //   description: "...",
  //   difficulty: 4,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/parking-lot-app/archive/refs/heads/main.zip",
  //   demoLink: "https://stalwart-truffle-904655.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  // {
  //   name: "Treasure Game	",
  //   description: "...",
  //   difficulty: 4,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/treasure-game/archive/refs/heads/main.zip",
  //   demoLink: "https://enchanting-lebkuchen-f72ce9.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Hangman Game	",
    description: "...",
    difficulty: 4,
    downloadLink:
      "https://www.github.com/hernandoabella/hangman-game/archive/refs/heads/main.zip",
    demoLink: "https://willowy-semolina-6fa82a.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Tic Tac Toe",
    description: "...",
    difficulty: 4,
    downloadLink:
      "https://www.github.com/hernandoabella/tic-tac-toe/archive/refs/heads/main.zip",
    demoLink: "https://dreamy-treacle-14c1b6.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Catch The Emoji",
    description: "...",
    difficulty: 4,
    downloadLink:
      "https://www.github.com/hernandoabella/catch-the-emoji/archive/refs/heads/main.zip",
    demoLink: "https://tangerine-starship-960b72.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "2048 Game	",
  //   description: "...",
  //   difficulty: 4,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/2048-game/archive/refs/heads/main.zip",
  //   demoLink: "https://storied-malabi-1ab6c4.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Space Invaders	",
    description: "...",
    difficulty: 4,
    downloadLink:
      "https://www.github.com/hernandoabella/space-invaders/archive/refs/heads/main.zip",
    demoLink: "https://gregarious-jalebi-369f4f.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Whack The Mole",
    description: "...",
    difficulty: 4,
    downloadLink:
      "https://www.github.com/hernandoabella/whack-the-mole/archive/refs/heads/main.zip",
    demoLink: "https://dulcet-sawine-04216d.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Snake Game	",
    description: "...",
    difficulty: 4,
    downloadLink:
      "https://www.github.com/hernandoabella/snake-game/archive/refs/heads/main.zip",
    demoLink: "https://effervescent-souffle-601d53.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Concentration Game	",
    description: "...",
    difficulty: 4,
    downloadLink:
      "https://www.github.com/hernandoabella/concentration-game/archive/refs/heads/main.zip",
    demoLink: "https://unrivaled-kleicha-1e2d10.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Tennis Table",
    description: "...",
    difficulty: 4,
    downloadLink:
      "https://www.github.com/hernandoabella/tennis-table/archive/refs/heads/main.zip",
    demoLink: "https://profound-liger-bf4a3e.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  // {
  //   name: "Chess	",
  //   description: "...",
  //   difficulty: 4,
  //   downloadLink:
  //     "https://www.github.com/hernandoabella/chess/archive/refs/heads/main.zip",
  //   demoLink: "https://earnest-beijinho-8a8f4a.netlify.app/",
  //   htmlCode: ``,
  //   cssCode: ``,
  //   jsCode: ``,
  // },
  {
    name: "Tetris	",
    description: "...",
    difficulty: 4,
    downloadLink:
      "https://www.github.com/hernandoabella/tetris-game/archive/refs/heads/main.zip",
    demoLink: "https://bespoke-dolphin-382735.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Brick Breaker Game	",
    description: "...",
    difficulty: 4,
    downloadLink:
      "https://www.github.com/hernandoabella/brick-breaker-game/archive/refs/heads/main.zip",
    demoLink: "https://steady-trifle-4dffeb.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
];
