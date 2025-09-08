"use client";
import "highlight.js/styles/github-dark.css";
import { useState, useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaCopy,
  FaCheck,
  FaDownload,
  FaExternalLinkAlt,
  FaExpand,
  FaCompress,
  FaCodepen,
  FaJsSquare,
  FaFileArchive,
  FaArrowCircleLeft,
  FaComments,
  FaChartLine,
  FaRobot,
  FaUsers,
} from "react-icons/fa";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import { App } from "@/app/appData";
import { toast } from "sonner";

// Register languages
hljs.registerLanguage("html", html);
hljs.registerLanguage("css", css);
hljs.registerLanguage("javascript", javascript);

interface ProjectDetailProps {
  app: App;
}

export default function ProjectDetail({ app }: ProjectDetailProps) {
  // Code display state
  const [codeType, setCodeType] = useState<"html" | "css" | "js">("html");
  const [editableCode, setEditableCode] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  // Preview state
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile" | "tablet">("desktop");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [performanceMode, setPerformanceMode] = useState(false);

  // Tutorial state
  const [currentStep, setCurrentStep] = useState(0);
  const tutorialSteps = [
    { title: "HTML Structure", content: "This is the basic HTML structure of the component." },
    { title: "CSS Styling", content: "Here are the key CSS styles that make this component work." },
    { title: "JavaScript", content: "This JavaScript adds interactivity to the component." },
  ];

  // AI Assistant state
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  // Mock data
  const dependencies = [
    { name: "react", version: "^18.2.0" },
    { name: "next", version: "^14.1.0" },
  ];

  const versions = [
    { id: 1, date: "2024-05-01", changes: "Initial release" },
    { id: 2, date: "2024-05-15", changes: "Added mobile support" },
  ];

  const assets = [
    { name: "logo.png", type: "image", size: "45KB" },
    { name: "styles.css", type: "code", size: "12KB" },
  ];

  const collaborators = [
    { name: "Alice", role: "Developer", avatar: "/avatars/alice.jpg" },
    { name: "Bob", role: "Designer", avatar: "/avatars/bob.jpg" },
  ];

  const comments = [
    { id: 1, line: 12, text: "Consider using semantic HTML here", author: "Alice" },
  ];

  // Initialize code snippets
  const codeSnippets = {
    html: app.htmlSnippet || "<!-- No HTML code available -->",
    css: app.cssSnippet || "/* No CSS code available */",
    js: app.jsSnippet || "// No JavaScript code available",
  };

  useEffect(() => {
    setEditableCode(codeSnippets[codeType]);
    if (codeRef.current && !isEditing) {
      const highlightedCode = hljs.highlight(codeSnippets[codeType], {
        language: codeType,
      }).value;
      codeRef.current.innerHTML = `<pre><code class="language-${codeType} hljs">${highlightedCode}</code></pre>`;
    }
  }, [codeType, app, isEditing]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        isEditing ? editableCode : codeSnippets[codeType]
      );
      setCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy code");
      console.error("Copy failed:", err);
    }
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const askAI = async () => {
    setAiResponse("Analyzing your code...");
    // Simulate AI response
    setTimeout(() => {
      setAiResponse(
        `Based on the ${codeType} code, I recommend:\n\n1. Improving accessibility with ARIA tags\n2. Optimizing the selector performance\n3. Adding error handling`
      );
    }, 1500);
  };

  const exportTo = (platform: string) => {
    toast.info(`Exporting to ${platform}...`);
    // Actual export implementation would go here
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <LeftSideBar />

      <main className="flex-1 p-6 ml-64 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg transition-colors"
          >
            <FaArrowCircleLeft />
            
          </button>

          <div className="flex gap-4 flex-wrap">
            {app.liveDemo && (
              <a
                href={app.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}
    
          </div>
        </div>

        {/* Project Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {app.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {app.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview Panel */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                

            <div
              className={`h-96 p-4 overflow-auto ${
                performanceMode ? "blur-sm contrast-125" : ""
              } ${
                previewMode === "mobile"
                  ? "max-w-xs mx-auto border-x-8 border-black rounded-lg h-[500px]"
                  : previewMode === "tablet"
                  ? "max-w-md mx-auto border-x-8 border-black rounded-lg h-[600px]"
                  : ""
              }`}
            >
              {app.ProjectComponent ? (
                <app.ProjectComponent />
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400">
                  No preview available
                </div>
              )}
            </div>
          </div>

          {/* Code Panel */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center flex-wrap gap-2">
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setCodeType("html")}
                  className={`flex items-center gap-2 px-3 py-1 rounded-md ${
                    codeType === "html"
                      ? "bg-[#e34f26] text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <FaHtml5 />
                  HTML
                </button>
                <button
                  onClick={() => setCodeType("css")}
                  className={`flex items-center gap-2 px-3 py-1 rounded-md ${
                    codeType === "css"
                      ? "bg-[#2965f1] text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <FaCss3 />
                  CSS
                </button>
                <button
                  onClick={() => setCodeType("js")}
                  className={`flex items-center gap-2 px-3 py-1 rounded-md ${
                    codeType === "js"
                      ? "bg-[#f7df1e] text-black"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <FaJs />
                  JS
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`p-2 rounded-md ${
                    isEditing
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  {isEditing ? "Lock" : "Edit"}
                </button>
                <button
                  onClick={handleCopy}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  {copied ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <FaCopy className="text-gray-700 dark:text-gray-300" />
                  )}
                </button>
              </div>
            </div>

            <div className="relative h-96 overflow-auto">
              {isEditing ? (
                <textarea
                  value={editableCode}
                  onChange={(e) => setEditableCode(e.target.value)}
                  className="w-full h-full font-mono p-4 text-sm resize-none outline-none"
                  spellCheck="false"
                />
              ) : (
                <>
                  {comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="absolute left-0 bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 pl-2 py-1 text-sm w-full"
                      style={{ top: `${comment.line * 1.5}rem` }}
                    >
                      <div className="font-medium">{comment.author}</div>
                      <div>{comment.text}</div>
                    </div>
                  ))}
                  <div ref={codeRef} className="font-mono text-sm p-4" />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Tutorial */}
        

        <div className="flex gap-8">
          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl shadow-lg border border-blue-200 dark:border-blue-900 p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaComments /> Interactive Tutorial
          </h2>
          <div className="mb-4">
            <h3 className="font-semibold text-lg">
              Step {currentStep + 1}: {tutorialSteps[currentStep].title}
            </h3>
            <p className="mt-2">{tutorialSteps[currentStep].content}</p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentStep((p) => Math.max(0, p - 1))}
              disabled={currentStep === 0}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentStep((p) =>
                  Math.min(tutorialSteps.length - 1, p + 1)
                )
              }
              disabled={currentStep === tutorialSteps.length - 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
          {/* Export Options */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-bold mb-4">Export Options</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => exportTo("CodePen")}
              className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <FaCodepen />
              CodePen
            </button>
            <button
              onClick={() => exportTo("JSFiddle")}
              className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <FaJsSquare />
              JSFiddle
            </button>
            <button
              onClick={() => exportTo("ZIP")}
              className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <FaFileArchive />
              Download ZIP
            </button>
          </div>
        </div>

        {/* Project Assets */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-bold mb-4">Project Assets</h2>
          <div className="space-y-2">
            {assets.map((asset) => (
              <div
                key={asset.name}
                className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <span className="font-medium">{asset.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                    {asset.size}
                  </span>
                </div>
                <button className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
                  <FaDownload />
                </button>
              </div>
            ))}
          </div>
        </div>
        </div>

      </main>
    </div>
  );
}