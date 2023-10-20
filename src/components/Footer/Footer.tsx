import Link from "next/link";
import React from "react";
import { FaCoffee } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="flex justify-between items-center p-10 md:px-20 dark:text-white dark:bg-slate-900">
        <p className="text-sm">
          &copy; 2023 JS-APPS by{" "}
          <Link href={"https://www.x.com/hernandoabella"} target="_blank">
            <b>Hernando Abella</b>
          </Link>
          . Creativity in your hands.
        </p>
        <div className="flex justify-center text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
          <a
            href="https://www.buymeacoffee.com/hernandoabella"
            target="_blank"
            rel="noopener"
            title="Buy me a coffee"
          >
            <FaCoffee className="hover:text-gray-600 mx-2 h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
