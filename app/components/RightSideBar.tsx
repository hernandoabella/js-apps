"use client";

import { FiTrendingUp, FiClock, FiStar, FiZap, FiAward } from "react-icons/fi";
import { usePathname } from "next/navigation";

const RightSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 right-0 h-screen w-64 bg-background/90 border-l shadow-lg z-20 py-6 px-4 overflow-y-auto">
      {/* Quick Access Header */}
      <div className="mb-8 text-center">
        <h3 className="text-lg font-bold flex items-center justify-center gap-2">
          <FiZap className="text-yellow-400" /> Quick Access
        </h3>
      </div>

      {/* Trending Apps */}
      <div className="mb-6">
        <h4 className="flex items-center gap-2 text-sm font-semibold mb-3 opacity-80">
          <FiTrendingUp /> Trending Now
        </h4>
        <ul className="space-y-2">
          {['AI Chatbot', '3D Cube', 'Voice Notes'].map((app) => (
            <li key={app}>
              <a
                href={`/apps/${app.toLowerCase().replace(' ', '-')}`}
                className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {app}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Recently Viewed */}
      <div className="mb-6">
        <h4 className="flex items-center gap-2 text-sm font-semibold mb-3 opacity-80">
          <FiClock /> Recently Viewed
        </h4>
        <ul className="space-y-2">
          {['Calculator', 'Weather', 'Meme Generator'].map((app) => (
            <li key={app}>
              <a
                href={`/apps/${app.toLowerCase().replace(' ', '-')}`}
                className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {app}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Challenges Section */}
      <div className="mb-6">
        <h4 className="flex items-center gap-2 text-sm font-semibold mb-3 opacity-80">
          <FiAward /> Daily Challenge
        </h4>
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 rounded-lg border border-purple-500/20">
          <p className="text-sm mb-2">Build a Pomodoro Timer!</p>
          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-1 px-3 rounded-md text-xs transition">
            Start Challenge
          </button>
        </div>
      </div>

      {/* GitHub Contributors (Dynamic) */}
      <div>
        <h4 className="flex items-center gap-2 text-sm font-semibold mb-3 opacity-80">
          <FiStar /> Top Contributors
        </h4>
        <ul className="space-y-2">
          {['User1', 'User2', 'User3'].map((user) => (
            <li key={user} className="flex items-center gap-2 px-3 py-2">
              <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <span>{user}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;