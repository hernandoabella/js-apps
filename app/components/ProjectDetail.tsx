"use client";
import "highlight.js/styles/github-dark.css";
import { useState, useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3,
  FaArrowCircleLeft,
  FaJs,
  FaCopy,
  FaDownload,
  FaCheck,
} from "react-icons/fa";
import Link from "next/link";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml"; // Import HTML language
import css from "highlight.js/lib/languages/css"; // Import CSS language
import javascript from "highlight.js/lib/languages/javascript"; // Import JavaScript language
import { App } from "@/app/appData";
import Header from "./Header";

// Register languages with highlight.js
hljs.registerLanguage("html", html);
hljs.registerLanguage("css", css);
hljs.registerLanguage("javascript", javascript);

interface ProjectDetailProps {
  app: App; // Use the updated App interface
}

const ProjectDetail = ({ app }: ProjectDetailProps) => {
  const [codeType, setCodeType] = useState<"html" | "css" | "js">("html");
  const codeRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false); // Estado para manejar el ícono de copia

  // Snippets for code highlighting
  const codeSnippets = {
    html: app.htmlSnippet
      ? `<pre><code class="language-html hljs">${app.htmlSnippet}</code></pre>`
      : "",
    css: app.cssSnippet
      ? `<pre><code class="language-css hljs">${app.cssSnippet}</code></pre>`
      : "",
    js: app.jsSnippet
      ? `<pre><code class="language-javascript hljs">${app.jsSnippet}</code></pre>`
      : "",
  };

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.innerHTML = codeSnippets[codeType];
      codeRef.current.querySelectorAll("pre code").forEach((block) => {
        if (block instanceof HTMLElement) {
          hljs.highlightElement(block);
        }
      });
    }
  }, [codeType]);

  const handleCopyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(codeRef.current?.innerText || "")
        .then(() => {
          setCopied(true); // Cambia el estado a true cuando se copia
          setTimeout(() => setCopied(false), 2000); // Restablece el estado después de 2 segundos
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = codeRef.current?.innerText || "";
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true); // Cambia el estado a true cuando se copia
      setTimeout(() => setCopied(false), 2000); // Restablece el estado después de 2 segundos
    }
  };

  return (
    <div>
      <Header />
      <div className="md:flex md:items-center md:justify-center md:h-screen">
        <div className="lg:w-9/12">
          <div className="lg:mx-20 lg:flex-col">
            <div className="dark:bg-[#141414] p-5 rounded-t-xl border">
              <Link href="/">
                <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-gray-900 hover:bg-gray-950 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 text-white">
                  <FaArrowCircleLeft className="mr-2" /> Go back
                </div>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-96 p-2 border-r border-l dark:bg-[#242424] ">
                {app.ProjectComponent ? <app.ProjectComponent /> : null}
              </div>
              <div className="md:w-1/2 h-96 dark:bg-[#212121] p-2 border-r overflow-auto">
                <div className="flex mb-4 ">
                  <button
                    onClick={() => setCodeType("html")}
                    className={`flex items-center gap-1 p-2 rounded-md ${
                      codeType === "html"
                        ? "bg-[#161616] text-white"
                        : "bg-gray-600"
                    }`}
                  >
                    <FaHtml5 /> HTML
                  </button>
                  <button
                    onClick={() => setCodeType("css")}
                    className={`flex items-center gap-1 p-2 mx-2 rounded-md ${
                      codeType === "css"
                        ? "bg-[#161616] text-white"
                        : "bg-gray-600"
                    }`}
                  >
                    <FaCss3 /> CSS
                  </button>
                  <button
                    onClick={() => setCodeType("js")}
                    className={`flex items-center gap-1 p-2 rounded-md ${
                      codeType === "js"
                        ? "bg-[#161616] text-white"
                        : "bg-gray-600"
                    }`}
                  >
                    <FaJs /> JS
                  </button>
                </div>
                <div className="relative">
                  <div ref={codeRef} />
                  <button
                    onClick={handleCopyToClipboard}
                    className="absolute top-2 right-2 p-2 rounded-md bg-gray-600 text-white hover:bg-gray-700"
                    title="Copy to Clipboard"
                  >
                    {copied ? <FaCheck /> : <FaCopy />}{" "}
                    {/* Cambia el ícono según el estado */}
                  </button>
                </div>
              </div>
            </div>

            <div className=" dark:bg-[#141414] p-5 rounded-b-xl md:flex justify-between gap-5 border">
              <div>
                <h2 className="text-2xl font-bold mb-2">{app.title}</h2>
                <p className="mb-2">{app.description}</p>{" "}
              </div>
              <div className="flex items-center justify-center gap-5">
                <div className="pt-5 md:pt-0">
                  <a
                    href={app.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    
                  </a>
                </div>
                <div className="pt-5 md:pt-0">
                  <a
                    href={app.downloadLink}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-gray-900 hover:bg-gray-950 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-gray-900"
                  >
                    <FaDownload className="mr-2 text-white" />
                    <span className="text-slate-50">Download Project</span>
                  </a>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
