export interface App {
  id: number;
  name: string;
  path: string;
  iframeSrc: string;
  level: number;
}

export const apps: App[] = [
  {
    id: 1,
    name: "App 1",
    path: "/apps/key-counter",
    iframeSrc: "https://lucent-semifreddo-6bce96.netlify.app/",
    level: 1,
  },
  {
    id: 2,
    name: "App 2",
    path: "/apps/app2",
    iframeSrc: "https://lucent-semifreddo-6bce96.netlify.app/",
    level: 2,
  },
  {
    id: 3,
    name: "App 3",
    path: "/apps/app3",
    iframeSrc: "https://lucent-semifreddo-6bce96.netlify.app/",
    level: 3,
  },
  {
    id: 4,
    name: "App 4",
    path: "/apps/app4",
    iframeSrc: "https://lucent-semifreddo-6bce96.netlify.app/",
    level: 4,
  },
  {
    id: 5,
    name: "App 5",
    path: "/apps/app5",
    iframeSrc: "https://lucent-semifreddo-6bce96.netlify.app/",
    level: 5,
  },
];
