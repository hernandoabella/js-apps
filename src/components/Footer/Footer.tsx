import React from "react";
import { FaGithub, FaCoffee } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="flex justify-between items-center p-8">
        <p className="text-sm">
          &copy; 2023 JS-APPS. All rights reserved.
        </p>
        <div className="flex justify-center">
          <a href="https://github.com/hernandoabella/js-apps" target="_blank">
            <FaGithub className="text-gray-700 hover:text-gray-800 mx-2 h-6 w-6" />
          </a>
          <a href="https://www.buymeacoffee.com/hernandoabella" target="_blank">
            <FaCoffee className="text-gray-700 hover:text-gray-800 mx-2 h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
