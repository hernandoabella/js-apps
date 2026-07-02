import Link from "next/link";
import { FaArrowRight, FaRocket } from "react-icons/fa";

const Cta = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FaRocket className="w-12 h-12 text-white/80 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to level up?
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Start building real JavaScript projects today. No sign-up required — just pick a project and start coding.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-purple-700 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
          >
            Start Now <FaArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com/hernandoabella/js-apps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-200"
          >
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
