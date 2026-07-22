import React from "react";
import { FiGrid, FiClock, FiCheckCircle } from "react-icons/fi";

const FilterBar = ({ filter = "all", setFilter }) => {
  const options = [
    { id: "all", label: "All", icon: FiGrid },
    { id: "pending", label: "Pending", icon: FiClock },
    { id: "completed", label: "Completed", icon: FiCheckCircle },
  ];

  return (
    <div className="flex items-center gap-1 p-1 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm shrink-0 w-full sm:w-auto">
      {options.map(({ id, label, icon: Icon }) => {
        const isActive = filter === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setFilter && setFilter(id)}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-slate-900 text-white shadow-md dark:bg-teal-600 dark:text-white"
                : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-gray-100 hover:bg-slate-100 dark:hover:bg-gray-800/60"
            }`}
          >
            <Icon
              className={`h-3.5 w-3.5 ${
                isActive ? "text-teal-300 dark:text-teal-200" : "text-slate-400 dark:text-gray-500"
              }`}
            />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
