import RandomNumber from "@/app/components/projects/NumberGenerator";
import RandomString from "@/app/components/projects/StringGenerator";
import RandomColor from "@/app/components/projects/ColorGenerator";
import RandomGradient from "@/app/components/projects/GradientGenerator";
import ThemeSwitcher from "@/app/components/projects/ThemeSwitcher";
import CounterApp from "@/app/components/projects/CounterApp";
import TodoList from "@/app/components/projects/TodoList";
import Calculator from "@/app/components/projects/Calculator";
import DigitalClock from "@/app/components/projects/DigitalClock";
import TipCalculator from "@/app/components/projects/TipCalculator";
import TicTacToe from "@/app/components/projects/TicTacToe";
import QuizApp from "@/app/components/projects/QuizApp";
import MemoryGame from "@/app/components/projects/MemoryGame";
import PomodoroTimer from "@/app/components/projects/PomodoroTimer";
import CountdownTimer from "@/app/components/projects/CountdownTimer";
import PalindromeChecker from "@/app/components/projects/PalindromeChecker";
import VowelCounter from "@/app/components/projects/VowelCounter";
import ExpenseTracker from "@/app/components/projects/ExpenseTracker";
import RockPaperScissors from "@/app/components/projects/RockPaperScissors";
import TypingTest from "@/app/components/projects/TypingTest";

export interface LessonStep {
  id: number;
  title: string;
  description: string;
  instruction: string;
  hint: string;
  language: "html" | "css" | "js";
  starterCode: string;
  solution: string;
  validation: {
    mustInclude: string[];
    message: string;
  }[];
  isFinal: boolean;
}

export interface App {
  name: string;
  path: string;
  icon: string;
  description: string;
  level: number;
  ProjectComponent?: React.FC;
  projectStars: string;
  category: string[];
  tags: string[];
  htmlSnippet: string;
  cssSnippet: string;
  jsSnippet: string;
  liveDemo?: string;
  title?: string;
  steps: LessonStep[];
}

const numberSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the HTML elements for the number generator.",
    instruction: "1. Create a <div> element and give it a class attribute with the value \"container\".\n2. Inside the div, add a <p> element with id=\"number\". This paragraph will display the random number.\n3. Inside the div (after the paragraph), add a <button> element. The button text must say 'Generate Number'.\n4. Give the button an onclick attribute that calls the function generate().",
    hint: "Your HTML should look like:\n<div class=\"container\">\n  <p id=\"number\">42</p>\n  <button onclick=\"generate()\">Generate Number</button>\n</div>",
    language: "html",
    starterCode: "<!-- Add a container with a number display and a button -->",
    solution: `<div class="container">
  <p id="number">42</p>
  <button onclick="generate()">Generate Number</button>
</div>`,
    validation: [
      { mustInclude: ["<div", "id=\"number\"", "<button"], message: "Your HTML is missing one of these: a <div> container element, a <p> with id=\"number\", or a <button>. Check that you have all three." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the number generator to look clean and centered.",
    instruction: "1. Target the .container class and set text-align to center and add some padding (e.g., 2rem).\n2. Target the #number id selector and set font-size to 3rem and font-weight to bold so the number stands out.\n3. Target the button element and add: padding (0.5rem 1rem), background color (#6B7280), white text color, remove the border with border: none, and add border-radius: 4px for rounded corners.",
    hint: "CSS template:\n.container {\n  text-align: center;\n  padding: 2rem;\n}\n#number {\n  font-size: 3rem;\n  font-weight: bold;\n}\nbutton {\n  padding: 0.5rem 1rem;\n  background: #6B7280;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}",
    language: "css",
    starterCode: "/* Style the container, number display, and button */",
    solution: `.container {
  text-align: center;
  padding: 2rem;
}
#number {
  font-size: 3rem;
  font-weight: bold;
}
button {
  padding: 0.5rem 1rem;
  background: #6B7280;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}`,
    validation: [
      { mustInclude: [".container", "text-align", "#number", "font-size"], message: "Your .container needs a text-align property and your #number needs a font-size. Make sure both selectors are defined." },
      { mustInclude: ["button", "padding", "background"], message: "Your button is missing a padding property and a background color. Add both to make the button look styled." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the JavaScript to generate random numbers.",
    instruction: "1. Create a function called generate() using the function keyword.\n2. Inside the function, use Math.random() and Math.floor() to create a random whole number between 1 and 100.\n3. Store that number in a variable (e.g., const num = ...).\n4. Use document.getElementById('number') to get the paragraph and set its textContent property to your random number.",
    hint: "Use this pattern inside your function:\nconst num = Math.floor(Math.random() * 100) + 1;\ndocument.getElementById('number').textContent = num;",
    language: "js",
    starterCode: "// Write the generate function that creates a random number 1-100",
    solution: `function generate() {
  const num = Math.floor(Math.random() * 100) + 1;
  document.getElementById('number').textContent = num;
}`,
    validation: [
      { mustInclude: ["function generate", "Math.random", "Math.floor", "getElementById"], message: "You need a function named generate() that uses Math.random() with Math.floor() to generate a number, then updates the paragraph using getElementById(). Check that all four pieces exist." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "See your completed Number Generator in action!",
    instruction: "You've built all three layers. Click 'Run Project' to see your completed Random Number Generator working live.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const colorSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the HTML elements for the color generator.",
    instruction: "1. Create a <div> element with id=\"color-box\". This will be the colored box that shows the generated color.\n2. Inside that div, add a <p> element with id=\"hex\". This will display the hex color code (e.g., #FF5733).\n3. Also inside the div, add a <button> with the text 'Generate' and an onclick attribute that calls newColor().",
    hint: "Your HTML should look like:\n<div id=\"color-box\">\n  <p id=\"hex\">#FF5733</p>\n  <button onclick=\"newColor()\">Generate</button>\n</div>",
    language: "html",
    starterCode: "<!-- Create a color box with a hex display and a button -->",
    solution: `<div id="color-box">
  <p id="hex">#FF5733</p>
  <button onclick="newColor()">Generate</button>
</div>`,
    validation: [
      { mustInclude: ["id=\"color-box\"", "id=\"hex\"", "<button"], message: "You are missing either the div with id=\"color-box\", the paragraph with id=\"hex\", or a button element. All three are required." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the color generator with a nice box layout.",
    instruction: "1. Target #color-box and set its width to 200px and height to 200px to make it a square box.\n2. Use display: flex, align-items: center, and justify-content: center to center content inside the box.\n3. Set flex-direction to column so the text stacks above the button.\n4. Add border-radius: 12px for rounded corners and transition: background 0.3s for a smooth color change effect.",
    hint: "CSS template:\n#color-box {\n  width: 200px;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  transition: background 0.3s;\n}",
    language: "css",
    starterCode: "/* Style the color box with dimensions, flexbox, and rounded corners */",
    solution: `#color-box {
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: background 0.3s;
}`,
    validation: [
      { mustInclude: ["#color-box", "width", "height", "display: flex", "border-radius"], message: "Your #color-box is missing one of: a width and height (200px), display: flex for centering, or border-radius for rounded corners." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the JavaScript to generate random hex colors.",
    instruction: "1. Create a function called newColor().\n2. Inside, generate a random hex color: use Math.floor(Math.random() * 16777215).toString(16) and prepend '#' to make a full hex string like '#A3F12B'.\n3. Store the hex string in a variable.\n4. Set the background style of #color-box to that hex value.\n5. Set the textContent of #hex paragraph to the same hex value so the code is displayed.",
    hint: "JavaScript template:\nfunction newColor() {\n  const hex = '#' + Math.floor(Math.random() * 16777215).toString(16);\n  document.getElementById('color-box').style.background = hex;\n  document.getElementById('hex').textContent = hex;\n}",
    language: "js",
    starterCode: "// Write the function that generates random hex colors",
    solution: `function newColor() {
  const hex = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.getElementById('color-box').style.background = hex;
  document.getElementById('hex').textContent = hex;
}`,
    validation: [
      { mustInclude: ["function newColor", "Math.random", "toString(16)", "getElementById"], message: "Your code needs a function called newColor() that uses Math.random() with toString(16) to generate a hex color, then updates the box background and text using getElementById()." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "See your completed Color Generator!",
    instruction: "Great work! You've built a color generator from scratch. Click 'Run Project' to try it out.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const stringSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the HTML for the random string generator.",
    instruction: "1. Create a <div> with class=\"container\".\n2. Inside the div, add a <p> element with id=\"output\". This will display the random string.\n3. Add a <button> with the text 'New String' and an onclick attribute that calls generate().",
    hint: "Your HTML should look like:\n<div class=\"container\">\n  <p id=\"output\">aB3xK9</p>\n  <button onclick=\"generate()\">New String</button>\n</div>",
    language: "html",
    starterCode: "<!-- Create a container with a string output and a button -->",
    solution: `<div class="container">
  <p id="output">aB3xK9</p>
  <button onclick="generate()">New String</button>
</div>`,
    validation: [
      { mustInclude: ["class=\"container\"", "id=\"output\"", "<button"], message: "Your HTML is missing one of: a div with class=\"container\", a paragraph with id=\"output\", or a button element." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the string generator.",
    instruction: "1. Target .container and set text-align to center with some padding.\n2. Target #output and set font-family to monospace, font-size to 2rem, and letter-spacing to 0.25em for spacing between characters.\n3. Target the button and add padding, background color, border-radius, and other styling from earlier projects.",
    hint: "CSS template:\n.container {\n  text-align: center;\n  padding: 2rem;\n}\n#output {\n  font-family: monospace;\n  font-size: 2rem;\n  letter-spacing: 0.25em;\n}\nbutton {\n  padding: 0.5rem 1rem;\n  background: #6B7280;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}",
    language: "css",
    starterCode: "/* Style the container, output text, and button */",
    solution: `.container {
  text-align: center;
  padding: 2rem;
}
#output {
  font-family: monospace;
  font-size: 2rem;
  letter-spacing: 0.25em;
}`,
    validation: [
      { mustInclude: [".container", "text-align", "#output", "font-family: monospace"], message: "Your .container needs a text-align property and your #output needs font-family: monospace and a font-size. Check both selectors." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the JavaScript for random string generation.",
    instruction: "1. Create a function called generate().\n2. Inside, define a string variable containing all possible characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.\n3. Create an empty string variable called result.\n4. Write a for loop that runs 8 times. In each iteration, use charAt() with Math.random() to pick a random character from your character string and add it to result.\n5. After the loop ends, set the textContent of #output to the result.",
    hint: "JavaScript template:\nfunction generate() {\n  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n  let result = '';\n  for (let i = 0; i < 8; i++) {\n    result += chars.charAt(Math.floor(Math.random() * chars.length));\n  }\n  document.getElementById('output').textContent = result;\n}",
    language: "js",
    starterCode: "// Write the generate function that creates a random 8-character string",
    solution: `function generate() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById('output').textContent = result;
}`,
    validation: [
      { mustInclude: ["function generate", "Math.random", "charAt", "for"], message: "You need a function named generate() containing a for loop that uses Math.random() and charAt() to pick random characters. One of these pieces is missing." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Random String Generator is complete!",
    instruction: "Click 'Run Project' to see all three layers combine into the final working app.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const gradientSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Set up the HTML for the gradient generator.",
    instruction: "1. Create a <div> with id=\"gradient-box\". This will show the gradient as its background.\n2. Inside the div, add a <p> with id=\"css-code\". This will display the CSS code of the current gradient.\n3. Add a <button> with text 'New Gradient' and an onclick attribute that calls newGradient().",
    hint: "Your HTML should look like:\n<div id=\"gradient-box\">\n  <p id=\"css-code\">linear-gradient(45deg, #ff0, #00f)</p>\n  <button onclick=\"newGradient()\">New Gradient</button>\n</div>",
    language: "html",
    starterCode: "<!-- Create a gradient box with CSS code display and a button -->",
    solution: `<div id="gradient-box">
  <p id="css-code">linear-gradient(45deg, #ff0, #00f)</p>
  <button onclick="newGradient()">New Gradient</button>
</div>`,
    validation: [
      { mustInclude: ["id=\"gradient-box\"", "id=\"css-code\"", "<button"], message: "Your HTML is missing one of: a div with id=\"gradient-box\", a paragraph with id=\"css-code\", or a button element." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the gradient generator.",
    instruction: "1. Style #gradient-box with width: 100%, height: 250px, display: flex (with flex-direction: column, align-items: center, justify-content: center), and border-radius: 12px for rounded corners.\n2. Add transition: background 0.5s so color changes are smooth.\n3. Style #css-code with a dark semi-transparent background (rgba(0,0,0,0.6)), white text, padding, border-radius, and font-family: monospace.",
    hint: "CSS template:\n#gradient-box {\n  width: 100%;\n  height: 250px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  transition: background 0.5s;\n}\n#css-code {\n  background: rgba(0,0,0,0.6);\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  font-family: monospace;\n}",
    language: "css",
    starterCode: "/* Style the gradient box and the CSS code display */",
    solution: `#gradient-box {
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: background 0.5s;
}
#css-code {
  background: rgba(0,0,0,0.6);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: monospace;
}`,
    validation: [
      { mustInclude: ["#gradient-box", "height: 250px", "display: flex", "#css-code"], message: "Your #gradient-box needs a height, display: flex for centering, and your #css-code needs styling. Check that both selectors are fully defined." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the JavaScript for random gradient generation.",
    instruction: "1. Create a helper function called randomColor() that returns a random hex color string (like '#A3F12B').\n2. Create the main function newGradient(). Inside it:\n   a. Generate a random angle from 0 to 359 using Math.floor(Math.random() * 360).\n   b. Call randomColor() twice to get two random colors.\n   c. Build a gradient string using a template literal: `linear-gradient(${angle}deg, ${color1}, ${color2})`.\n   d. Apply the gradient as the background of #gradient-box.\n   e. Display the CSS string in #css-code using textContent.",
    hint: "JavaScript template:\nfunction randomColor() {\n  return '#' + Math.floor(Math.random() * 16777215).toString(16);\n}\nfunction newGradient() {\n  const angle = Math.floor(Math.random() * 360);\n  const c1 = randomColor();\n  const c2 = randomColor();\n  const gradient = `linear-gradient(${angle}deg, ${c1}, ${c2})`;\n  document.getElementById('gradient-box').style.background = gradient;\n  document.getElementById('css-code').textContent = gradient;\n}",
    language: "js",
    starterCode: "// Write newGradient() and a helper randomColor() function",
    solution: `function newGradient() {
  const angle = Math.floor(Math.random() * 360);
  const c1 = randomColor();
  const c2 = randomColor();
  const gradient = \`linear-gradient(\${angle}deg, \${c1}, \${c2})\`;
  document.getElementById('gradient-box').style.background = gradient;
  document.getElementById('css-code').textContent = gradient;
}
function randomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}`,
    validation: [
      { mustInclude: ["function newGradient", "function randomColor", "Math.random", "linear-gradient"], message: "You need both a newGradient() function and a randomColor() helper function. Make sure both use Math.random() and newGradient() builds a linear-gradient string." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Gradient Generator is ready!",
    instruction: "Click 'Run Project' to see your random gradient generator in all its colorful glory.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const themeSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Set up the theme switcher HTML.",
    instruction: "1. Create a <div> with class=\"app\"> as the main container.\n2. Inside, add an <h1> heading with the text 'Theme Switcher'.\n3. Create a toggle switch: add a <label> with class=\"switch\">. Inside the label, put an <input type=\"checkbox\" id=\"theme-toggle\"> followed by a <span> with class=\"slider\"> (empty, no text).\n4. The checkbox hidden inside the label is what makes the switch interactive.",
    hint: "Your HTML should look like:\n<div class=\"app\">\n  <h1>Theme Switcher</h1>\n  <label class=\"switch\">\n    <input type=\"checkbox\" id=\"theme-toggle\">\n    <span class=\"slider\"></span>\n  </label>\n</div>",
    language: "html",
    starterCode: "<!-- Create the theme switcher with a heading and toggle switch -->",
    solution: `<div class="app">
  <h1>Theme Switcher</h1>
  <label class="switch">
    <input type="checkbox" id="theme-toggle">
    <span class="slider"></span>
  </label>
</div>`,
    validation: [
      { mustInclude: ["class=\"app\"", "<h1>", "class=\"switch\"", "id=\"theme-toggle\""], message: "Your HTML is missing one of: a div with class=\"app\", an <h1> heading, a label with class=\"switch\", or a checkbox with id=\"theme-toggle\"." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the toggle switch.",
    instruction: "1. Style .switch with position: relative, display: inline-block, width: 60px, and height: 34px so it is a wide, flat container.\n2. Hide the checkbox visually but keep it accessible: set .switch input to opacity: 0.\n3. Style .slider with position: absolute, cursor: pointer, background: #ccc, border-radius: 34px, and transition: 0.4s for smooth animation.\n4. Use .slider:before to create the circular knob. Set content: \"\", height: 26px, width: 26px, border-radius: 50%, background: white, and transition: 0.4s.\n5. Use input:checked + .slider to change background to #333 when the toggle is active. This makes the knob slide to the other side.",
    hint: "CSS template:\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n.switch input { opacity: 0; }\n.slider {\n  position: absolute;\n  cursor: pointer;\n  background: #ccc;\n  border-radius: 34px;\n  transition: 0.4s;\n}\n.slider:before {\n  content: \"\";\n  height: 26px; width: 26px;\n  border-radius: 50%;\n  background: white;\n  transition: 0.4s;\n}\ninput:checked + .slider { background: #333; }",
    language: "css",
    starterCode: "/* Style the toggle switch with a sliding knob */",
    solution: `.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input { opacity: 0; }
.slider {
  position: absolute;
  cursor: pointer;
  background: #ccc;
  border-radius: 34px;
  transition: 0.4s;
}
.slider:before {
  content: "";
  height: 26px; width: 26px;
  border-radius: 50%;
  background: white;
  transition: 0.4s;
}
input:checked + .slider { background: #333; }`,
    validation: [
      { mustInclude: [".switch", ".slider", "border-radius", "transition"], message: "Your .switch and .slider selectors need border-radius and transition properties. Check that both selectors are properly styled." },
      { mustInclude: ["input:checked", ".slider:before"], message: "You are missing either the input:checked + .slider state (for active color) or the .slider:before pseudo-element (for the circular knob). Both are needed for the toggle to work." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the JavaScript for theme toggling.",
    instruction: "1. Use document.getElementById('theme-toggle') to get the checkbox element and store it in a variable.\n2. Add a 'change' event listener to the checkbox using addEventListener.\n3. Inside the listener, use document.body.classList.toggle('dark-mode', toggle.checked) to add or remove the 'dark-mode' class on the body.\n4. Save the preference to localStorage: use localStorage.setItem('theme', toggle.checked ? 'dark' : 'light').\n5. After the listener, add an if statement to check localStorage.getItem('theme') === 'dark'. If true, add the 'dark-mode' class to the body and set the checkbox to checked.",
    hint: "JavaScript template:\nconst toggle = document.getElementById('theme-toggle');\ntoggle.addEventListener('change', () => {\n  document.body.classList.toggle('dark-mode', toggle.checked);\n  localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');\n});\n// Restore saved preference on page load\nif (localStorage.getItem('theme') === 'dark') {\n  document.body.classList.add('dark-mode');\n  toggle.checked = true;\n}",
    language: "js",
    starterCode: "// Add event listener and localStorage persistence for the theme toggle",
    solution: `const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);
  localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
});
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggle.checked = true;
}`,
    validation: [
      { mustInclude: ["getElementById", "addEventListener", "classList.toggle", "localStorage"], message: "Your code needs: getElementById to get the checkbox, addEventListener for the change event, classList.toggle to switch the dark-mode class, and localStorage.setItem to save the preference." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Theme Switcher is complete!",
    instruction: "Click 'Run Project' to test your fully functional dark mode toggle.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const counterSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the HTML for the counter app.",
    instruction: "1. Create a <div> with class=\"container\".\n2. Inside, add a <p> with id=\"count\"> and the starting text '0'. This shows the current count.\n3. Add three buttons in this order:\n   - A button with text '-' that calls decrement() on click.\n   - A button with text 'Reset' that calls resetCount() on click.\n   - A button with text '+' that calls increment() on click.",
    hint: "Your HTML should look like:\n<div class=\"container\">\n  <p id=\"count\">0</p>\n  <button onclick=\"decrement()\">-</button>\n  <button onclick=\"resetCount()\">Reset</button>\n  <button onclick=\"increment()\">+</button>\n</div>",
    language: "html",
    starterCode: "<!-- Create a counter with display, decrement, reset, and increment buttons -->",
    solution: `<div class="container">
  <p id="count">0</p>
  <button onclick="decrement()">-</button>
  <button onclick="resetCount()">Reset</button>
  <button onclick="increment()">+</button>
</div>`,
    validation: [
      { mustInclude: ["id=\"count\"", "onclick=\"decrement\"", "onclick=\"resetCount\"", "onclick=\"increment\""], message: "Your HTML needs a paragraph with id=\"count\" and three buttons with onclick handlers for decrement(), resetCount(), and increment(). One or more is missing." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the counter app.",
    instruction: "1. Style .container with text-align: center and padding.\n2. Style #count with font-size: 4rem and font-weight: bold so the number is large and prominent.\n3. Style all buttons with padding, border: none, border-radius, white text, and cursor: pointer.\n4. Give the '-' button a red background, 'Reset' a gray background, and '+' a green background (you can use nth-child selectors or inline styles).",
    hint: "CSS template:\n.container {\n  text-align: center;\n  padding: 2rem;\n}\n#count {\n  font-size: 4rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\nbutton {\n  padding: 0.5rem 1.5rem;\n  margin: 0 0.25rem;\n  border: none;\n  border-radius: 8px;\n  color: white;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\nbutton:nth-child(2) { background: #ef4444; } /* - */\nbutton:nth-child(3) { background: #6b7280; } /* Reset */\nbutton:nth-child(4) { background: #10b981; } /* + */",
    language: "css",
    starterCode: "/* Style the counter container, display, and buttons */",
    solution: `.container {
  text-align: center;
  padding: 2rem;
}
#count {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
button {
  padding: 0.5rem 1.5rem;
  margin: 0 0.25rem;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}`,
    validation: [
      { mustInclude: [".container", "text-align", "#count", "font-size"], message: "Your .container needs text-align: center and your #count needs a large font-size. Check that both selectors are present and have the right properties." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the JavaScript counter logic.",
    instruction: "1. Create a global variable called count and set it to 0 (let count = 0;).\n2. Create a function called increment() that: adds 1 to count (count++), then updates the <p id=\"count\"> element's textContent with the new value of count.\n3. Create a function called decrement() that: subtracts 1 from count (count--), then updates the display.\n4. Create a function called resetCount() that: sets count back to 0, then updates the display.",
    hint: "JavaScript template:\nlet count = 0;\nfunction increment() {\n  count++;\n  document.getElementById('count').textContent = count;\n}\nfunction decrement() {\n  count--;\n  document.getElementById('count').textContent = count;\n}\nfunction resetCount() {\n  count = 0;\n  document.getElementById('count').textContent = count;\n}",
    language: "js",
    starterCode: "// Write increment, decrement, and resetCount functions",
    solution: `let count = 0;
function increment() {
  count++;
  document.getElementById('count').textContent = count;
}
function decrement() {
  count--;
  document.getElementById('count').textContent = count;
}
function resetCount() {
  count = 0;
  document.getElementById('count').textContent = count;
}`,
    validation: [
      { mustInclude: ["function increment", "function decrement", "function resetCount", "getElementById"], message: "Your code is missing one of the three functions (increment, decrement, or resetCount) or the getElementById() call to update the display. Check that all exist." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Counter App is complete!",
    instruction: "Click 'Run Project' to test your interactive counter with increment, decrement, and reset.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const todoSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the HTML for the todo list.",
    instruction: "1. Create a <div> with class=\"container\".\n2. Inside, add an <input type=\"text\" id=\"todo-input\" placeholder=\"Add a task...\"> where users type their task.\n3. Add a <button> with text 'Add' that calls addTodo() on click.\n4. Add an empty <ul id=\"todo-list\"></ul> where the tasks will appear as list items.",
    hint: "Your HTML should look like:\n<div class=\"container\">\n  <input type=\"text\" id=\"todo-input\" placeholder=\"Add a task...\">\n  <button onclick=\"addTodo()\">Add</button>\n  <ul id=\"todo-list\"></ul>\n</div>",
    language: "html",
    starterCode: "<!-- Create a todo list with an input, add button, and an empty list -->",
    solution: `<div class="container">
  <input type="text" id="todo-input" placeholder="Add a task...">
  <button onclick="addTodo()">Add</button>
  <ul id="todo-list"></ul>
</div>`,
    validation: [
      { mustInclude: ["id=\"todo-input\"", "onclick=\"addTodo\"", "id=\"todo-list\""], message: "Your HTML needs an input with id=\"todo-input\", a button with onclick=\"addTodo()\", and a <ul> with id=\"todo-list\". At least one is missing." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the todo list nicely.",
    instruction: "1. Style .container with max-width: 400px, margin: 0 auto, and padding: 1rem to center and constrain the width.\n2. Style the input with padding, a border (1px solid #ccc), and border-radius: 4px.\n3. Style li items with display: flex, justify-content: space-between, padding, margin, background: #f3f4f6, and border-radius: 4px. This makes each task look like a card.",
    hint: "CSS template:\n.container {\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 1rem;\n}\ninput {\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin-right: 0.5rem;\n}\nli {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem;\n  margin: 0.25rem 0;\n  background: #f3f4f6;\n  border-radius: 4px;\n}",
    language: "css",
    starterCode: "/* Style the todo input, list, and items */",
    solution: `.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
}
input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 0.5rem;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin: 0.25rem 0;
  background: #f3f4f6;
  border-radius: 4px;
}`,
    validation: [
      { mustInclude: [".container", "input", "li", "border-radius"], message: "Your CSS is missing one or more of: the .container, input, or li selectors, or a border-radius property. Check that all three selectors are styled." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the JavaScript for managing todos.",
    instruction: "1. Create a const array called todos (e.g., const todos = []) to store your task strings.\n2. Write a function called addTodo() that:\n   a. Gets the input element and its value.\n   b. Checks if the trimmed value is not empty.\n   c. Adds the task string to the todos array using push().\n   d. Clears the input field.\n   e. Calls renderTodos() to refresh the list.\n3. Write a function called renderTodos() that:\n   a. Gets the <ul id=\"todo-list\"> element.\n   b. Clears its innerHTML.\n   c. Loops through the todos array and creates <li> elements with the task text and a remove button that calls removeTodo(index).\n   d. Appends each <li> to the list.\n4. Write removeTodo(index) that removes the item at that index from the array and calls renderTodos().",
    hint: "JavaScript template:\nconst todos = [];\nfunction addTodo() {\n  const input = document.getElementById('todo-input');\n  if (input.value.trim()) {\n    todos.push(input.value.trim());\n    input.value = '';\n    renderTodos();\n  }\n}\nfunction renderTodos() {\n  const list = document.getElementById('todo-list');\n  list.innerHTML = '';\n  todos.forEach((item, i) => {\n    const li = document.createElement('li');\n    li.innerHTML = item + ' <button onclick=\"removeTodo(' + i + ')\">&times;</button>';\n    list.appendChild(li);\n  });\n}\nfunction removeTodo(index) {\n  todos.splice(index, 1);\n  renderTodos();\n}",
    language: "js",
    starterCode: "// Write functions to add todos and render the list",
    solution: `const todos = [];
function addTodo() {
  const input = document.getElementById('todo-input');
  if (input.value.trim()) {
    todos.push(input.value.trim());
    input.value = '';
    renderTodos();
  }
}
function renderTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';
  todos.forEach((item, i) => {
    const li = document.createElement('li');
    li.innerHTML = item + ' <button onclick="removeTodo(' + i + ')">&times;</button>';
    list.appendChild(li);
  });
}
function removeTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}`,
    validation: [
      { mustInclude: ["function addTodo", "function renderTodos", "function removeTodo", "createElement"], message: "Your code is missing one of the three functions (addTodo, renderTodos, removeTodo) or the createElement() call used to build list items." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Todo List is ready!",
    instruction: "Click 'Run Project' to add, remove, and manage your todo items interactively.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const calculatorSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the HTML for the calculator.",
    instruction: "1. Create a <div> with class=\"calc\"> (the calculator container).\n2. Inside, add a <div id=\"display\">0</div> that shows the current value.\n3. Create buttons in this order:\n   - Clear button: <button onclick=\"clearDisplay()\">C</button>\n   - Operator buttons: +, -, *, / (use &times; for multiplication) — each calling op('symbol')\n   - Digit buttons 7, 8, 9, 4, 5, 6, 1, 2, 3, 0 — each calling input('digit')\n   - Decimal button: calling input('.')\n   - Equals button: calling calculate()\n4. Make sure every number and operator button has the correct onclick handler.",
    hint: "Your HTML should include:\n<div class=\"calc\">\n  <div id=\"display\">0</div>\n  <button onclick=\"clearDisplay()\">C</button>\n  <button onclick=\"op('+')\">+</button>\n  <button onclick=\"op('-')\">-</button>\n  <button onclick=\"op('*')\">&times;</button>\n  <button onclick=\"op('/')\">/</button>\n  <button onclick=\"input('7')\">7</button>\n  <button onclick=\"input('8')\">8</button>\n  <button onclick=\"input('9')\">9</button>\n  <button onclick=\"input('4')\">4</button>\n  <button onclick=\"input('5')\">5</button>\n  <button onclick=\"input('6')\">6</button>\n  <button onclick=\"input('1')\">1</button>\n  <button onclick=\"input('2')\">2</button>\n  <button onclick=\"input('3')\">3</button>\n  <button onclick=\"input('0')\">0</button>\n  <button onclick=\"input('.')\">.</button>\n  <button onclick=\"calculate()\">=</button>\n</div>",
    language: "html",
    starterCode: "<!-- Create a calculator with a display and buttons for digits, operators, and controls -->",
    solution: `<div class="calc">
  <div id="display">0</div>
  <button onclick="clearDisplay()">C</button>
  <button onclick="op('+')">+</button>
  <button onclick="op('-')">-</button>
  <button onclick="op('*')">&times;</button>
  <button onclick="op('/')">/</button>
  <button onclick="input('7')">7</button>
  <button onclick="input('8')">8</button>
  <button onclick="input('9')">9</button>
  <button onclick="input('4')">4</button>
  <button onclick="input('5')">5</button>
  <button onclick="input('6')">6</button>
  <button onclick="input('1')">1</button>
  <button onclick="input('2')">2</button>
  <button onclick="input('3')">3</button>
  <button onclick="input('0')">0</button>
  <button onclick="input('.')">.</button>
  <button onclick="calculate()">=</button>
</div>`,
    validation: [
      { mustInclude: ["id=\"display\"", "onclick=\"clearDisplay\"", "onclick=\"calculate\"", "onclick=\"input\""], message: "Your calculator is missing one of: a display div with id=\"display\", a clear button calling clearDisplay(), an equals button calling calculate(), or digit buttons calling input()." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the calculator with a grid layout.",
    instruction: "1. Style .calc with width: 240px, margin: 0 auto, padding, background: #f9fafb, and border-radius: 12px.\n2. Style #display with background: white, padding, text-align: right, font-size: 1.5rem, font-family: monospace, and a bottom border.\n3. Set up a grid for the buttons using display: grid and grid-template-columns: repeat(4, 1fr) on the .calc container.\n4. Style all buttons with padding, border-radius, font-size, and cursor: pointer.\n5. Consider adding distinct colors: operator buttons orange, clear button red, equals button blue (use nth-child or class selectors).",
    hint: "CSS template:\n.calc {\n  width: 240px;\n  margin: 0 auto;\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 12px;\n}\n#display {\n  background: white;\n  padding: 1rem;\n  margin-bottom: 0.5rem;\n  text-align: right;\n  font-size: 1.5rem;\n  font-family: monospace;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\nbutton {\n  padding: 0.75rem;\n  margin: 0.125rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 1.1rem;\n  cursor: pointer;\n  background: #f3f4f6;\n}",
    language: "css",
    starterCode: "/* Style the calculator with a grid layout for buttons */",
    solution: `.calc {
  width: 240px;
  margin: 0 auto;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 12px;
}
#display {
  background: white;
  padding: 1rem;
  margin-bottom: 0.5rem;
  text-align: right;
  font-size: 1.5rem;
  font-family: monospace;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}
button {
  padding: 0.75rem;
  margin: 0.125rem;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  background: #f3f4f6;
}`,
    validation: [
      { mustInclude: [".calc", "#display", "grid-template-columns", "button"], message: "Your CSS is missing one or more of: the .calc container, #display styling, grid-template-columns for the button layout, or button styling." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the calculator logic.",
    instruction: "1. Create three global variables:\n   - let display = '0' (the current value shown on screen)\n   - let firstVal = null (stores the first number when an operator is pressed)\n   - let operator = null (stores which operator was pressed)\n2. Create input(val) that appends val to the display string and updates the display. If the display is '0', replace it (unless val is '.').\n3. Create op(operator) that stores the current display value in firstVal and the operator, then resets display to '0'.\n4. Create calculate() that reads the second number, uses if/else to perform the right math based on the stored operator, and shows the result.\n5. Create clearDisplay() that resets all variables to their starting values.",
    hint: "JavaScript template:\nlet display = '0';\nlet firstVal = null;\nlet operator = null;\nfunction input(val) {\n  display = display === '0' && val !== '.' ? val : display + val;\n  document.getElementById('display').textContent = display;\n}\nfunction op(op) {\n  firstVal = parseFloat(display);\n  operator = op;\n  display = '0';\n}\nfunction calculate() {\n  if (!operator) return;\n  const second = parseFloat(display);\n  let result = 0;\n  if (operator === '+') result = firstVal + second;\n  else if (operator === '-') result = firstVal - second;\n  else if (operator === '*') result = firstVal * second;\n  else if (operator === '/') result = second !== 0 ? firstVal / second : 0;\n  display = String(result);\n  document.getElementById('display').textContent = display;\n  operator = null;\n}\nfunction clearDisplay() {\n  display = '0';\n  firstVal = null;\n  operator = null;\n  document.getElementById('display').textContent = display;\n}",
    language: "js",
    starterCode: "// Write input, operator, calculate, and clear functions",
    solution: `let display = '0';
let firstVal = null;
let operator = null;
function input(val) {
  display = display === '0' && val !== '.' ? val : display + val;
  document.getElementById('display').textContent = display;
}
function op(op) {
  firstVal = parseFloat(display);
  operator = op;
  display = '0';
}
function calculate() {
  if (!operator) return;
  const second = parseFloat(display);
  let result = 0;
  if (operator === '+') result = firstVal + second;
  else if (operator === '-') result = firstVal - second;
  else if (operator === '*') result = firstVal * second;
  else if (operator === '/') result = second !== 0 ? firstVal / second : 0;
  display = String(result);
  document.getElementById('display').textContent = display;
  operator = null;
}
function clearDisplay() {
  display = '0';
  firstVal = null;
  operator = null;
  document.getElementById('display').textContent = display;
}`,
    validation: [
      { mustInclude: ["function input", "function op", "function calculate", "function clearDisplay"], message: "Your code is missing one of the four required functions: input(), op(), calculate(), or clearDisplay(). Check that all are defined." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Calculator is ready!",
    instruction: "Click 'Run Project' to test your fully functional calculator.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const clockSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the HTML for the digital clock.",
    instruction: "1. Create a <div> with class=\"container\".\n2. Inside, add a <div> with id=\"time\"> and display a placeholder time like '12:00:00'.\n3. Add a <p> with id=\"date\"> and show a placeholder date like 'Monday, January 1, 2024'.",
    hint: "Your HTML should look like:\n<div class=\"container\">\n  <div id=\"time\">12:00:00</div>\n  <p id=\"date\">Monday, January 1, 2024</p>\n</div>",
    language: "html",
    starterCode: "<!-- Create a container with a time display and a date display -->",
    solution: `<div class="container">
  <div id="time">12:00:00</div>
  <p id="date">Monday, January 1, 2024</p>
</div>`,
    validation: [
      { mustInclude: ["id=\"time\"", "id=\"date\""], message: "Your HTML needs both a div with id=\"time\" for the clock display and a paragraph with id=\"date\" for the date. One of them is missing." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the digital clock.",
    instruction: "1. Style .container with text-align: center and padding: 2rem.\n2. Style #time with font-size: 3.5rem, font-family: monospace, font-weight: bold, letter-spacing: 0.1em, and a dark text color (#1f2937).\n3. Style #date with a smaller font-size (1rem), muted gray color (#6b7280), and some top margin so it sits below the time.",
    hint: "CSS template:\n.container {\n  text-align: center;\n  padding: 2rem;\n}\n#time {\n  font-size: 3.5rem;\n  font-family: monospace;\n  font-weight: bold;\n  letter-spacing: 0.1em;\n  color: #1f2937;\n}\n#date {\n  font-size: 1rem;\n  color: #6b7280;\n  margin-top: 0.5rem;\n}",
    language: "css",
    starterCode: "/* Style the clock with large monospace time display */",
    solution: `.container {
  text-align: center;
  padding: 2rem;
}
#time {
  font-size: 3.5rem;
  font-family: monospace;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: #1f2937;
}
#date {
  font-size: 1rem;
  color: #6b7280;
  margin-top: 0.5rem;
}`,
    validation: [
      { mustInclude: [".container", "text-align", "#time", "font-family: monospace"], message: "Your .container needs text-align: center and your #time needs font-family: monospace to style the clock properly." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the JavaScript to update the clock every second.",
    instruction: "1. Create a function called updateClock().\n2. Inside, create a new Date object: const now = new Date().\n3. Extract hours, minutes, and seconds using getHours(), getMinutes(), getSeconds().\n4. Convert each to a string and use padStart(2, '0') to ensure they are always two digits (e.g., '09' not '9').\n5. Combine them with colons (e.g., h + ':' + m + ':' + s) and set the textContent of #time.\n6. For the date, use now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) and set it as the textContent of #date.\n7. After defining the function, call it once (updateClock()) and set an interval: setInterval(updateClock, 1000) to update every second.",
    hint: "JavaScript template:\nfunction updateClock() {\n  const now = new Date();\n  const h = String(now.getHours()).padStart(2, '0');\n  const m = String(now.getMinutes()).padStart(2, '0');\n  const s = String(now.getSeconds()).padStart(2, '0');\n  document.getElementById('time').textContent = h + ':' + m + ':' + s;\n  document.getElementById('date').textContent = now.toLocaleDateString('en-US', {\n    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'\n  });\n}\nupdateClock();\nsetInterval(updateClock, 1000);",
    language: "js",
    starterCode: "// Write updateClock() and set an interval to run it every second",
    solution: `function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('time').textContent = h + ':' + m + ':' + s;
  document.getElementById('date').textContent = now.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
}
updateClock();
setInterval(updateClock, 1000);`,
    validation: [
      { mustInclude: ["function updateClock", "new Date()", "setInterval", "getElementById"], message: "You need a function called updateClock() that creates a new Date() object and uses getElementById() to update the display. Also add setInterval() to refresh every second." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Digital Clock is live!",
    instruction: "Click 'Run Project' to see your real-time digital clock ticking.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const tipSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the HTML for the tip calculator.",
    instruction: "1. Create a <div> with class=\"container\">.\n2. Add a <label> with a bill input: <input type=\"number\" id=\"bill\" value=\"50\" oninput=\"calcTip()\">.\n3. Add a <label> with a tip percentage: a <span id=\"tip-label\">15%</span> and an <input type=\"range\" id=\"tip\" min=\"0\" max=\"30\" value=\"15\" oninput=\"calcTip()\">.\n4. Add a <p> showing 'Tip Amount: <span id=\"tip-amount\">$0.00</span>'.\n5. Add a <p> showing 'Total: <span id=\"total\">$0.00</span>'.\n6. Make sure both the bill input and tip slider call calcTip() on input events.",
    hint: "Your HTML should look like:\n<div class=\"container\">\n  <label>Bill: <input type=\"number\" id=\"bill\" value=\"50\" oninput=\"calcTip()\"></label>\n  <label>Tip: <span id=\"tip-label\">15%</span> <input type=\"range\" id=\"tip\" min=\"0\" max=\"30\" value=\"15\" oninput=\"calcTip()\"></label>\n  <p>Tip Amount: <span id=\"tip-amount\">$0.00</span></p>\n  <p>Total: <span id=\"total\">$0.00</span></p>\n</div>",
    language: "html",
    starterCode: "<!-- Create a tip calculator with bill input, tip slider, and result displays -->",
    solution: `<div class="container">
  <label>Bill: <input type="number" id="bill" value="50" oninput="calcTip()"></label>
  <label>Tip: <span id="tip-label">15%</span> <input type="range" id="tip" min="0" max="30" value="15" oninput="calcTip()"></label>
  <p>Tip Amount: <span id="tip-amount">$0.00</span></p>
  <p>Total: <span id="total">$0.00</span></p>
</div>`,
    validation: [
      { mustInclude: ["id=\"bill\"", "id=\"tip\"", "id=\"tip-amount\"", "id=\"total\""], message: "Your HTML is missing one or more of: bill input (id=\"bill\"), tip slider (id=\"tip\"), tip amount display (id=\"tip-amount\"), or total display (id=\"total\")." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the tip calculator.",
    instruction: "1. Style .container with max-width: 350px, margin: 0 auto, and padding to center the calculator.\n2. Style label elements with display: block and bottom margin so each input sits on its own line.\n3. Style input[type=\"number\"] with full width, padding, border, and border-radius.\n4. Consider adding a .results class for the tip and total area with a light gray background and rounded corners (optional, but matches the solution).",
    hint: "CSS template:\n.container {\n  max-width: 350px;\n  margin: 0 auto;\n  padding: 1.5rem;\n}\nlabel {\n  display: block;\n  margin-bottom: 1rem;\n}\ninput[type=\"number\"] {\n  width: 100%;\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.results {\n  background: #f3f4f6;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-top: 1rem;\n}",
    language: "css",
    starterCode: "/* Style the tip calculator layout */",
    solution: `.container {
  max-width: 350px;
  margin: 0 auto;
  padding: 1.5rem;
}
label {
  display: block;
  margin-bottom: 1rem;
}
input[type="number"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.results {
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}`,
    validation: [
      { mustInclude: [".container", "label", "border-radius"], message: "Your CSS is missing one or more of: the .container selector, a label selector, or a border-radius property for rounded corners." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the tip calculation logic.",
    instruction: "1. Create a function called calcTip().\n2. Inside, get the bill amount: use parseFloat() on the value of '#bill' input. Use || 0 to default to 0 if empty.\n3. Get the tip percentage: use parseInt() on the value of '#tip' input. Use || 0 to default to 0.\n4. Calculate the tip amount: tip = bill * (percent / 100).\n5. Calculate the total: total = bill + tip.\n6. Update the tip label (#tip-label) with the percentage + '%'.\n7. Update #tip-amount with '$' + tip.toFixed(2).\n8. Update #total with '$' + total.toFixed(2).\n9. Call calcTip() once at the end so the display starts with calculated values.",
    hint: "JavaScript template:\nfunction calcTip() {\n  const bill = parseFloat(document.getElementById('bill').value) || 0;\n  const percent = parseInt(document.getElementById('tip').value) || 0;\n  const tip = bill * (percent / 100);\n  const total = bill + tip;\n  document.getElementById('tip-label').textContent = percent + '%';\n  document.getElementById('tip-amount').textContent = '$' + tip.toFixed(2);\n  document.getElementById('total').textContent = '$' + total.toFixed(2);\n}\ncalcTip();",
    language: "js",
    starterCode: "// Write calcTip() to calculate and display the tip and total",
    solution: `function calcTip() {
  const bill = parseFloat(document.getElementById('bill').value) || 0;
  const percent = parseInt(document.getElementById('tip').value) || 0;
  const tip = bill * (percent / 100);
  const total = bill + tip;
  document.getElementById('tip-label').textContent = percent + '%';
  document.getElementById('tip-amount').textContent = '$' + tip.toFixed(2);
  document.getElementById('total').textContent = '$' + total.toFixed(2);
}
calcTip();`,
    validation: [
      { mustInclude: ["function calcTip", "parseFloat", "getElementById", "toFixed"], message: "You need a function called calcTip() that uses parseFloat()/parseInt() to read inputs, getElementById() to update displays, and toFixed(2) for currency formatting." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Tip Calculator is ready!",
    instruction: "Click 'Run Project' to try your interactive tip calculator with real-time updates.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const tictactoeSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the Tic-Tac-Toe board HTML.",
    instruction: "1. Create a <div> with class=\"game\"> as the main container.\n2. Add a <div id=\"status\"> showing 'Player X\\'s turn' as the game status.\n3. Add a <div> with class=\"board\">. Inside, create 9 cell divs with:\n   - id=\"cell-0\" through id=\"cell-8\"\n   - class=\"cell\" on each\n   - onclick=\"play(0)\" through onclick=\"play(8)\"\n4. Add a <button> with text 'Reset' that calls resetGame().",
    hint: 'Your HTML should look like:\n<div class="game">\n  <div id="status">Player X\'s turn</div>\n  <div class="board">\n    <div id="cell-0" class="cell" onclick="play(0)"></div>\n    <div id="cell-1" class="cell" onclick="play(1)"></div>\n    <div id="cell-2" class="cell" onclick="play(2)"></div>\n    <div id="cell-3" class="cell" onclick="play(3)"></div>\n    <div id="cell-4" class="cell" onclick="play(4)"></div>\n    <div id="cell-5" class="cell" onclick="play(5)"></div>\n    <div id="cell-6" class="cell" onclick="play(6)"></div>\n    <div id="cell-7" class="cell" onclick="play(7)"></div>\n    <div id="cell-8" class="cell" onclick="play(8)"></div>\n  </div>\n  <button onclick="resetGame()">Reset</button>\n</div>',
    language: "html",
    starterCode: "<!-- Create a Tic-Tac-Toe board with 9 cells, a status display, and a reset button -->",
    solution: `<div class="game">
  <div id="status">Player X's turn</div>
  <div class="board">
    <div id="cell-0" class="cell" onclick="play(0)"></div>
    <div id="cell-1" class="cell" onclick="play(1)"></div>
    <div id="cell-2" class="cell" onclick="play(2)"></div>
    <div id="cell-3" class="cell" onclick="play(3)"></div>
    <div id="cell-4" class="cell" onclick="play(4)"></div>
    <div id="cell-5" class="cell" onclick="play(5)"></div>
    <div id="cell-6" class="cell" onclick="play(6)"></div>
    <div id="cell-7" class="cell" onclick="play(7)"></div>
    <div id="cell-8" class="cell" onclick="play(8)"></div>
  </div>
  <button onclick="resetGame()">Reset</button>
</div>`,
    validation: [
      { mustInclude: ["id=\"status\"", "class=\"board\"", "class=\"cell\"", "onclick=\"resetGame\""], message: "Your HTML needs a status display (id=\"status\"), a board div (class=\"board\"), cell divs (class=\"cell\"), and a reset button (onclick=\"resetGame()\")." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the Tic-Tac-Toe board.",
    instruction: "1. Style .game with text-align: center and padding.\n2. Style .board with display: grid, grid-template-columns: repeat(3, 80px), gap: 4px, justify-content: center, and centered margin.\n3. Style .cell with width and height of 80px, display: flex for centering, font-size: 2rem, background: #f3f4f6, border: 2px solid #d1d5db, border-radius: 8px, and cursor: pointer.\n4. Add a hover effect: .cell:hover { background: #e5e7eb }.\n5. Style #status with a large bold font and bottom margin.",
    hint: "CSS template:\n.game { text-align: center; padding: 1rem; }\n.board {\n  display: grid;\n  grid-template-columns: repeat(3, 80px);\n  gap: 4px;\n  justify-content: center;\n  margin: 1rem auto;\n}\n.cell {\n  width: 80px; height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem; font-weight: bold;\n  background: #f3f4f6;\n  border: 2px solid #d1d5db;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.cell:hover { background: #e5e7eb; }\n#status { font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem; }",
    language: "css",
    starterCode: "/* Style the Tic-Tac-Toe board, cells, and status */",
    solution: `.game { text-align: center; padding: 1rem; }
.board {
  display: grid;
  grid-template-columns: repeat(3, 80px);
  gap: 4px;
  justify-content: center;
  margin: 1rem auto;
}
.cell {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  background: #f3f4f6;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  cursor: pointer;
}
.cell:hover { background: #e5e7eb; }
#status { font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem; }`,
    validation: [
      { mustInclude: [".board", "grid-template-columns", ".cell", "cursor: pointer"], message: "Your CSS needs a .board with grid-template-columns for the 3-column layout and .cell with cursor: pointer for clickable cells." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the Tic-Tac-Toe game logic.",
    instruction: "1. Create a board array: let board = Array(9).fill(null) to track X and O placements.\n2. Create a variable: let xNext = true to track whose turn it is.\n3. Write a play(index) function that:\n   - Returns early if the cell is already filled or there is a winner.\n   - Sets board[index] to 'X' or 'O' based on xNext.\n   - Flips xNext (xNext = !xNext).\n   - Calls render() to update the display.\n4. Write checkWinner() that checks all 8 winning lines (3 rows, 3 columns, 2 diagonals) and returns the winner or null.\n5. Write resetGame() that resets board to all null, xNext to true, and calls render().\n6. Write a render() function that updates each cell's textContent based on the board array and updates the status (winner, draw, or whose turn).",
    hint: "JavaScript template:\nlet board = Array(9).fill(null);\nlet xNext = true;\nfunction play(index) {\n  if (board[index] || checkWinner()) return;\n  board[index] = xNext ? 'X' : 'O';\n  xNext = !xNext;\n  render();\n}\nfunction render() {\n  const cells = document.querySelectorAll('.cell');\n  board.forEach((val, i) => { cells[i].textContent = val || ''; });\n  const winner = checkWinner();\n  const status = document.getElementById('status');\n  if (winner) status.textContent = 'Winner: ' + winner;\n  else if (board.every(c => c)) status.textContent = 'Draw!';\n  else status.textContent = 'Player ' + (xNext ? 'X' : 'O') + \"'s turn\";\n}\nfunction checkWinner() {\n  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];\n  for (const [a,b,c] of lines) {\n    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];\n  }\n  return null;\n}\nfunction resetGame() {\n  board = Array(9).fill(null);\n  xNext = true;\n  render();\n}",
    language: "js",
    starterCode: "// Write the Tic-Tac-Toe game logic with play, win checking, and reset",
    solution: `let board = Array(9).fill(null);
let xNext = true;
function play(index) {
  if (board[index] || checkWinner()) return;
  board[index] = xNext ? 'X' : 'O';
  xNext = !xNext;
  render();
}
function render() {
  const cells = document.querySelectorAll('.cell');
  board.forEach((val, i) => { cells[i].textContent = val || ''; });
  const winner = checkWinner();
  const status = document.getElementById('status');
  if (winner) status.textContent = 'Winner: ' + winner;
  else if (board.every(c => c)) status.textContent = 'Draw!';
  else status.textContent = 'Player ' + (xNext ? 'X' : 'O') + "'s turn";
}
function checkWinner() {
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for (const [a,b,c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  return null;
}
function resetGame() {
  board = Array(9).fill(null);
  xNext = true;
  render();
}`,
    validation: [
      { mustInclude: ["function play", "function checkWinner", "function resetGame", "querySelectorAll"], message: "Your code is missing one of: play(), checkWinner(), resetGame() functions, or querySelectorAll() to update the cell displays." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Tic-Tac-Toe game is complete!",
    instruction: "Click 'Run Project' to play a full game of Tic-Tac-Toe.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const quizSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the HTML for the quiz app.",
    instruction: "1. Create a <div> with class=\"quiz\"> as the container.\n2. Inside, add a <div id=\"question\"> with placeholder text 'Loading...'.\n3. Add a <div id=\"options\"> (empty) where answer buttons will be created by JavaScript.\n4. Add a <p id=\"score-display\"> containing 'Score: <span id=\"score\">0</span>'.\n5. Add a <button id=\"next-btn\" onclick=\"nextQ()\">Next</button> that starts hidden (style=\"display:none\").",
    hint: "Your HTML should look like:\n<div class=\"quiz\">\n  <div id=\"question\">Loading...</div>\n  <div id=\"options\"></div>\n  <p id=\"score-display\">Score: <span id=\"score\">0</span></p>\n  <button id=\"next-btn\" onclick=\"nextQ()\" style=\"display:none\">Next</button>\n</div>",
    language: "html",
    starterCode: "<!-- Create a quiz app with question display, options area, score, and next button -->",
    solution: `<div class="quiz">
  <div id="question">Loading...</div>
  <div id="options"></div>
  <p id="score-display">Score: <span id="score">0</span></p>
  <button id="next-btn" onclick="nextQ()" style="display:none">Next</button>
</div>`,
    validation: [
      { mustInclude: ["id=\"question\"", "id=\"options\"", "id=\"score\"", "id=\"next-btn\""], message: "Your HTML needs a question div (id=\"question\"), an options container (id=\"options\"), a score span (id=\"score\"), and a next button (id=\"next-btn\")." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the quiz app.",
    instruction: "1. Style .quiz with max-width: 500px, margin: 0 auto, padding, and text-align: center.\n2. Style #question with a bold font and bottom margin.\n3. Style .option buttons with display: block, full width, padding, margin, border: 2px solid #e5e7eb, border-radius: 8px, background: white, cursor: pointer, and a hover effect.\n4. Add .option.correct with green background (#d1fae5) and green border (#10b981).\n5. Add .option.wrong with red background (#fee2e2) and red border (#ef4444).",
    hint: "CSS template:\n.quiz {\n  max-width: 500px;\n  margin: 0 auto;\n  padding: 1.5rem;\n  text-align: center;\n}\n#question {\n  font-size: 1.2rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n.option {\n  display: block;\n  width: 100%;\n  padding: 0.75rem;\n  margin: 0.5rem 0;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\n.option:hover { background: #f3f4f6; }\n.option.correct { background: #d1fae5; border-color: #10b981; }\n.option.wrong { background: #fee2e2; border-color: #ef4444; }",
    language: "css",
    starterCode: "/* Style the quiz layout, options, and answer feedback */",
    solution: `.quiz {
  max-width: 500px;
  margin: 0 auto;
  padding: 1.5rem;
  text-align: center;
}
#question {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.option {
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
}
.option:hover { background: #f3f4f6; }
.option.correct { background: #d1fae5; border-color: #10b981; }
.option.wrong { background: #fee2e2; border-color: #ef4444; }`,
    validation: [
      { mustInclude: [".quiz", ".option", "border-radius", "cursor: pointer"], message: "Your CSS needs a .quiz container, .option button styles with border-radius for rounded corners, and cursor: pointer for clickable options." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the quiz logic.",
    instruction: "1. Create a questions array where each question is an object: { q: 'Question text', o: ['Option1', 'Option2', ...], a: correctIndex }.\n2. Create variables: let current = 0 (current question index) and let score = 0.\n3. Write loadQ() that:\n   - Gets the current question object.\n   - Sets #question textContent to the question.\n   - Clears #options.\n   - Hides the next button.\n   - Loops through the options array, creates a <button> for each with class \"option\", sets its text, and adds an onclick handler that calls answer(i).\n4. Write answer(i) that:\n   - Disables all option buttons.\n   - Highlights the correct one green and the wrong one (if chosen) red.\n   - If correct, increments the score and updates #score.\n   - Shows the next button.\n5. Write nextQ() that moves to the next question or shows a completion message.\n6. Call loadQ() at the end to start the quiz.",
    hint: "JavaScript template:\nconst questions = [\n  { q: 'What does HTML stand for?', o: ['Hyper Text Markup Language', 'High Tech Language', 'Home Tool Markup', 'Hyper Transfer Markup'], a: 0 },\n  // add more questions...\n];\nlet current = 0;\nlet score = 0;\nfunction loadQ() {\n  const q = questions[current];\n  document.getElementById('question').textContent = q.q;\n  const opts = document.getElementById('options');\n  opts.innerHTML = '';\n  document.getElementById('next-btn').style.display = 'none';\n  q.o.forEach((text, i) => {\n    const btn = document.createElement('button');\n    btn.className = 'option';\n    btn.textContent = text;\n    btn.onclick = () => answer(i);\n    opts.appendChild(btn);\n  });\n}\nfunction answer(i) {\n  // ... disable options, highlight correct/wrong, update score ...\n}\nfunction nextQ() {\n  current++;\n  if (current < questions.length) loadQ();\n  else document.getElementById('question').textContent = 'Quiz complete! Score: ' + score + '/' + questions.length;\n}\nloadQ();",
    language: "js",
    starterCode: "// Write the quiz logic with questions array, scoring, and navigation",
    solution: `const questions = [
  { q: 'What does HTML stand for?', o: ['Hyper Text Markup Language', 'High Tech Language', 'Home Tool Markup', 'Hyper Transfer Markup'], a: 0 },
  { q: 'Which CSS property changes text color?', o: ['font-color', 'text-color', 'color', 'foreground'], a: 2 },
  { q: 'How do you declare a variable?', o: ['var x', 'let x', 'const x', 'All of these'], a: 3 }
];
let current = 0;
let score = 0;
function loadQ() {
  const q = questions[current];
  document.getElementById('question').textContent = q.q;
  const opts = document.getElementById('options');
  opts.innerHTML = '';
  document.getElementById('next-btn').style.display = 'none';
  q.o.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = text;
    btn.onclick = () => answer(i);
    opts.appendChild(btn);
  });
}
function answer(i) {
  const q = questions[current];
  const opts = document.querySelectorAll('.option');
  opts.forEach((btn, idx) => {
    btn.style.pointerEvents = 'none';
    if (idx === q.a) btn.classList.add('correct');
    else if (idx === i && i !== q.a) btn.classList.add('wrong');
  });
  if (i === q.a) { score++; document.getElementById('score').textContent = score; }
  document.getElementById('next-btn').style.display = 'inline-block';
}
function nextQ() {
  current++;
  if (current < questions.length) loadQ();
  else document.getElementById('question').textContent = 'Quiz complete! Score: ' + score + '/' + questions.length;
}
loadQ();`,
    validation: [
      { mustInclude: ["function loadQ", "function answer", "function nextQ", "createElement"], message: "Your code is missing one of: loadQ(), answer(), nextQ() functions, or the createElement() call used to build option buttons dynamically." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Quiz App is complete!",
    instruction: "Click 'Run Project' to test your knowledge with the interactive quiz.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const memorySteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the HTML for the memory game.",
    instruction: "1. Create a <div> with class=\"game\"> as the container.\n2. Add a <p> with 'Moves: <span id=\"moves\">0</span>' to track the number of moves.\n3. Create a <div> with class=\"grid\">. Inside, create 16 card <div> elements, each with:\n   - class=\"card\"\n   - onclick=\"flip(this)\"\n   - data-id=\"0\" through data-id=\"15\" (empty content — emojis will appear when flipped)\n4. Add a <button> with text 'Reset' that calls resetGame().",
    hint: 'Your HTML should look like:\n<div class="game">\n  <p>Moves: <span id="moves">0</span></p>\n  <div class="grid">\n    <div class="card" onclick="flip(this)" data-id="0"></div>\n    <div class="card" onclick="flip(this)" data-id="1"></div>\n    <div class="card" onclick="flip(this)" data-id="2"></div>\n    ... (through data-id="15")\n  </div>\n  <button onclick="resetGame()">Reset</button>\n</div>',
    language: "html",
    starterCode: "<!-- Create a memory game with a card grid, move counter, and reset button -->",
    solution: `<div class="game">
  <p>Moves: <span id="moves">0</span></p>
  <div class="grid">
    <div class="card" onclick="flip(this)" data-id="0"></div>
    <div class="card" onclick="flip(this)" data-id="1"></div>
    <div class="card" onclick="flip(this)" data-id="2"></div>
    <div class="card" onclick="flip(this)" data-id="3"></div>
    <div class="card" onclick="flip(this)" data-id="4"></div>
    <div class="card" onclick="flip(this)" data-id="5"></div>
    <div class="card" onclick="flip(this)" data-id="6"></div>
    <div class="card" onclick="flip(this)" data-id="7"></div>
    <div class="card" onclick="flip(this)" data-id="8"></div>
    <div class="card" onclick="flip(this)" data-id="9"></div>
    <div class="card" onclick="flip(this)" data-id="10"></div>
    <div class="card" onclick="flip(this)" data-id="11"></div>
    <div class="card" onclick="flip(this)" data-id="12"></div>
    <div class="card" onclick="flip(this)" data-id="13"></div>
    <div class="card" onclick="flip(this)" data-id="14"></div>
    <div class="card" onclick="flip(this)" data-id="15"></div>
  </div>
  <button onclick="resetGame()">Reset</button>
</div>`,
    validation: [
      { mustInclude: ["id=\"moves\"", "class=\"card\"", "onclick=\"flip", "onclick=\"resetGame\""], message: "Your HTML needs a move counter (id=\"moves\"), cards with class=\"card\" and onclick=\"flip(this)\", and a reset button calling resetGame()." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the memory game cards.",
    instruction: "1. Style .game with text-align: center and padding.\n2. Style .grid with display: grid, grid-template-columns: repeat(4, 80px), gap: 8px, and centered alignment.\n3. Style .card with width and height of 80px, display: flex for centering, font-size: 2rem, background: a blue gradient (linear-gradient(135deg, #60a5fa, #3b82f6)), border-radius: 10px, cursor: pointer, color: transparent (to hide the emoji), and user-select: none.\n4. Style .card.flipped with white background, a border, and color: inherit to reveal the emoji.\n5. Style .card.matched with green background and green border.",
    hint: "CSS template:\n.game { text-align: center; padding: 1rem; }\n.grid {\n  display: grid;\n  grid-template-columns: repeat(4, 80px);\n  gap: 8px;\n  justify-content: center;\n  margin: 1rem auto;\n}\n.card {\n  width: 80px; height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  background: linear-gradient(135deg, #60a5fa, #3b82f6);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: transparent;\n  user-select: none;\n}\n.card.flipped {\n  background: white;\n  border: 2px solid #e5e7eb;\n  color: inherit;\n}\n.card.matched {\n  background: #d1fae5;\n  border-color: #10b981;\n  color: inherit;\n}",
    language: "css",
    starterCode: "/* Style the memory game grid and cards */",
    solution: `.game { text-align: center; padding: 1rem; }
.grid {
  display: grid;
  grid-template-columns: repeat(4, 80px);
  gap: 8px;
  justify-content: center;
  margin: 1rem auto;
}
.card {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  color: transparent;
  user-select: none;
}
.card.flipped {
  background: white;
  border: 2px solid #e5e7eb;
  color: inherit;
}
.card.matched {
  background: #d1fae5;
  border-color: #10b981;
  color: inherit;
}`,
    validation: [
      { mustInclude: [".grid", "grid-template-columns: repeat(4", ".card", "border-radius"], message: "Your CSS is missing one of: the .grid with grid-template-columns for 4 columns, or the .card selector with border-radius for rounded corners." },
      { mustInclude: [".card.flipped", ".card.matched"], message: "You need both .card.flipped (for revealed cards) and .card.matched (for matched pairs) selectors to handle different card states." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the memory game logic.",
    instruction: "1. Create an array of 8 emojis and double it (using spread or concat) to make 16 total (8 pairs).\n2. Shuffle the array with: cards = emojis.sort(() => Math.random() - 0.5).\n3. Create variables: let flippedCards = [] (to track currently flipped cards), let moves = 0, and let locked = false (to prevent clicking during mismatch delay).\n4. Write flip(el) that:\n   - Returns if locked or card is already flipped/matched.\n   - Shows the emoji in the card (el.textContent = cards[el.dataset.id]) and adds 'flipped' class.\n   - Pushes the card into flippedCards.\n   - If two cards are flipped, increment moves, check if they match (compare data-id values in the cards array). If match, add 'matched' class. If not, use setTimeout to flip them back after 800ms.\n5. Write resetGame() to re-shuffle, clear all cards, reset flippedCards, moves, and locked.",
    hint: "JavaScript template:\nconst emojis = ['🐶','🐱','🐸','🦊','🐻','🐼','🐨','🦁','🐶','🐱','🐸','🦊','🐻','🐼','🐨','🦁'];\nlet cards = emojis.sort(() => Math.random() - 0.5);\nlet flippedCards = [];\nlet moves = 0;\nlet locked = false;\nfunction flip(el) {\n  if (locked || el.classList.contains('flipped') || el.classList.contains('matched')) return;\n  el.textContent = cards[el.dataset.id];\n  el.classList.add('flipped');\n  flippedCards.push(el);\n  if (flippedCards.length === 2) {\n    locked = true;\n    moves++;\n    document.getElementById('moves').textContent = moves;\n    if (cards[flippedCards[0].dataset.id] === cards[flippedCards[1].dataset.id]) {\n      flippedCards.forEach(c => c.classList.add('matched'));\n      flippedCards = [];\n      locked = false;\n    } else {\n      setTimeout(() => {\n        flippedCards.forEach(c => { c.textContent = ''; c.classList.remove('flipped'); });\n        flippedCards = [];\n        locked = false;\n      }, 800);\n    }\n  }\n}\nfunction resetGame() {\n  cards = emojis.sort(() => Math.random() - 0.5);\n  document.querySelectorAll('.card').forEach(c => { c.textContent = ''; c.className = 'card'; });\n  flippedCards = [];\n  moves = 0;\n  document.getElementById('moves').textContent = '0';\n  locked = false;\n}",
    language: "js",
    starterCode: "// Write the memory game logic with shuffle, flip, and match checking",
    solution: `const emojis = ['🐶','🐱','🐸','🦊','🐻','🐼','🐨','🦁','🐶','🐱','🐸','🦊','🐻','🐼','🐨','🦁'];
let cards = emojis.sort(() => Math.random() - 0.5);
let flippedCards = [];
let moves = 0;
let locked = false;
function flip(el) {
  if (locked || el.classList.contains('flipped') || el.classList.contains('matched')) return;
  el.textContent = cards[el.dataset.id];
  el.classList.add('flipped');
  flippedCards.push(el);
  if (flippedCards.length === 2) {
    locked = true;
    moves++;
    document.getElementById('moves').textContent = moves;
    if (cards[flippedCards[0].dataset.id] === cards[flippedCards[1].dataset.id]) {
      flippedCards.forEach(c => c.classList.add('matched'));
      flippedCards = [];
      locked = false;
    } else {
      setTimeout(() => {
        flippedCards.forEach(c => { c.textContent = ''; c.classList.remove('flipped'); });
        flippedCards = [];
        locked = false;
      }, 800);
    }
  }
}
function resetGame() {
  cards = emojis.sort(() => Math.random() - 0.5);
  document.querySelectorAll('.card').forEach(c => { c.textContent = ''; c.className = 'card'; });
  flippedCards = [];
  moves = 0;
  document.getElementById('moves').textContent = '0';
  locked = false;
}`,
    validation: [
      { mustInclude: ["function flip", "function resetGame", "classList.add", "classList.remove"], message: "You need both flip() and resetGame() functions. Make sure you use classList.add to flip cards and classList.remove to reset them." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Memory Game is ready!",
    instruction: "Click 'Run Project' to test your memory by matching all the pairs.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const pomodoroSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the HTML for the Pomodoro timer.",
    instruction: "1. Create a <div> with class=\"container\">.\n2. Add a <div id=\"mode\"> with text 'Focus Time' to show the current mode.\n3. Add a <div id=\"timer\"> with text '25:00' showing the countdown.\n4. Add a <button id=\"toggle-btn\" onclick=\"toggle()\">Start</button> that starts or pauses the timer.\n5. Add a <button onclick=\"reset()\">Reset</button> to reset back to 25:00.",
    hint: 'Your HTML should look like:\n<div class="container">\n  <div id="mode">Focus Time</div>\n  <div id="timer">25:00</div>\n  <button id="toggle-btn" onclick="toggle()">Start</button>\n  <button onclick="reset()">Reset</button>\n</div>',
    language: "html",
    starterCode: "<!-- Create a Pomodoro timer with mode display, timer, and controls -->",
    solution: `<div class="container">
  <div id="mode">Focus Time</div>
  <div id="timer">25:00</div>
  <button id="toggle-btn" onclick="toggle()">Start</button>
  <button onclick="reset()">Reset</button>
</div>`,
    validation: [
      { mustInclude: ["id=\"mode\"", "id=\"timer\"", "onclick=\"toggle\"", "onclick=\"reset\""], message: "Your HTML needs a mode display (id=\"mode\"), timer display (id=\"timer\"), a toggle button (onclick=\"toggle()\"), and a reset button (onclick=\"reset()\")." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the Pomodoro timer.",
    instruction: "1. Style .container with text-align: center and padding: 2rem.\n2. Style #mode with font-size: 1.2rem, text-transform: uppercase, letter-spacing, muted color (#6b7280), and bottom margin.\n3. Style #timer with font-size: 4rem, font-family: monospace, font-weight: bold, and a dark color (#1f2937).\n4. Style buttons with padding, border: none, border-radius: 8px, white text, and cursor: pointer.\n5. Color the toggle button blue (#3b82f6) and the reset button gray (#6b7280).",
    hint: "CSS template:\n.container {\n  text-align: center;\n  padding: 2rem;\n}\n#mode {\n  font-size: 1.2rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #6b7280;\n  margin-bottom: 1rem;\n}\n#timer {\n  font-size: 4rem;\n  font-family: monospace;\n  font-weight: bold;\n  color: #1f2937;\n  margin-bottom: 1.5rem;\n}\nbutton {\n  padding: 0.75rem 1.5rem;\n  margin: 0 0.25rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  cursor: pointer;\n  color: white;\n}\n#toggle-btn { background: #3b82f6; }\nbutton:last-child { background: #6b7280; }",
    language: "css",
    starterCode: "/* Style the Pomodoro timer with a large clock display */",
    solution: `.container {
  text-align: center;
  padding: 2rem;
}
#mode {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #6b7280;
  margin-bottom: 1rem;
}
#timer {
  font-size: 4rem;
  font-family: monospace;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1.5rem;
}
button {
  padding: 0.75rem 1.5rem;
  margin: 0 0.25rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  color: white;
}
#toggle-btn { background: #3b82f6; }
#toggle-btn:hover { background: #2563eb; }
button:last-child { background: #6b7280; }
button:last-child:hover { background: #4b5563; }`,
    validation: [
      { mustInclude: [".container", "#timer", "font-size: 4rem", "font-family: monospace"], message: "Your .container needs styling and your #timer needs font-size: 4rem with font-family: monospace for the large clock look." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the Pomodoro timer logic.",
    instruction: "1. Create global variables: let minutes = 25, let seconds = 0, let isRunning = false, let isWork = true, let interval = null.\n2. Write updateDisplay() that formats minutes and seconds with padStart(2, '0') and updates #timer textContent.\n3. Write toggle() that:\n   - If running, clears the interval, sets isRunning to false, and changes button text to 'Resume'.\n   - If stopped, sets isRunning to true, changes button text to 'Pause', and starts a setInterval that decrements every second.\n   - When timer reaches 0, switch between focus (25 min) and break (5 min) modes, and update #mode text.\n4. Write reset() that clears interval, resets to 25:00 focus mode, and updates display.\n5. Call updateDisplay() once at the end to show the starting value.",
    hint: "JavaScript template:\nlet minutes = 25;\nlet seconds = 0;\nlet isRunning = false;\nlet isWork = true;\nlet interval = null;\nfunction updateDisplay() {\n  const m = String(minutes).padStart(2, '0');\n  const s = String(seconds).padStart(2, '0');\n  document.getElementById('timer').textContent = m + ':' + s;\n}\nfunction toggle() {\n  if (isRunning) {\n    clearInterval(interval);\n    isRunning = false;\n    document.getElementById('toggle-btn').textContent = 'Resume';\n  } else {\n    isRunning = true;\n    document.getElementById('toggle-btn').textContent = 'Pause';\n    interval = setInterval(() => {\n      if (seconds === 0) {\n        if (minutes === 0) {\n          isWork = !isWork;\n          minutes = isWork ? 25 : 5;\n          seconds = 0;\n          document.getElementById('mode').textContent = isWork ? 'Focus Time' : 'Break Time';\n        } else { minutes--; seconds = 59; }\n      } else { seconds--; }\n      updateDisplay();\n    }, 1000);\n  }\n}\nfunction reset() {\n  clearInterval(interval);\n  isRunning = false;\n  isWork = true;\n  minutes = 25; seconds = 0;\n  document.getElementById('mode').textContent = 'Focus Time';\n  document.getElementById('toggle-btn').textContent = 'Start';\n  updateDisplay();\n}\nupdateDisplay();",
    language: "js",
    starterCode: "// Write the Pomodoro timer logic with focus/break modes and countdown",
    solution: `let minutes = 25;
let seconds = 0;
let isRunning = false;
let isWork = true;
let interval = null;
function updateDisplay() {
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  document.getElementById('timer').textContent = m + ':' + s;
}
function toggle() {
  if (isRunning) { clearInterval(interval); isRunning = false; document.getElementById('toggle-btn').textContent = 'Resume'; }
  else {
    isRunning = true;
    document.getElementById('toggle-btn').textContent = 'Pause';
    interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          isWork = !isWork;
          minutes = isWork ? 25 : 5;
          seconds = 0;
          document.getElementById('mode').textContent = isWork ? 'Focus Time' : 'Break Time';
        } else { minutes--; seconds = 59; }
      } else { seconds--; }
      updateDisplay();
    }, 1000);
  }
}
function reset() {
  clearInterval(interval);
  isRunning = false;
  isWork = true;
  minutes = 25;
  seconds = 0;
  document.getElementById('mode').textContent = 'Focus Time';
  document.getElementById('toggle-btn').textContent = 'Start';
  updateDisplay();
}
updateDisplay();`,
    validation: [
      { mustInclude: ["function toggle", "function reset", "function updateDisplay", "setInterval"], message: "Your code is missing one of: toggle(), reset(), updateDisplay() functions, or setInterval() for the countdown logic." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Pomodoro Timer is ready!",
    instruction: "Click 'Run Project' to boost your productivity with the Pomodoro technique.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const countdownSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the HTML for the countdown timer.",
    instruction: "1. Create a <div> with class=\"cd\"> as the container.\n2. Inside, add a <div class=\"setup\"> containing:\n   - An <input type=\"number\" id=\"minutes-input\" value=\"5\" min=\"1\"> to set the minutes.\n   - A <button onclick=\"startTimer()\">Start</button>.\n3. Add a <div id=\"cd-timer\">05:00</div> to display the countdown.\n4. Add a <div class=\"controls\"> containing:\n   - A <button onclick=\"pauseTimer()\">Pause</button>.\n   - A <button onclick=\"resetTimer()\">Reset</button>.",
    hint: 'Your HTML should look like:\n<div class="cd">\n  <div class="setup">\n    <input type="number" id="minutes-input" value="5" min="1">\n    <button onclick="startTimer()">Start</button>\n  </div>\n  <div id="cd-timer">05:00</div>\n  <div class="controls">\n    <button onclick="pauseTimer()">Pause</button>\n    <button onclick="resetTimer()">Reset</button>\n  </div>\n</div>',
    language: "html",
    starterCode: "<!-- Create a countdown timer with input, timer display, and control buttons -->",
    solution: `<div class="cd">
  <div class="setup">
    <input type="number" id="minutes-input" value="5" min="1">
    <button onclick="startTimer()">Start</button>
  </div>
  <div id="cd-timer">05:00</div>
  <div class="controls">
    <button onclick="pauseTimer()">Pause</button>
    <button onclick="resetTimer()">Reset</button>
  </div>
</div>`,
    validation: [
      { mustInclude: ["id=\"minutes-input\"", "id=\"cd-timer\"", "onclick=\"startTimer\"", "onclick=\"resetTimer\""], message: "Your HTML needs a minute input (id=\"minutes-input\"), timer display (id=\"cd-timer\"), start button (onclick=\"startTimer()\"), and reset button (onclick=\"resetTimer()\")." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the countdown timer.",
    instruction: "1. Style .cd with text-align: center and padding: 2rem.\n2. Style .setup with bottom margin. Style the input inside .setup with padding, width: 80px, centered text, font-size: 1.2rem, border, and border-radius.\n3. Style #cd-timer with font-size: 4rem, font-family: monospace, font-weight: bold, and dark color, with vertical margins.\n4. Style .controls buttons with padding, margin, border: none, border-radius: 8px, font-size: 1rem, cursor: pointer. Give Pause button amber (#f59e0b) and Reset button gray (#6b7280).",
    hint: "CSS template:\n.cd { text-align: center; padding: 2rem; }\n.setup { margin-bottom: 1rem; }\n.setup input {\n  padding: 0.5rem;\n  width: 80px;\n  text-align: center;\n  font-size: 1.2rem;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  margin-right: 0.5rem;\n}\n#cd-timer {\n  font-size: 4rem;\n  font-family: monospace;\n  font-weight: bold;\n  color: #1f2937;\n  margin: 1.5rem 0;\n}\n.controls button {\n  padding: 0.5rem 1.5rem;\n  margin: 0 0.25rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n.controls button:first-child { background: #f59e0b; color: white; }\n.controls button:last-child { background: #6b7280; color: white; }",
    language: "css",
    starterCode: "/* Style the countdown timer with input, display, and controls */",
    solution: `.cd { text-align: center; padding: 2rem; }
.setup { margin-bottom: 1rem; }
.setup input {
  padding: 0.5rem;
  width: 80px;
  text-align: center;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-right: 0.5rem;
}
#cd-timer {
  font-size: 4rem;
  font-family: monospace;
  font-weight: bold;
  color: #1f2937;
  margin: 1.5rem 0;
}
.controls button {
  padding: 0.5rem 1.5rem;
  margin: 0 0.25rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
}
.controls button:first-child { background: #f59e0b; color: white; }
.controls button:last-child { background: #6b7280; color: white; }`,
    validation: [
      { mustInclude: [".cd", "#cd-timer", "font-family: monospace", "border-radius"], message: "Your CSS is missing one of: the .cd container, #cd-timer with font-family: monospace, or border-radius for rounded corners on elements." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the countdown timer logic.",
    instruction: "1. Create global variables: let totalSeconds = 0, let isRunning = false, let interval = null.\n2. Write updateDisplay() that converts totalSeconds to minutes and seconds (with padStart), and updates #cd-timer textContent.\n3. Write startTimer() that:\n   - Returns early if already running.\n   - Reads the minutes input and converts to seconds (totalSeconds = input.value * 60).\n   - Sets isRunning to true.\n   - Starts a setInterval that decrements totalSeconds every second, updates display, and stops when it reaches 0.\n4. Write pauseTimer() that clears the interval and sets isRunning to false.\n5. Write resetTimer() that clears the interval, reads the input value again to reset totalSeconds, and updates the display.",
    hint: "JavaScript template:\nlet totalSeconds = 0;\nlet isRunning = false;\nlet interval = null;\nfunction updateDisplay() {\n  const m = String(Math.floor(totalSeconds / 60)).padStart(2, '0');\n  const s = String(totalSeconds % 60).padStart(2, '0');\n  document.getElementById('cd-timer').textContent = m + ':' + s;\n}\nfunction startTimer() {\n  if (isRunning) return;\n  const input = document.getElementById('minutes-input');\n  totalSeconds = parseInt(input.value) * 60 || 300;\n  isRunning = true;\n  interval = setInterval(() => {\n    totalSeconds--;\n    updateDisplay();\n    if (totalSeconds <= 0) { clearInterval(interval); isRunning = false; }\n  }, 1000);\n}\nfunction pauseTimer() {\n  clearInterval(interval);\n  isRunning = false;\n}\nfunction resetTimer() {\n  clearInterval(interval);\n  isRunning = false;\n  const input = document.getElementById('minutes-input');\n  totalSeconds = parseInt(input.value) * 60 || 300;\n  updateDisplay();\n}",
    language: "js",
    starterCode: "// Write start, pause, and reset functions for the countdown timer",
    solution: `let totalSeconds = 0;
let isRunning = false;
let interval = null;
function updateDisplay() {
  const m = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const s = String(totalSeconds % 60).padStart(2, '0');
  document.getElementById('cd-timer').textContent = m + ':' + s;
}
function startTimer() {
  if (isRunning) return;
  const input = document.getElementById('minutes-input');
  totalSeconds = parseInt(input.value) * 60 || 300;
  isRunning = true;
  interval = setInterval(() => {
    totalSeconds--;
    updateDisplay();
    if (totalSeconds <= 0) { clearInterval(interval); isRunning = false; }
  }, 1000);
}
function pauseTimer() {
  clearInterval(interval);
  isRunning = false;
}
function resetTimer() {
  clearInterval(interval);
  isRunning = false;
  const input = document.getElementById('minutes-input');
  totalSeconds = parseInt(input.value) * 60 || 300;
  updateDisplay();
}`,
    validation: [
      { mustInclude: ["function startTimer", "function pauseTimer", "function resetTimer", "setInterval"], message: "Your code is missing one of: startTimer(), pauseTimer(), resetTimer() functions, or setInterval() to run the countdown every second." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Countdown Timer is ready!",
    instruction: "Click 'Run Project' to set a custom countdown and watch it tick down.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const palindromeSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the HTML for the palindrome checker.",
    instruction: "1. Create a <div> with class=\"container\">.\n2. Add an <h2> with the text 'Palindrome Checker'.\n3. Add an <input type=\"text\" id=\"text-input\" placeholder=\"Enter a word...\">.\n4. Add a <button id=\"check-btn\" onclick=\"checkPalindrome()\">Check Palindrome</button>.\n5. Add a <p id=\"result\"> to display the result.",
    hint: "Your HTML should look like:\n<div class=\"container\">\n  <h2>Palindrome Checker</h2>\n  <input type=\"text\" id=\"text-input\" placeholder=\"Enter a word...\">\n  <button id=\"check-btn\" onclick=\"checkPalindrome()\">Check Palindrome</button>\n  <p id=\"result\"></p>\n</div>",
    language: "html",
    starterCode: "<!-- Create a palindrome checker with input, button, and result -->",
    solution: `<div class="container">\n  <h2>Palindrome Checker</h2>\n  <input type="text" id="text-input" placeholder="Enter a word...">\n  <button id="check-btn" onclick="checkPalindrome()">Check Palindrome</button>\n  <p id="result"></p>\n</div>`,
    validation: [
      { mustInclude: ["id=\"text-input\"", "id=\"check-btn\"", "id=\"result\""], message: "Your HTML is missing one or more of: an input with id=\"text-input\", a button with id=\"check-btn\", or a result paragraph with id=\"result\"." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the palindrome checker.",
    instruction: "1. Center .container with text-align: center and padding.\n2. Style the input with padding, border, border-radius, and width.\n3. Style the button with a purple background (#8B5CF6), white text, no border, and rounded corners.\n4. Style #result with margin-top and a larger bold font.",
    hint: "CSS template:\n.container {\n  text-align: center;\n  padding: 2rem;\n}\ninput {\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 250px;\n}\nbutton {\n  padding: 0.5rem 1rem;\n  background: #8B5CF6;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-left: 0.5rem;\n}\n#result {\n  margin-top: 1rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n}",
    language: "css",
    starterCode: "/* Style the container, input, button, and result */",
    solution: `.container {\n  text-align: center;\n  padding: 2rem;\n}\ninput {\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 250px;\n}\nbutton {\n  padding: 0.5rem 1rem;\n  background: #8B5CF6;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-left: 0.5rem;\n}\n#result {\n  margin-top: 1rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n}`,
    validation: [
      { mustInclude: [".container", "input", "button", "border-radius"], message: "Your CSS is missing selectors for .container, input, and button. Make sure each has a border-radius for rounded corners." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the palindrome checking logic.",
    instruction: "1. Create a function called checkPalindrome().\n2. Get the input value from '#text-input'.\n3. Clean the text: convert to lowercase and remove non-alphanumeric characters using .replace(/[^a-z0-9]/g, '').\n4. Reverse the cleaned string using .split('').reverse().join('').\n5. Compare the original cleaned string with the reversed version.\n6. If they match, display '✅ Yes, it is a palindrome!' in #result. Otherwise, display '❌ No, it is not a palindrome.'.",
    hint: "JavaScript template:\nfunction checkPalindrome() {\n  const text = document.getElementById('text-input').value;\n  const clean = text.toLowerCase().replace(/[^a-z0-9]/g, '');\n  const reversed = clean.split('').reverse().join('');\n  const result = document.getElementById('result');\n  if (clean && clean === reversed) {\n    result.textContent = '✅ Yes, it is a palindrome!';\n  } else {\n    result.textContent = '❌ No, it is not a palindrome.';\n  }\n}",
    language: "js",
    starterCode: "// Write the checkPalindrome function",
    solution: `function checkPalindrome() {\n  const text = document.getElementById('text-input').value;\n  const clean = text.toLowerCase().replace(/[^a-z0-9]/g, '');\n  const reversed = clean.split('').reverse().join('');\n  const result = document.getElementById('result');\n  if (clean && clean === reversed) {\n    result.textContent = '✅ Yes, it is a palindrome!';\n  } else {\n    result.textContent = '❌ No, it is not a palindrome.';\n  }\n}`,
    validation: [
      { mustInclude: ["function checkPalindrome", "getElementById", ".split('').reverse().join('')", "replace("], message: "You need a function checkPalindrome() that gets the input, cleans it with replace(), reverses it, and compares with the original." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Palindrome Checker is ready!",
    instruction: "Click 'Run Project' to test your palindrome checker with different words and phrases.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const vowelSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the HTML for the vowel counter.",
    instruction: "1. Create a <div> with class=\"container\">.\n2. Add an <h2> with text 'Vowel Counter'.\n3. Add a <textarea id=\"text-input\" placeholder=\"Type something...\" oninput=\"countVowels()\">.\n4. Add a <div id=\"stats\"> with six <p> elements for A, E, I, O, U counts and total, each with a <span> with id=\"count-a\", \"count-e\", etc.",
    hint: "Your HTML should contain a textarea with id=\"text-input\" and spans with ids count-a, count-e, count-i, count-o, count-u, and count-total inside a div#stats.",
    language: "html",
    starterCode: "<!-- Create a vowel counter with textarea and stats display -->",
    solution: `<div class="container">\n  <h2>Vowel Counter</h2>\n  <textarea id="text-input" placeholder="Type something..." oninput="countVowels()"></textarea>\n  <div id="stats">\n    <p>A: <span id="count-a">0</span></p>\n    <p>E: <span id="count-e">0</span></p>\n    <p>I: <span id="count-i">0</span></p>\n    <p>O: <span id="count-o">0</span></p>\n    <p>U: <span id="count-u">0</span></p>\n    <p>Total: <span id="count-total">0</span></p>\n  </div>\n</div>`,
    validation: [
      { mustInclude: ["id=\"text-input\"", "id=\"count-a\"", "id=\"count-e\"", "id=\"count-i\"", "id=\"count-o\"", "id=\"count-u\"", "id=\"count-total\""], message: "Your HTML is missing the textarea or one of the vowel count spans (count-a through count-u and count-total)." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the vowel counter.",
    instruction: "1. Center .container with text-align: center and padding.\n2. Style the textarea with width, max-width, height, padding, border, and border-radius.\n3. Style #stats with display: flex, flex-wrap: wrap, gap, and justify-content: center.\n4. Style #stats p with padding, border-radius, and a light background color.",
    hint: "Use display: flex on #stats with gap to lay out the vowel counts in a row. Style the textarea to be large enough for comfortable typing.",
    language: "css",
    starterCode: "/* Style the container, textarea, and stats */",
    solution: `.container {\n  text-align: center;\n  padding: 2rem;\n}\ntextarea {\n  width: 100%;\n  max-width: 400px;\n  height: 80px;\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n#stats {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n  margin-top: 1rem;\n}\n#stats p {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-weight: bold;\n}`,
    validation: [
      { mustInclude: [".container", "textarea", "#stats", "display: flex"], message: "Your CSS needs selectors for .container, textarea, and #stats. The #stats should use display: flex for layout." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the vowel counting logic.",
    instruction: "1. Create a function called countVowels().\n2. Get the textarea value and convert to lowercase.\n3. Create an object to track counts for a, e, i, o, u.\n4. Loop through each character of the text. If it's a vowel, increment its count.\n5. Update each vowel span with its count using getElementById.\n6. Calculate the total and update the total span.",
    hint: "Use a for...of loop over the text string. Use an object like {a:0, e:0, i:0, o:0, u:0} to track counts. Use document.getElementById('count-' + v).textContent to update each span.",
    language: "js",
    starterCode: "// Write countVowels() to count each vowel in the text",
    solution: `function countVowels() {\n  const text = document.getElementById('text-input').value.toLowerCase();\n  const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };\n  for (const ch of text) {\n    if (ch in counts) counts[ch]++;\n  }\n  let total = 0;\n  for (const v of ['a','e','i','o','u']) {\n    document.getElementById('count-' + v).textContent = counts[v];\n    total += counts[v];\n  }\n  document.getElementById('count-total').textContent = total;\n}`,
    validation: [
      { mustInclude: ["function countVowels", "getElementById", "for (const ch", "counts"], message: "You need a function countVowels() that loops through each character, counts vowels, and updates all the displays." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Vowel Counter is ready!",
    instruction: "Click 'Run Project' to test your vowel counter by typing different words and sentences.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const expenseSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the HTML for the expense tracker.",
    instruction: "1. Create a <div> with class=\"container\">.\n2. Add an <h2> 'Expense Tracker'.\n3. Add a <div class=\"inputs\"> with: an <input type=\"text\" id=\"name-input\" placeholder=\"Expense name\">, an <input type=\"number\" id=\"amount-input\" placeholder=\"Amount\">, and a <button onclick=\"addExpense()\">Add Expense</button>.\n4. Add a <ul id=\"expense-list\"> to show expenses.\n5. Add a <p id=\"total\">Total: $0.00</p>.",
    hint: "Use a div.inputs wrapper with display:flex to put the inputs side by side. The button should call addExpense() on click.",
    language: "html",
    starterCode: "<!-- Create an expense tracker with inputs, list, and total -->",
    solution: `<div class="container">\n  <h2>Expense Tracker</h2>\n  <div class="inputs">\n    <input type="text" id="name-input" placeholder="Expense name">\n    <input type="number" id="amount-input" placeholder="Amount">\n    <button onclick="addExpense()">Add Expense</button>\n  </div>\n  <ul id="expense-list"></ul>\n  <p id="total">Total: $0.00</p>\n</div>`,
    validation: [
      { mustInclude: ["id=\"name-input\"", "id=\"amount-input\"", "id=\"expense-list\"", "id=\"total\""], message: "Your HTML is missing one or more required IDs: name-input, amount-input, expense-list, and total." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the expense tracker.",
    instruction: "1. Style .container with max-width, margin: 0 auto, and padding.\n2. Style .inputs with display: flex and gap so the inputs sit side by side.\n3. Style input elements with padding, border, border-radius, and flex: 1.\n4. Style the Add button with a green background (#10B981), white text, and no border.\n5. Style the list items with display: flex, justify-content: space-between, and a light gray background.\n6. Style #total bold and right-aligned.",
    hint: "Use display: flex on .inputs with gap. The Add button should have background: #10B981. List items should use justify-content: space-between.",
    language: "css",
    starterCode: "/* Style the expense tracker layout */",
    solution: `.container {\n  max-width: 450px;\n  margin: 0 auto;\n  padding: 1.5rem;\n}\n.inputs {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\ninput {\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  flex: 1;\n}\nbutton {\n  padding: 0.5rem 1rem;\n  background: #10B981;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\nul {\n  list-style: none;\n  padding: 0;\n}\nli {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem;\n  margin: 0.25rem 0;\n  background: #f3f4f6;\n  border-radius: 4px;\n}\n#total {\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-align: right;\n  margin-top: 1rem;\n}`,
    validation: [
      { mustInclude: [".container", ".inputs", "li", "#total"], message: "Your CSS is missing selectors for .container, .inputs, li (list items), and #total." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the expense tracking logic.",
    instruction: "1. Create an empty array let expenses = [].\n2. Create function addExpense() that reads the name and amount inputs, pushes {name, amount} to the array, clears the inputs, and calls render().\n3. Create function removeExpense(i) that splices the array at index i and calls render().\n4. Create function render() that loops through expenses, builds <li> elements with a delete button, and updates the total.\n5. Calculate sum with .reduce() or a loop for the total.",
    hint: "Use let expenses = [] to store items. In render(), use forEach() to build HTML, and format amounts with .toFixed(2).",
    language: "js",
    starterCode: "// Write the expense tracker logic (add, remove, render)",
    solution: `let expenses = [];\nfunction addExpense() {\n  const name = document.getElementById('name-input').value.trim();\n  const amount = parseFloat(document.getElementById('amount-input').value) || 0;\n  if (!name || amount <= 0) return;\n  expenses.push({ name, amount });\n  document.getElementById('name-input').value = '';\n  document.getElementById('amount-input').value = '';\n  render();\n}\nfunction removeExpense(i) {\n  expenses.splice(i, 1);\n  render();\n}\nfunction render() {\n  const list = document.getElementById('expense-list');\n  list.innerHTML = '';\n  let total = 0;\n  expenses.forEach((e, i) => {\n    total += e.amount;\n    const li = document.createElement('li');\n    li.innerHTML = '<span>' + e.name + '</span> <span>$' + e.amount.toFixed(2) + ' <button onclick="removeExpense(' + i + ')">&times;</button></span>';\n    list.appendChild(li);\n  });\n  document.getElementById('total').textContent = 'Total: $' + total.toFixed(2);\n}`,
    validation: [
      { mustInclude: ["function addExpense", "function removeExpense", "function render", "forEach", "toFixed"], message: "You need three functions: addExpense() to create items, removeExpense() to delete them, and render() to display the list with forEach and toFixed()." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Expense Tracker is ready!",
    instruction: "Click 'Run Project' to test adding and removing expenses.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const rpsSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the Rock Paper Scissors game HTML.",
    instruction: "1. Create a <div> with class=\"game\">.\n2. Add an <h2> 'Rock Paper Scissors'.\n3. Add a <div id=\"choices\"> with three buttons: 🪨 Rock, 📄 Paper, and ✂️ Scissors.\n4. Each button should call play('rock'), play('paper'), or play('scissors') onclick.\n5. Add a <div id=\"result\"> to show game results.",
    hint: "Your buttons should have onclick=\"play('rock')\", onclick=\"play('paper')\", and onclick=\"play('scissors')\".",
    language: "html",
    starterCode: "<!-- Create Rock Paper Scissors with choice buttons and a result area -->",
    solution: `<div class="game">\n  <h2>Rock Paper Scissors</h2>\n  <div id="choices">\n    <button onclick="play('rock')">🪨 Rock</button>\n    <button onclick="play('paper')">📄 Paper</button>\n    <button onclick="play('scissors')">✂️ Scissors</button>\n  </div>\n  <div id="result"></div>\n</div>`,
    validation: [
      { mustInclude: ["id=\"choices\"", "id=\"result\"", "play('rock')", "play('paper')", "play('scissors')"], message: "Your HTML is missing the choices container, result div, or one of the three choice buttons with correct onclick handlers." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the Rock Paper Scissors game.",
    instruction: "1. Center .game with text-align: center and padding.\n2. Style #choices with display: flex, gap, and justify-content: center.\n3. Style the choice buttons with padding, font-size, border, border-radius, and a white background.\n4. Add a hover effect with scale transform.\n5. Style #result with larger font and bold weight.",
    hint: "Use display: flex on #choices. Style buttons with padding: 1rem and font-size: 1.5rem. Add a hover transform: scale(1.1) for interactivity.",
    language: "css",
    starterCode: "/* Style the game layout, buttons, and result display */",
    solution: `.game {\n  text-align: center;\n  padding: 2rem;\n}\n#choices {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 1.5rem 0;\n}\n#choices button {\n  padding: 1rem;\n  font-size: 1.5rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n#choices button:hover {\n  background: #f3f4f6;\n  transform: scale(1.1);\n}\n#result {\n  font-size: 1.3rem;\n  font-weight: bold;\n  margin-top: 1rem;\n}`,
    validation: [
      { mustInclude: [".game", "#choices", "#result", "transform: scale(1.1)"], message: "Your CSS needs .game for centering, #choices for flex layout, and #result for the outcome text." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the game logic.",
    instruction: "1. Create function play(choice).\n2. Create arrays for choices and their emojis.\n3. Generate a random computer choice using Math.random().\n4. Compare player choice vs computer choice to determine win/lose/draw.\n5. Display the result in #result with both choices and the outcome.",
    hint: "Use Math.floor(Math.random() * 3) to pick 0, 1, or 2. Compare using: rock beats scissors, paper beats rock, scissors beats paper.",
    language: "js",
    starterCode: "// Write the play() function with game logic",
    solution: `function play(choice) {\n  const choices = ['rock', 'paper', 'scissors'];\n  const emojis = ['🪨', '📄', '✂️'];\n  const computer = choices[Math.floor(Math.random() * 3)];\n  let result = '';\n  if (choice === computer) {\n    result = \"It's a draw!\";\n  } else if (\n    (choice === 'rock' && computer === 'scissors') ||\n    (choice === 'paper' && computer === 'rock') ||\n    (choice === 'scissors' && computer === 'paper')\n  ) {\n    result = 'You win!';\n  } else {\n    result = 'You lose!';\n  }\n  const idx = choices.indexOf(computer);\n  document.getElementById('result').innerHTML =\n    'You chose ' + choice + '<br>Computer chose ' + emojis[idx] + ' ' + computer + '<br><br><strong>' + result + '</strong>';\n}`,
    validation: [
      { mustInclude: ["function play", "Math.random", "document.getElementById('result')"], message: "You need a play() function that uses Math.random() for the computer's choice and updates the result div." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Rock Paper Scissors game is ready!",
    instruction: "Click 'Run Project' and play a few rounds against the computer.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

const typingSteps: LessonStep[] = [
  {
    id: 1,
    title: "HTML Structure",
    description: "Create the typing speed test HTML.",
    instruction: "1. Create a <div> with class=\"container\">.\n2. Add an <h2> 'Typing Speed Test'.\n3. Add a <p id=\"sentence\"> with the text 'The quick brown fox jumps over the lazy dog'.\n4. Add a <textarea id=\"input\" placeholder=\"Start typing here...\" oninput=\"checkTyping()\">.\n5. Add a <div id=\"stats\"> with two .stat-card divs: one for WPM and one for Accuracy.",
    hint: "The sentence paragraph should have id=\"sentence\". The WPM span should have id=\"wpm\". The accuracy span should have id=\"accuracy\".",
    language: "html",
    starterCode: "<!-- Create a typing speed test with sentence, input, and stats -->",
    solution: `<div class="container">\n  <h2>Typing Speed Test</h2>\n  <p id="sentence">The quick brown fox jumps over the lazy dog</p>\n  <textarea id="input" placeholder="Start typing here..." oninput="checkTyping()"></textarea>\n  <div id="stats">\n    <div class="stat-card"><span id="wpm">0</span><br>WPM</div>\n    <div class="stat-card"><span id="accuracy">100</span>%<br>Accuracy</div>\n  </div>\n</div>`,
    validation: [
      { mustInclude: ["id=\"sentence\"", "id=\"input\"", "id=\"wpm\"", "id=\"accuracy\""], message: "Your HTML is missing the sentence display, text input, or one of the stat spans (wpm, accuracy)." },
    ],
    isFinal: false,
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style the typing speed test.",
    instruction: "1. Center .container with max-width, margin: 0 auto, padding, and text-align: center.\n2. Style #sentence with a light gray background, padding, border-radius, and larger font size.\n3. Style the textarea with full width, height, padding, border, and border-radius.\n4. Style #stats with display: flex, gap, and justify-content: center.\n5. Style .stat-card with background, padding, border-radius, and bold text.\n6. Style .stat-card span with a larger font size and indigo color (#6366F1).",
    hint: "Use display: flex on #stats. The stat spans should have font-size: 2rem and color: #6366F1 to make them stand out.",
    language: "css",
    starterCode: "/* Style the typing test layout */",
    solution: `.container {\n  max-width: 500px;\n  margin: 0 auto;\n  padding: 2rem;\n  text-align: center;\n}\n#sentence {\n  background: #f3f4f6;\n  padding: 1rem;\n  border-radius: 8px;\n  font-size: 1.1rem;\n  margin-bottom: 1rem;\n}\ntextarea {\n  width: 100%;\n  height: 80px;\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n#stats {\n  display: flex;\n  gap: 2rem;\n  justify-content: center;\n  margin-top: 1.5rem;\n}\n.stat-card {\n  background: #f3f4f6;\n  padding: 1rem 1.5rem;\n  border-radius: 12px;\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n.stat-card span {\n  font-size: 2rem;\n  color: #6366F1;\n}`,
    validation: [
      { mustInclude: [".container", "#sentence", "textarea", ".stat-card"], message: "Your CSS needs selectors for .container, #sentence, textarea, and .stat-card." },
    ],
    isFinal: false,
  },
  {
    id: 3,
    title: "JavaScript Logic",
    description: "Write the typing test logic.",
    instruction: "1. Declare let startTime = null.\n2. Create function checkTyping() that runs on every input.\n3. On the first keystroke, record startTime = Date.now().\n4. Compare the typed text to the sentence character by character to count correct keystrokes.\n5. Calculate WPM: (words / minutes) where words = (characters typed / 5).\n6. Calculate accuracy: (correct / total) * 100.\n7. Update the #wpm and #accuracy displays.",
    hint: "Use Date.now() to get the current timestamp. Calculate elapsed minutes: (Date.now() - startTime) / 1000 / 60. WPM = Math.round((text.length / 5) / elapsed).",
    language: "js",
    starterCode: "// Write checkTyping() to calculate WPM and accuracy in real time",
    solution: `let startTime = null;\nfunction checkTyping() {\n  const input = document.getElementById('input');\n  const text = input.value;\n  if (!startTime && text.length > 0) startTime = Date.now();\n  if (text.length === 0) { startTime = null; document.getElementById('wpm').textContent = '0'; document.getElementById('accuracy').textContent = '100'; return; }\n  const sentence = document.getElementById('sentence').textContent;\n  let correct = 0;\n  for (let i = 0; i < text.length; i++) {\n    if (text[i] === sentence[i]) correct++;\n  }\n  const elapsed = (Date.now() - startTime) / 1000 / 60;\n  const wpm = elapsed > 0 ? Math.round((text.length / 5) / elapsed) : 0;\n  const accuracy = Math.round((correct / text.length) * 100);\n  document.getElementById('wpm').textContent = wpm;\n  document.getElementById('accuracy').textContent = accuracy;\n}`,
    validation: [
      { mustInclude: ["function checkTyping", "Date.now()", "getElementById", "WPM"], message: "You need a function checkTyping() that uses Date.now() for timing and updates the WPM and accuracy displays." },
    ],
    isFinal: false,
  },
  {
    id: 4,
    title: "Final Result",
    description: "Your Typing Speed Test is ready!",
    instruction: "Click 'Run Project' and start typing to see your WPM and accuracy in real time.",
    hint: "",
    language: "html",
    starterCode: "",
    solution: "",
    validation: [],
    isFinal: true,
  },
];

export const apps: App[] = [
  {
    name: "Number Generator",
    path: "/apps/number-generator",
    icon: "/icons/randomnumber.svg",
    description: "Generate a random number between 1 and 100.",
    level: 1,
    ProjectComponent: RandomNumber,
    projectStars: "5",
    category: ["utilities", "beginner"],
    tags: ["random", "numbers", "math", "beginner"],
    htmlSnippet: `<div class="container">
  <p id="number">42</p>
  <button onclick="generate()">Random Number</button>
</div>`,
    cssSnippet: `.container {
  text-align: center;
  padding: 2rem;
}
#number {
  font-size: 3rem;
  font-weight: bold;
}
button {
  padding: 0.5rem 1rem;
  background: #6B7280;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}`,
    jsSnippet: `function generate() {
  const num = Math.floor(Math.random() * 100) + 1;
  document.getElementById('number').textContent = num;
}`,
    steps: numberSteps,
  },
  {
    name: "Color Generator",
    path: "/apps/color-generator",
    icon: "/icons/randomcolor.svg",
    description: "Generate random colors with automatic contrast detection.",
    level: 1,
    ProjectComponent: RandomColor,
    projectStars: "5",
    category: ["utilities", "design"],
    tags: ["colors", "design", "random"],
    htmlSnippet: `<div id="color-box">
  <p id="hex">#FF5733</p>
  <button onclick="newColor()">Generate</button>
</div>`,
    cssSnippet: `#color-box {
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: background 0.3s;
}`,
    jsSnippet: `function newColor() {
  const hex = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.getElementById('color-box').style.background = hex;
  document.getElementById('hex').textContent = hex;
}`,
    steps: colorSteps,
  },
  {
    name: "String Generator",
    path: "/apps/string-generator",
    icon: "/icons/randomstring.svg",
    description: "Generate a random alphanumeric string.",
    level: 1,
    ProjectComponent: RandomString,
    projectStars: "5",
    category: ["utilities", "security"],
    tags: ["strings", "random", "alphanumeric"],
    htmlSnippet: `<div class="container">
  <p id="output">aB3xK9</p>
  <button onclick="generate()">New String</button>
</div>`,
    cssSnippet: `.container {
  text-align: center;
  padding: 2rem;
}
#output {
  font-family: monospace;
  font-size: 2rem;
  letter-spacing: 0.25em;
}`,
    jsSnippet: `function generate() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById('output').textContent = result;
}`,
    steps: stringSteps,
  },
  {
    name: "Gradient Generator",
    path: "/apps/gradient-generator",
    icon: "/icons/randomgradient.svg",
    description: "Generate a random gradient to visualize color schemes.",
    level: 1,
    ProjectComponent: RandomGradient,
    projectStars: "5",
    category: ["design", "utilities"],
    tags: ["gradients", "colors", "design", "css"],
    htmlSnippet: `<div id="gradient-box">
  <p id="css-code">linear-gradient(45deg, #ff0, #00f)</p>
  <button onclick="newGradient()">New Gradient</button>
</div>`,
    cssSnippet: `#gradient-box {
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: background 0.5s;
}
#css-code {
  background: rgba(0,0,0,0.6);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: monospace;
}`,
    jsSnippet: `function newGradient() {
  const angle = Math.floor(Math.random() * 360);
  const c1 = randomColor();
  const c2 = randomColor();
  const gradient = \`linear-gradient(\${angle}deg, \${c1}, \${c2})\`;
  document.getElementById('gradient-box').style.background = gradient;
  document.getElementById('css-code').textContent = gradient;
}
function randomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}`,
    steps: gradientSteps,
  },
  {
    name: "Theme Switcher",
    path: "/apps/theme-switcher",
    icon: "/icons/themeswitcher.svg",
    description: "Toggle between light and dark themes.",
    level: 2,
    ProjectComponent: ThemeSwitcher,
    projectStars: "5",
    category: ["ui", "beginner"],
    tags: ["themes", "dark-mode", "localStorage", "ui"],
    htmlSnippet: `<div class="app">
  <h1>Theme Switcher</h1>
  <label class="switch">
    <input type="checkbox" id="theme-toggle">
    <span class="slider"></span>
  </label>
</div>`,
    cssSnippet: `.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input { opacity: 0; }
.slider {
  position: absolute;
  cursor: pointer;
  background: #ccc;
  border-radius: 34px;
  transition: 0.4s;
}
.slider:before {
  content: "";
  height: 26px; width: 26px;
  border-radius: 50%;
  background: white;
  transition: 0.4s;
}
input:checked + .slider { background: #333; }`,
    jsSnippet: `const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);
  localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
});
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggle.checked = true;
}`,
    steps: themeSteps,
  },
  {
    name: "Counter App",
    path: "/apps/counter-app",
    icon: "/icons/counter.svg",
    description: "Interactive counter with increment, decrement, and reset.",
    level: 2,
    ProjectComponent: CounterApp,
    projectStars: "5",
    category: ["utilities", "beginner"],
    tags: ["counter", "numbers", "events", "beginner"],
    htmlSnippet: `<div class="container">
  <p id="count">0</p>
  <button onclick="decrement()">-</button>
  <button onclick="resetCount()">Reset</button>
  <button onclick="increment()">+</button>
</div>`,
    cssSnippet: `.container {
  text-align: center;
  padding: 2rem;
}
#count {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
button {
  padding: 0.5rem 1.5rem;
  margin: 0 0.25rem;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}`,
    jsSnippet: `let count = 0;
function increment() {
  count++;
  document.getElementById('count').textContent = count;
}
function decrement() {
  count--;
  document.getElementById('count').textContent = count;
}
function resetCount() {
  count = 0;
  document.getElementById('count').textContent = count;
}`,
    steps: counterSteps,
  },
  {
    name: "Todo List",
    path: "/apps/todo-list",
    icon: "/icons/todo.svg",
    description: "Add, remove, and manage your tasks.",
    level: 2,
    ProjectComponent: TodoList,
    projectStars: "5",
    category: ["utilities", "productivity"],
    tags: ["todos", "lists", "dom", "events"],
    htmlSnippet: `<div class="container">
  <input type="text" id="todo-input" placeholder="Add a task...">
  <button onclick="addTodo()">Add</button>
  <ul id="todo-list"></ul>
</div>`,
    cssSnippet: `.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
}
input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 0.5rem;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin: 0.25rem 0;
  background: #f3f4f6;
  border-radius: 4px;
}`,
    jsSnippet: `const todos = [];
function addTodo() {
  const input = document.getElementById('todo-input');
  if (input.value.trim()) {
    todos.push(input.value.trim());
    input.value = '';
    renderTodos();
  }
}
function renderTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';
  todos.forEach((item, i) => {
    const li = document.createElement('li');
    li.innerHTML = item + ' <button onclick="removeTodo(' + i + ')">&times;</button>';
    list.appendChild(li);
  });
}
function removeTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}`,
    steps: todoSteps,
  },
  {
    name: "Calculator",
    path: "/apps/calculator",
    icon: "/icons/calculator.svg",
    description: "A fully functional calculator with basic operations.",
    level: 3,
    ProjectComponent: Calculator,
    projectStars: "5",
    category: ["utilities", "math"],
    tags: ["calculator", "math", "grid", "logic"],
    htmlSnippet: `<div class="calc">
  <div id="display">0</div>
  <button onclick="clearDisplay()">C</button>
  <button onclick="op('+')">+</button>
  <button onclick="op('-')">-</button>
  <button onclick="op('*')">&times;</button>
  <button onclick="op('/')">/</button>
  <button onclick="input('7')">7</button>
  <button onclick="input('8')">8</button>
  <button onclick="input('9')">9</button>
  <button onclick="input('4')">4</button>
  <button onclick="input('5')">5</button>
  <button onclick="input('6')">6</button>
  <button onclick="input('1')">1</button>
  <button onclick="input('2')">2</button>
  <button onclick="input('3')">3</button>
  <button onclick="input('0')">0</button>
  <button onclick="input('.')">.</button>
  <button onclick="calculate()">=</button>
</div>`,
    cssSnippet: `.calc {
  width: 240px;
  margin: 0 auto;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 12px;
}
#display {
  background: white;
  padding: 1rem;
  margin-bottom: 0.5rem;
  text-align: right;
  font-size: 1.5rem;
  font-family: monospace;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}
button {
  padding: 0.75rem;
  margin: 0.125rem;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  background: #f3f4f6;
}`,
    jsSnippet: `let display = '0';
let firstVal = null;
let operator = null;
function input(val) {
  display = display === '0' && val !== '.' ? val : display + val;
  document.getElementById('display').textContent = display;
}
function op(op) {
  firstVal = parseFloat(display);
  operator = op;
  display = '0';
}
function calculate() {
  if (!operator) return;
  const second = parseFloat(display);
  let result = 0;
  if (operator === '+') result = firstVal + second;
  else if (operator === '-') result = firstVal - second;
  else if (operator === '*') result = firstVal * second;
  else if (operator === '/') result = second !== 0 ? firstVal / second : 0;
  display = String(result);
  document.getElementById('display').textContent = display;
  operator = null;
}
function clearDisplay() {
  display = '0';
  firstVal = null;
  operator = null;
  document.getElementById('display').textContent = display;
}`,
    steps: calculatorSteps,
  },
  {
    name: "Digital Clock",
    path: "/apps/digital-clock",
    icon: "/icons/clock.svg",
    description: "A live digital clock with real-time updates.",
    level: 3,
    ProjectComponent: DigitalClock,
    projectStars: "5",
    category: ["ui", "tools"],
    tags: ["clock", "time", "date", "interval"],
    htmlSnippet: `<div class="container">
  <div id="time">12:00:00</div>
  <p id="date">Monday, January 1, 2024</p>
</div>`,
    cssSnippet: `.container {
  text-align: center;
  padding: 2rem;
}
#time {
  font-size: 3.5rem;
  font-family: monospace;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: #1f2937;
}
#date {
  font-size: 1rem;
  color: #6b7280;
  margin-top: 0.5rem;
}`,
    jsSnippet: `function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('time').textContent = h + ':' + m + ':' + s;
  document.getElementById('date').textContent = now.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
}
updateClock();
setInterval(updateClock, 1000);`,
    steps: clockSteps,
  },
  {
    name: "Tip Calculator",
    path: "/apps/tip-calculator",
    icon: "/icons/tip.svg",
    description: "Calculate tips easily with a slider and real-time updates.",
    level: 3,
    ProjectComponent: TipCalculator,
    projectStars: "5",
    category: ["utilities", "finance"],
    tags: ["tips", "calculator", "slider", "finance"],
    htmlSnippet: `<div class="container">
  <label>Bill: <input type="number" id="bill" value="50" oninput="calcTip()"></label>
  <label>Tip: <span id="tip-label">15%</span> <input type="range" id="tip" min="0" max="30" value="15" oninput="calcTip()"></label>
  <p>Tip Amount: <span id="tip-amount">$0.00</span></p>
  <p>Total: <span id="total">$0.00</span></p>
</div>`,
    cssSnippet: `.container {
  max-width: 350px;
  margin: 0 auto;
  padding: 1.5rem;
}
label {
  display: block;
  margin-bottom: 1rem;
}
input[type="number"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.results {
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}`,
    jsSnippet: `function calcTip() {
  const bill = parseFloat(document.getElementById('bill').value) || 0;
  const percent = parseInt(document.getElementById('tip').value) || 0;
  const tip = bill * (percent / 100);
  const total = bill + tip;
  document.getElementById('tip-label').textContent = percent + '%';
  document.getElementById('tip-amount').textContent = '$' + tip.toFixed(2);
  document.getElementById('total').textContent = '$' + total.toFixed(2);
}
calcTip();`,
    steps: tipSteps,
  },
  {
    name: "Tic-Tac-Toe",
    path: "/apps/tic-tac-toe",
    icon: "/icons/tictactoe.svg",
    description: "Play the classic Tic-Tac-Toe against a friend.",
    level: 4,
    ProjectComponent: TicTacToe,
    projectStars: "5",
    category: ["games", "logic"],
    tags: ["game", "tic-tac-toe", "logic", "ai"],
    htmlSnippet: `<div class="game">
  <div id="status">Player X's turn</div>
  <div class="board">
    <div id="cell-0" class="cell" onclick="play(0)"></div>
    <div id="cell-1" class="cell" onclick="play(1)"></div>
    <div id="cell-2" class="cell" onclick="play(2)"></div>
    <div id="cell-3" class="cell" onclick="play(3)"></div>
    <div id="cell-4" class="cell" onclick="play(4)"></div>
    <div id="cell-5" class="cell" onclick="play(5)"></div>
    <div id="cell-6" class="cell" onclick="play(6)"></div>
    <div id="cell-7" class="cell" onclick="play(7)"></div>
    <div id="cell-8" class="cell" onclick="play(8)"></div>
  </div>
  <button onclick="resetGame()">Reset</button>
</div>`,
    cssSnippet: `.game { text-align: center; padding: 1rem; }
.board {
  display: grid;
  grid-template-columns: repeat(3, 80px);
  gap: 4px;
  justify-content: center;
  margin: 1rem auto;
}
.cell {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  background: #f3f4f6;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  cursor: pointer;
}
.cell:hover { background: #e5e7eb; }
#status { font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem; }`,
    jsSnippet: `let board = Array(9).fill(null);
let xNext = true;
function play(index) {
  if (board[index] || checkWinner()) return;
  board[index] = xNext ? 'X' : 'O';
  xNext = !xNext;
  render();
}
function render() {
  const cells = document.querySelectorAll('.cell');
  board.forEach((val, i) => { cells[i].textContent = val || ''; });
  const winner = checkWinner();
  const status = document.getElementById('status');
  if (winner) status.textContent = 'Winner: ' + winner;
  else if (board.every(c => c)) status.textContent = 'Draw!';
  else status.textContent = 'Player ' + (xNext ? 'X' : 'O') + "'s turn";
}
function checkWinner() {
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for (const [a,b,c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  return null;
}
function resetGame() {
  board = Array(9).fill(null);
  xNext = true;
  render();
}`,
    steps: tictactoeSteps,
  },
  {
    name: "Quiz App",
    path: "/apps/quiz-app",
    icon: "/icons/quiz.svg",
    description: "Test your knowledge with an interactive quiz.",
    level: 4,
    ProjectComponent: QuizApp,
    projectStars: "5",
    category: ["education", "games"],
    tags: ["quiz", "questions", "score", "education"],
    htmlSnippet: `<div class="quiz">
  <div id="question">Loading...</div>
  <div id="options"></div>
  <p id="score-display">Score: <span id="score">0</span></p>
  <button id="next-btn" onclick="nextQ()" style="display:none">Next</button>
</div>`,
    cssSnippet: `.quiz {
  max-width: 500px;
  margin: 0 auto;
  padding: 1.5rem;
  text-align: center;
}
#question {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.option {
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
}
.option:hover { background: #f3f4f6; }
.option.correct { background: #d1fae5; border-color: #10b981; }
.option.wrong { background: #fee2e2; border-color: #ef4444; }`,
    jsSnippet: `const questions = [
  { q: 'What does HTML stand for?', o: ['Hyper Text Markup Language', 'High Tech Language', 'Home Tool Markup', 'Hyper Transfer Markup'], a: 0 },
  { q: 'Which CSS property changes text color?', o: ['font-color', 'text-color', 'color', 'foreground'], a: 2 },
  { q: 'How do you declare a variable?', o: ['var x', 'let x', 'const x', 'All of these'], a: 3 }
];
let current = 0;
let score = 0;
function loadQ() {
  const q = questions[current];
  document.getElementById('question').textContent = q.q;
  const opts = document.getElementById('options');
  opts.innerHTML = '';
  document.getElementById('next-btn').style.display = 'none';
  q.o.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = text;
    btn.onclick = () => answer(i);
    opts.appendChild(btn);
  });
}
function answer(i) {
  const q = questions[current];
  const opts = document.querySelectorAll('.option');
  opts.forEach((btn, idx) => {
    btn.style.pointerEvents = 'none';
    if (idx === q.a) btn.classList.add('correct');
    else if (idx === i && i !== q.a) btn.classList.add('wrong');
  });
  if (i === q.a) { score++; document.getElementById('score').textContent = score; }
  document.getElementById('next-btn').style.display = 'inline-block';
}
function nextQ() {
  current++;
  if (current < questions.length) loadQ();
  else document.getElementById('question').textContent = 'Quiz complete! Score: ' + score + '/' + questions.length;
}
loadQ();`,
    steps: quizSteps,
  },
  {
    name: "Memory Game",
    path: "/apps/memory-game",
    icon: "/icons/memory.svg",
    description: "Match pairs of emojis and test your memory.",
    level: 4,
    ProjectComponent: MemoryGame,
    projectStars: "5",
    category: ["games", "logic"],
    tags: ["memory", "game", "matching", "emojis"],
    htmlSnippet: `<div class="game">
  <p>Moves: <span id="moves">0</span></p>
  <div class="grid">
    <div class="card" onclick="flip(this)" data-id="0"></div>
    <div class="card" onclick="flip(this)" data-id="1"></div>
    <div class="card" onclick="flip(this)" data-id="2"></div>
    <div class="card" onclick="flip(this)" data-id="3"></div>
    <div class="card" onclick="flip(this)" data-id="4"></div>
    <div class="card" onclick="flip(this)" data-id="5"></div>
    <div class="card" onclick="flip(this)" data-id="6"></div>
    <div class="card" onclick="flip(this)" data-id="7"></div>
    <div class="card" onclick="flip(this)" data-id="8"></div>
    <div class="card" onclick="flip(this)" data-id="9"></div>
    <div class="card" onclick="flip(this)" data-id="10"></div>
    <div class="card" onclick="flip(this)" data-id="11"></div>
    <div class="card" onclick="flip(this)" data-id="12"></div>
    <div class="card" onclick="flip(this)" data-id="13"></div>
    <div class="card" onclick="flip(this)" data-id="14"></div>
    <div class="card" onclick="flip(this)" data-id="15"></div>
  </div>
  <button onclick="resetGame()">Reset</button>
</div>`,
    cssSnippet: `.game { text-align: center; padding: 1rem; }
.grid {
  display: grid;
  grid-template-columns: repeat(4, 80px);
  gap: 8px;
  justify-content: center;
  margin: 1rem auto;
}
.card {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  color: transparent;
  user-select: none;
}
.card.flipped {
  background: white;
  border: 2px solid #e5e7eb;
  color: inherit;
}
.card.matched {
  background: #d1fae5;
  border-color: #10b981;
  color: inherit;
}`,
    jsSnippet: `const emojis = ['🐶','🐱','🐸','🦊','🐻','🐼','🐨','🦁','🐶','🐱','🐸','🦊','🐻','🐼','🐨','🦁'];
let cards = emojis.sort(() => Math.random() - 0.5);
let flippedCards = [];
let moves = 0;
let locked = false;
function flip(el) {
  if (locked || el.classList.contains('flipped') || el.classList.contains('matched')) return;
  el.textContent = cards[el.dataset.id];
  el.classList.add('flipped');
  flippedCards.push(el);
  if (flippedCards.length === 2) {
    locked = true;
    moves++;
    document.getElementById('moves').textContent = moves;
    if (cards[flippedCards[0].dataset.id] === cards[flippedCards[1].dataset.id]) {
      flippedCards.forEach(c => c.classList.add('matched'));
      flippedCards = [];
      locked = false;
    } else {
      setTimeout(() => {
        flippedCards.forEach(c => { c.textContent = ''; c.classList.remove('flipped'); });
        flippedCards = [];
        locked = false;
      }, 800);
    }
  }
}
function resetGame() {
  cards = emojis.sort(() => Math.random() - 0.5);
  document.querySelectorAll('.card').forEach(c => { c.textContent = ''; c.className = 'card'; });
  flippedCards = [];
  moves = 0;
  document.getElementById('moves').textContent = '0';
  locked = false;
}`,
    steps: memorySteps,
  },
  {
    name: "Pomodoro Timer",
    path: "/apps/pomodoro-timer",
    icon: "/icons/pomodoro.svg",
    description: "Stay productive with focus and break intervals.",
    level: 5,
    ProjectComponent: PomodoroTimer,
    projectStars: "5",
    category: ["productivity", "tools"],
    tags: ["pomodoro", "timer", "productivity", "focus"],
    htmlSnippet: `<div class="container">
  <div id="mode">Focus Time</div>
  <div id="timer">25:00</div>
  <button id="toggle-btn" onclick="toggle()">Start</button>
  <button onclick="reset()">Reset</button>
</div>`,
    cssSnippet: `.container {
  text-align: center;
  padding: 2rem;
}
#mode {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #6b7280;
  margin-bottom: 1rem;
}
#timer {
  font-size: 4rem;
  font-family: monospace;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1.5rem;
}
button {
  padding: 0.75rem 1.5rem;
  margin: 0 0.25rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  color: white;
}
#toggle-btn { background: #3b82f6; }
#toggle-btn:hover { background: #2563eb; }
button:last-child { background: #6b7280; }
button:last-child:hover { background: #4b5563; }`,
    jsSnippet: `let minutes = 25;
let seconds = 0;
let isRunning = false;
let isWork = true;
let interval = null;
function updateDisplay() {
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  document.getElementById('timer').textContent = m + ':' + s;
}
function toggle() {
  if (isRunning) { clearInterval(interval); isRunning = false; document.getElementById('toggle-btn').textContent = 'Resume'; }
  else {
    isRunning = true;
    document.getElementById('toggle-btn').textContent = 'Pause';
    interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          isWork = !isWork;
          minutes = isWork ? 25 : 5;
          seconds = 0;
          document.getElementById('mode').textContent = isWork ? 'Focus Time' : 'Break Time';
        } else { minutes--; seconds = 59; }
      } else { seconds--; }
      updateDisplay();
    }, 1000);
  }
}
function reset() {
  clearInterval(interval);
  isRunning = false;
  isWork = true;
  minutes = 25;
  seconds = 0;
  document.getElementById('mode').textContent = 'Focus Time';
  document.getElementById('toggle-btn').textContent = 'Start';
  updateDisplay();
}
updateDisplay();`,
    steps: pomodoroSteps,
  },
  {
    name: "Countdown Timer",
    path: "/apps/countdown-timer",
    icon: "/icons/countdown.svg",
    description: "Set a custom countdown and watch it tick down.",
    level: 5,
    ProjectComponent: CountdownTimer,
    projectStars: "5",
    category: ["tools", "utilities"],
    tags: ["countdown", "timer", "time", "events"],
    htmlSnippet: `<div class="cd">
  <div class="setup">
    <input type="number" id="minutes-input" value="5" min="1">
    <button onclick="startTimer()">Start</button>
  </div>
  <div id="cd-timer">05:00</div>
  <div class="controls">
    <button onclick="pauseTimer()">Pause</button>
    <button onclick="resetTimer()">Reset</button>
  </div>
</div>`,
    cssSnippet: `.cd { text-align: center; padding: 2rem; }
.setup { margin-bottom: 1rem; }
.setup input {
  padding: 0.5rem;
  width: 80px;
  text-align: center;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-right: 0.5rem;
}
#cd-timer {
  font-size: 4rem;
  font-family: monospace;
  font-weight: bold;
  color: #1f2937;
  margin: 1.5rem 0;
}
.controls button {
  padding: 0.5rem 1.5rem;
  margin: 0 0.25rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
}
.controls button:first-child { background: #f59e0b; color: white; }
.controls button:last-child { background: #6b7280; color: white; }`,
    jsSnippet: `let totalSeconds = 0;
let isRunning = false;
let interval = null;
function updateDisplay() {
  const m = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const s = String(totalSeconds % 60).padStart(2, '0');
  document.getElementById('cd-timer').textContent = m + ':' + s;
}
function startTimer() {
  if (isRunning) return;
  const input = document.getElementById('minutes-input');
  totalSeconds = parseInt(input.value) * 60 || 300;
  isRunning = true;
  interval = setInterval(() => {
    totalSeconds--;
    updateDisplay();
    if (totalSeconds <= 0) { clearInterval(interval); isRunning = false; }
  }, 1000);
}
function pauseTimer() {
  clearInterval(interval);
  isRunning = false;
}
function resetTimer() {
  clearInterval(interval);
  isRunning = false;
  const input = document.getElementById('minutes-input');
  totalSeconds = parseInt(input.value) * 60 || 300;
  updateDisplay();
}`,
    steps: countdownSteps,
  },
  {
    name: "Palindrome Checker",
    path: "/apps/palindrome-checker",
    icon: "/icons/palindrome.svg",
    description: "Check if a word or phrase reads the same forwards and backwards.",
    level: 2,
    ProjectComponent: PalindromeChecker,
    projectStars: "5",
    category: ["utilities", "strings"],
    tags: ["palindrome", "strings", "text"],
    htmlSnippet: `<div class="container">\n  <h2>Palindrome Checker</h2>\n  <input type="text" id="text-input" placeholder="Enter a word...">\n  <button id="check-btn" onclick="checkPalindrome()">Check Palindrome</button>\n  <p id="result"></p>\n</div>`,
    cssSnippet: `.container {\n  text-align: center;\n  padding: 2rem;\n}\ninput {\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 250px;\n}\nbutton {\n  padding: 0.5rem 1rem;\n  background: #8B5CF6;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-left: 0.5rem;\n}\n#result {\n  margin-top: 1rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n}`,
    jsSnippet: `function checkPalindrome() {\n  const text = document.getElementById('text-input').value;\n  const clean = text.toLowerCase().replace(/[^a-z0-9]/g, '');\n  const reversed = clean.split('').reverse().join('');\n  const result = document.getElementById('result');\n  if (clean && clean === reversed) {\n    result.textContent = '✅ Yes, it is a palindrome!';\n  } else {\n    result.textContent = '❌ No, it is not a palindrome.';\n  }\n}`,
    steps: palindromeSteps,
  },
  {
    name: "Vowel Counter",
    path: "/apps/vowel-counter",
    icon: "/icons/vowels.svg",
    description: "Count the number of vowels in any text you type.",
    level: 2,
    ProjectComponent: VowelCounter,
    projectStars: "5",
    category: ["utilities", "strings"],
    tags: ["vowels", "counter", "text", "strings"],
    htmlSnippet: `<div class="container">\n  <h2>Vowel Counter</h2>\n  <textarea id="text-input" placeholder="Type something..." oninput="countVowels()"></textarea>\n  <div id="stats">\n    <p>A: <span id="count-a">0</span></p>\n    <p>E: <span id="count-e">0</span></p>\n    <p>I: <span id="count-i">0</span></p>\n    <p>O: <span id="count-o">0</span></p>\n    <p>U: <span id="count-u">0</span></p>\n    <p>Total: <span id="count-total">0</span></p>\n  </div>\n</div>`,
    cssSnippet: `.container {\n  text-align: center;\n  padding: 2rem;\n}\ntextarea {\n  width: 100%;\n  max-width: 400px;\n  height: 80px;\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n#stats {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n  margin-top: 1rem;\n}\n#stats p {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-weight: bold;\n}`,
    jsSnippet: `function countVowels() {\n  const text = document.getElementById('text-input').value.toLowerCase();\n  const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };\n  for (const ch of text) {\n    if (ch in counts) counts[ch]++;\n  }\n  let total = 0;\n  for (const v of ['a','e','i','o','u']) {\n    document.getElementById('count-' + v).textContent = counts[v];\n    total += counts[v];\n  }\n  document.getElementById('count-total').textContent = total;\n}`,
    steps: vowelSteps,
  },
  {
    name: "Expense Tracker",
    path: "/apps/expense-tracker",
    icon: "/icons/expenses.svg",
    description: "Add, remove, and track your daily expenses.",
    level: 3,
    ProjectComponent: ExpenseTracker,
    projectStars: "5",
    category: ["utilities", "finance"],
    tags: ["expenses", "tracker", "finance", "CRUD"],
    htmlSnippet: `<div class="container">\n  <h2>Expense Tracker</h2>\n  <div class="inputs">\n    <input type="text" id="name-input" placeholder="Expense name">\n    <input type="number" id="amount-input" placeholder="Amount">\n    <button onclick="addExpense()">Add Expense</button>\n  </div>\n  <ul id="expense-list"></ul>\n  <p id="total">Total: $0.00</p>\n</div>`,
    cssSnippet: `.container {\n  max-width: 450px;\n  margin: 0 auto;\n  padding: 1.5rem;\n}\n.inputs {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\ninput {\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  flex: 1;\n}\nbutton {\n  padding: 0.5rem 1rem;\n  background: #10B981;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\nul {\n  list-style: none;\n  padding: 0;\n}\nli {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem;\n  margin: 0.25rem 0;\n  background: #f3f4f6;\n  border-radius: 4px;\n}\n#total {\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-align: right;\n  margin-top: 1rem;\n}`,
    jsSnippet: `let expenses = [];\nfunction addExpense() {\n  const name = document.getElementById('name-input').value.trim();\n  const amount = parseFloat(document.getElementById('amount-input').value) || 0;\n  if (!name || amount <= 0) return;\n  expenses.push({ name, amount });\n  document.getElementById('name-input').value = '';\n  document.getElementById('amount-input').value = '';\n  render();\n}\nfunction removeExpense(i) {\n  expenses.splice(i, 1);\n  render();\n}\nfunction render() {\n  const list = document.getElementById('expense-list');\n  list.innerHTML = '';\n  let total = 0;\n  expenses.forEach((e, i) => {\n    total += e.amount;\n    const li = document.createElement('li');\n    li.innerHTML = '<span>' + e.name + '</span> <span>$' + e.amount.toFixed(2) + ' <button onclick=\"removeExpense(' + i + ')\">&times;</button></span>';\n    list.appendChild(li);\n  });\n  document.getElementById('total').textContent = 'Total: $' + total.toFixed(2);\n}`,
    steps: expenseSteps,
  },
  {
    name: "Rock Paper Scissors",
    path: "/apps/rock-paper-scissors",
    icon: "/icons/rps.svg",
    description: "Play the classic Rock, Paper, Scissors against the computer.",
    level: 4,
    ProjectComponent: RockPaperScissors,
    projectStars: "5",
    category: ["games", "logic"],
    tags: ["game", "rps", "random", "logic"],
    htmlSnippet: `<div class="game">\n  <h2>Rock Paper Scissors</h2>\n  <div id="choices">\n    <button onclick="play('rock')">🪨 Rock</button>\n    <button onclick="play('paper')">📄 Paper</button>\n    <button onclick="play('scissors')">✂️ Scissors</button>\n  </div>\n  <div id="result"></div>\n</div>`,
    cssSnippet: `.game {\n  text-align: center;\n  padding: 2rem;\n}\n#choices {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 1.5rem 0;\n}\n#choices button {\n  padding: 1rem;\n  font-size: 1.5rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n#choices button:hover {\n  background: #f3f4f6;\n  transform: scale(1.1);\n}\n#result {\n  font-size: 1.3rem;\n  font-weight: bold;\n  margin-top: 1rem;\n}`,
    jsSnippet: `function play(choice) {\n  const choices = ['rock', 'paper', 'scissors'];\n  const emojis = ['🪨', '📄', '✂️'];\n  const computer = choices[Math.floor(Math.random() * 3)];\n  let result = '';\n  if (choice === computer) {\n    result = \"It's a draw!\";\n  } else if (\n    (choice === 'rock' && computer === 'scissors') ||\n    (choice === 'paper' && computer === 'rock') ||\n    (choice === 'scissors' && computer === 'paper')\n  ) {\n    result = 'You win!';\n  } else {\n    result = 'You lose!';\n  }\n  const idx = choices.indexOf(computer);\n  document.getElementById('result').innerHTML =\n    'You chose ' + choice + '<br>Computer chose ' + emojis[idx] + ' ' + computer + '<br><br><strong>' + result + '</strong>';\n}`,
    steps: rpsSteps,
  },
  {
    name: "Typing Speed Test",
    path: "/apps/typing-speed-test",
    icon: "/icons/typing.svg",
    description: "Test how fast you can type with live WPM and accuracy tracking.",
    level: 5,
    ProjectComponent: TypingTest,
    projectStars: "5",
    category: ["tools", "productivity"],
    tags: ["typing", "speed", "wpm", "accuracy"],
    htmlSnippet: `<div class="container">\n  <h2>Typing Speed Test</h2>\n  <p id="sentence">The quick brown fox jumps over the lazy dog</p>\n  <textarea id="input" placeholder="Start typing here..." oninput="checkTyping()"></textarea>\n  <div id="stats">\n    <div class="stat-card"><span id="wpm">0</span><br>WPM</div>\n    <div class="stat-card"><span id="accuracy">100</span>%<br>Accuracy</div>\n  </div>\n</div>`,
    cssSnippet: `.container {\n  max-width: 500px;\n  margin: 0 auto;\n  padding: 2rem;\n  text-align: center;\n}\n#sentence {\n  background: #f3f4f6;\n  padding: 1rem;\n  border-radius: 8px;\n  font-size: 1.1rem;\n  margin-bottom: 1rem;\n}\ntextarea {\n  width: 100%;\n  height: 80px;\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n#stats {\n  display: flex;\n  gap: 2rem;\n  justify-content: center;\n  margin-top: 1.5rem;\n}\n.stat-card {\n  background: #f3f4f6;\n  padding: 1rem 1.5rem;\n  border-radius: 12px;\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n.stat-card span {\n  font-size: 2rem;\n  color: #6366F1;\n}`,
    jsSnippet: `let startTime = null;\nfunction checkTyping() {\n  const input = document.getElementById('input');\n  const text = input.value;\n  if (!startTime && text.length > 0) startTime = Date.now();\n  if (text.length === 0) { startTime = null; document.getElementById('wpm').textContent = '0'; document.getElementById('accuracy').textContent = '100'; return; }\n  const sentence = document.getElementById('sentence').textContent;\n  let correct = 0;\n  for (let i = 0; i < text.length; i++) {\n    if (text[i] === sentence[i]) correct++;\n  }\n  const elapsed = (Date.now() - startTime) / 1000 / 60;\n  const wpm = elapsed > 0 ? Math.round((text.length / 5) / elapsed) : 0;\n  const accuracy = Math.round((correct / text.length) * 100);\n  document.getElementById('wpm').textContent = wpm;\n  document.getElementById('accuracy').textContent = accuracy;\n}`,
    steps: typingSteps,
  },
];
