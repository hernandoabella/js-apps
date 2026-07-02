"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import { FaStar, FaCode, FaTimes, FaCopy, FaCheck, FaBars, FaChevronRight, FaGraduationCap, FaLock, FaPlay, FaCheckCircle, FaCircle, FaArrowRight, FaFire, FaTrophy, FaBolt, FaGem, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.css";
import { apps, App } from "@/app/appData";
import InteractiveLesson from "@/app/components/InteractiveLesson";
import { loadGamification, recordVisit, getLevel, LEVEL_THRESHOLDS, Achievement, ACHIEVEMENTS } from "@/lib/gamification";
import { ModeToggle } from "@/components/ui/mode-toggle";

const STORAGE_KEY = "jsapps-progress";

type AppState = "completed" | "in-progress" | "available" | "locked";

const levelColors: { [key: number]: string } = {
  1: "from-blue-400 to-blue-600",
  2: "from-green-400 to-green-600",
  3: "from-purple-400 to-purple-600",
  4: "from-orange-400 to-orange-600",
  5: "from-red-400 to-red-600",
};

const levelLabels: { [key: number]: string } = {
  1: "Rookie",
  2: "Novice",
  3: "Pro",
  4: "Master",
  5: "Ninja",
};

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

function getProjectState(appName: string): AppState {
  try {
    const raw = localStorage.getItem("jsapps-progress");
    if (!raw) return "available";
    const all = JSON.parse(raw);
    const progress = all[appName];
    if (!progress) return "available";
    const totalSteps = apps.find(a => a.name === appName)?.steps.length || 0;
    const completedCount = progress.completedSteps?.length || 0;
    if (completedCount >= totalSteps) return "completed";
    if (progress.currentStepIdx > 0) return "in-progress";
    return "available";
  } catch {
    return "available";
  }
}

