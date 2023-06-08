import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import logo from "../../../public/logo.png";
import darkLogo from "../../../public/dark-logo.png";
import dynamic from "next/dynamic";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [logoImage, setLogoImage] = useState<string | null>(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    localStorage.setItem("theme", theme ?? "light"); // Valor predeterminado "light" si theme es undefined
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      setLogoImage(darkLogo.src);
    } else {
      setLogoImage(logo.src);
    }
  }, [theme]);

  return (
    <header className="dark:bg-slate-900 dark:text-white">
      <div className="flex justify-between p-8 md:py-10 md:px-20 font-semibold">
        <div className="flex items-center">
          <Link href="/">
            <div className="">
              {logoImage && (
                <Image
                  src={logoImage}
                  alt="Logo"
                  width={120}
                  height={40}
                  priority
                />
              )}
            </div>
          </Link>
        </div>

        <nav>
          <ul className="hidden md:flex flex justify-center items-center">
            <li className="mx-3">
              <Link href="/">
                <span className="hover:text-sky-400">Inicio</span>
              </Link>
            </li>
            <li className="mx-3">
              <Link href="/aplicaciones">
                <span className="hover:text-sky-400">Aplicaciones</span>
              </Link>
            </li>
            <div className="flex items-center border-l border-slate-200 ml-3 dark:border-slate-800">
              <svg
                viewBox="0 0 16 16"
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
              ></svg>
            </div>
            <li className="mr-3" onClick={handleThemeToggle}>
              <span className="text-sky-500 dark:text-sky-400">
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
          <div className="md:hidden flex items-center">
            <button onClick={handleMenuClick}>
              {isMenuOpen ? (
                <AiOutlineClose className="h-5 w-5" />
              ) : (
                <AiOutlineMenu className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="bg-white text-black absolute rounded-lg shadow-md">
              <li className="py-2 px-4">
                <Link href="/">
                  <span className="hover:text-blue-500">Inicio</span>
                </Link>
              </li>
              <li className="py-2 px-4">
                <Link href="/aplicaciones">
                  <span className="hover:text-blue-500">Aplicaciones</span>
                </Link>
              </li>
              <li className="py-2 px-4">
                <Link href="/aprende">
                  <span className="hover:text-blue-500">Aprende</span>
                </Link>
              </li>
              <li className="mr-3" onClick={handleThemeToggle}>
                <span className="flex py-1">
                  {theme === "light" ? <FiMoon /> : <FiSun />}
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
