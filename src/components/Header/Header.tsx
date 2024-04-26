import React, { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

import dynamic from "next/dynamic";
import { useUser } from '@auth0/nextjs-auth0/client';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

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

  useEffect(() => {
    localStorage.setItem("theme", theme ?? "light");
  }, [theme]);

  const {user, error, isLoading} = useUser();

  if(isLoading) return <div>Loading...</div>;
  if(error) return <div>{error.message}</div>;

  if(user) {
    console.log(user);
    return (
      <div>
        Wellcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return (
    <header className="dark:bg-slate-900 dark:text-white">
      <div className="flex justify-between p-10 md:px-20 font-semibold">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center justify-center select-none">
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt={''}
              />
            </div>
          </Link>
        </div>

        <nav>
          <ul className="md:flex flex justify-center items-center">
            <li className="mr-6 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
              <Link href="/why-us">
                Why JS-APPS?
              </Link>
            </li>
            <li className="mr-6 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
              <Link href="/pricing">
                Pricing
              </Link>
            </li>

            <li className="mr-6 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
              <Link href="/api/auth/login">
                Sign in
              </Link>
            </li>
            <li className="bg-blue-500 text-white rounded-full p-2 mr-6 text-slate-400">
              <Link href="/contact">
                Contact
              </Link>
            </li>
            <li className="mr-3" onClick={handleThemeToggle}>
              <span className="text-sky-500 dark:text-sky-400 cursor-pointer">
                {theme === "light" ? (
                  <FiMoon className="w-5 h-5" />
                ) : (
                  <FiSun className="w-5 h-5" />
                )}
              </span>
            </li>
            <li className="ml-3 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
              <Link
                href="https://github.com/hernandoabella/js-apps"
                target="_blank"
              >
                <FaGithub className="hover:text-gray-600 w-5 h-5" />
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;