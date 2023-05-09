import React, { useState } from "react";
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

  const logoImage = theme === "light" ? logo : darkLogo;

  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-5">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              <Image src={logoImage} alt="Logo" width={120} height={40} />
            </div>
          </Link>
        </div>

        <nav>
          <ul className="hidden md:flex">
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
            <li className="mx-3" onClick={handleThemeToggle}>
              <span className="flex py-1">
                {theme === "light" ? <FiMoon /> : <FiSun />}
              </span>
            </li>
          </ul>
          <div className="md:hidden flex items-center mr-5">
            <button onClick={handleMenuClick}>
              {isMenuOpen ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <AiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="bg-white dark:bg-gray-800 absolute top-16 right-0 w-48 rounded-lg shadow-md">
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
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
