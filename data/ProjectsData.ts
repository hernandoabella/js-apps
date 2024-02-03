export const projectsData = [
  {
    name: "Random Number Generator",
    description: "...",
    difficulty: 1,
    downloadLink: "https://www.github.com/hernandoabella/random-number-generator/archive/refs/heads/main.zip",
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
    downloadLink: "https://www.github.com/hernandoabella/color-generator/archive/refs/heads/main.zip",
    demoLink: "https://timely-bienenstitch-7158d3.netlify.app/",
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
  
];
