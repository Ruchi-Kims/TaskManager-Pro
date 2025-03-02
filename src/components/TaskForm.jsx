import React, { useState, useEffect } from "react";   //TaskForm.jsx = Ajoute des tâches + stocke l'état
import Filter from "./Filter";

export default function TaskForm() {

  const [task, setTask] = useState("") // stock dans le input
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  function handleSubmit(event){
        event.preventDefault();
        if (task.trim() === "") return;
        const newTask = { id: Date.now(), text: task, completed: false };
        setTasks([...tasks, newTask])
        setTask("")
  }

  function taskCompletion(id){
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-red-500 rounded-lg shadow-md">
      <form  onSubmit={handleSubmit} className="flex gap-3">
        <input 
        id='task'
        name='task'
        type="text"
        placeholder='Add your task'
        value={task}
        onChange={(e) => setTask(e.target.value)} 
        className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>

        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">+ Add task</button>
      </form>

      

      <Filter tasks={tasks} setTasks={setTasks} taskCompletion={taskCompletion} deleteTask={deleteTask}  />

     
      
      </div>

      
  )
}
