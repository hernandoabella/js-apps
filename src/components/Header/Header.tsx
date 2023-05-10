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

  const logoImage = theme === "dark" ? darkLogo : logo;

  return (
    <header>
      <div className="flex justify-between py-5 px-20">
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
              <span>
                {theme === "light" ? <FiMoon /> : <FiSun />}
              </span>
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
