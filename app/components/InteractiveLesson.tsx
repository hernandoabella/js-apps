"use client";

import React, { useState, useMemo, useCallback, useEffect, useRef } from "react";
import {
  FaTimes,
  FaCheck,
  FaLightbulb,
  FaRedo,
  FaPlay,
  FaHtml5,
  FaCss3,
  FaJs,
  FaForward,
  FaStar,
} from "react-icons/fa";
import { App } from "@/app/appData";
import { awardStepXP, awardProjectXP, Achievement } from "@/lib/gamification";

interface InteractiveLessonProps {
  app: App;
  onClose: () => void;
}

const langIcons = { html: FaHtml5, css: FaCss3, js: FaJs };
const langColors = { html: "text-orange-500", css: "text-blue-500", js: "text-yellow-500" };

const STORAGE_KEY = "jsapps-progress";

function loadProgress(appName: string) {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const all = JSON.parse(raw);
    return all[appName] || null;
  } catch {
    return null;
  }
}

function saveProgress(appName: string, data: { currentStepIdx: number; completedSteps: number[]; userHtml: string; userCss: string; userJs: string }) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const all = raw ? JSON.parse(raw) : {};
    all[appName] = data;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch { /* ignore */ }
}

function clearProgress(appName: string) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const all = JSON.parse(raw);
    delete all[appName];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch { /* ignore */ }
}

