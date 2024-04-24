import Link from "next/link";
import React from "react";
import { FaCoffee } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="p-10 pt-40 md:px-20 dark:text-white dark:bg-slate-900">
        <p className="text-center">
          &copy; 2024 JS-APPS by{" "}
          <Link href={"https://www.x.com/hernandoabella"} target="_blank">
            <b>@hernandoabella</b>
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
