"use client"
// pages/project-detail.tsx

import 'highlight.js/styles/github-dark.css';
import { useState, useEffect, useRef } from 'react';
import { FaHtml5, FaCss3, FaArrowCircleLeft, FaJs, FaCopy } from 'react-icons/fa';
import Link from 'next/link';
import hljs from 'highlight.js/lib/core';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);
hljs.registerLanguage('javascript', javascript);

const ProjectDetail = () => {
  const [codeType, setCodeType] = useState<"html" | "css" | "js">("html");
  const codeSnippets = {
    html: "<div>Hello World</div>",
    css: "div { color: red; }",
    js: "console.log('Hello, World!');",
  };

  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [codeType, codeSnippets[codeType]]);

  const handleCopyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(codeSnippets[codeType])
        .then(() => {
          alert("Code snippet copied to clipboard!");
        })
        .catch(err => {
          console.error('Could not copy text: ', err);
          alert("Failed to copy code snippet. Please copy it manually.");
        });
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = codeSnippets[codeType];
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert("Code snippet copied to clipboard!");
    }
  };

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
          <div className="relative">
            <pre>
              <code ref={codeRef} className={`language-${codeType}`}>
                {codeSnippets[codeType]}
              </code>
            </pre>
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
