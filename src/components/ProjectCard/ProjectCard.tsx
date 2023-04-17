import Image from "next/image";
import { FaDownload, FaGithub, FaStar, FaPlayCircle } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
      <div className="w-full h-52 overflow-hidden">
        <Image
          src="/project-image.jpg"
          alt="Project Image"
          width={300}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <h2 className="text-2xl font-bold text-center mb-4">Nombre del proyecto</h2>
        <p className="text-justify mb-4">
          Descripción del proyecto
        </p>
        <div className="flex items-center mb-4">
          <p className="font-bold mr-2">Dificultad:</p>
          <div className="flex">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
        </div>
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4">
            <FaDownload className="w-4 h-4" />
            Descargar
          </button>
          <button className="flex items-center gap-2 bg-white hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg py-2 px-4 border border-blue-600">
            <FaGithub className="w-4 h-4" />
            GitHub
          </button>
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 px-4">
            <FaPlayCircle className="w-4 h-4" />
            Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
