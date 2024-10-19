import RandomNumber from "@/app/components/projects/RandomNumber";

export interface App {
  name: string;
  path: string;
  ProjectComponent: React.FC | null;
  iframeSrc: string;
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
    iframeSrc: "/projects/random-number/index.html",
    level: 1,
    title: "Random Number Generator",
    description:
      "This app generates a random number.", 
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Hello, World!');`,
    githubLink: "https://github.com/hernandoabella/random-number-generator",
    projectStars: 0,
    downloadLink: ""
  },
  {
    name: "Random Number ",
    path: "/apps/random-number",
    ProjectComponent: RandomNumber,
    iframeSrc: "/projects/random-number/index.html",
    level: 1,
    title: "Random Number Generator",
    description:
      "This app generates a random number.", 
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Hello, World!');`,
    githubLink: "https://github.com/hernandoabella/random-number-generator",
    projectStars: 0,
    downloadLink: ""
  },

  {
    name: "Random Number ",
    path: "/apps/random-number",
    ProjectComponent: RandomNumber,
    iframeSrc: "/projects/random-number/index.html",
    level: 1,
    title: "Random Number Generator",
    description:
      "This app generates a random number.", 
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Hello, World!');`,
    githubLink: "https://github.com/hernandoabella/random-number-generator",
    projectStars: 0,
    downloadLink: ""
  },

  {
    name: "Random Number ",
    path: "/apps/random-number",
    ProjectComponent: RandomNumber,
    iframeSrc: "/projects/random-number/index.html",
    level: 1,
    title: "Random Number Generator",
    description:
      "This app generates a random number.", 
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Hello, World!');`,
    githubLink: "https://github.com/hernandoabella/random-number-generator",
    projectStars: 0,
    downloadLink: ""
  },

  {
    name: "Random Number ",
    path: "/apps/random-number",
    ProjectComponent: RandomNumber,
    iframeSrc: "/projects/random-number/index.html",
    level: 2,
    title: "Random Number Generator",
    description:
      "This app generates a random number.", 
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Hello, World!');`,
    githubLink: "https://github.com/hernandoabella/random-number-generator",
    projectStars: 0,
    downloadLink: ""
  },

  {
    name: "Random Number ",
    path: "/apps/random-number",
    ProjectComponent: RandomNumber,
    iframeSrc: "/projects/random-number/index.html",
    level: 2,
    title: "Random Number Generator",
    description:
      "This app generates a random number.", 
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Hello, World!');`,
    githubLink: "https://github.com/hernandoabella/random-number-generator",
    projectStars: 0,
    downloadLink: ""
  },

  {
    name: "Random Number ",
    path: "/apps/random-number",
    ProjectComponent: RandomNumber,
    iframeSrc: "/projects/random-number/index.html",
    level: 2,
    title: "Random Number Generator",
    description:
      "This app generates a random number.", 
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Hello, World!');`,
    githubLink: "https://github.com/hernandoabella/random-number-generator",
    projectStars: 0,
    downloadLink: ""
  },

  {
    name: "Random Number ",
    path: "/apps/random-number",
    ProjectComponent: RandomNumber,
    iframeSrc: "/projects/random-number/index.html",
    level: 2,
    title: "Random Number Generator",
    description:
      "This app generates a random number.", 
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Hello, World!');`,
    githubLink: "https://github.com/hernandoabella/random-number-generator",
    projectStars: 0,
    downloadLink: ""
  },
  
];
