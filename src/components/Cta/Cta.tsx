import Link from 'next/link';

const Cta = () => {
  return (
    <div className="bg-gray-100 text-black p-8 mx-auto md:px-16">
      <h2 className="text-3xl font-bold mb-4">¿Listo para mejorar tus habilidades de programación?</h2>
      <p className="text-lg mb-8">Descubre nuestras aplicaciones para llevar tus habilidades al siguiente nivel.</p>
      <Link href="/aplicaciones">
        <button className="bg-blue-600 hover:bg-blue-800 text-white py-3 px-6 rounded-full transition-colors duration-300 ease-in-out mt-4">
          Explorar aplicaciones
        </button>
      </Link>
    </div>
  );
};

export default Cta;