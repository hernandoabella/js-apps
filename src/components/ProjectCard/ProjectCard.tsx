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
    <div className="rounded-xl overflow-hidden shadow-xl">
      <div className="w-full h-96 md:h-96 lg:h-96">
        <iframe src={demoLink} className="w-full h-full" title={name}></iframe>
      </div>

      <div className="p-8 flex flex-col justify-between flex-1 bg-white dark:bg-slate-800">
        <h2 className="font-bold text-2xl mb-4">{name}</h2>
        <p className="text-justify mb-6 text-slate-600 dark:text-slate-400">
          {description}
        </p>
        
        <div className="flex w-full text-center">
          <a
            href={downloadLink}
            className="mr-5 flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-4 flex items-center justify-center transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload className="mr-2" /> Descargar
          </a>
          <a
            href={demoLink}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg p-4 flex items-center justify-center transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPlayCircle className="mr-2" /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
