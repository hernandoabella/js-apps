import React from "react";
import { FaCoffee } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="flex justify-between items-center py-10 px-20">
        <p className="text-sm">
          &copy; 2023 JS-APPS by <b>Hernando Abella</b>. La creatividad en tus
          manos.
        </p>
        <div className="flex justify-center">
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