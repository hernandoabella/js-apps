import React, { useState, useEffect } from "react";
import {
  FaDownload,
  FaPlayCircle,
  FaStar,
  FaExpand,
  FaCopy,
} from "react-icons/fa";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import CopyToClipboard from "react-copy-to-clipboard";

interface ProjectCardProps {
  name: string;
  description: string;
  difficulty: number;
  downloadLink: string;
  githubLink: string; // Agrega githubLink a la interfaz
  demoLink: string;
  htmlCode: string;
  cssCode: string;
  javascriptCode: string;
}


const generateStars = (difficulty: number) => {
  const stars = [];
  for (let i = 0; i < difficulty; i++) {
    stars.push(<FaStar key={i} />);
  }
  return stars;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  difficulty,
  downloadLink,
  demoLink,
  htmlCode,
  cssCode,
  javascriptCode,
}) => {
  const [isFullScreen, setFullScreen] = useState(false);
  const [copiedHTML, setCopiedHTML] = useState(false);
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedJavaScript, setCopiedJavaScript] = useState(false);

  useEffect(() => {
    // Highlight.js initialization
    hljs.initHighlightingOnLoad();
  }, []);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      openFullscreen();
    } else {
      closeFullscreen();
    }
    setFullScreen(!isFullScreen);
  };

  const openFullscreen = () => {
    const iframe = document.getElementById(`${name}-iframe`) as HTMLIFrameElement;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      }
    }
  };

  const closeFullscreen = () => {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Function to handle copying HTML code
  const handleCopyHTML = () => {
    setCopiedHTML(true);
    setTimeout(() => setCopiedHTML(false), 2000);
  };

  // Function to handle copying CSS code
  const handleCopyCSS = () => {
    setCopiedCSS(true);
    setTimeout(() => setCopiedCSS(false), 2000);
  };

  // Function to handle copying JavaScript code
  const handleCopyJavaScript = () => {
    setCopiedJavaScript(true);
    setTimeout(() => setCopiedJavaScript(false), 2000);
  };

  return (
    <div className="shadow-lg flex">
      {/* Lado Izquierdo (50%) */}
      <div className="w-1/2 pr-4">
        <div className="h-96">
          <div className="flex justify-between relative">
            <div className="bg-slate-300 text-slate-500 dark:bg-slate-800 text-center p-2 dark:text-slate-50 flex absolute">
              {generateStars(difficulty)}
            </div>
            <div className="expand-icon absolute right-2 top-2" onClick={toggleFullScreen}>
              <FaExpand className="cursor-pointer" />
            </div>
          </div>
          <iframe
            id={`${name}-iframe`}
            src={demoLink}
            className={`w-full h-full select-none ${isFullScreen ? "fullscreen" : ""}`}
            title={name}
          ></iframe>
        </div>
        <div className="p-8 flex flex-col justify-between bg-slate-200 dark:bg-slate-800">
          <h2 className="font-bold text-2xl mb-4 text-center">{name}</h2>
          <p className="text-justify mb-6 text-slate-400 dark-text-slate-400">
            {description}
          </p>
          <div className="flex flex-col md:flex-row w-full text-center">
            <a
              href={downloadLink}
              className="md-mr-5 flex-1 bg-blue-600 hover-bg-blue-700 text-white rounded-lg p-4 flex items-center justify-center transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload className="mr-2" /> Download
            </a>
            <a
              href={demoLink}
              className="mt-5 md-mt-0 flex-1 bg-green-600 hover-bg-green-700 text-white rounded-lg p-4 flex items-center justify-center transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPlayCircle className="mr-2" /> Demo
            </a>
          </div>
        </div>
      </div>

      {/* Lado Derecho (50%) */}
      <div className="w-1/2 pl-4">
        <h3 className="text-lg py-4 flex align-center items-center gap-1">
          <i className="devicon-html5-plain"></i> HTML
          <CopyToClipboard text={htmlCode} onCopy={handleCopyHTML}>
            <FaCopy className="ml-2 cursor-pointer" />
          </CopyToClipboard>
          {copiedHTML && <span className="ml-2 text-green-600">Copied!</span>}
        </h3>
        <div className="h-36 overflow-y-auto">
          <pre>
            <code className="html" dangerouslySetInnerHTML={{ __html: hljs.highlight("html", htmlCode).value }} />
          </pre>
        </div>
        <h3 className="text-lg py-4 flex align-center items-center gap-1">
          <div className="flex gap-4 items-center">
          <i className="devicon-css3-plain"></i> CSS
          <CopyToClipboard text={cssCode} onCopy={handleCopyCSS}>
            <FaCopy className="ml-2 cursor-pointer" />
          </CopyToClipboard>
          {copiedCSS && <span className="ml-2 text-green-600">Copied!</span>}
          </div>
        </h3>
        <div className="h-36 overflow-y-auto">
          <pre>
            <code className="css" dangerouslySetInnerHTML={{ __html: hljs.highlight("css", cssCode).value }} />
          </pre>
        </div>
        <h3 className="text-lg py-4 flex align-center items-center gap-1">
          <i className="devicon-javascript-plain"></i> JavaScript
          <CopyToClipboard text={javascriptCode} onCopy={handleCopyJavaScript}>
            <FaCopy className="ml-2 cursor-pointer" />
          </CopyToClipboard>
          {copiedJavaScript && <span className="ml-2 text-green-600">Copied!</span>}
        </h3>
        <div className="h-36 overflow-y-auto">
          <pre>
            <code className="javascript" dangerouslySetInnerHTML={{ __html: hljs.highlight("javascript", javascriptCode).value }} />
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
