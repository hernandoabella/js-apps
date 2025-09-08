// app/appData.ts
import { ReactNode } from "react";
import RandomNumber from "@/app/components/projects/NumberGenerator";
import RandomString from "@/app/components/projects/StringGenerator";
import RandomColor from "@/app/components/projects/ColorGenerator";
import RandomGradient from "@/app/components/projects/GradientGenerator";
import ThemeSwitcher from "@/app/components/projects/ThemeSwitcher";

export interface App {
  projectStars: ReactNode;
  name: string;
  path: string;
  icon: string;
  description: string;
  level: number;
  ProjectComponent?: React.FC;
}

export const apps: App[] = [
  {
    name: "Number Generator",
    path: "/apps/number-generator",
    icon: "/icons/randomnumber.svg",
    description: "Generate a random number between 1 and 100.",
    level: 1,
    ProjectComponent: RandomNumber,
    projectStars: undefined
  },
  {
    name: "Color Generator",
    path: "/apps/color-generator",
    icon: "/icons/randomcolor.svg",
    description: "Generate random colors with automatic contrast detection.",
    level: 1,
    ProjectComponent: RandomColor,
    projectStars: undefined
  },
  {
    name: "String Generator",
    path: "/apps/string-generator",
    icon: "/icons/randomstring.svg",
    description: "Generate a random alphanumeric string.",
    level: 1,
    ProjectComponent: RandomString,
    projectStars: undefined
  },
  {
    name: "Gradient Generator",
    path: "/apps/gradient-generator",
    icon: "/icons/randomgradient.svg",
    description: "Generate a random gradient to visualize color schemes.",
    level: 1,
    ProjectComponent: RandomGradient,
    projectStars: undefined
  },
  {
    name: "Theme Switcher",
    path: "/apps/theme-switcher",
    icon: "/icons/themeswitcher.svg",
    description: "Toggle between light and dark themes.",
    level: 2,
    ProjectComponent: ThemeSwitcher,
    projectStars: undefined
  },
];
