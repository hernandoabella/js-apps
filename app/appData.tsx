export interface App {
  name: string;
  path: string;
  iframeSrc: string;
  level: number;
  title: string; // New title property
  description: string; // New description property
  htmlSnippet?: string; // Optional HTML snippet
  cssSnippet?: string; // Optional CSS snippet
  jsSnippet?: string; // Optional JavaScript snippet
}

export const apps: App[] = [
  {
    name: "Random Number Generator",
    path: "/apps/random-number",
    iframeSrc: "https://lucent-semifreddo-6bce96.netlify.app/",
    level: 1,
    title: "Random Number Generator",
    description:
      "This app generates a random number between a specified range.", 
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Hello, World!');`,
  },

  {
    name: "Color Generator",
    path: "/apps/color-generator",
    iframeSrc: "https://timely-bienenstitch-7158d3.netlify.app/",
    level: 1,
    title: "Color Generator",
    description:
      "This app generates a random color.", 
    htmlSnippet: `<div>Hllo, Random Number!</div>`,
    cssSnippet: `div { color: red; }`,
    jsSnippet: `console.log('Helloooo, World!');`,
  },
];
