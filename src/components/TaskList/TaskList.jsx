import React from 'react'
import TaskCard from '../TaskCard/TaskCard'
import { FiInbox } from 'react-icons/fi'

const TaskList = ({ tasks = [], }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="my-6 rounded-2xl bg-white/90 p-8 sm:p-12 text-center shadow-lg shadow-teal-900/5 backdrop-blur-xl border border-gray-100 dark:bg-gray-900/90 dark:border-gray-800 transition-all duration-300">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-teal-500/10 to-emerald-500/10 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400 mb-4 shadow-inner">
          <FiInbox className="h-8 w-8" />
        </div>
        <h3 className="text-base sm:text-xl font-bold text-slate-800 dark:text-gray-100 mb-1.5">
          No tasks found
        </h3>
        <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-gray-400 max-w-xs mx-auto">
          Add a new task using the form above to start organizing your day.
        </p>
      </div>
    );
  }

  return (
    <div className="my-6 flex flex-col gap-3">
      <div className="flex items-center justify-between px-1">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">
          Tasks ({tasks.length})
        </span>
      </div>
      {tasks.map((task, index) => (
        <TaskCard
          key={task.id || index}
          task={task}
        />
      ))}
    </div>
  );
};

export default TaskList