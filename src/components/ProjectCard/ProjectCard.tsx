import {
  FaDownload,
  FaGithub,
  FaStar,
  FaPlayCircle,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

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
    <div className="rounded-xl overflow-hidden border shadow-xl w-full lg:w-3/4 mx-auto">
      <div className="w-full h-72 md:h-72 lg:h-80">
        <iframe src={demoLink} className="w-full h-full" title={name}></iframe>
      </div>

      <div className="p-8 flex flex-col justify-between flex-1 bg-white dark:bg-slate-800">
        <h2 className="text-2xl font-bold text-center mb-6">{name}</h2>
        <p className="text-justify mb-6  text-slate-600 dark:text-slate-400">{description}</p>
        <div>
          <div className="flex items-center mb-6">
            <p className="font-bold mr-2">Nivel:</p>
            <div className="flex">
              {[...Array(difficulty)].map((_, index) => (
                <FaStar key={index} className="text-slate-600 dark:text-yellow-400"/>
              ))}
            </div>
          </div>
          <div className="flex items-center mb-6">
            <p className="font-bold mr-2">Categoría:</p>
            <p className="text-slate-600 dark:text-slate-400">{category}</p>
          </div>
          <div className="flex items-center pb-6">
            <p className="font-bold mr-2">Tecnologías:</p>
            <div className="flex items-center">
              <div className="flex items-center mr-2">
                <FaHtml5 className="w-6 h-6 text-slate-600 dark:text-orange-500" />
              </div>
              <div className="flex items-center mr-2">
                <FaCss3Alt className="w-6 h-6 text-slate-600 dark:text-blue-500" />
              </div>
              <div className="flex items-center">
                <FaJsSquare className="w-6 h-6 text-slate-600 dark:text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row">
          <a
            href={downloadLink}
            className="flex items-center my-2 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4 justify-center flex"
          >
            <FaDownload className="w-4 h-4 mr-2" />
            Descargar
          </a>
          <a
            href={githubLink}
            className="flex items-center my-2 w-full md:w-auto bg-white hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg py-2 px-4 border border-blue-600 justify-center flex"
          >
            <FaGithub className="w-4 h-4 mr-2" />
            GitHub
          </a>
          <a
            href={demoLink}
            className="flex items-center my-2 w-full md:w-auto bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 px-4 justify-center flex"
            target="_blank"
          >
            <FaPlayCircle className="w-4 h-4 mr-2" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
