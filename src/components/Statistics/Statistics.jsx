import React from "react";
import { FiList, FiClock, FiCheckCircle, FiPieChart } from "react-icons/fi";

const Statistics = ({ pendingTasks = 0, completedTasks = 0, totalTasks = 0 }) => {
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="mt-6 sm:mt-8 rounded-2xl bg-white/90 p-4 sm:p-5 shadow-lg shadow-teal-900/5 backdrop-blur-xl border border-gray-100 dark:bg-gray-900/90 dark:border-gray-800 transition-all duration-300">
      <div className="flex items-center justify-between mb-3.5 sm:mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 sm:p-2 rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-950/50 dark:text-teal-400">
            <FiPieChart className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-gray-100">
            Task Overview
          </h3>
        </div>
        <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-100/70 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">
          {completionRate}% Completed
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {/* Total Tasks Card */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-slate-100 bg-slate-50/50 dark:bg-gray-800/50 dark:border-gray-800 transition-transform duration-200 hover:scale-[1.01]">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-md shrink-0">
              <FiList className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-gray-400">Total Tasks</p>
              <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">{totalTasks}</h4>
            </div>
          </div>
        </div>

        {/* Pending Tasks Card */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-amber-100 bg-amber-50/40 dark:bg-amber-950/20 dark:border-amber-900/30 transition-transform duration-200 hover:scale-[1.01]">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md shadow-amber-500/20 shrink-0">
              <FiClock className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs font-medium text-amber-700 dark:text-amber-400">Pending</p>
              <h4 className="text-lg sm:text-xl font-extrabold text-amber-900 dark:text-amber-200">{pendingTasks}</h4>
            </div>
          </div>
        </div>

        {/* Completed Tasks Card */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 dark:bg-emerald-950/20 dark:border-emerald-900/30 transition-transform duration-200 hover:scale-[1.01]">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20 shrink-0">
              <FiCheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs font-medium text-emerald-700 dark:text-emerald-400">Completed</p>
              <h4 className="text-lg sm:text-xl font-extrabold text-emerald-900 dark:text-emerald-200">{completedTasks}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-gray-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-500 ease-out"
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;