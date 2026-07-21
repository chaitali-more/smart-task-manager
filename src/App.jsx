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
          }
        }
       
        return task;

      });
    });
  };
  console.log(tasks);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-12">
        <Header />
        <TaskForm tasks={tasks} setTasks={setTasks} />
        <div className="flex gap-2 justify-between flex-wrap lg:flex-nowrap">
          <SearchBar />
          <FilterBar />
        </div>
        <TaskList tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} toggleCheckbox={toggleCheckbox} />
        <Statistics />
        <Footer />
      </div>
    </div>
  );
};

export default App;
