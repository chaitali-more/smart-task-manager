import React, { useEffect, useRef, useState } from "react";
import { FiPlusCircle, FiList, FiXCircle } from "react-icons/fi";
import {  useTaskDetails } from "../../context/TaskContext";

const TaskForm = ({  editingTask, setEditingTask }) => {
  const {tasks, setTasks} = useTaskDetails();
  const [taskvalue, setTaskValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editingTask) {
      setTaskValue(editingTask.title);
      inputRef.current?.focus();
    }
  }, [editingTask]);

  const addTask = (e) => {
    e.preventDefault();
    inputRef.current?.focus();
    if (!taskvalue.trim()) {
      setError(true);
      return;
    }
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: taskvalue,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
    setError(false);
    setTaskValue("");
  };

  const editTask = (e) => {
    e.preventDefault();
    if (!taskvalue.trim()) {
      setError(true);
      return;
    }
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === editingTask.id) {
          return {
            ...task,
            title: taskvalue,
          };
        }
        return task;
      });
    });

    setError(false);
    setTaskValue("");
    setEditingTask(null);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setTaskValue("");
    setError(false);
  };

  return (
    <div
      id="task-form"
      className="mb-4 sm:mb-6 rounded-2xl bg-white/90 p-4 sm:p-6 shadow-lg shadow-teal-900/5 backdrop-blur-xl border border-gray-100 transition-all duration-300 dark:bg-gray-900/90 dark:border-gray-800 dark:shadow-none"
    >
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2 text-slate-800 dark:text-gray-100 font-semibold text-base sm:text-lg">
          <FiList className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0" />
          <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>
        </div>
        {editingTask && (
          <button
            type="button"
            onClick={handleCancelEdit}
            className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer"
          >
            <FiXCircle className="h-4 w-4" />
            <span>Cancel</span>
          </button>
        )}
      </div>

      <form
        onSubmit={editingTask ? editTask : addTask}
        className="flex flex-col sm:flex-row items-stretch gap-3"
      >
        <div className="relative flex-1">
          <FiPlusCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-gray-500 pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            name="task"
            value={taskvalue}
            placeholder="What needs to be done?"
            onChange={(e) => setTaskValue(e.target.value)}
            className="w-full rounded-xl bg-slate-50 dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700/80 pl-10 pr-4 py-3 text-sm font-medium text-slate-800 dark:text-gray-100 placeholder-slate-400 dark:placeholder-gray-500 transition-all duration-200 focus:bg-white dark:focus:bg-gray-800 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:focus:ring-teal-500/20 outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 hover:from-teal-500 hover:via-emerald-500 hover:to-teal-600 text-white font-semibold px-5 py-3 text-sm shadow-md shadow-teal-600/20 transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer flex-1 sm:flex-initial shrink-0"
          >
            <FiPlusCircle className="h-4 w-4" />
            <span>{editingTask ? "Update Task" : "Add Task"}</span>
          </button>
        </div>
      </form>
      {error && (
        <p className="mt-2 text-xs sm:text-sm font-medium text-rose-500">
          * Please enter a task.
        </p>
      )}
    </div>
  );
};

export default TaskForm;
