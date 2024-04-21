import React, { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

import dynamic from "next/dynamic";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const FiSun = dynamic(
    () => import("react-icons/fi").then((mod) => mod.FiSun),
    { ssr: false }
  );
  const FiMoon = dynamic(
    () => import("react-icons/fi").then((mod) => mod.FiMoon),
    { ssr: false }
  );

  useEffect(() => {
    localStorage.setItem("theme", theme ?? "light");
  }, [theme]);

  return (
    <header className="dark:bg-slate-900 dark:text-white">
      <div className="flex justify-between p-10 md:px-20 font-semibold">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center justify-center select-none">
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt={''}
              />
            </div>
          </Link>
        </div>

        <nav>
          <ul className="md:flex flex justify-center items-center">
            <li className="mr-6 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
              <Link href="/">

                Princing
              </Link>
            </li>
            <li className="mr-6 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
              <Link href="/">

                Success Stories
              </Link>
            </li>
            <li className="mr-6 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
              <Link href="/">
                Contact
              </Link>
            </li>
            <li className="mr-6 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
              <Link href="/apps">
                Apps
              </Link>
            </li>
            <li className="mr-6 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
              <Link href="/">
                Sign in
              </Link>
            </li>
            <li className="mr-3" onClick={handleThemeToggle}>
              <span className="text-sky-500 dark:text-sky-400 cursor-pointer">
                {theme === "light" ? (
                  <FiMoon className="w-5 h-5" />
                ) : (
                  <FiSun className="w-5 h-5" />
                )}
              </span>
            </li>
            <li className="ml-3 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
              <Link
                href="https://github.com/hernandoabella/js-apps"
                target="_blank"
              >
                <FaGithub className="hover:text-gray-600 w-5 h-5" />
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;