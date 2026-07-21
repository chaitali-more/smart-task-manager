import React, { useState } from "react";
import { 
  FiCheckSquare, 
  FiSun, 
  FiMoon 
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { LuSparkles } from "react-icons/lu";

const Header = () => {
  
  return (
    <header className="mb-6 rounded-2xl bg-white/90 p-5 shadow-lg shadow-teal-900/5 backdrop-blur-xl border border-gray-100 transition-all duration-300 dark:bg-gray-900/90 dark:border-gray-800 dark:shadow-none">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Brand & Title */}
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-500 via-emerald-500 to-cyan-500 text-white shadow-md shadow-teal-500/20 transition-transform duration-300 hover:scale-105">
            <FiCheckSquare className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="bg-gradient-to-r from-slate-900 via-teal-900 to-emerald-800 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent dark:from-white dark:via-teal-100 dark:to-emerald-300 sm:text-3xl">
                Smart Task Manager
              </h1>
              
            </div>
            <p className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-gray-400 sm:text-sm">
              Organize, prioritize, and accomplish your goals effortlessly
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* Dark Mode Toggle Button */}
          <button
          
            type="button"
            className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition-all duration-300 hover:bg-slate-800 hover:shadow-lg active:scale-95 dark:bg-teal-600 dark:hover:bg-teal-500 cursor-pointer"
          >
           
              <>
                <FiMoon className="h-4 w-4 text-teal-200" />
                <span>Dark Mode</span>
              </>
        
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;