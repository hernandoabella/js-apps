import Link from 'next/link';

const Cta = () => {
  return (
    <div className="p-8 mx-auto md:px-16 dark:bg-slate-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-4">¿Listo para mejorar tus habilidades de programación?</h2>
      <p className="text-lg mb-8">Descubre nuestras aplicaciones para llevar tus habilidades al siguiente nivel.</p>
      <Link href="/aplicaciones">
        <button className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-8">
          Explorar aplicaciones
        </button>
      </Link>
    </div>
  );
};

export default Cta;