function Confetti() {
  const colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#A8E6CF", "#FF8A5C", "#7C4DFF"];
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 1.5 + Math.random() * 2,
    color: colors[i % colors.length],
    size: 6 + Math.random() * 8,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 animate-confetti"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
            borderRadius: "2px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotation}deg)`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti { animation: confetti-fall ease-out forwards; }
      `}</style>
    </div>
  );
}

export default function InteractiveLesson({ app, onClose }: InteractiveLessonProps) {
  const [initialized, setInitialized] = useState(false);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [userCode, setUserCode] = useState("");
  const [userHtml, setUserHtml] = useState("");
  const [userCss, setUserCss] = useState("");
  const [userJs, setUserJs] = useState("");
  const [feedback, setFeedback] = useState<{ ok: boolean; msg: string } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [showFinalPreview, setShowFinalPreview] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [xpPopup, setXpPopup] = useState<{ amount: number; x: number; y: number } | null>(null);
  const [achievementPopup, setAchievementPopup] = useState<Achievement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = loadProgress(app.name);
    if (saved) {
      setCurrentStepIdx(saved.currentStepIdx || 0);
      setCompletedSteps(new Set(saved.completedSteps || []));
      setUserHtml(saved.userHtml || "");
      setUserCss(saved.userCss || "");
      setUserJs(saved.userJs || "");
    }
    setInitialized(true);
  }, [app.name]);

  // Set starter code when step changes
  useEffect(() => {
    if (!initialized) return;
    const s = app.steps[currentStepIdx];
    if (!s || s.isFinal) return;

    // Restore user's previously written code for this language
    if (s.language === "html" && userHtml) setUserCode(userHtml);
    else if (s.language === "css" && userCss) setUserCode(userCss);
    else if (s.language === "js" && userJs) setUserCode(userJs);
    else setUserCode(s.starterCode || "");
  }, [currentStepIdx, initialized, app.steps, userHtml, userCss, userJs]);

  // Persist progress
  useEffect(() => {
    if (!initialized) return;
    saveProgress(app.name, {
      currentStepIdx,
      completedSteps: Array.from(completedSteps),
      userHtml,
      userCss,
      userJs,
    });
  }, [currentStepIdx, completedSteps, userHtml, userCss, userJs, app.name, initialized]);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = Math.max(ta.scrollHeight, 200) + "px";
    }
  }, [userCode]);

  const step = app.steps[currentStepIdx];
  const totalSteps = app.steps.length;
  const isFinal = step?.isFinal;
  const progress = totalSteps > 1 ? ((currentStepIdx) / (totalSteps - 1)) * 100 : 100;
  const Icon = langIcons[step?.language as keyof typeof langIcons] || FaHtml5;

  const handleCodeChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserCode(e.target.value);
    setFeedback(null);
  }, []);

  const checkAnswer = useCallback(() => {
    const currentStep = app.steps[currentStepIdx];
    if (!currentStep || currentStep.isFinal) return;

    const code = userCode.trim();
    if (!code) {
      setFeedback({ ok: false, msg: "Write some code first!" });
      return;
    }

    for (const check of currentStep.validation) {
      const missing = check.mustInclude.filter((pattern) => {
        const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(escaped, "i");
        return !regex.test(code);
      });
      if (missing.length > 0) {
        setFeedback({ ok: false, msg: check.message });
        return;
      }
    }

    setFeedback({ ok: true, msg: "Great job! That's correct." });
    setCompletedSteps((prev) => new Set(prev).add(currentStepIdx));

    if (currentStep.language === "html") setUserHtml(code);
    else if (currentStep.language === "css") setUserCss(code);
    else if (currentStep.language === "js") setUserJs(code);

    const result = awardStepXP();
    if (result.newAchievements.length > 0) {
      setAchievementPopup(result.newAchievements[0]);
      setTimeout(() => setAchievementPopup(null), 4000);
    }
  }, [currentStepIdx, userCode, app.steps]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const ta = e.currentTarget;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const newVal = userCode.substring(0, start) + "  " + userCode.substring(end);
      setUserCode(newVal);
      setFeedback(null);
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 2;
      });
    }
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      checkAnswer();
    }
  }, [userCode, checkAnswer]);

  const nextStep = useCallback(() => {
    if (currentStepIdx < totalSteps - 1) {
      setCurrentStepIdx((i) => i + 1);
      setFeedback(null);
      setShowHint(false);
    }
  }, [currentStepIdx, totalSteps]);

  const prevStep = useCallback(() => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx((i) => i - 1);
      setFeedback(null);
      setShowHint(false);
    }
  }, [currentStepIdx]);

  const resetStep = useCallback(() => {
    const s = app.steps[currentStepIdx];
    if (!s) return;
    setUserCode(s.starterCode || "");
    setFeedback(null);
    setShowHint(false);
  }, [currentStepIdx, app.steps]);

  const runFinalPreview = useCallback(() => {
    setShowFinalPreview(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);

    // Mark all steps as completed so project shows "completed" in sidebar
    const allStepIndices = app.steps.map((_, i) => i);
    saveProgress(app.name, {
      currentStepIdx: 0,
      completedSteps: allStepIndices,
      userHtml: userHtml || app.htmlSnippet || "",
      userCss: userCss || app.cssSnippet || "",
      userJs: userJs || app.jsSnippet || "",
    });

    const result = awardProjectXP();
    if (result.newAchievements.length > 0) {
      setAchievementPopup(result.newAchievements[0]);
      setTimeout(() => setAchievementPopup(null), 4000);
    }
  }, [app.name, app.steps, app.htmlSnippet, app.cssSnippet, app.jsSnippet, userHtml, userCss, userJs]);

  const combinedHTML = useMemo(() => {
    const html = userHtml || app.htmlSnippet;
    const css = userCss || app.cssSnippet;
    const js = userJs || app.jsSnippet;
    return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:sans-serif;background:#f5f5f5}${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;
  }, [userHtml, userCss, userJs, app.htmlSnippet, app.cssSnippet, app.jsSnippet]);

  const isStepCompleted = completedSteps.has(currentStepIdx);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-gray-50 dark:bg-gray-950">
      {showConfetti && <Confetti />}

      {achievementPopup && (
        <div className="fixed top-4 right-4 z-[70] animate-in slide-in-from-right-4 fade-in duration-300">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-yellow-300">
            <span className="text-3xl">{achievementPopup.icon}</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Achievement Unlocked!</p>
              <p className="font-bold text-lg">{achievementPopup.title}</p>
              <p className="text-sm opacity-90">{achievementPopup.description}</p>
            </div>
          </div>
        </div>
      )}

      <header className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="flex items-center gap-3 min-w-0">
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0">
            <FaTimes className="w-5 h-5 text-gray-500" />
          </button>
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white truncate">{app.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Step {currentStepIdx + 1} of {totalSteps}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="hidden sm:flex items-center gap-1 text-sm text-gray-500">
            <FaStar className="text-yellow-500" />
            {app.projectStars}
          </span>
          <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-semibold">
            Level {app.level}
          </span>
        </div>
      </header>

      <div className="h-1 bg-gray-200 dark:bg-gray-800">
        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT: Instructions */}
        <div className="lg:w-96 flex-shrink-0 overflow-y-auto bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-4 sm:p-6">
          <div className="flex gap-2 mb-6">
            {app.steps.map((s, i) => {
              const done = completedSteps.has(i);
              const active = i === currentStepIdx;
              return (
                <div
                  key={s.id}
                  className={`h-2 flex-1 rounded-full transition-all duration-300 ${done ? "bg-green-500" : active ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"}`}
                />
              );
            })}
          </div>

          {!isFinal ? (
            <>
              <div className="flex items-center gap-2 mb-4">
                <Icon className={`w-5 h-5 ${langColors[step.language]}`} />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">{step.language}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{step.description}</p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-4 border border-blue-100 dark:border-blue-900/50">
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">{step.instruction}</p>
              </div>

              {showHint && step.hint && (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 mb-4 border border-yellow-200 dark:border-yellow-900/50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center gap-2 mb-1">
                    <FaLightbulb className="text-yellow-500" />
                    <span className="font-semibold text-sm text-yellow-700 dark:text-yellow-300">Hint</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{step.hint}</p>
                </div>
              )}

              {feedback && (
                <div className={`rounded-xl p-4 mb-4 border ${feedback.ok ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900/50" : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900/50"} animate-in fade-in slide-in-from-top-2 duration-200`}>
                  <div className="flex items-center gap-2">
                    {feedback.ok ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
                    <span className={`text-sm font-medium ${feedback.ok ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}`}>{feedback.msg}</span>
                  </div>
                  {feedback.ok && (
                    <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold animate-in fade-in slide-in-from-left-2 duration-300">
                      <FaStar className="w-3 h-3" />
                      +15 XP
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {!isStepCompleted ? (
                  <button onClick={checkAnswer} className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200">
                    <FaCheck className="w-4 h-4" />
                    Check Answer
                    <kbd className="hidden sm:inline text-[10px] px-1.5 py-0.5 rounded bg-white/20 ml-1">Ctrl+Enter</kbd>
                  </button>
                ) : (
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl font-semibold">
                    <FaCheck className="w-4 h-4" />
                    Completed
                  </div>
                )}
                {!showHint && step.hint && !isStepCompleted && (
                  <button onClick={() => setShowHint(true)} className="flex items-center gap-2 px-4 py-2.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-xl font-semibold hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors">
                    <FaLightbulb className="w-4 h-4" />
                    Hint
                  </button>
                )}
                <button onClick={resetStep} className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <FaRedo className="w-4 h-4" />
                  Reset
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <FaCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">{step.description}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-8 max-w-md">{step.instruction}</p>
              <button onClick={runFinalPreview} className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                <FaPlay className="w-5 h-5" />
                Run Project
              </button>
              {showFinalPreview && (
                <div className="mt-6 flex flex-col items-center gap-2 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <FaCheck className="w-5 h-5" />
                    <span className="font-semibold">Project completed!</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/30 px-4 py-1.5 rounded-full">
                    <FaStar className="w-4 h-4" />
                    +100 XP
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* RIGHT: Code editor + Preview */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {!isFinal ? (
            <div className="flex-1 flex flex-col min-h-0 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${langColors[step.language]}`} />
                  <span className="text-sm font-mono font-semibold text-gray-600 dark:text-gray-400 uppercase">{step.language}</span>
                </div>
                <span className="text-xs text-gray-400">{userCode.split("\n").length} lines</span>
              </div>
              <textarea
                ref={textareaRef}
                value={userCode}
                onChange={handleCodeChange}
                onKeyDown={handleKeyDown}
                className="flex-1 w-full p-4 font-mono text-sm bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 border-none outline-none resize-none leading-relaxed tab-size-4 min-h-[200px]"
                spellCheck={false}
                placeholder="Write your code here... (Tab to indent, Ctrl+Enter to check)"
              />
            </div>
          ) : null}

          <div className="flex-1 flex flex-col min-h-0 bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <FaPlay className="w-3 h-3 text-green-500" />
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Preview</span>
              </div>
              <span className="text-xs text-gray-400">{isFinal ? "Final result" : "Preview updates on next step"}</span>
            </div>
            <div className="flex-1 bg-white">
              <iframe srcDoc={combinedHTML} className="w-full h-full border-none" title="Project Preview" sandbox="allow-scripts" />
            </div>
          </div>
        </div>
      </div>

      {!isFinal && (
        <footer className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <button onClick={prevStep} disabled={currentStepIdx === 0} className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors">
            Previous
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Step {currentStepIdx + 1}</span>
            <span className="text-gray-300 dark:text-gray-600">/</span>
            <span>{totalSteps}</span>
          </div>
          <button onClick={nextStep} disabled={!isStepCompleted} className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200">
            Next Step
            <FaForward className="w-3 h-3" />
          </button>
        </footer>
      )}

      {isFinal && (
        <footer className="flex items-center justify-center px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 gap-4">
          <button onClick={onClose} className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200">
            Back to Projects
          </button>
        </footer>
      )}
    </div>
  );
}
