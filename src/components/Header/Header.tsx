import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.css";
import logo from "../../../public/logo.png";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          
            <Image src={logo} alt="Logo" width={120} height={40} />
          
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/aplicaciones">Aplicaciones</Link>
          </li>
          <li>
            <Link href="/aprende">Aprender</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
