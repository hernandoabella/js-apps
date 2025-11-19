"use client";

import React, { useState, useMemo } from "react";
import { FaStar, FaSearch, FaCode, FaTimes, FaCopy, FaCheck, FaBars, FaChevronRight } from "react-icons/fa";
import { apps, App } from "@/app/appData";

// ---------------------------------------------------------
// CONSTANTS & TYPES
// ---------------------------------------------------------

const levelDescriptions: { [key: number]: string } = {
  1: "Rookie: Just starting your coding journey",
  2: "Novice: Gaining confidence and skills",
  3: "Pro: Building real-world applications",
  4: "Master: Leading complex projects",
  5: "Ninja: Pushing technical boundaries",
};

const levelColors: { [key: number]: string } = {
  1: "from-blue-400 to-blue-600",
  2: "from-green-400 to-green-600",
  3: "from-purple-400 to-purple-600",
  4: "from-orange-400 to-orange-600",
  5: "from-red-400 to-red-600",
};

const levelOptions = [1, 2, 3, 4, 5];

// ---------------------------------------------------------
// STARS COMPONENT
// ---------------------------------------------------------
const Stars: React.FC<{ level: number; size?: "sm" | "md" | "lg"; animated?: boolean }> = ({
  level,
  size = "md",
  animated = false
}) => {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  return (
    <div className={`flex space-x-1 ${animated ? "animate-pulse" : ""}`}>
      {Array.from({ length: level }, (_, i) => (
        <FaStar
          key={i}
          className={`text-yellow-500 ${sizeClasses[size]} drop-shadow-sm transition-transform duration-200 hover:scale-110`}
        />
      ))}
    </div>
  );
};

