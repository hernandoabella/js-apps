import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black">
      <div className="container mx-auto flex justify-between items-center py-5">
        <div className="flex items-center ml-20">
          <Link href="/">
            <Image src={logo} alt="Logo" width={120} height={40} />
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
                <span className="hover:text-blue-500 mr-20">Aprende</span>
              </Link>
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
            <ul>
              <li>
                <Link href="/">
                  <span className="block px-4 py-2 hover:bg-gray-300">
                    Inicio
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/aplicaciones">
                  <span className="block px-4 py-2 hover:bg-gray-300">
                    Aplicaciones
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/aprende">
                  <span className="block px-4 py-2 hover:bg-gray-300">
                    Aprende
                  </span>
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