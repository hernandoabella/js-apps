import RandomNumber from "@/app/components/projects/RandomNumber";
import RandomString from "@/app/components/projects/RandomString";
import RandomColor from "./components/projects/RandomColor";
import RandomGradient from "./components/projects/RandomGradient";

export interface App {
  name: string;
  path: string;
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
    name: "Random Number ",
    path: "/apps/random-number",
    ProjectComponent: RandomNumber,
    level: 1,
    title: "Random Number Generator",
    description: "This app generates a random number.",
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Hello, World!');`,
    githubLink: "https://github.com/hernandoabella/random-number-generator",
    projectStars: 0,
    downloadLink: "",
  },
  {
    name: "Random Color",
    path: "/apps/random-color",
    ProjectComponent: RandomColor,
    level: 1,
    title: "Random Color Generator",
    description: "This app generates a random color.",
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Hello, World!');`,
    githubLink: "https://github.com/hernandoabella/random-number-generator",
    projectStars: 0,
    downloadLink: "",
  },

  {
    name: "Random String ",
    path: "/apps/random-string",
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
    name: "Background Gradient",
    path: "/apps/random-gradient",
    ProjectComponent: RandomGradient,
    level: 1,
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
    name: "Theme Switcher",
    path: "/apps/theme-switcher",
    ProjectComponent: RandomGradient,
    level: 2,
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
    name: "Music Player",
    path: "/apps/music-player",
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
