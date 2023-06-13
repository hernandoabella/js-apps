import { useState } from "react";
import {
  FaDownload,
  FaGithub,
  FaStar,
  FaPlayCircle,
  FaCode,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";

interface ProjectCardProps {
  name: string;
  description: string;
  difficulty: number;
  downloadLink: string;
  githubLink: string;
  demoLink: string;
  category: string;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  difficulty,
  downloadLink,
  githubLink,
  demoLink,
  category,
  htmlCode,
  cssCode,
  jsCode,
}) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState([false, false, false]);

  const handleCodeButtonClick = () => {
    setShowCode(!showCode);
  };

  const handleCopyCodeClick = (index: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopied((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
    setTimeout(() => {
      setCopied((prevState) => {
        const newState = [...prevState];
        newState[index] = false;
        return newState;
      });
    }, 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border shadow-lg">
      <div className="w-full h-72 md:h-72 lg:h-80">
        <iframe src={demoLink} className="w-full h-full" title={name}></iframe>
      </div>

      <div className="p-8 flex flex-col justify-between flex-1 bg-white dark:bg-slate-800">
        <h2 className="text-2xl font-bold text-center mb-6">{name}</h2>
        <p className="text-justify mb-6 text-slate-600 dark:text-slate-400">
          {description}
        </p>
        <div>
          <div className="flex items-center mb-6">
            <p className="font-bold mr-2">Nivel:</p>
            <div className="flex">
              {[...Array(difficulty)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="flex items-center mb-6">
            <p className="font-bold mr-2">Categoría:</p>
            <p className="text-slate-600 dark:text-slate-400">{category}</p>
          </div>
          <div className="flex items-center pb-6">
            <p className="font-bold mr-2">Tecnologías:</p>

            <div className="flex items-center align-middle">
              <div className="flex items-center mr-2">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex items-center mr-2">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex items-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 w-full text-center">
          <a
            href={downloadLink}
            className="md:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded py-2 px-4 flex items-center justify-center transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload/>
          </a>
          <a
            href={githubLink}
            className="md:w-auto bg-gray-600 hover:bg-gray-700 text-white rounded py-2 px-4 flex items-center justify-center transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href={demoLink}
            className="md:w-auto bg-green-600 hover:bg-green-700 text-white rounded py-2 px-4 flex items-center justify-center transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPlayCircle/>
          </a>
          <button
            onClick={handleCodeButtonClick}
            className="md:w-auto bg-yellow-600 hover:bg-yellow-700 text-white rounded py-2 px-4 flex items-center justify-center transition duration-300"
          >
            <FaCode />
            {showCode}
          </button>
        </div>
      </div>

      {showCode && (
        <div className="bg-gray-100 dark:bg-slate-900 p-8">
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Código HTML</h3>
            <div className="relative">
              <SyntaxHighlighter language="html" style={vscDarkPlus}>
                {htmlCode}
              </SyntaxHighlighter>
              <button
                onClick={() => handleCopyCodeClick(0, htmlCode)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                {copied[0] ? <FaCheck /> : <FaCopy />}
              </button>
              {copied[0] && (
                <span className="text-green-500 text-sm ml-2">¡Copiado!</span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Código CSS</h3>
            <div className="relative">
              <SyntaxHighlighter language="css" style={vscDarkPlus}>
                {cssCode}
              </SyntaxHighlighter>
              <button
                onClick={() => handleCopyCodeClick(1, cssCode)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                {copied[1] ? <FaCheck /> : <FaCopy />}
              </button>
              {copied[1] && (
                <span className="text-green-500 text-sm ml-2">¡Copiado!</span>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Código JavaScript</h3>
            <div className="relative">
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {jsCode}
              </SyntaxHighlighter>
              <button
                onClick={() => handleCopyCodeClick(2, jsCode)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                {copied[2] ? <FaCheck /> : <FaCopy />}
              </button>
              {copied[2] && (
                <span className="text-green-500 text-sm ml-2">¡Copiado!</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
