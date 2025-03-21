import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header>
      <nav className="shadow-lg fixed w-full z-20 top-0 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between py-4 px-4 md:px-10">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="logo">
            <Image
                src="/logo.png"
                alt="logo"
                width={180}
                height={40}
              />
            </div>
          </a>
          <div className="flex items-center gap-5 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              href="https://www.github.com/hernandoabella/js-apps"
              className="text-3xl text-gray-500 hover:text-gray-400"
            >
              <FaGithub />
            </a>

            {/* <ModeToggle /> */}

            {/* <a
              rel="noopener"
              href="https://hernandoabella.gumroad.com/l/hoocc"
              target="_blank"
            >
              <button className="button flex items-center">
                <svg
                  viewBox="0 0 16 16"
                  className="bi bi-lightning-charge-fill mr-1"
                  fill="currentColor"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                </svg>
                Get All Access
              </button>
            </a> */}

            {/* <div>
              <Image
                src="/avatar.png"
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
