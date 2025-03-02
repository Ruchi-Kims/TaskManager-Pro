import React, { useState } from 'react' // Filter.jsx = Affiche les tâches selon le filtre (toutes, terminées, en cours)

export default function Filter({tasks, setTasks, taskCompletion,deleteTask}) {

  const [filter ,setFilter] = useState("all")

  function filterTasks(){
    if(filter === "completed") return tasks.filter(task => task.completed)
    if(filter === "pending") return tasks.filter(task =>  !task.completed)
      return tasks;
  }
  return (
    <div className="mt-6">
      <div>
        <button onClick={() => setFilter("all")} className={`px-4 py-2 rounded-md mx-1 ${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } transition`}>Toutes</button>
        <button onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded-md mx-1 ${
            filter === "completed"
              ? "bg-green-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } transition`}>Terminées</button>
        <button onClick={() => setFilter("pending")}
          className={`px-4 py-2 rounded-md mx-1 ${
            filter === "pending"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } transition`}>En cours</button>
      </div>
        
        <ul className="space-y-3 my-4">
  {filterTasks().map((task) => (
    <li key={task.id}
    className="flex items-center justify-between bg-white p-3 shadow-md rounded-md"
    >
      <span className={`flex-1 ${
                task.completed ? " text-gray-500" : ""
              }`}>
      {task.text}
      </span>
      <div>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => taskCompletion(task.id)} className="w-5 h-5 cursor-pointer" 
      />
       <button onClick={() => deleteTask(task.id)} className="px-2 py-2 bg-red-500 text-white rounded-md hover:bg-blue-600 transition mx-4">🗑️ Supprimer</button>
      </div>
      
    </li>
  ))}
</ul>

        
    </div>

    
  )
}
