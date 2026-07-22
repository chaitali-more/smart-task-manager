import React, { useState } from "react";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterBar from "./components/FilterBar/FilterBar";
import TaskList from "./components/TaskList/TaskList";
import Statistics from "./components/Statistics/Statistics";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  };

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  let filteredTasks = tasks;

  if (search.trim()) {
    filteredTasks = filteredTasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (filter === "completed") {
    filteredTasks = filteredTasks.filter((task) => task.completed);
  }

  if (filter === "pending") {
    filteredTasks = filteredTasks.filter((task) => !task.completed);
  }

  const editTask = (taskEdit) => {
    setEditingTask(taskEdit);
    const formElement = document.getElementById("task-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  const toggleCheckbox = (id, val) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: val,
          };
        }
        return task;
      });
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 pt-4 sm:pt-8 pb-12">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <TaskForm
          tasks={tasks}
          setTasks={setTasks}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-between">
          <SearchBar setSearch={setSearch} search={search} />
          <FilterBar setFilter={setFilter} filter={filter} />
        </div>
        <TaskList
          tasks={filteredTasks}
          setTasks={setTasks}
          deleteTask={deleteTask}
          toggleCheckbox={toggleCheckbox}
          editTask={editTask}
          filteredTasks={filteredTasks}
        />
        <Statistics pendingTasks={pendingTasks} completedTasks={completedTasks} totalTasks={totalTasks} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
