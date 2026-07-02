import React from "react";
import { FaCode, FaLightbulb, FaTrophy, FaGamepad, FaBolt, FaGraduationCap } from "react-icons/fa";

const features = [
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Learn by Doing",
    desc: "Build 15 real projects from scratch — no copy-paste. Each project teaches you HTML, CSS, and JavaScript hands-on.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaGamepad className="w-8 h-8" />,
    title: "Gamified Progression",
    desc: "Earn XP for every completed step, unlock achievements, track your streak, and level up from Rookie to Legend.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaGraduationCap className="w-8 h-8" />,
    title: "Step-by-Step Lessons",
    desc: "Each project is broken into 4 guided steps (HTML → CSS → JS → Final). Get hints, write real code, and see it run live.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <FaBolt className="w-8 h-8" />,
    title: "Instant Feedback",
    desc: "Code validation checks your work in real time. Get clear error messages when something's wrong and fix it right away.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: <FaTrophy className="w-8 h-8" />,
    title: "10 Achievements",
    desc: "Unlock badges like 'First Steps', 'Code Machine', and 'Legend in the Making' as you hit milestones in your journey.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: "Beginner Friendly",
    desc: "No prior experience needed. Projects start simple (Level 1) and gradually increase in complexity up to Level 5.",
    color: "from-indigo-500 to-violet-500",
  },
];

const About = () => {
  return (
    <section className="py-20 md:py-28 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase mb-3">
            Why JS-APPS
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Learn JavaScript the fun way
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ditch the boring tutorials. Build real projects, earn rewards, and track your progress like a game.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div
              key={i}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feat.color} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feat.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feat.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
