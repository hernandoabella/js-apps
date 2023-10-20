import React from "react";
import { FaDownload, FaPlayCircle, FaStar } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface ProjectCardProps {
  name: string;
  description: string;
  difficulty: number;
  downloadLink: string;
  githubLink: string;
  demoLink: string;
  htmlCode: string;
  cssCode: string;
  javascriptCode: string;
}

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
  return (
    <div className="border-solid border-2 border-slate-200 shadow-lg">
      <div className="md:flex">
        <div className="w-full md:w-1/2">
          <div className="w-full h-96 md:h-96 lg:h-96">
          <div className="absolute bg-slate-900 w-3 text-center rounded-lg">{difficulty}</div>
            <iframe
              src={demoLink}
              className="w-full h-full"
              title={name}
            ></iframe>
          </div>

          <div className="p-8 flex flex-col justify-between flex-1 bg-slate-200 dark:bg-slate-800">
            <h2 className="font-bold text-2xl mb-4 text-center">{name}</h2>
            <p className="text-justify mb-6 text-slate-400 dark-text-slate-400">
              {description}
            </p>

            <div className="flex flex-col md:flex-row w-full text-center">
              <a
                href={downloadLink}
                className="md:mr-5 flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-4 flex items-center justify-center transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload className="mr-2" /> Download
              </a>
              <a
                href={demoLink}
                className="mt-5 md:mt-0 flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg p-4 flex items-center justify-center transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPlayCircle className="mr-2" /> Demo
              </a>
            </div>
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2 bg-slate-300 dark:bg-slate-700">
          <h3 className="text-xl mb-2 flex align-center items-center gap-1"><i className="devicon-html5-plain"></i> HTML </h3>
          <SyntaxHighlighter language="html" style={dark}>
            {htmlCode}
          </SyntaxHighlighter>
          <h3 className="text-xl mb-2">CSS</h3>
          <SyntaxHighlighter language="css" style={dark}>
            {cssCode}
          </SyntaxHighlighter>
          <h3 className="text-xl mb-2">JavaScript</h3>
          <SyntaxHighlighter language="javascript" style={dark}>
            {javascriptCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
