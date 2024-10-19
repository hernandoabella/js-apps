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
              <div className="md:w-1/2 p-2 border-r border-l dark:bg-[#242424]">
                {app.ProjectComponent ? <app.ProjectComponent /> : null}
              </div>
              <div className="md:w-1/2 dark:bg-[#212121] p-2 border-r">
                <div className="flex mb-4">
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
                    <FaCopy />
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
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-gray-900 hover:bg-gray-950 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-gray-900">
                      <svg
                        className="mr-2 text-white"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                      <span className="text-white">Star on Github</span>
                      <span className="flex items-center ml-4 group-hover:text-yellow-500 transition-colors duration-200 ease-in-out">
                        <svg
                          className="text-yellow-500"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span className="text-white ml-2">
                          {app.projectStars}
                        </span>
                      </span>
                    </button>
                  </a>
                </div>
                <div className="pt-5 md:pt-0">
                  <a
                    href={app.downloadLink}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-gray-900 hover:bg-gray-950 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-gray-900"
                  >
                    <FaDownload className="mr-2 text-white" />
                    <span className="text-slate-50">Download</span>
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
