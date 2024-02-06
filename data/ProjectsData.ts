export const projectsData = [
  {
    name: "Random Number Generator",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/random-number-generator/archive/refs/heads/main.zip",
    demoLink: "https://lucent-semifreddo-6bce96.netlify.app/",
    htmlCode: `<!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta charset="UTF-8">
      <title>JavaScript Random Number Generator</title>
      <link rel="stylesheet" type="text/css" href="random.css">
      <meta name="description" content="Use Vanilla JavaScript to generator a number in a given range!">
    
    </head>
    <body>
       <div class="row">
         <div class="col-2"></div>
         <div class="col-8">
           <h1>JavaScript Random Number Generator</h1>
           <div class="myform">
          I will generate a random integer between <br><br><input type="number" id="min_value" placeholder="Min Value"><br>
          <br>and<br><br>
          <input type="number" id="max_value" placeholder="Max Value"><br>
          <br><br>
          <button id="myBut" onclick="generate()" onmousedown="sound.play()">Generate!</button><br><br>
            <div class="green" id="output"> </div>
          </div>
        </div>
      </div>
        <script src="script.js"></script>
    </body>
    </html>`,
    cssCode: `.classy {
      padding: 2.5px;
      border-radius: 6px;
      background-color: green;
      color: white;
      font-size: 24px;
    }
    
    .classy:hover {
      opacity: .5;
      background-color: black;
    }
    
    body {
    background-color: black;
    color: #49FF0D;
    line-height: 1.5;
    font-size: 24px;
    }
    
    /* Style inputs with type="text", select elements and textareas */
    input[type=number] {
    background-color: rgb(8,13,32);
    padding: 12px; /* Some padding */
    color: lightgreen;
    font-size: 24px;
    border: 1px solid #ccc; /* Gray border */
    border-radius: 4px; /* Rounded borders */
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
    }
    
    
    button {
    background-color: lightgreen;
    color: black;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 24px;
    }
    
    button:hover {
    border-color: grey;
    border-style: solid;
    border-width: 1px;
    opacity: .5;
    }
    
    .green {
    color: lightgreen;
    font-size: 56px;
    }
    
    /* All elements width includes borders and padding*/
    * {
    box-sizing: border-box;
    }
    
    /* Rows*/
    .row::after {
    content: "";
    clear: both;
    display: table;
    }
    
    /* Classes containing "col-"*/
    [class*="col-"] {
    float: left;
    padding: 15px;
    }
    
    /* Column width for small devices (i.e. smart phones)*/
    [class*="col-"] {
    width: 100%;
    }
    
    /* Column width for large devices (i.e. computers)*/
    @media only screen and (min-width: 768px) {
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}
    }
    
    /* Column width for large devices (i.e. tablets)*/
    @media only screen and (min-width: 600px) {
    .col-t-1 {width: 8.33%;}
    .col-t-2 {width: 16.66%;}
    .col-t-3 {width: 25%;}
    .col-t-4 {width: 33.33%;}
    .col-t-5 {width: 41.66%;}
    .col-t-6 {width: 50%;}
    .col-t-7 {width: 58.33%;}
    .col-t-8 {width: 66.66%;}
    .col-t-9 {width: 75%;}
    .col-t-10 {width: 83.33%;}
    .col-t-11 {width: 91.66%;}
    .col-t-12 {width: 100%;}
    }`,
    jsCode: `var sound = new Audio();
    sound.src = "https://www.codingcommanders.com/javascript/random-number-generator/chime.mp3";
    
    function randNum(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function generate () {
      let min = document.getElementById('min_value').value;
      let max = document.getElementById('max_value').value;
      let rand = randNum(min,max);
      document.getElementById("output").innerHTML = rand;
    }
    
    document.getElementById("myBut").addEventListener("click", generate);`,
  },
  {
    name: "Color Generator",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/color-generator/archive/refs/heads/main.zip",
    demoLink: "https://timely-bienenstitch-7158d3.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
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
  {
    name: "Gradient Generator",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/gradient-generator/archive/refs/heads/main.zip",
    demoLink: "https://candid-torrone-b66209.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
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
  {
    name: "OTP Authentication",
    description: "...",
    difficulty: 1,
    downloadLink:
      "https://www.github.com/hernandoabella/otp-authentication/archive/refs/heads/main.zip",
    demoLink: "https://lustrous-beignet-a24a47.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
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
  {
    name: "Key Counter",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/key-counter/archive/refs/heads/main.zip",
    demoLink: "https://resplendent-elf-6a61c1.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
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
  {
    name: "Sortable List With Drag And Drop",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/sortable-list-with-drag-and-drop/archive/refs/heads/main.zip",
    demoLink: "https://astounding-chimera-95f2bf.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
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
  {
    name: "Weight Converter",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/weight-converter/archive/refs/heads/main.zip",
    demoLink: "https://chic-khapse-13d3fe.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
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
  {
    name: "Percentage Calculator	",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/percentage-calculator/archive/refs/heads/main.zip",
    demoLink: "https://delightful-salmiakki-6a9f1a.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
  {
    name: "Love Calculator	",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/love-calculator/archive/refs/heads/main.zip",
    demoLink: "https://resplendent-fenglisu-02a5f7.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
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
    name: "Halloween Party	",
    description: "...",
    difficulty: 2,
    downloadLink:
      "https://www.github.com/hernandoabella/halloween-party/archive/refs/heads/main.zip",
    demoLink: "https://keen-duckanoo-b9f982.netlify.app/",
    htmlCode: ``,
    cssCode: ``,
    jsCode: ``,
  },
];
