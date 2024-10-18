"use client";
import "highlight.js/styles/github-dark.css";
import { useState, useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3,
  FaArrowCircleLeft,
  FaJs,
  FaCopy,
  FaGithub,
  FaDownload,
} from "react-icons/fa";
import Link from "next/link";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml"; // Import HTML language
import css from "highlight.js/lib/languages/css"; // Import CSS language
import javascript from "highlight.js/lib/languages/javascript"; // Import JavaScript language
import { App } from "@/app/appData";

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

  // Snippets for code highlighting
  const codeSnippets = {
    html: app.htmlSnippet ? `<pre><code class="language-html hljs">${app.htmlSnippet}</code></pre>` : "",
    css: app.cssSnippet ? `<pre><code class="language-css hljs">${app.cssSnippet}</code></pre>` : "",
    js: app.jsSnippet ? `<pre><code class="language-javascript hljs">${app.jsSnippet}</code></pre>` : "",
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
          alert("Code snippet copied to clipboard!");
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
          alert("Failed to copy code snippet. Please copy it manually.");
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
      alert("Code snippet copied to clipboard!");
    }
  };

  return (
    <div className="md:flex md:items-center md:justify-center md:h-screen">
      <div className="lg:w-9/12">
        <div className="lg:mx-20 lg:flex-col">
          <div className="bg-sky-500 p-5 rounded-t-xl">
            <Link href="/">
              <div className="inline-flex items-center bg-sky-800 hover:bg-sky-700 text-white p-2 rounded-md">
                <FaArrowCircleLeft className="mr-2" /> Go back
              </div>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-white p-2">
              <iframe
                title="project-iframe"
                src={app.iframeSrc}
                className="w-full h-96 border-none"
              ></iframe>
            </div>
            <div className="md:w-1/2 bg-slate-800 p-2">
              <div className="flex mb-4">
                <button
                  onClick={() => setCodeType("html")}
                  className={`flex items-center gap-1 p-2 rounded-md ${
                    codeType === "html" ? "bg-orange-500 text-white" : "bg-gray-600"
                  }`}
                >
                  <FaHtml5 /> HTML
                </button>
                <button
                  onClick={() => setCodeType("css")}
                  className={`flex items-center gap-1 p-2 mx-2 rounded-md ${
                    codeType === "css" ? "bg-blue-500 text-white" : "bg-gray-600"
                  }`}
                >
                  <FaCss3 /> CSS
                </button>
                <button
                  onClick={() => setCodeType("js")}
                  className={`flex items-center gap-1 p-2 rounded-md ${
                    codeType === "js" ? "bg-yellow-500 text-white" : "bg-gray-600"
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
                  <FaCopy />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-sky-500 p-5 rounded-b-xl md:flex justify-between gap-5">
            <div>
              <h2 className="text-2xl font-bold mb-2">{app.title}</h2>
              <p className="mb-2">{app.description}</p> {/* Display description */}
            </div>
            <div className="flex items-center justify-center gap-5">
              <div className="pt-5 md:pt-0">
                <a
                  href="https://github.com/hernandoabella/github-repo.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                  download
                >
                  <button type="button" className="button2">
                    <span className="button__text">Download ZIP</span>
                    <span className="button__icon">
                      <FaDownload className="svg" />
                    </span>
                  </button>
                </a>
              </div>
              <div className="pt-5 md:pt-0">
                <a
                  href="https://github.com/hernandoabella/github-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  <button type="button" className="button2">
                    <span className="button__text">View on GitHub</span>
                    <span className="button__icon">
                      <FaGithub className="svg" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
