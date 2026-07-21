import React, { useId } from 'react'
import { FiCalendar, FiClock, FiEdit3, FiTrash2 } from 'react-icons/fi'

const TaskCard = ({ task,deleteTask,toggleCheckbox }) => {
  const { title, createdAt, completed,id } = task;
  const idCard = useId();

  return (
    <div className="group rounded-2xl bg-white/90 p-4 sm:p-5 shadow-lg shadow-teal-900/5 backdrop-blur-xl border border-gray-100 dark:bg-gray-900/90 dark:border-gray-800 hover:shadow-xl hover:border-teal-500/30 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Checkbox & Title */}
        <div className="flex items-center gap-3.5 flex-1 min-w-0">
          <input
            type="checkbox"
            id={idCard}
            defaultChecked={completed}
            onChange={(e)=>{
              toggleCheckbox(id,e.target.checked)
            }}
            className="h-5 w-5 rounded-md border-slate-300 dark:border-gray-600 text-teal-600 focus:ring-teal-500/20 accent-teal-600 cursor-pointer transition-transform active:scale-95 shrink-0"
          />
          <label
            htmlFor={idCard}
            className={`text-lg font-semibold cursor-pointer select-none transition-colors duration-200 break-words ${
              completed
                ? 'line-through text-slate-400 dark:text-gray-500'
                : 'text-slate-800 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400'
            }`}
          >
            {title}
          </label>
        </div>

        {/* Status Badge & Actions */}
        <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-auto flex-wrap sm:flex-nowrap">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              completed
                ? 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                : 'bg-amber-100/80 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${completed ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
            Status : {completed ? "Completed" : "Pending"}
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg text-slate-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/50 border border-slate-200/80 dark:border-gray-700/80 transition-all cursor-pointer"
            >
              <FiEdit3 className="h-3.5 w-3.5" />
              <span>Edit</span>
            </button>

            <button
              type="button"
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg text-slate-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 border border-slate-200/80 dark:border-gray-700/80 transition-all cursor-pointer"
              onClick={()=>{
                console.log(id);
                
                deleteTask(id)}}
           >
              <FiTrash2 className="h-3.5 w-3.5" />
              <span>Delete</span>
            </button>
          </div>
        </div>

      </div>

      {/* Date info */}
      {createdAt && (
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-gray-800/80 flex items-center text-xs font-medium text-slate-500 dark:text-gray-400 gap-1.5">
          <FiCalendar className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
          <span>Created At: {createdAt}</span>
        </div>
      )}
    </div>
  )
}

export default TaskCard