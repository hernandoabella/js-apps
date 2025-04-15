import RandomNumber from "@/app/components/projects/NumberGenerator";
import RandomString from "@/app/components/projects/StringGenerator";
import RandomColor from "./components/projects/ColorGenerator";
import RandomGradient from "./components/projects/GradientGenerator";
import ThemeSwitcher from "./components/projects/ThemeSwitcher";

export interface App {
  name: string;
  path: string;
  icon: string;
  ProjectComponent: React.FC | null;
  level: number;
  title: string;
  description: string;
  htmlSnippet?: string;
  cssSnippet?: string;
  jsSnippet?: string;
  githubLink: string;
  projectStars: number;
  downloadLink: string;
}

export const apps: App[] = [
  {
    name: "Number Generator",
    path: "/apps/number-generator",
    icon: "/icons/randomnumber.svg",
    ProjectComponent: RandomNumber,
    level: 1,
    title: "Number Generator",
    description:
      "A simple web app that generates a random number between 1 and 100 with each button click.",
    htmlSnippet: `&lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;box&quot;&gt;
      &lt;p id=&quot;randomNumber&quot; class=&quot;number&quot;&gt;7&lt;/p&gt;
      &lt;button id=&quot;generateButton&quot; class=&quot;generate-btn&quot;&gt;Random Number&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;`,
    cssSnippet: `@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.box {
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #E4E4E7;
    text-align: center;
}

.number {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 20px;
}

button {
    padding: 10px 20px;
    background-color: #6B7280;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #4b515c;
}`,
    jsSnippet: `// Function to generate a random number between 1 and 100
const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
};

// Get references to the button and number display
const generateButton = document.getElementById('generateButton');
const randomNumberDisplay = document.getElementById('randomNumber');

// Add event listener to the button to generate a new number on click
generateButton.addEventListener('click', () => {
    const newRandomNumber = generateRandomNumber();
    randomNumberDisplay.textContent = newRandomNumber;
});`,
    githubLink: "https://github.com/hernandoabella/random-number",
    projectStars: 0,
    downloadLink:
      "https://github.com/hernandoabella/random-number/archive/refs/heads/main.zip",
  },
  {
    name: "Color Generator",
    path: "/apps/color-generator",
    icon: "/icons/randomcolor.svg",
    ProjectComponent: RandomColor,
    level: 1,
    title: "Random Color Generator",
    description:
      "A simple web app that generates a random hex color with each button click.",
    htmlSnippet: `&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Random Color Generator&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;/styles.css&quot;&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;color-box&quot;&gt;
            &lt;p id=&quot;colorDisplay&quot; class=&quot;color-text&quot;&gt;#FF5733&lt;/p&gt;
            &lt;button id=&quot;colorButton&quot; class=&quot;color-button&quot;&gt;Random Color&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;script src=&quot;/script.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;`,
    cssSnippet: `@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.color-box {
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    border: 2px solid #E4E4E7;
}

.color-text {
    font-size: 1.5rem;
    padding: 20px;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    background-color: #6B7280;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    width: 100%;
}

button:hover {
    background-color: #4b515c;
}`,
    jsSnippet: `// Function to generate a random color in hex format
const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Function to determine if a color is light or dark for contrast
const isLightColor = (color) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    // Use the luminance formula to determine brightness
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance > 186; // If luminance > 186, it's a light color
};

// Function to update the color display
const updateColorDisplay = (color) => {
    const colorDisplay = document.getElementById('colorDisplay');
    colorDisplay.textContent = color;
    colorDisplay.style.backgroundColor = color;
    colorDisplay.style.color = isLightColor(color) ? 'black' : 'white';
};

// Function to generate a random color when the button is clicked
document.getElementById('colorButton').addEventListener('click', () => {
    const newRandomColor = generateRandomColor();
    updateColorDisplay(newRandomColor);
});

// Initialize with a default color
updateColorDisplay('#FF5733');
`,
    githubLink: "https://github.com/hernandoabella/random-color",
    projectStars: 0,
    downloadLink:
      "https://github.com/hernandoabella/random-color/archive/refs/heads/main.zip",
  },

  {
    name: "String Generator",
    path: "/apps/string-generator",
    icon: "/icons/randomstring.svg",
    ProjectComponent: RandomString,
    level: 1,
    title: "Random String Generator",
    description:
      "A simple web app that generates a random alphanumeric string with each button click.",
    htmlSnippet: `&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
    
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Random String Generator&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;/styles.css&quot;&gt;
&lt;/head&gt;
    
&lt;body&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;string-box&quot;&gt;
            &lt;p class=&quot;random-string&quot; id=&quot;randomString&quot;&gt;A1b2C3&lt;/p&gt;
            &lt;button id=&quot;generateStringBtn&quot;&gt;Random String&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
    
&lt;script src=&quot;/script.js&quot;&gt;&lt;/script&gt;
&lt;/html&gt;`,
    cssSnippet: `@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}
    
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
    
.string-box {
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 2px solid #E4E4E7;
}
    
.random-string {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 20px;
}
    
button {
  padding: 10px 20px;
  background-color: #6B7280;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
    
button:hover {
  background-color: #4b515c;
}`,
    jsSnippet: `// Function to generate a random string of specified length
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
      
// Function to change the displayed random string
function changeString() {
  const randomStringElement = document.getElementById('randomString');
  const newRandomString = generateRandomString(6); // Generates a string of length 6
  randomStringElement.textContent = newRandomString;
}
      
// Add event listener to button
document.getElementById('generateStringBtn').addEventListener('click', changeString);`,
    githubLink: "https://github.com/hernandoabella/random-number-generator",
    projectStars: 0,
    downloadLink:
      "https://github.com/hernandoabella/random-string/archive/refs/heads/main.zip",
  },

  {
    name: "Gradient Generator",
    path: "/apps/gradient-generator",
    icon: "/icons/randomgradient.svg",
    ProjectComponent: RandomGradient,
    level: 1,
    title: "Gradient Generator",
    description:
      "A simple web app that generates a Random Gradient at the click of a button, making it easy to visualize dynamic color schemes.",
    htmlSnippet: `&#x3C;!DOCTYPE html&#x3E;
&#x3C;html lang=&#x22;en&#x22;&#x3E;

&#x3C;head&#x3E;
    &#x3C;meta charset=&#x22;UTF-8&#x22;&#x3E;
    &#x3C;meta name=&#x22;viewport&#x22; content=&#x22;width=device-width, initial-scale=1.0&#x22;&#x3E;
    &#x3C;title&#x3E;Background Gradient Generator&#x3C;/title&#x3E;
    &#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;/styles.css&#x22;&#x3E;
&#x3C;/head&#x3E;

&#x3C;body&#x3E;
    &#x3C;div class=&#x22;container&#x22;&#x3E;
        &#x3C;div class=&#x22;card&#x22;&#x3E;
            &#x3C;div class=&#x22;gradient-box&#x22; id=&#x22;gradientBox&#x22;&#x3E;&#x3C;/div&#x3E;
            &#x3C;button id=&#x22;generateButton&#x22; class=&#x22;btn&#x22;&#x3E;Generate Gradient&#x3C;/button&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/body&#x3E;
&#x3C;script src=&#x22;/script.js&#x22;&#x3E;&#x3C;/script&#x3E;

&#x3C;/html&#x3E;`,
    cssSnippet: `@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.card {
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #E4E4E7;
    text-align: center;
}

.gradient-box {
    width: 300px;
    height: 150px;
    margin-bottom: 20px;
    border-radius: 10px;
    background: linear-gradient(to right, cyan, blue);
}

.btn {
    background-color: #6b7280;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
}

.btn:hover {
    background-color: #4b515c;
}`,
    jsSnippet: `// Function to generate a random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to generate a random gradient
function generateRandomGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const angle = Math.floor(Math.random() * 360); // Random angle between 0 and 360
  const randomGradient = &#x60;linear-gradient(&#36;{angle}deg, &#36;{color1}, &#36;{color2})&#x60;;
  document.getElementById("gradientBox").style.background = randomGradient;
}

// Event listener for the button click
document.getElementById("generateButton").addEventListener("click", generateRandomGradient);`,
    githubLink: "https://github.com/hernandoabella/random-gradient",
    projectStars: 0,
    downloadLink:
      "https://github.com/hernandoabella/random-gradient/archive/refs/heads/main.zip",
  },

  {
    name: "Toggle Dark Mode",
    path: "/apps/toggle-dark-mode",
    icon: "/icons/themeswitcher.svg",
    ProjectComponent: ThemeSwitcher,
    level: 2,
    title: "Theme Switcher",
    description: "This app allow users to toggle between light and dark themes.",
    htmlSnippet: ``,
    cssSnippet: ``,
    jsSnippet: ``,
    githubLink: "https://github.com/hernandoabella/theme-switcher",
    projectStars: 0,
    downloadLink: "https://github.com/hernandoabella/theme-switcher/archive/refs/heads/main.zip",
  },

  {
    name: "Music Player",
    path: "/apps/music-player",
    icon: "icons/musicplayer.svg",
    ProjectComponent: RandomGradient,
    level: 3,
    title: "Background Gradient Generator",
    description: "This app generates a random number.",
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Hello, World!');`,
    githubLink: "https://github.com/hernandoabella/random-number-generator",
    projectStars: 0,
    downloadLink: "",
  },

  {
    name: "Tic Tac Toe",
    path: "/apps/tic-tac-toe",
    icon: "icons/tictactoe.svg",
    ProjectComponent: RandomGradient,
    level: 4,
    title: "Background Gradient Generator",
    description: "This app generates a random number.",
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Hello, World!');`,
    githubLink: "https://github.com/hernandoabella/random-number-generator",
    projectStars: 0,
    downloadLink: "",
  },

  {
    name: "Tetris Game",
    path: "/apps/tetris-game",
    icon: "icons/tetris.svg",
    ProjectComponent: RandomGradient,
    level: 5,
    title: "Background Gradient Generator",
    description: "This app generates a random number.",
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Hello, World!');`,
    githubLink: "https://github.com/hernandoabella/random-number-generator",
    projectStars: 0,
    downloadLink: "",
  },
];
