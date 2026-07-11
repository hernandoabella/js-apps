"use client";

import React, { useState, useCallback } from "react";

interface Toast {
  id: number;
  type: string;
  message: string;
}

const ToastNotifications = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((type: string, message: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 2500);
  }, []);

  const styles: Record<string, string> = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500 text-gray-800",
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-3">
        <div className="flex flex-wrap justify-center gap-2">
          <button onClick={() => addToast("success", "Saved!")} className="px-3 py-1.5 bg-green-500 text-white rounded-lg text-xs font-bold shadow hover:shadow-md transition-all">Success</button>
          <button onClick={() => addToast("error", "Failed!")} className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-xs font-bold shadow hover:shadow-md transition-all">Error</button>
          <button onClick={() => addToast("info", "Loading...")} className="px-3 py-1.5 bg-blue-500 text-white rounded-lg text-xs font-bold shadow hover:shadow-md transition-all">Info</button>
          <button onClick={() => addToast("warning", "Careful!")} className="px-3 py-1.5 bg-yellow-500 text-gray-800 rounded-lg text-xs font-bold shadow hover:shadow-md transition-all">Warning</button>
        </div>
        <div className="fixed bottom-4 right-4 space-y-2 z-50">
          {toasts.map(t => (
            <div key={t.id} className={`${styles[t.type]} text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg animate-bounce-subtle`}>{t.message}</div>
          ))}
        </div>
        {toasts.length === 0 && <p className="text-[10px] text-gray-400 italic">Click a button to show a toast</p>}
      </div>
    </div>
  );
};

export default ToastNotifications;
