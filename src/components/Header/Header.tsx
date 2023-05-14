import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../../public/logo.png";
import darkLogo from "../../../public/dark-logo.png";
import dynamic from "next/dynamic";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [logoImage, setLogoImage] = useState(logo);

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
    // Obtener el valor del tema almacenado en el almacenamiento local
    const storedTheme = window.localStorage.getItem("theme");

    // Si hay un valor almacenado, establecer el tema
    if (storedTheme && (storedTheme === "light" || storedTheme === "dark")) {
      setTheme(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, [setTheme]);

  useEffect(() => {
    // Almacenar el valor del tema en el almacenamiento local
    window.localStorage.setItem("theme", theme);

    // Establecer la imagen del logo basada en el valor del tema
    setLogoImage(theme === "dark" ? darkLogo : logo);
  }, [theme]);

  return (
    <header>
      <div className="flex justify-between py-10 px-20">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              <Image src={logoImage} alt="Logo" width={120} height={40} />
            </div>
          </Link>
        </div>

        <nav>
          <ul className="hidden md:flex flex justify-center items-center">
            <li className="mx-3">
              <Link href="/">
                <span className="hover:text-blue-500">Inicio</span>
              </Link>
            </li>
            <li className="mx-3">
              <Link href="/aplicaciones">
                <span className="hover:text-blue-500">Aplicaciones</span>
              </Link>
            </li>
            <li className="mx-3">
              <Link href="/aprende">
                <span className="hover:text-blue-500">Aprende</span>
              </Link>
            </li>
            <li>
              <span className="mx-3 select-none">|</span>
            </li>
            <li className="ml-3" onClick={handleThemeToggle}>
              <span>{theme === "light" ? <FiMoon /> : <FiSun />}</span>
            </li>
          </ul>
          <div className="md:hidden flex items-center">
            <button onClick={handleMenuClick}>
              {isMenuOpen ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <AiOutlineMenu className="h-6 w-6" />
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
