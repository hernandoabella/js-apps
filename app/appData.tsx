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
    description: "This app generates a random string.",
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Hello, World!');`,
    githubLink: "https://github.com/hernandoabella/random-number-generator",
    projectStars: 0,
    downloadLink: "",
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
