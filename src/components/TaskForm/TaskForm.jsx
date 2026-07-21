import React, { useState } from "react";
import { FiPlusCircle, FiList } from "react-icons/fi";

const TaskForm = ({ tasks, setTasks }) => {
  const [taskvalue, setTaskValue] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: taskvalue,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
    setTaskValue("")
  };

  return (
    <div className="mb-6 rounded-2xl bg-white/90 p-5 sm:p-6 shadow-lg shadow-teal-900/5 backdrop-blur-xl border border-gray-100 transition-all duration-300 dark:bg-gray-900/90 dark:border-gray-800 dark:shadow-none">
      <div className="flex items-center gap-2 mb-4 text-slate-800 dark:text-gray-100 font-semibold text-base sm:text-lg">
        <FiList className="h-5 w-5 text-teal-600 dark:text-teal-400" />
        <h2>Add New Task</h2>
      </div>

      <form
        onSubmit={addTask}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
      >
        <div className="relative flex-1">
          <FiPlusCircle className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-gray-500 transition-colors pointer-events-none" />
          <input
            type="text"
            name="task"
            value={taskvalue}
            placeholder="What needs to be done?"
            onChange={(e) => setTaskValue(e.target.value)}
            className="w-full rounded-xl bg-slate-50 dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700/80 pl-11 pr-4 py-3.5 text-sm font-medium text-slate-800 dark:text-gray-100 placeholder-slate-400 dark:placeholder-gray-500 transition-all duration-200 focus:bg-white dark:focus:bg-gray-800 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:focus:ring-teal-500/20 outline-none"
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 hover:from-teal-500 hover:via-emerald-500 hover:to-teal-600 text-white font-semibold px-6 py-3.5 text-sm shadow-md shadow-teal-600/20 transition-all duration-300 hover:shadow-lg hover:shadow-teal-600/30 active:scale-95 cursor-pointer dark:from-teal-500 dark:via-emerald-500 dark:to-teal-600 dark:hover:from-teal-400 dark:hover:via-emerald-400 dark:hover:to-teal-500 sm:w-auto w-full"
        >
          <FiPlusCircle className="h-5 w-5" />
          <span>Add Task</span>
        </button>
      </form>

    </div>
  );
};

export default TaskForm;
