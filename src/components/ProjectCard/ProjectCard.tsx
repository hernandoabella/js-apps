import Image from "next/image";
import { FaDownload, FaGithub, FaStar, FaPlayCircle, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

interface ProjectCardProps {
  name: string;
  description: string;
  difficulty: number;
  downloadLink: string;
  githubLink: string;
  demoLink: string;
  imageSrc: string;
  imageAlt: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  difficulty,
  downloadLink,
  githubLink,
  demoLink,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
      <div className="w-full h-52 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <h2 className="text-2xl font-bold text-center mb-4">{name}</h2>
        <p className="text-justify mb-4">{description}</p>
        <div className="flex items-center mb-4">
          <p className="font-bold mr-2">Dificultad:</p>
          <div className="flex">
            {[...Array(difficulty)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" />
            ))}
          </div>
        </div>
        <div className="flex  items-center border-t pt-4 pb-4">
          <p className="font-bold mr-2">Tecnologías:</p>
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
        <div className="flex justify-between">
          <a href={downloadLink} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4">
            <FaDownload className="w-4 h-4" />
            Descargar
          </a>
          <a href={githubLink} className="flex items-center gap-2 bg-white hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg py-2 px-4 border border-blue-600">
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
          <a href={demoLink} className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 px-4">
            <FaPlayCircle className="w-4 h-4" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;