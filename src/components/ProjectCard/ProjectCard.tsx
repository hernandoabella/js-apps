import { FaDownload, FaGithub, FaStar, FaPlayCircle } from "react-icons/fa";

import Image from "next/image";

interface ProjectCardProps {
  name: string;
  description: string;
  difficulty: number;
  downloadLink: string;
  githubLink: string;
  demoLink: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  difficulty,
  downloadLink,
  githubLink,
  demoLink,
  category,
}) => {
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
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-4"
          >
            <FaDownload className="" />
            
          </a>
          <a
            href={githubLink}
            className="w-full bg-slate-600 hover:bg-slate-700 text-white rounded-lg p-4"
          >
            <FaGithub className="" />
            
          </a>
          <a
            href={demoLink}
            className=" w-full bg-green-600 hover:bg-green-700 text-white rounded-lg p-4"
            target="_blank"
          >
            <FaPlayCircle className="" />
            
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
