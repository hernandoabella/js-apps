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

          <div className="inline-block m-5">
                  <a
                    href="/"
                    className="flex items-center bg-[#FDD130] p-2 rounded-lg text-black hover:bg-[#fbbf24] transition-colors"
                  >
                    <FaArrowCircleLeft  />
                    
                  </a>
                </div>
            
            

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-96 p-2 border-r dark:bg-[#242424] ">
                {app.ProjectComponent ? <app.ProjectComponent /> : null}
              </div>
              <div className="md:w-1/2 h-96 dark:bg-[#212121] p-2 overflow-auto">
                <div className="flex mb-4">
                  {/* HTML Button */}
                  <button
                    onClick={() => setCodeType("html")}
                    className={`flex items-center gap-1 p-2 rounded-md ${codeType === "html"
                      ? "bg-[#e34f26] text-white" // HTML: #e34f26 (HTML5 color)
                      : "bg-gray-600"
                      }`}
                  >
                    <FaHtml5 /> HTML
                  </button>

                  {/* CSS Button */}
                  <button
                    onClick={() => setCodeType("css")}
                    className={`flex items-center gap-1 p-2 mx-2 rounded-md ${codeType === "css"
                      ? "bg-[#2965f1] text-white" // CSS: #2965f1 (CSS3 color)
                      : "bg-gray-600"
                      }`}
                  >
                    <FaCss3 /> CSS
                  </button>

                  {/* JS Button */}
                  <button
                    onClick={() => setCodeType("js")}
                    className={`flex items-center gap-1 p-2 rounded-md ${codeType === "js"
                      ? "bg-[#f7df1e] text-black" // JS: #f7df1e (JavaScript color)
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
                    {copied ? <FaCheck /> : <FaCopy />} {/* Icon changes based on state */}
                  </button>
                </div>
              </div>
            </div>


            <div className="dark:bg-[#141414] p-5 rounded-b-xl justify-between gap-5">
              <div>
                <h2 className="text-2xl font-bold mb-2">{app.title}</h2>
                <p className="mb-2">{app.description}</p>{" "}
              </div>
              <div>

                <div className="inline-block mt-2">
                  <a download={true}
                    href={app.downloadLink}
                    className="flex items-center bg-[#FDD130] p-2 rounded-lg text-black hover:bg-[#fbbf24] transition-colors"
                  >
                    <FaDownload className="mr-2" />
                    <span>Download Project</span>
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
