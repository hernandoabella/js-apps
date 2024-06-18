"use client";

import { useState } from "react";
import { FaHtml5, FaCss3, FaArrowCircleLeft, FaJs } from "react-icons/fa";
import Link from "next/link";

const ProjectDetail = () => {
  const [codeType, setCodeType] = useState<"html" | "css" | "js">("html");

  const codeSnippets = {
    html: "<div>Hello World</div>",
    css: "div { color: red; }",
    js: "console.log('Hello, World!');",
  };

  return (
    <div>
      <div className="bg-red-300 p-5 md:mx-60 rounded-t-xl">
        <Link href="/">
          <div className="inline-flex items-center bg-slate-900 text-white p-2 rounded-md hover:bg-slate-700">
            <FaArrowCircleLeft className="mr-2" /> Go back
          </div>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row md:mx-60">
        <div className="md:w-1/2 bg-gray-500 p-2">
          <iframe
            title="project-iframe"
            src="https://lucent-semifreddo-6bce96.netlify.app/"
            className="w-full h-96 border-none"
          ></iframe>
        </div>
        <div className="md:w-1/2 bg-gray-100 p-2">
          <div className="flex mb-4">
            <button
              onClick={() => setCodeType("html")}
              className={`flex items-center gap-1 p-2 rounded-md ${
                codeType === "html" ? "bg-orange-500 text-white" : "bg-gray-300"
              }`}
            >
              <FaHtml5 /> HTML
            </button>
            <button
              onClick={() => setCodeType("css")}
              className={`flex items-center gap-1 p-2 mx-2 rounded-md ${
                codeType === "css" ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              <FaCss3 /> CSS
            </button>
            <button
              onClick={() => setCodeType("js")}
              className={`flex items-center gap-1 p-2 rounded-md ${
                codeType === "js" ? "bg-yellow-500 text-white" : "bg-gray-300"
              }`}
            >
              <FaJs /> JS
            </button>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-md overflow-auto h-80">
            <pre>{codeSnippets[codeType]}</pre>
          </div>
        </div>
      </div>

      <div className="bg-red-300 p-5 rounded-b-xl md:mx-60 flex gap-5">
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
