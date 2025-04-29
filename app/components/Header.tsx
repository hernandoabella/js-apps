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
            className="flex items-center space-x-3"
          >
            <div className="text-3xl font-bold font-[var(--font-squada-one)] tracking-widest hover:text-yellow-300 transition duration-300">
              <span className="text-yellow-400">&lt;/</span>JSAPPS
            </div>
          </a>
          <div className="flex items-center gap-5 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              href="https://www.github.com/hernandoabella/js-apps"
              className="text-3xl"
            >
              <FaGithub />
            </a>

            {/* <ModeToggle /> */}

            <div className="relative inline-flex items-center justify-center gap-4 group">
              <div
                className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
              ></div>
              <a
                role="button"
                className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                title="payment"
                href="https://hernandoabella.gumroad.com/l/hoocc"
              >Get All Apps<svg
                aria-hidden="true"
                viewBox="0 0 10 10"
                height="10"
                width="10"
                fill="none"
                className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
              >
                  <path
                    d="M0 5h7"
                    className="transition opacity-0 group-hover:opacity-100"
                  ></path>
                  <path
                    d="M1 1l4 4-4 4"
                    className="transition group-hover:translate-x-[3px]"
                  ></path>
                </svg>
              </a>
            </div>


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
