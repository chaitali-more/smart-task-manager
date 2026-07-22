import React from "react";
import { FiSearch, FiX } from "react-icons/fi";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative flex-1 w-full min-w-0 sm:min-w-[240px]">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400 dark:text-gray-500">
        <FiSearch className="h-4 w-4" />
      </div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-white py-2.5 sm:py-3 pl-10 pr-10 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all duration-200 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-teal-500 dark:focus:ring-teal-500/20"
      />
      {search && (
        <button
          type="button"
          onClick={() => setSearch("")}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-150 cursor-pointer"
          aria-label="Clear search"
        >
          <FiX className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
