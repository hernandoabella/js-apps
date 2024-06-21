"use client";
// pages/project-detail.tsx
import "./styles.css";
// Importa los estilos CSS de highlight.js (cambia 'github-dark.css' al estilo que prefieras)
import "highlight.js/styles/github-dark.css";

import { useState, useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3,
  FaArrowCircleLeft,
  FaJs,
  FaCopy,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml"; // Importa el lenguaje HTML/XML
import css from "highlight.js/lib/languages/css"; // Importa el lenguaje CSS
import javascript from "highlight.js/lib/languages/javascript"; // Importa el lenguaje JavaScript

// Registra los lenguajes con highlight.js
hljs.registerLanguage("html", html);
hljs.registerLanguage("css", css);
hljs.registerLanguage("javascript", javascript);

const codeSnippets = {
  html: `<pre><code class="language-html hljs">&lt;div&gt;Hello World&lt;/div&gt;</code></pre>
  `,
  css: `<pre><code class="language-css hljs">div {
    color: red;
}</code></pre>`,
  js: `
    <pre><code class="language-javascript hljs">console.log('Hello, World!');</code></pre>`,
};

const ProjectDetail = () => {
  const [codeType, setCodeType] = useState<"html" | "css" | "js">("html");
  const codeRef = useRef<HTMLDivElement | null>(null);

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
              <div className="inline-flex items-center bg-slate-900 text-white p-2 rounded-md hover:bg-slate-700">
                <FaArrowCircleLeft className="mr-2" /> Go back
              </div>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-white p-2">
              <iframe
                title="project-iframe"
                src="https://lucent-semifreddo-6bce96.netlify.app/"
                className="w-full h-96 border-none"
              ></iframe>
            </div>
            <div className="md:w-1/2 bg-slate-800 p-2">
              <div className="flex mb-4">
                <button
                  onClick={() => setCodeType("html")}
                  className={`flex items-center gap-1 p-2 rounded-md ${
                    codeType === "html"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-600"
                  }`}
                >
                  <FaHtml5 /> HTML
                </button>
                <button
                  onClick={() => setCodeType("css")}
                  className={`flex items-center gap-1 p-2 mx-2 rounded-md ${
                    codeType === "css"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-600"
                  }`}
                >
                  <FaCss3 /> CSS
                </button>
                <button
                  onClick={() => setCodeType("js")}
                  className={`flex items-center gap-1 p-2 rounded-md ${
                    codeType === "js"
                      ? "bg-yellow-500 text-white"
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

          <div className="bg-sky-500 p-5 rounded-b-xl md:flex justify-between gap-5">
            <div className="">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Random Number Generator
                </h2>
              </div>
              <div className="mb-2">
                <p>This app allows you to generate a random number.</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="mb-2 sm:pt-5">
                <a
                  href="https://github.com/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                  download
                >
                  <button type="button" className="button2">
                    <span className="button__text">Download</span>
                    <span className="button__icon">
                      <svg
                        className="svg"
                        data-name="Layer 2"
                        id="bdd05811-e15d-428c-bb53-8661459f9307"
                        viewBox="0 0 35 35"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                        <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                        <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
              <div className="flex items-center justify-center ">
                <a href="https://github.com/hernandoabella/...repo" className="text-3x1">
                  <FaGithub />
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
