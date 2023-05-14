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
    <div className="bg-white text-black rounded-lg overflow-hidden shadow-md h-full">
      <div className="w-full h-72 md:h-72 lg:h-80">
        <iframe src={demoLink} className="w-full h-full" title={name}></iframe>
      </div>

      <div className="p-6 flex flex-col justify-between flex-1">
        <h2 className="text-2xl font-bold text-center mb-4">{name}</h2>
        <p className="text-justify mb-4 text-gray-600">{description}</p>
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center mb-4">
            <p className="font-bold mr-2">Nivel:</p>
            <div className="flex">
              {[...Array(difficulty)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="flex items-center mb-4">
            <p className="font-bold mr-2">Categoria:</p>
            <p className="text-gray-600">{category}</p>
          </div>
          <div className="flex items-center pb-4">
            <p className="font-bold mr-2">Stack:</p>
            <div className="flex items-center">
              <div className="flex items-center mr-2">
                <FaHtml5 className="text-red-600 w-6 h-6" />
              </div>
              <div className="flex items-center mr-2">
                <FaCss3Alt className="text-blue-500 w-6 h-6" />
              </div>
              <div className="flex items-center">
                <FaJsSquare className="text-yellow-400 w-6 h-6" />
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
