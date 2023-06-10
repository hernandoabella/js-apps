import { useState } from "react";
import { FaDownload, FaGithub, FaStar, FaPlayCircle, FaCode } from "react-icons/fa";

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

  const handleCodeButtonClick = () => {
    setShowCode(!showCode);
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
            <FaDownload className="mr-2" />
            
          </a>
          <a
            href={githubLink}
            className="md:w-auto bg-gray-600 hover:bg-gray-700 text-white rounded py-2 px-4 flex items-center justify-center transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2" />
          
          </a>
          <a
            href={demoLink}
            className="md:w-auto bg-green-600 hover:bg-green-700 text-white rounded py-2 px-4 flex items-center justify-center transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPlayCircle className="mr-2" />
            
          </a>
          <button
            onClick={handleCodeButtonClick}
            className="md:w-auto bg-yellow-600 hover:bg-yellow-700 text-white rounded py-2 px-4 flex items-center justify-center transition duration-300"
          >
            <FaCode className="mr-2" />
            {showCode}
          </button>
        </div>
      </div>

      {showCode && (
        <div className="bg-gray-100 dark:bg-slate-900 p-8">
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Código HTML</h3>
            <pre className="whitespace-pre-wrap text-slate-600 dark:text-slate-400 overflow-auto p-2 bg-white dark:bg-slate-800 rounded">
              {htmlCode}
            </pre>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Código CSS</h3>
            <pre className="whitespace-pre-wrap text-slate-600 dark:text-slate-400 overflow-auto p-2 bg-white dark:bg-slate-800 rounded">
              {cssCode}
            </pre>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Código JavaScript</h3>
            <pre className="whitespace-pre-wrap text-slate-600 dark:text-slate-400 overflow-auto p-2 bg-white dark:bg-slate-800 rounded">
              {jsCode}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
