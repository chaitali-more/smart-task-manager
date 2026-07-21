import React from 'react'
import TaskCard from '../TaskCard/TaskCard'
import { FiInbox } from 'react-icons/fi'

const TaskList = ({ tasks = [], deleteTask,toggleCheckbox }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="my-6 rounded-2xl bg-white/90 p-8 sm:p-10 text-center shadow-lg shadow-teal-900/5 backdrop-blur-xl border border-gray-100 dark:bg-gray-900/90 dark:border-gray-800 transition-all duration-300">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 dark:bg-gray-800 dark:text-teal-400 mb-3 shadow-inner">
          <FiInbox className="h-7 w-7" />
        </div>
        <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-gray-100 mb-1">
          No tasks yet
        </h3>
        <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-gray-400 max-w-xs mx-auto">
          Add a new task using the form above to get started with your list.
        </p>
      </div>
    )
  }

  return (
    <div className="my-6 flex flex-col gap-3">
      {tasks.map((task, index) => {
        return <TaskCard key={task.id || index} task={task} deleteTask={deleteTask} toggleCheckbox={toggleCheckbox} />
      })}
    </div>
  )
}

export default TaskList