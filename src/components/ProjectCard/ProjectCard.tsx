import React, { useState, useEffect } from "react";
import { FaDownload, FaStar, FaCode } from "react-icons/fa";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

interface ProjectCardProps {
  name: string;
  description: string;
  difficulty: number;
  downloadLink: string;
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
}) => {
  const [isFullScreen, setFullScreen] = useState(false);
  const [showCode, setShowCode] = useState(true);
  // const [copiedHTML, setCopiedHTML] = useState(false);
  // const [copiedCSS, setCopiedCSS] = useState(false);
  // const [copiedJavaScript, setCopiedJavaScript] = useState(false);

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
    const iframe = document.getElementById(
      `${name}-iframe`
    ) as HTMLIFrameElement;
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

  const toggleCode = () => {
    setShowCode(!showCode);
  };

  return (
    <div className="shadow-lg w-full">
      <div>
        <div className="h-97 md:h-full ">
          <div className="flex justify-between relative ">
            {/* <div
              className="expand-icon absolute right-2 top-2"
              onClick={toggleFullScreen}
            >
              <FaExpand className="cursor-pointer" />
            </div> */}
          </div>
          <iframe
            id={`${name}-iframe`}
            src={demoLink}
            className={`w-full h-full select-none ${
              isFullScreen ? "fullscreen" : ""
            }`}
            title={name}
          ></iframe>
        </div>
        <div className="relative p-8 flex flex-col justify-between bg-slate-200 dark:bg-slate-700 bg0g">
          <h2 className="font-bold text-2xl mb-4">{name}</h2>
          <p className="text-justify mb-6 text-slate-400 dark-text-slate-400">
            {description}
          </p>
          <div className="mb-4  text-slate-500  dark:text-yellow-400 gap-2 flex">
            {generateStars(difficulty)}
          </div>
          <div className="flex flex-col md:flex-row w-full text-center gap-4">
            <a
              href={downloadLink}
              className="md:mr-2 flex-1 bg-blue-600 hover-bg-blue-700 text-white rounded-lg p-4 flex items-center justify-center transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload className="mr-2" /> Download
            </a>
          </div>
        </div>
      </div>

      {/* {showCode && (
        <div className="md:w-1/2 px-4 h-full bg-slate-300 dark:bg-slate-800 dark:text-slate-50">
          <h3 className="text-lg py-4 flex items-center justify-between gap-1">
            <div className="flex gap-2 items-center">
              <i
                className="devicon-html5-plain"
                style={{ color: "#e44d26" }}
              ></i>{" "}
              HTML
            </div>

            <CopyToClipboard text={htmlCode} onCopy={handleCopyHTML}>
              <div className="flex items-center">
                {copiedHTML && (
                  <span className="text-green-600 mr-2">Copied!</span>
                )}
                <FaCopy className="cursor-pointer" />
              </div>
            </CopyToClipboard>
          </h3>

          <div className="h-36 overflow-y-auto bg-slate-200 dark:text-slate-300">
            <pre className="p-2">
              <code
                className="html"
                dangerouslySetInnerHTML={{
                  __html: hljs.highlight("html", htmlCode).value,
                }}
              />
            </pre>
          </div>
          <h3 className="text-lg py-4 flex items-center justify-between gap-1">
            <div className="flex gap-2 items-center">
              <i
                className="devicon-css3-plain"
                style={{ color: "#1572b6" }}
              ></i>{" "}
              CSS
            </div>

            <CopyToClipboard text={cssCode} onCopy={handleCopyCSS}>
              <div className="flex items-center">
                {copiedCSS && (
                  <span className="text-green-600 mr-2">Copied!</span>
                )}
                <FaCopy className="cursor-pointer" />
              </div>
            </CopyToClipboard>
          </h3>

          <div className="h-36 overflow-y-auto bg-slate-200 dark-text-slate-300">
            <pre className="p-2">
              <code
                className="css"
                dangerouslySetInnerHTML={{
                  __html: hljs.highlight("css", cssCode).value,
                }}
              />
            </pre>
          </div>
          <h3 className="text-lg py-4 flex items-center justify-between gap-1">
            <div className="flex items-center gap-2">
              <i
                className="devicon-javascript-plain"
                style={{ color: "#f0db4f" }}
              ></i>{" "}
              JavaScript
            </div>

            <CopyToClipboard
              text={javascriptCode}
              onCopy={handleCopyJavaScript}
            >
              <div className="flex items-center">
                {copiedJavaScript && (
                  <span className="text-green-600 mr-2">Copied!</span>
                )}
                <FaCopy className="cursor-pointer" />
              </div>
            </CopyToClipboard>
          </h3>

          <div className="h-36 mb-4 overflow-y-auto bg-slate-200 dark-text-slate-300">
            <pre className="p-2">
              <code
                className="javascript"
                dangerouslySetInnerHTML={{
                  __html: hljs.highlight("javascript", javascriptCode).value,
                }}
              />
            </pre>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ProjectCard;