const stateIcon: Record<AppState, { icon: React.ReactNode; color: string }> = {
  completed: { icon: <FaCheck className="w-3 h-3" />, color: "text-emerald-500" },
  "in-progress": { icon: <FaPlay className="w-2.5 h-2.5" />, color: "text-amber-500" },
  available: { icon: <FaCircle className="w-2 h-2" />, color: "text-emerald-400" },
  locked: { icon: <FaLock className="w-3 h-3" />, color: "text-gray-400" },
};

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

  const [progressMap, setProgressMap] = useState<Record<string, any>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem("jsapps-progress");
      setProgressMap(raw ? JSON.parse(raw) : {});
    } catch {
      setProgressMap({});
    }
  }, []);

  const getLevelStats = (level: number) => {
    const levelApps = appsByLevel[level] || [];
    const done = levelApps.filter(a => getProjectState(a.name) === "completed").length;
    return { done, total: levelApps.length };
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      <div className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
        flex flex-col overflow-hidden
      `}>

        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-800">
          <div className="text-xl font-bold font-[var(--font-squada-one)] tracking-widest">
            <span className="text-yellow-400">&lt;/</span><span className="text-gray-900 dark:text-white">JS-APPS</span>
          </div>
          <button
            onClick={onToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <FaTimes className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-3">
          {/* All Projects */}
          <div className="px-3 mb-2">
            <button
              onClick={() => onLevelSelect(null)}
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${selectedLevel === null
                  ? 'bg-blue-500 text-white shadow-md shadow-blue-500/20'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              <span>All Projects</span>
              <span className={`text-xs ${selectedLevel === null ? 'text-white/80' : 'text-gray-400 dark:text-gray-500'}`}>
                {totalProjects}
              </span>
            </button>
          </div>

          {/* Levels */}
          <div className="space-y-0.5 px-2">
            {sortedLevels.map(level => {
              const levelApps = appsByLevel[level];
              const isSelected = selectedLevel === level;
              const { done, total } = getLevelStats(level);

              return (
                <div key={level}>
                  <button
                    onClick={() => onLevelSelect(isSelected ? null : level)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group ${
                      isSelected
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 shadow-sm'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                        isSelected
                          ? 'bg-blue-500 text-white shadow-sm'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-700'
                      }`}>
                        {level}
                      </div>
                      <span className={`font-medium truncate ${
                        isSelected ? 'text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        Level {level} — {levelLabels[level]}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {done > 0 && (
                        <span className={`text-xs font-medium ${
                          done === total ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-gray-500'
                        }`}>
                          {done}/{total}
                        </span>
                      )}
                      <FaChevronRight className={`w-3 h-3 transition-transform duration-200 ${
                        isSelected ? 'rotate-90 text-blue-400' : 'text-gray-300 dark:text-gray-600'
                      }`} />
                    </div>
                  </button>

                  {isSelected && (
                    <div className="ml-3 mt-0.5 mb-1 border-l-2 border-blue-200 dark:border-blue-800/50 space-y-0.5">
                      {levelApps.map((app) => {
                        const st = getProjectState(app.name);
                        const { icon, color } = stateIcon[st];
                        return (
                          <button
                            key={app.name}
                            onClick={() => onAppSelect(app.name)}
                            className="w-full flex items-center gap-2.5 py-2 pl-4 pr-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150 rounded-r-lg group"
                          >
                            <span className={`flex-shrink-0 ${color}`}>
                              {icon}
                            </span>
                            <Image src={app.icon} alt={app.name} width={16} height={16} className="flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                            <span className="text-sm text-gray-700 dark:text-gray-300 truncate group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                              {app.name}
                            </span>
                            <span className="ml-auto text-xs text-gray-400 dark:text-gray-500 flex-shrink-0">
                              {app.projectStars}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer with theme toggle */}
        <div className="border-t border-gray-200 dark:border-gray-800 p-4">
          <ModeToggle />
        </div>

      </div>
    </>
  );
};

hljs.registerLanguage("html", html);
hljs.registerLanguage("css", css);
hljs.registerLanguage("javascript", javascript);

// ---------------------------------------------------------
// CODE VIEWER MODAL
// ---------------------------------------------------------
interface CodeViewerOverlayProps {
  app: App;
  onClose: () => void;
}

const codeLangIcons: Record<string, React.ReactNode> = {
  html: <FaHtml5 className="w-4 h-4 text-orange-500" />,
  css: <FaCss3 className="w-4 h-4 text-blue-500" />,
  js: <FaJs className="w-4 h-4 text-yellow-500" />,
};

const CodeViewerOverlay: React.FC<CodeViewerOverlayProps> = ({ app, onClose }) => {
  const [activeTab, setActiveTab] = useState<"html" | "css" | "js">("html");
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const codeRef = useRef<HTMLElement>(null);

  const codeTabs = {
    html: { code: app.htmlSnippet || "<!-- No HTML code provided -->", language: "html" },
    css: { code: app.cssSnippet || "/* No CSS code provided */", language: "css" },
    js: { code: app.jsSnippet || "// No JavaScript code provided", language: "javascript" },
  };

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [activeTab]);

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

        <div className="flex border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          {Object.entries(codeTabs).map(([tab, { language }]) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`flex items-center space-x-2 px-6 py-4 font-semibold capitalize transition-all duration-200 border-b-2 ${activeTab === tab
                  ? "border-blue-500 text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-900"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
            >
              {codeLangIcons[tab]}
              <span>{getLanguageLabel(tab)}</span>
              {tab === "html" && app.htmlSnippet ||
               tab === "css" && app.cssSnippet ||
               tab === "js" && app.jsSnippet ? (
                <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                  {language}
                </span>
              ) : null}
            </button>
          ))}
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex justify-between items-center p-4 bg-[#21252b] border-b border-gray-700">
            <span className="text-sm text-gray-400 font-mono">
              {getLanguageLabel(activeTab)} &bull; {codeTabs[activeTab].code.split('\n').length} lines
            </span>
            <button
              onClick={() => copyToClipboard(codeTabs[activeTab].code, activeTab)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
            >
              {copiedTab === activeTab ? <FaCheck className="w-4 h-4" /> : <FaCopy className="w-4 h-4" />}
              <span>{copiedTab === activeTab ? "Copied!" : "Copy Code"}</span>
            </button>
          </div>

          <div className="flex-1 overflow-auto p-6 bg-[#282c34]">
            <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap !bg-transparent !p-0 !m-0">
              <code ref={codeRef} className={`language-${codeTabs[activeTab].language}`}>
                {codeTabs[activeTab].code}
              </code>
            </pre>
          </div>
        </div>

        <div className="flex justify-between items-center p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <Stars level={app.level} size="sm" />
            <span>Level {app.level}</span>
            <span>&bull;</span>
            <span>{app.projectStars} Stars</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------
// PROJECT CARD (GRID VERSION)
// ---------------------------------------------------------
interface ProjectCardProps {
  app: App;
  state: AppState;
  onStartLesson: (app: App) => void;
  onViewCode: (app: App) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ app, state, onStartLesson, onViewCode }) => {
  const isCompleted = state === "completed";
  const isInProgress = state === "in-progress";
  const PreviewComponent = app.ProjectComponent;

  return (
    <div
      className={`
        group relative rounded-2xl border-2 overflow-hidden cursor-pointer
        transition-all duration-300 hover:-translate-y-1
        ${isCompleted
          ? "border-emerald-300 dark:border-emerald-600 bg-white dark:bg-gray-800 shadow-md"
          : ""
        }
        ${isInProgress
          ? "border-amber-400 dark:border-amber-500 bg-white dark:bg-gray-800 shadow-lg shadow-amber-200/20"
          : ""
        }
        ${!isCompleted && !isInProgress
          ? "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:border-emerald-400 dark:hover:border-emerald-500"
          : ""
        }
      `}
      onClick={() => onStartLesson(app)}
    >
      {/* Square preview */}
      {PreviewComponent && (
        <div className="w-full aspect-square overflow-hidden bg-gray-50 dark:bg-gray-800/30 border-b border-gray-100 dark:border-gray-700/50 flex items-center justify-center">
          <div className="scale-[0.65] origin-center">
            <PreviewComponent />
          </div>
        </div>
      )}

      {/* Top state stripe */}
      <div className={`
        h-1.5 w-full
        ${isCompleted ? "bg-emerald-500" : ""}
        ${isInProgress ? "bg-amber-500" : ""}
        ${!isCompleted && !isInProgress ? "bg-gradient-to-r from-emerald-400 to-emerald-500" : ""}
      `} />

      <div className="p-5">
        {/* Icon + Name + Status + Code button */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className={`
              w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
              ${isCompleted ? "bg-emerald-100 dark:bg-emerald-900/40" : ""}
              ${isInProgress ? "bg-amber-100 dark:bg-amber-900/40" : ""}
              ${!isCompleted && !isInProgress ? "bg-blue-100 dark:bg-blue-900/40" : ""}
            `}>
              <Image src={app.icon} alt={app.name} width={20} height={20} />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-gray-900 dark:text-white truncate">
                {app.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Stars level={app.level} size="sm" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 ml-2">
            {/* Lateral Code button */}
            <button
              onClick={(e) => { e.stopPropagation(); onViewCode(app); }}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-700 dark:hover:text-gray-200 transition-all"
              title="View Code"
            >
              <FaCode className="w-4 h-4" />
            </button>
            {/* State badge */}
            {isCompleted ? (
              <div className="flex items-center gap-1 px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-semibold">
                <FaCheck className="w-3 h-3" />
                Done
              </div>
            ) : isInProgress ? (
              <div className="flex items-center gap-1 px-2.5 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded-full text-xs font-semibold animate-pulse-subtle">
                <FaPlay className="w-2.5 h-2.5" />
                In Progress
              </div>
            ) : (
              <div className="flex items-center gap-1 px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-semibold">
                Start
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {app.description}
        </p>
      </div>
    </div>
  );
};

// ---------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------
function loadProgressMap(): Record<string, any> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

const Apps: React.FC<{ showSidebar?: boolean }> = ({ showSidebar = true }) => {
  const [progressMap, setProgressMap] = useState<Record<string, any>>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [appInViewer, setAppInViewer] = useState<App | null>(null);
  const [appInLesson, setAppInLesson] = useState<App | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [gamification, setGamification] = useState(loadGamification());
  const [achievementToast, setAchievementToast] = useState<Achievement | null>(null);

  // Load progress and gamification on mount and after lesson closes
  useEffect(() => {
    setProgressMap(loadProgressMap());
    const visit = recordVisit();
    setGamification(visit.state);
    if (visit.newAchievements.length > 0) {
      setAchievementToast(visit.newAchievements[0]);
      setTimeout(() => setAchievementToast(null), 5000);
    }
  }, []);

  useEffect(() => {
    if (!appInLesson) {
      setProgressMap(loadProgressMap());
      const visit = recordVisit();
      setGamification(visit.state);
      if (visit.newAchievements.length > 0) {
        setAchievementToast(visit.newAchievements[0]);
        setTimeout(() => setAchievementToast(null), 5000);
      }
    }
  }, [appInLesson]);

  // Filter logic
  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchesCategory =
        selectedCategory === null || (app.category && app.category.includes(selectedCategory));

      const matchesLevel = selectedLevel === null || app.level === selectedLevel;

      return matchesCategory && matchesLevel;
    });
  }, [selectedCategory, selectedLevel]);

  const appsByLevel = useMemo(() => {
    return filteredApps.reduce((acc: { [key: number]: App[] }, app: App) => {
      acc[app.level] = acc[app.level] || [];
      acc[app.level].push(app);
      return acc;
    }, {});
  }, [filteredApps]);

  const sortedLevels = Object.keys(appsByLevel).map(Number).sort((a, b) => a - b);

  // Flatten all apps in display order for tree state computation
  const orderedApps = useMemo(() => {
    return sortedLevels.flatMap(level => appsByLevel[level]);
  }, [sortedLevels, appsByLevel]);

  function getAppState(app: App, flatIndex: number): AppState {
    const progress = progressMap[app.name];
    if (progress) {
      const totalSteps = app.steps.length;
      const completedCount = progress.completedSteps?.length || 0;
      if (completedCount >= totalSteps) return "completed";
      if (progress.currentStepIdx > 0) return "in-progress";
    }
    return "available";
  }

  const openCodeViewer = (app: App) => setAppInViewer(app);
  const closeCodeViewer = () => setAppInViewer(null);
  const openLesson = (app: App) => setAppInLesson(app);
  const closeLesson = () => setAppInLesson(null);

  const scrollToApp = (appName: string) => {
    const element = document.getElementById(`app-${appName.toLowerCase().replace(/\s+/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      element.classList.add('ring-2', 'ring-blue-500');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-blue-500');
      }, 2000);
    }
    setIsSidebarOpen(false);
  };

  // Stats
  const totalCount = orderedApps.length;
  const completedCount = orderedApps.filter(a => getAppState(a, orderedApps.indexOf(a)) === "completed").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <div className="flex">
        {/* Sidebar */}
        {showSidebar && (
          <>
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
          </>
        )}

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">

            {/* Mobile Menu Button */}
            {showSidebar && (
              <div className="lg:hidden mb-6">
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <FaBars className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            )}

            {/* Achievement Toast */}
            {achievementToast && (
              <div className="fixed top-4 right-4 z-[70] animate-in slide-in-from-right-4 fade-in duration-300">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-yellow-300">
                  <span className="text-3xl">{achievementToast.icon}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Achievement Unlocked!</p>
                    <p className="font-bold text-lg">{achievementToast.title}</p>
                    <p className="text-sm opacity-90">{achievementToast.description}</p>
                  </div>
                </div>
              </div>
            )}

            <main id="apps" className="space-y-12">
              {sortedLevels.length > 0 ? (
                sortedLevels.map(level => {
                  const levelApps = appsByLevel[level];

                  return (
                    <section key={level}>
                      {/* Level Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold shadow-lg">
                          <FaStar className="w-3 h-3" />
                          Level {level} &mdash; {levelLabels[level] || `Level ${level}`}
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-indigo-200 to-transparent dark:from-indigo-800" />
                      </div>

                      {/* Projects Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {levelApps.map(app => {
                          const flatIdx = orderedApps.findIndex(a => a.name === app.name);
                          const state = getAppState(app, flatIdx);
                          return (
                            <ProjectCard
                              key={app.name}
                              app={app}
                              state={state}
                              onStartLesson={openLesson}
                              onViewCode={openCodeViewer}
                            />
                          );
                        })}
                      </div>
                    </section>
                  );
                })
              ) : (
                <div className="text-center py-20">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    No projects found
                  </h3>
                </div>
              )}
            </main>

            {/* Code Viewer */}
            {appInViewer && <CodeViewerOverlay app={appInViewer} onClose={closeCodeViewer} />}

            {/* Interactive Lesson */}
            {appInLesson && <InteractiveLesson app={appInLesson} onClose={closeLesson} />}
          </div>

          {/* Fixed Bottom Bar — Gamification Stats */}
          <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">

                {/* Level badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-md text-white text-xs sm:text-sm">
                  <FaGem className="w-3.5 h-3.5" />
                  <span className="font-bold">Level {gamification.level}</span>
                  <span className="text-[10px] sm:text-xs opacity-80 hidden sm:inline">{getLevel(gamification.xp).title}</span>
                </div>

                {/* XP badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg shadow-md text-white text-xs sm:text-sm">
                  <FaBolt className="w-3.5 h-3.5" />
                  <span className="font-bold">{gamification.xp} XP</span>
                </div>

                {/* XP Bar */}
                <div className="w-24 sm:w-32 lg:w-40">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${(() => {
                          const currentThreshold = LEVEL_THRESHOLDS.find(t => t.level === gamification.level)?.minXp || 0;
                          const nextThreshold = LEVEL_THRESHOLDS.find(t => t.level === gamification.level + 1)?.minXp || gamification.xp + 1;
                          return ((gamification.xp - currentThreshold) / (nextThreshold - currentThreshold)) * 100;
                        })()}%`
                      }}
                    />
                  </div>
                </div>

                {/* Streak badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-red-400 to-rose-500 rounded-lg shadow-md text-white text-xs sm:text-sm">
                  <FaFire className={`w-3.5 h-3.5 ${gamification.streak >= 3 ? "animate-pulse" : ""}`} />
                  <span className="font-bold">{gamification.streak}d</span>
                </div>

                {/* Projects badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-400 to-green-600 rounded-lg shadow-md text-white text-xs sm:text-sm">
                  <FaTrophy className="w-3.5 h-3.5" />
                  <span className="font-bold">{completedCount}/{totalCount}</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Apps;
