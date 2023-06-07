import Link from "next/link";

const Cta = () => {
  return (
    <div className="p-8 md:p-20 bg-white dark:bg-slate-900 dark:text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">
        ¿Listo para mejorar tus habilidades de programación?
      </h2>
      <p className="mt-4 text-base text-slate-600 dark:text-slate-400 text-center">
        Descubre nuestras aplicaciones para llevar tus habilidades al siguiente
        nivel.
      </p>
      <div className="flex justify-center">
        <Link href="/aplicaciones">
          <button className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-8">
            Explorar aplicaciones
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
