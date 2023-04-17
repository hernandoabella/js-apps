import Link from 'next/link';

const Cta = () => {
  return (
    <div className="bg-blue-50 text-gray-800 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">¿Listo para mejorar tus habilidades de programación?</h2>
      <p className="text-lg mb-8">Descubre nuestras aplicaciones para llevar tus habilidades al siguiente nivel.</p>
      <Link href="/aplicaciones">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-colors duration-300 ease-in-out">
          Explora nuestras aplicaciones
        </button>
      </Link>
    </div>
  );
};

export default Cta;
