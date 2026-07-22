import React from "react";
import { FiCheckSquare, FiMoon, FiSun } from "react-icons/fi";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="mb-4 sm:mb-6 rounded-2xl bg-white/90 p-3.5 sm:p-5 shadow-lg shadow-teal-900/5 backdrop-blur-xl border border-gray-100 dark:bg-gray-900/90 dark:border-gray-800 dark:shadow-none transition-all duration-300">
      {/* Top Bar: Brand Icon + Title + Action Button */}
      <div className="flex items-center justify-between gap-2">
        {/* Brand Icon & Title */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-500 via-emerald-500 to-cyan-500 text-white shadow-md shadow-teal-500/20 shrink-0 transition-transform duration-300 hover:scale-105">
            <FiCheckSquare className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <h1 className="bg-gradient-to-r from-slate-900 via-teal-900 to-emerald-800 bg-clip-text text-base sm:text-2xl md:text-3xl font-extrabold tracking-tight text-transparent dark:from-white dark:via-teal-100 dark:to-emerald-300 truncate">
            <span className="hidden sm:inline">Smart </span>Task Manager
          </h1>
        </div>

        {/* Action Controls */}
        <button
          type="button"
          onClick={toggleDarkMode}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition-all duration-300 hover:bg-slate-800 active:scale-95 dark:bg-teal-600 dark:hover:bg-teal-500 cursor-pointer shrink-0"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <>
              <FiSun className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-300" />
              <span className="hidden min-[360px]:inline">Light Mode</span>
            </>
          ) : (
            <>
              <FiMoon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-teal-200" />
              <span className="hidden min-[360px]:inline">Dark Mode</span>
            </>
          )}
        </button>
      </div>

      {/* Subtitle */}
      <p className="mt-2 text-[11px] sm:text-sm font-medium text-slate-500 dark:text-gray-400">
        Organize, prioritize, and accomplish your goals effortlessly
      </p>
    </header>
  );
};

export default Header;