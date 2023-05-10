import Image from 'next/image';

interface LearnCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const LearnCard: React.FC<LearnCardProps> = ({ title, description, image, url }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-72 mx-auto">
      <div className=''>
      <Image src={image} alt={title} className="w-full h-48 object-cover" width={30} height={20} />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex justify-end mt-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Ir al curso
          </a>
        </div>
      </div>
    </div>
  );
};

export default LearnCard;