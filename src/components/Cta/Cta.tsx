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
        <Link href="/aplicaciones">
          <button className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-8">
            Explore apps
            <span className="sr-only">, reusing styles</span>
            <svg
              className="overflow-visible ml-3 text-sky-300 group-hover:text-sky-400 dark:text-slate-500 dark:group-hover:text-slate-400"
              width="3"
              height="6"
              viewBox="0 0 3 6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M0 0L3 3L0 6"></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
