import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center ml-20">
          <Link href="/">
            <Image src={logo} alt="Logo" width={120} height={40} />
          </Link>
        </div>
        <nav>
          <ul className="flex">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;