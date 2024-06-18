"use client"
// pages/project-detail.tsx

// Importa los estilos CSS de highlight.js (cambia 'default.css' al estilo que prefieras)
import 'highlight.js/styles/default.css';

import { useState, useEffect } from 'react';
import { FaHtml5, FaCss3, FaArrowCircleLeft, FaJs } from 'react-icons/fa';
import Link from 'next/link';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

// Registra el lenguaje JavaScript con highlight.js
hljs.registerLanguage('javascript', javascript);

const ProjectDetail = () => {
  const [codeType, setCodeType] = useState<"html" | "css" | "js">("html");

  const codeSnippets = {
    html: "<div>Hello World</div>",
    css: "div { color: red; }",
    js: "console.log('Hello, World!');",
  };

  useEffect(() => {
    // Highlight.js debe ser llamado después de que el componente se monte
    hljs.highlightAll();
  }, []);

  return (
    <div className="p-5">
      <div className="bg-red-300 p-5 rounded-t-xl">
        <Link href="/">
          <div className="inline-flex items-center bg-slate-900 text-white p-2 rounded-md hover:bg-slate-700">
            <FaArrowCircleLeft className="mr-2" /> Go back
          </div>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-gray-500 p-2">
          <iframe
            title="project-iframe"
            src="https://lucent-semifreddo-6bce96.netlify.app/"
            className="w-full h-96 border-none"
          ></iframe>
        </div>
        <div className="md:w-1/2 bg-gray-200 p-2">
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
          <div className="bg-gray-800 text-white p-4 rounded-md overflow-auto h-80">
            <pre>
              <code className={`language-${codeType}`}>
                {codeSnippets[codeType]}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="bg-red-300 p-5 rounded-b-xl flex gap-5">
        <div>
          <div>Project Title</div>
          <div className="mb-2">Description</div>
        </div>
        <div className="mb-2">
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Download project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
