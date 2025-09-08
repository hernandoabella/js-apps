import Link from "next/link";

const Cta = () => {
  return (
    <div className="p-8 md:p-20 bg-white dark:bg-slate-900 dark:text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">
        Ready to improve your programming skills?
      </h2>
      <p className="mt-4 text-base text-slate-600 dark:text-slate-400 text-center">
        Discover our apps to take your skills to the next level.
      </p>
      <div className="flex justify-center">
        <Link href="/apps">
          <button className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-8">
            Explore apps
            <span className="sr-only">, reusing styles</span>
           
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
