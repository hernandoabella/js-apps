import React from "react";
import { FaGithub } from "react-icons/fa";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="shadow-lg bg-white dark:bg-black fixed w-full z-20 top-0 start-0">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <div className="text-3xl dark:text-white font-bold">
                <span className="text-cyan-400">JS-</span>APPS
              </div>
            </a>
            <div className="items-center gap-5 flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              

              <a
                href="https://www.github.com/hernandoabella/js-apps"
                className="text-3xl text-gray-500 hover:text-gray-400"
              >
                <FaGithub />
              </a>

              <ModeToggle />

              <a
                rel="noopener"
                href="https://hernandoabella.gumroad.com/l/hoocc"
                target="_blank"
              >
                <button className="button flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                    <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
                  </svg>
                  Get All Apps
                </button>
              </a>

            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