// ---------------------------------------------------------
// SIDEBAR NAVIGATION COMPONENT
// ---------------------------------------------------------
interface SidebarProps {
  appsByLevel: { [key: number]: App[] };
  selectedLevel: number | null;
  onLevelSelect: (level: number | null) => void;
  onAppSelect: (appName: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  appsByLevel,
  selectedLevel,
  onLevelSelect,
  onAppSelect,
  isOpen,
  onToggle
}) => {
  const sortedLevels = Object.keys(appsByLevel).map(Number).sort((a, b) => a - b);
  const totalProjects = Object.values(appsByLevel).reduce((sum, apps) => sum + apps.length, 0);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
        flex flex-col overflow-hidden
      `}>

        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Projects</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {totalProjects} projects
            </p>
          </div>
          <button
            onClick={onToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FaTimes className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          {/* All Projects */}
          <div className="p-4">
            <button
              onClick={() => onLevelSelect(null)}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${selectedLevel === null
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              <span className="font-semibold">All Projects</span>
              <span className="text-sm opacity-75">{totalProjects}</span>
            </button>
          </div>

          {/* Levels */}
          {sortedLevels.map(level => {
            const levelApps = appsByLevel[level];
            const isSelected = selectedLevel === level;

            return (
              <div key={level} className="border-b border-gray-200 dark:border-gray-800 last:border-b-0">
                {/* Level Header */}
                <button
                  onClick={() => onLevelSelect(isSelected ? null : level)}
                  className={`w-full flex items-center justify-between p-4 transition-all duration-200 ${isSelected
                      ? 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <Stars level={level} size="sm" />
                    <span className={`font-semibold text-left ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                      Level {level}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-500'
                      }`}>
                      {levelApps.length}
                    </span>
                    <FaChevronRight className={`w-3 h-3 transition-transform duration-200 ${isSelected ? 'rotate-90 text-blue-600' : 'text-gray-400'
                      }`} />
                  </div>
                </button>

                {/* Level Apps */}
                {isSelected && (
                  <div className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                    {levelApps.map((app, index) => (
                      <button
                        key={app.name}
                        onClick={() => onAppSelect(app.name)}
                        className="w-full flex items-center space-x-3 p-3 pl-8 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150 border-b border-gray-50 dark:border-gray-800/50 last:border-b-0"
                      >
                        <img src={app.icon} alt={app.name} className="w-5 h-5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {app.name}
                          </div>
                          
                        </div>
                        <FaStar className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {app.projectStars}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
};

// ---------------------------------------------------------
// ENHANCED CODE VIEWER MODAL
// ---------------------------------------------------------
interface CodeViewerOverlayProps {
  app: App;
  onClose: () => void;
}

const CodeViewerOverlay: React.FC<CodeViewerOverlayProps> = ({ app, onClose }) => {
  const [activeTab, setActiveTab] = useState<"html" | "css" | "js">("html");
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  const codeTabs = {
    html: { code: app.html || "<!-- No HTML code provided -->", language: "html" },
    css: { code: app.css || "/* No CSS code provided */", language: "css" },
    js: { code: app.js || "// No JavaScript code provided", language: "javascript" },
  };

  const copyToClipboard = async (code: string, tab: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedTab(tab);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  const getLanguageLabel = (lang: string) => {
    const labels = { html: "HTML", css: "CSS", js: "JavaScript" };
    return labels[lang as keyof typeof labels] || lang;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-4 animate-in fade-in duration-300">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800 transform animate-in slide-in-from-bottom-10 duration-300">

        {/* Enhanced Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <FaCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {app.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {app.description}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-3 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Enhanced Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          {Object.entries(codeTabs).map(([tab, { language }]) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`flex items-center space-x-3 px-6 py-4 font-semibold capitalize transition-all duration-200 border-b-2 ${activeTab === tab
                  ? "border-blue-500 text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-900"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
            >
              <span>{getLanguageLabel(tab)}</span>
              {app[tab as keyof App] && (
                <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                  {language}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Code Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">
              {getLanguageLabel(activeTab)} • {codeTabs[activeTab].code.split('\n').length} lines
            </span>
            <button
              onClick={() => copyToClipboard(codeTabs[activeTab].code, activeTab)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
            >
              {copiedTab === activeTab ? <FaCheck className="w-4 h-4" /> : <FaCopy className="w-4 h-4" />}
              <span>{copiedTab === activeTab ? "Copied!" : "Copy Code"}</span>
            </button>
          </div>

          <div className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-gray-900/50">
            <pre className="font-mono text-sm leading-relaxed text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
              {codeTabs[activeTab].code}
            </pre>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="flex justify-between items-center p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <Stars level={app.level} size="sm" />
            <span>Level {app.level}</span>
            <span>•</span>
            <span>{app.projectStars} Stars</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------
// APP CARD COMPONENT
// ---------------------------------------------------------
const AppCard: React.FC<{ app: App; onViewCode: (app: App) => void }> = ({ app, onViewCode }) => {
  const ProjectComponent = app.ProjectComponent;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={`app-${app.name.toLowerCase().replace(/\s+/g, '-')}`}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 scroll-mt-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${levelColors[app.level]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

      {/* Header */}
      <div className="flex items-center p-6 space-x-4 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-750">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-600 shadow-inner border border-gray-200 dark:border-gray-600 flex items-center justify-center">
          <img src={app.icon} alt={app.name} className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">
            {app.name}
          </h3>
          <div className="flex items-center space-x-2 mt-1">
            <Stars level={app.level} size="sm" />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Level {app.level}
            </span>
          </div>
        </div>
      </div>

      {/* Project Preview */}
      <div className="relative p-6 h-56 overflow-hidden bg-gray-50 dark:bg-gray-900/50">
        {ProjectComponent ? (
          <div className="h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
            <ProjectComponent />
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-3">
            <FaCode className="w-12 h-12 opacity-50" />
            <span className="text-sm">Interactive Preview</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-6 bg-white dark:bg-gray-800">
        

        <div className="flex justify-between items-center">
          <button
            onClick={() => onViewCode(app)}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <FaCode className="w-4 h-4" />
            <span className="font-semibold">View Code</span>
          </button>

          <div className="flex items-center space-x-2 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full">
            <FaStar className="text-yellow-500" />
            <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">
              {app.projectStars}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------
const Apps: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [appInViewer, setAppInViewer] = useState<App | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Filter logic
  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchesSearch =
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.tags?.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory =
        selectedCategory === null || (app.category && app.category.includes(selectedCategory));

      const matchesLevel = selectedLevel === null || app.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  const appsByLevel = useMemo(() => {
    return filteredApps.reduce((acc: { [key: number]: App[] }, app: App) => {
      acc[app.level] = acc[app.level] || [];
      acc[app.level].push(app);
      return acc;
    }, {});
  }, [filteredApps]);

  const sortedLevels = Object.keys(appsByLevel).map(Number).sort((a, b) => a - b);

  const openCodeViewer = (app: App) => setAppInViewer(app);
  const closeCodeViewer = () => setAppInViewer(null);

  const scrollToApp = (appName: string) => {
    const element = document.getElementById(`app-${appName.toLowerCase().replace(/\s+/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Add a highlight effect
      element.classList.add('ring-2', 'ring-blue-500');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-blue-500');
      }, 2000);
    }
    // Close sidebar on mobile after selection
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:block lg:w-80 flex-shrink-0">
          <Sidebar
            appsByLevel={appsByLevel}
            selectedLevel={selectedLevel}
            onLevelSelect={setSelectedLevel}
            onAppSelect={scrollToApp}
            isOpen={isSidebarOpen}
            onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>

        {/* Mobile sidebar */}
        <div className="lg:hidden">
          <Sidebar
            appsByLevel={appsByLevel}
            selectedLevel={selectedLevel}
            onLevelSelect={setSelectedLevel}
            onAppSelect={scrollToApp}
            isOpen={isSidebarOpen}
            onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            {/* Mobile Header with Menu Button */}
            <div className="lg:hidden flex items-center justify-between mb-6">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <FaBars className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <div className="text-center flex-1">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  JS-APPS
                </h1>
              </div>
              <div className="w-12"></div> {/* Spacer for balance */}
            </div>

            {/* Enhanced Header */}
            <div className="text-center mb-12">
              <h1 className="hidden lg:block text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
                JS-APPS
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Master JavaScript through hands-on projects.
              </p>
            </div>

            {/* Main Content */}
            <main className="space-y-16">
              {sortedLevels.length > 0 ? (
                sortedLevels.map(level => {
                  const levelApps = appsByLevel[level];
                  const [title, desc] = levelDescriptions[level].split(":");

                  return (
                    <section key={level} className="space-y-8">
                      {/* Level Header */}
                      <div className="flex flex-col items-center text-center">
                        <div className={`inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r ${levelColors[level]} mb-4 shadow-lg`}>
                          <Stars level={level} size="lg" animated />
                          <span className="ml-3 text-white font-bold text-lg">{title.trim()}</span>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                          {desc.trim()}
                        </p>
                      </div>

                      {/* Projects Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {levelApps.map(app => (
                          <AppCard key={app.name} app={app} onViewCode={openCodeViewer} />
                        ))}
                      </div>
                    </section>
                  );
                })
              ) : (
                <div className="text-center py-20">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <FaSearch className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    No projects found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </main>

            {/* Enhanced Code Viewer */}
            {appInViewer && <CodeViewerOverlay app={appInViewer} onClose={closeCodeViewer} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;